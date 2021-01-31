import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { BooksHttpService } from 'src/app/shared/services/http/books.service';

@Injectable()
export class BooksSearchService {
    constructor(
        private booksHttpService: BooksHttpService
    ) {}

    public getBooks(search: string): Observable<any> {
        return this.booksHttpService.getBooks(search);
    }
}