import { Component, OnInit } from '@angular/core';
import {User} from "../../users/users";
import {UserService} from "../../users/user.service";

@Component({
  selector: 'app-list-friend',
  templateUrl: './list-friend.component.html',
  styles: [
  ]
})
export class ListFriendComponent implements OnInit {

  users: User[]

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    /*this.userService.getUsers(0, 10).subscribe(
        users=> this.users = users
    )*/

  }

}
