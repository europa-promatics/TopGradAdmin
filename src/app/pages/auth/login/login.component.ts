import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { TopgradserviceService } from '../../../topgradservice.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  loginform:FormGroup
  uname: any;
  pwd: any;
  constructor(private Service:TopgradserviceService,private _snackBar: MatSnackBar ,private _formBuilder:FormBuilder, private router: Router ) { 
    
    this.loginform = this._formBuilder.group({
      'uname':['',[Validators.required, Validators.email]],
      'pwd':['',[Validators.required]]
  })
  }

  logincredentials(){
    //  console.log("hjgsdhsagdhjsagdhjsg");
    
    console.log("sdsfsfdsfdfdfds",this.loginform)
    var obj={
      email:this.loginform.value.uname,
      password:this.loginform.value.pwd,
      
    }
    this.Service.login(obj).subscribe(res=>{
      console.log("fgdgfdgfdfgdfgd",res);
      localStorage.setItem("admin_email",res.data.email)
      localStorage.setItem("first_name",res.data.first_name)
      localStorage.setItem("last_name",res.data.last_name)
      localStorage.setItem("image",res.data.image)
      if(res.token){
        console.log("kdjhcjdshcjdhkjdh");
        localStorage.setItem("token", res.token)
        
        this.router.navigate(['dashboard'])
        this._snackBar.open("User Logged In Successfully","close",{
          duration: 2000
          });
      }
      
      
    }, err => {
      console.log(err)
      if (err.status >= 400) {
        this._snackBar.open("User Does Not Exist","close",{
          duration: 2000
          });
      } else {
      this._snackBar.open("Some Error Occued","close",{
        duration: 2000
        });
      }
      
      })
  }
 }
