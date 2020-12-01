from django.core.management.base import BaseCommand

from detector.models import Detector

class Command(BaseCommand):
    help = 'Publishes a messages to the main chanell'

    def add_arguments(self, parser):
        parser.add_argument('amount_data', type=int)

    def handle(self, *args, **options):
        for detector in Detector.objects.all():
            for _ in range(options.get('amount_data', 0)):
                detector.trigger()