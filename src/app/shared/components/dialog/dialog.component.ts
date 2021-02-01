import { Component, OnInit } from '@angular/core';
import { BookData } from '../../models/DTOs/Books.dto';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { WishListService } from '../../services/wishlist.serivce';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public book: BookData
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private wishListService: WishListService) { }

  ngOnInit(): void {
    this.book = this.config.data.book;
  }

  public addToWishlist(): void {
    this.wishListService.addId(this.book);
  }

  public get isInWishList(): boolean {
    return this.wishListService.wishlist.find(b => b.id === this.book.id) !== undefined;
  }

}
