from fastapi import APIRouter, Request, HTTPException, Depends
from typing import List
from ..models.schemas import Lead

router = APIRouter(prefix="/leads", tags=["Leads"])

@router.get("/", response_model=dict)
async def get_leads(request: Request, status: str = "unread"):
    workshop_id = request.state.workshop_id

    # MOCK IMPLEMENTATION
    # db.collection('workshops').document(workshop_id).collection('leads').where('status', '==', status).get()

    mock_leads = [
        {
            "id": "lead_1",
            "customer_id": "cust_1",
            "customer_name": "Ahmad",
            "source": "whatsapp",
            "status": "unread",
            "inquiry_details": "Need new tires",
            "vehicle_model": "Proton Saga",
            "created_at": "2024-05-15T10:00:00Z"
        }
    ]
    return {"data": mock_leads}
