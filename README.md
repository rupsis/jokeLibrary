# jokeLibrary
A little library to keep all of your jokes.

# Server
To run the server you'll need the following dependancies:
* [PostgreSQL](https://www.postgresql.org/)
* Python [PostgreSQL Driver](http://initd.org/psycopg/docs/install.html#prerequisites):  `pip install psycopg2`
* [Flask](http://flask.pocoo.org/): `pip install Flask`


## Starting the server
My Local PostgreSQL server is configured to trust connections, to connect to local server, either configure you're server to trust local connections, or pass in the password to the database connection: `db = psycopg2.connect("dbname=jokeLibrary user=postgres, password=yourPassWord")`

To start the server, simple run `FLASK_APP=server.py flask run` on the command line