import { Component, input } from '@angular/core';
import { Post } from '@blog-feature/models/post';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-card',
  imports: [RouterModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
})
export class PostCardComponent {
  public post = input.required<Post>();
}
