from fastapi import APIRouter, Request, HTTPException, Depends
from typing import List, Optional
from ..models.schemas import Booking, BookingCreateRequest, BookingCompleteRequest
from ..middleware.audit import log_audit
from ..firebase_admin_init import firestore_client
from datetime import datetime
import uuid

router = APIRouter(prefix="/bookings", tags=["Bookings"])

@router.get("/", response_model=dict)
async def get_bookings(request: Request, date: str = "today"):
    workshop_id = request.state.workshop_id

    try:
        # Example: Fetching today's bookings.
        # Ensure your datetime formatting logic matches how you store timestamps.
        # This is a simplified example.
        start_of_day = datetime.utcnow().replace(hour=0, minute=0, second=0, microsecond=0).isoformat()
        end_of_day = datetime.utcnow().replace(hour=23, minute=59, second=59, microsecond=999999).isoformat()

        bookings_ref = firestore_client.collection('workshops').document(workshop_id).collection('bookings')

        # Real Firestore query restricted to tenant's subcollection
        query = bookings_ref.where('booking_date', '>=', start_of_day).where('booking_date', '<=', end_of_day).stream()

        bookings_data = []
        for doc in query:
            data = doc.to_dict()
            data['id'] = doc.id
            bookings_data.append(data)

        return {"data": bookings_data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/", response_model=dict, status_code=201)
async def create_booking(request: Request, booking_req: BookingCreateRequest):
    workshop_id = request.state.workshop_id

    try:
        # Batch write to ensure atomicity
        batch = firestore_client.batch()

        # 1. Prepare new booking document
        new_book_id = str(uuid.uuid4())
        booking_ref = firestore_client.collection('workshops').document(workshop_id).collection('bookings').document(new_book_id)

        booking_data = {
            "quotation_id": booking_req.quotation_id,
            "status": "scheduled",
            "booking_date": booking_req.booking_date.isoformat(),
            "estimated_duration_minutes": booking_req.estimated_duration_minutes,
            "assigned_mechanic": booking_req.assigned_mechanic,
            "vehicle_model": "Unknown", # You'd fetch this from the quotation/lead
            "created_at": datetime.utcnow().isoformat(),
            "updated_at": datetime.utcnow().isoformat(),
        }

        batch.set(booking_ref, booking_data)

        # 2. Update quotation status
        quotation_ref = firestore_client.collection('workshops').document(workshop_id).collection('quotations').document(booking_req.quotation_id)
        batch.update(quotation_ref, {"status": "booked", "updated_at": datetime.utcnow().isoformat()})

        # 3. Commit the batch
        batch.commit()

        # Log the audit trails
        await log_audit(request, "CREATE_BOOKING", "bookings", new_book_id)
        await log_audit(request, "UPDATE_QUOTATION_STATUS", "quotations", booking_req.quotation_id, {"status": "booked"})

        return {"id": new_book_id, "message": "Booking created successfully. Quotation status updated."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.patch("/{id}/complete", response_model=dict)
async def complete_booking(id: str, request: Request, comp_req: Optional[BookingCompleteRequest] = None):
    workshop_id = request.state.workshop_id

    try:
        booking_ref = firestore_client.collection('workshops').document(workshop_id).collection('bookings').document(id)

        update_data = {
            "status": "completed",
            "updated_at": datetime.utcnow().isoformat()
        }

        booking_ref.update(update_data)

        await log_audit(request, "UPDATE_BOOKING_STATUS", "bookings", id, {"status": "completed", "notes": comp_req.notes if comp_req else None})

        return {"id": id, "status": "completed", "message": "Booking marked as completed."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
