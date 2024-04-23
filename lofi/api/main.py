import os
from flask import Flask 
from spotify import Spotify


app = Flask(__name__)



app.config['SECRET_KEY'] = os.urandom(64)

client_id = "" 
client_secret = ""
redirect_uri = "http://localhost:3000"
scope = 'user-library-read,playlist-modify-private'

if __name__ == '__main__':
  app.run(debug=True)
