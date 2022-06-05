import {User} from "../users/users";


export class Albums{
    id: string;
    id_visibility:boolean;
    user_id: number;
    title: string;
    description: string
    user: User
    updatedAt: Date
}