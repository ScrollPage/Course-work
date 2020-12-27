from django.core.management.base import BaseCommand

from detector.models import DetectorData
from .service import create_detection_model, create_anomaly_items

class Command(BaseCommand):
    help = 'Publishes a messages to the main chanell and creates a ano,y detection model'

    def handle(self, *args, **options):
        clf = create_detection_model()
        DetectorData.objects.select_for_update()
        data = DetectorData.get_arr_data()
        clf.model.fit(data)
        pred = clf.model.predict(data)
        create_anomaly_items(pred)