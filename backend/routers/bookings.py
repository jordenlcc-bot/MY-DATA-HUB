from fastapi import APIRouter, Request, HTTPException, Depends
from typing import List, Optional
from ..models.schemas import Booking, BookingCreateRequest, BookingCompleteRequest
from ..middleware.audit import log_audit
from datetime import datetime

router = APIRouter(prefix="/bookings", tags=["Bookings"])

@router.get("/", response_model=dict)
async def get_bookings(request: Request, date: str = "today"):
    workshop_id = request.state.workshop_id

    # MOCK IMPLEMENTATION
    # 1. Parse 'date' param
    # 2. db.collection('workshops').document(workshop_id).collection('bookings').where('booking_date', '>=', start_of_day).where('booking_date', '<=', end_of_day).get()

    mock_bookings = [
        {
            "id": "book_1",
            "quotation_id": "quot_1",
            "customer_id": "cust_1",
            "customer_name": "Ahmad",
            "status": "scheduled",
            "booking_date": "2024-05-15T14:00:00Z",
            "estimated_duration_minutes": 120,
            "assigned_mechanic": "Ali"
        }
    ]
    return {"data": mock_bookings}

@router.post("/", response_model=dict, status_code=201)
async def create_booking(request: Request, booking_req: BookingCreateRequest):
    workshop_id = request.state.workshop_id

    # MOCK IMPLEMENTATION
    # 1. Start batch
    # 2. Add to `workshops/{workshop_id}/bookings`
    # 3. Update `workshops/{workshop_id}/quotations/{quotation_id}` status to 'booked'
    # 4. Commit batch

    new_book_id = "mock_book_id_456"

    await log_audit(request, "CREATE_BOOKING", "bookings", new_book_id)
    await log_audit(request, "UPDATE_QUOTATION_STATUS", "quotations", booking_req.quotation_id, {"status": "booked"})

    return {"id": new_book_id, "message": "Booking created successfully. Quotation status updated."}

@router.patch("/{id}/complete", response_model=dict)
async def complete_booking(id: str, request: Request, comp_req: Optional[BookingCompleteRequest] = None):
    workshop_id = request.state.workshop_id

    # MOCK IMPLEMENTATION
    # 1. Update `workshops/{workshop_id}/bookings/{id}` status to 'completed'
    # 2. (Async) Trigger invoice creation for LHDN

    await log_audit(request, "UPDATE_BOOKING_STATUS", "bookings", id, {"status": "completed", "notes": comp_req.notes if comp_req else None})

    return {"id": id, "status": "completed", "message": "Booking marked as completed."}
