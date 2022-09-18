import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/views/auth/login/login.component';
import { SignupComponent} from 'src/app/views/auth/signup/signup.component'

const routes: Routes = [
  { path:'Login', component: LoginComponent },
  { path:'Signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
