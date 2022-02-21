import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { TopgradserviceService } from '../../topgradservice.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  profileform:FormGroup
  first_name: any;
  last_name: any;
  email: any;
  image:any;
  selectedfile: File;
  imageSrc: any;

  constructor(private Service:TopgradserviceService,private _snackBar: MatSnackBar ,private _formBuilder:FormBuilder, private router: Router) 
  { 
    this.profileform = this._formBuilder.group({
      'first_name':['',[Validators.required]],
      'last_name':['',[Validators.required]],
      'email':['',[Validators.required]]
    })
    console.log(this.profileform);
  }

  ngOnInit(): void {
   this.admindetails();
   this.first_name = localStorage.getItem('first_name');
   console.log("gyuyutyty",this.first_name);
   
  }
  
  onSelect(e){
    console.log(e);
    console.log(e.target.files[0].name);
    this.selectedfile= e.target.files[0];
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
  }
  }

  admindetails(){
   this.first_name = localStorage.getItem('first_name');
   this.last_name= localStorage.getItem('last_name');
   this.email= localStorage.getItem('admin_email');
   this.image= localStorage.getItem('image');
  }

  editprofile(){

    const formData = new FormData();
    formData.append('image', this.selectedfile);
    formData.append('first_name', this.profileform.value.first_name);
    formData.append('last_name', this.profileform.value.last_name);
    formData.append('email', this.profileform.value.email);
    // var obj={
    //   first_name:this.profileform.value.first_name,
    //   last_name:this.profileform.value.last_name,
    //   email:this.profileform.value.email
    // }
    

    this.Service.profile(formData).subscribe(res=>{
      console.log("fgdgfdgfdfgdfgd",res);
      // localStorage.setItem("admin_details",JSON.stringify(res.obj.email))
      if(res.code==200){
        this.Service.showMessage({message: "Profile Updated Succsessfully"})
        localStorage.setItem('first_name',res.data.first_name);
        localStorage.setItem('last_name',res.data.last_name);
        localStorage.setItem('admin_email',res.data.email);
        localStorage.setItem('image',res.data.image);

        }
        }, err => {
          console.log("hjjhgjhghjgjhghjgjhghjg",err);
          
        this.Service.showMessage({
        message: err.error.errors.msg ? err.error.errors.msg : 'Something went Wrong'
        })
          
      }
    );
  }

}
