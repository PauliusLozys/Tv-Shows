import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Show } from '../interfaces/show';
import { ShowService } from '../services/show.service';

@Component({
  selector: 'app-create-show',
  templateUrl: './create-show.component.html',
  styleUrls: ['./create-show.component.css']
})
export class CreateShowComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Show, private formBuilder: FormBuilder, private showService: ShowService) { }

  ngOnInit(): void {
    if(this.data != null){
      this.isEditForm = true;
      let show = { name: this.data.name, description: this.data.description };
      this.showForm.setValue(show);
    }
  }

  showForm = this.formBuilder.group({
    name: new FormControl([], [Validators.required, Validators.maxLength(50)]),
    description: new FormControl([], Validators.required)
  });

  isEditForm = false;

  createShow() {
    if(this.showForm.valid) {
      this.showService.addShow(this.showForm.value)
      .subscribe(show => {
        console.warn('Show created', show);
      });
    }
    else {
      console.log('Blogi Tv laidos duomenys :(');
    }
    
  }

  updateShow() {
    if(this.showForm.valid) {
      this.showService.updateShow(this.data.id!, this.showForm.value)
      .subscribe();
    }

    else {
      console.log('Blogi Tv laidos duomenys :(');
    }
  }
}