import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment.development';
import {
  PostModel,
  PostSummaryResponse,
  CreatePostRequest,
} from '@blog-feature/data';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  baseUrl = `${environment.baseUrl}/posts`;

  private httpClient = inject(HttpClient);

  getPosts(): Observable<PostSummaryResponse[]> {
    return this.httpClient.get<PostSummaryResponse[]>(this.baseUrl);
  }

  getPostById(id: number): Observable<PostModel | undefined> {
    return this.httpClient.get<PostModel>(`${this.baseUrl}/${id}`);
  }
}
