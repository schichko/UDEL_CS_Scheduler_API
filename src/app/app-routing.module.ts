import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component'
import { PrivacyComponent} from './privacy/privacy.component'
import { TermsComponent } from './terms/terms.component'

 
const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'term', component: TermsComponent},
  { path: 'home', component:  HomeComponent},
  { path: 'privacy', component : PrivacyComponent},
  { path: '', redirectTo:'/home',pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
