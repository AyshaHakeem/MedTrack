from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from server import db
from server.models import User, CareCircle, UserMap
from server.service.auth import refresh_expiring_jwts
# from server.utils import get_carecircles
from server.service.carecircle import get_carecircles

users = Blueprint('users', __name__)
carecircle = Blueprint('carecircle', __name__)

@carecircle.route('/', methods=('GET', 'POST'))
@jwt_required
def create():
    user_id = get_jwt_identity()
    if request.method == 'POST':
        try:
            data = request.get_json()

            # create a new carecircle
            new_carecircle = CareCircle(
                name= data.name
            )
            db.session.add(new_carecircle)
            db.session.flush()

            # Create a UserMap linking the current user to the new CareCircle
            user_map = UserMap(
                user_id=user_id,
                carecircle_id=new_carecircle.id
            )
            db.session.add(user_map)

            db.session.commit()
            return jsonify({"isSuccess": True, "msg": "Carecircle successfully created"}), 200
        
        except Exception as e:
            db.session.rollback()
            return jsonify({"error": str(e)}), 500
    
    if request.method == 'GET':
        try:
            filter_criteria = {user_id:user_id}
            carecircles = get_carecircles(filter_criteria)
            return jsonify({"isSuccess": True, "carecircles": carecircles, "msg": "Fetch carecircle details"}), 200
        except Exception as e:
            return jsonify({"error": "An unexpected error occurred"}), 500


@carecircle.after_request
@jwt_required()
def refresh_expiring(response):
    return refresh_expiring_jwts(response)


# route to create carecircle