import { Champion } from './../../models/champion';
import { Router } from '@angular/router';
import { ChampionsService } from './../../services/champions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor( public championsService: ChampionsService, private router: Router, ) {
   }

  ngOnInit(): void {
    this.championsService.path = "home";
  }



goChampion(id: String){

  this.router.navigateByUrl(`/champion-detail/${id}`);

}







}
