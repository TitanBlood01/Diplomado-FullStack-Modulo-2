import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from '../post-card/post-card.component';
import { PostService } from '../services/post.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  standalone: true,
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  imports: [CommonModule, PostCardComponent, FormsModule],
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  newPostTitle = '';
  newPostContent = '';
  editandoPostId: number | null = null;
  editTitle = '';
  editContent = '';
    /*{ id: 1, title: 'Primera Publicación', content: 'Mi primera publicacion' },
    { id: 2, title: 'Segunda Publicación', content: 'Mi segunda publicación.' },
    { id: 3, title: 'Tercera Publicación', content: 'Mi tercera publicación.' },*/

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
  
  addPost() {
    if (this.newPostTitle.trim() && this.newPostContent.trim()) {
      this.postService.añadirPost({
        title: this.newPostTitle,
        content: this.newPostContent,
      });

      this.newPostTitle = '';
      this.newPostContent = '';
    }
  }

  /*removePost(postId: number): void {
    this.posts = this.posts.filter(post => post.id !== postId);
  }*/
  deletePost(id: number){
    this.postService.eliminarPost(id);
  }

  empezarEdit(post: any) {
    this.editandoPostId = post.id;
    this.editTitle = post.title;
    this.editContent = post.content;
  }

  guardarEdit() {
    if (this.editTitle.trim() && this.editContent.trim()) {
      this.postService.editarPost(this.editandoPostId!, {
        title: this.editTitle,
        content: this.editContent
      });
      this.editandoPostId = null;
    }
  }

  cancelarEdit() {
    this.editandoPostId = null;
  }
  /*editPost(id: number) {
    const updatedTitle = prompt('Nuevo titulo:');
    const updatedContent = prompt('Nuevo contenido:');

    if (updatedTitle && updatedContent) {
      this.postService.editarPost(id, {title: updatedTitle, content: updatedContent});
    }
  }*/
}
