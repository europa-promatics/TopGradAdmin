import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TopgradserviceService } from '../../../topgradservice.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
  HeadingImage1: any;
  headingImageObj: any;
  HeadingImage2: any;
  type_article:any= '';


  constructor(private Service: TopgradserviceService, private _snackBar: MatSnackBar, private router: Router, private fb: FormBuilder) { }
  
  addArticleform = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(200)]],
    type: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(5000)]],
    postedby: ['', [Validators.required, Validators.maxLength(50)]],
    postdescription: ['', [Validators.required, Validators.maxLength(5000)]],
    Image: ['',],
    is_visible: [''],
    county:['']
  });


  ngOnInit(): void {
    this.type_article= " ";
  }

  article(event){
    console.log(event.target.value);
    this.type_article = event.target.value;
    console.log("type============>",this.type_article);
    
  }

  setHeadingImage(event) {
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    const fileType = file.type.split("/")[0];
    console.log(fileType);
    if (fileType == "image") {
      this.headingImageObj = event.target.files[0]
      this.addArticleform.patchValue({
        Image: this.headingImageObj,
      })
      let reader = new FileReader();
      reader.onload = (event: any) => {
        
        this.HeadingImage1= event.target.result;
      };
      reader.readAsDataURL(this.headingImageObj);
      this.addArticleform.get('county').clearValidators(); // 6. Clear All Validators
      this.addArticleform.get('county').updateValueAndValidity();
      console.log("rightextension", this.addArticleform);
    } else {
      this.addArticleform.get('county').setValidators([Validators.required]); // 5.Set Required Validator
      this.addArticleform.get('county').updateValueAndValidity();

      console.log("wrongextension",this.addArticleform);
    }
  }

  setHeadingImage1(event) {
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    const fileType = file.type.split("/")[0];
    console.log(fileType);
    if (fileType == "image") {
      this.headingImageObj = event.target.files[0]
      this.addArticleform.patchValue({
        Image: this.headingImageObj,
      })
      let reader = new FileReader();
      reader.onload = (event: any) => {
        
        this.HeadingImage2= event.target.result;
      };
      reader.readAsDataURL(this.headingImageObj);
      this.addArticleform.get('county').clearValidators(); // 6. Clear All Validators
      this.addArticleform.get('county').updateValueAndValidity();
      console.log("rightextension", this.addArticleform);
    } else {
      this.addArticleform.get('county').setValidators([Validators.required]); // 5.Set Required Validator
      this.addArticleform.get('county').updateValueAndValidity();

      console.log("wrongextension",this.addArticleform);
    }
  }


  postcontent(){
    let obj: any
      if (this.addArticleform.valid) {
        const formdata = new FormData()
          console.log("yippeeeeeeee", this.headingImageObj);
          formdata.append("article_type",  JSON.stringify(this.addArticleform.controls['type'].value))
          formdata.append("article_title",  JSON.stringify(this.addArticleform.controls['title'].value))
          formdata.append("article_description",  JSON.stringify(this.addArticleform.controls['description'].value))
          formdata.append("posted_by",  JSON.stringify(this.addArticleform.controls['postedby'].value))
          formdata.append("posted_description",  JSON.stringify(this.addArticleform.controls['postdescription'].value))
          if(this.addArticleform.controls['type'].value=='small_article'){
             const medias= [
              {
                  "for":"main",
                  "url":"https://www.google.com/search?channel=fs&client=ubuntu&q=world+wide"
              }
          ]

          formdata.append("medias", JSON.stringify(medias))
          }

          if(this.addArticleform.controls['type'].value=='large_article'){
            const medias= [
             {
                 "for":"article_image",
                 "url":"https://www.google.com/search?channel=fs&client=ubuntu&q=world+wide"
             }
         ]

         formdata.append("medias", JSON.stringify(medias))
         }
          
        obj = formdata

      } else {
        this.addArticleform.markAllAsTouched()
        return
      }
    
      console.log("objjjjjjjj===========>",obj);
      
   
    // this.Service.addArticleContent(obj).subscribe((resp) => {

    //   this.Service.showMessage({ message: "Submitted Successfully" })
    // })
  }

}
