from flask import request, jsonify
from server import jwt
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity
from datetime import datetime, timedelta, timezone
import json

def generate_auth_token(id):
    access_token = create_access_token(identity=id)
    response = access_token
    return response

def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = generate_auth_token(id=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token 
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        return response
    except jwt.ExpiredSignatureError:
            return 'Signature expired. Please log in again.'
    except jwt.InvalidTokenError:
        return 'Invalid token. Please log in again.'
