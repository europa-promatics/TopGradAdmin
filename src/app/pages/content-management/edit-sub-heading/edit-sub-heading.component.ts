import { Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {SelectionModel} from '@angular/cdk/collections';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TopgradserviceService } from '../../../topgradservice.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-sub-heading',
  templateUrl: './edit-sub-heading.component.html',
  styleUrls: ['./edit-sub-heading.component.scss']
})
export class EditSubHeadingComponent implements OnInit {

  editsubheadingform:FormGroup

  constructor(private route:ActivatedRoute,private Service:TopgradserviceService,private _formBuilder:FormBuilder,private _snackBar: MatSnackBar) { 
    this.editsubheadingform = this._formBuilder.group({
      'title':['',[Validators.required]],
      'description':['',[Validators.required]]
  })
  }

  ngOnInit(): void {
    this.getsubheading();
  }

  getsubheading(){
   
    var obj={
      content_id:this.route.snapshot.paramMap.get('content_id'),
      sub_heading_id:this.route.snapshot.paramMap.get('id')
    }
    console.log("getsubheading   obj",obj);
    this.Service.getsubheading(obj).subscribe(res=>{
      console.log("response",res)
      this.editsubheadingform.patchValue({
        title: res.data[0].sub_heading[0].title,
        description: res.data[0].sub_heading[0].description
      })
     
    });
  }

  editsubheading(){
    console.log("sdsfsfdsfdfdfds",this.editsubheadingform)
    if(this.editsubheadingform.invalid){
      this.editsubheadingform.markAllAsTouched(); 
    }
    else{
      var obj={
        content_id:this.route.snapshot.paramMap.get('content_id'),
        sub_heading_id:this.route.snapshot.paramMap.get('id'),
        sub_heading_title:this.editsubheadingform.value.title,
        sub_heading_description:this.editsubheadingform.value.description
      }
      this.Service.posttermheading(obj).subscribe(res=>{
        console.log("fgdgfdgfdfgdfgd",res);
        if(res.code==200){
          this._snackBar.open("Sub Heading Updated Successfully","close",{
            duration: 2000
          });
        }
      },err => {
        console.log(err);
        this._snackBar.open("Some Error Occued","close",{
          duration: 2000})
        });
    }
  }

}
