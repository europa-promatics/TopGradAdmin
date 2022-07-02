import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute,Router } from '@angular/router';
import { TopgradserviceService } from '../../../topgradservice.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  temp: String = 'zz';
  resetpwdform:FormGroup
  pass: String = 'password' 
  confirmPass: String = 'password'
  constructor(private route: ActivatedRoute,private Service:TopgradserviceService,private _snackBar: MatSnackBar ,private _formBuilder:FormBuilder, private router: Router) 
  { 
    this.resetpwdform= this._formBuilder.group({
      password:['',[Validators.required,Validators.pattern(/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)]],
      copassword:['',[Validators.required]]
  }, {
    validator: this.checkPasswords,
  })
  }

  ngOnInit(): void {
  }

  checkPasswords(group: FormGroup) { 
	  let pass = group.controls.password.value;
	  let confirmPass = group.controls.copassword.value;
    var  flag = false
    let returnable:any = {
      pwdNotSame:null,
    }
    if(pass != confirmPass){
      returnable.pwdNotSame = true
      flag=true
    }
    return flag ? returnable : null;
	}
  // update(){
  //   if(this.resetpwdform.invalid){
  //     this.resetpwdform.markAllAsTouched();
  //     return
  //   } 
  //   let token = this.route.snapshot.params["token"]
  //   let verification = this.route.snapshot.params["verification"]
  //   var obj = {
  //     password: this.resetpwdform.value['copassword'],
  //     verification: verification,
  //     token:token
  //   }
  //   console.log("fsfdsfdfdfdfdfdf",obj);
  // }

  sendlogin(){
    console.log("gfgfgfgfgfgfgfgfgf",this.resetpwdform);
    
    let token = this.route.snapshot.params["token"]
      let verification = this.route.snapshot.params["verification"]
    if(this.resetpwdform.invalid){
      this.resetpwdform.markAllAsTouched();
      return;
    } 
    console.log("sdsfsfdsfdfdfds",this.resetpwdform)
    var obj={
      password:this.resetpwdform.value.password,
      verification: verification,
      token:token
    }
    console.log(obj);
    this.Service.resetpassword(obj).subscribe(data => {
      console.log("fdfdfdfdsfdsfdsfdsfdsfdsf",data);
      this.Service.showMessage({
        message:"Password Reset Successfully"
      }) 
      this.router.navigate(["login"])
      
    }, err => {
      console.log(err);
      
      this.Service.showMessage({
        message: err.error.errors ? err.error.errors.msg : 'Something went Wrong'
      })
  })
  }

}
