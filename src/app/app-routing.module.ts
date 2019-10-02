import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { TermsComponent } from './terms/terms.component'
import { PlanComponent } from './plan/plan.component'

 
const routes: Routes = [
  { path: 'term', component: TermsComponent},
  { path: 'home', component:  HomeComponent},
  { path : 'plan', component : PlanComponent},
  { path: '', redirectTo:'/home',pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
