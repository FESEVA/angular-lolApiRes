import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenubarComponent } from './menubar.component';
import {MenubarModule} from 'primeng/menubar';



@NgModule({
  declarations: [MenubarComponent],
  imports: [
    CommonModule,
    FormsModule,
    MenubarModule
  ],
  exports: [MenubarComponent]
})
export class SharedModule { }
