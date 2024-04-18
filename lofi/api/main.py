import os
from flask import Flask 
from spotify import Spotify


app = Flask(__name__)



app.config['SECRET_KEY'] = os.urandom(64)

client_id = "7be09a6ae9fb42f086717816cfa2e07d" 
client_secret = "2054b9bafbd0492490e64d50846e4934"
redirect_uri = "http://localhost:3000"
scope = 'user-library-read,playlist-modify-private'

if __name__ == '__main__':
  app.run(debug=True)