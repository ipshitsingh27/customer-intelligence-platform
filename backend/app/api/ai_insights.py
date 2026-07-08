from flask import Blueprint, jsonify

from app.services.file_service import load_latest_dataset
from app.services.ai_service import generate_ai_insights

ai_bp = Blueprint("ai", __name__)


@ai_bp.route("/ai-insights", methods=["GET"])
def ai_insights():

    dataframe = load_latest_dataset()

    if dataframe is None:

        return jsonify({
            "success": False,
            "message": "No uploaded dataset found."
        }), 404

    insights = generate_ai_insights(dataframe)

    return jsonify({

        "success": True,

        "ai": insights

    })