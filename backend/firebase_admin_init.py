import os
import firebase_admin
from firebase_admin import credentials, firestore

# Ensure the service account key is available in the environment
firebase_service_account_path = os.environ.get('FIREBASE_SERVICE_ACCOUNT')

if not firebase_admin._apps:
    if firebase_service_account_path and os.path.exists(firebase_service_account_path):
        cred = credentials.Certificate(firebase_service_account_path)
        firebase_admin.initialize_app(cred)
    else:
        # Fallback to default credentials (e.g. Google Cloud Run, App Engine)
        firebase_admin.initialize_app()

# Export a firestore client instance
firestore_client = firestore.client()
