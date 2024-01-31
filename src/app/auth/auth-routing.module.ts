import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: '**', redirectTo: 'login' },
    ]
  }
];




@NgModule({
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ],
})
export class AuthRoutingModule { }