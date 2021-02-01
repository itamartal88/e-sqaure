import { Injectable } from '@angular/core';
import { BookData } from '../models/DTOs/Books.dto';

@Injectable()
export class WishListService {

    private _wishList: BookData[] = []

    public removeId(id: string): void {
        const index = this._wishList.findIndex(b => b.id === id);
        if (index !== -1) {
            this._wishList.splice(index, 1);
        }
    }

    public addId(id: BookData): void {
        this._wishList.push(id);
    }

    public get wishlist(): BookData[] {
        return this._wishList;
    }

}