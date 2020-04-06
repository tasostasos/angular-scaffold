import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersPageComponent } from '../app/components/pages/users-page/users-page.component'
import { HomePageComponent } from '../app/components/pages/home-page/home-page.component'
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'users-management', component: UsersPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
