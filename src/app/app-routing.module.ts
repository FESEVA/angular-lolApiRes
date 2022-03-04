
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full',},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'favourite', loadChildren: () => import('./pages/favourite/favourite.module').then(m => m.FavouriteModule) },
  { path: 'champion-detail/:id', loadChildren: () => import('./pages/champion-detail/champion-detail.module').then(m => m.ChampionDetailModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
