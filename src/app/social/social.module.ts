import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { SocialRoutingModule } from './social-routing-module';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { ListCardsComponent } from '../components/list-cards/list-cards.component';
import { CardComponent } from '../components/card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    LayoutComponent,
    SidebarComponent,
    CardComponent,
    ListCardsComponent,
  ],
  imports: [
    CommonModule,
    SocialRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SocialModule { }
