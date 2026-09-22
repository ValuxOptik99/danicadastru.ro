export interface ServiceRequestData {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string | null;
  locality: string | null;
  message: string;
  status: string;
  createdAt: Date;
}
