export interface Lead {
  id: string;
  customer_id: string;
  customer_name: string;
  source: 'whatsapp' | 'walk-in' | 'phone';
  status: 'unread' | 'read' | 'quoted' | 'archived';
  inquiry_details: string;
  vehicle_model: string;
  created_at: string;
  updated_at: string;
}

export interface LeadResponse {
  data: Lead[];
}
