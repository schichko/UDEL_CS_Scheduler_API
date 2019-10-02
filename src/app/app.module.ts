import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TermsComponent } from './terms/terms.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { PlanComponent } from './plan/plan.component';
import { ConcentrationDropdownComponent } from './concentration-dropdown/concentration-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    TermsComponent,
    UserComponent,
    HomeComponent,
    PlanComponent,
    ConcentrationDropdownComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
