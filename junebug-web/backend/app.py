from flask import Flask, redirect, url_for
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
from random import randint
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


mongoClient = MongoClient('mongodb://127.0.0.1:27017')
db = mongoClient.restaurants
names = ['Kitchen','Animal','State', 'Tastey', 'Big','City','Fish', 'Pizza','Goat', 'Salty','Sandwich','Lazy', 'Fun']
company_type = ['LLC','Inc','Company','Corporation']
company_cuisine = ['Pizza', 'Bar Food', 'Fast Food', 'Italian', 'Mexican', 'American', 'Sushi Bar', 'Vegetarian']
for x in range(1, 501):
    business = {
        'name' : names[randint(0, (len(names)-1))] + ' ' + names[randint(0, (len(names)-1))]  + ' ' + company_type[randint(0, (len(company_type)-1))],
        'rating' : randint(1, 5),
        'cuisine' : company_cuisine[randint(0, (len(company_cuisine)-1))] 
    }
    #Step 3: Insert business object directly into MongoDB via insert_one
    result=db.reviews.insert_one(business)
    #Step 4: Print to the console the ObjectID of the new document
    print('Created {0} of 500 as {1}'.format(x,result.inserted_id))
#Step 5: Tell us that you are done
print('finished creating 500 business reviews')



#initial db
# db = mongoClient.get_database('names_db')
# names_col = db.get_collection('names_col')

# @app.route('/addname/<name>/')
# def addname(name):
#     names_col.insert_one({"name": name.lower()})
#     return redirect(url_for('getnames'))

# @app.route('/getnames/')
# def getnames():
#     names_json = []
#     if names_col.find({}):
#         for name in names_col.find({}).sort("name"):
#             names_json.append({"name": name['name'], "id": str(name['_id'])})
#     return json.dumps(names_json)

# if __name__ == "__main__":
#     app.run(debug=True)