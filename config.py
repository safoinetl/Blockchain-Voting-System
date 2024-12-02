class Config:
    """
    Base configuration class.
    """
    SECRET_KEY = 'your_default_secret_key'  # Hardcoded secret key
    DEBUG = False
    TESTING = False
    DATABASE_URI = 'mongodb://localhost:27017/voting'  # Default local MongoDB instance

class DevelopmentConfig(Config):
    """
    Configuration for development.
    """
    DEBUG = True
    DATABASE_URI = 'mongodb://localhost:27017/dev_voting'

class TestingConfig(Config):
    """
    Configuration for testing.
    """
    TESTING = True
    DATABASE_URI = 'mongodb://localhost:27017/test_voting'

class ProductionConfig(Config):
    """
    Configuration for production.
    """
    DATABASE_URI = 'mongodb://user:password@host:port/voting'  # Update with actual production settings

# Helper function to get configuration
def get_config(env):
    """
    Get the configuration class based on the environment.

    Args:
        env (str): The environment name ('development', 'testing', 'production').

    Returns:
        Config: The configuration class.
    """
    config_mapping = {
        'development': DevelopmentConfig,
        'testing': TestingConfig,
        'production': ProductionConfig,
    }
    return config_mapping.get(env, Config)
