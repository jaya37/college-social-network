import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-approvepost',
  templateUrl: './approvepost.component.html',
  styleUrls: ['./approvepost.component.css'],
})
export class ApprovepostComponent implements OnInit {
  posts: Post[] = [];

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.service.getAllPosts().subscribe((posts) => {
      if (posts.length > 0) {
        posts.forEach((post) => {
          if (!post.approved) {
            this.posts.push(post);
          }
        });
      }
    });
  }

  approvePost(post: Post): void {
    post.approved = true;
    this.service.updatePost(post).subscribe((data) => {
      console.log(data);
      this.getAllPosts();
    });
  }

  deletePost(postId: number): void {
    this.service.deletePost(postId).subscribe((data) => {
      this.getAllPosts();
    });
  }
}
