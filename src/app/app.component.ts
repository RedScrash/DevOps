import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DevOps';
  myVar = 'Hola mundo';
  saludo = 'Hola Omar, como estas?';

  esPar(myNumber: number):boolean {
    if (myNumber % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
}
