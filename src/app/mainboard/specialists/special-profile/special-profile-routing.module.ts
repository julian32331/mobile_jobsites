import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialProfilePage } from './special-profile.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialProfilePageRoutingModule {}
