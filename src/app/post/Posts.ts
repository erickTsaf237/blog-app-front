import {Picture} from "../picture/picture";


export class Post{

    id: number;
    id_picture: number
    id_visibility: number;
    text: string
    createdAt: Date
    updatedAt: Date
    picture: Picture
    comment: boolean=false



}