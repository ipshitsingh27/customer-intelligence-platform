from flask import Blueprint, request, jsonify

from app.utils.validators import validate_upload
from app.services.file_service import save_uploaded_file, load_csv

upload_bp = Blueprint("upload", __name__)


@upload_bp.route("/upload", methods=["POST"])
def upload_dataset():
    """
    Upload, validate, clean and summarize dataset.
    """

    file = request.files.get("file")

    # -----------------------------
    # Validate File
    # -----------------------------
    is_valid, message = validate_upload(file)

    if not is_valid:
        return jsonify({
            "success": False,
            "message": message
        }), 400

    try:

        # -----------------------------
        # Save File
        # -----------------------------
        file_info = save_uploaded_file(file)

        # -----------------------------
        # Load & Clean Dataset
        # -----------------------------
        dataset_info = load_csv(file_info["filepath"])

        return jsonify({

            "success": True,

            "message": "Dataset uploaded and cleaned successfully.",

            "file": {
                "original_name": file_info["original_filename"],
                "saved_name": file_info["filename"]
            },

            "dataset": {
                "rows": dataset_info["rows"],
                "columns": dataset_info["columns"],
                "shape": dataset_info["shape"]
            },

            "cleaning_summary": dataset_info["cleaning_summary"]

        }), 200

    except Exception as e:

        return jsonify({

            "success": False,

            "message": str(e)

        }), 500