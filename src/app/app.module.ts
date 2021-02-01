import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { UserDataService } from './shared/services/user-data.service';
import { WishListService } from './shared/services/wishlist.serivce';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    UserDataService,
    WishListService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
