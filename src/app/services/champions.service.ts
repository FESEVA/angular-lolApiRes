import { UsersService } from './users.service';
import { Champion } from './../models/champion';
import { Injectable } from '@angular/core';
import data from 'src/assets/data/champions.json'
import { TitleCasePipe } from '@angular/common';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc, updateDoc, FieldValue, getFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  db = getFirestore()
  path: string = "";

  champions: Champion[] = []

  championName: string = "";
  championList: Champion[] = []
  constructor(private usersService: UsersService) { 

    this.champions = data;
    this.championList = data;
  }

  setNewChampionListOnSearch(){
    if (this.championName == "") {
      this.championList = this.champions;
    } else {
      this.championList = this.champions;
      this.championList = this.championList.filter( c => c.name.startsWith( this.titleCaseWord(this.championName) ) );
    }
   }

   titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }



  public async addChampion(champion: Champion){


    let favouriteChampionsCopy: Champion[] = this.usersService.getUserByAuthId(this.usersService.loggedUser!.id_auth!).favouriteChampions!;

    favouriteChampionsCopy.push(champion);
    
      const userDocRef = doc(this.db, "users", this.usersService.loggedUser!.id!)
        await updateDoc(userDocRef, {
          favouriteChampions: favouriteChampionsCopy
        });
        
      this.usersService.loggedUser = this.usersService.getUserByAuthId(this.usersService.loggedUser!.id_auth!);
  }


  async deleteChampion(champion: Champion) {
    let favouriteChampionsCopy: Champion[] = this.usersService.getUserByAuthId(this.usersService.loggedUser!.id_auth!).favouriteChampions!;
      favouriteChampionsCopy = favouriteChampionsCopy.filter( c => c.id != champion.id);
        const userDocRef = doc(this.db, "users", this.usersService.loggedUser!.id!)
        await updateDoc(userDocRef, {
          favouriteChampions: favouriteChampionsCopy
        });

      this.usersService.loggedUser = this.usersService.getUserByAuthId(this.usersService.loggedUser!.id_auth!);

    }



}



