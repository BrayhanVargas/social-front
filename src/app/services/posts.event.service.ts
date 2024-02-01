import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostEventService {
  private postCreatedSubject = new Subject<void>();

  postCreated$ = this.postCreatedSubject.asObservable();

  emitPostCreated() {
    this.postCreatedSubject.next();
  }
}
