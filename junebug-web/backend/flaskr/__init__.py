from passlib.hash import pbkdf2_sha256
from flask import Flask, redirect, render_template, url_for, request
from pymongo import MongoClient
from flask.json import jsonify
import json
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS

# create an instance of the flask class 
api = Flask(__name__)
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
    fp = "Welcome!!!"
    return fp

@api.route('/restaurants/all/', methods=['GET'])
def get_restaurants():
    restaurants = []
    for i in rest.find({},{"_id" : 1, "name": 1, "restID": 1, "cuisine": 1, "imname": 1, "imurl": 1}):
        restaurants.append(i)
    return jsonify({'restaurants': restaurants})

@api.route('/menu/<int:id>/', methods=['GET'])
def get_menu(id):
    items = []
    for i in menu.find({"restID": id},{"_id" : 0, "name" : 1, "description" : 1, "price" : 1, "restName" : 1, "itemID":1, "fname":1}):
        items.append(i)
    return jsonify({'items': items})

#for react flask and mongo
@api.route('/login/', methods=['POST'])
def login():
    email = request.get_json()['email']
    password = request.get_json()['password']
    loginuser = user.find_one({'email': email})
    result = ""
    if loginuser:
        if pbkdf2_sha256.verify(password, loginuser['password']):
            userIDinfo = user.find_one({"email": email}, {'_id':0, 'userID': 1})
            return {"success": "success", "userID":userIDinfo}
            # result = jsonify({'token':"logged in"})# this can return username as token
    return {"error": "Incorrect Login"}, 402

@api.route('/signup/', methods=['POST'])
def register():
    existing_user = user.find_one({'email' : request.get_json()['email']})
    if existing_user is None :
        userID = user.count_documents({}) + 1
        email = request.get_json()['email']
        password = pbkdf2_sha256.hash(request.get_json()['password'])
        firstName = request.get_json()['firstName']
        lastName = request.get_json()['lastName']
        phoneNum = request.get_json()['phoneNum']
        new_user = {"userID": userID, "firstName": firstName, "lastName": lastName, "email": email, "password": password, "phoneNum": phoneNum }
        user.insert_one(new_user)
        result = {"result": "registered", "userID": userID} 
    else:
        result = {"result": "not registered"}, 402
    
    return result
@api.route('/checkout/', methods=['POST'])
def checkout():
    cartItems = request.get_json()["cartItems"]
    userID = request.get_json()["userID"]
    firstname = request.get_json()["firstName"]
    lastname = request.get_json()["lastName"]
    email = request.get_json()["email"]
    address = request.get_json()["address"]
    city = request.get_json()["city"]
    dest = request.get_json()["dest"]
    cardNum = request.get_json()["cardNum"]
    secNum = request.get_json()["Secnum"]
    #items = cartItems
    new_order = {"userID": userID["userID"], "cartItems": cartItems, "firstName": firstname, "lastName": lastname, "email": email, 
                 "address": address, "city": city, "cardNum": cardNum, "secNum": secNum, "destination": dest 
                } #add order quantity, price, items
    order.insert_one(new_order)
    return {"success": "order placed"}


@api.route('/user/', methods=['POST'])
def userinfo():
    userID = request.get_json()["userID"]
    items = []
    #hists = []
    for i in user.find({"userID": userID},{"_id" : 0, "firstName": 1, "lastName": 1, "email": 1, "phoneNum": 1}):
        items.append(i)
    #for i in order.find({"userID": userID}, {"_id" : 0, "destination": 1, "totalPrice": 1, "restName": "Rubios"}):
    #    hists.append(i)
    #return jsonify({"items": items}, {"hists": hists})
    return jsonify({"items": items})



if __name__ == "__main__":
    api.run(debug=True)

   

#     import { useState, useEffect } from "react";

# function User({ token }) {                     //takes the token input
#     const userID = token["userID"];  //gets userID from the token
#     const [items, setItems] = useState([]); //declare state variable items 
#     const [hists, setHists] = useState([]);
#     console.log(userID);

#     useEffect(() => {
#         fetch('/user/', {
#             method: 'POST',
#             headers: {
#                 'Content-Type': 'application/json'
#             },
#             body: JSON.stringify(userID)
#         })
#             .then(data => data.json()
#                 .then(data => {
#                     setItems(data.items);
#    //                 setHists(data.hists);
#                 }));
#     }, [userID])
#     console.log(hists);
#     return (

#         <div className="user-container">
#             {items.map(item => {
#                 return (
#                     <div class="user-wrap">
#                         <div class="right">
#                             <div class="info">
#                                 <h3>User Account</h3>
#                                 <div class="info_data">
#                                     <div class="data">
#                                         <h4>Name</h4>
#                                         <p>{item.firstName} {item.lastName}</p>
#                                     </div>
#                                     <div class="data">
#                                         <h4>Email</h4>
#                                         <p>{item.email}</p>
#                                     </div>
#                                 </div>
#                             </div>
#                             <div class="info">
#                                 <div class="info_data">
#                                     <div class="data">
#                                         <  h4>Phone</h4>
#                                         <p>{item.phoneNum}</p>
#                                     </div>
#                                     <div class="data">
#                                         <h4>Type</h4>
#                                         <p>Member</p>
#                                     </div>
#                                 </div>
#                             </div>
#                         </div>
#                     </div>
                    
#                 );
#             })};
#             {/* {hists.map(hist => {
#                 return (
#                     <div class="projects">
#                         <h3>Order History</h3>
#                         <div class="info">
#                             <div class="info_data">
#                                 <div class="data">
#                                     <  h4>Destination</h4>
#                                     <p>{hist.destination}</p>
#                                 </div>
#                                 <div class="data">
#                                     <h4>Price</h4>
#                                     <p>{hist.totalPrice}</p>
#                                 </div>
#                                 <div class="data">
#                                     <h4>Restaurant</h4>
#                                     <p>{hist.restName}</p>
#                                 </div>
#                             </div>
#                         </div>
#                     </div>
                            
#                 );
#             })}; */}
#         </div>
#     );
# }

# export default User;




