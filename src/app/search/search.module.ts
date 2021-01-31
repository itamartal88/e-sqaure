import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { SearchRoutingModule } from './search-routing.module';
import { BooksSearchService } from './services/books-search.service';
@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule
  ],
  providers: [BooksSearchService],
  bootstrap: []
})
export class SearchModule { }
