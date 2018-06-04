import {Injectable} from '@angular/core';
import {IBook} from '../books/book';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {tap, catchError} from 'rxjs/operators';

@Injectable()
export class BookService {
  private _bookUrl = 'http://localhost:8080/bookstore-back/resources/books';
  private _defaultImageUrl = '`http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/2v/dp/p02vdpfn.jpg'

  constructor(private _http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this._http.get<IBook[]>(this._bookUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError(error.message);
  }
}
