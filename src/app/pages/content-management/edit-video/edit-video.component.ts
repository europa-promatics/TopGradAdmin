import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TopgradserviceService } from '../../../topgradservice.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.scss']
})
export class EditVideoComponent implements OnInit {
  main_image: any;
  video_image: any;
  video: any;
  selectedfile2: any;
  headingImageObj: any;

  constructor(private sanitizer:DomSanitizer, private route:ActivatedRoute, private Service: TopgradserviceService, private _snackBar: MatSnackBar, private router: Router, private fb: FormBuilder) {
    this.editVideoform = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(200)]],
      type: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(5000)]],
      postedby: ['', [Validators.required, Validators.maxLength(50)]],
      postdescription: ['', [Validators.required, Validators.maxLength(5000)]],
      Image: ['',],
      county:[''],
      Video: ['',],
      county1:['']
    });
   }

  type_article:any;
  HeadingImage1:any;
  HeadingImage2:any;
  editVideoform: FormGroup

  

  ngOnInit(): void {
    this.getcontent();
  }

  getcontent(){
    var obj={
      article_id:this.route.snapshot.paramMap.get('id')
    }

    this.Service.getArticleContent(obj).subscribe((resp) => {
      console.log("object============>",obj);
      this.video= resp.data.medias.find(x => x.for == 'video');
      // this.video.url = this.sanitizer.bypassSecurityTrustUrl(this.video.url)
      
      this.main_image= resp.data.medias.find(x => x.for == 'main');
      console.log("============>",this.main_image);
      this.HeadingImage2=this.main_image?.url
      console.log("============>",this.video);

      console.log("response============>",resp);
      // setTimeout(function(){
        this.editVideoform.patchValue({
          Image:this.main_image?.url,
          
          title:resp.data.article_title,
          type:resp.data.article_type,
          description:resp.data.article_description,
          postedby:resp.data.posted_by,
          postdescription:resp.data.posted_description
        })
      // }, 2000)
      console.log("my for,=============>",this.editVideoform);
      
      if(resp.data.article_type=="small_video_article"){
        this.type_article="small_video_article"
      }
      else if(resp.data.article_type=="large_video_article"){
        this.type_article="large_video_article"
        this.editVideoform.patchValue({
          Video: this.video?.url
        })
      }
      
    })
  }

  changevideo(event){
    console.log(event.target.value);
    this.type_article = event.target.value;
    console.log("type============>",this.type_article);
    
  }

  onVideoChange(e) {
    this.type_article="large_video_article";
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

        this.editVideoform.patchValue({
          Video: resp.file_name
        })
      })
      this.editVideoform.get('county1').clearValidators(); // 6. Clear All Validators
      this.editVideoform.get('county1').updateValueAndValidity();
      console.log("rightextension", this.editVideoform);
    }
    else {
      this.editVideoform.get('county1').setValidators([Validators.required]); // 5.Set Required Validator
      this.editVideoform.get('county1').updateValueAndValidity();

      console.log("wrongextension", this.editVideoform);
    }
  }


  setHeadingImage1(event) {
    console.log(event.target.files[0]);
   // this.type_article="small_article";
    const file = event.target.files[0];
    const fileType = file.type.split("/")[0];
    console.log(fileType);
    if (fileType == "image") {
      this.headingImageObj = event.target.files[0]
      const formData = new FormData();
      formData.append('image', this.headingImageObj);
      this.Service.uploadbenefitmedia(formData).subscribe((resp: any) => {

        console.log("image response ==>", resp);

        this.editVideoform.patchValue({
          Image: resp,
        })
      })
      
      let reader = new FileReader();
      reader.onload = (event: any) => {
        
        this.HeadingImage2= event.target.result;
      };
      reader.readAsDataURL(this.headingImageObj);
      this.editVideoform.get('county').clearValidators(); // 6. Clear All Validators
      this.editVideoform.get('county').updateValueAndValidity();
      console.log("rightextension", this.editVideoform);
    } else {
      this.editVideoform.get('county').setValidators([Validators.required]); // 5.Set Required Validator
      this.editVideoform.get('county').updateValueAndValidity();

      console.log("wrongextension",this.editVideoform);
    }
  }

  postcontent(){
    let obj: any
      if (this.editVideoform.valid) {
        console.log("hmara form", this.editVideoform);
        
        const formdata = new FormData()
          console.log("yippeeeeeeee", this.headingImageObj);
          formdata.append("article_id",  this.route.snapshot.paramMap.get('id'))
          formdata.append("article_type",  this.editVideoform.controls['type'].value)
          formdata.append("article_title",  this.editVideoform.controls['title'].value)
          formdata.append("article_description", this.editVideoform.controls['description'].value)
          formdata.append("posted_by", this.editVideoform.controls['postedby'].value)
          formdata.append("posted_description", this.editVideoform.controls['postdescription'].value)
          if(this.editVideoform.controls['type'].value=='small_video_article'){
             const medias:any= [
              {
                  "for":"main",
                  "url":this.editVideoform.controls['Image'].value
              }
          ]
          const newmedia= JSON.stringify(medias)
          console.log("newmedia==========>>>",newmedia);
          
          formdata.append("medias",JSON.stringify(medias))
          }

          if(this.editVideoform.controls['type'].value=='large_video_article'){
            const medias:any= [
             {
                 for:"video",
                 url:this.editVideoform.controls['Video'].value
             },
             {
              "for":"main",
              "url":this.editVideoform.controls['Image'].value
          }
         ]
         const newmedia= JSON.stringify(medias)
         console.log("newmedia==========>>>",newmedia);
         
         formdata.append("medias",JSON.stringify(medias))
         }
          
        obj = formdata

      } else {
        this.editVideoform.markAllAsTouched()
        return
      }
    
      console.log("objjjjjjjj===========>",obj);
      
   
    this.Service.editArticleContent(obj).subscribe((resp) => {

      this.Service.showMessage({ message: "Submitted Successfully" })
    })
  }



}
