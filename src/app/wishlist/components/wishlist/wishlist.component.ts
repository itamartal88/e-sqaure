import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookData } from 'src/app/shared/models/DTOs/Books.dto';
import { WishListService } from 'src/app/shared/services/wishlist.serivce';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishlistComponent implements OnInit {
  public wishlist: BookData[] = [];
  constructor(
    private router: Router,
    private wishListService: WishListService
  ) { }

  ngOnInit(): void {
    this.wishlist = this.wishListService.wishlist;
  }

  public goToSearch() {
    this.router.navigate(['search']);
  }

  public removeFromList(id: string): void {
    this.wishListService.removeId(id)
  }

}
