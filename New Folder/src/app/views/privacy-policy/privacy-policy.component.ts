import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TopgradserviceService } from '../../topgradservice.service';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  privacyform:FormGroup
  title: any;
  description: any;
  constructor(private Service:TopgradserviceService,private _formBuilder:FormBuilder) { 
    
    this.privacyform = this._formBuilder.group({
      'title':[null,Validators.compose([Validators.required])],
      'description':[null,Validators.compose([Validators.required])],
  })
  }
  ngOnInit(): void {

  }
  updatecms(){
    console.log("hjgsdhsagdhjsagdhjsg");
    
    console.log("sdsfsfdsfdfdfds",this.privacyform)
    var obj={
      title:this.privacyform.value.title,
      description:this.privacyform.value.description,
      
    }
    // this.Service.cms(obj).subscribe(res=>{
    //   console.log("fgdgfdgfdfgdfgd",res);
      
    // })
  }
}
