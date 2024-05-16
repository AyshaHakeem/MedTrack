from server import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True, port=8081)


# from flask import Flask, jsonify
# from flask_cors import CORS
# from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy.orm import DeclarativeBase
# from flask_bcrypt import Bcrypt
# from flask_jwt_extended import JWTManager
# from server.config import Config


# app = Flask(__name__)

# app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:21fc90hg@localhost/medtrack"
# cors = CORS(app)
# bcrypt = Bcrypt(app)
# db = SQLAlchemy(app)
# from server.models import User, CareCircle, Patient, MedicineDose, Medicine, MedicineLog, UserMap
# jwt = JWTManager(app)
    
# from server.users.routes import users

# if __name__ == '__main__':
#     app.run(debug=True, port=8080)