import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialistprofilePage } from './specialistprofile.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialistprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialistprofilePageRoutingModule {}
