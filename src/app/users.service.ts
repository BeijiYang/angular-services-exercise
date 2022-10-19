import { Injectable } from "@angular/core";
import { CountService } from "./count.service";

@Injectable()

export class UsersService {
  constructor(private countService: CountService) {

  }

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.countService.toInactive();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.countService.toActive();
  }
}