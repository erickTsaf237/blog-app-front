import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styles: []
})
export class AppComponent {

  constructor(private router: Router) {
  }

  text: string | undefined
  title = 'gn-app-test';

  doChange() {
    console.log("boooooo")
  }


  goHome() {
    // document.getElementById('home-link').style.backgroundColor = "red"
    this.router.navigate(['albums']).catch(()=>alert('chemin inconnu'))
  }

  goToFriend() {
    this.router.navigate(['friends']).catch(()=>alert('chemin inconnu'))
  }
}
