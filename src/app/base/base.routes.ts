import { Routes } from '@angular/router';

export const baseRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages').then((c) => c.BasicsPageComponent),
  },
  {
    path: 'numbers',
    loadComponent: () => import('./pages').then((c) => c.NumbersPageComponent),
  },
  {
    path: 'uncommon',
    loadComponent: () => import('./pages').then((c) => c.UncommonPageComponent),
  },
  {
    path: 'other',
    loadComponent: () => import('./pages').then((c) => c.OtherPageComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
