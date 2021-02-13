from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

# from wer

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/BDCB'
mongo = PyMongo(app)
CORS(app)
dbU = mongo.db.users


@app.route('/users', methods=['POST'])
def create_user():

    hashed_password = generate_password_hash(request.json['password'])

    id = dbU.insert({
        'document': request.json['document'],
        'name': request.json['name'],
        'lastname': request.json['lastname'],
        'privilege': request.json['privilege'],
        'email': request.json['email'],
        'password': hashed_password,
    })

    return jsonify(str(ObjectId(id)))


@app.route('/login', methods=['POST'])
def getLogin():
    Request_password = generate_password_hash(request.json['password'])
    user = dbU.find_one({'email': request.json['email']})

    if user['password'] == Request_password:
        return jsonify({
            '_id': str(ObjectId(user['_id'])),
            'document': user['document'],
            'name': user['name'],
            'lastname': user['lastname'],
            'privilege': user['privilege'],
            'email': user['email']
        })
    else:
        return jsonify({'msg': 'User No Exist'})


if __name__ == "__main__":
    app.run(debug=True)
