import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    public postsService: PostsService,
  ) { }

  ngOnInit() {
    this.postsService.getPosts(1).subscribe((data: any) => {
      console.log(data)
    })
  }
}
