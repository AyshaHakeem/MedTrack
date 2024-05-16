from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_cors import CORS, cross_origin
from server.config import Config


db = SQLAlchemy()
bcrypt = Bcrypt()
cors = CORS()
jwt = JWTManager()


def create_app(config_call=Config):
    app = Flask(__name__)
    cors.init_app(app)
    app.config.from_object(Config)
    bcrypt.init_app(app)
    db.init_app(app)
    jwt.init_app(app)
    # cors.init_app(app, resources={r"/api/*": {"origins": "*"}})

    # Register blueprints
    from server.users.routes import users
    from server.carecircle.routes import carecircle

    app.register_blueprint(users, url_prefix='/api')
    app.register_blueprint(carecircle, url_prefix='/api/carecircle')

    return app
