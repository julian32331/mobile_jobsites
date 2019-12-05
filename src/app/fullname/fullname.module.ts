import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullnamePageRoutingModule } from './fullname-routing.module';

import { FullnamePage } from './fullname.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullnamePageRoutingModule
  ],
  declarations: [FullnamePage]
})
export class FullnamePageModule {}
