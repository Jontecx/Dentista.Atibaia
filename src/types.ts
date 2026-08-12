export interface Doctor {
  name: string;
  cro: string;
  role: string;
  specialties: string[];
  bio: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  benefits: string[];
  iconName: string;
  image: string;
  whatsappMessage: string;
}

export interface Differential {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface StepProtocol {
  step: number;
  title: string;
  description: string;
  highlight: string;
  duration: string;
}
