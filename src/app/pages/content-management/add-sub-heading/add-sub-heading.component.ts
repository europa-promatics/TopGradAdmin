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
  selector: 'app-add-sub-heading',
  templateUrl: './add-sub-heading.component.html',
  styleUrls: ['./add-sub-heading.component.scss']
})
export class AddSubHeadingComponent implements OnInit {

  terms_sub_headingform:FormGroup

  constructor(private route:ActivatedRoute,private Service:TopgradserviceService,private _formBuilder:FormBuilder,private _snackBar: MatSnackBar ) { 
    this.terms_sub_headingform = this._formBuilder.group({
      'title':['',[Validators.required]],
      'description':['',[Validators.required]]
  })
  }

  ngOnInit(): void {
  }

  addsubheading(){
    console.log("sdsfsfdsfdfdfds",this.terms_sub_headingform)
    if(this.terms_sub_headingform.invalid){
      this.terms_sub_headingform.markAllAsTouched(); 
    }
    else{
      var obj={
          type:this.route.snapshot.paramMap.get('type'),
          title:this.terms_sub_headingform.value.title,
          description:this.terms_sub_headingform.value.description,
          content_id:this.route.snapshot.paramMap.get('id')
        
      }
      this.Service.addtermsubheading(obj).subscribe(res=>{
        console.log("fgdgfdgfdfgdfgd",res);
        if(res.code==200){
          this._snackBar.open("Added Sub Heading Successfully","close",{
            duration: 2000
          });
        }
      },err => {
        console.log(err);
        this._snackBar.open("Some Error Occued","close",{
          duration: 2000})
        })
    }
 
  }

}
