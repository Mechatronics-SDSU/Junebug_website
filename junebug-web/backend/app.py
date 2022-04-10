from flask import Flask, redirect, url_for, request, redirect, session, render_template
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
import json
import bcrypt

# create an instance of the flask class 
app = Flask(__name__)
# secret key for logins
app.secret_key = "ihatethisclass"
# haven't figured out cors yet
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

#---------------mongodb setup and db/collections-------------------------
client = MongoClient('mongodb+srv://mechatronics_sdsu:Perseverance2017@junebug.qlbq2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
#specify what databases
jb = client.get_database('Junebug')
#specify what collections
user = jb.get_collection('Users')
rest = jb.get_collection('Restaurants')
robots = jb.get_collection('Robots')

#-------------flask mixed with mongodb functions-------------------

# create user rough draft, no certification
@app.route('/createuser/')
def adduser(firstName, lastName, email, password, phoneNum, address):
    user.insert_one({"firstName": firstName.lower(), "lastName": lastName.lower(), "email": email.lower(), "password": password, "phoneNum": phoneNum.lower(), "address": address.lower()})
    return redirect(url_for('getnames'))

# adding user to the database
@app.route('/addname/<name>/')
def addname(user):
    user.insert_one({"name": user.lower()})
    return redirect(url_for('getnames'))

# getting all names from the database
@app.route('/getnames/')
def getnames():
    names_json = []
    if user.find({}): #can modify the find function to only return values that match keys
        for user in user.find({}).sort("name"):
            names_json.append({"name": user['name'], "id": str(user['_id'])})
    return json.dumps(names_json)

@app.route("/", methods=['post', 'get'])
def index():
    message = ''
    if "email" in session:
        return redirect(url_for("logged_in"))
    if request.method == "POST":
        user = request.form.get("fullname")
        email = request.form.get("email")
        
        password1 = request.form.get("password1")
        password2 = request.form.get("password2")
        
        user_found = user.find_one({"name": user})
        email_found = user.find_one({"email": email})
        if user_found:
            message = 'There already is a user by that name'
            return render_template('index.html', message=message)
        if email_found:
            message = 'This email already exists in database'
            return render_template('index.html', message=message)
        if password1 != password2:
            message = 'Passwords should match!'
            return render_template('index.html', message=message)
        else:
            hashed = bcrypt.hashpw(password2.encode('utf-8'), bcrypt.gensalt())
            user_input = {'name': user, 'email': email, 'password': hashed}
            user.insert_one(user_input)
            
            user_data = user.find_one({"email": email})
            new_email = user_data['email']
   
            return render_template('logged_in.html', email=new_email)
    return render_template('index.html')

#end of code to run it
if __name__ == "__main__":
  app.run(debug=True)


if __name__ == "__main__":
    app.run(debug=True)