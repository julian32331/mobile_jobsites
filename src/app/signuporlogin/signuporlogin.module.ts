import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignuporloginPageRoutingModule } from './signuporlogin-routing.module';

import { SignuporloginPage } from './signuporlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignuporloginPageRoutingModule
  ],
  declarations: [SignuporloginPage]
})
export class SignuporloginPageModule {}
