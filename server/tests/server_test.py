import os
import unittest
import psycopg2
import server

db = psycopg2.connect("dbname=jokeLibrary user=postgres")
cur = db.cursor()

class BasicTests(unittest.TestCase):
    def setUp(self):
        app.config['TESTING'] = True
        app.config['WTF_CSRF_ENABLED'] = False
        app.config['DEBUG'] = False
        self.app = server.test_client()
        # connect to the database, create test table and test data       
        cur.execute("CREATE TABLE jokeTest (id SERIAL primary key not null, content varchar not null);")
        cur.execute("INSERT INTO jokeTest(content) VALUES('test joke');")
        db.commit()




    def tearDown(self):
        cur.execute("DROP TABLE jokeTest")
        db.commit()

    def getAllJokes(self):
        # response = 
        print("test")
        

if __name__ == "__main__":
    unittest.main()