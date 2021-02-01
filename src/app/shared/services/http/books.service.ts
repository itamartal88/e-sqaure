import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiEndPoints } from 'src/app/shared/models/ApiEndPoints.model';
import { MAX_RESULT } from 'src/app/shared/consts/app.const';
import { BooksResponseDTO } from 'src/app/shared/models/DTOs/Books.dto'
@Injectable()
export class BooksHttpService {

    constructor(
        private readonly httpClient: HttpClient
    ) {}

    public getBooks(search: string, index: number): Observable<BooksResponseDTO> {
        const url = `${ApiEndPoints.GET_BOOKS}${search}&maxResults=${MAX_RESULT}&startIndex=${index}`;
        return this.httpClient.get<BooksResponseDTO>(url);
    }
}