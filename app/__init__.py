from flask import Flask  # Import Flask
from .routes import bp  # Import the routes blueprint
from flask_cors import CORS
def create_app(config_class='config.DevelopmentConfig'):
    """
    Application factory to create and configure the Flask app.
    """
    app = Flask(__name__)  # Initialize the Flask app
    app.config.from_object(config_class)  # Load the specified configuration
    CORS(app)
    # Register the blueprint for routes
    app.register_blueprint(bp)

    return app
