import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from 'src/app/views/home/contact/contact.component';
import { IndexComponent } from 'src/app/views/home/index/index.component';
import { PricingComponent } from 'src/app/views/home/pricing/pricing.component';
import { HomeComponent } from './home.component';


const routes: Routes = [

    {path: "",  
    component: HomeComponent,
    children: [
      {path: "Home", component: IndexComponent},
      {path: "Pricing", component: PricingComponent},
      {path: "Contact", component: ContactComponent},
    ]  
  },
    
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
