import { ChampionsService } from './../../services/champions.service';
import { Champion } from './../../models/champion';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.scss']
})
export class ChampionDetailComponent implements OnInit {

  basicData: any;
  horizontalOptions: any;

  data: any;
  chartOptions: any;

  champion : Champion = {version:'', id: '', key: '', name: '', title: '', blurb: '', info: {attack: 0, defense: 0, magic: 0, difficulty: 0}, image:{ full: '', sprite: '', group: '', x: 0, y: 0, w: 0, h: 0,}, tags: [], partype: '', stats: {hp: 0, hpperlevel: 0, mp: 0, mpperlevel: 0, movespeed: 0, armor: 0, armorperlevel: 0, spellblock: 0, spellblockperlevel: 0, attackrange: 0, hpregen: 0, hpregenperlevel: 0, mpregen: 0, mpregenperlevel: 0,crit: 0,critperlevel: 0,attackdamage: 0, attackdamageperlevel: 0, attackspeedperlevel: 0, attackspeed: 0 }}

  constructor( private championsService: ChampionsService, private activatedRoute:ActivatedRoute) {
    const id = this.activatedRoute.snapshot.paramMap.get('id'); 
    this.champion = this.championsService.champions.filter(c => c.id == id)[0];
}

  ngOnInit(): void {
    this.championsService.path = "favourite"
    this.basicData = {
      labels: [''],
      datasets: [
          {
              label: 'DIFFICULTY',
              backgroundColor: '#FFFFF',
              data: [this.champion.info.difficulty, 10]
          },
          
      ]
  };

  this.horizontalOptions = {
    indexAxis: 'y',
    plugins: {
        legend: {
            labels: {
                color: '#FFFFF'
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#FFFFF'
            },
            grid: {
                color: '#FFFFF'
            }
        },
        y: {
            ticks: {
                color: '#FFFFF'
            },
            grid: {
                color: '#FFFFF'
            }
        }
    }
};



this.data = {
  labels: ['Attack','Defense','Magic'],
  datasets: [
      {
          data: [this.champion.info.attack, this.champion.info.defense, this.champion.info.magic],
          backgroundColor: [
              "#D91818",
              "#062A4F",
              "#9623D9"
          ],
          hoverBackgroundColor: [
              "#840F0F",
              "#021221",
              "#5E1688"
          ]
      }
  ]
};
    
  
  }

}
