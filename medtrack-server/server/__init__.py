from flask import Flask, jsonify
from flask_cors import CORS

cors = CORS()

def create_app():
    app = Flask(__name__)
    cors.init_app(app)

    from server.users.routes import users
    app.register_blueprint(users)

    return app