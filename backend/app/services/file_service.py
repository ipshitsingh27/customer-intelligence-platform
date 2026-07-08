import os
import uuid
import json
from datetime import datetime

import pandas as pd
from werkzeug.utils import secure_filename

from app.services.cleaning_service import clean_dataset

# ---------------------------------------
# Paths
# ---------------------------------------

BASE_DIR = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "..", "..")
)

UPLOAD_FOLDER = os.path.join(BASE_DIR, "uploads")

HISTORY_FILE = os.path.join(
    BASE_DIR,
    "data",
    "upload_history.json"
)

ALLOWED_EXTENSIONS = {"csv"}


# ---------------------------------------
# Create Upload Folder
# ---------------------------------------

def create_upload_folder():
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)


# ---------------------------------------
# Save Uploaded File
# ---------------------------------------

def save_uploaded_file(file):

    create_upload_folder()

    original_filename = secure_filename(file.filename)

    unique_filename = f"{uuid.uuid4().hex}_{original_filename}"

    file_path = os.path.join(
        UPLOAD_FOLDER,
        unique_filename
    )

    file.save(file_path)

    return {
        "filename": unique_filename,
        "filepath": file_path,
        "original_filename": original_filename
    }


# ---------------------------------------
# Load + Clean CSV
# ---------------------------------------

def load_csv(file_path):

    dataframe = pd.read_csv(file_path)

    cleaned_dataframe, cleaning_summary = clean_dataset(dataframe)

    return {
        "dataframe": cleaned_dataframe,
        "rows": len(cleaned_dataframe),
        "columns": list(cleaned_dataframe.columns),
        "shape": cleaned_dataframe.shape,
        "cleaning_summary": cleaning_summary
    }


# ---------------------------------------
# Upload History
# ---------------------------------------

def save_upload_history(file_info, dataset_info):

    history = []

    if os.path.exists(HISTORY_FILE):
        with open(HISTORY_FILE, "r") as f:
            history = json.load(f)

    history.insert(0, {
        "id": uuid.uuid4().hex,
        "filename": file_info["original_filename"],
        "saved_name": file_info["filename"],
        "rows": dataset_info["rows"],
        "columns": len(dataset_info["columns"]),
        "status": "Completed",
        "uploaded_at": datetime.now().strftime("%d-%m-%Y %H:%M:%S")
    })

    with open(HISTORY_FILE, "w") as f:
        json.dump(history, f, indent=4)


def get_upload_history():

    if not os.path.exists(HISTORY_FILE):
        return []

    with open(HISTORY_FILE, "r") as f:
        return json.load(f)