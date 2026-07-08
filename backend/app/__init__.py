from flask import Flask
from flask_cors import CORS

from app.api.upload import upload_bp
from app.api.segments import segments_bp
from app.api.dashboard import dashboard_bp
from app.api.analytics import analytics_bp
from app.api.reports import reports_bp
from app.api.ai_insights import ai_bp


def create_app():

    app = Flask(__name__)

    CORS(app)

    app.register_blueprint(upload_bp, url_prefix="/api")
    app.register_blueprint(segments_bp, url_prefix="/api")
    app.register_blueprint(dashboard_bp, url_prefix="/api")
    app.register_blueprint(analytics_bp, url_prefix="/api")
    app.register_blueprint(reports_bp, url_prefix="/api")
    app.register_blueprint(ai_bp, url_prefix="/api")

    @app.route("/")
    def home():
        return {
            "message": "Customer Intelligence Platform Backend Running",
            "status": "success"
        }

    return app