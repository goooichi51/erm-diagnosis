export interface DiagnosisSession {
  id: string;
  lead_id: string | null;
  status: "in_progress" | "completed" | "registered";
  total_score: number | null;
  total_percentage: number | null;
  maturity_level: number | null;
  category_scores: Record<string, number> | null;
  industry: string | null;
  company_size: string | null;
  started_at: string;
  completed_at: string | null;
  created_at: string;
}

export interface DiagnosisAnswer {
  id: string;
  session_id: string;
  question_id: number;
  category: string;
  answer_value: number;
  answered_at: string;
}

export interface Lead {
  id: string;
  email: string;
  company_name: string | null;
  contact_name: string | null;
  job_title: string | null;
  industry: string | null;
  company_size: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  referrer_url: string | null;
  status: "new" | "contacted" | "qualified" | "converted";
  privacy_agreed: boolean;
  marketing_agreed: boolean;
  created_at: string;
  updated_at: string;
}
