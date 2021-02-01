import { Injectable } from '@angular/core'

@Injectable()
export class UserDataService {
    constructor() {
        this.userName = localStorage.getItem('token');
    }
    private _userName: string;

    public set userName(name: string) {
        this._userName = name;
    }

    public get userName(): string {
        return this._userName;
    }
}