import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {SelectionModel} from '@angular/cdk/collections';
import { TopgradserviceService } from '../../../../topgradservice.service';

export interface UserData {
  id: string;
  name: string;
}

/** Constants used to fill up our data base. */
const NAME: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];


@Component({
  selector: 'app-industrylist',
  templateUrl: './industrylist.component.html',
  styleUrls: ['./industrylist.component.scss']
})

export class IndustrylistComponent implements OnInit {
  userList=[]
  displayedColumns: string[] = ['select', 'id', 'name', 'action'];
  dataSource: MatTableDataSource<UserData>;
  // dataSource: MatTableDataSource<UserData>(this.userList);
  selection = new SelectionModel<UserData>(true, []);
  
  @ViewChild('smallModal') public smallModal: ModalDirective;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  totalRecords: any;

  constructor(private Service:TopgradserviceService) { 
	// Create 100 users
    const users = Array.from({length: 5}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
     
    }
    this.userlisting();
  }
  
  userlisting(){
    console.log("khjhgjhgjhgjhghjghjgjhghjg");
    
    var obj = {
    limit: 5,
    offset: 0
    }
    console.log("onnnn", obj)
    this.Service.userlist(obj).subscribe(data => {
    console.log("main data for users is ====", data)
    this.userList=data.data
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

