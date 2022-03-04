import { signOut, Auth } from '@angular/fire/auth';
import { ChampionsService } from './../../services/champions.service';
import { MenubarComponent } from 'src/app/components/menubar/menubar.component';
import { SharedModule } from './../../components/menubar/shared.module';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { UsersService } from './../../services/users.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[ConfirmationService,MessageService, MenubarComponent]
})
export class LoginComponent implements OnInit {
  
  user: User = {} as User;
  password1: string = "";
  password2: string = "";
  passwordLogin: string = "";
  emailLogin: string = "";

  constructor(private usersService: UsersService, private authService: AuthService, 
    private confirmationService: ConfirmationService, private messageService:MessageService, 
    private router: Router, private auth: Auth) {
   }

  ngOnInit(): void {
    this.usersService.path = "login"
  }


  rotateCube(n: number){

    let loginFace = document.getElementById("login")!;
    let registerFace = document.getElementById("register")!;

  
    if(n == 0){
      loginFace.style.transition ="1000ms linear all"
      registerFace.style.transition ="1000ms linear all"
      loginFace.style.transform = "scale(0)";
      loginFace.style.display = "none"
      registerFace.style.display = "flex"
      registerFace.style.transform = "scale(1)"
      

    }else{
      loginFace.style.transition ="1000ms linear all"
      registerFace.style.transition ="1000ms linear all"
      registerFace.style.transform = "scale(0)"
      registerFace.style.display = "none"
      loginFace.style.display = "flex"
      loginFace.style.transform = "scale(1)"
      
    }

  }

  

  async register(){
    const users = await this.usersService.getUsersPromise();
    if(users!.filter(u => u.email != this.user.email)){
      
      if(this.password1 == this.password2 && this.password1!.length > 5){
        let password = this.password1;
        await this.authService.register(this.user.email!, password!);
        this.user.id_auth = this.authService.getCurrentUser().uid;
        this.user.favouriteChampions = [];
        await this.usersService.addUser(this.user);
        this.messageService.add({severity:'success', summary:'Success', detail:`Register successful!`});
        await signOut(this.auth)
        this.rotateCube(1);
      }else{
        this.messageService.add({severity:'error', summary:'Fail', detail:`Passwords doesnt match or are less than 6 characters`});
      }

    }else{
      this.messageService.add({severity:'error', summary:'Fail', detail:`This email alredy exist!`});
    }
    
  }


  async login() {
    const users = await this.usersService.getUsersPromise();
    if(await this.authService.login(this.emailLogin!, this.passwordLogin!)){
      this.messageService.add({severity:'success', summary:'Success', detail:`Login successful!`});
      this.usersService.loggedUser = users.filter(u => u.email == this.emailLogin)[0];
      this.authService.getMenuBar();
      this.goHome();
      
    }else{
      this.messageService.add({severity:'error', summary:'Fail', detail:`Credentials doesnt match with any registered account!`});
    }

    
   
  }

  
  goHome(){
    this.router.navigateByUrl('/home');
    this.usersService.path = 'home'
  }

}


