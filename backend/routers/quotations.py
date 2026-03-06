from fastapi import APIRouter, Request, HTTPException, Depends
from typing import List
from ..models.schemas import Quotation, QuotationCreateRequest
from ..middleware.audit import log_audit
from datetime import datetime

router = APIRouter(prefix="/quotations", tags=["Quotations"])

@router.get("/", response_model=dict)
async def get_quotations(request: Request, status: str = "pending"):
    workshop_id = request.state.workshop_id

    # MOCK IMPLEMENTATION
    # db.collection('workshops').document(workshop_id).collection('quotations').where('status', '==', status).get()

    mock_quotes = [
         {
            "id": "quot_1",
            "lead_id": "lead_1",
            "customer_id": "cust_1",
            "customer_name": "Ahmad",
            "status": "pending",
            "total_amount": 1000.0,
            "valid_until": "2024-05-22T10:00:00Z",
            "created_at": "2024-05-15T11:00:00Z"
        }
    ]
    return {"data": mock_quotes}

@router.post("/", response_model=dict, status_code=201)
async def create_quotation(request: Request, quotation_req: QuotationCreateRequest):
    workshop_id = request.state.workshop_id

    # MOCK IMPLEMENTATION
    # 1. Start batch
    # 2. Add to `workshops/{workshop_id}/quotations`
    # 3. Update `workshops/{workshop_id}/leads/{lead_id}` status to 'quoted'
    # 4. Commit batch

    new_quote_id = "mock_quot_id_123"

    await log_audit(request, "CREATE_QUOTATION", "quotations", new_quote_id)
    await log_audit(request, "UPDATE_LEAD_STATUS", "leads", quotation_req.lead_id, {"status": "quoted"})

    return {"id": new_quote_id, "message": "Quotation created successfully. Lead status updated."}
