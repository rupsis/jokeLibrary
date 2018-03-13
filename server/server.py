import sys
import os
import json
from datetime import date, timedelta
from flask import Flask
from flask_cors import CORS
import psycopg2


# Database connection
db = psycopg2.connect("dbname=jokeLibrary user=postgres")
cur = db.cursor()


app = Flask(__name__)
CORS(app)

print("server running")