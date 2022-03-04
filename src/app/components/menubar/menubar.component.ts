import { AuthService } from './../../services/auth.service';
import { User } from './../../models/user';
import { UsersService } from './../../services/users.service';
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

  items2: MenuItem[];
  championName: string = "";




  constructor( public router: Router, public championsService: ChampionsService, public usersService: UsersService, public authService: AuthService) {
  
  
    this.usersService.loggedUser = {} as User;
      
     
      this.items2 = [
        {
            label:'Champions',
            icon:'pi pi-fw pi-github',
            command: () => this.goHome()
          },
          {
            label:'Register / Login',
            icon:'pi pi-fw pi-user',
            command: () => this.goLogin()
          },
  
        ]
    

    

   }

  ngOnInit(): void {

    
  }


  goHome(){
    this.router.navigateByUrl('/home');
    this.usersService.path = 'home'
  }

  goLogin(){
    this.router.navigateByUrl('/login');
    this.usersService.path = 'login'
  }

  


}
