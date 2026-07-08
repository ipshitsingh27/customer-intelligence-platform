import os
import pandas as pd

from flask import Blueprint, jsonify

from app.services.file_service import get_upload_history
from app.services.report_service import generate_business_report

reports_bp = Blueprint("reports", __name__)


@reports_bp.route("/reports", methods=["GET"])
def reports():

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

    report = generate_business_report(dataframe)

    return jsonify({

        "success": True,

        "report": report

    })