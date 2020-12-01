from rest_framework import serializers

from detector.models import Detector, DetectorData

class UserSerializer

class DetectorSerializier(serializers.ModelSerializer):
    '''
    Сериализация и создание датчика
    '''
serializers.
    class Meta:
        model = Detector
        exclude = ['user']