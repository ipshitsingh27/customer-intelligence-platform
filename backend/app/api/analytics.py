from flask import Blueprint, jsonify
import os
import pandas as pd

from app.services.file_service import get_upload_history
from app.services.analytics_service import build_analytics

analytics_bp = Blueprint("analytics", __name__)


@analytics_bp.route("/analytics", methods=["GET"])
def analytics():

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

    analytics_data = build_analytics(dataframe)

    return jsonify({

        "success": True,

        "analytics": analytics_data

    })