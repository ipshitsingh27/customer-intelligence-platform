from flask import Blueprint, request, jsonify

from app.utils.validators import validate_upload

from app.services.file_service import (
    save_uploaded_file,
    load_csv,
    save_upload_history,
    get_upload_history
)

# Store latest uploaded dataframe in memory


upload_bp = Blueprint("upload", __name__)


# ---------------------------------------
# Upload Dataset
# ---------------------------------------

@upload_bp.route("/upload", methods=["POST"])
def upload_dataset():

    

    file = request.files.get("file")

    is_valid, message = validate_upload(file)

    if not is_valid:
        return jsonify({
            "success": False,
            "message": message
        }), 400

    try:

        file_info = save_uploaded_file(file)

        dataset_info = load_csv(file_info["filepath"])

        # Save latest dataframe for Analytics, Dashboard etc.
       

        # Save Upload History
        save_upload_history(file_info, dataset_info)

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


# ---------------------------------------
# Upload History
# ---------------------------------------

@upload_bp.route("/upload/history", methods=["GET"])
def upload_history():

    history = get_upload_history()

    return jsonify({
        "success": True,
        "history": history
    }), 200