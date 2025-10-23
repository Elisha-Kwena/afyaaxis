export interface Doctor {
  name: string;
  specialty: string;
  avatar: string;
}

export interface VitalSigns {
  blood_pressure: string;
  heart_rate: string;
  temperature: string;
  respiratory_rate: string;
}

export interface Medication {
  name: string;
  dosage: string;
  supply: string;
  refills: string;
}

export interface LabResult {
  test_name: string;
  lab: string;
  sample_collected: string;
  expected_date: string;
  approved_by: string;
}

export interface BillingItem {
  description: string;
  amount: string;
}

export interface Billing {
  total: string;
  items: BillingItem[];
  insurance_paid: string;
  patient_owes: string;
}

export interface Appointment {
  id: number;
  doctor: Doctor;
  date: string;
  time: string;
  duration: string;
  type: 'Telehealth' | 'In-Person';
  location: string;
  reason: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled' | 'Pending';
  notes: string;
  prescription_issued?: boolean;
  video_link?: string | null;
  created_at: string;
  updated_at?: string;
  completed_at?: string;
  patient_name: string;
  patient_id: string;
  patient_gender: string;
  patient_age: string;
  guardian_name: string;
  patient_phone: string;
  vital_signs: VitalSigns;
  medications: Medication[];
  lab_results: LabResult[];
  billing: Billing;
}