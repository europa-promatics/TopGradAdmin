import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TopgradserviceService } from '../../topgradservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';


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
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.addSubAdminForm = this.fb.group({
      image: ['', [Validators.required]],
      first_name: ['', [Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]],
      last_name: ['', [Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      status: ['', [Validators.required]],
      phone_no: [null, Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(16), Validators.pattern('^[0-9+]*')])],
    })
  }


  ngOnInit(): void {
    console.log("My form >>>>", this.addSubAdminForm);


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

    if (this.addSubAdminForm.invalid) {
        this.addSubAdminForm.markAllAsTouched()
      this._snackBar.open('Please fill all the required fields ', 'close', {
        duration: 2000
      })
    }
    else {
      var obj = {
        type: "sub_admin",
        image: this.imageFile,
        first_name: this.addSubAdminForm.value.first_name,
        last_name: this.addSubAdminForm.value.last_name,
        email: this.addSubAdminForm.value.email,
        phone_no: this.addSubAdminForm.value.phone_no,
        status: this.addSubAdminForm.value.status,

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
        this._snackBar.open('Sub admin created successfully', 'close', {
          duration: 2000
        })


      })
    }

  }



}
