import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { TabsPage } from './tabs/tabs.page';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./login/login.page').then(m => m.LoginPage) },
  {
    path: 'app',
    component: TabsPage,
    canActivate: [authGuard],
    children: [
      { path: 'home', loadComponent: () => import('./home/home.page').then(m => m.HomePage) },
      { path: 'noticias', loadComponent: () => import('./noticias/noticias.page').then(m => m.NoticiasPage) },
      { path: 'acordos', loadComponent: () => import('./acordos/acordos.page').then(m => m.AcordosPage) },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
