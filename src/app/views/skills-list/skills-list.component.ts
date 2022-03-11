
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { TopgradserviceService } from '../../topgradservice.service';


export interface UserData {
  id: string;
  name: string;

}
const NAMES: string[] = [
  'Maia', 'Asher',
];

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name',];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild('smallModal') public smallModal: ModalDirective;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  totalRecords: any;
  topPage: any;
  sortedData: any;
  search: string;
  filterValue: string;
  skillsList1: any;
  event: any;

  constructor(private Service: TopgradserviceService, private fb: FormBuilder) {
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); };
    this.dataSource = new MatTableDataSource(users);
    this.sortedData = this.skillsList1?.slice();

  }
  sortData(sort: Sort) {
    const data = this.skillsList1.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'name':
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
    this.skillList();
  }

  paginationOptionChange(evt) {
    console.log("evthrm", evt)
    this.event = evt
    this.topPage = evt.pageIndex
    console.log('rsawsfsdsf', this.topPage)
    var obj: any = {
      search: "search",
      limit: evt.pageSize,
      offset: (evt.pageIndex * evt.pageSize)
    }
    if (this.search) {
      obj.search = this.search

    }
    this.Service.skillsList(obj).subscribe(async data => {
      console.log("Response of all the service listing>>>>>", data);
      this.skillsList1 = data.data,
        this.sortedData = this.skillsList1,
        this.totalRecords = data.count
    })
  }
  skillList() {
    console.log("javascriptt========");
    var obj: any = {
      limit: 5,
      offset: 0,
      search: "search"
    }
    if (this.search) {
      obj.search = this.search
    }
    this.Service.skillsList(obj).subscribe(res => {
      console.log("Response==========", res);
      this.skillsList1 = res.data
      this.sortedData = this.skillsList1
      this.totalRecords = res.count
    })
    console.log("Object==========", obj);
  }

  applyFilter(filterValue) {
    this.search = filterValue.target.value
    if (this.event) {
      this.paginationOptionChange(this.event)
    }
    else {
      this.skillList()

    }

  }
}
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ';
  return {
    id: id.toString() + '.',
    name: name,

  };
}
function compare(a: string, b: string, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}