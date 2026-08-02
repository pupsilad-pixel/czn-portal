// Общие типы для всего приложения

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  items?: NavItem[];
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  category?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  date: string;
  category: string;
  views?: number;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  type: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  status: "active" | "completed" | "planned";
  participants?: number;
}

export interface VacancyItem {
  id: string;
  title: string;
  company: string;
  salary: string;
  location: string;
  employment: string;
  experience: string;
  description: string;
  publishedDate: string;
}

export interface PartnerItem {
  id: string;
  name: string;
  logo: string;
  href?: string;
}

export interface BannerItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  buttonText: string;
}
