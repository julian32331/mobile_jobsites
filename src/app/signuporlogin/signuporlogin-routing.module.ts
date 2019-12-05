import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignuporloginPage } from './signuporlogin.page';

const routes: Routes = [
  {
    path: '',
    component: SignuporloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignuporloginPageRoutingModule {}
