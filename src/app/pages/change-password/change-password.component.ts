import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TopgradserviceService } from '../../topgradservice.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changepwdform: FormGroup;
  current_pwd: any;
  new_pwd: any;
  confirm_pwd: any;

  constructor(private sanitizer: DomSanitizer, private Service: TopgradserviceService, private _snackBar: MatSnackBar, private _formBuilder: FormBuilder, private router: Router) 
  {
    this.changepwdform = this._formBuilder.group({
      'current_pwd': ['', [Validators.required]],
      'new_pwd': ['', [Validators.required]],
      'confirm_pwd': ['', [Validators.required]]
      
    }, {
      validator: this.checkPassword,
      })
   }

  ngOnInit(): void {
    console.log(this.changepwdform);
    
  }

  checkPassword(group: FormGroup) {
    let pass = group.controls.new_pwd.value;
    let confirm_password = group.controls.confirm_pwd.value;
    var flag = false
    let returnable:any = {
    pwdNotSame: null
    }
    if(pass != confirm_password){
    returnable.pwdNotSame = true
    flag=true
    }
    return flag ? returnable : null;
    }

  change(){
     console.log(this.changepwdform);
     var obj = {
      old_password: this.changepwdform.value.current_pwd,
      new_password: this.changepwdform.value.new_pwd
      }
      console.log("onnnn", obj)
      this.Service.changepwd(obj).subscribe(data => {
      console.log("main data for users is ====", data)
      if(data.code=200){
        this._snackBar.open("Password changed successfully","close",{
          duration: 2000
          });
          this.changepwdform.reset();
      }
      }, err => {
        console.log(err)
        if (err.status = 409) {
          this._snackBar.open("Current password is Incorrect","close",{
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
