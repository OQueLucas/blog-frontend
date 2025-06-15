import { Author } from './author.model';

export interface PostComment {
  author: Author;
  text: string;
  createdAt: string;
}
