import { Injectable } from '@angular/core';
import { BookData } from '../models/DTOs/Books.dto';
import { AuthService } from './auth.service';

@Injectable()
export class WishListService {
    constructor(private authService: AuthService) {
        this.logout();
    }
    private _wishList: BookData[] = []

    public removeId(id: string): void {
        const index = this._wishList.findIndex(b => b.id === id);
        if (index !== -1) {
            this._wishList.splice(index, 1);
        }
    }

    private logout(): void {
        this.authService.logout$.subscribe(() => {
            this.wishList = [];
        })
    }

    public addId(id: BookData): void {
        this._wishList.push(id);
    }

    public set wishList(list: BookData[]) {
        this._wishList = list;
    }

    public get wishlist(): BookData[] {
        return this._wishList;
    }

}