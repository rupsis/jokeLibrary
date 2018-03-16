import os
import unittest
import psycopg2
import json
from project import create_app

class BasicTests(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.client = self.app.test_client

    def tearDown(self):
        pass

    def testGetJoke(self):
        res = self.client().get('/jokes/1')
        self.assertIn('[[1, "What did one toilet say to the other toilet? You look flushed!"]]', str(res.data))
        print(res)

if __name__ == "__main__":
    unittest.main()