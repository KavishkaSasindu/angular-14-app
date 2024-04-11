import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security.component';
import {LogInComponent} from "./components/log-in/log-in.component";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  { path: '', component: SecurityComponent,children:[
      {path:'logIn',component:LogInComponent},
      {path:'register',component:RegisterComponent}
    ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
