# models.py
from django.db import models

class Station(models.Model):
    id = models.CharField(max_length=10, primary_key=True)
    name = models.CharField(max_length=255)
    latitude = models.FloatField()
    longitude = models.FloatField()

class Observation(models.Model):
    station = models.ForeignKey(Station, on_delete=models.CASCADE)
    temperature = models.FloatField()
    humidity = models.FloatField()
    pressure = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)