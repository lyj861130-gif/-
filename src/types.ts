export interface BusinessArea {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'Notice' | 'News';
}

export interface Inquiry {
  companyName: string;
  managerName: string;
  email: string;
  phone: string;
  inquiry: string;
  createdAt: number;
}
