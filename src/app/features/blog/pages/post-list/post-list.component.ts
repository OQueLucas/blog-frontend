import { Component, OnInit, signal } from '@angular/core';
import { Post } from '@blog-feature/models/post';
import { BlogService } from '@blog-feature/service/blog.service';
import { PostCardComponent } from '@blog-feature/components/post-card/post-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [PostCardComponent, RouterModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit {
  posts = signal<Post[]>([]);

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getPosts().subscribe({
      next: (posts) => this.posts.set(posts),
      error: (err) => console.error('Error fetching posts:', err),
    });
  }
}
