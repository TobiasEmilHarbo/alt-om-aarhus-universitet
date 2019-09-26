import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';


const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent
  },
  {
    path: 'sign-in',
    component: SignInPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
