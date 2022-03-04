import { Champion } from './champion';
export interface User {

    id?: string;
    id_auth?: string;
    email?: string;
    username?: string;
    favouriteChampions?: Champion[];

}
