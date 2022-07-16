import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { TopgradserviceService } from '../../../topgradservice.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  loginform: FormGroup
  uname: any;
  pwd: any;
  id: any;
  constructor(private Service: TopgradserviceService, private _snackBar: MatSnackBar, private _formBuilder: FormBuilder, private router: Router,
    private route: ActivatedRoute,) {

    this.loginform = this._formBuilder.group({
      'uname': ['', [Validators.required, Validators.email]],
      'pwd': ['', [Validators.required]]
    })
  }

  logincredentials() {
    //  console.log("hjgsdhsagdhjsagdhjsg");

    console.log("sdsfsfdsfdfdfds", this.loginform)
    var obj = {
      email: this.loginform.value.uname,
      password: this.loginform.value.pwd,

    }
    this.Service.login(obj).subscribe(res => {
      console.log("fgdgfdgfdfgdfgd", res);
      this.id = res.data._id
      localStorage.setItem("_id", res.data._id)
      localStorage.setItem("admin_data", res.data.type)
      localStorage.setItem("admin_email", res.data.email)
      localStorage.setItem("first_name", res.data.first_name)
      localStorage.setItem("last_name", res.data.last_name)
      localStorage.setItem("image", res.data.image)
      if (res.token) {
        console.log("kdjhcjdshcjdhkjdh");
        localStorage.setItem("token", res.token)

        if (res.data.type == 'sub_admin') {
          var obj = {
            id: this.id
          }
          this.Service.getAccessPrivilegeSubAdmin(obj).subscribe((res: any) => {
            console.log("response of detail Sub admin >>>>>>>", res);
            localStorage['allowedBars'] = JSON.stringify(res.data)
            this.router.navigate(['dashboard'])
            this._snackBar.open("User Logged In Successfully", "close", { duration: 2000 });
          })

        } else {
          this.router.navigate(['dashboard'])
          this._snackBar.open("User Logged In Successfully", "close", { duration: 2000 });
        }
      }




    }, err => {
      console.log("login error==============>>", err)
      if (err.error.errors.msg) {
        var ErrorMsg = err.error.errors.msg
      }
      console.log("login error message==============>>", err.error.errors.msg)
      if (err.status >= 400) {
        this._snackBar.open(ErrorMsg, "close", {
          duration: 2000
        });
      } else {
        this._snackBar.open("Some Error Occued", "close", {
          duration: 2000
        });
      }

    })
  }




}
