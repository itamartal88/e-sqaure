import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MAX_RESULT } from 'src/app/shared/consts/app.const';
import { BookData } from 'src/app/shared/models/DTOs/Books.dto';
import { BooksHttpService } from 'src/app/shared/services/http/books.service';

@Injectable()
export class BooksSearchService {
    private _totalResult: number;
    constructor(
        private booksHttpService: BooksHttpService
    ) {}

    public getBooks(search: string): Observable<BookData[]> {
        return this.booksHttpService.getBooks(search)
         .pipe(
             tap((res) => {
                 this._totalResult = res.totalItems
             }),
             map(res => res.items));
    }

    public get totalPages(): number {
        if (this._totalResult === 0) { return 0 }
        return Math.ceil(this._totalResult / MAX_RESULT);
    }
}