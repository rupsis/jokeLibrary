from project import app, db, cur

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