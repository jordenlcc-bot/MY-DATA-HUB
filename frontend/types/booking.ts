export interface Booking {
  id: string;
  quotation_id: string;
  customer_id: string;
  customer_name: string;
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  booking_date: string;
  estimated_duration_minutes: number;
  assigned_mechanic: string;
  created_at: string;
  updated_at: string;
}

export interface BookingCreateRequest {
  quotation_id: string;
  booking_date: string;
  estimated_duration_minutes: number;
  assigned_mechanic: string;
}

export interface BookingCompleteRequest {
  notes?: string;
}

export interface BookingResponse {
  data: Booking[];
}

export interface BookingCreateResponse {
  id: string;
  message: string;
}

export interface BookingCompleteResponse {
  id: string;
  status: string;
  message: string;
}
