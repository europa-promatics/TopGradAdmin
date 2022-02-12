import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-employer-how-it-works',
  templateUrl: './edit-employer-how-it-works.component.html',
  styleUrls: ['./edit-employer-how-it-works.component.scss']
})
export class EditEmployerHowItWorksComponent implements OnInit {

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
