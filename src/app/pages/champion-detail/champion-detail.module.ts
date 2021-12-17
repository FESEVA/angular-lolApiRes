import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionDetailRoutingModule } from './champion-detail-routing.module';
import { ChampionDetailComponent } from './champion-detail.component';

import {ChartModule} from 'primeng/chart';


@NgModule({
  declarations: [
    ChampionDetailComponent
  ],
  imports: [
    CommonModule,
    ChampionDetailRoutingModule,
    ChartModule
  ]
})
export class ChampionDetailModule { }
