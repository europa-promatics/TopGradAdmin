import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {SelectionModel} from '@angular/cdk/collections';

export interface UserData {
  id: string;
  transid: string;
  supervisorname: string;
  supervisoremail: string;
  company: string;
  candidate: string;
  candidatemail: string;
  offer: string;
  startdate: string;
  subsexp: string;
}

/** Constants used to fill up our data base. */

const TRANSID: string[] = [
  '1165D', '5734O', '3648E', '2215K', '1165D', '9863I'
];

const SUPERVISORNAME: string[] = [
  'Michael Smith', 'Amelia', 'IBM', 'Microsoft', 'Cora', 'Olivia', 'Levi', 'Michael', 'Oliver', 'Charlotte',
  'Levi', 'Isla', 'Olivia', 'Amelia', 'Michael Smith', 'IBM', 'Oliver', 'Isla', 'Levi'
];
const SUPERVISOREMAIL: string[] = [
  'msmith@outlook.com', 'msmith@outlook.com', 'msmith@outlook.com', 'msmith@outlook.com', 'msmith@outlook.com', 'msmith@outlook.com', 'msmith@outlook.com', 'msmith@outlook.com', 'msmith@outlook.com', 'msmith@outlook.com',
  'msmith@outlook.com', 'msmith@outlook.com', 'msmith@outlook.com', 'msmith@outlook.com'
];

const COMPANY: string[] = [
  'Adobe', 'Google', 'IBM', 'Microsoft', 'Facebook', 'Adobe', 'Google', 'Google', 'Google', 'IBM',
  'Microsoft', 'Facebook', 'Facebook', 'Levis', 'Adobe', 'IBM', 'Adobe', 'Google', 'Microsoft'
];
const CANDIDATE: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi'
];
const CANDIDATEMAIL: string[] = [
  'nathan.jones95@gmail.com', 'jones95@gmail.com', 'nathan95@gmail.com', 'jones95@gmail.com', 'nathan95@gmail.com', 'jones95@gmail.com', 'nathan95@gmail.com', 'nathan.jones95@gmail.com', 'nathan95@gmail.com', 'jones95@gmail.com',
  'nathan.jones95@gmail.com', 'nathan.jones95@gmail.com', 'nathan.jones95@gmail.com', 'nathan.jones95@gmail.com'
];
const OFFER: string[] = [
  'Basic Internship Agreement', 'Insurance and Agreement', 'Insurance Only'
];
const SDATE: string[] = [
  '08-09-2021', '07-09-2021', '01-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021'
];
const SUBSEXP: string[] = [
  '08-09-2021', '07-09-2021', '01-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021'
];


@Component({
  selector: 'app-offer-submissions',
  templateUrl: './offer-submissions.component.html',
  styleUrls: ['./offer-submissions.component.scss']
})
export class OfferSubmissionsComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'supervisorname', 'supervisoremail', 'company', 'candidate', 'candidatemail', 'offer', 'startdate', 'subsexp','status','action'];
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
  const transid = TRANSID[Math.round(Math.random() * (TRANSID.length - 1))] + ' ';
  const supervisorname = SUPERVISORNAME[Math.round(Math.random() * (SUPERVISORNAME.length - 1))] + ' ';
  const supervisoremail = SUPERVISOREMAIL[Math.round(Math.random() * (SUPERVISOREMAIL.length - 1))] + ' ';
  const company = COMPANY[Math.round(Math.random() * (COMPANY.length - 1))] + ' ';
  const candidate = CANDIDATE[Math.round(Math.random() * (CANDIDATE.length - 1))] + ' ';
  const candidatemail = CANDIDATEMAIL[Math.round(Math.random() * (CANDIDATEMAIL.length - 1))] + ' ';
  const offer = OFFER[Math.round(Math.random() * (OFFER.length - 1))] + ' ';
  const startdate = SDATE[Math.round(Math.random() * (SDATE.length - 1))] + ' ';
  const subsexp = SUBSEXP[Math.round(Math.random() * (SUBSEXP.length - 1))] + ' ';

  return {
    id: id.toString() + '.',
    transid: transid,
    supervisorname: supervisorname,
    supervisoremail: supervisoremail,
    company: company,
    candidate: candidate,
    candidatemail: candidatemail,
    offer: offer,
    startdate: startdate,
    subsexp: subsexp

  };
}