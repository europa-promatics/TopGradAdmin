import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TopgradserviceService } from '../../../../topgradservice.service';

@Component({
  selector: 'app-edit-faq',
  templateUrl: './edit-faq.component.html',
  styleUrls: ['./edit-faq.component.scss']
})
export class EditFaqComponent implements OnInit {
  toastr: any;
  faq: any=[];
  inputTitle: any;
  edit: string;
  id: any;
  title: string;
  description: string;
  category_id: any;
  user: any;
  description1: any;
  title1: any=[];
  selectedValue: any;




  constructor(private _snackBar: MatSnackBar, private route:ActivatedRoute,private Service:TopgradserviceService, private fb:FormBuilder, private router: Router ) { 
    this.inputTitle=this.fb.group({
      title:['',Validators.required],
      description:['',Validators.required],
      category_id:['',Validators.required],
      })
  }
  ngOnInit(): void {
    this.faq_id()
    this.getFaqCategories()
    this.title=""
    this.description=""
    this.faq=""
    this.title1=""

  }

  getFaqCategories(){
    var data={
      user_type: 'employer'
    }
    console.log("categories=============",data)
    this.Service.faqCategories(data).subscribe(data => {
      console.log("fgdfgfgdfgdfgdfgdfgdfgdgf",data);
      this.faq=data.data
      console.log("My faq array==========>>", this.faq);
      console.log("formmmmmmmmmmmm",this.inputTitle);
      
 
    }, err => {
      console.log(err.status)
      if (err.status >= 404) {
        console.log('Some error occured')
      } else {
         this.toastr.error('Some error occured, please try again!!', 'Error')

      }
    })

  }


  faq_id(){
    var obj = {
      faq_id:this.route.snapshot.paramMap.get('id')
      }
    console.log("onnnn", obj)
    this.Service.faqDetail(obj).subscribe(data => {
          console.log("main data for users is ssssssssssssssssssss====", data)
          this.user=data.data
          this.inputTitle.patchValue({
            category_id:this.user.category_id.name,
            title: this.user.title,
            description: this.user.description
          });
         
          // this.ngOnInit()
          
        }, err => {
          console.log(err.status)
          if (err.status >= 404) {
            console.log('Some error occured')
          } else {
              this.toastr.error('Some error occured, please try again!!', 'Error')
            console.log('Internet Connection Error')
          }
        })
  }

edit_faq(id){  
    console.log("",id)
    this.id=id
    
  }
  openSnackBar(){
    this.id=this.id
  }

  addEditFaq(id){
   
    console.log("formmmmmmmmmmmm",this.inputTitle);
    if(this.inputTitle.invalid){
      this.inputTitle.markAllAsTouched()
    }
    else{
      var obj={
        faq_id:this.route.snapshot.paramMap.get('id'),
        category_id:this.inputTitle.controls.category_id.value,
        title:this.inputTitle.controls.title.value,
        description:this.inputTitle.controls.description.value,
        // faq:this.inputTitle.controls.faq.value,
      }
      console.log("AddingFaq=========>",obj);
      this.Service.addEditFaq(obj).subscribe(res=>{
        console.log("Response==========",res);
        this.Service.showMessage({ message: "Edit Successfully" })
        this.router.navigate(['/employersFaq'])
      })
    }
  }
 
   
  }
 




