import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ShowService } from '../services/show.service';

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
    name: new FormControl([], [Validators.required, Validators.maxLength(50)]),
    description: new FormControl([], Validators.required)
  });

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
}