import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TopgradserviceService } from '../../topgradservice.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-homepage-management',
  templateUrl: './homepage-management.component.html',
  styleUrls: ['./homepage-management.component.scss']
})
export class HomepageManagementComponent implements OnInit {
  headerform: FormGroup
  storyform: FormGroup
  curatedform: FormGroup;
  successform: FormGroup;
  employerform: FormGroup;
  graduateform: FormGroup;
  newRegister: FormGroup;
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
  files = []
  file: File;
  filename: any;
  title1: any;
  description: any;
  video1: any;


  constructor(private sanitizer: DomSanitizer, private Service: TopgradserviceService, private _snackBar: MatSnackBar, private _formBuilder: FormBuilder, private router: Router) {
    this.headerform = this._formBuilder.group({
      'title': ['', [Validators.required]],
      'image': ['', [Validators.required]],
      'is_visible': ['']
    })

   

    this.curatedform = this._formBuilder.group({
      'heading': ['', [Validators.required]]
    })

    this.storyform = this._formBuilder.group({
      'title1': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'name': ['', [Validators.required]],
      'designation': ['', [Validators.required]],
      'video': ['', [Validators.required]],
      'is_visible': ['']
    })
    this.successform = this._formBuilder.group({
      'heading': ['', [Validators.required]],
      'video': ['', [Validators.required]],
      'discriptionArray': this._formBuilder.array([])
    })

    this.employerform = this._formBuilder.group({
      'employerArray': this._formBuilder.array([])
    })

    this.graduateform = this._formBuilder.group({
      'graduateArray': this._formBuilder.array([])
    })

    this.newRegister = this._formBuilder.group({
      'text': ['', [Validators.required]],
      'heading': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'image': ['', [Validators.required]],
    })

  }

  ngOnInit(): void {

    this.homepagecontent();

    // console.log("sedhfnuesdhfuehnfrgersnddgin",this.headerform.controls.title.value);

  }

  get employerArray(): FormArray {
    return this.employerform.get('employerArray') as FormArray;
  }
  get graduateArray(): FormArray {
    return this.graduateform.get('graduateArray') as FormArray;
  }
  get discriptionArray(): FormArray {
    return this.successform.get('discriptionArray') as FormArray;
  }


  header() {
    if (this.headerform.invalid) {
      this.headerform.markAllAsTouched()
    }
    console.log("sdsfsfdsfdfdfds", this.headerform)
    var obj = {
      home_header_section: {
        title: this.headerform.value.title,
        image: this.filename
      }
    }
    console.log(obj);
    this.Service.headersection(obj).subscribe(res => {
      console.log("fgdgfdgfdfgdfgd", res);
    })
  }

  story() {
    if (this.storyform.invalid) {
      this.storyform.markAllAsTouched()
    }
    console.log("stroryform", this.storyform)
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


  success() {
    if (this.successform.invalid) {
      this.successform.markAllAsTouched()
    }
    console.log("successform", this.successform)
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

  employer() {
    if (this.employerform.invalid) {
      this.employerform.markAllAsTouched()
    }
  }

  curated() {
    if (this.curatedform.invalid) {
      this.curatedform.markAllAsTouched()
    }
    console.log("curatedform", this.curatedform)
    var obj = {
      heading: this.curatedform.value.heading,
    }
    console.log(obj);
  }

  onSelect3(e) {
    console.log(e);
    console.log(e.target.files[0].name);
    this.selectedfile3 = e.target.files[0].name;
  }

  onSelect2(e) {
    console.log(e);
    console.log(e.target.files[0].name);
    this.selectedfile2 = e.target.files[0];
    const formData = new FormData();
    formData.append('media', this.selectedfile2);
    this.Service.uploadmedia1(formData).subscribe((resp: any) => {

      console.log("video response ==>", resp);

      this.storyform.patchValue({
        video: this.sanitizer.bypassSecurityTrustResourceUrl(resp.file_name)
      })
    })
  }


  onSelect1(e) {
    console.log(e);
    console.log(e.target.files[0].name);
    this.file = e.target.files[0]
    const formData = new FormData();
    formData.append('media', this.file);
    this.Service.uploadmedia1(formData).subscribe((resp: any) => {
      this.headerform.patchValue({
        image: resp.file_name
      })
      console.log("uploaded image==>", this.headerform.controls['image'].value);

    })
    // this.selectedfile1= e.target.files[0].name;
    // this.Service.uploadmedia1(this.selectedfile1).subscribe(res=>{
    //   console.log("fgdgfdgfdfgdfgd",res);
    // })
  }


  onSelect(e) {
    console.log(e);
    this.files.push(e.addedFiles);
    console.log(this.files);
  }
  setHeadingImage(e) {
    this.selectedfile2 = e.target.files[0];
    const formData = new FormData();
    formData.append('media', this.selectedfile2);
    this.Service.uploadmedia1(formData).subscribe((resp: any) => {

      console.log("video response ==>", resp);

      this.newRegister.controls['image'].setValue(resp.file_name)
    })
  }
  onEmployerChangeImage(e,index){
    this.selectedfile = e.target.files[0];
    const formData = new FormData();
    formData.append('media', this.selectedfile);
    this.Service.uploadmedia1(formData).subscribe((resp: any) => {

      console.log("video response ==>", resp);

      this.employerArray.at(index).patchValue({
        image: resp.file_name
      })
    })
  }
  onSelectVideo(e){
    this.selectedfile = e.target.files[0];
    const formData = new FormData();
    formData.append('media', this.selectedfile);
    this.Service.uploadmedia1(formData).subscribe((resp: any) => {

      console.log("video response ==>", resp);

      this.successform.patchValue({
        video: this.sanitizer.bypassSecurityTrustResourceUrl(resp.file_name)
      })
    })
  }
  
  

  homepagecontent() {
    this.Service.homecontent().subscribe(data => {
      console.log("home page content is ====>", data)

      this.headerform.patchValue({
        title: data.data.home_header_section.title,
        image: data.data.home_header_section.image,
        is_visible: data.data.home_header_section.is_visible
      })
      this.storyform.patchValue({
        title1: data.data.our_story_section.title,
        description: data.data.our_story_section.description,
        name: data.data.our_story_section.posted_by,
        designation: data.data.our_story_section.position,
        is_visible: data.data.our_story_section.is_visible
      })
      this.curatedform.patchValue({
        heading: data.data.section_3.heading,
        is_visible: data.data.section_3.is_visible
      })
      this.newRegister.patchValue({
        heading: data.data.section_7.heading,
        text: data.data.section_7.text,
        description: data.data.section_7.description,
        image: data.data.section_7.image,
      })
      console.log("newRegister==>", this.newRegister);
      
      this.successform.patchValue({
        heading:data.data.section_6.heading,
        video:this.sanitizer.bypassSecurityTrustResourceUrl(data.data.section_6.video)
      })
      data.data.section_6.description.forEach((element) => {
        this.discriptionArray.push( this._formBuilder.control(element,[Validators.required]))
      });

      data.data.section_4.tab_1.forEach((element) => {
        this.employerArray.push(this._formBuilder.group({
          heading: [element.heading, [Validators.required]],
          Description: [element.description, [Validators.required]],
          image: [element.image, [Validators.required]],

        }))
      });

      console.log("employeee==>",this.employerform);
      
      data.data.section_4.tab_2.forEach((element) => {
        this.graduateArray.push(this._formBuilder.group({
          heading: [element.heading, [Validators.required]],
          Description: [element.description, [Validators.required]],
          image: [element.image, [Validators.required]],

        }))
      });
      

    })

  }

}
