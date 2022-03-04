import { Champion } from './champion';
export interface UserCopy {

    id?: string;
    id_auth?: string;
    email?: string;
    username?: string;
    favouriteChampions?: Champion[];

}
