import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TopgradserviceService } from '../../topgradservice.service';

@Component({
  selector: 'app-homepage-management',
  templateUrl: './homepage-management.component.html',
  styleUrls: ['./homepage-management.component.scss']
})
export class HomepageManagementComponent implements OnInit {
  headerform:FormGroup
  storyform:FormGroup
  curatedform: FormGroup;
  successform: FormGroup;
  employerform: FormGroup;
  graduateform: FormGroup;
  title: any;
  image: any;
  video: any;
  name: any;
  designation: any;
  heading: any;
  selectedfile: File;
  selectedfile1: File;
  selectedfile2: File;
  selectedfile3: File;
  files=[]
  file: File;
  filename: any;
  title1: any;
  description: any;
  video1: any;
  

  constructor(private Service:TopgradserviceService,private _snackBar: MatSnackBar ,private _formBuilder:FormBuilder, private router: Router ) 
  { 
    this.headerform = this._formBuilder.group({
      'title':['',[Validators.required]],
      'image':['',[Validators.required]]
    })

    this.successform = this._formBuilder.group({
      'heading':['',[Validators.required]],
      'video':['',[Validators.required]],
      'sliderdesc1':['',[Validators.required]],
      'sliderdesc2':['',[Validators.required]],
      'sliderdesc3':['',[Validators.required]]
    })

    this.curatedform = this._formBuilder.group({
      'heading':['',[Validators.required]]
    })

    this.storyform = this._formBuilder.group({
      'title1':['',[Validators.required]],
      'description':['',[Validators.required]],
      'name':['',[Validators.required]],
      'designation':['',[Validators.required]],
      'video':['',[Validators.required]]
    })

    this.employerform = this._formBuilder.group({
      'heading_tab1':['',[Validators.required]],
      'description_tab1':['',[Validators.required]],
      'image_tab1':['',[Validators.required]],
      'heading_tab2':['',[Validators.required]],
      'description_tab2':['',[Validators.required]],
      'image_tab2':['',[Validators.required]],
      'heading_tab3':['',[Validators.required]],
      'description_tab3':['',[Validators.required]],
      'image_tab3':['',[Validators.required]]
    })

    this.graduateform = this._formBuilder.group({
      'grad_heading_tab1':['',[Validators.required]],
      'grad_description_tab1':['',[Validators.required]],
      'grad_image_tab1':['',[Validators.required]],
      'grad_heading_tab2':['',[Validators.required]],
      'grad_description_tab2':['',[Validators.required]],
      'grad_image_tab2':['',[Validators.required]],
      'grad_heading_tab3':['',[Validators.required]],
      'grad_description_tab3':['',[Validators.required]],
      'grad_image_tab3':['',[Validators.required]]
    })

  }

  ngOnInit(): void {
    console.log(this.employerform)
    this.homepagecontent();
   
    // console.log("sedhfnuesdhfuehnfrgersnddgin",this.headerform.controls.title.value);
    

    
  }
  

  header(){
    if(this.headerform.invalid){
      this.headerform.markAllAsTouched()
    }
    console.log("sdsfsfdsfdfdfds",this.headerform)
      var obj={
        home_header_section: {
          title:this.headerform.value.title,
          image: this.filename
        }
    }
    console.log(obj);
    this.Service.headersection(obj).subscribe(res=>{
      console.log("fgdgfdgfdfgdfgd",res);
      })
  }

  story(){
    if(this.storyform.invalid){
      this.storyform.markAllAsTouched()
    }
    console.log("stroryform",this.storyform)
    const formData = new FormData();
    formData.append('file', this.selectedfile);
    formData.append('title', this.storyform.value.title);
    formData.append('description', this.storyform.value.description,);
    formData.append('posted_by', this.storyform.value.name);
    formData.append('position', this.storyform.value.designation);
    //   var obj={
    //     title:this.storyform.value.title,
    //     description:this.storyform.value.description,
    //     name:this.storyform.value.name,
    //     designation:this.storyform.value.designation,
    //     video: this.selectedfile,
    // }
    console.log(formData);
  }


  success(){
    if(this.successform.invalid){
      this.successform.markAllAsTouched()
    }
    console.log("successform",this.successform)
    const formData = new FormData();
    formData.append('file', this.selectedfile);
    formData.append('heading', this.storyform.value.heading);
    formData.append('description1', this.successform.value.sliderdesc1);
    formData.append('description2', this.successform.value.sliderdesc2);
    formData.append('description3', this.successform.value.sliderdesc3);
    //   var obj={
    //     heading:this.successform.value.heading,
    //     video: this.selectedfile,
    //     sliderdesc1:this.successform.value.sliderdesc1,
    //     sliderdesc2:this.successform.value.sliderdesc2,
    //     sliderdesc3:this.successform.value.sliderdesc3,

    // }
    // console.log(obj);
  }

  employer(){
    if(this.employerform.invalid){
      this.employerform.markAllAsTouched()
    }
  }

  curated(){
    if(this.curatedform.invalid){
      this.curatedform.markAllAsTouched()
    }
    console.log("curatedform",this.curatedform)
      var obj={
        heading:this.curatedform.value.heading,
    }
    console.log(obj);
  }
  
  onSelect3(e){
    console.log(e);
    console.log(e.target.files[0].name);
    this.selectedfile3= e.target.files[0].name;
  }

  onSelect2(e){
    console.log(e);
    console.log(e.target.files[0].name);
    this.selectedfile2= e.target.files[0].name;
  }


  onSelect1(e){
    console.log(e);
    console.log(e.target.files[0].name);
    this.file=e.target.files[0]
    const formData = new FormData();
    formData.append('media',this.file);
    this.Service.uploadmedia1(formData).subscribe((resp : any) => {
      this.filename = resp.file_name
      console.log(resp);
      
    })
    // this.selectedfile1= e.target.files[0].name;
    // this.Service.uploadmedia1(this.selectedfile1).subscribe(res=>{
    //   console.log("fgdgfdgfdfgdfgd",res);
    // })
  }


  onSelect(e){
    console.log(e);
    this.files.push(e.addedFiles);
    console.log(this.files);
  }

  homepagecontent(){
    this.Service.homecontent().subscribe(data => {
      console.log("home page content is ====", data)
      this.image=data.data.home_header_section.image
      console.log("^^^^^^^^^^^^^^^^",this.image);
      this.headerform.patchValue({
        title: data.data.home_header_section.title,
      })
      console.log("fdgcghchgcvhjgcvhjvhjvjhmbvnmbmnbjms",this.headerform);
      
      
      this.video1=data.data.our_story_section.video
      console.log("^^^^^^^^^^^^^^^^",this.video1);
      this.storyform.patchValue({
        title1: data.data.our_story_section.title,
        description: data.data.our_story_section.description,
        name: data.data.our_story_section.posted_by,
        designation: data.data.our_story_section.position,
      })
      console.log("fdgcghchgcvhjgcvhjvhjvjhmbvnmbmnbjms",this.storyform);


      this.curatedform.patchValue({
        heading: data.data.section_3.heading,
      })
      console.log("fdgcghchgcvhjgcvhjvhjvjhmbvnmbmnbjms",this.storyform);

      this.employerform.patchValue({
        heading_tab1: data.data.section_4.tab_1[0].heading,
        description_tab1: data.data.section_4.tab_1[0].description,
        heading_tab2:  data.data.section_4.tab_1[1].heading,
        description_tab2: data.data.section_4.tab_1[1].description,
        heading_tab3:  data.data.section_4.tab_1[2].heading,
        description_tab3: data.data.section_4.tab_1[2].description
      })
      console.log("fdgcghchgcvhjgcvhjvhjvjhmbvnmbmnbjms",this.employerform);
 
      this.graduateform.patchValue({
        grad_heading_tab1: data.data.section_4.tab_2[0].heading,
        grad_description_tab1: data.data.section_4.tab_2[0].description,
        grad_heading_tab2:  data.data.section_4.tab_2[1].heading,
        grad_description_tab2: data.data.section_4.tab_2[1].description,
        grad_heading_tab3:  data.data.section_4.tab_2[2].heading,
        grad_description_tab3: data.data.section_4.tab_2[2].description 
      })
      console.log("fdg==========================",this.graduateform);

    })
   
  }


}
