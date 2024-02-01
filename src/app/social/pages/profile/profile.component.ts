import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

})
export class ProfileComponent {
  public posts: any[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts(1)
      .subscribe(data => {
        const { posts } = data
        this.posts = posts
        console.log("profile", posts)
      });
  }
}
