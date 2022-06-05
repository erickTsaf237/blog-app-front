import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styles: []
})
export class AppComponent {

  text: string | undefined
  title = 'gn-app-test';

  doChange() {
    console.log("boooooo")
  }
}
