import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'blog',
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./features/blog/blog.routes').then((m) => m.routes),
  },
];
