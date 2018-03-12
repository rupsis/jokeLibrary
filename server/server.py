import sys
import json
from datetime import date, timedelta
from flask import Flask
from flask_cors import CORS
import psycopg2

# Database connection
conn = psycopg2.connect("dbname=test user=postgres")

print("hello world")