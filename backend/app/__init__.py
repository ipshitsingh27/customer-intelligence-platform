
from flask import Flask
from flask_cors import CORS
from app.api.upload import upload_bp
def create_app():
    app = Flask(__name__)

    # Enable CORS
    CORS(app)
    app.register_blueprint(upload_bp, url_prefix="/api")

    # Basic Route
    @app.route("/")
    def home():
        return {
            "message": "Customer Intelligence Platform Backend Running",
            "status": "success"
        }

    return app
