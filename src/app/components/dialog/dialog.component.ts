import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']

})
export class DialogComponent {
  constructor(private dialogRef: MatDialogRef<DialogComponent>, private postsService: PostsService) { }
  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    })
  }

  createPost() {
    if (this.form?.valid) {
      const formData = {
        ...this.form.value,
        userId: localStorage.getItem('id')
      }
      this.postsService.createPost(formData).subscribe((data: any) => {
        console.log('datar', data)
        this.dialogRef.close();
      })
    }
  }
}
