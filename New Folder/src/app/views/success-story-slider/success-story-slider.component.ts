import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ModalDirective} from 'ngx-bootstrap/modal';

export interface UserData {
  id: string;
  postedby: string;
  worktype: string;
}

/** Constants used to fill up our data base. */
const DEADLINE: string[] = [
  '08-09-2021', '07-09-2021', '01-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021'
];
const POSTEDBY: string[] = [
  'assets/img/grads.png', 'assets/img/success.png'
];
const WORKTYPE: string[] = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut', 'Lorem ipsum dolor sit amet, consectetur', 'consectetur adipiscing elit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do', 'eiusmod tempor incididunt ut', 'eiusmod tempor incididunt ut', 'Lorem ipsum dolor', 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut', 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
];



@Component({
  selector: 'app-success-story-slider',
  templateUrl: './success-story-slider.component.html',
  styleUrls: ['./success-story-slider.component.scss']
})
export class SuccessStorySliderComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'postedby', 'worktype', 'action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild('smallModal') public smallModal: ModalDirective;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {

  // Create 100 users
    const users = Array.from({length: 50}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
   }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

function createNewUser(id: number): UserData {
  const postedby = POSTEDBY[Math.round(Math.random() * (POSTEDBY.length - 1))] + ' ';
  const worktype = WORKTYPE[Math.round(Math.random() * (WORKTYPE.length - 1))] + ' ';

  return {
    id: id.toString() + '.',
    postedby: postedby,
    worktype: worktype,
  };
}

