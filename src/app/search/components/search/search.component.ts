import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
  constructor(
    private userDataService: UserDataService,
    private booksSearchService: BooksSearchService
  ) { }

  ngOnInit(): void {
  }

  public get userName(): string {
    return this.userDataService.userName;
  }

  public getBooks(): void {
    this.booksSearchService.getBooks(this.inputText)
    .pipe(
      takeUntil(this.onDestroy$)
    )
    .subscribe((res) => {
      console.log(res);
    })
  }

  ngOnDestroy(): void {
   this.onDestroy$.next();
   this.onDestroy$.complete();
  }

}
