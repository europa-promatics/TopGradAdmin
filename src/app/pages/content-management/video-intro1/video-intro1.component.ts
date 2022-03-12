import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TopgradserviceService } from '../../../topgradservice.service';


@Component({
  selector: 'app-video-intro1',
  templateUrl: './video-intro1.component.html',
  styleUrls: ['./video-intro1.component.scss']
})
export class VideoIntro1Component implements OnInit {
  headingImageObj: any;
  HeadingImage1: any;
  selectedfile: any;

  constructor(private Service: TopgradserviceService, private _snackBar: MatSnackBar, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getcontent();
  }

  get tipsArray(): FormArray {
    return this.tipsSection.get('tipsArray') as FormArray;
  }

  step1Section = this.fb.group({
    heading: ['', [Validators.required, Validators.maxLength(200)]],
    Image: ['',],
    is_visible: [''],
    county:['']
  });
  
  tipsSection = this.fb.group({
    heading: ['', [Validators.required, Validators.maxLength(200)]],
    is_visible: [''],
    tipsArray: this.fb.array([ ])
  });

  step3Section = this.fb.group({
    heading: ['', [Validators.required, Validators.maxLength(200)]],
    is_visible: ['']
  });

  fun(e:any){
    console.log("hfjsdfjsdhfjkds",e);
    this._snackBar.open("Visibility changed successfully","close",{
      duration: 2000
    });
    
  }

  fun1(e:any){
    console.log("hfjsdfjsdhfjkds",e);
    this._snackBar.open("Visibility changed successfully","close",{
      duration: 2000
    });
    
  }

  fun2(e:any){
    console.log("hfjsdfjsdhfjkds",e);
    this._snackBar.open("Visibility changed successfully","close",{
      duration: 2000
    });
    
  }


  getcontent(){
    this.Service.videointrocontent().subscribe(data => {
      console.log("recruitment page content is ====>", data)
      
      this.HeadingImage1 = data.data.section_4.image
      


      this.step1Section.patchValue({
        heading: data.data.section_4.heading,
        Image:data.data.section_1.image,
        is_visible: data.data.section_1.is_visible
      })

      this.step3Section.patchValue({
        heading: data.data.section_6.heading,
        is_visible: data.data.section_6.is_visible
      })

      this.tipsSection.patchValue({
        is_visible: data.data.section_5.is_visible,
        heading: data.data.section_5.heading
      })

      data.data.section_5.data.forEach((element) => {
        this.tipsArray.push(this.fb.group({
          heading: [element.heading, [Validators.required, Validators.maxLength(50)]],
          description: [element.description, [Validators.required, Validators.maxLength(5000)]],
          image: [element.image, [Validators.required]],
          county: ['']
        }));

      })
    });
  }



  setHeadingImage(event) {
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    const fileType = file.type.split("/")[0];
    console.log(fileType);
    if (fileType == "image") {
      this.headingImageObj = event.target.files[0]
      this.step1Section.patchValue({
        Image: this.headingImageObj,
      })
      let reader = new FileReader();
      reader.onload = (event: any) => {
        
        this.HeadingImage1= event.target.result;
      };
      reader.readAsDataURL(this.headingImageObj);
      this.step1Section.get('county').clearValidators(); // 6. Clear All Validators
      this.step1Section.get('county').updateValueAndValidity();
      console.log("rightextension", this.step1Section);
    } else {
      this.step1Section.get('county').setValidators([Validators.required]); // 5.Set Required Validator
      this.step1Section.get('county').updateValueAndValidity();

      console.log("wrongextension",this.step1Section);
    }
  }

  onTipsChangeImage(e, index) {
    console.log("ind",index);
    const file = e.target.files[0];
    const fileType = file.type.split("/")[0];
    console.log(fileType);
    if (fileType == "image") {
      this.selectedfile = e.target.files[0];
      const formData = new FormData();
      formData.append('image', this.selectedfile);
      this.Service.uploadbenefitmedia(formData).subscribe((resp: any) => {

        console.log("image response ==>", resp);

        this.tipsArray.at(index).patchValue({
          image: resp
        })
        console.log("full form",this.tipsSection)
      })
       this.tipsArray.controls[index].get('county').clearValidators(); // 6. Clear All Validators
       this.tipsArray.controls[index].get('county').updateValueAndValidity();
      console.log("rightextension", this.tipsSection);
      console.log("gussa na dila", this.tipsArray);

    } else {
       this.tipsArray.controls[index].get('county').setValidators([Validators.required]); // 5.Set Required Validator
       this.tipsArray.controls[index].get('county').updateValueAndValidity();

      console.log("wrongectension",this.tipsSection);
      console.log("gussa na dila", this.tipsArray);
    }
  }


  postcontent(type){
    let obj: any
    console.log("type==>", type);
    if (type == 'step1') {
      if (this.step1Section.valid) {
        const formdata = new FormData()
        if (this.headingImageObj) {
          console.log("yippeeeeeeee", this.headingImageObj);
          
          const section_4 = {
            is_visible: this.step1Section.controls['is_visible'].value,
            heading: this.step1Section.controls['heading'].value
          }
          formdata.append("section_4",  JSON.stringify(section_4))
          formdata.append("image", this.headingImageObj)
        }
        else{
          const section_4 = {
            is_visible: this.step1Section.controls['is_visible'].value,
            heading: this.step1Section.controls['heading'].value,
            image: this.HeadingImage1
          }
          formdata.append("section_4", JSON.stringify(section_4))
          //formdata.append("image", this.HeadingImage1)
        }
        obj = formdata

      } else {
        this.step1Section.markAllAsTouched()
        return
      }
    }

    if (type == 'tips') {
      if (this.tipsSection.valid) {
        if (this.tipsArray.valid) {
          const formdata = new FormData()
          const section_5 = {data:this.tipsSection.get('tipsArray').value,
            is_visible: this.tipsSection.controls['is_visible'].value,
            heading:this.tipsSection.controls['heading'].value
          }
          
          formdata.append("section_5", JSON.stringify(section_5))
          obj = formdata
        } else {
          this.tipsArray.markAllAsTouched()
          return
        }
      }
      else {
        this.tipsSection.markAllAsTouched()
        return
      }
    }

    if (type == 'step3') {
      if (this.step3Section.valid) {
        const formdata = new FormData()
          const section_6 = {
            is_visible: this.step3Section.controls['is_visible'].value,
            heading: this.step3Section.controls['heading'].value
          }
          formdata.append("section_6", JSON.stringify(section_6))
        obj = formdata

      } else {
        this.step3Section.markAllAsTouched()
        return
      }
    }
    
    

    this.Service.postVideoIntroContent(obj).subscribe((resp) => {

      this.Service.showMessage({ message: "Submitted Successfully" })
    })
  }

}
