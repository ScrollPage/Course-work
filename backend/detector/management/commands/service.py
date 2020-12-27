from django.shortcuts import get_object_or_404

from sklearn.svm import OneClassSVM

from detector.models import DetectorData
from anomaly.models import AnomalyDetector, AnomalyItem

def create_detection_model():
        clf, fl = AnomalyDetector.objects.get_or_create(id=1)
        if fl:
                print('adsasd')
                clf.model = OneClassSVM(gamma='auto')
                clf.save()
        return clf

def create_anomaly_items(pred):
        first = DetectorData.objects.first().id
        last = DetectorData.objects.last().id
        for i in range(first, last+1):
                try:
                        data = DetectorData.objects.get(id=i)
                except DetectorData.DoesNotExist:
                        pass
                else:
                        item, _ = AnomalyItem.objects.get_or_create(data=data)
                        item.anomaly = pred[i-first]
                        item.save()