import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {SelectionModel} from '@angular/cdk/collections';

export interface UserData {
  id: string;
  image: string;
  category: string;
}

/** Constants used to fill up our data base. */
const IMAGE: string[] = [
  'assets/img/grads.png', 'assets/img/category.jpg'
];
const CATEGORY: string[] = [
  'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'Web Development', 'Graphic Designer', 'Graphic Designer', 'Graphic Designer', 'Graphic Designer', 'UI/UX Designer'
];


@Component({
  selector: 'app-sub-category-management',
  templateUrl: './sub-category-management.component.html',
  styleUrls: ['./sub-category-management.component.scss']
})
export class SubCategoryManagementComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'image', 'category', 'status', 'action'];
  dataSource: MatTableDataSource<UserData>;
  selection = new SelectionModel<UserData>(true, []);
  
  @ViewChild('smallModal') public smallModal: ModalDirective;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 
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
  const image = IMAGE[Math.round(Math.random() * (IMAGE.length - 1))] + ' ';
  const category = CATEGORY[Math.round(Math.random() * (CATEGORY.length - 1))] + ' ';

  return {
    id: id.toString() + '.',
    image: image,
    category: category,
  };
}
