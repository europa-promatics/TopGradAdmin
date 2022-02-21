import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {SelectionModel} from '@angular/cdk/collections';

export interface UserData {
  id: string;
  candidate: string;
  employer: string;
  jobtitle: string;
  interviewmethod: string;
  location: string;
  date: string;
  time: string;
}

/** Constants used to fill up our data base. */

const CANDIDATE: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi'
];
const EMPLOYER: string[] = [
  'Michael Smith', 'Amelia', 'IBM', 'Microsoft', 'Cora', 'Olivia', 'Levi', 'Michael', 'Oliver', 'Charlotte',
  'Levi', 'Isla', 'Olivia', 'Amelia', 'Michael Smith', 'IBM', 'Oliver', 'Isla', 'Levi'
];
const JOBTITLE: string[] = [
  'Lorem ipsum', 'Inappropriate text/attachments', 'Spam', 'Hateful speech', 'Harrassment'
];

const INTERVIEWMETHOD: string[] = [
  'Messaging', 'Jobs', 'Grad Applications'
];
const LOCATION: string[] = [
  'Melbourne', 'Melbourne', 'Melbourne', 'Melbourne', 'Melbourne', 'Melbourne'
];
const DATE: string[] = [
  '08-09-2021', '07-09-2021', '01-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021'
];
const TIME: string[] = [
  '12.00 PM - 01.00 PM', '12.00 PM - 01.00 PM', '12.00 PM - 01.00 PM', '12.00 PM - 01.00 PM', '12.00 PM - 01.00 PM', '12.00 PM - 01.00 PM', '12.00 PM - 01.00 PM', '12.00 PM - 01.00 PM'
];

@Component({
  selector: 'app-messaging-reports',
  templateUrl: './messaging-reports.component.html',
  styleUrls: ['./messaging-reports.component.scss']
})
export class MessagingReportsComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'employer', 'candidate', 'interviewmethod', 'jobtitle', 'date', 'time', 'action'];
  dataSource: MatTableDataSource<UserData>;
  selection = new SelectionModel<UserData>(true, []);
  
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

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

   /** The label for the checkbox on the passed row */
  checkboxLabel(row?: UserData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

}

function createNewUser(id: number): UserData {
  const candidate = CANDIDATE[Math.round(Math.random() * (CANDIDATE.length - 1))] + ' ';
  const employer = EMPLOYER[Math.round(Math.random() * (EMPLOYER.length - 1))] + ' ';
  const jobtitle = JOBTITLE[Math.round(Math.random() * (JOBTITLE.length - 1))] + ' ';
  const interviewmethod = INTERVIEWMETHOD[Math.round(Math.random() * (INTERVIEWMETHOD.length - 1))] + ' ';
  const location = LOCATION[Math.round(Math.random() * (LOCATION.length - 1))] + ' ';
  const date = DATE[Math.round(Math.random() * (DATE.length - 1))] + ' ';
  const time = TIME[Math.round(Math.random() * (TIME.length - 1))] + ' ';

  return {
    id: id.toString() + '.',
    candidate: candidate,
    employer: employer,
    jobtitle: jobtitle,
    interviewmethod: interviewmethod,
    location: location,
    date: date,
    time: time

  };
}