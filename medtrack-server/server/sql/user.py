from server.models import User

def get_user(filter_criteria):
      return User.query.filter_by(**filter_criteria).first()