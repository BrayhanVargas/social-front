import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// dominio.com/
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },
  {
    path: 'social',
    loadChildren: () => import('./social/social.module').then( m => m.SocialModule ),
  },
  // {
  //   path: '404',
  //   component: Error404PageComponent,
  // },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'auth',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
