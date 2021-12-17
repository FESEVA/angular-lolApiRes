import { Router } from '@angular/router';
import { Champion } from './../../models/champion';
import { ChampionsService } from './../../services/champions.service';
import { Component, OnInit } from '@angular/core';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
  providers:[ConfirmationService,MessageService]
})
export class FavouriteComponent implements OnInit {


  myChampionList :Champion[] = []

  championSelected : Champion = {version:'', id: '', key: '', name: '', title: '', blurb: '', info: {attack: 0, defense: 0, magic: 0, difficulty: -1}, image:{ full: '', sprite: '', group: '', x: 0, y: 0, w: 0, h: 0,}, tags: [], partype: '', stats: {hp: 0, hpperlevel: 0, mp: 0, mpperlevel: 0, movespeed: 0, armor: 0, armorperlevel: 0, spellblock: 0, spellblockperlevel: 0, attackrange: 0, hpregen: 0, hpregenperlevel: 0, mpregen: 0, mpregenperlevel: 0,crit: 0,critperlevel: 0,attackdamage: 0, attackdamageperlevel: 0, attackspeedperlevel: 0, attackspeed: 0 }}


  constructor( public championsService: ChampionsService, private router: Router, private confirmationService: ConfirmationService, private messageService:MessageService) {

   

    this.myChampionList = championsService.champions.filter( c => c.name == "Ekko" || c.name == "Brand" || c.name == "Nekko" || c.name == "Nautilus" || c.name == "Yasuo" || c.name == "Vex");
   }

  ngOnInit(): void {
    this.championsService.path = "favourite"
  }

  goChampion(id: String){

    this.router.navigateByUrl(`/champion-detail/${id}`);
  
  }

  addChampion(){
    console.log(this.championSelected)
    if (this.championSelected == null || this.championSelected.info.difficulty === -1 ) {
      this.messageService.add({severity:'error', summary:'Error', detail:"Can't add empty champion to favourites!"});
      console.log("eres tonto o que?")
    } else if (this.myChampionList.filter(c => c.name.includes(this.championSelected.name))[0] != undefined){
      this.messageService.add({severity:'warn', summary:'Oops', detail:"You alredy have that champion in your favourite list"});
     console.log("repe")
    }else{
      this.myChampionList.push(this.championSelected);
      this.messageService.add({severity:'success', summary:'Added', detail:`You have added ${this.championSelected.name}`});
      console.log("si")
    }
  }


  confirm(champion: Champion) {
    this.confirmationService.confirm({
        message: `Are you sure that you want to delete ${champion.name} from your favourites ?`,
        accept: () => {
          this.deleteChampion(champion)
          this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have deleted the champion'});
      },
        reject: () => {
          this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
      }
    });
  }

  deleteChampion(champion: Champion){

    this.myChampionList = this.myChampionList.filter( c => c.id != champion.id);

  }

  clear() {
    this.messageService.clear();
}


 

}
