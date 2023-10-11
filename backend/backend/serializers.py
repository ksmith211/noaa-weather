# serializers.py
from rest_framework import serializers
from .models import Station, Observation

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        fields = ['id', 'name', 'latitude', 'longitude']

class ObservationSerializer(serializers.ModelSerializer):
    station = StationSerializer(read_only=True)

    class Meta:
        model = Observation
        fields = ['station', 'temperature', 'humidity', 'pressure' ]
