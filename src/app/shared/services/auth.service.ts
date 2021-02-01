import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable()
export class AuthService {
    public logout$: Subject<void> = new Subject();
}