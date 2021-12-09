import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from './interfaces/show';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient) { }

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>("https://localhost:5001/api/shows");
  }
}
