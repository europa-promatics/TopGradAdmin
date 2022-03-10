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
  gradlist=[]
	displayedColumns: string[] = ['select', 'id', 'name', 'lname', 'email', 'company', 'location', 'wrkpref', 'availability','wrkrights', 'status', 'action'];
	dataSource: MatTableDataSource<UserData>;
  selection = new SelectionModel<UserData>(true, []);

  @ViewChild('smallModal') public smallModal: ModalDirective;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
  totalRecords: any;
  delId: any;
  event: any;
  topPage: any;
  sortedData: any;
  search: any='';
  filter: any='';
  array: any[];
  array1: any[];

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
    this.search=''
    this.graduatelist();
    this.filter=''
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


  graduatelist(){
    console.log("khjhgjhgjhgjhghjghjgjhghjg");
    
    var obj: any={
    limit: 10,
    offset: 0,
    role: "Graduate",
    search:this.search,
    filter:this.filter
    }
    // if(this.search){
    //   obj.search = this.search
    // }
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

	applyFilter(filterValue) {
   
    this.search=filterValue.target.value
    console.log("search", this.search);
    
    console.log("after searchhhhh-00------------0=====",this.event);

    if(this.event){
      console.log("after searchhhhh=====",this.event);
      
      this.paginationOptionChange(this.event)
    }
    else{
      this.graduatelist()

    }

	 }

   selectfilter(e){
     console.log("ddsfc",e.target.value);
     if(e.target.value== "Work Preference"){
        console.log("blle blle");
        this.array=[{name:'Any', value:"any"},{name:'Job',value:"job"},{name:'Internship',value:"internship"}]
        console.log("1",this.array);
        
     }
     if(e.target.value== "Availability"){
        console.log("te shava shava");
        this.array=[{name:'Any', value:"any"},{name:'Part Time',value:"part_time"},{name:'Full Time',value:"full_time"}]
        console.log("2",this.array);
     }
     if(e.target.value== "Work Rights"){
        console.log("nacho navho te kava kava");
        this.array=[{name:'Any', value:"any"},{name:'Citizen Permanent Resident',value:"citizen_permanent_resident"},{name:'Full Time Work Visa',value:"full_time_work_visa"},{name:'Student Visa',value:"student_visa"},{name:'Aboriginal Torres Straight Islander',value:"aboriginal_torres_straight_islander"}]
        console.log("3",this.array);
     }
     
   }

   selectsubfilter(e){
    console.log("subfilter value",e.target.value);
    this.filter=e.target.value;
    if(this.event){
      console.log("after searchhhhh=====",this.event);
      
      this.paginationOptionChange(this.event)
    }
    else{
      console.log("fgddfgdfgdfgdfgdgfdfg",this.filter);
      
      this.graduatelist()

    }
   }

   paginationOptionChange(evt) {
    this.event=evt
    console.log("evthrm", evt)
    this.topPage = evt.pageIndex
    console.log('rsawsfsdsf',this.topPage)
    console.log("pagesize is======",evt.pageSize);
    
   var obj:any = {
    role: "Graduate",
    search:this.search,
    filter:this.filter,
    limit: evt.pageSize,
    offset: (evt.pageIndex*evt.pageSize)
     }
    //  if(this.search){
    //   obj.search = this.search
    // }
    console.log("paginator obj==========",obj);
    
     this.Service.gradlist(obj).subscribe(async data => {
       console.log("Response of all the service listing>>>>>", data);
        this.gradlist=data.data,
        this.sortedData=this.gradlist
        this.totalRecords = data.count
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