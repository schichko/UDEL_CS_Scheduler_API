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
  comments;
  constructor(private http : HttpClient){

  }

  getComments(userEmail: string){
    let params = new HttpParams().set("userEmail", userEmail);
    return this.http.get('http://localhost:8080/api/comments', {params: params}).subscribe(data => this.comments = data);
  }

  ngOnInit(){
    this.getComments("test@amazon.com");
  }
}
