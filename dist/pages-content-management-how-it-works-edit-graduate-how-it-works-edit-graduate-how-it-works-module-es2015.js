(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-management-how-it-works-edit-graduate-how-it-works-edit-graduate-how-it-works-module"],{

/***/ "A/Dx":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/content-management/how-it-works/edit-graduate-how-it-works/edit-graduate-how-it-works-routing.module.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: EditGraduateHowItWorksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGraduateHowItWorksRoutingModule", function() { return EditGraduateHowItWorksRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_graduate_how_it_works_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-graduate-how-it-works.component */ "xEAR");




const routes = [
    {
        path: '',
        component: _edit_graduate_how_it_works_component__WEBPACK_IMPORTED_MODULE_3__["EditGraduateHowItWorksComponent"]
    }
];
let EditGraduateHowItWorksRoutingModule = class EditGraduateHowItWorksRoutingModule {
};
EditGraduateHowItWorksRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EditGraduateHowItWorksRoutingModule);



/***/ }),

/***/ "It7e":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content-management/how-it-works/edit-graduate-how-it-works/edit-graduate-how-it-works.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"employer-header-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form1\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Graduate Header Section</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Title</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"title\"></editor>\n\t\t\t\t\t\t\t\t\t\t<!-- <label>Title</label> -->\n\t\t\t\t\t\t\t\t\t\t<!-- <input type=\"text\" name=\"\" class=\"form-control\" value=\"Finding graduate talent made easy.\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- <input class=\"form-control\" row=\"3\" name=\"title\" placeholder=\"type here title\"\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"title\"> -->\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form1.controls.title?.touched || section_form1.controls.title?.dirty) \n\t\t\t\t\t\t\t\t\t&& section_form1.controls.title?.invalid && section_form1.controls.title?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter title here....\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Banner Image</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage1?HeadingImage1:'assets/img/graduate_hw.png'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" title=\"\" class=\"img-input-upld\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"setHeadingImage1($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"section_form1.controls.county?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editgraduateHowItWorks1(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"whychose-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form2\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Why choose TopGrads</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<!-- <input type=\"text\" name=\"\" class=\"form-control\" value=\"Why choose TopGrads?\"> -->\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" row=\"3\" name=\"heading1\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Type here Heading\" formControlName=\"heading1\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form2.controls.heading1?.touched || section_form2.controls.heading1?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form2.controls.heading1?.errors?.required && section_form2.controls.heading1?.invalid\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enetr heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description1\"></editor>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form2.controls.description1?.touched || section_form2.controls.description1?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form2.controls.description1?.errors?.required && section_form2.controls.description1?.invalid\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enetr description....\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Section Image</label>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage2?HeadingImage2:'assets/img/graduate_hit.png'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" title=\"\" class=\"img-input-upld\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"setHeadingImage2($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"section_form1.controls.county?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- </div> -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editgraduateHowItWorks2(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"work-for-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form3\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>We do the work for you.</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" row=\"3\" name=\"heading2\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Type here Heading\" formControlName=\"heading2\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form3.controls.heading2?.touched || section_form3.controls.heading2?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form3.controls.heading2?.errors?.required && section_form3.controls.heading2?.invalid\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enetr heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editgraduateHowItWorks3(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"candidate-animate-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form4\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Candidate Profile Animation</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<ng-container formArrayName=\"graduateArray1\"\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let alias of section_form4.controls['graduateArray1'].controls; let i=index\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-container [formGroupName]=\"i\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>{{graduateArray1.controls[i].controls['name'].value}}</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"graduateArray1.controls[i].controls['image'].value ? graduateArray1.controls[i].controls['image'].value:'assets/img/refernce.svg'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\" (change)=\"sectionsImg($event,i)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"graduateArray1.controls[i]?.controls['image']?.errors?.required \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"graduateArray1.controls[i]?.controls['image']?.county?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editGraduateHowItWorks('section')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"opportunities-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form5\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Let opportunities approach you</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" row=\"3\" name=\"heading3\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Type here Heading\" formControlName=\"heading3\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form5.controls.heading3?.touched || section_form5.controls.heading3?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form5.controls.heading3?.errors?.required && section_form5.controls.heading3?.invalid\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enetr heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description2\"></editor>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form5.controls.description2?.touched || section_form5.controls.description2?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form5.controls.description2?.errors?.required && section_form5.controls.description2?.invalid\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enetr description....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editgraduateHowItWorks5(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n\n<!-- Listing of candidate profiles -->\n<section class=\"profile-match-listing\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form6\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Profile Match Listing</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>No. of Listings to be displayed</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" row=\"3\" name=\"listing1\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Type here Listing\" formControlName=\"listing1\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form6.controls.listing1?.touched || section_form6.controls.listing1?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form6.controls.listing1?.errors?.required && section_form6.controls.listing1?.invalid\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please listing to be displayed....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editgraduateHowItWorks6(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"perfectjob-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form7\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>We match you with the perfect job</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" row=\"3\" name=\"heading4\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Type here Heading\" formControlName=\"heading4\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form7.controls.heading4?.touched || section_form7.controls.heading4?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form7.controls.heading4?.errors?.required && section_form7.controls.heading4?.invalid\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enetr heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description3\"></editor>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form7.controls.description3?.touched || section_form7.controls.description3?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form7.controls.description3?.errors?.required && section_form7.controls.description3?.invalid\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enetr description....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editgraduateHowItWorks7(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"Trackprogress-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form8\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Track your progress with a transparent process</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" row=\"3\" name=\"heading5\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Type here Heading\" formControlName=\"heading5\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form8.controls.heading5?.touched || section_form8.controls.heading5?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form8.controls.heading5?.errors?.required && section_form8.controls.heading5?.invalid\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enetr heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editgraduateHowItWorks8(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"organise&progress-components\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form9\" >\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t<strong>Graduate Dashoboard Components</strong>\n\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\"></mat-slide-toggle>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t<div class=\"imag_upld_prvw mb-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let item of dropImages ;let i=index\" \n\t\t\t\t\t\t\t\t\t\t class=\"col-sm-2 img_cols\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"upld-img-holdr\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon type=\"button\" >highlight_off</mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon type=\"button\" (click)=\"onRemove1(item)\">highlight_off</mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"upld-img-holdr\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon>highlight_off</mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/refernce.svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon>highlight_off</mat-icon>\t\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"enable-organise\">\n\t\t\t\t\t\t\t\t\t\t<ngx-dropzone  class=\"custom-dropzone\" ngx-dropzone [accept]=\"'image/*'\" (change)=\"onSelect($event)\" >\n\t\t\t\t\t\t\t\t\t\t\t<ngx-dropzone-label>Drop your images here!</ngx-dropzone-label>\n\t\t\t\t\t\t\t\t\t\t\t<ngx-dropzone-image-preview *ngFor=\"let f of files;let i=index\" ngProjectAs=\"ngx-dropzone-preview\" [file]=\"f\"\n\t\t\t\t\t\t\t\t\t\t\t [removable]=\"true\" (removed)=\"onRemove(f)\"> \n\t\t\t\t\t\t\t\t\t\t\t\t<ngx-dropzone-label> </ngx-dropzone-label>\n\t\t\t\t\t\t\t\t\t\t\t</ngx-dropzone-image-preview>\n\t\t\t\t\t\t\t\t\t\t</ngx-dropzone>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"editgraduateHowItWorks9()\">Save</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"PersonalisedDashboard-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form10\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Your Personalised Dashboard</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" row=\"3\" name=\"heading6\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Type here Heading\" formControlName=\"heading6\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form10.controls.heading6?.touched || section_form10.controls.heading6?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form10.controls.heading6?.errors?.required && section_form10.controls.heading6?.invalid\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enetr heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description4\"></editor>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form10.controls.description4?.touched || section_form10.controls.description4?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form10.controls.description4?.errors?.required && section_form10.controls.description4?.invalid\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enetr description....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editgraduateHowItWorks10(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"progress-animation-blocks\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form11\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Progress Animation Blocks</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<ng-container formArrayName=\"graduateArray\"\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let alias of section_form11.controls['graduateArray'].controls; let i=index\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-container [formGroupName]=\"i\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"anime-blocks\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Tab {{i+1}} text</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Easily edited online\" formControlName=\"heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"graduateArray.controls[i]?.controls['heading']?.errors?.required  \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please enter tab\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"graduateArray.controls[i]?.controls['heading']?.errors?.maxlength  \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Image</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"graduateArray.controls[i].controls['image'].value ? graduateArray.controls[i].controls['image'].value:'assets/img/refernce.svg'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\" (change)=\"graduateHeadingImg($event,i)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"graduateArray.controls[i]?.controls['image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"graduateArray.controls[i]?.controls['image']?.county?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"editGraduateHowItWorks('anime')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"See-the-progress\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form12\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>See the progress of your applications and interviews</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" row=\"3\" name=\"heading7\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Type here Heading\" formControlName=\"heading7\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form12.controls.heading7?.touched || section_form12.controls.heading7?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form12.controls.heading7?.errors?.required && section_form12.controls.heading7?.invalid\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enetr heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description5\"></editor>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form12.controls.description5?.touched || section_form12.controls.description5?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form12.controls.description5?.errors?.required && section_form12.controls.description5?.invalid\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enetr description....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editgraduateHowItWorks12(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"interview-status\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form13\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Interview Status Listing</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>No. of Listings to be displayed</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" row=\"3\" name=\"listing1\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Type here Listing\" formControlName=\"listing2\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form13.controls.listing2?.touched || section_form13.controls.listing2?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form13.controls.listing2?.errors?.required && section_form13.controls.listing2?.invalid\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please listing to be displayed....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editgraduateHowItWorks13(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"Seek-feedback\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form14\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Seek feedback with a click</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" row=\"3\" name=\"heading8\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Type here Heading\" formControlName=\"heading8\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form14.controls.heading8?.touched || section_form14.controls.heading8?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form14.controls.heading8?.errors?.required && section_form14.controls.heading8?.invalid\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enetr heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description6\"></editor>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form14.controls.description6?.touched || section_form14.controls.description6?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form14.controls.description6?.errors?.required && section_form14.controls.description6?.invalid\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enetr description....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editgraduateHowItWorks14(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"Apply-with-no-sweat\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form15\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Apply with no sweat, and make an impression</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" row=\"3\" name=\"heading9\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Type here Heading\" formControlName=\"heading9\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form15.controls.heading9?.touched || section_form15.controls.heading9?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form15.controls.heading9?.errors?.required && section_form15.controls.heading9?.invalid\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enetr heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editgraduateHowItWorks15(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"Pre-filled-applications\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form16\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Pre filled applications ready to submit</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" row=\"3\" name=\"heading10\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Type here Heading\" formControlName=\"heading10\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form16.controls.heading10?.touched || section_form16.controls.heading10?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form16.controls.heading10?.errors?.required && section_form16.controls.heading10?.invalid\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enetr heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description7\"></editor>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form16.controls.description7?.touched || section_form16.controls.description7?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form16.controls.description7?.errors?.required && section_form16.controls.description7?.invalid\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enetr description....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editgraduateHowItWorks16(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"Get-Endorsed\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form17\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Get Endorsed</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" row=\"3\" name=\"heading11\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Type here Heading\" formControlName=\"heading11\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form17.controls.heading11?.touched || section_form17.controls.heading11?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form17.controls.heading11?.errors?.required && section_form17.controls.heading11?.invalid\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enetr heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description8\"></editor>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form17.controls.description8?.touched || section_form17.controls.description8?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form17.controls.description8?.errors?.required && section_form17.controls.description8?.invalid\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red;\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enetr description....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editgraduateHowItWorks17(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"employer-footer-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form18\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Graduate Footer</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Footer Image</label>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage4?HeadingImage4:'assets/img/gard-footer.png'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" title=\"\" class=\"img-input-upld\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"setHeadingImage4($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"section_form1.controls.county?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editgraduateHowItWorks18(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n");

/***/ }),

/***/ "sFuJ":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/content-management/how-it-works/edit-graduate-how-it-works/edit-graduate-how-it-works.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: EditGraduateHowItWorksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGraduateHowItWorksModule", function() { return EditGraduateHowItWorksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-dropzone */ "kvL/");
/* harmony import */ var _edit_graduate_how_it_works_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-graduate-how-it-works-routing.module */ "A/Dx");
/* harmony import */ var _edit_graduate_how_it_works_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-graduate-how-it-works.component */ "xEAR");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "fB2i");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










let EditGraduateHowItWorksModule = class EditGraduateHowItWorksModule {
};
EditGraduateHowItWorksModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _edit_graduate_how_it_works_component__WEBPACK_IMPORTED_MODULE_5__["EditGraduateHowItWorksComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_6__["EditorModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__["NgxDropzoneModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _edit_graduate_how_it_works_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditGraduateHowItWorksRoutingModule"]
        ]
    })
], EditGraduateHowItWorksModule);



/***/ }),

/***/ "va6V":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/content-management/how-it-works/edit-graduate-how-it-works/edit-graduate-how-it-works.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWdyYWR1YXRlLWhvdy1pdC13b3Jrcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "xEAR":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/content-management/how-it-works/edit-graduate-how-it-works/edit-graduate-how-it-works.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: EditGraduateHowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGraduateHowItWorksComponent", function() { return EditGraduateHowItWorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_graduate_how_it_works_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-graduate-how-it-works.component.html */ "It7e");
/* harmony import */ var _edit_graduate_how_it_works_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-graduate-how-it-works.component.scss */ "va6V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _topgradservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../topgradservice.service */ "DL5e");








let EditGraduateHowItWorksComponent = class EditGraduateHowItWorksComponent {
    constructor(_snackBar, fb, route, Service, router) {
        this._snackBar = _snackBar;
        this.fb = fb;
        this.route = route;
        this.Service = Service;
        this.router = router;
        this.HeadingImage6 = [];
        this.dropImages = [];
        this.previousImage = [];
        this.files = [];
        this.imageFile = [];
        this.section_form1 = this.fb.group({
            title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Image: ['',],
            is_visible: [''],
            county: ['']
        });
        this.section_form2 = this.fb.group({
            heading1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Image: ['',],
            is_visible: [''],
            county: ['']
        });
        this.section_form3 = this.fb.group({
            heading2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form4 = this.fb.group({
            'is_visible': [''],
            'graduateArray1': this.fb.array([])
        });
        this.section_form5 = this.fb.group({
            heading3: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form6 = this.fb.group({
            listing1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form7 = this.fb.group({
            heading4: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description3: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form8 = this.fb.group({
            heading5: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form9 = this.fb.group({
            'images': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            'is_visible': [''],
            'county': [''],
        });
        this.section_form10 = this.fb.group({
            heading6: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description4: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form11 = this.fb.group({
            'is_visible': [''],
            'graduateArray': this.fb.array([])
        });
        this.section_form12 = this.fb.group({
            heading7: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description5: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form13 = this.fb.group({
            listing2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form14 = this.fb.group({
            heading8: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description6: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form15 = this.fb.group({
            heading9: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form16 = this.fb.group({
            heading10: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description7: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form17 = this.fb.group({
            heading11: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description8: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form18 = this.fb.group({
            Image: ['',],
            county: [''],
            is_visible: [''],
        });
    }
    ngOnInit() {
        this.getContent();
    }
    get graduateArray() {
        return this.section_form11.get('graduateArray');
    }
    get graduateArray1() {
        return this.section_form4.get('graduateArray1');
    }
    setHeadingImage1(event) {
        var _a, _b, _c, _d;
        console.log(event.target.files[0]);
        const file = event.target.files[0];
        const fileType = file.type.split("/")[0];
        console.log(fileType);
        console.log('sdsafdff', this.section_form1);
        if (fileType == "image") {
            this.headingImageObj = event.target.files[0];
            this.section_form1.patchValue({
                Image: this.headingImageObj,
            });
            let reader = new FileReader();
            reader.onload = (event) => {
                this.HeadingImage1 = event.target.result;
            };
            reader.readAsDataURL(this.headingImageObj);
            (_a = this.section_form1.get('county')) === null || _a === void 0 ? void 0 : _a.clearValidators();
            (_b = this.section_form1.get('county')) === null || _b === void 0 ? void 0 : _b.updateValueAndValidity();
            console.log("rightextension", this.section_form1);
        }
        else {
            (_c = this.section_form1.get('county')) === null || _c === void 0 ? void 0 : _c.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            (_d = this.section_form1.get('county')) === null || _d === void 0 ? void 0 : _d.updateValueAndValidity();
            console.log("wrongextension", this.section_form1);
        }
    }
    setHeadingImage2(event) {
        var _a, _b, _c, _d;
        console.log(event.target.files[0]);
        const file = event.target.files[0];
        const fileType = file.type.split("/")[0];
        console.log(fileType);
        console.log('sdsafdff', this.section_form2);
        if (fileType == "image") {
            this.headingImageObj = event.target.files[0];
            this.section_form2.patchValue({
                Image: this.headingImageObj,
            });
            let reader = new FileReader();
            reader.onload = (event) => {
                this.HeadingImage2 = event.target.result;
            };
            reader.readAsDataURL(this.headingImageObj);
            (_a = this.section_form2.get('county')) === null || _a === void 0 ? void 0 : _a.clearValidators();
            (_b = this.section_form2.get('county')) === null || _b === void 0 ? void 0 : _b.updateValueAndValidity();
            console.log("rightextension", this.section_form2);
        }
        else {
            (_c = this.section_form2.get('county')) === null || _c === void 0 ? void 0 : _c.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            (_d = this.section_form2.get('county')) === null || _d === void 0 ? void 0 : _d.updateValueAndValidity();
            console.log("wrongextension", this.section_form2);
        }
    }
    sectionsImg(e, index) {
        console.log("index", index);
        const file = e.target.files[0];
        const fileType = file.type.split("/")[0];
        if (fileType == "image") {
            this.selectedfile = e.target.files[0];
            const formData = new FormData();
            formData.append('image', this.selectedfile);
            this.Service.uploadEditGraduateHowItsWorks(formData).subscribe((res) => {
                console.log("image response ==>", res);
                console.log("graduate array", this.graduateArray1);
                this.graduateArray1.at(index).patchValue({
                    image: res
                });
            });
            this.graduateArray1.controls[index].get('county').clearValidators();
            this.graduateArray1.controls[index].get('county').updateValueAndValidity();
        }
        else {
            this.graduateArray1.controls[index].get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.graduateArray1.controls[index].get('county').updateValueAndValidity();
        }
    }
    graduateHeadingImg(e, index) {
        console.log("index", index);
        const file = e.target.files[0];
        const fileType = file.type.split("/")[0];
        if (fileType == "image") {
            this.selectedfile = e.target.files[0];
            const formData = new FormData();
            formData.append('image', this.selectedfile);
            this.Service.uploadEditGraduateHowItsWorks(formData).subscribe((res) => {
                console.log("image response ==>", res);
                this.graduateArray.at(index).patchValue({
                    image: res
                });
            });
            this.graduateArray.controls[index].get('county').clearValidators();
            this.graduateArray.controls[index].get('county').updateValueAndValidity();
        }
        else {
            this.graduateArray.controls[index].get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.graduateArray.controls[index].get('county').updateValueAndValidity();
        }
    }
    setHeadingImage4(event) {
        var _a, _b, _c, _d;
        console.log(event.target.files[0]);
        const file = event.target.files[0];
        const fileType = file.type.split("/")[0];
        console.log(fileType);
        console.log('sdsafdff', this.section_form18);
        if (fileType == "image") {
            // console.log("in");
            this.headingImageObj = event.target.files[0];
            this.section_form18.patchValue({
                Image: this.headingImageObj,
            });
            let reader = new FileReader();
            reader.onload = (event) => {
                this.HeadingImage4 = event.target.result;
            };
            reader.readAsDataURL(this.headingImageObj);
            (_a = this.section_form18.get('county')) === null || _a === void 0 ? void 0 : _a.clearValidators();
            (_b = this.section_form18.get('county')) === null || _b === void 0 ? void 0 : _b.updateValueAndValidity();
            console.log("rightextension", this.section_form18);
        }
        else {
            (_c = this.section_form18.get('county')) === null || _c === void 0 ? void 0 : _c.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            (_d = this.section_form18.get('county')) === null || _d === void 0 ? void 0 : _d.updateValueAndValidity();
            console.log("wrongextension", this.section_form18);
        }
    }
    editgraduateHowItWorks9() {
        console.log("shdshhd", this.section_form9);
        console.log("files===>", this.files);
        let obj;
        if (this.section_form9.valid) {
            const section_9 = {
                images: this.dropImages,
                is_visible: this.section_form9.controls['is_visible'].value
            };
            const formdata = new FormData();
            formdata.append("content_id", "621350cc3352bd34948f0634");
            formdata.append("section_9", JSON.stringify(section_9));
            obj = formdata;
        }
        else {
            this.section_form9.markAllAsTouched();
        }
        console.log("uhuhuhuh", this.section_form9);
        this.Service.editGraduateHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.ngOnInit();
            this.section_form9.reset();
            this.files = [];
            this.router.navigate(['/editGraduateHowItWorks']);
        });
    }
    // section_form9Image(e) {
    //   const file = e.target.files;
    //   const fileType = file.type.split("/");
    //   console.log(fileType);
    //   if (fileType == "image") {
    //     this.selectedfile = e.target.files;
    //     const formdata = new FormData();
    //     formdata.append('images', this.selectedfile);
    //     this.Service.uploadEditGraduateHowItsWorks(formdata).subscribe((res: any) => {
    //       console.log("upload files111 ==>", res);
    //       this.section_form9.controls['images'].setValue(res.file_name)
    //     })
    //   }
    // }
    onSelect(e) {
        // console.log("filesss===>", e.addedFiles[0]);
        // this.selectedfile = e.addedFiles[0];
        this.files.push(...e.addedFiles);
        const formdata = new FormData();
        for (let i = 0; i < this.files.length; i++) {
            formdata.append('image', (this.files[i]));
        }
        // formdata.append("image", this.selectedfile);
        this.Service.uploadEditGraduateHowItsWorks(formdata).subscribe((res) => {
            console.log("upload image==>>>>", res);
            this.section_form9.controls['images'].setValue(res);
            this.dropImages = res;
            console.log("drop imagesssssssss===>>>", this.dropImages);
        });
    }
    onRemove(e) {
        console.log(e);
        const formdata = new FormData();
        this.files.splice(this.files.indexOf(e), 1);
    }
    onRemove1(item) {
        var obj = {
            url: item
        };
        console.log("delete====>", obj);
        this.dropImages.splice(this.dropImages.indexOf(item), 1);
        this.Service.editGraduateHowItWorksDelete(obj).subscribe(res => {
            console.log("Delete Response==========", res);
            this.ngOnInit();
            console.log("reminder images====>>>", this.dropImages);
        });
    }
    getContent() {
        var obj = {
            content_id: "621350cc3352bd34948f0634"
        };
        this.Service.getGraduateHowItWorks(obj).subscribe(data => {
            console.log("Response==========", data);
            this.HeadingImage1 = data === null || data === void 0 ? void 0 : data.data.section_1.image,
                this.HeadingImage2 = data === null || data === void 0 ? void 0 : data.data.section_2.image,
                this.HeadingImage3 = data === null || data === void 0 ? void 0 : data.data.section_4.image,
                this.HeadingImage4 = data === null || data === void 0 ? void 0 : data.data.section_18.image,
                this.HeadingImage6 = data.data.section_9.images,
                this.dropImages = this.HeadingImage6;
            console.log("heading Image 6==>>", this.HeadingImage6);
            console.log("drop wala image===>>>", this.dropImages);
            // console.log("drop images===>>>",this.dropImages);
            this.section_form1.patchValue({
                title: data === null || data === void 0 ? void 0 : data.data.section_1.heading,
                is_visible: data === null || data === void 0 ? void 0 : data.data.section_1.is_visible
            }),
                this.section_form2.patchValue({
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_2.is_visible,
                    heading1: data === null || data === void 0 ? void 0 : data.data.section_2.heading,
                    description1: data === null || data === void 0 ? void 0 : data.data.section_2.description,
                }),
                this.section_form3.patchValue({
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_3.is_visible,
                    heading2: data === null || data === void 0 ? void 0 : data.data.section_3.heading,
                }),
                this.section_form4.patchValue({
                    is_visible: data.data.section_4.is_visible,
                });
            data.data.section_4.data.forEach((element) => {
                var _a;
                (_a = this.graduateArray1) === null || _a === void 0 ? void 0 : _a.push(this.fb.group({
                    name: [element.name],
                    image: [element.image, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    county: ['']
                }));
            });
            this.section_form5.patchValue({
                is_visible: data === null || data === void 0 ? void 0 : data.data.section_5.is_visible,
                heading3: data === null || data === void 0 ? void 0 : data.data.section_5.heading,
                description2: data === null || data === void 0 ? void 0 : data.data.section_5.description,
            }),
                this.section_form6.patchValue({
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_6.is_visible,
                    listing1: data === null || data === void 0 ? void 0 : data.data.section_2.heading,
                }),
                this.section_form7.patchValue({
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_7.is_visible,
                    heading4: data === null || data === void 0 ? void 0 : data.data.section_7.heading,
                    description3: data === null || data === void 0 ? void 0 : data.data.section_7.description,
                }),
                this.section_form8.patchValue({
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_8.is_visible,
                    heading5: data === null || data === void 0 ? void 0 : data.data.section_8.heading,
                }),
                this.section_form9.patchValue({
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_9.is_visible,
                    images: data.data.section_9.images,
                }),
                this.section_form10.patchValue({
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_10.is_visible,
                    heading6: data === null || data === void 0 ? void 0 : data.data.section_10.heading,
                    description4: data === null || data === void 0 ? void 0 : data.data.section_10.description,
                }),
                this.section_form11.patchValue({
                    is_visible: data.data.section_11.is_visible,
                });
            data.data.section_11.data.forEach((element) => {
                this.graduateArray.push(this.fb.group({
                    heading: [element.heading, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
                    image: [element.image, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    county: ['']
                }));
            });
            this.section_form12.patchValue({
                is_visible: data === null || data === void 0 ? void 0 : data.data.section_12.is_visible,
                heading7: data === null || data === void 0 ? void 0 : data.data.section_12.heading,
                description5: data === null || data === void 0 ? void 0 : data.data.section_12.description,
            }),
                this.section_form13.patchValue({
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_13.is_visible,
                    listing2: data === null || data === void 0 ? void 0 : data.data.section_2.heading,
                }),
                this.section_form14.patchValue({
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_14.is_visible,
                    heading8: data === null || data === void 0 ? void 0 : data.data.section_14.heading,
                    description6: data === null || data === void 0 ? void 0 : data.data.section_14.description,
                }),
                this.section_form15.patchValue({
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_15.is_visible,
                    heading9: data === null || data === void 0 ? void 0 : data.data.section_15.heading,
                }),
                this.section_form16.patchValue({
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_16.is_visible,
                    heading10: data === null || data === void 0 ? void 0 : data.data.section_16.heading,
                    description7: data === null || data === void 0 ? void 0 : data.data.section_16.description,
                }),
                this.section_form17.patchValue({
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_17.is_visible,
                    heading11: data === null || data === void 0 ? void 0 : data.data.section_17.heading,
                    description8: data === null || data === void 0 ? void 0 : data.data.section_17.description,
                }),
                this.section_form18.patchValue({
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_18.is_visible,
                });
        }, err => {
            console.log(err.status);
            if (err.status >= 404) {
                console.log('Some error occured');
            }
            else {
                console.log('Internet Connection Error');
            }
        });
    }
    // openSnackBar() {
    //   this.id = this.id
    // }
    // Edit Graduate How It Works============
    editgraduateHowItWorks1(id) {
        let obj;
        if (this.section_form1.valid) {
            console.log(this.section_form1);
            const formdata = new FormData();
            formdata.append("content_id", "621350cc3352bd34948f0634");
            if (this.headingImageObj) {
                this.sectionA = {
                    "heading": this.section_form1.controls.title.value,
                    "is_visible": true,
                };
                formdata.append("section_1", JSON.stringify(this.sectionA));
                formdata.append("image", this.headingImageObj);
            }
            else {
                this.sectionA = {
                    "heading": this.section_form1.controls.title.value,
                    "image": this.HeadingImage1,
                    "is_visible": true,
                };
                formdata.append("section_1", JSON.stringify(this.sectionA));
            }
            console.log("edittttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form1.markAllAsTouched();
            return;
        }
        this.Service.editGraduateHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editGraduateHowItWorks']);
        });
    }
    editgraduateHowItWorks2(id) {
        let obj;
        if (this.section_form1.valid) {
            console.log(this.section_form2);
            const formdata = new FormData();
            formdata.append("content_id", "621350cc3352bd34948f0634");
            if (this.headingImageObj) {
                this.sectionA = {
                    "heading": this.section_form2.controls.heading1.value,
                    "description": this.section_form2.controls.description1.value,
                    "is_visible": true,
                };
                formdata.append("section_2", JSON.stringify(this.sectionA));
                formdata.append("image", this.headingImageObj);
            }
            else {
                this.sectionA = {
                    "heading": this.section_form2.controls.heading1.value,
                    "description": this.section_form2.controls.description1.value,
                    "is_visible": true,
                    "image": this.HeadingImage2,
                };
                formdata.append("section_2", JSON.stringify(this.sectionA));
            }
            console.log("edittttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form2.markAllAsTouched();
            return;
        }
        this.Service.editGraduateHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editGraduateHowItWorks']);
        });
    }
    editgraduateHowItWorks3(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form3.controls.heading2.value,
            "is_visible": true,
        };
        if (this.section_form3.valid) {
            console.log(this.section_form3);
            const formdata = new FormData();
            formdata.append("content_id", "621350cc3352bd34948f0634");
            formdata.append("section_3", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("edittttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form3.markAllAsTouched();
            return;
        }
        this.Service.editGraduateHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editGraduateHowItWorks']);
        });
    }
    editgraduateHowItWorks5(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form5.controls.heading3.value,
            "description": this.section_form5.controls.description2.value,
            "is_visible": true,
        };
        if (this.section_form5.valid) {
            console.log(this.section_form5);
            const formdata = new FormData();
            formdata.append("content_id", "621350cc3352bd34948f0634");
            formdata.append("section_5", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("edittttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form5.markAllAsTouched();
            return;
        }
        this.Service.editGraduateHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editGraduateHowItWorks']);
        });
    }
    editgraduateHowItWorks6(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form6.controls.listing1.value,
            "is_visible": true,
        };
        if (this.section_form6.valid) {
            console.log(this.section_form6);
            const formdata = new FormData();
            formdata.append("content_id", "621350cc3352bd34948f0634");
            formdata.append("section_6", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("edittttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form6.markAllAsTouched();
            return;
        }
        this.Service.editGraduateHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editGraduateHowItWorks']);
        });
    }
    editgraduateHowItWorks7(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form7.controls.heading4.value,
            "description": this.section_form7.controls.description3.value,
            "is_visible": true,
        };
        if (this.section_form7.valid) {
            console.log(this.section_form7);
            const formdata = new FormData();
            formdata.append("content_id", "621350cc3352bd34948f0634");
            formdata.append("section_7", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("edittttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form7.markAllAsTouched();
            return;
        }
        this.Service.editGraduateHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editGraduateHowItWorks']);
        });
    }
    editgraduateHowItWorks8(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form8.controls.heading5.value,
            "is_visible": true,
        };
        if (this.section_form8.valid) {
            console.log(this.section_form8);
            const formdata = new FormData();
            formdata.append("content_id", "621350cc3352bd34948f0634");
            formdata.append("section_8", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("edittttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form8.markAllAsTouched();
            return;
        }
        this.Service.editGraduateHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editGraduateHowItWorks']);
        });
    }
    editgraduateHowItWorks10(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form10.controls.heading6.value,
            "description": this.section_form10.controls.description4.value,
            "is_visible": true,
        };
        if (this.section_form10.valid) {
            console.log(this.section_form10);
            const formdata = new FormData();
            formdata.append("content_id", "621350cc3352bd34948f0634");
            formdata.append("section_10", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("edittttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form10.markAllAsTouched();
            return;
        }
        this.Service.editGraduateHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editGraduateHowItWorks']);
        });
    }
    editGraduateHowItWorks(type) {
        let obj;
        if (type == 'section') {
            if (this.section_form4.valid) {
                if (this.graduateArray) {
                    const formdata = new FormData();
                    const section_4 = {
                        data: this.section_form4.get('graduateArray1').value,
                        is_visible: this.section_form4.controls['is_visible'].value,
                    };
                    formdata.append('section_4', JSON.stringify(section_4));
                    this.content_id = "621350cc3352bd34948f0634";
                    formdata.append("content_id", this.content_id);
                    obj = formdata;
                }
                else {
                    this.graduateArray.markAllAsTouched();
                }
            }
        }
        if (type == 'anime') {
            if (this.section_form11.valid) {
                if (this.graduateArray) {
                    const formdata = new FormData();
                    const section_11 = {
                        data: this.section_form11.get('graduateArray').value,
                        is_visible: this.section_form11.controls['is_visible'].value
                    };
                    formdata.append('section_11', JSON.stringify(section_11));
                    this.content_id = "621350cc3352bd34948f0634";
                    formdata.append("content_id", this.content_id);
                    obj = formdata;
                }
                else {
                    this.graduateArray.markAllAsTouched();
                }
            }
        }
        this.Service.editGraduateHowItWorks(obj).subscribe((res) => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Submitted Successfully" });
            this.router.navigate(['/editGraduateHowItWorks']);
        });
    }
    editgraduateHowItWorks12(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form12.controls.heading7.value,
            "description": this.section_form12.controls.description5.value,
            "is_visible": true,
        };
        if (this.section_form12.valid) {
            console.log(this.section_form12);
            const formdata = new FormData();
            formdata.append("content_id", "621350cc3352bd34948f0634");
            formdata.append("section_12", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("edittttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form12.markAllAsTouched();
            return;
        }
        this.Service.editGraduateHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editGraduateHowItWorks']);
        });
    }
    editgraduateHowItWorks13(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form13.controls.listing2.value,
            "is_visible": true,
        };
        if (this.section_form13.valid) {
            console.log(this.section_form13);
            const formdata = new FormData();
            formdata.append("content_id", "621350cc3352bd34948f0634");
            formdata.append("section_13", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("edittttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form13.markAllAsTouched();
            return;
        }
        this.Service.editGraduateHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editGraduateHowItWorks']);
        });
    }
    editgraduateHowItWorks14(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form14.controls.heading8.value,
            "description": this.section_form14.controls.description6.value,
            "is_visible": true,
        };
        if (this.section_form14.valid) {
            console.log(this.section_form14);
            const formdata = new FormData();
            formdata.append("content_id", "621350cc3352bd34948f0634");
            formdata.append("section_14", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("edittttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form14.markAllAsTouched();
            return;
        }
        this.Service.editGraduateHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editGraduateHowItWorks']);
        });
    }
    editgraduateHowItWorks15(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form15.controls.heading9.value,
            "is_visible": true,
        };
        if (this.section_form15.valid) {
            console.log(this.section_form15);
            const formdata = new FormData();
            formdata.append("content_id", "621350cc3352bd34948f0634");
            formdata.append("section_15", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("edittttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form15.markAllAsTouched();
            return;
        }
        this.Service.editGraduateHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editGraduateHowItWorks']);
        });
    }
    editgraduateHowItWorks16(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form16.controls.heading10.value,
            "description": this.section_form16.controls.description7.value,
            "is_visible": true,
        };
        if (this.section_form16.valid) {
            console.log(this.section_form16);
            const formdata = new FormData();
            formdata.append("content_id", "621350cc3352bd34948f0634");
            formdata.append("section_16", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("edittttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form16.markAllAsTouched();
            return;
        }
        this.Service.editGraduateHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editGraduateHowItWorks']);
        });
    }
    editgraduateHowItWorks17(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form17.controls.heading11.value,
            "description": this.section_form17.controls.description8.value,
            "is_visible": true,
        };
        if (this.section_form17.valid) {
            console.log(this.section_form17);
            const formdata = new FormData();
            formdata.append("content_id", "621350cc3352bd34948f0634");
            formdata.append("section_17", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("edittttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form17.markAllAsTouched();
            return;
        }
        this.Service.editGraduateHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editGraduateHowItWorks']);
        });
    }
    editgraduateHowItWorks18(id) {
        let obj;
        if (this.section_form18.valid) {
            console.log(this.section_form18);
            const formdata = new FormData();
            formdata.append("content_id", "621350cc3352bd34948f0634");
            if (this.headingImageObj) {
                this.sectionA = {
                    "is_visible": true,
                };
                formdata.append("section_18", JSON.stringify(this.sectionA));
                formdata.append("image", this.headingImageObj);
            }
            else {
                this.sectionA = {
                    "is_visible": true,
                    "image": this.HeadingImage4,
                };
                formdata.append("section_18", JSON.stringify(this.sectionA));
            }
            console.log("edittttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form18.markAllAsTouched();
            return;
        }
        this.Service.editGraduateHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editGraduateHowItWorks']);
        });
    }
};
EditGraduateHowItWorksComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _topgradservice_service__WEBPACK_IMPORTED_MODULE_7__["TopgradserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
EditGraduateHowItWorksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-graduate-how-it-works',
        template: _raw_loader_edit_graduate_how_it_works_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_graduate_how_it_works_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _topgradservice_service__WEBPACK_IMPORTED_MODULE_7__["TopgradserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], EditGraduateHowItWorksComponent);



/***/ })

}]);
//# sourceMappingURL=pages-content-management-how-it-works-edit-graduate-how-it-works-edit-graduate-how-it-works-module-es2015.js.map