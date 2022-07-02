import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {SelectionModel} from '@angular/cdk/collections';
import { TopgradserviceService } from '../../topgradservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  enquiryType: string;
  email: string;
  enquiry: string;
  reply:string;
}

/** Constants used to fill up our data base. */

const FIRSTNAME: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
const LASTNAME: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
const ENQUIRYTYPE: string[] = [
  'My Account', 'Website Issues', 'Jobs', 'Website Issues', 'Jobs', 'Website Issues', 'Website Issues', 'Website Issues', 'Website Issues', 'Website Issues',
  'My Account', 'My Account', 'Website Issues', 'Jobs', 'Website Issues', 'Website Issues', 'Website Issues', 'Website Issues', 'Website Issues'
];
const EMAIL: string[] = [
  'maia@gmail.com', 'asher@gmail.com', 'olivia@gmail.com', 'atticus@gmail.com', 'amelia@gmail.com', 'jack@gmail.com', 'charlotte@gmail.com', 'theodore@gmail.com', 'isla@gmail.com', 'oliver@gmail.com',
  'isabella@gmail.com', 'jasper@gmail.com', 'cora@gmail.com', 'levi@gmail.com', 'violet@gmail.com', 'arthur@gmail.com', 'mia@gmail.com', 'thomas@gmail.com', 'elizabeth@gmail.com'
];
const ENQUIRY: string[] = [
  'Lorem ipsum sit donar Lorem ipsum sit donar', 'Lorem ipsum sit donar Lorem ipsum sit donar', 'Lorem ipsum sit donar Lorem ipsum sit donar', 'Lorem ipsum sit donar Lorem ipsum sit donar', 
];
const REPLY: string[] = [
  'yes,no,yes,no,yes,no,yes,no,yes,no,yes,no,ye,no,yes,no,yes,no,yes,no,yes,no,yes,no,yes,no,ye,no', 
  'yes,no,yes,no,yes,no,yes,no,yes,no,yes,no,ye,no,yes,no,yes,no,yes,no,yes,no,yes,no,yes,no,ye,no'
];

@Component({
  selector: 'app-help-management',
  templateUrl: './help-management.component.html',
  styleUrls: ['./help-management.component.scss']
})
export class HelpManagementComponent implements OnInit {
  // [x: string]: any;

  displayedColumns: string[] = ['select', 'id', 'firstName', 'lastName', 'email', 'enquiryType', 'enquiry','reply', 'action'];
  dataSource: MatTableDataSource<UserData>;
  selection = new SelectionModel<UserData>(true, []);
  
  @ViewChild('smallModal') public smallModal: ModalDirective;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('replyModal') public replyModal: ModalDirective;
  @ViewChild(MatSort) sort: MatSort;
 
  HelpManagement: any;
  length: any;
  totalRecords=0;
  item_id: any;
  viewHelp: FormGroup;
  limit=5;
  // pageSize = 5
  offset=0;
  id: any;
  contactUsForm: FormGroup;
  createNewUSer: any;
  sortedData: [];
  search: any;
  filterValue: string;
  topPage=0;

  constructor(private Service:TopgradserviceService,private fb : FormBuilder) {
    {
      this.viewHelp=this.fb.group({
        reply:['',Validators.required],
        })
  
      const users : UserData[] = [];
      for (let i = 1; i <= 20; i++) { users.push(createNewUser(i)); };
      this.dataSource = new MatTableDataSource(users);
      this.sortedData = this.HelpManagement?.slice();
    }
  }
  sortData(sort: Sort) {
    const data = this.HelpManagement.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'last_name':
          return compare(a.last_name, b.last_name, isAsc);
        case 'first_name':
          return compare(a.first_name, b.first_name, isAsc);
        case 'enquiry_subject':
          return compare(a.enquiry_subject, b.enquiry_subject, isAsc);
        case 'email':
          return compare(a.email, b.email, isAsc);
        case 'enquiry':
          return compare(a.enquiry, b.enquiry, isAsc);
        case 'is_replied':
          return compare(a.is_replied, b.is_replied, isAsc);
      
        default:
          return 0;
      }
    });
  }


 ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.contactList();
    this.sortedData=this.HelpManagement
  }

  paginationOptionChange(evt) {
    console.log("evthrm", evt)
    this.topPage = evt.pageIndex
    console.log('rsawsfsdsf',this.topPage)
   var obj = {
    type:'help',
      limit: evt.pageSize,
       offset:  (evt.pageIndex * evt.pageSize)
     }
     this.Service.contactList(obj).subscribe(async data => {
       console.log("Response of all the service listing>>>>>", data);
        this.HelpManagement=data.data,
        this.totalRecords = data.count;
        this.sortedData=this.HelpManagement
     })
  }
  getPageSizeOptions() {
    return [5,10,20,50];
  }


  contactList(){
    console.log("javascriptt========");
    var obj: any={
      type:'help',
      limit:5,
      offset:0
    }
    if(this.search){
      obj.search = this.search
    }
    this.Service.contactList(obj).subscribe(res=>{
      console.log("Response==========",res);
      this.HelpManagement=res.data
      this.totalRecords = res.count
      this.sortedData=this.HelpManagement

      // this.ngOnInit()
    })
    console.log("Object==========");
  }

  // delete start .............

  delete_id(id){
    this.item_id=id
    this.smallModal.show()
    console.log("adsdsadsadsds",this.item_id);

  }
  contactDelete(id){
    var obj={
      support_id:id
    }
    console.log("adsdsadsadsds",obj);
    this.smallModal.hide()
    // this.ngOnInit()
  
    
    this.Service.contactDelete(obj).subscribe(res=>{
      console.log("Response==========",res);
      this.ngOnInit()
      this.smallModal.hide()
    })
  }

  // delete end here.........



  // Contact_Reply start here......
   
  simple_reply(id){
    console.log("",id)
    this.id=id
    this.replyModal.show()
  }

  contactReply(id){
    console.log("formmmmmmmmmmmm",this.viewHelp);
    if(this.viewHelp.invalid){
      this.viewHelp.markAllAsTouched()
    }
    else{
      var obj={
        support_id:id,
        reply:this.viewHelp.controls.reply.value,
        name:this.HelpManagement.first_name,
        email:this.HelpManagement.email,
        subject:'Enquiry',
      }
      console.log("Reply=========>",obj);
      this.Service.contactReply(obj).subscribe(res=>{
        console.log("Response==========",res);
        this.ngOnInit()
        this.replyModal.hide()
        this.viewHelp.reset()
      })
      
    }
  }
  replyModal1(){

    this.replyModal.hide()
    this.viewHelp.reset()
  }
 

  // Contact_Reply end here.......



  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  applyFilter(filterVAlue:string){
    console.log("filterValue",this.search)
    this.contactList()
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
  const firstName = FIRSTNAME[Math.round(Math.random() * (FIRSTNAME.length - 1))] + ' ';
  const lastName = LASTNAME[Math.round(Math.random() * (LASTNAME.length - 1))] + ' ';
  const enquiryType = ENQUIRYTYPE[Math.round(Math.random() * (ENQUIRYTYPE.length - 1))] + ' ';
  const email = EMAIL[Math.round(Math.random() * (EMAIL.length - 1))] + ' ';
  const enquiry = ENQUIRY[Math.round(Math.random() * (ENQUIRY.length - 1))] + ' ';
  const reply =REPLY[Math.round(Math.random() * (REPLY.length - 1))] + ' ';
  

  return {
    id: id.toString() + '.',
    firstName: firstName,
    lastName: lastName,
    enquiryType: enquiryType,
    email: email,
    enquiry: enquiry,
    reply:reply,

  };
}
function compare(a: string, b: string, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
