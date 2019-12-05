import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialistprofilePageRoutingModule } from './specialistprofile-routing.module';

import { SpecialistprofilePage } from './specialistprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialistprofilePageRoutingModule
  ],
  declarations: [SpecialistprofilePage]
})
export class SpecialistprofilePageModule {}
