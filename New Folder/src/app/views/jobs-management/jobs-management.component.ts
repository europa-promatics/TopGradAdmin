import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {SelectionModel} from '@angular/cdk/collections';

export interface UserData {
  id: string;
  postedby: string;
  deadline: string;
  worktype: string;
  contracttype: string;
  jobtitle: string;
  applications: string;
}

/** Constants used to fill up our data base. */
const DEADLINE: string[] = [
  '08-09-2021', '07-09-2021', '01-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021'
];
const POSTEDBY: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
const WORKTYPE: string[] = [
  'Employment', 'Employment', 'Internship', 'Employment', 'Employment', 'Employment', 'Employment', 'Employment', 'Internship'
];
const CONTRACT: string[] = [
  'Full-Time', 'Part-Time', 'Part-Time', 'Part-Time', 'Part-Time', 'Part-Time', 'Part-Time', 'Part-Time', 'Part-Time', 'Part-Time',
  'Full-Time', 'Full-Time', 'Part-Time', 'Part-Time', 'Part-Time', 'Part-Time', 'Part-Time', 'Part-Time', 'Part-Time'
];
const TITLE: string[] = [
  'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'Promatics',
  'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'Promatics', 'Promatics'
];
const APPLICATIONS: string[] = [
  '23', '33', '77', '34', '3', '56', '56', '56', '56', '78',
  '78', '78', '56', '56', '56', '56', '56', '78', '78'
];


@Component({
  selector: 'app-jobs-management',
  templateUrl: './jobs-management.component.html',
  styleUrls: ['./jobs-management.component.scss']
})
export class JobsManagementComponent implements AfterViewInit {

  displayedColumns: string[] = ['select', 'id', 'postedby', 'jobtitle', 'worktype', 'contracttype', 'deadline', 'status', 'applications', 'action'];
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
  const postedby = POSTEDBY[Math.round(Math.random() * (POSTEDBY.length - 1))] + ' ';
  const worktype = WORKTYPE[Math.round(Math.random() * (WORKTYPE.length - 1))] + ' ';
  const contracttype = CONTRACT[Math.round(Math.random() * (CONTRACT.length - 1))] + ' ';
  const jobtitle = TITLE[Math.round(Math.random() * (TITLE.length - 1))] + ' ';
  const applications = APPLICATIONS[Math.round(Math.random() * (APPLICATIONS.length - 1))] + ' ';

  return {
    id: id.toString() + '.',
    postedby: postedby,
    worktype: worktype,
    contracttype: contracttype,
    jobtitle: jobtitle,
    applications: applications,
    deadline: DEADLINE[Math.round(Math.random() * (DEADLINE.length - 1))],

  };
}
