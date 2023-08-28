import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css'],
})
export class PostdetailsComponent implements OnInit {
  title: string = '';
  content: string = '';
  imageData: any;

  success: boolean = false;
  error: boolean = false;

  constructor(private service: PostService) {}

  ngOnInit(): void {}

  handleFileChange(e: any): void {
    this.imageData = e.target.files[0];
  }

  uploadPost(e: any): void {
    const user = JSON.parse(localStorage.getItem('user')!);
    const data = new FormData();
    data.append('title', this.title);
    data.append('content', this.content);
    data.append('image', this.imageData);
    data.append('creator', user.name);

    this.service.addPost(data).subscribe((post) => {
      if (post.id > 0) {
        e.target.reset;

        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 3000);
      } else {
        e.target.reset;

        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    });
  }
}
