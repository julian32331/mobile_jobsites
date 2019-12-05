import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainboardPageRoutingModule } from './mainboard-routing.module';

import { MainboardPage } from './mainboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainboardPageRoutingModule
  ],
  declarations: [MainboardPage]
})
export class MainboardPageModule {}
