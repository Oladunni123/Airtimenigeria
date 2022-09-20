import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
// import { FooterComponent } from 'src/app/footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    // FooterComponent
  ],
  
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
