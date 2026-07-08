from flask import Blueprint, jsonify

from app.services.file_service import load_latest_dataset
from app.services.report_service import generate_business_report

reports_bp = Blueprint("reports", __name__)


@reports_bp.route("/reports", methods=["GET"])
def reports():

    dataframe = load_latest_dataset()

    if dataframe is None:

        return jsonify({
            "success": False,
            "message": "No uploaded dataset found."
        }), 404

    report = generate_business_report(dataframe)

    return jsonify({

        "success": True,

        "report": report

    })