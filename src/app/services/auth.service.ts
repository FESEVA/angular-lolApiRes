import { UserCopy } from './../models/userCopy';
import { Router } from '@angular/router';
import { UsersService } from './users.service';
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, 
  signInWithEmailAndPassword, signOut, User, UserCredential } from '@angular/fire/auth';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User | undefined;
  items1: MenuItem[] | undefined;
 

  constructor(private auth: Auth, private usersService: UsersService, private router: Router){

  }


register(email: string, password: string): Promise<UserCredential> { 
  return createUserWithEmailAndPassword(this.auth, email, password);
}
  
login(email: string, password: string): Promise<boolean> {
  
   return signInWithEmailAndPassword(this.auth, email, password)
  .then(
  () => {
  return true; 
  
},
  error => { console.error(error); return false;
  } );
  
}


  getCurrentUser(): User {

    this.usersService.loggedUserId = getAuth().currentUser!.uid;
    return getAuth().currentUser!;
  }

  async logout() { 
    this.usersService.loggedUser = {} as UserCopy;
    this.usersService.loggedUserId = undefined;
    this.goHome();
    await signOut(this.auth);
  } 

  resetPassword(email: string): Promise<void> { return sendPasswordResetEmail(this.auth, email);
  }


  getMenuBar(){

    this.items1 = [
      {
          label:'Champions',
          icon:'pi pi-fw pi-github',
          command: () => this.goHome()

        },
        {
          label:`${this.usersService.loggedUser!.username}`,
          icon:'pi pi-fw pi-user',
          items: [
            {label: 'My favourite champions', icon: 'pi pi-star', command: () => this.goFavourite()},
            {label: 'Log out', icon: 'pi pi-sign-out', command: () => this.logout()}
          ],
          
        },

      ]
  }


  goHome(){
    this.router.navigateByUrl('/home');
    this.usersService.path = 'home'
  }

  goLogin(){
    this.router.navigateByUrl('/login');
    this.usersService.path = 'login'
  }

  goFavourite(){
    this.router.navigateByUrl('/favourite');
    this.usersService.path = 'favourite'
  }

}
