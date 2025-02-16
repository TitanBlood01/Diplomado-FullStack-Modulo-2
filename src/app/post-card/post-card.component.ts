import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-card',
  standalone: true,
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  @Input() postData!: {id: number, title: string; content: string }; 
  @Output() deletePost = new EventEmitter<number>(); 
  @Output() editPost = new EventEmitter<{id: number; title: string; content: string}>(); 

  onDelete() {
    this.deletePost.emit(this.postData.id); 
  }

  onEdit() {
    this.editPost.emit(this.postData);
  }
}
