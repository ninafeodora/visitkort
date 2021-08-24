# visitkort
Dependencies:
- flask
- flask_restful
- flask_cors

#If testing only backend program, following should be known:

Input format of each card should be "card=name:_,surName:_,telephone:_,email:_" where _ signifies the corresponding values of the card

Commands to run in terminal:
- Read: curl http://127.0.0.1:5000/cards
- Create: curl http://localhost:5000/cards -d "card=name:_,surName:_,telephone:_,email:_,image:_" -X POST -v where each _ signifies corresponding value of the card
- Update: curl http://localhost:5000/cards/id -d "card=name:_,surName:_,telephone:_,email:_,image:_" -X PUT -v where id signifies the id of a specific card (can be found by reading all cards) and each _ signifies corresponding updated value of the card
- Delete: curl http://localhost:5000/cards/id -X DELETE -v where id signifies the id of a specific card (can be found by reading all cards)
