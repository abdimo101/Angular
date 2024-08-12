import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = '1.Introduction';
  myBtn: string = 'My Button';
  counter: number = 0; // event binding

  // attr binding
  isDisabled: boolean = true;
  angularImage: string = '../assets/Angular-logo.png';

  // style binding
  bgColor: string = 'green';
  titleColor: string = 'white';
  description: string = 'font-size: 50px; color: red';

  // class binding
  redText: boolean = true;

  // event binding
  incrementCounter(){
    this.counter++;
  }

  // two way binding
  // ngModel
  inputText: string = 'Initial Value';

  // ngClass
  message: string = 'This is a dangerous message';
  classes: string = 'danger text-size';

  // ngStyle
  selectedColor: string = 'red';

}
