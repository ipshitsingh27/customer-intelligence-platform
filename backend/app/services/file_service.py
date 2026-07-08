import os
import uuid
import pandas as pd
from werkzeug.utils import secure_filename

from app.services.cleaning_service import clean_dataset

# ---------------------------------------
# Project Paths
# ---------------------------------------

BASE_DIR = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "..", "..")
)

UPLOAD_FOLDER = os.path.join(BASE_DIR, "uploads")

ALLOWED_EXTENSIONS = {"csv"}


# ---------------------------------------
# Create Upload Folder
# ---------------------------------------

def create_upload_folder():
    """
    Create uploads folder if it doesn't exist.
    """
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)


# ---------------------------------------
# Save Uploaded File
# ---------------------------------------

def save_uploaded_file(file):
    """
    Save uploaded CSV with a unique filename.
    """

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
# Read + Clean CSV
# ---------------------------------------

def load_csv(file_path):
    """
    Read uploaded CSV and clean it.
    """

    dataframe = pd.read_csv(file_path)

    cleaned_dataframe, cleaning_summary = clean_dataset(dataframe)

    return {
        "dataframe": cleaned_dataframe,
        "rows": len(cleaned_dataframe),
        "columns": list(cleaned_dataframe.columns),
        "shape": cleaned_dataframe.shape,
        "cleaning_summary": cleaning_summary
    }