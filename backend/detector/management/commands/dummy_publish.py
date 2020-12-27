from django.core.management.base import BaseCommand

from detector.models import Detector
from .service import create_detection_model

class Command(BaseCommand):
    help = 'Publishes a messages to the main chanell and creates a ano,y detection model'

    def add_arguments(self, parser):
        parser.add_argument('amount_data', type=int)

    def handle(self, *args, **options):
        create_detection_model()
        for detector in Detector.objects.all():
            for _ in range(options.get('amount_data', 0)):
                detector.trigger()