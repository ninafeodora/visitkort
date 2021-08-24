from flask import Flask, jsonify, request
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)

# CARDS = {}

# CARDS should of course be empty, but this was to be able to experiment with deleting cards on the page
CARDS = {0: {'name': "John",
          'surName': "Hansen",
          'telephone': "11223344",
          'email': "jh@gmail.com",
        #   I haven't managed to add an image in the right format and show it on the page
          'image': 'https://thispersondoesnotexist.com/image'},
          1: {'name': "Lotte",
          'surName': "Jensen",
          'telephone': "55667788",
          'email': "lj@gmail.com",
          'image': 'https://thispersondoesnotexist.com/image'},
          2: {'name': "Hanne",
          'surName': "Mortensen",
          'telephone': "1234",
          'email': "mail",
          'image': 'https://thispersondoesnotexist.com/image'}}

parser = reqparse.RequestParser()
parser.add_argument('card')

class Index(Resource):

    def get(self):
        return jsonify({'message': 'Business card manager'})

    def post(self):
        data = request.get_json()
        return jsonify({'data': data}), 201

class Cards(Resource):
    # Read 
    # This is the default on the page
    def get(self):
        return jsonify(CARDS)

    # Create
    # input format = "card=name:_,surName:_,telephone:_,email:_,image:_"
    # Not implemented in frontend
    def post(self):
        args = parser.parse_args()
        card = args['card']
        #! jsonparse i stedet for 
        card = dict((x.strip(), y.strip())
             for x, y in (pair.split(':') 
             for pair in card.split(',')))
        id = int(max(CARDS.keys())) + 1
        CARDS[id] = card
        return CARDS[id], 201

class Card(Resource):

    # Update
    # Not implemented in frontend
    def put(self, id):
        args = parser.parse_args()
        card = args['card']
        card = dict((x.strip(), y.strip())
             for x, y in (pair.split(':') 
             for pair in card.split(',')))
        CARDS[id] = card
        return card, 201

    # Delete
    # Implemented in frontend by button click
    def delete(self, id):
        del CARDS[id]
        return '', 204

api.add_resource(Index, '/')
api.add_resource(Cards, '/cards')
api.add_resource(Card, '/cards/<int:id>')

if __name__ == "__main__":
    app.run(debug=True)