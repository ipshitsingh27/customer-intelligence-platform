from flask import Blueprint, jsonify

from app.services.file_service import load_latest_dataset
from app.services.business_service import build_business_dashboard

dashboard_bp = Blueprint("dashboard", __name__)


@dashboard_bp.route("/dashboard", methods=["GET"])
def dashboard():

    dataframe = load_latest_dataset()

    if dataframe is None:
        return jsonify({
            "success": False,
            "message": "No uploaded dataset found."
        }), 404

    dashboard_data = build_business_dashboard(dataframe)

    return jsonify({
        "success": True,
        "dashboard": dashboard_data
    })