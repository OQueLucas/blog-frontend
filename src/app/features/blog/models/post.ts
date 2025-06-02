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

export interface PostDetail {
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

export interface PostComment {
  author: Author;
  text: string;
  createdAt: string;
}

export interface sendComment {
  comment: string;
  authorId: number;
  postId: number;
  parentCommentId: number | null;
}

export interface Author {
  id: number;
  name: string;
}
