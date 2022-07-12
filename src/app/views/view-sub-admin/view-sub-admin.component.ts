import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { TopgradserviceService } from '../../topgradservice.service';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

export interface Task1 {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks1?: Task1[];
}

export interface Task2 {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks2?: Task2[];
}

export interface Task3 {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks3?: Task3[];
}

@Component({
  selector: 'app-view-sub-admin',
  templateUrl: './view-sub-admin.component.html',
  styleUrls: ['./view-sub-admin.component.scss']
})
export class ViewSubAdminComponent {
  allData: any;
  last_name: any;
  first_name: any;
  email: any;
  phone_no: any;
  status: any;
  image: any;
  employers: any;
  graduates: any;
  user_management: any;
  general_management: any;
  faqs: any;
  home_page: any;
  how_it_works: any;
  job_management: any;
  approve: any;
  delete: any;
  edit: any;
  payment_management: any;
  invoices: any;
  view: any;
  paymentDelete: any;
  userCheck: boolean;
  userCheck4: boolean;
  userCheck3: boolean;
  userCheck2: boolean;
  userCheck1: boolean;

  constructor(
    private Service: TopgradserviceService,
    private route: ActivatedRoute,
  ) { }

  task: Task = {
    name: 'User Management',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Graduates', completed: false, color: 'accent'},
      {name: 'Employers', completed: false, color: 'accent'},
      // {name: 'Sub Admin', completed: false, color: 'accent'}
    ]
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

//**************************** for checkbox 2 ****************************************
  task1: Task1 = {
    name: 'Jobs Management',
    completed: false,
    color: 'primary',
    subtasks1: [
      {name: 'Edit', completed: false, color: 'accent'},
      {name: 'Approve', completed: false, color: 'accent'},
      {name: 'Delete', completed: false, color: 'accent'}
    ]
  };

 allComplete1: boolean = false;

  updateAllComplete1() {
    this.allComplete1 = this.task1.subtasks1 != null && this.task1.subtasks1.every(t => t.completed);
  }

  someComplete1(): boolean {
    if (this.task1.subtasks1 == null) {
      return false;
    }
    return this.task1.subtasks1.filter(t => t.completed).length > 0 && !this.allComplete1;
  }

  setAll1(completed: boolean) {
    this.allComplete1 = completed;
    if (this.task1.subtasks1 == null) {
      return;
    }
    this.task1.subtasks1.forEach(t => t.completed = completed);
  }

 //**************************** for checkbox 3 ****************************************
  task2: Task2 = {
    name: 'Payment Management',
    completed: false,
    color: 'primary',
    subtasks2: [
      {name: 'Invoices', completed: false, color: 'accent'},
      {name: 'View', completed: false, color: 'accent'},
      {name: 'Delete', completed: false, color: 'accent'}
    ]
  };

 allComplete2: boolean = false;

  updateAllComplete2() {
    this.allComplete2 = this.task2.subtasks2 != null && this.task2.subtasks2.every(t => t.completed);
  }

  someComplete2(): boolean {
    if (this.task2.subtasks2 == null) {
      return false;
    }
    return this.task2.subtasks2.filter(t => t.completed).length > 0 && !this.allComplete2;
  }

  setAll2(completed: boolean) {
    this.allComplete2 = completed;
    if (this.task2.subtasks2 == null) {
      return;
    }
    this.task2.subtasks2.forEach(t => t.completed = completed);
  }


 //**************************** for checkbox 4 ****************************************
  task3: Task3 = {
    name: 'General Management',
    completed: false,
    color: 'primary',
    subtasks3: [
      {name: 'Home Page', completed: false, color: 'accent'},
      {name: 'How it Works', completed: false, color: 'accent'},
      {name: 'FAQs', completed: false, color: 'accent'}
    ]
  };

 allComplete3: boolean = false;

  updateAllComplete3() {
    this.allComplete3 = this.task3.subtasks3 != null && this.task3.subtasks3.every(t => t.completed);
  }

  someComplete3(): boolean {
    if (this.task3.subtasks3 == null) {
      return false;
    }
    return this.task3.subtasks3.filter(t => t.completed).length > 0 && !this.allComplete3;
  }

  setAll3(completed: boolean) {
    this.allComplete3 = completed;
    if (this.task3.subtasks3 == null) {
      return;
    }
    this.task3.subtasks3.forEach(t => t.completed = completed);
  }


  ngOnInit(): void {
    this.detailSubAdminData()
  }

  detailSubAdminData() {
    var obj = {
      id: this.route.snapshot.paramMap.get('id')
    }
    console.log("object>>>>",obj);
    
    this.Service.detailSubAdmin(obj).subscribe((res: any) => {
      console.log("response of detail Sub admin >>>>>>>", res);

      this.allData=res.data
      console.log("all data >>>",this.allData);

      this.image=this.allData.image
      this.first_name=this.allData.first_name
      this.last_name=this.allData.last_name
      this.email=this.allData.email
      this.phone_no=this.allData.phone_no
      this.status=this.allData.status

      // this.user_management=this.allData.user_management
      this.employers=this.allData.user_management.employers
      this.graduates=this.allData.user_management.graduates

      if(this.employers==true || this.graduates==true){
        this.userCheck1 = true;
      }

      // this.general_management=this.allData.general_management
      this.faqs=this.allData.general_management.faqs
      this.home_page=this.allData.general_management.home_page
      this.how_it_works=this.allData.general_management.how_it_works
      if(this.how_it_works==true || this.home_page==true || this.faqs==true){
        this.userCheck2 = true;
      }

      // this.job_management=this.allData.job_management
      this.approve=this.allData.job_management.approve
      this.delete=this.allData.job_management.delete
      this.edit=this.allData.job_management.edit
      if(this.edit==true || this.delete==true || this.approve==true){
        this.userCheck3 = true;
      }

      // this.payment_management=this.allData.payment_management
      this.paymentDelete=this.allData.payment_management.delete
      this.invoices=this.allData.payment_management.invoices
      this.view=this.allData.payment_management.view
      if(this.paymentDelete==true || this.invoices==true || this.view==true){
        this.userCheck4 = true;
      }



      

      
    })
  }

}
