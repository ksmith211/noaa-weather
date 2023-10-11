#! /bin/bash


if [ -d "../frontend" ]; then
    cd ../frontend
    npm install
    npm test --watchAll
fi

if [ -d "noaa-weather-pipeline" ]; then
    cd noaa-weather-pipeline/frontend
    npm install
    npm test --watchAll
fi
