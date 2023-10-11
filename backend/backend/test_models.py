# tests/test_models.py
from django.test import TestCase
from backend.models import Station, Observation

class StationModelTest(TestCase):
    def test_str_representation(self):
        station = Station(id='ABC123', name='Station 1', latitude=40.7, longitude=-74.0)
        print(str(station))
        self.assertEqual(str(station), 'ABC123 - Station 1')

class ObservationModelTest(TestCase):
    def setUp(self):
        self.station = Station.objects.create(id='ABC123', name='Station 1', latitude=40.7, longitude=-74.0)

    def test_str_representation(self):
        observation = Observation(station=self.station, temperature=60, humidity=50, pressure=1013)
        self.assertEqual(str(observation), 'ABC123 - Station 1 - 60°F - 50% - 1013 hPa')
