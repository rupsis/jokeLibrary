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

# Get All
@app.route("/jokes", methods=['GET'])
def get_jokes():
    jokes = "test"
    return json.dumps(jokes)

# Get by id
@app.route("/jokes/<id>")
def get_jokes(id):
    pass

# Create
@app.route("/jokes", methods=['POST'])
def create_joke():
    pass

# Update
@app.route("/jokes/<id>")
def update_joke(id):
    pass

# Delete
@app.route("/jokes/<id>")
def delete_joke(id):
    pass


print("server running")