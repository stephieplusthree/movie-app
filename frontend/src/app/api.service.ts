import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  url: string = "http://mean-2019-1-stepanie-phortonssf.c9users.io:8080/api/Users";
  
  input: string = "";
  
  constructor(public _http: HttpClient) { }
  
  getUserData() {
    return this._http.get(this.url + this.input);
  }
}
