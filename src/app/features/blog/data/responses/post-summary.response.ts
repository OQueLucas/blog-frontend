import { Author } from '../models/author.model';

export interface PostSummaryResponse {
  id: number;
  createdAt: string;
  title: string;
  body: string;
  excerpt: string;
  author: Author;
  categories: string[];
  tags: string[];
  commentCount: number;
}
