import { Component, OnInit } from '@angular/core';
import {User} from "../../users/users";
import {UserService} from "../../users/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-friend',
  templateUrl: './list-friend.component.html',
  styles: [
  ]
})
export class ListFriendComponent implements OnInit {

  users: User[]

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers(10, 0).subscribe(users=> {
          this.users = users
          console.table(this.users)
        }
    )


  }

    GoBackOme(userId: number) {
      this.router.navigate(['albums/user/', userId])

    }
}
