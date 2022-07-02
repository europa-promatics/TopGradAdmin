import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {SelectionModel} from '@angular/cdk/collections';

export interface UserData {
  id: string;
  candidate: string;
  email: string;
  date: string;
}

/** Constants used to fill up our data base. */

const CANDIDATE: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi'
];
const EMAIL: string[] = [
  'asher@gmail.com', 'olivia@gmail.com'
];

const DATE: string[] = [
  '08-09-2021', '07-09-2021', '01-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021'
];



@Component({
  selector: 'app-verification-submissions',
  templateUrl: './verification-submissions.component.html',
  styleUrls: ['./verification-submissions.component.scss']
})
export class VerificationSubmissionsComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'candidate', 'email', 'transcripts', 'polcheck', 'lngtst', 'prfwrk', 'rfrncs', 'vdeorsm', 'pstts', 'status', 'action'];
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
  const email = EMAIL[Math.round(Math.random() * (EMAIL.length - 1))] + ' ';
  const date = DATE[Math.round(Math.random() * (DATE.length - 1))] + ' ';

  return {
    id: id.toString() + '.',
    candidate: candidate,
    email: email,
    date: date,

  };
}
