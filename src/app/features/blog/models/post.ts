export interface Post {
  id: number;
  createdAt: string; // ou Date, dependendo do seu parse
  title: string;
  body: string;
  excerpt: string;
  author: Author;
  categories: string[];
  tags: string[];
  commentCount: number;
}

export interface Author {
  id: number;
  name: string;
}
