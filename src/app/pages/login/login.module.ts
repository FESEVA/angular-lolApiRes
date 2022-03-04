import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import {ToastModule} from 'primeng/toast';

import { SharedModule } from 'primeng/api';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ToastModule,
    ConfirmDialogModule,
    SharedModule
  ]
})
export class LoginModule { }
