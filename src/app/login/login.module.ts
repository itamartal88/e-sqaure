import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }
