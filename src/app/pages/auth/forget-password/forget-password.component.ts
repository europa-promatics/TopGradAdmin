import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { TopgradserviceService } from '../../../topgradservice.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgotpwdform:FormGroup
  email: any;
  constructor(private Service:TopgradserviceService,private _snackBar: MatSnackBar ,private _formBuilder:FormBuilder, private router: Router ) { 
    
    this.forgotpwdform= this._formBuilder.group({
      email:['',[Validators.required, Validators.email]],
  })
}

  

  ngOnInit(): void {
  }
  
  sendemail(){
    console.log("sdsfsfdsfdfdfds",this.forgotpwdform)
    var obj={
      email:this.forgotpwdform.value.email,
    }
    this.Service.sendresetmail(obj).subscribe(res=>{
      console.log("fgdgfdgfdfgdfgd",res);
      // localStorage.setItem("admin_details",JSON.stringify(res.obj.email))
      if(res.code==200){
        this.Service.showMessage({message: "Email Sent Succsessfully"})
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
 

    
