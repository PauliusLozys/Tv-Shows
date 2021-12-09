import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ShowService } from '../show.service';
import { Show } from '../interfaces/show';

@Component({
  selector: 'app-create-show',
  templateUrl: './create-show.component.html',
  styleUrls: ['./create-show.component.css']
})
export class CreateShowComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private showService: ShowService) { }

  ngOnInit(): void {
  }

  showForm = this.formBuilder.group({
    name: '',
    description: ''
  });

  createShow() {

    this.showService.addShow(this.showForm.value)
    .subscribe(show => {
      console.warn('Show created', show);
    });
  }
}
