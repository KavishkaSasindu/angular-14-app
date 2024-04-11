import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";
import {AuthGuard} from "./modules/shared/guard/auth.guard";

const routes: Routes = [
  {path:'',redirectTo:'starter/home',pathMatch:'full'},
  { path: 'security', loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule) },
  { path: 'starter', loadChildren: () => import('./modules/starter/starter.module').then(m => m.StarterModule) },
  { path: 'console', loadChildren: () => import('./modules/console/console.module').then(m => m.ConsoleModule) ,canActivate:[AuthGuard]},
  { path: 'shared', loadChildren: () => import('./modules/shared/shared.module').then(m => m.SharedModule) },
  {path:'**',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
