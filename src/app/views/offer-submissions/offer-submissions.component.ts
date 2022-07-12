import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SelectionModel } from '@angular/cdk/collections';
import { TopgradserviceService } from '../../topgradservice.service';

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

  displayedColumns: string[] = [
    // 'select',
    'id',
    'candidate_name',
    'candidate_email',
    'emp_name',
    'emp_email',
    'job_title',
    'cmp_name',
    'date',
    'status',
    'action'
  ];
  dataSource: MatTableDataSource<UserData>;
  selection = new SelectionModel<UserData>(true, []);

  @ViewChild('smallModal') public smallModal: ModalDirective;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  offerSubmissionAllData: any;
  offerSubmissionCount: any;
  event: any;

  constructor(private Service: TopgradserviceService) {
    // Create 100 users
    const users = Array.from({ length: 50 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  search:any=''
  matObj = {
    offset: 0,
    limit: 5
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.search=''
    this.getOfferSubmission()
  }

  applyFilter(filterValue) {
    console.log("filter value>>>>", filterValue);

    this.search = filterValue.target.value
    console.log("search >>>>>>", this.search);

    if (this.event) {
      console.log("paginator ka event>>>", this.event);

      this.paginatorOfOfferSubmission(this.event)
    }
    else {
      this.getOfferSubmission()

    }

  }

  getOfferSubmission() {
    var obj = {
      limit: this.matObj.limit,
      offset: this.matObj.offset,
      search:this.search,
    }
    if (this.search) {
      obj.search = this.search   
    }
    this.Service.getOfferSubmissiondata(obj).subscribe((res: any) => {
      console.log("Response data of offer submission>>>", res);

      this.offerSubmissionAllData = res.data.interviews
      console.log("offer submission all data>>>", this.offerSubmissionAllData)

      this.offerSubmissionCount = res.data.count
      console.log("offer submission count >>>", this.offerSubmissionCount)

    })
  }

  paginatorOfOfferSubmission(event) {
    console.log("pagintaor event>>>>>", event);
    this.matObj.offset = event.pageIndex * event.pageSize;
    this.matObj.limit = event.pageSize
    this.getOfferSubmission();
  }

  getPageSizeOfOfferSubmission() {
    return [5, 10, 50, 100];
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