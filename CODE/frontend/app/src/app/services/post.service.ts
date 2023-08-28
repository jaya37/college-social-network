import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = 'http://localhost:8080/posts/';
  constructor(private client: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.client.get<Post[]>(this.url);
  }

  getPostById(id: number): Observable<Post> {
    return this.client.get<Post>(this.url + id);
  }

  addPost(post: any): Observable<any> {
    return this.client.post<any>(this.url, post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.client.patch<Post>(this.url + post.id, JSON.stringify(post), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  deletePost(id: number): Observable<Post> {
    return this.client.delete<Post>(this.url + id);
  }
}
