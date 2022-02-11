import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {SelectionModel} from '@angular/cdk/collections';
import { TopgradserviceService } from '../../topgradservice.service';


declare var $;


export interface UserData {
  id: string;
  name: string;
  lname: string;
  email: string;
  company: string;
  location: string;
  wrkpref: string;
  availability: string;
  education: string;
  license: string;
  wrkrights: string;
  skills: string;
}

/** Constants used to fill up our data base. */
const LNAME: string[] = [
  'A', 'T', 'V', 'C', 'J', 'R', 'J', 'J'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
const EMAILS: string[] = [
  'maia@gmail.com', 'asher@gmail.com', 'olivia@gmail.com', 'atticus@gmail.com', 'amelia@gmail.com', 'jack@gmail.com', 'charlotte@gmail.com', 'theodore@gmail.com', 'isla@gmail.com', 'oliver@gmail.com',
  'isabella@gmail.com', 'jasper@gmail.com', 'cora@gmail.com', 'levi@gmail.com', 'violet@gmail.com', 'arthur@gmail.com', 'mia@gmail.com', 'thomas@gmail.com', 'elizabeth@gmail.com'
];
const CREATION: string[] = [
  '12-01-2012 (06:22 PM)', '12-12-2012 (02:22 PM)', '12-12-2012 (03:12 PM)', '24-11-2012 (03:12 PM)', '12-01-2012 (09:23 AM)', '12-01-2012 (09:23 AM)', '12-01-2012 (10:23 AM)', '12-01-2012 (07:14 PM)', '12-01-2012 (03:30 PM)',
  '09-01-2021 (09:12 AM)', '09-01-2021 (06:22 PM)', '12-01-2012 (02:22 PM)', '12-04-2012 (03:12 PM)', '12-01-2012 (09:12 AM)', '12-01-2012 (06:22 PM)', '12-01-2012 (06:22 PM)', '09-01-2021 (06:22 PM)'
];
const LOCATION: string[] = [
  'Sydney', 'Melbourne'
];
const WRKPREF: string[] = [
  'Open', 'Any'
];
const AVAILABILITY: string[] = [
  'Any', 'Remote'
];
const EDUCATION: string[] = [
  'Macquarie University', 'The University of New England', 'The University of Sydney', 'Western Sydney University'
];
const LICENSE: string[] = [
  'Available', 'Not Available'
];
const WRKRIGHTS: string[] = [
  'Available', 'Not Available'
];
const SKILLS: string[] = [
  'Figma', 'Adobe Illustrator'
];



@Component({
  selector: 'app-graduate-list',
  templateUrl: './graduate-list.component.html',
  styleUrls: ['./graduate-list.component.scss']
})
export class GraduateListComponent implements AfterViewInit {
  gradlist=[]
	displayedColumns: string[] = ['select', 'id', 'name', 'lname', 'email', 'company', 'location', 'wrkpref', 'availability', 'education', 'license', 'wrkrights', 'skills', 'status', 'action'];
	dataSource: MatTableDataSource<UserData>;
  selection = new SelectionModel<UserData>(true, []);

  @ViewChild('smallModal') public smallModal: ModalDirective;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
  totalRecords: any;

	constructor(private Service:TopgradserviceService) { 
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

    this.graduatelist();
	}

  graduatelist(){
    console.log("khjhgjhgjhgjhghjghjgjhghjg");
    
    var obj = {
    limit: 10,
    offset: 0,
    role: "Graduate"
    }
    console.log("onnnn", obj)
    this.Service.gradlist(obj).subscribe(data => {
    console.log("main data for users is ====", data)
    this.gradlist=data.data
    this.totalRecords=data.length;
    }, err => {
    console.log(err.status)
    if (err.status >= 404) {
    console.log('Some error occured')
    } else {
    // this.toastr.error('Some error occured, please try again!!', 'Error')
    console.log('Internet Connection Error')
    }
    })
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
  const company = CREATION[Math.round(Math.random() * (CREATION.length - 1))] + ' ';
  const location = LOCATION[Math.round(Math.random() * (LOCATION.length - 1))] + ' ';
  const wrkpref = WRKPREF[Math.round(Math.random() * (WRKPREF.length - 1))] + ' ';
  const availability = AVAILABILITY[Math.round(Math.random() * (AVAILABILITY.length - 1))] + ' ';
  const education = EDUCATION[Math.round(Math.random() * (EDUCATION.length - 1))] + ' ';
  const license = LICENSE[Math.round(Math.random() * (LICENSE.length - 1))] + ' ';
  const wrkrights = WRKRIGHTS[Math.round(Math.random() * (WRKRIGHTS.length - 1))] + ' ';
  const skills = SKILLS[Math.round(Math.random() * (SKILLS.length - 1))] + ' ';

  return {
    id: id.toString() + '.',
    name: name,
    email: email,
    company: company,
    lname: LNAME[Math.round(Math.random() * (LNAME.length - 1))],
    location: location,
    wrkpref: wrkpref,
    availability: availability,
    education: education,
    license: license,
    wrkrights: wrkrights,
    skills: skills,

  };
}