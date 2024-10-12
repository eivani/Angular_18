import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('../app/share/nav-bar/nav-bar.routing.module').then(m => m.ChildRoutingModule)
  },
];
