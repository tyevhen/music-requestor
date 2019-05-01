import { Component, OnInit } from '@angular/core';
import {CrudService} from '../services/crud.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'music-requestor';

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUser('sdf')
      .then(
      data => {
        console.log('Got user: ', data);
      });

    this.userService.getUsers()
      .then(
      data => {
        console.log('Got user list: ', data);
      }
    );

    this.userService.addUser(
      {
        "id": "1",
        "name":"test",
        "salary":"123",
        "age":"23"
      }
    ).then(
      data => {
        console.log('User created: ', data);
      }
    );

    this.userService.deleteUser(1)
      .then(
        data => {
          console.log('User deleted: ', data);
        }
      );

    this.userService.updateUser(1,
      {
        "id": "1",
        "name":"tester",
        "salary":"123",
        "age":"23"
      }
    ).then(
      data => {
        console.log('User updated: ', data);
      }
    )
  }
}
