from django.contrib import admin
from django.urls import path, include

from .yasg import urlpatterns as doc_urls

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/', include('detector.api.urls')),

    path('api-auth/', include('rest_framework.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('silk/', include('silk.urls')),
]

urlpatterns += doc_urls