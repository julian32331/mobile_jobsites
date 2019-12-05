import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullnamePage } from './fullname.page';

const routes: Routes = [
  {
    path: '',
    component: FullnamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullnamePageRoutingModule {}
