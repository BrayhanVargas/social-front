import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/posts';
import { PostsService } from 'src/app/services/posts.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

})
export class ProfileComponent {
  public posts: Post[] = [];

  constructor(private postsService: PostsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('id');
    console.log(userId)
    if (userId) {
      this.postsService.getPostsById(userId)
        .subscribe((data: Post[]) => {
          this.posts = data
        });
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '50%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
