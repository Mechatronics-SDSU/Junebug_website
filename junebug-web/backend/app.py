from flask import Flask, redirect, render_template, url_for
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
import json

# create an instance of the flask class 
api = Flask(__name__)
title = "Database pull test"
#---------------mongodb setup and db/collections-------------------------
client = MongoClient('mongodb+srv://Junebug:Junebug101@junebug0.3ccxx.mongodb.net/test?retryWrites=true&w=majority')
#specify what databases
jb = client.get_database('Junebug')
#specify what collections
user = jb.get_collection('Users')
rest = jb.get_collection('Restaurants')
robots = jb.get_collection('Robots')

#-------------flask mixed with mongodb functions-------------------
#



# # create user rough draft, no certification
# @app.route('/createuser/')
# def adduser(firstName, lastName, email, password, phoneNum, address):
#     user.insert_one({"firstName": firstName.lower(), "lastName": lastName.lower(), "email": email.lower(), "password": password, "phoneNum": phoneNum.lower(), "address": address.lower()})
#     return redirect(url_for('getnames'))

# # adding user to the database
# @app.route('/addname/<name>/')
# def addname(user):
#     user.insert_one({"name": user.lower()})
#     return redirect(url_for('getnames'))
@api.route('/')
def flaskpage():
    fp = "Welcome!!! I dont know why i cant return the db documents<br> /getrestnames<br> /profile"
    return fp

# getting all names from the database
@api.route('/getrestnames')
def getrestaurantnames():
    x = rest.find_one()
    return x

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }
    return response_body

if __name__ == "__main__":
    api.run(debug=True)