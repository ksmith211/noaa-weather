import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import Map from './WeatherMap';

jest.mock('axios');

const mockStationData = [
  {
    id: 'ABC123',
    name: 'Station 1',
    position: { latitude: 40.7, longitude: -74.0 }
  },
  {
    id: 'DEF456',
    name: 'Station 2',
    position: { latitude: 40.8, longitude: -74.1 }
  }
];

const mockWeatherData = [
  { temperature: 60, humidity: 50, pressure: 1013 },
  { temperature: 65, humidity: 55, pressure: 1015 }
];

// describe('Map component', () => {
//   beforeEach(() => {
//     axios.get.mockReset();
//     axios.get.mockResolvedValueOnce({ data: { features: mockStationData } });
//     axios.get.mockResolvedValueOnce({ data: mockWeatherData });
//   });

//   test('renders map and weather data', async () => {
//     const { getByText } = render(<Map />);
//     await waitFor(() => {
//       expect(getByText('Temperature: 60')).toBeInTheDocument();
//       expect(getByText('Humidity: 50')).toBeInTheDocument();
//       expect(getByText('Pressure: 1013')).toBeInTheDocument();
//       expect(getByText('Temperature: 65')).toBeInTheDocument();
//       expect(getByText('Humidity: 55')).toBeInTheDocument();
//       expect(getByText('Pressure: 1015')).toBeInTheDocument();
//     });
//   });

//   test('fetches station and weather data from NOAA API', async () => {
//     render(<Map />);
//     await waitFor(() => {
//       expect(axios.get.mock.calls[0][0]).toBe('https://api.weather.gov/stations');
//       expect(axios.get.mock.calls[1][0]).toBe('https://api.weather.gov/stations/ABC123,DEF456/observations/latest');
//     });
//   });
// });