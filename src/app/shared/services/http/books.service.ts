import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiEndPoints } from '../../models/ApiEndPoints.model';

@Injectable()
export class BooksHttpService {

    constructor(
        private readonly httpClient: HttpClient
    ) {}

    public getBooks(search: string): Observable<any> {
        const url = `${ApiEndPoints.GET_BOOKS}${search}`;
        return this.httpClient.get<any>(url)
            .pipe(map(response => response))
    }
}