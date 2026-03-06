from fastapi import Request, HTTPException
import firebase_admin
from firebase_admin import auth

async def extract_tenant(request: Request):
    auth_header = request.headers.get("Authorization")
    if not auth_header or not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing or invalid Authorization header")

    token = auth_header.split(" ")[1]

    try:
        # decoded_token = auth.verify_id_token(token)
        # workshop_id = decoded_token.get('workshop_id')

        # MOCK IMPLEMENTATION
        workshop_id = "mock_workshop_id"

        if not workshop_id:
             raise HTTPException(status_code=403, detail="User does not belong to a workshop")

        request.state.workshop_id = workshop_id
        request.state.user_id = "mock_user_id" # MOCK

    except Exception as e:
        raise HTTPException(status_code=401, detail=f"Invalid authentication credentials: {e}")
