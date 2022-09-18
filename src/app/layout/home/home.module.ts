import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from 'src/app/navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
