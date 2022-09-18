import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ContactComponent } from './views/home/contact/contact.component';

import { IndexComponent } from './views/home/index/index.component';

import { PricingComponent } from './views/home/pricing/pricing.component';


const routes: Routes = [

// homepage  
//   {path: "",
//   component: HomeComponent,
//   children: [
//     {path: "Home", component: IndexComponent},
//     {path: "Pricing", component: PricingComponent},
//     {path: "Contact", component: ContactComponent},

//     ]
//   }
// // auth

   

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
