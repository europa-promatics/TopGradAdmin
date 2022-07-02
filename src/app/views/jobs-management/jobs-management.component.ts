import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {SelectionModel} from '@angular/cdk/collections';
import { TopgradserviceService } from '../../topgradservice.service';
import { FormBuilder } from '@angular/forms';

export interface UserData {
  id: string;
  postedby: string;
  deadline: string;
  worktype: string;
  contracttype: string;
  jobtitle: string;
  // applications: string;
  first_name:string;
  lastName:string
}

/** Constants used to fill up our data base. */
const DEADLINE: string[] = [
  '08-09-2021', '07-09-2021', '01-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021'
];
const POSTEDBY: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
const FIRSTNAME: string[] = [
];
const LASTNAME: string[] = [
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
// const APPLICATIONS: string[] = [
//   '23', '33', '77', '34', '3', '56', '56', '56', '56', '78',
//   '78', '78', '56', '56', '56', '56', '56', '78', '78'
// ];


@Component({
  selector: 'app-jobs-management',
  templateUrl: './jobs-management.component.html',
  styleUrls: ['./jobs-management.component.scss']
})
export class JobsManagementComponent implements AfterViewInit {

  displayedColumns: string[] = ['select', 'id', 'postedby', 'jobtitle', 'worktype', 'contracttype', 'deadline', 'status', /*'applications',*/ 'action'];
  dataSource: MatTableDataSource<UserData>;
  selection = new SelectionModel<UserData>(true, []);
  
  @ViewChild('smallModal') public smallModal: ModalDirective;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  totalRecords: any;
  jobList1: any;
  sortedData: [];
  topPage: any;
  search: any=' ';
  event: any;
  filterValue: string;
  item_id: any;
  id: any;
  contract_type: any;
  data: any;

  constructor(private Service: TopgradserviceService,private fb: FormBuilder) {
  
    const users : UserData[] = [];
    for (let i =1; i <= 100; i++) { users.push(createNewUser(i)); };//paginator...........
    
    this.dataSource = new MatTableDataSource(users);

    this.sortedData = this.jobList1?.slice();//sorting........
  }



  // sorting ----------------
  sortData(sort: Sort) {
    const data = this.jobList1.slice();
    console.log("dfagfdtyewdtuyety",data);
    
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active){
        case 'id':
          return compare(a.id?.toUpperCase(), b.id?.toUpperCase(), isAsc);
        case 'first_name':
          return compare(a.first_name?.toUpperCase(), b.first_name?.toUpperCase(), isAsc);
        case 'last_name':
          return compare(a.last_name?.toUpperCase(), b.last_name?.toUpperCase(), isAsc);
        case 'work_type':
          return compare(a.work_type?.toUpperCase(), b.work_type?.toUpperCase(), isAsc);
        case 'contract_type':
          return compare(a.contract_type?.toUpperCase(), b.contract_type?.toUpperCase(), isAsc);
        case 'job_title':
          return compare(a.job_title?.toUpperCase(), b.job_title?.toUpperCase(), isAsc);
        case 'deadline_date':
          return compare(a.deadline_date?.toUpperCase(), b.deadline_date?.toUpperCase(), isAsc);
      
        default:
          return 0;
      }
    });
  }
  

  openSnackBar() {
    this.id = this.id
  }

 ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;//paginator..............
    this.dataSource.sort = this.sort;//sorting..........
  }

  ngOnInit(): void {
    this.jobListing();  //listinggg
    this.search="";   // filter
  }
  

  // Paginator -----------
  paginationOptionChange(evt) {
    this.event=evt
    this.topPage = evt.pageIndex
   var obj:any = {
      search: this.search,
      limit: evt.pageSize,
       offset:  (evt.pageIndex * evt.pageSize)
     }
     if(this.search){
      obj.search = this.search
    }
     this.Service.jobManagementList(obj).subscribe(async res => {
       console.log("Response of all the service listing>>>>>", res);
        this.jobList1=res.data.records
        for(let i=0; i<this.jobList1?.length; i++){
          if(this.jobList1[i].contract_type=='temp_contract'){
            let cType= "Temp/Contract"
            this.jobList1[i].cType=cType
          }
          else if(this.jobList1[i].contract_type=='full_time'){
            let cType ='Full Time'
            this.jobList1[i].cType=cType
          }
          else if(this.jobList1[i].contract_type=='part_time'){
          let cType ='Part Time'
            this.jobList1[i].cType=cType
          }
          else if(this.jobList1[i].contract_type=='casual'){
            let cType ='Casual'
            this.jobList1[i].cType=cType
          }
        }
        this.sortedData=this.jobList1
        this.totalRecords = res.data.count
     })
  }
  getPageSizeOptions() {
    return [5,10,50,100];
  }


// listing-------------
  jobListing() {
    var obj: any = {
      limit: 10,
      offset: 0,
      search: this.search,
    }
    if (this.search) {
      obj.search = this.search
    }
  
    this.Service.jobManagementList(obj).subscribe(res => {
      console.log("Response==========", res);
      this.jobList1 = res.data.records
      
      for(let i=0; i<this.jobList1?.length; i++){
        if(this.jobList1[i].contract_type=='temp_contract'){
          let cType= "Temp/Contract"
          this.jobList1[i].cType=cType
        }
        else if(this.jobList1[i].contract_type=='full_time'){
          let cType ='Full Time'
          this.jobList1[i].cType=cType
        }
        else if(this.jobList1[i].contract_type=='part_time'){
        let cType ='Part Time'
          this.jobList1[i].cType=cType
        }
        else if(this.jobList1[i].contract_type=='casual'){
          let cType ='Casual'
          this.jobList1[i].cType=cType
        }
      }
      this.totalRecords = res.data.count
      console.log("job List===>",this.jobList1)

      this.sortedData = this.jobList1
      console.log("job sorted List===>",this.sortedData)
    })
    console.log("Object==========", obj);
  }


// filter------------
  applyFilter(filterValue) {
    this.search = filterValue.target.value
    if (this.event) {
      this.paginationOptionChange(this.event)
    }
    else {
      this.jobListing()
      
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
  
      }
    }

  }

view_id(){
  
}


delete_id(id){
  this.item_id=id
  this.smallModal.show()
  console.log("job management===>>>",this.item_id);
  this.ngOnInit()
}
jobManageDelete(id){
  var obj={
    employer_job_id:id
  }
  console.log("deleted industry",obj);
  this.smallModal.hide()
  this.Service.jobManagementDelete(obj).subscribe(res=>{
    console.log("Response==========",res);
    this.Service.showMessage({ message: "Deleted Successfully" })
    this.ngOnInit()
    this.smallModal.hide()
  })
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
  const first_name = FIRSTNAME[Math.round(Math.random() * (FIRSTNAME.length - 1))] + ' ';
  const lastName = LASTNAME[Math.round(Math.random() * (LASTNAME.length - 1))] + ' ';
  const worktype = WORKTYPE[Math.round(Math.random() * (WORKTYPE.length - 1))] + ' ';
  const contracttype = CONTRACT[Math.round(Math.random() * (CONTRACT.length - 1))] + ' ';
  const jobtitle = TITLE[Math.round(Math.random() * (TITLE.length - 1))] + ' ';
  // const applications = APPLICATIONS[Math.round(Math.random() * (APPLICATIONS.length - 1))] + ' ';

  return {
    id: id.toString() + '.',
    postedby: postedby,
    first_name: first_name,
    lastName:lastName,
    worktype: worktype,
    contracttype: contracttype,
    jobtitle: jobtitle,
    // applications: applications,
    deadline: DEADLINE[Math.round(Math.random() * (DEADLINE.length - 1))],

  };
}


// sorting..........
function compare(a: string, b: string, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


