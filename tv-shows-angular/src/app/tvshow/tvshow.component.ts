import { Component, OnInit, Injectable } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';


import { Show } from '../interfaces/show';
import { ShowService } from '../services/show.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateShowComponent } from '../create-show/create-show.component';


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

  constructor(private showService: ShowService, private createDialog: MatDialog ) { }

  ngOnInit(): void {
    this.showShows();
  }

  shows: Show[] = [];
  counter: number = 0;

  columnsToDisplay = ['id', 'name', 'actions'];
  expandedElement?: Show;
  resourceLoaded: Boolean = false;

  showShows(): void {
    this.showService.getShows()
    .subscribe(data => {
      this.shows = data;
      this.resourceLoaded = true;
    })
  }

  openCreateDialog() {
      const createForm = this.createDialog.open(CreateShowComponent);
      createForm.afterClosed().subscribe(() => this.showShows());
  }

  deleteShow(id: number) {
    this.showService.deleteShow(id)
    .subscribe(() =>{
      this.showShows();
    });

  }

  doSmt() {

    if(!this.expandedElement)
      this.counter++;
  }
}
