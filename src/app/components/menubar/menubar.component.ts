import { ChampionsService } from './../../services/champions.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  items: MenuItem[];

  championName: string = "";

  constructor( private router: Router, public championsService: ChampionsService) {

    this.items = [
      {
          label:'Champions',
          icon:'pi pi-fw pi-github',
          routerLink:'home'
        },
        {
          label:'My favourite champions',
          icon:'pi pi-fw pi-star',
          routerLink:'favourite'
        },

      ]

   }

  ngOnInit(): void {

    
  }


}
