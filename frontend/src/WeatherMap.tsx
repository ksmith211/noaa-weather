import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import the Leaflet CSS
import L from 'leaflet'; // Import Leaflet
import weatherMarkerIcon from './weathericon.png'; // Replace with the actual path to your weather marker icon

// Define a custom icon
const weatherIcon = L.icon({
    iconUrl: weatherMarkerIcon,
    iconSize: [40, 40], // Adjust the size to match your icon
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  });

interface WeatherData {
    temperature: number;
    humidity: number;
    pressure: number;
  }
  
  interface StationData {
    id: string;
    name: string;
    position: {
      latitude: number;
      longitude: number;
    };
  }
  
  
  function Map() {
    const [stationData, setStationData] = useState<StationData[]>([]);
    const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  
    useEffect(() => {
      axios.get('https://api.weather.gov/stations')
        .then(response => {
          const data = response.data.features.map((feature: any) => ({
            id: feature.properties.stationIdentifier,
            name: feature.properties.name,
            position: {
              latitude: feature.geometry.coordinates[1],
              longitude: feature.geometry.coordinates[0]
            }
          }));
          setStationData(data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
    useEffect(() => {
      const ids = stationData.map(station => station.id).join(',');
      console.log(ids);
      axios.get(`https://api.weather.gov/stations/${ids}/observations/latest`)
        .then(response => {
          const data = response.data.map((observation: any) => ({
            temperature: observation.temperature.value,
            humidity: observation.relativeHumidity.value,
            pressure: observation.barometricPressure.value
          }));
          setWeatherData(data);
        })
        .catch(error => {
          console.error(error);
        });
    }, [stationData]);
  
    return (
      <MapContainer style={{ width: '100%', height: '400px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stationData.map(station => (
          <Marker 
                key={station.id} 
                position={[station.position.latitude, station.position.longitude]}
                icon={weatherIcon}
                >
            <Popup>
              <div>
                <p>Name: {station.name}</p>
                <p>ID: {station.id}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }
  
  export default Map;
  