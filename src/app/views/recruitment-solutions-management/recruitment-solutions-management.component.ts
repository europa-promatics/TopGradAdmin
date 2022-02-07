import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruitment-solutions-management',
  templateUrl: './recruitment-solutions-management.component.html',
  styleUrls: ['./recruitment-solutions-management.component.scss']
})
export class RecruitmentSolutionsManagementComponent implements OnInit {

constructor() { }

  ngOnInit(): void {
  }

  files: File[] = [];

onSelect(event) {
  console.log(event);
  this.files.push(...event.addedFiles);
}

onRemove(event) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

}
