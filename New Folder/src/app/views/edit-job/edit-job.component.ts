import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Options, LabelType } from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent implements OnInit {


minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "$" + value;
        case LabelType.High:
          return "$" + value;
        default:
          return "$" + value;
      }
    }
  };

  selectedCar: number;

    cars = [
        { id: 1, name: 'Figma' },
        { id: 2, name: 'Adobe Illustrator' },
        { id: 3, name: 'Adobe Photoshop' },
        { id: 4, name: 'Python' },
        { id: 5, name: 'Jira' },
    ];


  myControl = new FormControl();
  options1: string[] = ['Sydney', 'Blue Mountains', 'Albury', 'Melbourne'];
  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit(){
  	this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options1.filter(option => option.toLowerCase().includes(filterValue));
  }

}
