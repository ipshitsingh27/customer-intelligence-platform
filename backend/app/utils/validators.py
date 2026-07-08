import os

ALLOWED_EXTENSIONS = {"csv"}


def allowed_file(filename):
    """
    Check whether uploaded file has an allowed extension.
    """
    if "." not in filename:
        return False

    extension = filename.rsplit(".", 1)[1].lower()
    return extension in ALLOWED_EXTENSIONS


def validate_upload(file):
    """
    Validate uploaded file before processing.
    """

    if file is None:
        return False, "No file received."

    if file.filename == "":
        return False, "No file selected."

    if not allowed_file(file.filename):
        return False, "Only CSV files are allowed."

    return True, "Validation successful."