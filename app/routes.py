# # from flask import Blueprint, request, jsonify
# # from .blockchain import Blockchain

# # blockchain = Blockchain()
# # bp = Blueprint('routes', __name__)

# # @bp.route('/vote', methods=['POST'])
# # def vote():
# #     data = request.get_json()
# #     if 'voter_id' not in data or 'candidate' not in data:
# #         return jsonify({'error': 'Invalid vote data'}), 400
# #     blockchain.current_votes.append(data)
# #     return jsonify({'message': 'Vote added successfully'}), 201

# # @bp.route('/mine', methods=['GET'])
# # def mine():
# #     previous_block = blockchain.get_previous_block()
# #     proof = blockchain.proof_of_work(previous_block['proof'])
# #     previous_hash = blockchain.hash(previous_block)
# #     block = blockchain.create_block(proof, previous_hash)
# #     return jsonify(block), 200

# # @bp.route('/chain', methods=['GET'])
# # def chain():
# #     return jsonify({
# #         'chain': blockchain.chain,
# #         'length': len(blockchain.chain)
# #     }), 200
# from flask import Blueprint, request, jsonify
# from .blockchain import Blockchain

# blockchain = Blockchain()
# bp = Blueprint('routes', __name__)

# # Route to handle vote submission
# @bp.route('/vote', methods=['POST'])
# def vote():
#     data = request.get_json()
    
#     # Check if the required data (voter_id, candidate) is provided
#     if 'voter_id' not in data or 'candidate' not in data:
#         return jsonify({'error': 'Invalid vote data'}), 400
    
#     # Add vote to the current votes
#     blockchain.current_votes.append(data)
    
#     return jsonify({'message': 'Vote added successfully'}), 201

# # Route to handle mining of a new block
# @bp.route('/mine', methods=['GET'])
# def mine():
#     # Get the previous block in the blockchain
#     previous_block = blockchain.get_previous_block()
    
#     # Get proof for the new block by using the proof-of-work algorithm
#     proof = blockchain.proof_of_work(previous_block['proof'])
    
#     # Hash the previous block to get the hash for the new block
#     previous_hash = blockchain.hash(previous_block)
    
#     # Create a new block with the votes and add it to the blockchain
#     block = blockchain.create_block(proof, previous_hash)
    
#     # Clear the current votes after the block is mined
#     blockchain.current_votes = []
    
#     return jsonify(block), 200

# # Route to get the entire blockchain
# @bp.route('/chain', methods=['GET'])
# def chain():
#     return jsonify({
#         'chain': blockchain.chain,
#         'length': len(blockchain.chain)
#     }), 200
from flask import Blueprint, request, jsonify
from .blockchain import Blockchain

blockchain = Blockchain()
bp = Blueprint('routes', __name__)

# Store voted IDs to prevent multiple votes
voted_ids = set()  # Using a set for fast lookups

@bp.route('/vote', methods=['POST'])
def vote():
    data = request.get_json()

    # Check if required data is present
    if 'voter_id' not in data or 'candidate' not in data:
        return jsonify({'error': 'Invalid vote data'}), 400

    voter_id = data['voter_id']

    # Check if the voter has already voted
    if voter_id in voted_ids:
        return jsonify({'error': 'You have already voted!'}), 400

    # Add the voter ID to the set of voted IDs
    voted_ids.add(voter_id)

    # Add the vote to the blockchain
    blockchain.current_votes.append(data)

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
