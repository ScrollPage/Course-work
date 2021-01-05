from rest_framework import serializers

from .models import AnomalyItem

class AnomalySeralizer(serializers.ModelSerializer):
    '''Сериализация аномалий'''

    class Meta:
        model = AnomalyItem
        fields = ['anomaly']