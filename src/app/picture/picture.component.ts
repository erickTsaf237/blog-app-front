import {Component, Input, OnInit} from '@angular/core';
import {Picture} from "./picture";
import {Message, PictureService} from "./picture.service";

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
})
export class PictureComponent implements OnInit {
  @Input()pictureId: number;
  @Input()pictureClass: string;
  @Input()pictureStyle: string;
  picture: Picture | undefined;
  voir: boolean= false

    constructor(private pictureSevice: PictureService) { }

  ngOnInit(): void {
    this.pictureSevice.getPictureById(this.pictureId).subscribe(
        (message:Message)=> {
            this.picture = message?.data
            console.table(this.picture)
        }
    )

  }

    lookThePicture() {
        this.voir = true
    }
  closeThePicture(){
    this.voir = false
  }
}
