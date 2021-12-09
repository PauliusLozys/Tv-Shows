import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Show } from './interfaces/show';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class ShowService {

  constructor(private http: HttpClient) { }


  
  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>("https://localhost:5001/api/shows");
  }

  addShow(show: Show): Observable<Show> {
    return this.http.post<Show>("https://localhost:5001/api/shows", show)
  }
}
