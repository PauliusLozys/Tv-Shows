import { Component, OnInit, Injectable } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Show } from '../show';
import { SHOWS } from '../mock-shows';


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
    if(this.shows.length == 0) // set mock if server is off
      this.shows = SHOWS;
  }

  show?: Show;
  shows: Show[] = [];
  counter: number = 0;
  // selectedShow?: Show;
  // onSelect(sh: Show): void {
  //   this.selectedShow = sh;
  // }

  columnsToDisplay = ['id', 'name'];
  expandedElement?: Show;

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>("https://localhost:5001/api/shows");
  }

  showShows() {
    this.getShows()
    .subscribe(data => this.shows = data)
  }

  doSmt() {

    if(!this.expandedElement)
      this.counter++;
  }



}
