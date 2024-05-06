from flask import Blueprint, redirect, render_template, request, jsonify
from server import db
from server.utils import hash_password, check_password, get_user
from .auth import generate_auth_token, refresh_expiring_jwts
from flask_jwt_extended import jwt_required, unset_jwt_cookies, get_jwt_identity
from server.models import User
import json

users = Blueprint('users', __name__)

@users.route("/register",  methods=["POST"])
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
def login():
    data = request.get_json()

    if not data or 'email' not in data or 'password' not in data:
        return jsonify({"error": "Invalid request data"}), 400
    
    # get user
    filter_criteria = {'email': data['email']}
    user = get_user(filter_criteria)

    if user and check_password(user.password, data["password"]):
        return jsonify({"isSuccess": True, "token": generate_auth_token(user.id)}), 200
    
    return jsonify({"error": "Invalid email or password"}), 401
    

@users.route("/logout", methods=["POST"])
@jwt_required()
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response





