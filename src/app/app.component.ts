import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'music-requestor';

  constructor(
    private userService: UserService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    // this.userService.getUser(1)
    //   .then(
    //   data => {
    //     console.log('Got user: ', data);
    //   });

    // this.auth.fbLogin()
    //   .then(
    //     resp => {
    //       console.log('Got resp:', resp);
    //     }
    //   )
    //   .catch(
    //     error => {
    //       console.log('Got error:', error);
    //     }
    //   );

    // this.userService.getUsers()
    //   .then(
    //   data => {
    //     console.log('Got user list: ', data);
    //   }
    // );
    //
    // this.userService.addUser(
    //   {}
    // ).then(
    //   data => {
    //     console.log('User created: ', data);
    //   }
    // );
    //
    // this.userService.deleteUser(1)
    //   .then(
    //     data => {
    //       console.log('User deleted: ', data);
    //     }
    //   );
    //
    // this.userService.updateUser(1,
    //   {
    //     "id": "1",
    //     "name":"tester",
    //     "salary":"123",
    //     "age":"23"
    //   }
    // ).then(
    //   data => {
    //     console.log('User updated: ', data);
    //   }
    // )
  }

  login() {
    this.auth.fbLogin()
      .then(
        () => {
        console.log('User loged in');
      }
    );
  };


}
