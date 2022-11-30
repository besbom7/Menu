import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Menu';
app1: any;

  ngOnInit(): void {
    sessionStorage.setItem("TOKEN"  , "TEST TEST TEST");
    localStorage.setItem("LANG"  , "TH");
  }

  data = {
    app_1 : "http://www.kong.tt/app1",
    app_2 : "http://www.kong.tt/app2",
    app_3 : "http://www.kong.tt/app3",
    app_4 : "http://www.kong.tt/app4",
  }

  Open(name : string){
    let fixpath = this.data[name];
    sessionStorage.setItem("APP_NAME"  , name);
    window.open(fixpath);
  }

  setLange(lang){
    localStorage.setItem("LANG"  , lang);
  }


}
