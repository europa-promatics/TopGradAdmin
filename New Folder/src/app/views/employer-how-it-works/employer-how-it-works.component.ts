import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {SelectionModel} from '@angular/cdk/collections';

export interface UserData {
  id: string;
  name: string;
}

/** Constants used to fill up our data base. */
const NAME: string[] = [
  'Banner Section', 'Why choose TopGrads', 'We make recruitment easy', 'Create your job in 4 steps', 'Success Modal and Job Application',
  'Fee-less Job Posting', 'Graduate Profile', 'More Than Just a Resume', 'Search Gradute', 'Easy Shortlisting', 'All the best grads in one place',
  'Unique Match Percentage', 'Match Listing', 'Endorsed Candidates', 'Endorsed cards', 'Organise and progress candidates your way',
  'Employer Dashboard', 'Your Personalised Dashboard', 'Scheduled Interview Calender', 'Schedule Interviews', 
  'Candidate information', 'Congratulations on your new hire Modal', 'Select and Offer Just Like That', 'Empoyer How'
];

@Component({
  selector: 'app-employer-how-it-works',
  templateUrl: './employer-how-it-works.component.html',
  styleUrls: ['./employer-how-it-works.component.scss']
})
export class EmployerHowItWorksComponent implements AfterViewInit {

  displayedColumns: string[] = ['select', 'id', 'name', 'status', 'action'];
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
  

  return {
    id: id.toString() + '.',
    name: name,
   
  };
}
