import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BookData } from 'src/app/shared/models/DTOs/Books.dto';
import { UserDataService } from 'src/app/shared/services/user-data.service';
import { BooksSearchService } from '../../services/books-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit, OnDestroy {
  public inputText: string;
  private onDestroy$: Subject<void> = new Subject();
  public books: BookData[] = [];
  public numberOfPages: number[] = [];
  public currentPage = 1;
  constructor(
    private userDataService: UserDataService,
    private booksSearchService: BooksSearchService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.initBookListener();
    this.initialPreviousData();
    this.booksSearchService.currentPage$.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe((num) => {
      this.currentPage = num;
    });
  }

  private initialPreviousData(): void {
    this.books = this.booksSearchService.currentBooks;
    this.numberOfPages = this.booksSearchService.totalPages;
    this.inputText = this.booksSearchService.currentText;
  }

  public get userName(): string {
    return this.userDataService.userName;
  }

  public getBooks(): void {
    if (!this.inputText) { return; }
    this.booksSearchService.inputText$.next(this.inputText);
    this.booksSearchService.currentPage$.next(1)
  }

  private initBookListener(): void {
    this.booksSearchService.getBooks()
      .pipe(
        takeUntil(this.onDestroy$)
      ).subscribe((res) => {
        this.books = res;
        this.numberOfPages = this.booksSearchService.totalPages;
        this.cdr.detectChanges();
      })
  }

  public openInfoModal(book: BookData): void {

  }


  public moveToPage(page: number): void {
    if (page < 1 || page > this.numberOfPages.length) {
      return;
    }
    this.booksSearchService.inputText$.next(this.inputText);
    this.booksSearchService.currentPage$.next(page)
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
    this.booksSearchService.currentText = this.inputText;
  }

  public goToWishList() {
    this.router.navigate(['wishlist'])
  }

}
