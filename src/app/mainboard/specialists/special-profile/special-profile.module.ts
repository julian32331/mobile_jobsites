import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialProfilePageRoutingModule } from './special-profile-routing.module';

import { SpecialProfilePage } from './special-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialProfilePageRoutingModule
  ],
  declarations: [SpecialProfilePage]
})
export class SpecialProfilePageModule {}
