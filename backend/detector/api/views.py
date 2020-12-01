from rest_framework.generics import ListAPIView
from rest_framework import permissions
from rest_framework.decorators import action

from .service import PermissionListCreateViewSet
from detector.models import Detector

class DetectorsListView(PermissionListCreateViewSet):
    '''
    Вывод собственных дачиков
    Создание нового датчика
    Вывод информации с датчиков
    '''

    serializer_class = 
    permission_classes = [permissions.AllowAny]
    permission_classes_by_action = {
        'create': [permissions.IsAuthenticated]
    }

    def get_queryset(self):
        return Detector.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=False, methods=['get'])
    def get_data(self, request, *args, **kwargs):


    