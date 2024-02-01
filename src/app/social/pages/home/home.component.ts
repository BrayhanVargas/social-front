import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public posts: any[] = [];

  constructor(
    public postsService: PostsService,
  ) { }

  ngOnInit() {
    this.postsService.getAllPosts().subscribe((data: any) => {
      console.log(data)
      const { posts } = data
      this.posts = posts
      console.log("home", posts)
    })
  }
}
