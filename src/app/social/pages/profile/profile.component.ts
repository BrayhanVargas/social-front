import { Component } from '@angular/core';
import { Post, PostsResponse } from 'src/app/interfaces/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

})
export class ProfileComponent {
  public posts: Post[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPostsById(1)
      .subscribe((data: PostsResponse) => {
        const { posts } = data
        this.posts = posts
      });
  }
}
