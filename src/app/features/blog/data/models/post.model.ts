import { Author } from './author.model';
import { PostComment } from './post-comment.model';

export interface PostModel {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  createdAt: string;
  author: Author;
  categories: string[];
  tags: string[];
  comments?: PostComment[];
}
