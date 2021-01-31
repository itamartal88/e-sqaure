import { Injectable } from '@angular/core'

@Injectable()
export class UserDataService {
    
    private _userName: string;

    public set userName(name: string) {
        this._userName = name;
    }

    public get userName(): string {
        return this._userName;
    }
}