import sys
import os
import json
from datetime import date, timedelta
from flask import Flask, request, redirect, url_for
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
    cur.execute("SELECT * FROM jokes")
    jokes = cur.fetchall()
    return json.dumps(jokes)

# Get by id
@app.route("/jokes/<id>")
def get_joke(id):
    cur.execute("SELECT * FROM jokes WHERE Id = (%s)", id)
    joke = cur.fetchall()
    return json.dumps(joke)

# Create
@app.route("/jokes", methods=['POST'])
def create_joke():
    new_joke = request.get_json()
    cur.execute("INSERT INTO jokes(content) VALUES (%s)", (new_joke['joke'],))
    db.commit()
    return json.dumps(new_joke)

# Update
@app.route("/jokes/<id>", methods=['PUT'])
def update_joke(id):
    updated_joke = request.get_json()
    cur.execute("UPDATE jokes SET content  = (%s) WHERE Id = (%s)", (updated_joke['joke'], id))
    db.commit()
    return json.dumps(updated_joke)

# Delete
@app.route("/jokes/<id>", methods=['DELETE'])
def delete_joke(id):
    cur.execute("DELETE FROM jokes  WHERE id = (%s)", (id,))
    db.commit()
    return 'Success', 200, {'Content-Type': 'text/plain'}


print("server running")