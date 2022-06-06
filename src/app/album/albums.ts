import {User} from "../users/users";
import {Picture} from "../picture/picture";


export class Albums{
    id: number;
    id_visibility:boolean;
    id_picture: number
    user_id: number;
    title: string;
    description: string
    user: User
    picture: Picture
    updatedAt: Date
}