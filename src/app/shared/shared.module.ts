import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { BooksHttpService } from './services/http/books.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { DialogComponent } from './components/dialog/dialog.component';
import {DialogService} from 'primeng/dynamicdialog';
import { CardComponent } from './components/card/card.component';
@NgModule({
  declarations: [HeaderComponent, DialogComponent, CardComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    DynamicDialogModule,
  ],
  providers: [
    AuthGuard, 
    BooksHttpService,
    DialogService
    ],
  exports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    HeaderComponent,
    DynamicDialogModule,
    DialogComponent,
    CardComponent
  ],
  bootstrap: []
})
export class SharedModule { }
