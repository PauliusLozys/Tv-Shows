import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Show } from '../interfaces/show';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class ShowService {

  constructor(private http: HttpClient) { }
  
  serverUrl = "https://localhost:5001/api/shows";

  getShowByID(id: number) {
    const url = `${this.serverUrl}/${id}`;
    return this.http.get<Show>(url);
  }

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.serverUrl);
  }

  addShow(show: Show): Observable<Show> {
    return this.http.post<Show>(this.serverUrl, show)
  }

  deleteShow(id: number): Observable<unknown> {
    const url = `${this.serverUrl}/${id}`;
    return this.http.delete(url);
  }
}
