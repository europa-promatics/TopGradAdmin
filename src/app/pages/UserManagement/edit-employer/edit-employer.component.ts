import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {SelectionModel} from '@angular/cdk/collections';

import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TopgradserviceService } from '../../../topgradservice.service';

@Component({
  selector: 'app-edit-employer',
  templateUrl: './edit-employer.component.html',
  styleUrls: ['./edit-employer.component.scss']
})
export class EditEmployerComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private route:ActivatedRoute,private Service:TopgradserviceService, private fb:FormBuilder, private router: Router ) { }

  ngOnInit(): void {
    console.log(this.EditEmployerform)
    this.employerdetails();
  }

  EditEmployerform = this.fb.group({
    first_name: ['', [Validators.required, Validators.maxLength(50)]],
    last_name: ['', [Validators.required, Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]],
    company_name: ['', [Validators.required, Validators.maxLength(50)]],
    job_title: ['', [Validators.required]],
    creation_date: ['', [Validators.required, Validators.maxLength(50)]],
    password: ['', [Validators.required, Validators.maxLength(50)]],
    status: ['', [Validators.required]],
    Image: ['',],
    county:['']
  });

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

  employerdetails(){
    var obj = {
      user_id: this.route.snapshot.paramMap.get('id')
    }
    this.Service.getEmployerDetail(obj).subscribe((resp) => {
      console.log("employer detail is ====>", resp)

      this.EditEmployerform.patchValue({
        first_name: resp.data.first_name,
        last_name: resp.data.last_name,
        email:resp.data.email,
        company_name: resp.data.company_name,
        job_title: resp.data.role,
        password: resp.data.password,
        creation_date: resp.data.createdAt,
        status: resp.data.status
      })
      console.log("forrmmmmmmmm==========>",this.EditEmployerform);
      
    }) 
  }

  edituser(){
    var obj = {
      user_id: this.route.snapshot.paramMap.get('id'),
      first_name:this.EditEmployerform.controls.first_name.value,
      last_name:this.EditEmployerform.controls.last_name.value,
      email:this.EditEmployerform.controls.email.value,
      company_name:this.EditEmployerform.controls.company_name.value,
      role:this.EditEmployerform.controls.job_title.value,
      createdAt:this.EditEmployerform.controls.creation_date.value,
      status:this.EditEmployerform.controls.status.value
    }

    this.Service.EditEmployerDetail(obj).subscribe((resp) => {
      console.log("updated employer detail is ====>", resp)
      this.Service.showMessage({ message: "Submitted Successfully" })
    });
  }
}
