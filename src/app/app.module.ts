import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './layout/home/home.component';
import { PricingComponent } from './views/home/pricing/pricing.component';
import { IndexComponent } from './views/home/index/index.component';

import { ContactComponent } from './views/home/contact/contact.component';
import { AuthComponent } from './layout/auth/auth.component';
import { LoginComponent } from './views/auth/login/login.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { HomeRoutingModule } from './layout/home/home-routing.module';
import { AuthRoutingModule } from './layout/auth/auth-routing.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PricingComponent,
    IndexComponent,

    ContactComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule,
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
