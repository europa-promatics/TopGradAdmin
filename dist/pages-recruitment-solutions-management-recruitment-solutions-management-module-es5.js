(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recruitment-solutions-management-recruitment-solutions-management-module"], {
    /***/
    "9ko9": function ko9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"employer-header-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"headerSection\">\n\t\t\t<div class=\"row\">\n\t\t\t\t\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Recruitment Solutions Header Section</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Title</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Don’t have time to recruit candidates? We can help!\" formControlName=\"heading\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"(headerSection.controls.heading.touched || headerSection.controls.heading.dirty) && headerSection.controls.heading.invalid && headerSection.controls.heading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"(headerSection.controls.heading.touched || headerSection.controls.heading.dirty) && headerSection.controls.heading.invalid && headerSection.controls.heading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 200 characters\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Sub-Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Save 10 hours a week sourcing and screening candidates. Let Top Graduates Recruitment help you today!\" formControlName=\"subheading\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"(headerSection.controls.subheading.touched || headerSection.controls.subheading.dirty) && headerSection.controls.subheading.invalid && headerSection.controls.subheading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t*Please enter sub heading\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"(headerSection.controls.subheading.touched || headerSection.controls.subheading.dirty) && headerSection.controls.subheading.invalid && headerSection.controls.subheading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 200 characters\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Banner Image</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage?HeadingImage:'assets/img/rcrtmntimg.png'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" title=\"\" name=\"\" class=\"img-input-upld\" (change)=\"setHeadingImage($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"headerSection.controls['image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"headerSection.controls.county?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('header')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"work-for-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"whytopgraduatesSection\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Why choose TopGraduates</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun1($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"heading\"></editor>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Why choose TopGraduates ?\" formControlName=\"heading\"> -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(whytopgraduatesSection.controls.heading.touched || whytopgraduatesSection.controls.heading.dirty) && whytopgraduatesSection.controls.heading.invalid && whytopgraduatesSection.controls.heading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(whytopgraduatesSection.controls.heading.touched || whytopgraduatesSection.controls.heading.dirty) && whytopgraduatesSection.controls.heading.invalid && whytopgraduatesSection.controls.heading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('whygraduates')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"whychose-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"agencySection\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Our Graduate Recruitment Agency</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun2($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Agency Image</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage9?HeadingImage9:'assets/img/rcrtmntimg.png'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" title=\"\" name=\"\" class=\"img-input-upld\" (change)=\"setHeadingImage9($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"agencySection.controls['image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"agencySection.controls.county?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\"></editor>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(agencySection.controls.description.touched || agencySection.controls.description.dirty) && agencySection.controls.description.invalid && agencySection.controls.description?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(agencySection.controls.description.touched || agencySection.controls.description.dirty) && agencySection.controls.description.invalid && agencySection.controls.description?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('agency')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"Endorsed-steps-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"benefitsSection\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Benefits</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun3($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"endrose-step\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container formArrayName=\"benefitsArray\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let alias of benefitsSection.controls['benefitsArray'].controls; let i=index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container [formGroupName]=\"i\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"mt-4\">{{i+1}}: Icon</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"benefitsArray.controls[i].controls['image'].value ? benefitsArray.controls[i].controls['image'].value:'assets/img/access_time.svg'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\" (change)=\"onBenefitChangeImage($event,i)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"benefitsArray.controls[i].controls['image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    <div *ngIf=\"benefitsArray.controls[i].controls['image'].county?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"mt-3\">Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Get hired 3x faster\" formControlName=\"heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <div *ngIf=\"benefitsArray.controls[i].controls['heading'].errors?.required  \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"benefitsArray.controls[i].controls['heading'].errors?.maxlength  \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"mt-3\">Description</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\"></editor>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"benefitsArray.controls[i].controls['description'].errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"benefitsArray.controls[i].controls['description'].errors?.maxlength  \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"endrose-step\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>2: Icon</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/ondemand_video.svg\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Bonus Video Resume\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<editor></editor>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"endrose-step\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>3: Icon</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/assessment.svg\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Profile Booster\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<editor></editor>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"endrose-step\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>4: Icon</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/description.svg\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Resume & Cover Letter\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<editor></editor>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"endrose-step\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>5: Icon</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/link.svg\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"LinkedIn Profile Booster\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<editor></editor>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('benefits')\" >Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"whychose-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"essentialsSection\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>We provide you with the essentials</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun4($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\"></editor>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(essentialsSection.controls.description.touched || essentialsSection.controls.description.dirty) && essentialsSection.controls.description.invalid && essentialsSection.controls.description?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(essentialsSection.controls.description.touched || essentialsSection.controls.description.dirty) && essentialsSection.controls.description.invalid && essentialsSection.controls.description?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 10000 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('essentials')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"whychose-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"recruitment1Section\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Recruitment Step 1</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun5($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Recruitment Consultation\" formControlName=\"heading\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment1Section.controls.heading.touched || recruitment1Section.controls.heading.dirty) && recruitment1Section.controls.heading.invalid && recruitment1Section.controls.heading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment1Section.controls.heading.touched || recruitment1Section.controls.heading.dirty) && recruitment1Section.controls.heading.invalid && recruitment1Section.controls.heading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\"></editor>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment1Section.controls.description.touched || recruitment1Section.controls.description.dirty) && recruitment1Section.controls.description.invalid && recruitment1Section.controls.description?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment1Section.controls.description.touched || recruitment1Section.controls.description.dirty) && recruitment1Section.controls.description.invalid && recruitment1Section.controls.description?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Section Image</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage1?HeadingImage1:'assets/img/s1img.png'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" title=\"\" name=\"\" class=\"img-input-upld\" (change)=\"setHeadingImage1($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"recruitment1Section.controls['image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"recruitment1Section.controls.county?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('recruitment1')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"whychose-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"recruitment2Section\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Recruitment Step 2</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun6($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Talent sourcing\" formControlName=\"heading\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment2Section.controls.heading.touched || recruitment2Section.controls.heading.dirty) && recruitment2Section.controls.heading.invalid && recruitment2Section.controls.heading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment2Section.controls.heading.touched || recruitment2Section.controls.heading.dirty) && recruitment2Section.controls.heading.invalid && recruitment2Section.controls.heading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\"></editor>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment2Section.controls.description.touched || recruitment2Section.controls.description.dirty) && recruitment2Section.controls.description.invalid && recruitment2Section.controls.description?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment2Section.controls.description.touched || recruitment2Section.controls.description.dirty) && recruitment2Section.controls.description.invalid && recruitment2Section.controls.description?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Section Image</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage2?HeadingImage2:'assets/img/s2img.png'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" title=\"\" name=\"\" class=\"img-input-upld\" (change)=\"setHeadingImage2($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"recruitment2Section.controls['image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"recruitment2Section.controls.county?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('recruitment2')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"whychose-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"recruitment3Section\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Recruitment Step 3</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun7($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Candidate screening\" formControlName=\"heading\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment3Section.controls.heading.touched || recruitment3Section.controls.heading.dirty) && recruitment3Section.controls.heading.invalid && recruitment3Section.controls.heading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment3Section.controls.heading.touched || recruitment3Section.controls.heading.dirty) && recruitment3Section.controls.heading.invalid && recruitment3Section.controls.heading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 500 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\"></editor>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment3Section.controls.description.touched || recruitment3Section.controls.description.dirty) && recruitment3Section.controls.description.invalid && recruitment3Section.controls.description?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment3Section.controls.description.touched || recruitment3Section.controls.description.dirty) && recruitment3Section.controls.description.invalid && recruitment3Section.controls.description?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Section Image</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage3?HeadingImage3:'assets/img/s3img.png'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" title=\"\" name=\"\" class=\"img-input-upld\" (change)=\"setHeadingImage3($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"recruitment3Section.controls['image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"recruitment3Section.controls.county?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('recruitment3')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"whychose-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"recruitment4Section\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Recruitment Step 4</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun8($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"In depth interviews\" formControlName=\"heading\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment4Section.controls.heading.touched || recruitment4Section.controls.heading.dirty) && recruitment4Section.controls.heading.invalid && recruitment4Section.controls.heading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment4Section.controls.heading.touched || recruitment4Section.controls.heading.dirty) && recruitment4Section.controls.heading.invalid && recruitment4Section.controls.heading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\"></editor>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment4Section.controls.description.touched || recruitment4Section.controls.description.dirty) && recruitment4Section.controls.description.invalid && recruitment4Section.controls.description?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment4Section.controls.description.touched || recruitment4Section.controls.description.dirty) && recruitment4Section.controls.description.invalid && recruitment4Section.controls.description?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Section Image</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage4?HeadingImage4:'assets/img/s4img.png'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" title=\"\" name=\"\" class=\"img-input-upld\" (change)=\"setHeadingImage4($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"recruitment4Section.controls['image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"recruitment4Section.controls.county?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('recruitment4')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"whychose-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"recruitment5Section\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Recruitment Step 5</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun9($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Meet the best\" formControlName=\"heading\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment5Section.controls.heading.touched || recruitment5Section.controls.heading.dirty) && recruitment5Section.controls.heading.invalid && recruitment5Section.controls.heading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment5Section.controls.heading.touched || recruitment5Section.controls.heading.dirty) && recruitment5Section.controls.heading.invalid && recruitment5Section.controls.heading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\"></editor>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment5Section.controls.description.touched || recruitment5Section.controls.description.dirty) && recruitment5Section.controls.description.invalid && recruitment5Section.controls.description?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment5Section.controls.description.touched || recruitment5Section.controls.description.dirty) && recruitment5Section.controls.description.invalid && recruitment5Section.controls.description?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Section Image</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage5?HeadingImage5:'assets/img/s5img.png'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" title=\"\" name=\"\" class=\"img-input-upld\" (change)=\"setHeadingImage5($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"recruitment5Section.controls['image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"recruitment5Section.controls.county?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('recruitment5')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"whychose-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"recruitment6Section\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Recruitment Step 6</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun10($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Verify & Select\" formControlName=\"heading\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment6Section.controls.heading.touched || recruitment6Section.controls.heading.dirty) && recruitment6Section.controls.heading.invalid && recruitment6Section.controls.heading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment6Section.controls.heading.touched || recruitment6Section.controls.heading.dirty) && recruitment6Section.controls.heading.invalid && recruitment6Section.controls.heading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\"></editor>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment6Section.controls.description.touched || recruitment6Section.controls.description.dirty) && recruitment6Section.controls.description.invalid && recruitment6Section.controls.description?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(recruitment6Section.controls.description.touched || recruitment6Section.controls.description.dirty) && recruitment6Section.controls.description.invalid && recruitment6Section.controls.description?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Section Image</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage6?HeadingImage6:'assets/img/s6img.png'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" title=\"\" class=\"img-input-upld\" (change)=\"setHeadingImage6($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"recruitment6Section.controls['image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"recruitment6Section.controls.county?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('recruitment6')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n\n<section class=\"tstimnl-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"testimonialsSection\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Testimonials</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun11($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Testimonial 1: Image</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage7?HeadingImage7:'assets/img/avatars/8.jpg'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" title=\"\" name=\"\" class=\"img-input-upld\" (change)=\"setHeadingImage7($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"testimonialsSection.controls['image1']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"testimonialsSection.controls.county?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"James\" formControlName=\"name1\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(testimonialsSection.controls.name1.touched || testimonialsSection.controls.name1.dirty) && testimonialsSection.controls.name1.invalid && testimonialsSection.controls.name1?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter name\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(testimonialsSection.controls.name1.touched || testimonialsSection.controls.name1.dirty) && testimonialsSection.controls.name1.invalid && testimonialsSection.controls.name1?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description1\"></editor>\n\t\t\t\t\t\t\t\t\t\t</div>\n                                        <div *ngIf=\"(testimonialsSection.controls.description1.touched || testimonialsSection.controls.description1.dirty) && testimonialsSection.controls.description1.invalid && testimonialsSection.controls.description1?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(testimonialsSection.controls.description1.touched || testimonialsSection.controls.description1.dirty) && testimonialsSection.controls.description1.invalid && testimonialsSection.controls.description1?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Designation</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"\" formControlName=\"designation1\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(testimonialsSection.controls.designation1.touched || testimonialsSection.controls.designation1.dirty) && testimonialsSection.controls.designation1.invalid && testimonialsSection.controls.designation1?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter designation\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(testimonialsSection.controls.designation1.touched || testimonialsSection.controls.designation1.dirty) && testimonialsSection.controls.designation1.invalid && testimonialsSection.controls.designation1?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Testimonial 2: Image</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage8?HeadingImage8:'assets/img/avatars/5.jpg'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" title=\"\" name=\"\" class=\"img-input-upld\" (change)=\"setHeadingImage8($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"testimonialsSection.controls['image2']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"testimonialsSection.controls.county1?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Andrea\" formControlName=\"name2\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(testimonialsSection.controls.name2.touched || testimonialsSection.controls.name2.dirty) && testimonialsSection.controls.name2.invalid && testimonialsSection.controls.name2?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter name\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(testimonialsSection.controls.name2.touched || testimonialsSection.controls.name2.dirty) && testimonialsSection.controls.name2.invalid && testimonialsSection.controls.name2?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description2\"></editor>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(testimonialsSection.controls.description2.touched || testimonialsSection.controls.description2.dirty) && testimonialsSection.controls.description2.invalid && testimonialsSection.controls.description2?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(testimonialsSection.controls.description2.touched || testimonialsSection.controls.description2.dirty) && testimonialsSection.controls.description2.invalid && testimonialsSection.controls.description2?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Designation</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"\" formControlName=\"designation2\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(testimonialsSection.controls.designation2.touched || testimonialsSection.controls.designation2.dirty) && testimonialsSection.controls.designation2.invalid && testimonialsSection.controls.designation2?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter designation\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(testimonialsSection.controls.designation2.touched || testimonialsSection.controls.designation2.dirty) && testimonialsSection.controls.designation2.invalid && testimonialsSection.controls.designation2?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('testimonials')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n\n\n<section class=\"opportunities-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"storiesSection\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Our Success Stories</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun12($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"heading\"></editor>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Our Success Stories\" formControlName=\"heading\"> -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(storiesSection.controls.heading.touched || storiesSection.controls.heading.dirty) && storiesSection.controls.heading.invalid && storiesSection.controls.heading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(storiesSection.controls.heading.touched || storiesSection.controls.heading.dirty) && storiesSection.controls.heading.invalid && storiesSection.controls.heading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\"></editor>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(storiesSection.controls.description.touched || storiesSection.controls.description.dirty) && storiesSection.controls.description.invalid && storiesSection.controls.description?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(storiesSection.controls.description.touched || storiesSection.controls.description.dirty) && storiesSection.controls.description.invalid && storiesSection.controls.description?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('stories')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"opportunities-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"knowmoreSection\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Want to know more?</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun13($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Want to know more?\" formControlName=\"heading\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"(knowmoreSection.controls.heading.touched || knowmoreSection.controls.heading.dirty) && knowmoreSection.controls.heading.invalid && knowmoreSection.controls.heading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"(knowmoreSection.controls.heading.touched || knowmoreSection.controls.heading.dirty) && knowmoreSection.controls.heading.invalid && knowmoreSection.controls.heading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t*Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\"></editor>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"(knowmoreSection.controls.description.touched || knowmoreSection.controls.description.dirty) && knowmoreSection.controls.description.invalid && knowmoreSection.controls.description?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"(knowmoreSection.controls.description.touched || knowmoreSection.controls.description.dirty) && knowmoreSection.controls.description.invalid && knowmoreSection.controls.description?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t*Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('knowmore')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";
      /***/
    },

    /***/
    "Kp2m": function Kp2m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecruitmentSolutionsManagementRoutingModule", function () {
        return RecruitmentSolutionsManagementRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _recruitment_solutions_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./recruitment-solutions-management.component */
      "zz+R");

      var routes = [{
        path: '',
        component: _recruitment_solutions_management_component__WEBPACK_IMPORTED_MODULE_3__["RecruitmentSolutionsManagementComponent"]
      }];

      var RecruitmentSolutionsManagementRoutingModule = function RecruitmentSolutionsManagementRoutingModule() {
        _classCallCheck(this, RecruitmentSolutionsManagementRoutingModule);
      };

      RecruitmentSolutionsManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RecruitmentSolutionsManagementRoutingModule);
      /***/
    },

    /***/
    "jDfE": function jDfE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecruitmentSolutionsManagementModule", function () {
        return RecruitmentSolutionsManagementModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @tinymce/tinymce-angular */
      "crmZ");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var _recruitment_solutions_management_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./recruitment-solutions-management-routing.module */
      "Kp2m");
      /* harmony import */


      var _recruitment_solutions_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./recruitment-solutions-management.component */
      "zz+R");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var RecruitmentSolutionsManagementModule = function RecruitmentSolutionsManagementModule() {
        _classCallCheck(this, RecruitmentSolutionsManagementModule);
      };

      RecruitmentSolutionsManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_recruitment_solutions_management_component__WEBPACK_IMPORTED_MODULE_6__["RecruitmentSolutionsManagementComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__["EditorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _recruitment_solutions_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecruitmentSolutionsManagementRoutingModule"]]
      })], RecruitmentSolutionsManagementModule);
      /***/
    },

    /***/
    "lZbJ": function lZbJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNydWl0bWVudC1zb2x1dGlvbnMtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "zz+R": function zzR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecruitmentSolutionsManagementComponent", function () {
        return RecruitmentSolutionsManagementComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_recruitment_solutions_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./recruitment-solutions-management.component.html */
      "9ko9");
      /* harmony import */


      var _recruitment_solutions_management_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./recruitment-solutions-management.component.scss */
      "lZbJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _topgradservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../topgradservice.service */
      "DL5e");

      var RecruitmentSolutionsManagementComponent = /*#__PURE__*/function () {
        function RecruitmentSolutionsManagementComponent(Service, _snackBar, router, fb) {
          _classCallCheck(this, RecruitmentSolutionsManagementComponent);

          this.Service = Service;
          this._snackBar = _snackBar;
          this.router = router;
          this.fb = fb;
          this.headingImageObj = null;
          this.headingImageObj1 = null;
          this.headerSection = this.fb.group({
            heading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(200)]],
            subheading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(200)]],
            Image: [''],
            is_visible: [''],
            county: ['']
          });
          this.whytopgraduatesSection = this.fb.group({
            heading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            is_visible: [''],
            county: ['']
          });
          this.agencySection = this.fb.group({
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            image: [''],
            is_visible: [''],
            county: ['']
          });
          this.essentialsSection = this.fb.group({
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10000)]],
            is_visible: [''],
            county: ['']
          });
          this.recruitment1Section = this.fb.group({
            heading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            Image: [''],
            is_visible: [''],
            county: ['']
          });
          this.recruitment2Section = this.fb.group({
            heading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            Image: [''],
            is_visible: [''],
            county: ['']
          });
          this.recruitment3Section = this.fb.group({
            heading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            Image: [''],
            is_visible: [''],
            county: ['']
          });
          this.recruitment4Section = this.fb.group({
            heading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            Image: [''],
            is_visible: [''],
            county: ['']
          });
          this.recruitment5Section = this.fb.group({
            heading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            Image: [''],
            is_visible: [''],
            county: ['']
          });
          this.recruitment6Section = this.fb.group({
            heading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            Image: [''],
            is_visible: [''],
            county: ['']
          });
          this.storiesSection = this.fb.group({
            heading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            is_visible: [''],
            county: ['']
          });
          this.knowmoreSection = this.fb.group({
            heading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(500)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            is_visible: [''],
            county: ['']
          });
          this.testimonialsSection = this.fb.group({
            name1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
            description1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            designation1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
            name2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
            description2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            designation2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
            is_visible: [''],
            Image: [''],
            Image1: [''],
            county: [''],
            county1: ['']
          });
          this.benefitsSection = this.fb.group({
            'is_visible': [''],
            'benefitsArray': this.fb.array([])
          });
        }

        _createClass(RecruitmentSolutionsManagementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getcontent();
            console.log("asmaan me jese baadal ho rhe hain", this.benefitsSection);
          }
        }, {
          key: "fun",
          value: function fun(e) {
            console.log("hfjsdfjsdhfjkds", e);

            this._snackBar.open("Visibility changed successfully", "close", {
              duration: 2000
            });
          }
        }, {
          key: "fun1",
          value: function fun1(e) {
            console.log("hfjsdfjsdhfjkds", e);

            this._snackBar.open("Visibility changed successfully", "close", {
              duration: 2000
            });
          }
        }, {
          key: "fun2",
          value: function fun2(e) {
            console.log("hfjsdfjsdhfjkds", e);

            this._snackBar.open("Visibility changed successfully", "close", {
              duration: 2000
            });
          }
        }, {
          key: "fun3",
          value: function fun3(e) {
            console.log("hfjsdfjsdhfjkds", e);

            this._snackBar.open("Visibility changed successfully", "close", {
              duration: 2000
            });
          }
        }, {
          key: "fun4",
          value: function fun4(e) {
            console.log("hfjsdfjsdhfjkds", e);

            this._snackBar.open("Visibility changed successfully", "close", {
              duration: 2000
            });
          }
        }, {
          key: "fun5",
          value: function fun5(e) {
            console.log("hfjsdfjsdhfjkds", e);

            this._snackBar.open("Visibility changed successfully", "close", {
              duration: 2000
            });
          }
        }, {
          key: "fun6",
          value: function fun6(e) {
            console.log("hfjsdfjsdhfjkds", e);

            this._snackBar.open("Visibility changed successfully", "close", {
              duration: 2000
            });
          }
        }, {
          key: "fun7",
          value: function fun7(e) {
            console.log("hfjsdfjsdhfjkds", e);

            this._snackBar.open("Visibility changed successfully", "close", {
              duration: 2000
            });
          }
        }, {
          key: "fun8",
          value: function fun8(e) {
            console.log("hfjsdfjsdhfjkds", e);

            this._snackBar.open("Visibility changed successfully", "close", {
              duration: 2000
            });
          }
        }, {
          key: "fun9",
          value: function fun9(e) {
            console.log("hfjsdfjsdhfjkds", e);

            this._snackBar.open("Visibility changed successfully", "close", {
              duration: 2000
            });
          }
        }, {
          key: "fun10",
          value: function fun10(e) {
            console.log("hfjsdfjsdhfjkds", e);

            this._snackBar.open("Visibility changed successfully", "close", {
              duration: 2000
            });
          }
        }, {
          key: "fun11",
          value: function fun11(e) {
            console.log("hfjsdfjsdhfjkds", e);

            this._snackBar.open("Visibility changed successfully", "close", {
              duration: 2000
            });
          }
        }, {
          key: "fun12",
          value: function fun12(e) {
            console.log("hfjsdfjsdhfjkds", e);

            this._snackBar.open("Visibility changed successfully", "close", {
              duration: 2000
            });
          }
        }, {
          key: "fun13",
          value: function fun13(e) {
            console.log("hfjsdfjsdhfjkds", e);

            this._snackBar.open("Visibility changed successfully", "close", {
              duration: 2000
            });
          }
        }, {
          key: "benefitsArray",
          get: function get() {
            return this.benefitsSection.get('benefitsArray');
          }
        }, {
          key: "getcontent",
          value: function getcontent() {
            var _this = this;

            this.Service.recruitmentcontent().subscribe(function (data) {
              console.log("recruitment page content is ====>", data);
              _this.HeadingImage = data.data.section_1.image;
              _this.HeadingImage1 = data.data.section_6.image;
              _this.HeadingImage2 = data.data.section_7.image;
              _this.HeadingImage3 = data.data.section_8.image;
              _this.HeadingImage4 = data.data.section_9.image;
              _this.HeadingImage5 = data.data.section_10.image;
              _this.HeadingImage6 = data.data.section_11.image;
              _this.HeadingImage7 = data.data.section_12.image1;
              _this.HeadingImage8 = data.data.section_12.image2;
              _this.HeadingImage9 = data.data.section_3.image;

              _this.headerSection.patchValue({
                heading: data.data.section_1.heading,
                subheading: data.data.section_1.description,
                Image: data.data.section_1.image,
                is_visible: data.data.section_1.is_visible
              });

              _this.whytopgraduatesSection.patchValue({
                heading: data.data.section_2.heading,
                is_visible: data.data.section_2.is_visible
              });

              _this.agencySection.patchValue({
                description: data.data.section_3.heading,
                image: data.data.section_3.image,
                is_visible: data.data.section_3.is_visible
              });

              _this.essentialsSection.patchValue({
                description: data.data.section_5.description,
                is_visible: data.data.section_5.is_visible
              });

              _this.recruitment1Section.patchValue({
                heading: data.data.section_6.heading,
                description: data.data.section_6.description,
                Image: data.data.section_6.image,
                is_visible: data.data.section_6.is_visible
              });

              _this.recruitment2Section.patchValue({
                heading: data.data.section_7.heading,
                description: data.data.section_7.description,
                Image: data.data.section_7.image,
                is_visible: data.data.section_7.is_visible
              });

              _this.recruitment3Section.patchValue({
                heading: data.data.section_8.heading,
                description: data.data.section_8.description,
                Image: data.data.section_8.image,
                is_visible: data.data.section_8.is_visible
              });

              _this.recruitment4Section.patchValue({
                heading: data.data.section_9.heading,
                description: data.data.section_9.description,
                Image: data.data.section_9.image,
                is_visible: data.data.section_9.is_visible
              });

              _this.recruitment5Section.patchValue({
                heading: data.data.section_10.heading,
                description: data.data.section_10.description,
                Image: data.data.section_10.image,
                is_visible: data.data.section_10.is_visible
              });

              _this.recruitment6Section.patchValue({
                heading: data.data.section_11.heading,
                description: data.data.section_11.description,
                Image: data.data.section_11.image,
                is_visible: data.data.section_11.is_visible
              });

              _this.testimonialsSection.patchValue({
                name1: data.data.section_12.heading1,
                description1: data.data.section_12.description1,
                designation1: data.data.section_12.degiganation1,
                Image1: data.data.section_12.image1,
                name2: data.data.section_12.heading2,
                description2: data.data.section_12.description2,
                designation2: data.data.section_12.degiganation2,
                Image2: data.data.section_12.image2,
                is_visible: data.data.section_12.is_visible
              });

              _this.storiesSection.patchValue({
                heading: data.data.section_13.heading,
                description: data.data.section_13.description,
                is_visible: data.data.section_13.is_visible
              });

              _this.knowmoreSection.patchValue({
                heading: data.data.section_14.heading,
                description: data.data.section_14.description,
                is_visible: data.data.section_14.is_visible
              });

              _this.benefitsSection.patchValue({
                is_visible: data.data.section_4.is_visible
              });

              data.data.section_4.data.forEach(function (element) {
                _this.benefitsArray.push(_this.fb.group({
                  heading: [element.heading, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
                  description: [element.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
                  image: [element.image, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                  county: ['']
                }));
              });
            });
          }
        }, {
          key: "setHeadingImage",
          value: function setHeadingImage(event) {
            var _this2 = this;

            console.log(event.target.files[0]);
            var file = event.target.files[0];
            var fileType = file.type.split("/")[0];
            console.log(fileType);

            if (fileType == "image") {
              this.headingImageObj = event.target.files[0];
              this.headerSection.patchValue({
                Image: this.headingImageObj
              });
              var reader = new FileReader();

              reader.onload = function (event) {
                _this2.HeadingImage = event.target.result;
              };

              reader.readAsDataURL(this.headingImageObj);
              this.headerSection.get('county').clearValidators(); // 6. Clear All Validators

              this.headerSection.get('county').updateValueAndValidity();
              console.log("rightextension", this.headerSection);
            } else {
              this.headerSection.get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator

              this.headerSection.get('county').updateValueAndValidity();
              console.log("wrongextension", this.headerSection);
            }
          }
        }, {
          key: "setHeadingImage1",
          value: function setHeadingImage1(event) {
            var _this3 = this;

            console.log(event.target.files[0]);
            var file = event.target.files[0];
            var fileType = file.type.split("/")[0];
            console.log(fileType);

            if (fileType == "image") {
              this.headingImageObj = event.target.files[0];
              this.recruitment1Section.patchValue({
                Image: this.headingImageObj
              });
              var reader = new FileReader();

              reader.onload = function (event) {
                _this3.HeadingImage1 = event.target.result;
              };

              reader.readAsDataURL(this.headingImageObj);
              this.recruitment1Section.get('county').clearValidators(); // 6. Clear All Validators

              this.recruitment1Section.get('county').updateValueAndValidity();
              console.log("rightextension", this.recruitment1Section);
            } else {
              this.recruitment1Section.get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator

              this.recruitment1Section.get('county').updateValueAndValidity();
              console.log("wrongextension", this.recruitment1Section);
            }
          }
        }, {
          key: "setHeadingImage2",
          value: function setHeadingImage2(event) {
            var _this4 = this;

            console.log(event.target.files[0]);
            var file = event.target.files[0];
            var fileType = file.type.split("/")[0];
            console.log(fileType);

            if (fileType == "image") {
              this.headingImageObj = event.target.files[0];
              this.recruitment2Section.patchValue({
                Image: this.headingImageObj
              });
              var reader = new FileReader();

              reader.onload = function (event) {
                _this4.HeadingImage2 = event.target.result;
              };

              reader.readAsDataURL(this.headingImageObj);
              this.recruitment2Section.get('county').clearValidators(); // 6. Clear All Validators

              this.recruitment2Section.get('county').updateValueAndValidity();
              console.log("rightextension", this.recruitment2Section);
            } else {
              this.recruitment2Section.get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator

              this.recruitment2Section.get('county').updateValueAndValidity();
              console.log("wrongextension", this.recruitment2Section);
            }
          }
        }, {
          key: "setHeadingImage3",
          value: function setHeadingImage3(event) {
            var _this5 = this;

            console.log(event.target.files[0]);
            var file = event.target.files[0];
            var fileType = file.type.split("/")[0];
            console.log(fileType);

            if (fileType == "image") {
              this.headingImageObj = event.target.files[0];
              this.recruitment3Section.patchValue({
                Image: this.headingImageObj
              });
              var reader = new FileReader();

              reader.onload = function (event) {
                _this5.HeadingImage3 = event.target.result;
              };

              reader.readAsDataURL(this.headingImageObj);
              this.recruitment3Section.get('county').clearValidators(); // 6. Clear All Validators

              this.recruitment3Section.get('county').updateValueAndValidity();
              console.log("rightextension", this.recruitment3Section);
            } else {
              this.recruitment3Section.get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator

              this.recruitment3Section.get('county').updateValueAndValidity();
              console.log("wrongextension", this.recruitment3Section);
            }
          }
        }, {
          key: "setHeadingImage4",
          value: function setHeadingImage4(event) {
            var _this6 = this;

            console.log(event.target.files[0]);
            var file = event.target.files[0];
            var fileType = file.type.split("/")[0];
            console.log(fileType);

            if (fileType == "image") {
              this.headingImageObj = event.target.files[0];
              this.recruitment4Section.patchValue({
                Image: this.headingImageObj
              });
              var reader = new FileReader();

              reader.onload = function (event) {
                _this6.HeadingImage4 = event.target.result;
              };

              reader.readAsDataURL(this.headingImageObj);
              this.recruitment4Section.get('county').clearValidators(); // 6. Clear All Validators

              this.recruitment4Section.get('county').updateValueAndValidity();
              console.log("rightextension", this.recruitment4Section);
            } else {
              this.recruitment4Section.get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator

              this.recruitment4Section.get('county').updateValueAndValidity();
              console.log("wrongextension", this.recruitment4Section);
            }
          }
        }, {
          key: "setHeadingImage5",
          value: function setHeadingImage5(event) {
            var _this7 = this;

            console.log(event.target.files[0]);
            var file = event.target.files[0];
            var fileType = file.type.split("/")[0];
            console.log(fileType);

            if (fileType == "image") {
              this.headingImageObj = event.target.files[0];
              this.recruitment5Section.patchValue({
                Image: this.headingImageObj
              });
              var reader = new FileReader();

              reader.onload = function (event) {
                _this7.HeadingImage5 = event.target.result;
              };

              reader.readAsDataURL(this.headingImageObj);
              this.recruitment5Section.get('county').clearValidators(); // 6. Clear All Validators

              this.recruitment5Section.get('county').updateValueAndValidity();
              console.log("rightextension", this.recruitment5Section);
            } else {
              this.recruitment5Section.get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator

              this.recruitment5Section.get('county').updateValueAndValidity();
              console.log("wrongextension", this.recruitment5Section);
            }
          }
        }, {
          key: "setHeadingImage6",
          value: function setHeadingImage6(event) {
            var _this8 = this;

            console.log(event.target.files[0]);
            var file = event.target.files[0];
            var fileType = file.type.split("/")[0];
            console.log(fileType);

            if (fileType == "image") {
              this.headingImageObj = event.target.files[0];
              this.recruitment6Section.patchValue({
                Image: this.headingImageObj
              });
              var reader = new FileReader();

              reader.onload = function (event) {
                _this8.HeadingImage6 = event.target.result;
              };

              reader.readAsDataURL(this.headingImageObj);
              this.recruitment6Section.get('county').clearValidators(); // 6. Clear All Validators

              this.recruitment6Section.get('county').updateValueAndValidity();
              console.log("rightextension", this.recruitment6Section);
            } else {
              this.recruitment6Section.get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator

              this.recruitment6Section.get('county').updateValueAndValidity();
              console.log("wrongextension", this.recruitment6Section);
            }
          }
        }, {
          key: "setHeadingImage7",
          value: function setHeadingImage7(event) {
            var _this9 = this;

            console.log(event.target.files[0]);
            var file = event.target.files[0];
            var fileType = file.type.split("/")[0];
            console.log(fileType);

            if (fileType == "image") {
              this.headingImageObj = event.target.files[0];
              this.testimonialsSection.patchValue({
                Image: this.headingImageObj
              });
              var reader = new FileReader();

              reader.onload = function (event) {
                _this9.HeadingImage7 = event.target.result;
              };

              reader.readAsDataURL(this.headingImageObj);
              this.testimonialsSection.get('county').clearValidators(); // 6. Clear All Validators

              this.testimonialsSection.get('county').updateValueAndValidity();
              console.log("rightextension", this.testimonialsSection);
            } else {
              this.testimonialsSection.get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator

              this.testimonialsSection.get('county').updateValueAndValidity();
              console.log("wrongextension", this.testimonialsSection);
            }
          }
        }, {
          key: "setHeadingImage8",
          value: function setHeadingImage8(event) {
            var _this10 = this;

            console.log(event.target.files[0]);
            var file = event.target.files[0];
            var fileType = file.type.split("/")[0];
            console.log(fileType);

            if (fileType == "image") {
              this.headingImageObj1 = event.target.files[0];
              this.testimonialsSection.patchValue({
                Image1: this.headingImageObj1
              });
              var reader = new FileReader();

              reader.onload = function (event) {
                _this10.HeadingImage8 = event.target.result;
              };

              reader.readAsDataURL(this.headingImageObj1);
              this.testimonialsSection.get('county1').clearValidators(); // 6. Clear All Validators

              this.testimonialsSection.get('county1').updateValueAndValidity();
              console.log("rightextension", this.testimonialsSection);
            } else {
              this.testimonialsSection.get('county1').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator

              this.testimonialsSection.get('county1').updateValueAndValidity();
              console.log("wrongextension", this.testimonialsSection);
            }
          }
        }, {
          key: "setHeadingImage9",
          value: function setHeadingImage9(event) {
            var _this11 = this;

            console.log(event.target.files[0]);
            var file = event.target.files[0];
            var fileType = file.type.split("/")[0];
            console.log(fileType);

            if (fileType == "image") {
              this.headingImageObj = event.target.files[0];
              this.agencySection.patchValue({
                Image: this.headingImageObj
              });
              var reader = new FileReader();

              reader.onload = function (event) {
                _this11.HeadingImage9 = event.target.result;
              };

              reader.readAsDataURL(this.headingImageObj);
              this.agencySection.get('county').clearValidators(); // 6. Clear All Validators

              this.agencySection.get('county').updateValueAndValidity();
              console.log("rightextension", this.agencySection);
            } else {
              this.agencySection.get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator

              this.agencySection.get('county').updateValueAndValidity();
              console.log("wrongextension", this.agencySection);
            }
          }
        }, {
          key: "onBenefitChangeImage",
          value: function onBenefitChangeImage(e, index) {
            var _this12 = this;

            console.log("ind", index);
            var file = e.target.files[0];
            var fileType = file.type.split("/")[0];
            console.log(fileType);

            if (fileType == "image") {
              this.selectedfile = e.target.files[0];
              var formData = new FormData();
              formData.append('image', this.selectedfile);
              this.Service.uploadbenefitmedia(formData).subscribe(function (resp) {
                console.log("image response ==>", resp);

                _this12.benefitsArray.at(index).patchValue({
                  image: resp
                });

                console.log("full form", _this12.benefitsSection);
              });
              this.benefitsArray.controls[index].get('county').clearValidators(); // 6. Clear All Validators

              this.benefitsArray.controls[index].get('county').updateValueAndValidity();
              console.log("rightextension", this.benefitsSection);
              console.log("gussa na dila", this.benefitsArray);
            } else {
              this.benefitsArray.controls[index].get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator

              this.benefitsArray.controls[index].get('county').updateValueAndValidity();
              console.log("wrongectension", this.benefitsSection);
              console.log("gussa na dila", this.benefitsArray);
            }
          }
        }, {
          key: "postcontent",
          value: function postcontent(type) {
            var _this13 = this;

            var obj;
            console.log("type==>", type);

            if (type == 'header') {
              if (this.headerSection.valid) {
                var formdata = new FormData();
                this.content_id = "6214a49299814ab6e4f4338e";
                formdata.append("content_id", this.content_id);

                if (this.headingImageObj) {
                  var section_1 = {
                    heading: this.headerSection.controls['heading'].value,
                    description: this.headerSection.controls['subheading'].value,
                    is_visible: this.headerSection.controls['is_visible'].value
                  };
                  formdata.append("section_1", JSON.stringify(section_1));
                  formdata.append("image", this.headingImageObj);
                } else {
                  var _section_ = {
                    heading: this.headerSection.controls['heading'].value,
                    description: this.headerSection.controls['subheading'].value,
                    is_visible: this.headerSection.controls['is_visible'].value,
                    image: this.headerSection.controls['Image'].value
                  };
                  formdata.append("section_1", JSON.stringify(_section_)); //formdata.append("image", this.HeadingImage)
                }

                obj = formdata;
              } else {
                this.headerSection.markAllAsTouched();
                return;
              }
            }

            if (type == 'whygraduates') {
              if (this.whytopgraduatesSection.valid) {
                var _formdata = new FormData();

                var section_2 = {
                  heading: this.whytopgraduatesSection.controls['heading'].value,
                  is_visible: this.whytopgraduatesSection.controls['is_visible'].value
                };

                _formdata.append("section_2", JSON.stringify(section_2));

                this.content_id = "6214a49299814ab6e4f4338e";

                _formdata.append("content_id", this.content_id);

                obj = _formdata;
              } else {
                this.whytopgraduatesSection.markAllAsTouched();
                return;
              }
            }

            if (type == 'agency') {
              if (this.agencySection.valid) {
                var _formdata2 = new FormData();

                this.content_id = "6214a49299814ab6e4f4338e";

                _formdata2.append("content_id", this.content_id);

                if (this.headingImageObj) {
                  var section_3 = {
                    heading: this.agencySection.controls['description'].value,
                    is_visible: this.agencySection.controls['is_visible'].value
                  };

                  _formdata2.append("section_3", JSON.stringify(section_3));

                  _formdata2.append("image", this.headingImageObj);
                } else {
                  var _section_2 = {
                    heading: this.agencySection.controls['description'].value,
                    is_visible: this.agencySection.controls['is_visible'].value,
                    image: this.agencySection.controls['image'].value
                  };

                  _formdata2.append("section_3", JSON.stringify(_section_2)); //formdata.append("image", this.HeadingImage9)

                }

                obj = _formdata2;
              } else {
                this.agencySection.markAllAsTouched();
                return;
              }
            }

            if (type == 'essentials') {
              if (this.essentialsSection.valid) {
                var _formdata3 = new FormData();

                var section_5 = {
                  description: this.essentialsSection.controls['description'].value,
                  is_visible: this.essentialsSection.controls['is_visible'].value
                };

                _formdata3.append("section_5", JSON.stringify(section_5));

                this.content_id = "6214a49299814ab6e4f4338e";

                _formdata3.append("content_id", this.content_id);

                obj = _formdata3;
              } else {
                this.essentialsSection.markAllAsTouched();
                return;
              }
            }

            if (type == 'recruitment1') {
              if (this.recruitment1Section.valid) {
                var _formdata4 = new FormData();

                this.content_id = "6214a49299814ab6e4f4338e";

                _formdata4.append("content_id", this.content_id);

                if (this.headingImageObj) {
                  var section_6 = {
                    heading: this.recruitment1Section.controls['heading'].value,
                    description: this.recruitment1Section.controls['description'].value,
                    is_visible: this.recruitment1Section.controls['is_visible'].value
                  };

                  _formdata4.append("section_6", JSON.stringify(section_6));

                  _formdata4.append("image", this.headingImageObj);
                } else {
                  var _section_3 = {
                    heading: this.recruitment1Section.controls['heading'].value,
                    description: this.recruitment1Section.controls['description'].value,
                    is_visible: this.recruitment1Section.controls['is_visible'].value,
                    image: this.recruitment1Section.controls['Image'].value
                  };

                  _formdata4.append("section_6", JSON.stringify(_section_3)); //formdata.append("image", this.HeadingImage1)

                }

                obj = _formdata4;
              } else {
                this.recruitment1Section.markAllAsTouched();
                return;
              }
            }

            if (type == 'recruitment2') {
              if (this.recruitment2Section.valid) {
                var _formdata5 = new FormData();

                this.content_id = "6214a49299814ab6e4f4338e";

                _formdata5.append("content_id", this.content_id);

                if (this.headingImageObj) {
                  var section_7 = {
                    heading: this.recruitment2Section.controls['heading'].value,
                    description: this.recruitment2Section.controls['description'].value,
                    is_visible: this.recruitment2Section.controls['is_visible'].value
                  };

                  _formdata5.append("section_7", JSON.stringify(section_7));

                  _formdata5.append("image", this.headingImageObj);
                } else {
                  var _section_4 = {
                    heading: this.recruitment2Section.controls['heading'].value,
                    description: this.recruitment2Section.controls['description'].value,
                    is_visible: this.recruitment2Section.controls['is_visible'].value,
                    image: this.recruitment2Section.controls['Image'].value
                  };

                  _formdata5.append("section_7", JSON.stringify(_section_4)); //formdata.append("image", this.HeadingImage2)

                }

                obj = _formdata5;
              } else {
                this.recruitment2Section.markAllAsTouched();
                return;
              }
            }

            if (type == 'recruitment3') {
              if (this.recruitment3Section.valid) {
                var _formdata6 = new FormData();

                this.content_id = "6214a49299814ab6e4f4338e";

                _formdata6.append("content_id", this.content_id);

                if (this.headingImageObj) {
                  var section_8 = {
                    heading: this.recruitment3Section.controls['heading'].value,
                    description: this.recruitment3Section.controls['description'].value,
                    is_visible: this.recruitment3Section.controls['is_visible'].value
                  };

                  _formdata6.append("section_8", JSON.stringify(section_8));

                  _formdata6.append("image", this.headingImageObj);
                } else {
                  var _section_5 = {
                    heading: this.recruitment3Section.controls['heading'].value,
                    description: this.recruitment3Section.controls['description'].value,
                    is_visible: this.recruitment3Section.controls['is_visible'].value,
                    image: this.recruitment3Section.controls['Image'].value
                  };

                  _formdata6.append("section_8", JSON.stringify(_section_5)); //formdata.append("image", this.HeadingImage3)

                }

                obj = _formdata6;
              } else {
                this.recruitment3Section.markAllAsTouched();
                return;
              }
            }

            if (type == 'recruitment4') {
              if (this.recruitment4Section.valid) {
                var _formdata7 = new FormData();

                this.content_id = "6214a49299814ab6e4f4338e";

                _formdata7.append("content_id", this.content_id);

                if (this.headingImageObj) {
                  var section_9 = {
                    heading: this.recruitment4Section.controls['heading'].value,
                    description: this.recruitment4Section.controls['description'].value,
                    is_visible: this.recruitment4Section.controls['is_visible'].value
                  };

                  _formdata7.append("section_9", JSON.stringify(section_9));

                  _formdata7.append("image", this.headingImageObj);
                } else {
                  var _section_6 = {
                    heading: this.recruitment4Section.controls['heading'].value,
                    description: this.recruitment4Section.controls['description'].value,
                    is_visible: this.recruitment4Section.controls['is_visible'].value,
                    image: this.recruitment4Section.controls['Image'].value
                  };

                  _formdata7.append("section_9", JSON.stringify(_section_6)); //formdata.append("image", this.HeadingImage4)

                }

                obj = _formdata7;
              } else {
                this.recruitment4Section.markAllAsTouched();
                return;
              }
            }

            if (type == 'recruitment5') {
              if (this.recruitment5Section.valid) {
                var _formdata8 = new FormData();

                this.content_id = "6214a49299814ab6e4f4338e";

                _formdata8.append("content_id", this.content_id);

                if (this.headingImageObj) {
                  var section_10 = {
                    heading: this.recruitment5Section.controls['heading'].value,
                    description: this.recruitment5Section.controls['description'].value,
                    is_visible: this.recruitment5Section.controls['is_visible'].value
                  };

                  _formdata8.append("section_10", JSON.stringify(section_10));

                  _formdata8.append("image", this.headingImageObj);
                } else {
                  var _section_7 = {
                    heading: this.recruitment5Section.controls['heading'].value,
                    description: this.recruitment5Section.controls['description'].value,
                    is_visible: this.recruitment5Section.controls['is_visible'].value,
                    image: this.recruitment5Section.controls['Image'].value
                  };

                  _formdata8.append("section_10", JSON.stringify(_section_7)); //formdata.append("image", this.HeadingImage5)

                }

                obj = _formdata8;
              } else {
                this.recruitment5Section.markAllAsTouched();
                return;
              }
            }

            if (type == 'recruitment6') {
              if (this.recruitment6Section.valid) {
                var _formdata9 = new FormData();

                this.content_id = "6214a49299814ab6e4f4338e";

                _formdata9.append("content_id", this.content_id);

                if (this.headingImageObj) {
                  var section_11 = {
                    heading: this.recruitment6Section.controls['heading'].value,
                    description: this.recruitment6Section.controls['description'].value,
                    is_visible: this.recruitment6Section.controls['is_visible'].value
                  };

                  _formdata9.append("section_11", JSON.stringify(section_11));

                  _formdata9.append("image", this.headingImageObj);
                } else {
                  var _section_8 = {
                    heading: this.recruitment6Section.controls['heading'].value,
                    description: this.recruitment6Section.controls['description'].value,
                    is_visible: this.recruitment6Section.controls['is_visible'].value,
                    image: this.recruitment6Section.controls['Image'].value
                  };

                  _formdata9.append("section_11", JSON.stringify(_section_8)); //formdata.append("image", this.HeadingImage6)

                }

                obj = _formdata9;
              } else {
                this.recruitment6Section.markAllAsTouched();
                return;
              }
            }

            if (type == 'testimonials') {
              if (this.testimonialsSection.valid) {
                console.log("both testimonials", this.testimonialsSection);

                var _formdata10 = new FormData();

                var section_12 = {
                  heading1: this.testimonialsSection.controls['name1'].value,
                  description1: this.testimonialsSection.controls['description1'].value,
                  degiganation1: this.testimonialsSection.controls['designation1'].value,
                  heading2: this.testimonialsSection.controls['name2'].value,
                  description2: this.testimonialsSection.controls['description2'].value,
                  degiganation2: this.testimonialsSection.controls['designation2'].value,
                  is_visible: this.testimonialsSection.controls['is_visible'].value,
                  image1: this.HeadingImage7,
                  image2: this.HeadingImage8
                };

                _formdata10.append("section_12", JSON.stringify(section_12));

                this.content_id = "6214a49299814ab6e4f4338e";

                _formdata10.append("content_id", this.content_id);

                if (this.headingImageObj) {
                  _formdata10.append("image1", this.headingImageObj);
                }

                if (this.headingImageObj1) {
                  _formdata10.append("image2", this.headingImageObj1);
                }

                obj = _formdata10;
              } else {
                this.testimonialsSection.markAllAsTouched();
                return;
              }
            }

            if (type == 'stories') {
              if (this.storiesSection.valid) {
                var _formdata11 = new FormData();

                var section_13 = {
                  heading: this.storiesSection.controls['heading'].value,
                  description: this.storiesSection.controls['description'].value,
                  is_visible: this.storiesSection.controls['is_visible'].value
                };

                _formdata11.append("section_13", JSON.stringify(section_13));

                this.content_id = "6214a49299814ab6e4f4338e";

                _formdata11.append("content_id", this.content_id);

                obj = _formdata11;
              } else {
                this.storiesSection.markAllAsTouched();
                return;
              }
            }

            if (type == 'knowmore') {
              if (this.knowmoreSection.valid) {
                var _formdata12 = new FormData();

                var section_14 = {
                  heading: this.knowmoreSection.controls['heading'].value,
                  description: this.knowmoreSection.controls['description'].value,
                  is_visible: this.knowmoreSection.controls['is_visible'].value
                };

                _formdata12.append("section_14", JSON.stringify(section_14));

                this.content_id = "6214a49299814ab6e4f4338e";

                _formdata12.append("content_id", this.content_id);

                obj = _formdata12;
              } else {
                this.knowmoreSection.markAllAsTouched();
                return;
              }
            }

            if (type == 'benefits') {
              if (this.benefitsSection.valid) {
                if (this.benefitsArray.valid) {
                  var _formdata13 = new FormData();

                  var section_4 = {
                    data: this.benefitsSection.get('benefitsArray').value,
                    is_visible: this.benefitsSection.controls['is_visible'].value
                  };

                  _formdata13.append("section_4", JSON.stringify(section_4));

                  this.content_id = "6214a49299814ab6e4f4338e";

                  _formdata13.append("content_id", this.content_id);

                  obj = _formdata13;
                } else {
                  this.benefitsArray.markAllAsTouched();
                  return;
                }
              }
            }

            this.Service.postRecruitmentContent(obj).subscribe(function (resp) {
              _this13.Service.showMessage({
                message: "Submitted Successfully"
              });
            });
          }
        }]);

        return RecruitmentSolutionsManagementComponent;
      }();

      RecruitmentSolutionsManagementComponent.ctorParameters = function () {
        return [{
          type: _topgradservice_service__WEBPACK_IMPORTED_MODULE_7__["TopgradserviceService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      RecruitmentSolutionsManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-recruitment-solutions-management',
        template: _raw_loader_recruitment_solutions_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_recruitment_solutions_management_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_topgradservice_service__WEBPACK_IMPORTED_MODULE_7__["TopgradserviceService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], RecruitmentSolutionsManagementComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-recruitment-solutions-management-recruitment-solutions-management-module-es5.js.map