import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LayoutComponent } from './pages/layout/layout.component';


// localhost:4200/heroes
const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'profile', component: ProfileComponent },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SocialRoutingModule { }
