#! /bin/bash


if [ -d "../backend" ]; then
    cd ../backend
    source env/bin/activate
    python manage.py test
fi

if [ -d "noaa-weather" ]; then
    cd noaa-weather/backend
    pip install -r requirements.txt
    python manage.py test 
fi 
