import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SelectionModel } from '@angular/cdk/collections';
import { TopgradserviceService } from '../../topgradservice.service';

export interface UserData {
  id: string;
  candidate: string;
  employer: string;
  jobtitle: string;
  interviewmethod: string;
  location: string;
  date: string;
  time: string;
}

/** Constants used to fill up our data base. */

const CANDIDATE: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi'
];
const EMPLOYER: string[] = [
  'Michael Smith', 'Amelia', 'IBM', 'Microsoft', 'Cora', 'Olivia', 'Levi', 'Michael', 'Oliver', 'Charlotte',
  'Levi', 'Isla', 'Olivia', 'Amelia', 'Michael Smith', 'IBM', 'Oliver', 'Isla', 'Levi'
];
const JOBTITLE: string[] = [
  'Software Developer', 'Software Developer', 'Software Developer', 'Software Developer', 'Software Developer', 'Software Developer', 'Software Developer', 'Software Developer', 'Software Developer', 'Software Developer',
  'Software Developer', 'Software Developer', 'Software Developer', 'Software Developer'
];

const INTERVIEWMETHOD: string[] = [
  'Face to Face', 'Face to Face', 'Face to Face', 'Face to Face', 'Face to Face', 'Face to Face', 'Face to Face', 'Face to Face', 'Face to Face', 'Face to Face',
  'Face to Face', 'Face to Face', 'Face to Face', 'Face to Face', 'Face to Face', 'Face to Face', 'Face to Face', 'Face to Face', 'Face to Face'
];
const LOCATION: string[] = [
  'Melbourne', 'Melbourne', 'Melbourne', 'Melbourne', 'Melbourne', 'Melbourne'
];
const DATE: string[] = [
  '08-09-2021', '07-09-2021', '01-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021'
];
const TIME: string[] = [
  '12.00 PM - 01.00 PM', '12.00 PM - 01.00 PM', '12.00 PM - 01.00 PM', '12.00 PM - 01.00 PM', '12.00 PM - 01.00 PM', '12.00 PM - 01.00 PM', '12.00 PM - 01.00 PM', '12.00 PM - 01.00 PM'
];

@Component({
  selector: 'app-schedule-interview-management',
  templateUrl: './schedule-interview-management.component.html',
  styleUrls: ['./schedule-interview-management.component.scss']
})
export class ScheduleInterviewManagementComponent implements OnInit {

  displayedColumns: string[] = [
    // 'select',
    'id',
    'candidate',
    'employer',
    'jobtitle',
    'interviewmethod',
    // 'location',
    'date',
    'time',
    'action'];
  dataSource: MatTableDataSource<UserData>;
  selection = new SelectionModel<UserData>(true, []);

  @ViewChild('smallModal') public smallModal: ModalDirective;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  interviewList: any;
  search:any=''
  event: any;
  interviewCount: number;
  matObj = {
    offset: 0,
    limit: 5
  }
  dataId: any;
  filterData: any;

  constructor(private Service: TopgradserviceService) {
    // Create 100 users
    const users = Array.from({ length: 50 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.search=''
    this.filterData='scheduled'
    this.getInterviewList();
  }

  selectFilter(event){
    console.log("select filter event>>>>",event.target.value);
    this.filterData=event.target.value
    this.getInterviewList()
    
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
      this.getInterviewList()

    }

  }

  getInterviewList() {
    var obj: any = {
      limit: this.matObj.limit,
      offset: this.matObj.offset,
      search:this.search,    
      type:this.filterData
    }
    if (this.search) {
      obj.search = this.search   
    }
    this.Service.getInterviewListing(obj).subscribe((res: any) => {
      console.log("response of interview data>>>>>>", res);

      this.interviewList = res.data.interviews
      console.log("this interview list data>>>>>", this.interviewList);

      this.interviewCount = res.data.count
      console.log("this interview count >>>>>>", this.interviewCount);


      for (let i = 0; i < this.interviewList?.length; i++) {
        if (this.interviewList[i].interview.interview_method == 'face_to_face') {
          let interviewMethod = "Face To Face"
          this.interviewList[i].interview.interviewMethod = interviewMethod
        }
        else if (this.interviewList[i].interview.interview_method == 'phone') {
          let interviewMethod = "Phone"
          this.interviewList[i].interview.interviewMethod = interviewMethod
        }
        else if (this.interviewList[i].interview.interview_method == 'video') {
          let interviewMethod = "Video"
          this.interviewList[i].interview.interviewMethod = interviewMethod
        }
      }
    })


  }

  paginatorOfInterview(event) {
    console.log("pagintaor event>>>>>", event);
    this.matObj.offset = event.pageIndex * event.pageSize;
    this.matObj.limit = event.pageSize
    this.getInterviewList();
  }

  getPageSizeOfInterviewOptions() {
    return [5, 10, 50, 100];
  }

  // deleteInterviewId(id){
  //   console.log("delete data id >>>",id);

  //   this.dataId=id
  //   this.smallModal.show()
  //   this.ngOnInit()
  // }

  // deletedInterview(){

  //   var obj={
  //     id:this.dataId
  //   }
  //   this.Service.deleteInterview(obj).subscribe((res:any)=>{
  //     console.log("response of delete interview data>>>",res);

  //     this.ngOnInit()
  //     this.smallModal.hide()

  //   })

  // }





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
  const candidate = CANDIDATE[Math.round(Math.random() * (CANDIDATE.length - 1))] + ' ';
  const employer = EMPLOYER[Math.round(Math.random() * (EMPLOYER.length - 1))] + ' ';
  const jobtitle = JOBTITLE[Math.round(Math.random() * (JOBTITLE.length - 1))] + ' ';
  const interviewmethod = INTERVIEWMETHOD[Math.round(Math.random() * (INTERVIEWMETHOD.length - 1))] + ' ';
  const location = LOCATION[Math.round(Math.random() * (LOCATION.length - 1))] + ' ';
  const date = DATE[Math.round(Math.random() * (DATE.length - 1))] + ' ';
  const time = TIME[Math.round(Math.random() * (TIME.length - 1))] + ' ';

  return {
    id: id.toString() + '.',
    candidate: candidate,
    employer: employer,
    jobtitle: jobtitle,
    interviewmethod: interviewmethod,
    location: location,
    date: date,
    time: time

  };
}