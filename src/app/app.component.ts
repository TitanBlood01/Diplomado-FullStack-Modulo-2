import { Component } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [PostListComponent],
})
export class AppComponent {
  title = 'blog-personal';
}
