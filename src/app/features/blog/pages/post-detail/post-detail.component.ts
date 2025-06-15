import { Component, inject, signal } from '@angular/core';
import { PostModel, PostCommentRequest } from '@blog-feature/data';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '@blog-feature/services/blog.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-post-detail',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent {
  post = signal<PostModel | undefined>(undefined);
  commentForm!: FormGroup;

  successMessage = '';
  errorMessage = '';
  isSubmitting = signal(false);

  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  private fb = inject(FormBuilder);

  get postData(): PostModel | undefined {
    return this.post();
  }

  ngOnInit() {
    this.commentForm = this.fb.group({
      authorName: ['', Validators.required],
      content: ['', [Validators.required, Validators.minLength(5)]],
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blogService.getPostById(id).subscribe((post) => this.post.set(post));
  }

  addComment() {
    if (this.commentForm.invalid) {
      this.errorMessage = 'Por favor, preencha todos os campos corretamente.';
      this.successMessage = '';
      return;
    }

    this.isSubmitting.set(true);

    const newComment: PostCommentRequest = {
      authorId: 7,
      comment: this.commentForm.value.content,
      postId: this.post()!.id,
      parentCommentId: null,
    };

    if (this.postData?.comments) {
      this.postData.comments.push({
        author: {
          id: 1,
          name: 'teste',
        },
        createdAt: new Date().toISOString(),
        text: newComment.comment,
      });
    }

    this.commentForm.reset();
    this.isSubmitting.set(false);
  }

  goBack() {
    history.back();
  }
}
