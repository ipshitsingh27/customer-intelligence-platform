from flask import Flask
from flask_cors import CORS

from app.config.config import Config


def create_app():
    app = Flask(__name__)

    # Load configuration
    app.config.from_object(Config)

    # Enable Cross-Origin Resource Sharing
    CORS(app)

    # -----------------------------
    # Root Route
    # -----------------------------
    @app.route("/")
    def home():
        return {
            "application": "Customer Intelligence Platform",
            "version": "1.0.0",
            "status": "running",
            "environment": "development"
        }

    return app