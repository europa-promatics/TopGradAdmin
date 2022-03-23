import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TopgradserviceService } from '../../../topgradservice.service';
// declare var $:any
import * as $ from "jquery";

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  
  headingImageObj: any;

  constructor(private route:ActivatedRoute, private Service: TopgradserviceService, private _snackBar: MatSnackBar, private router: Router, private fb: FormBuilder) { }
  type_article:any;
  HeadingImage1:any;
  HeadingImage2:any;
  
  editArticleform = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(200)]],
    type: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(5000)]],
    postedby: ['', [Validators.required, Validators.maxLength(50)]],
    postdescription: ['', [Validators.required, Validators.maxLength(5000)]],
    Image: ['',],
    county:['']
  });
  article_description:any;



  ngOnInit(): void {
    this.getcontent();
  }



  article(event){
    console.log(event.target.value);
    this.type_article = event.target.value;
    console.log("type============>",this.type_article);
    
  }

  

  
   
  getcontent(){
    var obj={
      article_id:this.route.snapshot.paramMap.get('id')
    }

    this.Service.getArticleContent(obj).subscribe((resp) => {
      console.log("object============>",obj);
      
      console.log("response============>",resp);
      this.editArticleform.patchValue({
        Image:resp.data.medias[0].url,
        title:resp.data.article_title,
        type:resp.data.article_type,
        description:resp.data.article_description,
        postedby:resp.data.posted_by,
        postdescription:resp.data.posted_description
      })
      
      if(resp.data.article_type=="small_article"){
        this.type_article="small_article",
        this.HeadingImage2=resp.data.medias[0].url
      }
      else if(resp.data.article_type=="large_article"){
        this.type_article="large_article",
        this.HeadingImage1=resp.data.medias[0].url
      }
      
    })
  }

  setHeadingImage(event) {
    console.log(event.target.files[0]);
    this.type_article="large_article";
    const file = event.target.files[0];
    const fileType = file.type.split("/")[0];
    console.log(fileType);
    if (fileType == "image") {
      this.headingImageObj = event.target.files[0]
      const formData = new FormData();
      formData.append('image', this.headingImageObj);
      this.Service.uploadbenefitmedia(formData).subscribe((resp: any) => {

        console.log("image response ==>", resp);

        this.editArticleform.patchValue({
          Image: resp,
        })
      })
      let reader = new FileReader();
      reader.onload = (event: any) => {
        
        this.HeadingImage1= event.target.result;
      };
      reader.readAsDataURL(this.headingImageObj);
      this.editArticleform.get('county').clearValidators(); // 6. Clear All Validators
      this.editArticleform.get('county').updateValueAndValidity();
      console.log("rightextension", this.editArticleform);
    } else {
      this.editArticleform.get('county').setValidators([Validators.required]); // 5.Set Required Validator
      this.editArticleform.get('county').updateValueAndValidity();

      console.log("wrongextension",this.editArticleform);
    }
  }

  setHeadingImage1(event) {
    console.log(event.target.files[0]);
    this.type_article="small_article";
    const file = event.target.files[0];
    const fileType = file.type.split("/")[0];
    console.log(fileType);
    if (fileType == "image") {
      this.headingImageObj = event.target.files[0]
      const formData = new FormData();
      formData.append('image', this.headingImageObj);
      this.Service.uploadbenefitmedia(formData).subscribe((resp: any) => {

        console.log("image response ==>", resp);

        this.editArticleform.patchValue({
          Image: resp,
        })
      })
      
      let reader = new FileReader();
      reader.onload = (event: any) => {
        
        this.HeadingImage2= event.target.result;
      };
      reader.readAsDataURL(this.headingImageObj);
      this.editArticleform.get('county').clearValidators(); // 6. Clear All Validators
      this.editArticleform.get('county').updateValueAndValidity();
      console.log("rightextension", this.editArticleform);
    } else {
      this.editArticleform.get('county').setValidators([Validators.required]); // 5.Set Required Validator
      this.editArticleform.get('county').updateValueAndValidity();

      console.log("wrongextension",this.editArticleform);
    }
  }

  postcontent(){
    let obj: any
      if (this.editArticleform.valid) {
        console.log("hmara form", this.editArticleform);
      
        
        const formdata = new FormData()
          console.log("yippeeeeeeee", this.headingImageObj);
          formdata.append("article_id",  this.route.snapshot.paramMap.get('id'))
          formdata.append("article_type",  this.editArticleform.controls['type'].value)
          formdata.append("article_title",  this.editArticleform.controls['title'].value)
          formdata.append("article_description", this.editArticleform.controls['description'].value)
          formdata.append("posted_by", this.editArticleform.controls['postedby'].value)
          formdata.append("posted_description", this.editArticleform.controls['postdescription'].value)
          if(this.editArticleform.controls['type'].value=='small_article'){
             const medias:any= [
              {
                  "for":"main",
                  "url":this.editArticleform.controls['Image'].value
              }
          ]
          const newmedia= JSON.stringify(medias)
          console.log("newmedia==========>>>",newmedia);
          
          formdata.append("medias",JSON.stringify(medias))
          }

          if(this.editArticleform.controls['type'].value=='large_article'){
            const medias:any= [
             {
                 for:"article_image",
                 url:this.editArticleform.controls['Image'].value
             }
         ]
         const newmedia= JSON.stringify(medias)
         console.log("newmedia==========>>>",newmedia);
         
         formdata.append("medias",JSON.stringify(medias))
         }
          
        obj = formdata

      } else {
        this.editArticleform.markAllAsTouched()
        return
      }
    
      console.log("objjjjjjjj===========>",obj);
      
   
    this.Service.editArticleContent(obj).subscribe((resp) => {

      this.Service.showMessage({ message: "Submitted Successfully" })
    })
  }

}
