# jokeLibrary
A little library to keep all of your jokes.

# Server
To run the server you'll need the following dependancies:
* [PostgreSQL](https://www.postgresql.org/)
* Python [PostgreSQL Driver](http://initd.org/psycopg/docs/install.html#prerequisites):  `pip install psycopg2`
* [Flask](http://flask.pocoo.org/): `pip install Flask`

## setting up the database
In PostgreSQL Server (I recommend pgAdmin) create a database named `jokeLibrary`, and run the `table_creation.sql` to create and populate the joke table for the application. 

My Local PostgreSQL server is configured to trust connections, to connect to local server, either configure you're server to trust local connections, or pass in the password to the database connection: `db = psycopg2.connect("dbname=jokeLibrary user=postgres, password=yourPassWord")`

## Starting the server
To start the server, change directory to `/server` and run `FLASK_APP=run.py flask run` on the command line
*Note* On Windows, you'll have to `set FLASK_APP=run.py` then run `flask run`

## Starting the front end
to start the front end, `cd` into the `web` directory and:
1. `npm install`  to install all of the node modules
2. run `ng serve` to start the front end server
3. navigate to http://localhost:4200/ 

## Unit Test 
To run the unit tests, `cd` into the `/server` directory and run `python server_test.py` to run the unit tests