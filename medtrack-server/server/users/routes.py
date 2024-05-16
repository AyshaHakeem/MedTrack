from flask import Blueprint, redirect, render_template, request, jsonify
from server import db
from server.utils import hash_password, check_password, get_user
from ..service.auth import generate_auth_token, refresh_expiring_jwts
from flask_jwt_extended import jwt_required, unset_jwt_cookies
from server.models import User
from flask_cors import cross_origin

users = Blueprint('users', __name__)

@users.route("/register",  methods=["POST"])
@cross_origin()  
def register():
    try:
        data = request.get_json()
        # validation
        if 'name' not in data or 'email' not in data or 'password' not in data:
                return jsonify({"error": "Missing required fields"}), 400

        # check for existing user
        filter_criteria = {'email': data['email']}
        user = get_user(filter_criteria)
        if user:
            return jsonify({"isSuccess": False, "error": "User with the email already exists"}), 400
        
        hashed_password = hash_password(data['password'])
        # create user and add to database
        new_user = User(
                name=data['name'],
                email=data['email'], 
                password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"isSuccess": True, "msg": "User successfully created"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

@users.route("/login",  methods=["POST"])
@cross_origin()  
def login():
    try:
        data = request.get_json()

        if not data or 'email' not in data or 'password' not in data:
            return jsonify({"error": "Invalid request data"}), 400
        
        # get user record
        filter_criteria = {'email': data['email']}
        user = get_user(filter_criteria)

        if not user:
            return jsonify({"error": "User not found"}), 404

        if not check_password(user.password, data["password"]):
            return jsonify({"error": "Invalid password"}), 401

        if user:
            # Serialize user object JSON-compatible data
            user_data = {
                "id": user.id,
                "email": user.email,
                "name": user.name
            }

        return jsonify({"isSuccess": True, "token": generate_auth_token(user.id), "user": user_data}), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

    
@users.route("/logout", methods=["POST"])
@jwt_required()
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

# @users.route("/profile", methods=["GET"])
# @jwt_required()
# def view_profile():
#     current_user = get_jwt_identity()
#     response_body = {
#         "cur":current_user,
#         "name": "Nagato",
#         "about" :"Hello! I'm a full stack developer that loves python and javascript"
#     }
#     return response_body






