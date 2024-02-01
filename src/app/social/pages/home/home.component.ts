import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public posts: Post[] = [];

  constructor(
    public postsService: PostsService,
  ) { }

  ngOnInit() {
    this.postsService.getAllPosts()
      .subscribe((data: Post[]) => {
        this.posts = data
      })
  }
}
