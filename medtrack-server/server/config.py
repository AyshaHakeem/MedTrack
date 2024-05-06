import os
from dotenv import load_dotenv
import datetime

load_dotenv()
class Config:
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY')
    SQLALCHEMY_DATABASE_URI =  os.environ.get('SQLALCHEMY_DATABASE_URI')
    JWT_ACCESS_TOKEN_EXPIRES = datetime.timedelta(hours=1)
    SQLALCHEMY_TRACK_MODIFICATIONS = False