import { Component, OnInit, signal } from '@angular/core';
import { BlogService } from '@blog-feature/services/blog.service';
import { PostCardComponent } from '@blog-feature/components/post-card/post-card.component';
import { RouterModule } from '@angular/router';
import { PostSummaryResponse } from '@blog-feature/data';

@Component({
  selector: 'app-post-list',
  imports: [PostCardComponent, RouterModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit {
  posts = signal<PostSummaryResponse[]>([]);

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getPosts().subscribe({
      next: (posts) => this.posts.set(posts),
      error: (err) => console.error('Error fetching posts:', err),
    });
  }
}
