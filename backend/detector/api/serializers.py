from rest_framework import serializers

from detector.models import Detector, DetectorData

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

    class Meta:
        model = DetectorData
        exclude = ['detector', 'anomaly']