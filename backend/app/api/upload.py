from flask import Blueprint, request, jsonify

from app.utils.validators import validate_upload
from app.services.file_service import save_uploaded_file, load_csv

upload_bp = Blueprint("upload", __name__)


@upload_bp.route("/upload", methods=["POST"])
def upload_dataset():
    """
    Upload CSV dataset.
    """

    file = request.files.get("file")

    # Validate uploaded file
    is_valid, message = validate_upload(file)

    if not is_valid:
        return jsonify({
            "success": False,
            "message": message
        }), 400

    try:
        # Save file
        result = save_uploaded_file(file)

        # Read CSV
        csv_data = load_csv(result["filepath"])

        return jsonify({
            "success": True,
            "message": "Dataset uploaded successfully.",
            "file": {
                "original_name": result["original_filename"],
                "saved_name": result["filename"]
            },
            "dataset": {
                "rows": csv_data["rows"],
                "columns": csv_data["columns"],
                "shape": csv_data["shape"]
            }
        }), 200

    except Exception as e:
        return jsonify({
            "success": False,
            "message": str(e)
        }), 500