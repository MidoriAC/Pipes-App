import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./base/base.routes').then((m) => m.baseRoutes),
  },
];
