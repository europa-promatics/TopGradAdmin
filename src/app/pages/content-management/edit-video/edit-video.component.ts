import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TopgradserviceService } from '../../../topgradservice.service';
import { DomSanitizer } from '@angular/platform-browser';
import {Location} from '@angular/common';

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
  import: boolean = false;
  youtubeUrl: any;
  upload: boolean = false;

  constructor(private _location: Location,private sanitizer:DomSanitizer, private route:ActivatedRoute, private Service: TopgradserviceService, private _snackBar: MatSnackBar, private router: Router, private fb: FormBuilder) {
    this.editVideoform = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(200)]],
      // order: ['', [Validators.required, Validators.max(10), Validators.min(1)]],
      // type: ['', [Validators.required, Validators.maxLength(50)]],
      category: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required]],
      postedby: ['', [Validators.required, Validators.maxLength(50)]],
      // postdescription: ['', [Validators.required]],
      Image: ['',],
      importUrl: ['',],
      county:[''],
      Video: ['',],
      county1:[''],
      publication_date:[''],
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
          category:resp.data.category,
          order:resp.data.order,
          title:resp.data.article_title,
          type:resp.data.article_type,
          description:resp.data.article_description,
          postedby:resp.data.posted_by,
          postdescription:resp.data.posted_description,
          publication_date:resp.data.date
        })
      // }, 2000)
      console.log("my for,=============>",this.editVideoform);
      
      if(resp.data.article_type=="small_video_article"){
        this.type_article="small_video_article"
      }
      else if(resp.data.article_type=="large_video_article"){
        this.type_article="large_video_article"
        
        if(this.video?.url.includes("youtube")){
          this.editVideoform.patchValue({
            importUrl: this.video?.url
          })
        }
        else{
          
          this.editVideoform.patchValue({
            Video: this.video?.url
          })
        }
      }
      
    })
  }

  onImportUrl(){
    this.import = true;
     
  }


  importVideo() {
    
    console.log("import video youtube video value=======>>", this.import);
    this.youtubeUrl = this.editVideoform.controls.importUrl.value
    if(this.youtubeUrl.includes("youtube")){
     
      console.log(this.youtubeUrl.includes("youtube"));
    
      const videoId = this.getId(this.youtubeUrl);
      console.log("youtube video id======>>>",videoId);
      const vid = "https://www.youtube.com/embed/"+videoId
      this.editVideoform.patchValue({
        importUrl: vid,
      })
      
      if(this.editVideoform.controls['Video'].value){
        this.editVideoform.patchValue({
         Video : '',
        })
     }
    }
  }

  getId(url: any) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11)
    ? match[2]
    : null;
  }

  changevideo(event){
    console.log(event.target.value);
    this.type_article = event.target.value;
    console.log("type============>",this.type_article);
    
  }

  onVideoChange(e) {
    this.upload = true;
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
      if(this.editVideoform.controls['importUrl'].value){
         this.editVideoform.patchValue({
          importUrl : '',
         })
      }
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
          formdata.append("order",  this.editVideoform.controls['order'].value)
          formdata.append("category",  this.editVideoform.controls['category'].value)
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
            if(this.editVideoform.controls['Video'].value){
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
            if(this.editVideoform.controls['importUrl'].value){
              const medias:any= [
              {
                  for:"video",
                  url:this.editVideoform.controls['importUrl'].value
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
          }
          
        obj = formdata

      } else {
        this.editVideoform.markAllAsTouched()
        return
      }
    
      console.log("objjjjjjjj===========>",obj);
      
   
    this.Service.editArticleContent(obj).subscribe((resp) => {

      this.Service.showMessage({ message: "Submitted Successfully" })
                  this.router.navigate(['/career-article'])

    })
  }

  back(){
    this._location.back();
  }



}
