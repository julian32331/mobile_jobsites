import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainboardPage } from './mainboard.page';

const routes: Routes = [
  {
    path: '',
    component: MainboardPage,
    children: [
      {
        path: 'specialists',
        children: [
          {
            path: '',
            loadChildren: () => import('./specialists/specialists.module').then(m => m.SpecialistsPageModule)

          }
        ]

      },
      {
        path: 'services',
        children: [
          {
            path: '',
            loadChildren: () => import('./services/services.module').then(m => m.ServicesPageModule)

          }
        ]

      },
      {
        path: 'messages',
        children: [
          {
            path: '',
            loadChildren: () => import('./messages/messages.module').then(m => m.MessagesPageModule)

          }
        ]

      },
      {
        path: 'more',
        children: [
          {
            path: '',
            loadChildren: () => import('./more/more.module').then(m => m.MorePageModule)

          }
        ]

      },
      {
        path: '',
        redirectTo: '/mainboard/specialists/search',
        pathMatch: 'full'
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainboardPageRoutingModule {}
