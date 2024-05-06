from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from server.config import Config


cors = CORS()
db = SQLAlchemy()
bcrypt = Bcrypt()
jwt = JWTManager()


def create_app(config_call=Config):
    app = Flask(__name__)
    app.config.from_object(Config)
    cors.init_app(app)
    bcrypt.init_app(app)
    db.init_app(app)
    jwt.init_app(app)

    from server.users.routes import users
    app.register_blueprint(users, url_prefix='/api')

    return app
