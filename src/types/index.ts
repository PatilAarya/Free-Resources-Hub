export interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'development' | 'design' | 'ai' | 'productivity';
  url: string;
  imageUrl: string;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
}