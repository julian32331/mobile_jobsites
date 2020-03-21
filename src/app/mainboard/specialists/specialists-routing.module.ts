import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialistsPage } from './specialists.page';
import { from } from 'rxjs';
import { HiredComponent } from './hired/hired.component';
import { SearchComponent } from './search/search.component';
import { SavedComponent } from './saved/saved.component';
const routes: Routes = [
  {
    path: '',
    component: SpecialistsPage,
    children: [
      {
        path: 'hired',
        component: HiredComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'saved',
        component: SavedComponent
      },
      {
          path: '',
          redirectTo: '/mainboard/specialists/search',
          pathMatch: 'full'
      }
    ],

  },
  {
    path: 'special-profile',
    loadChildren: () => import('./special-profile/special-profile.module').then(m => m.SpecialProfilePageModule)
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialistsPageRoutingModule {}
