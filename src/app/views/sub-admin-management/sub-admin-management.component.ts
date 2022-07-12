import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {SelectionModel} from '@angular/cdk/collections';
import { TopgradserviceService } from '../../topgradservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface UserData {
  id: string;
  name: string;
  email: string;
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
const APPDATE: string[] = [
  '08-09-2021', '07-09-2021', '01-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021'
];


@Component({
  selector: 'app-sub-admin-management',
  templateUrl: './sub-admin-management.component.html',
  styleUrls: ['./sub-admin-management.component.scss']
})
export class SubAdminManagementComponent implements AfterViewInit {

  displayedColumns: string[] = ['select', 'id', 'name', 'email', 'credentials', 'status', 'action'];
  dataSource: MatTableDataSource<UserData>;
  selection = new SelectionModel<UserData>(true, []);
  
  @ViewChild('smallModal') public smallModal: ModalDirective;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  search:any=''
  event: any;
  interviewCount: number;
  matObj = {
    offset: 0,
    limit: 5
  }
  subAdminCount: any;
  allSubAdminData: any;
  dataId: any;
  credentialsId: any;

  constructor(private Service: TopgradserviceService,
    private _snackBar: MatSnackBar) { 
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
    this.getSubAdminList();
  }



  applyFilter(filterValue) {
    console.log("filter value>>>>", filterValue);

    this.search = filterValue.target.value
    console.log("search >>>>>>", this.search);

    if (this.event) {
      console.log("paginator ka event>>>", this.event);

      this.paginatorOfInterview(this.event)
    }
    else {
      this.getSubAdminList()

    }

  }

  getSubAdminList() {
    var obj: any = {
      limit: this.matObj.limit,
      offset: this.matObj.offset,
      search:this.search,    
    }
    if (this.search) {
      obj.search = this.search   
    }
    this.Service.getSubAdminData(obj).subscribe((res: any) => {
      console.log("response of Sub Admin data>>>>>>", res);

      this.allSubAdminData=res.data
      console.log("All data of Sub Admin>>>>>",this.allSubAdminData);
      

      this.subAdminCount=res.count

    })


  }

  paginatorOfInterview(event) {
    console.log("pagintaor event>>>>>", event);
    this.matObj.offset = event.pageIndex * event.pageSize;
    this.matObj.limit = event.pageSize
    this.getSubAdminList();
  }

  getPageSizeOfInterviewOptions() {
    return [5, 10, 50, 100];
  }


    deleteSubAdminId(id){
    console.log("delete data id >>>",id);

    this.dataId=id
    this.smallModal.show()
    this.ngOnInit()
  }

  deletedSubAdmin(){

    var obj={
      id:this.dataId
    }
    this.Service.deleteSubAdmin(obj).subscribe((res:any)=>{
      console.log("response of delete SubAdmin data>>>",res);
      this._snackBar.open('Sub_Admin Data Deleted , Successfully..','close',{
        duration: 2000
      })
      this.ngOnInit()
      this.smallModal.hide()

    })

  }

  credentials(id){
    console.log("credentials id >>>>>>>.",id);
    this.credentialsId=id

    var obj={
      id:this.credentialsId
    }
    this.Service.sendCredentialsSubAdmin(obj).subscribe((res:any)=>{
      console.log("response of credentials SubAdmin data>>>",res);
      this.ngOnInit()
      this._snackBar.open('Credentials Sended, Successfully..','close',{
        duration: 2000
      })

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
  const name = NAME[Math.round(Math.random() * (NAME.length - 1))] + ' ';
  const email = EMAIL[Math.round(Math.random() * (EMAIL.length - 1))] + ' ';
  const applicatedate = APPDATE[Math.round(Math.random() * (APPDATE.length - 1))] + ' ';

  return {
    id: id.toString() + '.',
    name: name,
    email: email,
    applicatedate: applicatedate,
  };
}
