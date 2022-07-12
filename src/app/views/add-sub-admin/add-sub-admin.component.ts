import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TopgradserviceService } from '../../topgradservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  selector: 'app-add-sub-admin',
  templateUrl: './add-sub-admin.component.html',
  styleUrls: ['./add-sub-admin.component.scss']
})
export class AddSubAdminComponent {

  addSubAdminForm: FormGroup
  imageFile: any;
  selectedfile: any;
  employers: any;
  edit: any;
  approve: any;
  delete: any;
  invoices: any;
  view: any;
  home_page: any;
  how_it_works: any;
  faqs: any;
  graduates: any;

  constructor(
    private Service: TopgradserviceService,
    private fb: FormBuilder,
    private router:Router,
    private _snackBar: MatSnackBar
  ) {
    this.addSubAdminForm = this.fb.group({
      image:['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      status: ['', [Validators.required]],
      phone_no: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    })
  }


  ngOnInit(): void {
    console.log("My form >>>>", this.addSubAdminForm);


  }



  //**************************** for checkbox 1 User Management ****************************************
  task: Task = {
    name: 'User Management',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Graduates', completed: false, color: 'accent' },
      { name: 'Employers', completed: false, color: 'accent' },
      // { name: 'Sub Admin', completed: false, color: 'accent' }
    ]
  };
  allComplete: boolean=false

  // graduates: boolean = false;

  updateAllCompleteUser(event, name) {
    console.log("event>>>>>",event);
    console.log("my name=============>>>.",name);
    
    if(name == 'Graduates'){
      this.graduates = event
      console.log("graduate>>>>>>",this.graduates);
    }
    if(name == 'Employers'){
      this.employers = event
      console.log("employerrrrrr>> >>>",this.employers);
    }
   
    
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete ;
  }

  setAllUserManagement(completed: boolean) {
    this.graduates = completed;
    this.employers=completed
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }





  //**************************** for checkbox 2 Jobs Management ****************************************
  task1: Task1 = {
    name: 'Jobs Management',
    completed: false,
    color: 'primary',
    subtasks1: [
      { name: 'Edit', completed: false, color: 'accent' },
      { name: 'Approve', completed: false, color: 'accent' },
      { name: 'Delete', completed: false, color: 'accent' }
    ]
  };

  allComplete1: boolean = false;

  updateAllComplete1(event, name) {
    console.log("event>>>>>",event);
    console.log("my name=============>>>.",name);
    
    if(name == 'Edit'){
      this.edit = event
      console.log("edit>>>>>>",this.edit);
    }
    if(name == 'Approve'){
      this.approve = event
      console.log("approve>> >>>",this.approve);
    }
    if(name == 'Delete'){
      this.delete = event
      console.log("delete>> >>>",this.delete);
    }
    
    // this.allComplete1 = this.task1.subtasks1 != null && this.task1.subtasks1.every(t => t.completed);
  }

  someComplete1(): boolean {
    if (this.task1.subtasks1 == null) {
      return false;
    }
    return this.task1.subtasks1.filter(t => t.completed).length > 0 && !this.allComplete1;
  }

  setAllJobManagement1(completed: boolean) {
    this.edit = completed;
    this.approve = completed;
    this.delete = completed;
    if (this.task1.subtasks1 == null) {
      return;
    }
    this.task1.subtasks1.forEach(t => t.completed = completed);
  }

  //**************************** for checkbox 3 Payment Management ****************************************
  task2: Task2 = {
    name: 'Payment Management',
    completed: false,
    color: 'primary',
    subtasks2: [
      { name: 'Invoices', completed: false, color: 'accent' },
      { name: 'View', completed: false, color: 'accent' },
      { name: 'Delete', completed: false, color: 'accent' }
    ]
  };

  allComplete2: boolean = false;

  updateAllComplete2(event, name) {
    console.log("event>>>>>",event);
    console.log("my name=============>>>.",name);
    
    if(name == 'Invoices'){
      this.invoices = event
      console.log("invoices>>>>>>",this.invoices);
    }
    if(name == 'View'){
      this.view = event
      console.log("view>> >>>",this.view);
    }
    if(name == 'Delete'){
      this.delete = event
      console.log("delete>> >>>",this.delete);
    }
    // this.allComplete2 = this.task2.subtasks2 != null && this.task2.subtasks2.every(t => t.completed);
  }

  someComplete2(): boolean {
    if (this.task2.subtasks2 == null) {
      return false;
    }
    return this.task2.subtasks2.filter(t => t.completed).length > 0 && !this.allComplete2;
  }

  setAllPaymentManagement(completed: boolean) {
    this.invoices = completed;
    this.view = completed;
    this.delete = completed;
    if (this.task2.subtasks2 == null) {
      return;
    }
    this.task2.subtasks2.forEach(t => t.completed = completed);
  }


  //**************************** for checkbox 4 General Management ****************************************
  task3: Task3 = {
    name: 'General Management',
    completed: false,
    color: 'primary',
    subtasks3: [
      { name: 'Home Page', completed: false, color: 'accent' },
      { name: 'How it Works', completed: false, color: 'accent' },
      { name: 'FAQs', completed: false, color: 'accent' }
    ]
  };

  allComplete3: boolean = false;

  updateAllComplete3(event, name) {
    console.log("event>>>>>",event);
    console.log("my name=============>>>.",name);
    
    if(name == 'Home Page'){
      this.home_page = event
      console.log("home_page>>>>>>",this.home_page);
    }
    if(name == 'How it Works'){
      this.how_it_works = event
      console.log("how_it_works>> >>>",this.how_it_works);
    }
    if(name == 'FAQs'){
      this.faqs = event
      console.log("faqs>> >>>",this.faqs);
    }
    // this.allComplete3 = this.task3.subtasks3 != null && this.task3.subtasks3.every(t => t.completed);
  }

  someComplete3(): boolean {
    if (this.task3.subtasks3 == null) {
      return false;
    }
    return this.task3.subtasks3.filter(t => t.completed).length > 0 && !this.allComplete3;
  }

  setAllGeneralManagement(completed: boolean) {
    this.home_page = completed;
    this.how_it_works = completed;
    this.faqs = completed;
    if (this.task3.subtasks3 == null) {
      return;
    }
    this.task3.subtasks3.forEach(t => t.completed = completed);
  }



  changeImage(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imageFile = event.target.result;
      }
    }
  }



  submitSubAdminForm() {

    if(this.addSubAdminForm.invalid){
      this._snackBar.open('Please, Fill the required fields ','close',{
        duration: 2000
      })
    }
    else{
      var obj = {
        type: "sub_admin",
        image: this.imageFile,
        first_name: this.addSubAdminForm.value.first_name,
        last_name: this.addSubAdminForm.value.last_name,
        email: this.addSubAdminForm.value.email,
        phone_no:this.addSubAdminForm.value.phone_no,
        status:this.addSubAdminForm.value.status,
  
        user_management: {
          graduates: this.graduates,
          employers: this.employers,
        },
        job_management: {
          edit: this.edit,
          approve: this.approve,
          delete: this.delete,
        },
        payment_management: {
          invoices: this.invoices,
          view: this.view,
          delete: this.delete,
        },
        general_management: {
          home_page: this.home_page,
          how_it_works: this.how_it_works,
          faqs: this.faqs
        }
  
      }
  
      this.Service.addSubAdmin(obj).subscribe((res: any) => {
        console.log("response of Sub Admin data>>>>>>", res);
        this.router.navigate(["/subAdminManagement"])
        this._snackBar.open('Created Data, Successfully..','close',{
          duration: 2000
        })
  
  
      })
    }

  }
  







}
