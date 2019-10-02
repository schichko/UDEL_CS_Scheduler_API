import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Computer Science Degree Planner';
  currentPlan: any = [];
  planID;
  constructor(private http : HttpClient){

  }

  getPlan(planID: number){
    return this.http.get(`http://localhost:8080/api/plans/${planID}`).subscribe(plan => this.currentPlan = plan);
  }

  ngOnInit(){
    this.getPlan(1);
  }
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
