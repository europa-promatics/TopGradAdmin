import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {SelectionModel} from '@angular/cdk/collections';

export interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  applicatedate: string;
}

/** Constants used to fill up our data base. */
const NAME: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
const EMAIL: string[] = [
  'maia@gmail.com', 'asher@gamil.com', 'asher@gamil.com', 'maia@gmail.com', 'maia@gmail.com', 'maia@gmail.com', 'maia@gmail.com', 'maia@gmail.com', 'asher@gamil.com'
];
const PHONE: string[] = [
  '+12 75893745', '+12 74535348', '+12 74535348', '+12 74535348', '+12 74535348', '+12 74535348', '+12 74535348', '+12 74535348', '+12 74535348', '+12 74535348',
  '+12 75893745', '+12 75893745', '+12 74535348', '+12 74535348', '+12 74535348', '+12 74535348', '+12 74535348', '+12 74535348', '+12 74535348'
];
const APPDATE: string[] = [
  '08-09-2021', '07-09-2021', '01-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021'
];



@Component({
  selector: 'app-applicants-management',
  templateUrl: './applicants-management.component.html',
  styleUrls: ['./applicants-management.component.scss']
})
export class ApplicantsManagementComponent implements AfterViewInit {

  displayedColumns: string[] = ['select', 'id', 'name', 'email', 'phone', 'applicatedate', 'action'];
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
  const name = NAME[Math.round(Math.random() * (NAME.length - 1))] + ' ';
  const email = EMAIL[Math.round(Math.random() * (EMAIL.length - 1))] + ' ';
  const phone = PHONE[Math.round(Math.random() * (PHONE.length - 1))] + ' ';
  const applicatedate = APPDATE[Math.round(Math.random() * (APPDATE.length - 1))] + ' ';

  return {
    id: id.toString() + '.',
    name: name,
    email: email,
    phone: phone,
    applicatedate: applicatedate,
  };
}

