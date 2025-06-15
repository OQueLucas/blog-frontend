import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostSummaryResponse } from '@blog-feature/data';

@Component({
  selector: 'app-post-card',
  imports: [RouterModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss',
})
export class PostCardComponent {
  public post = input.required<PostSummaryResponse>();
}
