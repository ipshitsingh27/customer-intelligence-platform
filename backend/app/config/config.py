import os
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()


class Config:
    """
    Base configuration for the Customer Intelligence Platform.
    All application-wide settings should be defined here.
    """

    # ----------------------------------------
    # Flask Configuration
    # ----------------------------------------
    SECRET_KEY = os.getenv("SECRET_KEY")

    HOST = os.getenv("HOST")

    PORT = int(os.getenv("PORT"))

    DEBUG = os.getenv("FLASK_ENV") == "development"

    # ----------------------------------------
    # File Upload Configuration
    # ----------------------------------------
    UPLOAD_FOLDER = os.getenv("UPLOAD_FOLDER")

    MAX_CONTENT_LENGTH = int(os.getenv("MAX_CONTENT_LENGTH"))

    ALLOWED_EXTENSIONS = {
        ext.strip()
        for ext in os.getenv("ALLOWED_EXTENSIONS", "").split(",")
        if ext.strip()
    }

    # ----------------------------------------
    # Database
    # ----------------------------------------
    DATABASE_URL = os.getenv("DATABASE_URL")

    # ----------------------------------------
    # AI Configuration
    # ----------------------------------------
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")