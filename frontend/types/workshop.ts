export interface Mechanic {
  name: string;
  certification: string;
}

export interface Workshop {
  id: string;
  name: string;
  mechanics: Mechanic[];
  parts_policy: 'new' | 'used' | 'reconditioned';
  warranty_parts_months: number;
  warranty_labour_months: number;
  ssm_number: string;
  tin_number: string;
  created_at: string;
  updated_at: string;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  vehicle_plate: string;
  vehicle_year: number;
  consent_given: boolean;
  consent_date: string;
  data_source: 'whatsapp' | 'walk-in' | 'phone';
  created_at: string;
  updated_at: string;
}
