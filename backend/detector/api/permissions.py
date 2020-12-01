from rest_framework.permissions import BasePermission
from django.shortcuts import get_object_or_404

from detector.models import Detector

class IsOwner(BasePermission):
    '''Владелец ли'''

    def has_permission(self, request, view):
        detector = get_object_or_404(Detector, id=view.kwargs['pk'])
        return detector.user == request.user