import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tab: Array<string> = ["Item 1", "Item 2", "Item 3"] ;
  
  tab2 = ["GOT", "WD", "Westworld"];

  colorMain: string = "#C55";
  
  title = 'angular page';

  prenom: string = "Mathieu";
  email: string = "mat@gmail.com";


  features = [
    {desc: "item 1"},
    {desc: "item 2"},
    {desc: "item 3"},
    {desc: "item 4"},
    {desc: "item 5"},
    {desc: "item 6"},
    {desc: "item 7"},
  ]


  monClick(e:Event, usrName: string){
    console.log(e, usrName);
  }

  yourName: string;
  
  fun(vare: any) {
    console.log(vare.innerText ++);
  }
}
