import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-graduate',
  templateUrl: './edit-graduate.component.html',
  styleUrls: ['./edit-graduate.component.scss']
})
export class EditGraduateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

}
