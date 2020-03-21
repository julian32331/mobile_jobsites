import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialistsPageRoutingModule } from './specialists-routing.module';

import { SpecialistsPage } from './specialists.page';
import { HiredComponent } from './hired/hired.component';
import { SavedComponent } from './saved/saved.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialistsPageRoutingModule 
  ],
  declarations: [SpecialistsPage, HiredComponent, SavedComponent, SearchComponent]
})
export class SpecialistsPageModule {}
