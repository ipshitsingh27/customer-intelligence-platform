from flask import Blueprint, jsonify

from app.services.segmentation_service import (
    generate_rfm,
    segment_customers
)

from app.services.file_service import get_upload_history
import pandas as pd
import os

segments_bp = Blueprint("segments", __name__)


@segments_bp.route("/segments", methods=["GET"])
def get_segments():

    history = get_upload_history()

    if len(history) == 0:
        return jsonify({
            "success": False,
            "message": "No uploaded dataset found."
        }), 404

    latest_file = history[0]["saved_name"]

    filepath = os.path.join(
        "uploads",
        latest_file
    )

    dataframe = pd.read_csv(filepath)

    rfm = generate_rfm(dataframe)

    segmented = segment_customers(rfm)

    cluster_distribution = (
        segmented["Cluster"]
        .value_counts()
        .sort_index()
        .to_dict()
    )

    return jsonify({

        "success": True,

        "customers": len(segmented),

        "cluster_distribution": cluster_distribution,

        "preview": segmented.head(10).to_dict(
            orient="records"
        )

    })