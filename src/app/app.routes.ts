import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/countries/pages/country-list/country-list')
        .then(m => m.CountryListComponent),
  },
  {
    path: 'country/:code',
    loadComponent: () =>
      import('./features/countries/pages/country-detail/country-detail')
        .then(m => m.CountryDetailComponent),
  },
  { path: '**', redirectTo: '' }
];