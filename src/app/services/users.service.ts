import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Champion } from './../models/champion';
import { AuthService } from './auth.service';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc, updateDoc, FieldValue, getFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  path: string = '';
  loggedUser: User | undefined;
  loggedUserChampions: Champion[] | undefined;
  loggedUserId: string | undefined;

  db = getFirestore();
  users : User[] | undefined;

 



  constructor(private firestore: Firestore, private router: Router) {
    this.getUsers().subscribe( data => this.users = data);
   }

   //FIREBASE
  public async addUser(user: User) {
    
    await addDoc(collection(this.firestore, "users"), user);
    
  }

  public getUsers(): Observable<User[]> { 
    return collectionData(collection(this.firestore, 'users'), {idField: 'id'} ) as Observable<User[]>;
  }

  getUserByAuthId(id: string): User {
     this.getUsers().subscribe( data => this.users = data);
    return this.users!.filter(u => u.id_auth == id)[0];
    }

  getUser(id: string): Observable<User> {
    const docRef = doc(this.firestore, `users/${id}`);
    return docData(docRef, { idField: 'id' }) as Observable<User>;
    }

    public getUsersPromise(): Promise<User[]> { 
      return new Promise((resolve) => {
        const observable = collectionData(collection(this.firestore, 'users'), {idField: 'id'} );
        observable.subscribe(resolve)
      })
    }

    getUserPromise(id: string): Promise<User> {
      const docRef = doc(this.firestore, `users/${id}`);
      return new Promise((resolve) => {
        const observable = docData(docRef, { idField: 'id' })
        observable.subscribe(resolve)
      })
    }

    async deleteUser(id: string) {
      await deleteDoc(doc(this.firestore, `users/${id}`));
      }


      getLocalUser(username: string): User{
        return this.users!.filter(u=> u.username == username)[0];
      }


      

   
}
