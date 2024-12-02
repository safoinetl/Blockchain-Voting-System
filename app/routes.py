# from flask import Blueprint, request, jsonify
# from .blockchain import Blockchain

# blockchain = Blockchain()
# bp = Blueprint('routes', __name__)

# # Store voted IDs to prevent multiple votes
# voted_ids = set()  # Using a set for fast lookups

# @bp.route('/vote', methods=['POST'])
# def vote():
#     data = request.get_json()

#     # Check if required data is present
#     if 'voter_id' not in data or 'candidate' not in data:
#         return jsonify({'error': 'Invalid vote data'}), 400

#     voter_id = data['voter_id']

#     # Check if the voter has already voted
#     if voter_id in voted_ids:
#         return jsonify({'error': 'You have already voted!'}), 400

#     # Add the voter ID to the set of voted IDs
#     voted_ids.add(voter_id)

#     # Add the vote to the blockchain
#     blockchain.current_votes.append(data)

#     return jsonify({'message': 'Vote added successfully'}), 201

# @bp.route('/mine', methods=['GET'])
# def mine():
#     previous_block = blockchain.get_previous_block()
#     proof = blockchain.proof_of_work(previous_block['proof'])
#     previous_hash = blockchain.hash(previous_block)
#     block = blockchain.create_block(proof, previous_hash)
#     return jsonify(block), 200

# @bp.route('/chain', methods=['GET'])
# def chain():
#     return jsonify({
#         'chain': blockchain.chain,
#         'length': len(blockchain.chain)
#     }), 200
from flask import Blueprint, request, jsonify
from pymongo import MongoClient
from .blockchain import Blockchain

# Initialize Blockchain
blockchain = Blockchain()

# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')  # Connect to local MongoDB
db = client['voting_db']  # Database name
votes_collection = db['votes']  # Collection to store voter data

bp = Blueprint('routes', __name__)

@bp.route('/vote', methods=['POST'])
def vote():
    data = request.get_json()
    if 'voter_id' not in data or 'candidate' not in data:
        return jsonify({'error': 'Invalid vote data'}), 400

    # Check if the voter has already voted by searching for the Voter ID in the database
    existing_vote = votes_collection.find_one({"voter_id": data['voter_id']})
    if existing_vote:
        return jsonify({'error': 'This voter has already voted'}), 400

    # Add the vote to the blockchain
    blockchain.current_votes.append(data)

    # Save the Voter ID and vote to the MongoDB collection
    votes_collection.insert_one({"voter_id": data['voter_id'], "candidate": data['candidate']})

    return jsonify({'message': 'Vote added successfully'}), 201

@bp.route('/mine', methods=['GET'])
def mine():
    previous_block = blockchain.get_previous_block()
    proof = blockchain.proof_of_work(previous_block['proof'])
    previous_hash = blockchain.hash(previous_block)
    block = blockchain.create_block(proof, previous_hash)
    return jsonify(block), 200

@bp.route('/chain', methods=['GET'])
def chain():
    return jsonify({
        'chain': blockchain.chain,
        'length': len(blockchain.chain)
    }), 200
