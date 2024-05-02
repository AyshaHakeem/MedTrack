from flask import Blueprint, redirect, render_template, request

users = Blueprint('transactions', __name__)

# demo routing
@users.route("/api/login",  methods=["POST"])
def login():
    print(f'\n\n\n "login successful" \n\n\n')
    return "login successful"