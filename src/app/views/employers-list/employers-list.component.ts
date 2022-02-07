import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {SelectionModel} from '@angular/cdk/collections';

export interface UserData {
  id: string;
  name: string;
  lname: string;
  email: string;
  company: string;
  jobtitle: string;
  creation: string;
}

/** Constants used to fill up our data base. */
const LNAME: string[] = [
  'A', 'T', 'V', 'C', 'J', 'R', 'J', 'J'
];
const NAMES: string[] = [
  'Maia', 'Asher', 
];
const EMAILS: string[] = [
  'maia@gmail.com', 'asher@gmail.com', 'olivia@gmail.com', 'atticus@gmail.com', 'amelia@gmail.com', 'jack@gmail.com', 'charlotte@gmail.com', 'theodore@gmail.com', 'isla@gmail.com', 'oliver@gmail.com',
  'isabella@gmail.com', 'jasper@gmail.com', 'cora@gmail.com', 'levi@gmail.com', 'violet@gmail.com', 'arthur@gmail.com', 'mia@gmail.com', 'thomas@gmail.com', 'elizabeth@gmail.com'
];
const COMPANY: string[] = [
  'Promatics', 'PromaticsA', 'PromaticsB', 'PromaticsC', 'PromaticsD', 'PromaticsE', 'PromaticsF', 'PromaticsG', 'Promatics', 'Promatics',
  'Promatics', 'Promatics', 'Promatics', 'Promatics', 'Promatics', 'Promatics', 'Promatics', 'Promatics', 'Promatics'
];
const TITLE: string[] = [
  'Employer', 'Employer', 'Employer', 'Employer', 'Employer', 'Employer', 'Employer', 'Employer', 'Employer', 'Promatics',
  'Promatics', 'Promatics', 'Employer', 'Employer', 'Employer', 'Employer', 'Employer', 'Promatics', 'Promatics'
];
const CREATION: string[] = [
  '12-01-2012 (06:22 PM)', '12-12-2012 (02:22 PM)', '12-12-2012 (03:12 PM)', '24-11-2012 (03:12 PM)', '12-01-2012 (06:22 PM)', '12-01-2012 (02:22 PM)', '12-01-2012 (03:12 PM)', '12-01-2012 (03:12 PM)', '12-01-2012 (03:12 PM)',
  '09-01-2021 (06:22 PM)', '09-01-2021 (06:22 PM)', '12-01-2012 (02:22 PM)', '12-04-2012 (03:12 PM)', '12-01-2012 (06:22 PM)', '12-01-2012 (02:22 PM)', '12-01-2012 (02:22 PM)', '09-01-2021 (03:12 PM)'
];


@Component({
  selector: 'app-employers-list',
  templateUrl: './employers-list.component.html',
  styleUrls: ['./employers-list.component.scss']
})
export class EmployersListComponent implements AfterViewInit {

  displayedColumns: string[] = ['select', 'id', 'name', 'lname', 'email', 'company', 'jobtitle','status', 'creation', 'action'];
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
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ';
  const email = EMAILS[Math.round(Math.random() * (EMAILS.length - 1))] + ' ';
  const company = COMPANY[Math.round(Math.random() * (COMPANY.length - 1))] + ' ';
  const jobtitle = TITLE[Math.round(Math.random() * (TITLE.length - 1))] + ' ';
  const creation = CREATION[Math.round(Math.random() * (CREATION.length - 1))] + ' ';

  return {
    id: id.toString() + '.',
    name: name,
    email: email,
    company: company,
    jobtitle: jobtitle,
    creation: creation,
    lname: LNAME[Math.round(Math.random() * (LNAME.length - 1))],

  };
}