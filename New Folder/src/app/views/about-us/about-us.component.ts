import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TopgradserviceService } from '../../topgradservice.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  HeadingImage: any
  headingImageObj: any = null
  textFieldsArray=[]

  headerSection = this.fb.group({
    heading: ['', [Validators.required]],
    description: ['', [Validators.required]],
    Image: ['',],
    is_visible: ['',]
  });
  Champions = this.fb.group({
    description: ['', [Validators.required]],
    is_visible: ['',]
  });
  ourVision = this.fb.group({
    description: ['', [Validators.required]],
    heading: ['', [Validators.required]],
    is_visible: ['',]
  });
  ourMission = this.fb.group({
    description: ['', [Validators.required]],
    heading: ['', [Validators.required]],
    is_visible: ['',]

  });
  jobOpenings = this.fb.group({
    description: ['', [Validators.required]],
    heading: ['', [Validators.required]],
    is_visible: ['',]
  });

  TopGraduates = this.fb.group({
    heading: ['', [Validators.required]],
    is_visible: ['',],
    Fields:  this.fb.array([])
   

  });




  constructor(private Service: TopgradserviceService, private _snackBar: MatSnackBar, private router: Router, private fb: FormBuilder) { }



  ngOnInit(): void {
    this.getAboutUsData()
  }
  get Fields(): FormArray {
    return this.TopGraduates.get('Fields') as FormArray;
  }


  getAboutUsData() {
    this.Service.getAboutUsData().subscribe((resp: any) => {

     
      console.log("getAboutUsData Resp ==>", resp.data);
      this.HeadingImage = resp.data.section_1.image
      
      this.headerSection.patchValue({
        heading: resp.data.section_1.heading,
        description: resp.data.section_1.description,
        Image: resp.data.section_1.image,
        is_visible: resp.data.section_1.is_visible

      })
      this.Champions.patchValue({
        description: resp.data.section_2.heading,
        is_visible: resp.data.section_2.is_visible

      })
      this.ourVision.patchValue({
        heading: resp.data.section_3.heading,
        description: resp.data.section_3.description,
        is_visible: resp.data.section_3.is_visible

      })
      this.ourMission.patchValue({
        heading: resp.data.section_4.heading,
        description: resp.data.section_4.description,
        is_visible: resp.data.section_4.is_visible

      })
      this.jobOpenings.patchValue({
        heading: resp.data.section_5.heading,
        description: resp.data.section_5.description,
        is_visible: resp.data.section_5.is_visible

      })
      this.TopGraduates.patchValue({
        heading: resp.data.section_6.heading,
        is_visible: resp.data.section_5.is_visible

      })
      resp.data.section_6.text.forEach(element => {
        this.Fields.push(this.fb.control(element,[Validators.required]))
       
        
      });




    })

  }
  setHeadingImage(event) {
    console.log(event.target.files[0]);

    this.headingImageObj = event.target.files[0]
    this.headerSection.patchValue({
      Image: this.headingImageObj,
    })

    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.HeadingImage = event.target.result;
    };
    reader.readAsDataURL(this.headingImageObj);
  }
  postAboutUsdata(type) {
    let obj: any
    console.log("type==>",type);
    
    if (type == 'headerSection') {
      if (this.headerSection.valid) {
        const formdata = new FormData()
        const section_1 = {
          heading: this.headerSection.controls['heading'].value,
          description: this.headerSection.controls['description'].value,
          is_visible: this.headerSection.controls['is_visible'].value
        }
        formdata.append("section_1", JSON.stringify(section_1))
        if (this.headingImageObj) {
          formdata.append("image", this.headingImageObj)
        }
        obj = formdata

      } else {
        this.headerSection.markAllAsTouched()
        return 
      }
    }
    if (type == "Champions") {
      if (this.Champions.valid) {
        const formdata = new FormData()
        const section_2 = {
          heading: this.Champions.controls['heading'].value,
          is_visible: this.Champions.controls['is_visible'].value
        }
        obj = section_2
    }else{
      this.Champions.markAllAsTouched()
      return 
    }
  }
    if (type == "ourVision") {
      if (this.ourVision.valid) {
        const formdata = new FormData()
        const section_3 = {
          heading: this.ourVision.controls['heading'].value,
          is_visible: this.ourVision.controls['is_visible'].value
        }
        obj = section_3
    }else{
      this.ourVision.markAllAsTouched()
      return 
    }
    }
    if (type == "ourMission") {
      if (this.ourMission.valid) {
        const formdata = new FormData()
        const section_4 = {
          heading: this.ourMission.controls['heading'].value,
          is_visible: this.ourMission.controls['is_visible'].value
        }
        obj = section_4
    }else{
      this.ourMission.markAllAsTouched()
      return 
    }

    }
    if (type == "jobOpenings") {
      if (this.jobOpenings.valid) {
        const formdata = new FormData()
        const section_5 = {
          heading: this.jobOpenings.controls['heading'].value,
          is_visible: this.jobOpenings.controls['is_visible'].value
        }
        obj = section_5
    }else{
      this.jobOpenings.markAllAsTouched()
      return 
    }
    }
    if (type == "TopGraduates") {
      if (this.TopGraduates.valid) {
        const formdata = new FormData()
        const section_6 = {
          heading: this.TopGraduates.controls['heading'].value,
          text:this.TopGraduates.controls['Fields'].value,
          is_visible: this.TopGraduates.controls['is_visible'].value
        }
        obj = section_6
    }else{
      this.TopGraduates.markAllAsTouched()
      return 
    }
    }
    this.Service.postAboutUsdata(obj).subscribe((resp) => {

      this.Service.showMessage({ message: "Submitted Successfully" })
    })



  }


}
