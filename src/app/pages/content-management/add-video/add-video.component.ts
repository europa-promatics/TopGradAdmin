import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TopgradserviceService } from '../../../topgradservice.service';
import { DomSanitizer } from '@angular/platform-browser';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {
  type_article: any;
  headingImageObj: any;
  HeadingImage1: any;
  selectedfile2: any;

  constructor(private _location: Location,private sanitizer: DomSanitizer,private Service: TopgradserviceService, private _snackBar: MatSnackBar, private router: Router, private fb: FormBuilder) { }

  addVideoform = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(200)]],
    type: ['', [Validators.required, Validators.maxLength(50)]],
    category: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(5000)]],
    postedby: ['', [Validators.required, Validators.maxLength(50)]],
    postdescription: ['', [Validators.required, Validators.maxLength(5000)]],
    Image: ['',],
    video:[''],
    is_visible: [''],
    county:[''],
    county1:['']
  });

  ngOnInit(): void {
    this.type_article= " ";
  }

  video(event){
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
      const formData = new FormData();
      formData.append('image', this.headingImageObj);
      this.Service.uploadbenefitmedia(formData).subscribe((resp: any) => {

        console.log("image response ==>", resp);

        this.addVideoform.patchValue({
          Image: resp,
        })
      })
      let reader = new FileReader();
      reader.onload = (event: any) => {
        
        this.HeadingImage1= event.target.result;
      };
      reader.readAsDataURL(this.headingImageObj);
      this.addVideoform.get('county').clearValidators(); // 6. Clear All Validators
      this.addVideoform.get('county').updateValueAndValidity();
      console.log("rightextension", this.addVideoform);
    } else {
      this.addVideoform.get('county').setValidators([Validators.required]); // 5.Set Required Validator
      this.addVideoform.get('county').updateValueAndValidity();

      console.log("wrongextension",this.addVideoform);
    }
  }

  onVideoChange(e) {
    console.log(e);
    console.log(e.target.files[0].name);
    const file = e.target.files[0];
    const fileType = file.type.split("/")[0];
    console.log("videotype", fileType);
    if (fileType == "video") {
      this.selectedfile2 = e.target.files[0];
      const formData = new FormData();
      formData.append('media', this.selectedfile2);
      this.Service.uploadmedia1(formData).subscribe((resp: any) => {

        console.log("video response ==>", resp);

        this.addVideoform.patchValue({
          video: this.sanitizer.bypassSecurityTrustResourceUrl(resp.file_name)
        })
      })
      this.addVideoform.get('county1').clearValidators(); // 6. Clear All Validators
      this.addVideoform.get('county1').updateValueAndValidity();
      console.log("rightextension", this.addVideoform);
    }
    else {
      this.addVideoform.get('county1').setValidators([Validators.required]); // 5.Set Required Validator
      this.addVideoform.get('county1').updateValueAndValidity();

      console.log("wrongextension", this.addVideoform);
    }
  }

  postcontent(){
    let obj: any
      if (this.addVideoform.valid) {
        console.log("hmara form", this.addVideoform);
        
        const formdata = new FormData()
          console.log("yippeeeeeeee", this.headingImageObj);
          formdata.append("article_type",  this.addVideoform.controls['type'].value)
          formdata.append("category",  this.addVideoform.controls['category'].value)
          formdata.append("article_title",  this.addVideoform.controls['title'].value)
          formdata.append("article_description", this.addVideoform.controls['description'].value)
          formdata.append("posted_by", this.addVideoform.controls['postedby'].value)
          formdata.append("posted_description", this.addVideoform.controls['postdescription'].value)
          if(this.addVideoform.controls['type'].value=='small_video_article'){
             const medias:any= [
              {
                  "for":"main",
                  "url":this.addVideoform.controls['Image'].value
              }
          ]
          const newmedia= JSON.stringify(medias)
          console.log("newmedia==========>>>",newmedia);
          
          formdata.append("medias",JSON.stringify(medias))
          }

          if(this.addVideoform.controls['type'].value=='large_video_article'){
            const medias:any= [
             {
                 for:"main",
                 url:this.addVideoform.controls['Image'].value
             },
             {
              for:"video",
              url:this.addVideoform.controls['video'].value.changingThisBreaksApplicationSecurity
             }
            ]
            const newmedia= JSON.stringify(medias)
            console.log("newmedia==========>>>",newmedia);
            
            formdata.append("medias",JSON.stringify(medias))
          }
          
        obj = formdata

      } else {
        this.addVideoform.markAllAsTouched()
        return
      }
    
      console.log("objjjjjjjj===========>",obj);
      
   
    this.Service.addArticleContent(obj).subscribe((resp) => {

      this.Service.showMessage({ message: "Submitted Successfully" })
    })
  }

  back(){
    this._location.back();
  }

}
