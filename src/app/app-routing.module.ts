import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'walkthrough', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},   {
    path: 'walkthrough',
    loadChildren: () => import('./walkthrough/walkthrough.module').then( m => m.WalkthroughPageModule)
  },
  {
    path: 'signuporlogin',
    loadChildren: () => import('./signuporlogin/signuporlogin.module').then( m => m.SignuporloginPageModule)
  },
  {
    path: 'emailaddress',
    loadChildren: () => import('./emailaddress/emailaddress.module').then( m => m.EmailaddressPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'fullname',
    loadChildren: () => import('./fullname/fullname.module').then( m => m.FullnamePageModule)
  },
  {
    path: 'mainboard',
    loadChildren: () => import('./mainboard/mainboard.module').then( m => m.MainboardPageModule)
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
