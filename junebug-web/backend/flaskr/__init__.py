from flask import Flask, redirect, render_template, url_for
from pymongo import MongoClient
from flask.json import jsonify
import json

# create an instance of the flask class 
api = Flask(__name__)
title = "Database pull test"
#---------------mongodb setup and db/collections-------------------------
client = MongoClient('mongodb+srv://Junebug:Junebug@cluster0.9zuwh.mongodb.net/Junebug?retryWrites=true&w=majority')
#specify what databases
jb = client.get_database('Junebug')
#specify what collections
user = jb.get_collection('Users')
rest = jb.get_collection('Restaurants')
robot = jb.get_collection('Robots')
menu = jb.get_collection('Menu')
order = jb.get_collection('Orders')

#-------------flask mixed with mongodb functions-------------------
#

# # create user rough draft, no certification
@api.route('/createaccount/')
def adduser(firstName, lastName, email, password, phoneNum, address):
    user.insert_one({"firstName": firstName.lower(), "lastName": lastName.lower(), "email": email.lower(), "password": password, "phoneNum": phoneNum.lower(), "address": address.lower()})
    return redirect(url_for('/'))

# # adding user to the database
# @app.route('/addname/<name>/')
# def addname(user):
#     user.insert_one({"name": user.lower()})
#     return redirect(url_for('getnames'))

@api.route('/')
def flaskpage():
    fp = "Welcome!!!<br> /getrests<br> /menu/"
    return fp

@api.route('/restaurants/all/', methods=['GET'])
def get_restaurants():
    restaurants = []
    for i in rest.find({},{"_id" : 0, "name": 1, "restID": 1, "cuisine": 1}):
        restaurants.append(i)
    return jsonify({'restaurants': restaurants})

@api.route('/menu/<int:id>/', methods=['GET'])
def get_menu(id):
    items = []
    for i in menu.find({"restID": id},{"_id" : 0, "name" : 1, "description" : 1, "price" : 1, "restName" : 1}):
        items.append(i)
    return jsonify({'items': items})

if __name__ == "__main__":
    api.run(debug=True)