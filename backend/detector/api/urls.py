from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path

from .views import DetectorsViewSet

urlpatterns = [
    
]

detectors = DetectorsViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

detectors_data = DetectorsViewSet.as_view({
    'get': 'get_data'
})

urlpatterns += format_suffix_patterns([
    path('detectors/', detectors, name='detectors'),
    path('detectors/<int:pk>/', detectors_data, name='detectors-data')
])