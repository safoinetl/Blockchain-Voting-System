# # from flask import Flask
# # from flask_pymongo import PyMongo
# # from config import get_config

# # app = Flask(__name__)

# # # Set environment manually (or retrieve from a variable like os.getenv)
# # environment = 'development'  # Options: 'development', 'testing', 'production'
# # app.config.from_object(get_config(environment))

# # # Initialize PyMongo with the app configuration
# # mongo = PyMongo(app)

# # @app.route('/')
# # def index():
# #     # Example: Fetch all votes from MongoDB collection
# #     votes = mongo.db.votes.find()  # 'votes' collection
# #     return f"Votes: {list(votes)}"

# # if __name__ == '__main__':
# #     app.run(debug=app.config['DEBUG'])
# from flask import Flask
# from flask_pymongo import PyMongo
# from config import get_config

# app = Flask(__name__)

# # Set environment manually (or retrieve from an environment variable)
# environment = 'development'  # Options: 'development', 'testing', 'production'
# app.config.from_object(get_config(environment))

# # Initialize PyMongo with the app configuration
# mongo = PyMongo(app)

# @app.route('/')
# def index():
#     # Example: Fetch all votes from MongoDB collection
#     votes = mongo.db.votes.find()  # 'votes' collection
#     return f"Votes: {list(votes)}"

# if __name__ == '__main__':
#     app.run(debug=app.config['DEBUG'])
from flask import Flask
from app.routes import bp  # Import the Blueprint

app = Flask(__name__)

# Register the Blueprint
app.register_blueprint(bp)

if __name__ == '__main__':
    app.run(debug=True)
