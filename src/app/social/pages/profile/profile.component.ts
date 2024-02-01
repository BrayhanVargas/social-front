import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/posts';
import { PostsService } from 'src/app/services/posts.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { Subscription } from 'rxjs';
import { PostEventService } from 'src/app/services/posts.event.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

})
export class ProfileComponent {
  public posts: Post[] = [];
  private postEventSubscription!: Subscription;

  constructor(private postsService: PostsService, private dialog: MatDialog, private postEventService: PostEventService) {
    this.postEventSubscription = this.postEventService.postCreated$.subscribe(() => {
      this.loadPosts();
    });
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('id');
    if (userId) {
      this.postsService.getPostsById(userId)
        .subscribe((data: Post[]) => {
          this.posts = data
        });
    }
  }

  ngOnDestroy() {
    this.postEventSubscription.unsubscribe();
  }


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '50%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  loadPosts() {
    const userId = localStorage.getItem('id');
    if (userId) {
      this.postsService.getPostsById(userId)
        .subscribe((data: Post[]) => {
          this.posts = data;
        });
    }
  }
}
