import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  data;
  input;
  
  
  constructor(public _api: ApiService) {}
  
  onClick() {
    this._api.getUserData()
    .subscribe((response:any) => {
      this.data = response.user
      console.log("first", this.data)
    })
  }
}

