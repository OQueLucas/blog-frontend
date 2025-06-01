import { inject, Injectable } from '@angular/core';
import { Post } from '@blog-feature/models/post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  baseUrl = `${environment.baseUrl}/posts`;

  private httpClient = inject(HttpClient);

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.baseUrl);
  }
}
