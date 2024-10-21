import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('../app/share/nav-bar/nav-bar.routing.module').then(m => m.ChildRoutingModule)
  },
  {
    path: 'product',
    loadChildren: () => import('../app/products/product-list/product.routes').then(m => m.ProductRoutingModule)
  },
];
