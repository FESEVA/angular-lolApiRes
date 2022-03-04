import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteRoutingModule } from './favourite-routing.module';
import { FavouriteComponent } from './favourite.component';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';

import {ConfirmDialogModule} from 'primeng/confirmdialog';

import {ToastModule} from 'primeng/toast';






@NgModule({
  declarations: [
    FavouriteComponent
  ],
  imports: [
    CommonModule,
    FavouriteRoutingModule,
    TableModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule
  ]
})
export class FavouriteModule { }
