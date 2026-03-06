# Workshop Management Dashboard Design

## Firestore Schema Design

**Tenant Isolation:** All operational data is stored in subcollections under the `workshops` document (`workshops/{workshop_id}/<collection>`).

### Collection: `workshops` (Root Level)
*   **Document ID:** `workshop_id`
*   **Fields:**
    *   `name`: string
    *   `mechanics`: array of objects
        *   `name`: string
        *   `certification`: string
    *   `parts_policy`: string (e.g., "new", "used", "reconditioned")
    *   `warranty_parts_months`: integer
    *   `warranty_labour_months`: integer
    *   `ssm_number`: string
    *   `tin_number`: string
    *   `created_at`: timestamp
    *   `updated_at`: timestamp

---
*The following are subcollections under `workshops/{workshop_id}`:*

### Subcollection: `customers`
*   **Document ID:** Auto-generated ID
*   **Fields:**
    *   `name`: string
    *   `phone`: string
    *   `email`: string (optional)
    *   `consent_given`: boolean
    *   `consent_date`: timestamp
    *   `data_source`: string (e.g., "whatsapp", "walk-in")
    *   `created_at`: timestamp
    *   `updated_at`: timestamp

### Subcollection: `leads`
*   **Document ID:** Auto-generated ID
*   **Fields:**
    *   `customer_id`: reference (path to `customers/{customer_id}`)
    *   `source`: string (e.g., "whatsapp")
    *   `status`: string (e.g., "unread", "read", "quoted", "archived")
    *   `inquiry_details`: string
    *   `vehicle_model`: string
    *   `created_at`: timestamp
    *   `updated_at`: timestamp

### Subcollection: `quotations`
*   **Document ID:** Auto-generated ID
*   **Fields:**
    *   `lead_id`: reference (path to `leads/{lead_id}`)
    *   `customer_id`: reference (path to `customers/{customer_id}`)
    *   `status`: string (e.g., "pending", "accepted", "rejected", "booked")
    *   `total_amount`: number
    *   `line_items`: array of objects
        *   `type`: string (e.g., "product", "installation")
        *   `description`: string
        *   `quantity`: integer
        *   `unit_price`: number
        *   `total`: number
    *   `valid_until`: timestamp
    *   `created_at`: timestamp
    *   `updated_at`: timestamp

### Subcollection: `bookings`
*   **Document ID:** Auto-generated ID
*   **Fields:**
    *   `quotation_id`: reference (path to `quotations/{quotation_id}`)
    *   `customer_id`: reference (path to `customers/{customer_id}`)
    *   `status`: string (e.g., "scheduled", "in_progress", "completed", "cancelled")
    *   `booking_date`: timestamp
    *   `estimated_duration_minutes`: integer
    *   `assigned_mechanic`: string
    *   `created_at`: timestamp
    *   `updated_at`: timestamp

### Subcollection: `invoices`
*   **Document ID:** Auto-generated ID
*   **Fields:**
    *   `booking_id`: reference (path to `bookings/{booking_id}`)
    *   `customer_id`: reference (path to `customers/{customer_id}`)
    *   `lhdn_uuid`: string
    *   `lhdn_status`: string (e.g., "pending", "submitted", "validated", "rejected")
    *   `buyer_tin`: string
    *   `seller_tin`: string
    *   `line_items`: array of objects
    *   `subtotal`: number
    *   `tax_amount`: number
    *   `total_amount`: number
    *   `submission_date`: timestamp
    *   `created_at`: timestamp
    *   `updated_at`: timestamp

### Subcollection: `audit_logs`
*   **Document ID:** Auto-generated ID
*   **Fields:**
    *   `user_id`: string
    *   `action`: string
    *   `target_collection`: string
    *   `target_id`: string
    *   `timestamp`: timestamp
    *   `ip_address`: string
    *   `changes`: object (optional)

---

## REST API Endpoints Design

**General Details:**
*   **Authentication:** Requires JWT token via `Authorization: Bearer <token>`.
*   **Tenant Isolation:** `workshop_id` is extracted from the JWT token and automatically scopes operations to `workshops/{workshop_id}/...`.

| Endpoint | Method | Path | Query Params | Request Body | Response | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **List Unread Leads** | `GET` | `/leads` | `status=unread` | None | `200 OK`: `{ "data": [ { lead_obj } ] }` | Retrieves leads with "unread" status. |
| **List Pending Quotations** | `GET` | `/quotations` | `status=pending` | None | `200 OK`: `{ "data": [ { quote_obj } ] }` | Retrieves quotations with "pending" status. |
| **List Today's Bookings** | `GET` | `/bookings` | `date=today` | None | `200 OK`: `{ "data": [ { booking_obj } ] }` | Parses "today" to query bookings within local 00:00 - 23:59. |
| **Create Quotation (from Lead)** | `POST` | `/quotations` | None | `{ "lead_id": "...", "line_items": [ ... ] }` | `201 Created`: `{ "id": "...", "message": "..." }` | Atomic: Creates quote + updates `lead.status` to "quoted". |
| **Create Booking (from Quotation)** | `POST` | `/bookings` | None | `{ "quotation_id": "...", "booking_date": "...", "assigned_mechanic": "...", "estimated_duration_minutes": 120 }` | `201 Created`: `{ "id": "...", "message": "..." }` | Atomic: Creates booking + updates `quotation.status` to "booked". |
| **Mark Booking as Completed** | `PATCH` | `/bookings/{id}/complete` | None | `{ "notes": "..." }` (optional) | `200 OK`: `{ "id": "...", "status": "completed" }` | Updates booking status to "completed". May trigger invoice creation async. |
