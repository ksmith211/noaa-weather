#! /bin/bash


if [ -d "../frontend" ]; then
    cd ../frontend
    npm install
    npm test --watchAll
fi

if [ -d "noaa-weather" ]; then
    cd noaa-weather/frontend
    npm install
    npm test --watchAll
fi 
