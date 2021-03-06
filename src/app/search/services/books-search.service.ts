import { Injectable } from '@angular/core'
import {  combineLatest, Observable, Subject } from 'rxjs';
import {  map, startWith, switchMap, tap } from 'rxjs/operators';
import { MAX_RESULT } from 'src/app/shared/consts/app.const';
import { BookData, BooksResponseDTO } from 'src/app/shared/models/DTOs/Books.dto';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BooksHttpService } from 'src/app/shared/services/http/books.service';

@Injectable()
export class BooksSearchService {
    private _totalResult: number;
    private _currentBooks: BookData[] = [];
    private _currentText: string;
    public inputText$: Subject<string> = new Subject();
    public currentPage$: Subject<number> = new Subject();
    constructor(
        private booksHttpService: BooksHttpService,
        private authService: AuthService
    ) { 
        this.logout();
    }

    public getBooks(): Observable<BookData[]> {
        return combineLatest([
            this.inputText$.pipe(startWith(this._currentText)),
            this.currentPage$
        ])
            .pipe(
                switchMap(([data, page]) => this.booksHttpService.getBooks(data, ((page - 1) * MAX_RESULT))),
                tap((res: BooksResponseDTO) => {
                    this._totalResult = res.totalItems;
                    this._currentBooks = res.items;
                }),
                map((data) => data.items)
            );
    }

    private logout(): void {
        this.authService.logout$.subscribe(() => {
            this._totalResult = 0
            this._currentBooks = [];
            this._currentText = null;
        })
    }

    public get totalPages(): number[] {
        if (this._totalResult === 0 || !this._totalResult) { return [] }
        return Array.from(Array(Math.round(Math.ceil(this._totalResult / MAX_RESULT))), (v, i) => i + 1);
    }

    public get currentBooks(): BookData[] {
        return this._currentBooks;
    }

    public get currentText(): string {
        return this._currentText;
    }

    public set currentText(search: string) {
        this._currentText = search;
    }

}