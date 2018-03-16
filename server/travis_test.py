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

if __name__ == "__main__":
    unittest.main()