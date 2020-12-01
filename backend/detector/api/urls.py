from rest_framework.routers import DefaultRouter
from django.urls import path

from .views import DetectorsViewSet, DetectorDataListView

urlpatterns = [
    path('detector/<int:pk>/', DetectorDataListView.as_view(), name='detector-data')
]

r = DefaultRouter()
r.register('detector', DetectorsViewSet, basename='detector')
urlpatterns += r.urls