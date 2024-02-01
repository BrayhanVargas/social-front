import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/posts';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() post!: Post;

  constructor() { }
  ngOnInit(): void {
    if (!this.post) throw Error('Hero property is required');
  }
}
