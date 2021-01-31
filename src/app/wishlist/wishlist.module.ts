import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { WishListRoutingModule } from './wishlist-routing.module';
@NgModule({
  declarations: [WishlistComponent],
  imports: [
    CommonModule,
    WishListRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class WishListModule { }
