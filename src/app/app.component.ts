import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'age-calc';
  year = new Date().getFullYear();
  calc: any;
  test:any;
  
  
  age(){
    let type = (<HTMLInputElement>document.getElementById('a')).value;
    this.test = type
    this.calc = this.year - this.test;

  }
}
