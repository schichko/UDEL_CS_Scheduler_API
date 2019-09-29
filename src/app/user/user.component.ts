import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  private _token: any;
  public _user: any;
  public _fullname: any;
  public _major: any;

  constructor(private _http: HttpClient) {
    this.getToken();
  }

  public getToken() {
    this._http.get('/assets/example_cas_token.xml',
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
        responseType: 'text'
      })
      .subscribe(async (data) => {
        await this.parseToken(data)
      });
  }

  public async parseToken(data) {
    let casToken;
    var parser = new xml2js.Parser({
      trim: true,
      explicitArray: false
    });
    await parser.parseStringPromise(data).then(function (result) {
      var response = result["cas:serviceResponse"];
      casToken = response["cas:authenticationSuccess"];
    })
      .catch(function (err) {
        // Failed
        console.log("Unable to retrieve user token from CAS")
      });
    this._token = casToken;
    console.log(this._token);

    this._user = this._token["cas:user"];
    console.log(this._user);

    this._fullname = this._token["cas:fullname"];
    console.log(this._fullname);

    this._major = this._token["cas:major"];
    console.log(this._major);
  }

  ngOnInit() {
  }

}
