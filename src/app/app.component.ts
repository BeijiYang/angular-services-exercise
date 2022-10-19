import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [UsersService]
})
export class AppComponent {
  // activeUsers: Array<string> = [];
  // inactiveUsers: Array<string> = [];

  constructor(private usersService: UsersService) {

  }

  // ngOnInit(): void {
  //     this.activeUsers = this.usersService.activeUsers;
  //     this.inactiveUsers = this.usersService.inactiveUsers;
  // }
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];

  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }
}
