import { MenubarComponent } from 'src/app/components/menubar/menubar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';




@NgModule({
  declarations: [
    AppComponent, MenubarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    FormsModule,
    CommonModule,
    TableModule,
    DropdownModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
