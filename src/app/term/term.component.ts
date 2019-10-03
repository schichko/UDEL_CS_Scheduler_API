import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css']
})
export class TermComponent implements OnInit {

  title = 'Fall 2019';

  @Input()
  semester: number;

  @Input()
  plan: number;

  classes;

  constructor(private http: HttpClient) { }

  getSemesterPlan(planID: number) {
    return this.http.get(`http://localhost:8080/api/plans/${planID}/semester/${this.semester}`).subscribe(plan => this.classes = plan);
  }

  ngOnInit() {
    this.getSemesterPlan(this.plan);
  }

}
