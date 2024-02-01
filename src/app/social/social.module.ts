import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { SocialRoutingModule } from './social-routing-module';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { ListCardsComponent } from '../components/list-cards/list-cards.component';
import { CardComponent } from '../components/card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    LayoutComponent,
    SidebarComponent,
    CardComponent,
    ListCardsComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    SocialRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,

    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
  ]
})
export class SocialModule { }
