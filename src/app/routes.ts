import { Routes } from '@angular/router';

// File-based routes are automatically imported by Analog
// This file exists to add the wildcard 404 route at the end
// Note: The wildcard route must be last

export const routes: Routes = [
  // Catch-all route - must be last
  {
    path: '**',
    loadComponent: () => import('./pages/404.page').then(m => m.default)
  }
];
