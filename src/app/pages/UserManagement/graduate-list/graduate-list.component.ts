import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {SelectionModel} from '@angular/cdk/collections';
import { TopgradserviceService } from '../../../topgradservice.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


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
  
	displayedColumns: string[] = ['select', 'id', 'name', 'lname', 'email', 'company', 'location', 'wrkpref', 'availability','wrkrights', 'status', 'action'];
	dataSource: MatTableDataSource<UserData>;
  selection = new SelectionModel<UserData>(true, []);

  @ViewChild('smallModal') public smallModal: ModalDirective;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
  filter: any;
  event: any;
  selectFilter: any = [];
  delId:any;
  gradlist: any;
  search: any;
  totalRecords: any;
  sortedData: any;
  graduateList: any;
  topPage: any;
  work_preference: any;
  work_right: any;
  availability: any;
  filterValue: any;
  main_filter: string = ""
  sub_filter: string = ""
  flag: boolean = false;

	constructor(private route:ActivatedRoute,private Service:TopgradserviceService,private _snackBar: MatSnackBar) { 
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
    
    this.filter=''
    this.search = ''
    this.graduatelist();
    this.work_preference = ""
    this.availability = ""
    this.work_right = ""
	}

  modal(id){
    this.smallModal.show()
    this.delId=id
  }

  deletegraduate(id){
    var obj = {
      deletedAt : true,
      user_id: id
    }
    this.Service.deleteuser(obj).subscribe(res=>{
      console.log("fgdgfdgfdfgdfgd",res);
      this.smallModal.hide()
      if(res.code==200){
        this._snackBar.open("User Deleted Successfully","close",{
          duration: 2000
        });
        this.ngOnInit()
      }
    },err => {
      console.log(err);
      this._snackBar.open("Some Error Occued","close",{
        duration: 2000})
      })
  }


  graduatelist() {
    var obj: any = {
      limit: 5,
      offset: 0,
      role: "Graduate",
      search: this.search,
    }
    if (this.main_filter && this.sub_filter) {
      obj[this.main_filter] = this.sub_filter
    }
    console.log("Obj is====", obj);
    this.Service.gradlist(obj).subscribe(data => {
      console.log("main data for users is ====", data)
      this.gradlist = data.data

      for (let i = 0; i < this.gradlist?.length; i++) {
        if (this.gradlist[i].availability == 'full_time') {
          let cType = "Full Time"
          this.gradlist[i].cType = cType
        }
        else if (this.gradlist[i].availability == "part_time") {
          let cType = 'Part Time'
          this.gradlist[i].cType = cType
        }

        if (this.gradlist[i].work_right?.work_right == '6229c90da69fcf8fc87e2827') {
          let workType = 'Permanent Resident/Citizen'
          this.gradlist[i].workType = workType
        }
        else if (this.gradlist[i].work_right?.work_right == "6229c917a69fcf8fc87e2828") {
          let workType = 'Full Time Work Rights'
          this.gradlist[i].workType = workType
        }
        else if (this.gradlist[i].work_right?.work_right == "6229c91fa69fcf8fc87e2829") {
          let workType = 'Student Visa'
          this.gradlist[i].workType = workType
        }
      }
      this.totalRecords = data.count
      this.sortedData = this.gradlist
    }, err => {
      console.log(err.status)
      if (err.status >= 404) {
        console.log('Some error occured')
      } else {
        console.log('Internet Connection Error')
      }
    })
  }

  applyFilter(filterValue) {
    this.search = filterValue.target.value
    console.log("seacrh=====>", this.search);
    if (this.event) {
      this.paginationOptionChange(this.event)
    }
    else {
      this.graduatelist()
    }
    console.log("apply filter===>>", this.event)
    console.log("filter value===>>>", this.filterValue)
  }

  selectfilter(e) {
    if (e.target.value == "Select Filter") {
      this.selectFilter = []
    }
    else if (e.target.value == "work_preference") {
      this.selectFilter = [
        { name: 'Internship', _id: "internship" },
        { name: 'Job', _id: "job" },
        { name: 'Any', _id: "any" }
      ]
    }
    else if (e.target.value == "availability") {
      this.selectFilter = [
        { name: 'Any', _id: "any" },
        { name: 'Part Time', _id: "part_time" },
        { name: 'Full Time', _id: "full_time" }
      ]

    }
    else if (e.target.value == "work_right") {
      this.Service.getGradDropDown().subscribe(res => {
        console.log("fnjdskjfhdskjf", res);
        this.selectFilter = res.data

      })
      // this.selectFilter = [
      //   { name: 'Permanent Resident/Citizen', value: "6229c90da69fcf8fc87e2827" },
      //   { name: 'Full Time Work Rights', value: "6229c917a69fcf8fc87e2828" },
      //   { name: 'Student Visa', value: "6229c91fa69fcf8fc87e2829" },
      // ]

    }

  }

  applyfilters() {
    this.flag = true
    this.graduatelist()
  }
   paginationOptionChange(evt) {
    this.event = evt
    this.topPage = evt.pageIndex

    var obj: any = {
      role: "Graduate",
      search: this.search,
      limit: evt.pageSize,
      offset: (evt.pageIndex * evt.pageSize),
    }
    if (this.main_filter && this.sub_filter && this.flag == true) {
      obj[this.main_filter] = this.sub_filter
    }
    console.log("paginator obj==========", obj);
    this.Service.gradlist(obj).subscribe(data => {
      console.log("main data for users is ====", data)
      this.gradlist = data.data

      for (let i = 0; i < this.gradlist?.length; i++) {
        if (this.gradlist[i].availability == 'full_time') {
          let cType = "Full Time"
          this.gradlist[i].cType = cType
        }
        else if (this.gradlist[i].availability == "part_time") {
          let cType = 'Part Time'
          this.gradlist[i].cType = cType
        }

        if (this.gradlist[i].work_right?.work_right == '6229c90da69fcf8fc87e2827') {
          let workType = 'Permanent Resident/Citizen'
          this.gradlist[i].workType = workType
        }
        else if (this.gradlist[i].work_right?.work_right == "6229c917a69fcf8fc87e2828") {
          let workType = 'Full Time Work Rights'
          this.gradlist[i].workType = workType
        }
        else if (this.gradlist[i].work_right?.work_right == "6229c91fa69fcf8fc87e2829") {
          let workType = 'Student Visa'
          this.gradlist[i].workType = workType
        }
      }
      this.totalRecords = data.count
      this.sortedData = this.gradlist
    })
  }
  getPageSizeOptions() {
    return [5,10,50,100];
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