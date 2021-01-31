import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: (() => import('./login/login.module').then(m => m.LoginModule))
  }, {
    path: 'wishlist',
    loadChildren: (() => import('./wishlist/wishlist.module').then(m => m.WishListModule)),
    canActivate: [AuthGuard]
  },
  {
    path: 'search',
    loadChildren: (() => import('./search/search.module').then(m => m.SearchModule)),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
