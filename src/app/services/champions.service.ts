import { Champion } from './../models/champion';
import { Injectable } from '@angular/core';
import data from 'src/assets/data/champions.json'
import { TitleCasePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  path: string = "";

  champions: Champion[] = []

  championName: string = "";
  championList: Champion[] = []
  constructor() { 

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
}
