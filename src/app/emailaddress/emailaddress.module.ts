import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailaddressPageRoutingModule } from './emailaddress-routing.module';

import { EmailaddressPage } from './emailaddress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailaddressPageRoutingModule
  ],
  declarations: [EmailaddressPage]
})
export class EmailaddressPageModule {}
