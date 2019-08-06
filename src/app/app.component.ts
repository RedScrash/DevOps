import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'DevOps';
  myVar = 'Hola mundo';
  saludo = 'Hola Omar, como estas?';
  users: User[] = [];

  constructor(private _usersService: UsersService) { }

   ngOnInit(): void {
    this.getUsers();
  }

  esPar(myNumber: number): boolean {
    if (myNumber % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  getUsers() {
    this._usersService.getAll().subscribe( users => {
      this.users = users;
      console.log(this.users);
    })
  }
}
