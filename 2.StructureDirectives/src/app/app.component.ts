import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Structure Directives';
  isLoggedIn: boolean = false;
  username: string = 'Abdi';

  names: string[] = ['Abdi', 'Ali', 'Mohamed', 'Hassan', 'Omar'];

  grade: string = 'C';
}
