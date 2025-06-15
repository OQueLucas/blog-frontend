export interface PostCommentRequest {
  comment: string;
  authorId: number;
  postId: number;
  parentCommentId: number | null;
}
