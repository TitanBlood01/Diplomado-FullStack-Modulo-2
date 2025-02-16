import { Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: 'posts', component: PostListComponent },
    { path: 'post/:id', component: PostDetailComponent }
];
