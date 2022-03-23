import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {SelectionModel} from '@angular/cdk/collections';
import { TopgradserviceService } from '../../../topgradservice.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

export interface UserData {
  id: string;
  image: string;
  title: string;
  type: string;
  // description: string;
  postedBy: string;
 
}

/** Constants used to fill up our data base. */
const IMAGE: string[] = [
  'assets/img/blog-article.png', 'assets/img/blog3_bg.png'
];
const TITLE: string[] = [
  'Career Counsellors', 'Career Counsellors', 'Career Counsellors', 'Web Development', 'Career Counsellors', 'Career Counsellors', 'Career Counsellors', 'Career Counsellors', 'Career Counsellors'
];
const TYPE: string[] = [
  'Career Counsellors', 'Career Counsellors', 'Career Counsellors', 'Web Development', 'Career Counsellors', 'Career Counsellors', 'Career Counsellors', 'Career Counsellors', 'Career Counsellors'
];
// const DESCRIPTION: string[] = [
//   'Lorem ipsum sit donar Lorem ipsum sit donar', 'Lorem ipsum sit donar Lorem ipsum sit donar', 'Lorem ipsum sit donar Lorem ipsum sit donar', 'Lorem ipsum sit donar Lorem ipsum sit donar', 
// ];
const POSTEDBY: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-career-articles',
  templateUrl: './career-articles.component.html',
  styleUrls: ['./career-articles.component.scss']
})
export class CareerArticlesComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'image', 'postedBy', 'title','type', 'action'];
  dataSource: MatTableDataSource<UserData>;
  selection = new SelectionModel<UserData>(true, []);
  
  @ViewChild('smallModal') public smallModal: ModalDirective;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  sortedData: any;
  totalRecords: any;
  article: any;
  delId: any;
  search: any='';
  topPage: any;
  event: any;

  constructor(private Service: TopgradserviceService, public dialog: MatDialog, private fb: FormBuilder, private route: ActivatedRoute) {
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
    this.articleList();
    this.search='';
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
      this.articleList()

    }

  }

  paginationOptionChange(evt) {
    this.event=evt
    console.log("evthrm", evt)
    this.topPage = evt.pageIndex
    console.log('rsawsfsdsf',this.topPage)
    console.log("pagesize is======",evt.pageSize);
    
   var obj:any = {
      search:this.search,
      limit: evt.pageSize,
      offset: (evt.pageIndex*evt.pageSize)
    }
    //  if(this.search){
    //   obj.search = this.search
    // }
    console.log("paginator obj==========",obj);
    
     this.Service.getarticleList(obj).subscribe(async data => {
       console.log("Response of all the service listing>>>>>", data);
        this.sortedData=data.data
        this.totalRecords = data.count
     })
  }
  getPageSizeOptions() {
    return [5,10,50,100];
  }

  Modal(id){
    this.delId= id;
    this.smallModal.show();
  }

  deleteArticle(id){
    var obj={
      article_id:id
    }
    this.Service.delArticle(obj).subscribe(res => {
      console.log("Response==========", res);
      this.smallModal.hide();
      this.Service.showMessage({ message: "Deleted Successfully" });
      this.ngOnInit();
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


  articleList() {
    console.log("javascriptt========");
    var obj: any = {
      limit: 5,
      offset: 0,
      type:"image_article",
      search: this.search
      // search: this.search
    }

    console.log("object===>", obj);

    this.Service.getarticleList(obj).subscribe(res => {
      console.log("Response==========", res);
      this.sortedData = res.data
      this.totalRecords = res.count
      for(let i=0;i<this.sortedData.length;i++){
        var new_article = this.sortedData[i].article_type
        console.log("new_article=============>", new_article)
        if(new_article =="small_article"){
          this.article= "Small Article"
          console.log("this.article small===========>",this.article);
          this.sortedData[i].article_name=(this.article);
          
        }
        else if(new_article == "large_article"){
          this.article= "Large Article"
          console.log("this.article large===========>",this.article);
          this.sortedData[i].article_name=(this.article);
        }
      }
      
    }, err => {
      console.log(err.status)
      if (err.status >= 404) {
        console.log('Some error occured')
      } else {
        console.log('Internet Connection Error')
      }
    
    })
    console.log("Object==========");
  }

}

function createNewUser(id: number): UserData {
  const image = IMAGE[Math.round(Math.random() * (IMAGE.length - 1))] + ' ';
  const title = TITLE[Math.round(Math.random() * (TITLE.length - 1))] + ' ';
  const type = TYPE[Math.round(Math.random() * (TYPE.length - 1))] + ' ';
  const postedBy = POSTEDBY[Math.round(Math.random() * (POSTEDBY.length - 1))] + ' ';

  return {
    id: id.toString() + '.',
    image: image,
    title: title,
    type:type,
    postedBy: postedBy
  };
}