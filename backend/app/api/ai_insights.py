import os
import pandas as pd

from flask import Blueprint, jsonify

from app.services.file_service import get_upload_history
from app.services.ai_service import generate_ai_insights

ai_bp = Blueprint("ai", __name__)


@ai_bp.route("/ai-insights", methods=["GET"])
def ai_insights():

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

    insights = generate_ai_insights(dataframe)

    return jsonify({

        "success": True,

        "ai": insights

    })