from rest_framework import permissions, status
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.pagination import PageNumberPagination
from django.db.models import Prefetch

from .service import ListCreateViewSet, PaginationData
from .serializers import DetectorSerializer, DetectorDataSerializer
from detector.models import Detector, DetectorData
from .permissions import IsOwner

class DetectorsViewSet(ListCreateViewSet):
    '''
    Вывод собственных датчиков
    Создание нового датчика
    '''
    serializer_class = DetectorSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = PaginationData

    def get_queryset(self):
        return Detector.objects.filter(user=self.request.user)     

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class DetectorDataListView(ListAPIView):
    '''Вывод данных датчиков'''
    serializer_class = DetectorDataSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwner]
    pagination_class = PaginationData

    def get_queryset(self):
        return DetectorData.objects.filter(detector__id=int(self.kwargs['pk']))