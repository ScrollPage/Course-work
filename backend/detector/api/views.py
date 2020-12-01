from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.db.models import Prefetch

from .service import PermissionSerializerListCreateViewSet
from .serializers import DetectorSerializer, DetectorDataSerializer
from detector.models import Detector, DetectorData

class DetectorsViewSet(PermissionSerializerListCreateViewSet):
    '''
    Вывод собственных датчиков
    Создание нового датчика
    Вывод информации с датчиков
    '''

    serializer_class = DetectorSerializer
    serializer_class_by_action = {
        'get_data': DetectorDataSerializer
    }
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        queryset = Detector.objects.filter(user=self.request.user)
        if self.action == 'get_data':
            queryset.prefetch_related(
                Prefetch(
                    'data',
                    queryset=DetectorData.objects.all() \
                        .defer(
                            'detector',
                            'anomaly'
                        )
                )
            )

        return queryset

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=False, methods=['get'])
    def get_data(self, request, *args, **kwargs):
        detector = self.get_object()
        data = detector.data.all()
        serializer = self.get_serializer(data, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)