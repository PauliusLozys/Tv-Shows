import { Component, OnInit, Injectable } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Show } from '../interfaces/show';


@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

@Injectable()
export class TvshowComponent implements OnInit {

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
    this.showShows();
  }

  shows: Show[] = [];
  counter: number = 0;

  columnsToDisplay = ['id', 'name'];
  expandedElement?: Show;
  resourceLoaded: Boolean = false;

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>("https://localhost:5001/api/shows");
  }

  showShows() {
    this.getShows()
    .subscribe(data => {
      this.shows = data;
      this.resourceLoaded = true;
    })
  }

  doSmt() {

    if(!this.expandedElement)
      this.counter++;
  }
}
