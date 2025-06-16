export interface Provider {
  id: string;
  name: string;
  specialization: string;
  location: string;
  rating: number; // 1-5
  description: string;
  email: string;
  phone: string;
  imageUrl: string;
  imageHint: string; // for data-ai-hint
}
