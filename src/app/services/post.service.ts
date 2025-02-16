import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts = new BehaviorSubject([
    { id: 1, title: 'Primer Post', content: 'Contenido del primer post' },
    { id: 2, title: 'Segundo Post', content: 'Contenido del segundo post' },
  ]);

  posts$ = this.posts.asObservable();

  constructor() {}

  // Método para obtener todas las publicaciones
  getPosts() {
    return this.posts$;
  }

  // Método para agregar una nueva publicación
  añadirPost(post: { title: string; content: string }) {
    const currentPosts = this.posts.getValue();
    const newPost = { id: currentPosts.length + 1, ...post };
    this.posts.next([...currentPosts, newPost]);
    console.log('Publicación añadida:', newPost);
  }

  // Método para editar una publicación existente
  editarPost(id: number, updatedPost: { title: string; content: string }) {
    const currentPosts = this.posts.getValue();
    const updatedPosts = currentPosts.map(post =>
      post.id === id ? { ...post, ...updatedPost } : post
    );
    this.posts.next(updatedPosts);
    console.log('Publicación editada:', updatedPost);
  }

  // Método para eliminar una publicación
  eliminarPost(id: number) {
    const currentPosts = this.posts.getValue();
    const filteredPosts = currentPosts.filter(post => post.id !== id);
    this.posts.next(filteredPosts);
    console.log('Publicación eliminada con ID:', id);
  }
}

