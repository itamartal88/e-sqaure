
import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    public canActivate(): boolean {
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        return true;
    }
}