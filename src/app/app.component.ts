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
  
}
