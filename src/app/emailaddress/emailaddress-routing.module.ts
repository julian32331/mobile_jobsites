import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailaddressPage } from './emailaddress.page';

const routes: Routes = [
  {
    path: '',
    component: EmailaddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailaddressPageRoutingModule {}
