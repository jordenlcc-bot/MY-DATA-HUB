export interface QuotationLineItem {
  type: 'product' | 'installation';
  description: string;
  quantity: number;
  unit_price: number;
  total: number;
}

export interface Quotation {
  id: string;
  lead_id: string;
  customer_id: string;
  customer_name: string;
  status: 'pending' | 'accepted' | 'rejected' | 'booked';
  total_amount: number;
  line_items: QuotationLineItem[];
  valid_until: string;
  created_at: string;
  updated_at: string;
}

export interface QuotationCreateRequest {
  lead_id: string;
  valid_days: number;
  line_items: QuotationLineItem[];
}

export interface QuotationResponse {
  data: Quotation[];
}

export interface QuotationCreateResponse {
  id: string;
  message: string;
}
