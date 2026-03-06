import React from 'react';
import DashboardLayout from './components/DashboardLayout';
import TodayPanel from './components/TodayPanel';
import LeadsPanel from './components/LeadsPanel';
import QuotationsPanel from './components/QuotationsPanel';
import { Booking } from './types/booking';
import { Lead } from './types/lead';
import { Quotation } from './types/quotation';

// MOCK DATA
const mockBookings: Booking[] = [
  {
    id: "book_1",
    quotation_id: "quot_1",
    customer_id: "cust_1",
    customer_name: "Ahmad",
    status: "scheduled",
    booking_date: "2024-05-15T14:00:00Z",
    estimated_duration_minutes: 120,
    assigned_mechanic: "Ali",
    created_at: "2024-05-10T10:00:00Z",
    updated_at: "2024-05-10T10:00:00Z"
  }
];

const mockLeads: Lead[] = [
  {
    id: "lead_1",
    customer_id: "cust_1",
    customer_name: "Ahmad",
    source: "whatsapp",
    status: "unread",
    inquiry_details: "Need new tires",
    vehicle_model: "Proton Saga",
    created_at: "2024-05-15T10:00:00Z",
    updated_at: "2024-05-15T10:00:00Z"
  }
];

const mockQuotations: Quotation[] = [
  {
    id: "quot_1",
    lead_id: "lead_1",
    customer_id: "cust_1",
    customer_name: "Ahmad",
    status: "pending",
    total_amount: 1000.0,
    line_items: [],
    valid_until: "2024-05-22T10:00:00Z",
    created_at: "2024-05-15T11:00:00Z",
    updated_at: "2024-05-15T11:00:00Z"
  }
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full pb-8">
        <div className="md:col-span-1 h-full flex flex-col gap-8">
          <div className="flex-1">
             <LeadsPanel leads={mockLeads} />
          </div>
          <div className="flex-1">
             <QuotationsPanel quotations={mockQuotations} />
          </div>
        </div>
        <div className="md:col-span-2 h-full">
           <TodayPanel bookings={mockBookings} />
        </div>
      </div>
    </DashboardLayout>
  );
}
