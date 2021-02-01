import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { BooksHttpService } from './services/http/books.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard, 
    BooksHttpService
    ],
  exports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    HeaderComponent
  ],
  bootstrap: []
})
export class SharedModule { }
