from django.db import models

from picklefield.fields import PickledObjectField
from detector.models import DetectorData

class AnomalyDetector(models.Model):
    '''Детектор аномалий'''
    model = PickledObjectField(null=True)

class AnomalyItem(models.Model):
    '''Показатель аномалии'''
    anomaly = models.IntegerField(default=1)
    data = models.OneToOneField(
        DetectorData, 
        verbose_name='Датчик', 
        related_name='is_anomaly', 
        on_delete=models.CASCADE
    )