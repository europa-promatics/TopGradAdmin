import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TopgradserviceService } from '../../topgradservice.service';



@Component({
  selector: 'app-edit-sub-admin',
  templateUrl: './edit-sub-admin.component.html',
  styleUrls: ['./edit-sub-admin.component.scss']
})
export class EditSubAdminComponent implements OnInit {

  editSubAdminForm:FormGroup
  imageFile: string | ArrayBuffer;
  allData: any;
  status: any;
  image: any;



  constructor(
    private Service: TopgradserviceService,
    private fb: FormBuilder,
    private router:Router,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    ){ 
    this.editSubAdminForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      // status: ['', [Validators.required]],
      phone_no: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
     })
  }


  ngOnInit(): void {
    console.log("my edit form is >>>>>>",this.editSubAdminForm);
    
    this.detailSubAdminData()
  }






  detailSubAdminData() {
    var obj = {
      id: this.route.snapshot.paramMap.get('id')
    }
    console.log("object>>>>",obj);
    
    this.Service.detailSubAdmin(obj).subscribe((res: any) => {
      console.log("response of detail Sub admin >>>>>>>", res)
      this.allData=res.data
     this.imageFile=this.allData.image
     this.status=this.allData.status

      this.editSubAdminForm.patchValue({
        first_name:this.allData.first_name,
        last_name:this.allData.last_name,
        phone_no:this.allData.phone_no,
        email:this.allData.email,
      })
    })
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

  submitSubAdminForm(){
    var obj = {
      id: this.route.snapshot.paramMap.get('id'),
      type: "sub_admin",
      image: this.imageFile,
      first_name: this.editSubAdminForm.value.first_name,
      last_name: this.editSubAdminForm.value.last_name,
      email: this.editSubAdminForm.value.email,
      phone_no:this.editSubAdminForm.value.phone_no,
      status:this.editSubAdminForm.value.status,

    }

    this.Service.updateSubAdmin(obj).subscribe((res: any) => {
      console.log("response of Sub Admin data>>>>>>", res);
      this.router.navigate(["/subAdminManagement"])
      this._snackBar.open('Sub admin updated successfully','close',{
        duration: 2000
      })


    })
  }

}
