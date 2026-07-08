from flask import Blueprint, jsonify

from app.services.file_service import load_latest_dataset
from app.services.analytics_service import build_analytics

analytics_bp = Blueprint("analytics", __name__)


@analytics_bp.route("/analytics", methods=["GET"])
def analytics():

    dataframe = load_latest_dataset()

    if dataframe is None:

        return jsonify({
            "success": False,
            "message": "No uploaded dataset found."
        }), 404

    analytics_data = build_analytics(dataframe)

    return jsonify({

        "success": True,

        "analytics": analytics_data

    })