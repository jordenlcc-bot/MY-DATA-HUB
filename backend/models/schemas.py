from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class Customer(BaseModel):
    id: str
    name: str
    phone: str
    email: Optional[str] = None
    vehicle_plate: str
    vehicle_year: int
    consent_given: bool
    consent_date: datetime
    data_source: str
    created_at: datetime
    updated_at: datetime

class Lead(BaseModel):
    id: str
    customer_id: str
    source: str
    status: str
    inquiry_details: str
    vehicle_model: str
    whatsapp_message_id: Optional[str] = None
    attachment_urls: Optional[List[str]] = None
    created_at: datetime
    updated_at: datetime

class QuotationLineItem(BaseModel):
    type: str
    description: str
    quantity: int
    unit_price: float
    total: float

class Quotation(BaseModel):
    id: str
    lead_id: str
    customer_id: str
    status: str
    total_amount: float
    line_items: List[QuotationLineItem]
    valid_until: datetime
    created_at: datetime
    updated_at: datetime

class QuotationCreateRequest(BaseModel):
    lead_id: str
    valid_days: int
    line_items: List[QuotationLineItem]

class Booking(BaseModel):
    id: str
    quotation_id: str
    customer_id: str
    status: str
    booking_date: datetime
    vehicle_model: str
    estimated_duration_minutes: int
    assigned_mechanic: str
    created_at: datetime
    updated_at: datetime

class BookingCreateRequest(BaseModel):
    quotation_id: str
    booking_date: datetime
    vehicle_model: str
    estimated_duration_minutes: int
    assigned_mechanic: str

class BookingCompleteRequest(BaseModel):
    notes: Optional[str] = None
