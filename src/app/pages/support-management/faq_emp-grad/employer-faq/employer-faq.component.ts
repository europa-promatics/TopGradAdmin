import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {SelectionModel} from '@angular/cdk/collections';
import { FormBuilder } from '@angular/forms';
import { TopgradserviceService } from '../../../../topgradservice.service';

export interface UserData {
  id: string;
  title: string;
  category: string;
  description: string;
}

/** Constants used to fill up our data base. */

const TITLE: string[] = [
  'How do I keep track of a b c?', 'Lorem ipsum dolor sit?'
];
// const LASTNAME: string[] = [
//   'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
//   'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
// ];
const CATEGORY: string[] = [
  'General', 'My Account', 'Jobs', 'Permissions & Privacy', 
];

const DESCRIPTION: string[] = [
  'Lorem ipsum sit donar Lorem ipsum sit donar', 'Lorem ipsum sit donar Lorem ipsum sit donar', 'Lorem ipsum sit donar Lorem ipsum sit donar', 'Lorem ipsum sit donar Lorem ipsum sit donar', 
];

@Component({
  selector: 'app-employer-faq',
  templateUrl: './employer-faq.component.html',
  styleUrls: ['./employer-faq.component.scss']
})
export class EmployerFaqComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'description', 'category', 'action'];
  dataSource: MatTableDataSource<UserData>;
  selection = new SelectionModel<UserData>(true, []);
    
  @ViewChild('smallModal') public smallModal: ModalDirective;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  EmployerFaqList: any;
  totalRecords: any;
  topPage: any;
  sortedData: any;
  search: any='';
  filterValue: string;
  item_id: any;

  constructor( private Service:TopgradserviceService,  private fb : FormBuilder) {

    

    const users : UserData[] = [];
    for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); };
    this.dataSource = new MatTableDataSource(users);
    this.sortedData = this.EmployerFaqList?.slice();
  }

  sortData(sort: Sort) {
    const data = this.EmployerFaqList.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
        return compare(a.id, b.id, isAsc);
        case 'title':
        return compare(a.id, b.id, isAsc);
        case 'category':
        return compare(a.id, b.id, isAsc);
        case 'description':
        return compare(a.id, b.id, isAsc);
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
    this.faqList();
  }
  paginationOptionChange(evt) {
    console.log("evthrm", evt)
    this.topPage = evt.pageIndex
    console.log('rsawsfsdsf',this.topPage)
    var obj :any= {
      user_type:"employer",
      limit: evt.pageSize,
      offset:  (evt.pageIndex * evt.pageSize)
    }
    if(this.search){
      obj.search = this.search
    }
    this.Service.faqList(obj).subscribe(async data => {
      console.log("Response of all the service listing>>>>>", data);
      this.EmployerFaqList=data.data
      this.sortedData=this.EmployerFaqList;
      this.totalRecords = data.count
    })
  }
  getPageSizeOptions() {
    return [5,10,25,50,100];
  }
  faqList(){
    console.log("javascriptt========");
    var obj: any={
      user_type:"employer",
      limit:5,
      offset:0
    }
    if(this.search){
      obj.search = this.search
    }
    this.Service.faqList(obj).subscribe(res=>{
        console.log("Response==========",res);
        this.EmployerFaqList=res.data
        this.sortedData=this.EmployerFaqList;
        this.totalRecords = res.count
      })
      console.log("Object==========",obj);
    }


    applyFilter(filterValue: string ) {
      console.log("filterValue", this.search);
      this.faqList()
    }

    delete_id(id){
      this.item_id=id
      this.smallModal.show()
      console.log("adsdsadsadsds",this.item_id);
      this.ngOnInit()
    }
    faqDelete(id){
      var obj={
        faq_id:id
      }
      console.log("adsdsadsadsds",obj);
      this.smallModal.hide()
      this.Service.faqDelete(obj).subscribe(res=>{
        console.log("Response==========",res);
        this.ngOnInit()
        this.smallModal.hide()
      })
    }

}

function createNewUser(id: number): UserData {
  const title = TITLE[Math.round(Math.random() * (TITLE.length - 1))] + ' ';
  const category = CATEGORY[Math.round(Math.random() * (CATEGORY.length - 1))] + ' ';
  const description = DESCRIPTION[Math.round(Math.random() * (DESCRIPTION.length - 1))] + ' ';
  

  return {
    id: id.toString() + '.',
    title: title,
    category: category,
    description: description,

  };
}

function compare(a: string, b: string, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

