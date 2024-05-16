from server import bcrypt
from server.models import User, CareCircle, UserMap

def hash_password(password):
        return bcrypt.generate_password_hash(password).decode('utf-8')
    
def check_password(hashed_pw, password):
    return bcrypt.check_password_hash(hashed_pw, password)

def get_user(filter_criteria):
      return User.query.filter_by(**filter_criteria).first()

