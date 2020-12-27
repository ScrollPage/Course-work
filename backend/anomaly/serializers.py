from rest_framework import serializers

from .models import AnomalyItem

class AnomalySeralizer(serializers.ModelSerializer):
    '''Сериализация аномалий'''
    anomaly = serializers.IntegerField()
    class Meta:
        model = AnomalyItem
        fields = ['anomaly']