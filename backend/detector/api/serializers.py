from rest_framework import serializers

from detector.models import Detector, DetectorData
from anomaly.serializers import AnomalySeralizer

class DetectorSerializer(serializers.ModelSerializer):
    '''
    Сериализация и создание датчика
    '''

    class Meta:
        model = Detector
        exclude = ['user']

class DetectorDataSerializer(serializers.ModelSerializer):
    '''
    Сериализация данных датчиков 
    '''
    is_anomaly = AnomalySeralizer()
    class Meta:
        model = DetectorData
        exclude = ['detector']