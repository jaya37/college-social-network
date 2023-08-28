import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class StudentHomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.service.getAllPosts().subscribe((posts) => {
      posts.forEach((post) => {
        if (post.approved) {
          this.posts.push(post);
        }
      });
    });
  }

  likePost(post: Post): void {
    post.likes++;
    this.service.updatePost(post).subscribe((post) => {
      if (post.id) {
        this.getAllPosts();
      }
    });
  }

  dislikePost(post: Post): void {
    post.dislikes++;
    this.service.updatePost(post).subscribe((post) => {
      this.service.updatePost(post).subscribe((post) => {
        if (post.id) {
          this.getAllPosts();
        }
      });
    });
  }
}
