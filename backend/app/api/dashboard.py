from flask import Blueprint, jsonify
import os
import pandas as pd

from app.services.file_service import get_upload_history
from app.services.business_service import build_business_dashboard

dashboard_bp = Blueprint("dashboard", __name__)


@dashboard_bp.route("/dashboard", methods=["GET"])
def dashboard():

    history = get_upload_history()

    if len(history) == 0:
        return jsonify({
            "success": False,
            "message": "No uploaded dataset found."
        }), 404

    latest = history[0]

    filepath = os.path.join(
        "uploads",
        latest["saved_name"]
    )

    dataframe = pd.read_csv(filepath)

    dashboard_data = build_business_dashboard(
        dataframe
    )

    return jsonify({
        "success": True,
        "dashboard": dashboard_data
    })