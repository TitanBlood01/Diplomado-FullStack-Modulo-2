import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostService } from '../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
  imports: [CommonModule, RouterModule]
})
export class PostDetailComponent implements OnInit{
  post: any;

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPosts().subscribe(posts => {
      this.post = posts.find(p => p.id === id);
    });
  }
}
