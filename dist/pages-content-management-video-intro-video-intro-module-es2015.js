(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-management-video-intro-video-intro-module"],{

/***/ "5hQx":
/*!************************************************************************************!*\
  !*** ./src/app/pages/content-management/video-intro/video-intro-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: VideoIntroRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoIntroRoutingModule", function() { return VideoIntroRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _video_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-intro.component */ "W2SL");




const routes = [
    {
        path: '',
        component: _video_intro_component__WEBPACK_IMPORTED_MODULE_3__["VideoIntroComponent"]
    }
];
let VideoIntroRoutingModule = class VideoIntroRoutingModule {
};
VideoIntroRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], VideoIntroRoutingModule);



/***/ }),

/***/ "6rQE":
/*!****************************************************************************!*\
  !*** ./src/app/pages/content-management/video-intro/video-intro.module.ts ***!
  \****************************************************************************/
/*! exports provided: VideoIntroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoIntroModule", function() { return VideoIntroModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _video_intro_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-intro-routing.module */ "5hQx");
/* harmony import */ var _video_intro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video-intro.component */ "W2SL");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







let VideoIntroModule = class VideoIntroModule {
};
VideoIntroModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _video_intro_component__WEBPACK_IMPORTED_MODULE_4__["VideoIntroComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _video_intro_routing_module__WEBPACK_IMPORTED_MODULE_3__["VideoIntroRoutingModule"]
        ]
    })
], VideoIntroModule);



/***/ }),

/***/ "JMmS":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content-management/video-intro/video-intro.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"employer-header-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"headerSection\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Video Intro Header Section</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Main Image</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img resume_img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage1?HeadingImage1:'assets/img/video_img.png'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\" (change)=\"setHeadingImage($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"headerSection.controls['Image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"headerSection.controls.county?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('header')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"Endorsed-steps-sec resume_tips_sctn video_resm\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"tipsSection\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Video Resume Tips</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun1($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Main Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Why should you upload your Video Resume?\" formControlName=\"heading\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(tipsSection.controls.heading.touched || tipsSection.controls.heading.dirty) && tipsSection.controls.heading.invalid && tipsSection.controls.heading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(tipsSection.controls.heading.touched || tipsSection.controls.heading.dirty) && tipsSection.controls.heading.invalid && tipsSection.controls.heading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 200 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Sub Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Video resumes create a connection between you and the recruiters.\" formControlName=\"subheading\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(tipsSection.controls.subheading.touched || tipsSection.controls.subheading.dirty) && tipsSection.controls.subheading.invalid && tipsSection.controls.subheading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter subheading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(tipsSection.controls.subheading.touched || tipsSection.controls.subheading.dirty) && tipsSection.controls.subheading.invalid && tipsSection.controls.subheading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 200 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"endrose-step\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container formArrayName=\"tipsArray\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let alias of tipsSection.controls['tipsArray'].controls; let i=index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container [formGroupName]=\"i\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{i+1}}: Image</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"tipsArray.controls[i].controls['image'].value ? tipsArray.controls[i].controls['image'].value:'assets/img/video-card1.png'\"class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\" (change)=\"onTipsChangeImage($event,i)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"tipsArray.controls[i].controls['image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"tipsArray.controls[i].controls['image'].county?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Get found by Recruiter\" formControlName=\"heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"tipsArray.controls[i].controls['heading'].errors?.required  \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"tipsArray.controls[i].controls['heading'].errors?.maxlength  \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"endrose-step\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>2: Image</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/video-card2.png\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Get into more Interviews\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"endrose-step\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>3: Image</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/video-card3.png\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Get Hired Faster\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('tips')\" >Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"work-for-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"getStartedSection\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Get started</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun2($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Get started with three easy steps\" formControlName=\"heading\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(getStartedSection.controls.heading.touched || getStartedSection.controls.heading.dirty) && getStartedSection.controls.heading.invalid && getStartedSection.controls.heading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(getStartedSection.controls.heading.touched || getStartedSection.controls.heading.dirty) && getStartedSection.controls.heading.invalid && getStartedSection.controls.heading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 200 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Image</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img resume_img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage2?HeadingImage2:'assets/img/steps_img.png'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\" (change)=\"setHeadingImage1($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"getStartedSection.controls['Image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"getStartedSection.controls.county?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('getstart')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "Ti/3":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/content-management/video-intro/video-intro.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlby1pbnRyby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "W2SL":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content-management/video-intro/video-intro.component.ts ***!
  \*******************************************************************************/
/*! exports provided: VideoIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoIntroComponent", function() { return VideoIntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_video_intro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./video-intro.component.html */ "JMmS");
/* harmony import */ var _video_intro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-intro.component.scss */ "Ti/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _topgradservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../topgradservice.service */ "DL5e");








let VideoIntroComponent = class VideoIntroComponent {
    constructor(Service, _snackBar, router, fb) {
        this.Service = Service;
        this._snackBar = _snackBar;
        this.router = router;
        this.fb = fb;
        this.headerSection = this.fb.group({
            Image: ['',],
            is_visible: [''],
            county: ['']
        });
        this.tipsSection = this.fb.group({
            heading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(200)]],
            subheading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(200)]],
            is_visible: [''],
            tipsArray: this.fb.array([])
        });
        this.getStartedSection = this.fb.group({
            heading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(200)]],
            Image: ['',],
            is_visible: [''],
            county: ['']
        });
    }
    ngOnInit() {
        this.getcontent();
    }
    get tipsArray() {
        return this.tipsSection.get('tipsArray');
    }
    fun(e) {
        console.log("hfjsdfjsdhfjkds", e);
        this._snackBar.open("Visibility changed successfully", "close", {
            duration: 2000
        });
    }
    fun1(e) {
        console.log("hfjsdfjsdhfjkds", e);
        this._snackBar.open("Visibility changed successfully", "close", {
            duration: 2000
        });
    }
    fun2(e) {
        console.log("hfjsdfjsdhfjkds", e);
        this._snackBar.open("Visibility changed successfully", "close", {
            duration: 2000
        });
    }
    getcontent() {
        this.Service.videointrocontent().subscribe(data => {
            console.log("recruitment page content is ====>", data);
            this.HeadingImage1 = data.data.section_1.image;
            this.HeadingImage2 = data.data.section_3.image;
            this.headerSection.patchValue({
                Image: data.data.section_1.image,
                is_visible: data.data.section_1.is_visible
            });
            this.getStartedSection.patchValue({
                heading: data.data.section_3.heading,
                Image: data.data.section_3.image,
                is_visible: data.data.section_3.is_visible
            });
            this.tipsSection.patchValue({
                is_visible: data.data.section_2.is_visible,
                heading: data.data.section_2.heading,
                subheading: data.data.section_2.sub_heading,
            });
            data.data.section_2.image_heading.forEach((element) => {
                this.tipsArray.push(this.fb.group({
                    heading: [element.heading, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
                    image: [element.image, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    county: ['']
                }));
            });
        });
    }
    setHeadingImage(event) {
        console.log(event.target.files[0]);
        const file = event.target.files[0];
        const fileType = file.type.split("/")[0];
        console.log(fileType);
        if (fileType == "image") {
            this.headingImageObj = event.target.files[0];
            this.headerSection.patchValue({
                Image: this.headingImageObj,
            });
            let reader = new FileReader();
            reader.onload = (event) => {
                this.HeadingImage1 = event.target.result;
            };
            reader.readAsDataURL(this.headingImageObj);
            this.headerSection.get('county').clearValidators(); // 6. Clear All Validators
            this.headerSection.get('county').updateValueAndValidity();
            console.log("rightextension", this.headerSection);
        }
        else {
            this.headerSection.get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator
            this.headerSection.get('county').updateValueAndValidity();
            console.log("wrongextension", this.headerSection);
        }
    }
    setHeadingImage1(event) {
        console.log(event.target.files[0]);
        const file = event.target.files[0];
        const fileType = file.type.split("/")[0];
        console.log(fileType);
        if (fileType == "image") {
            this.headingImageObj = event.target.files[0];
            this.getStartedSection.patchValue({
                Image: this.headingImageObj,
            });
            let reader = new FileReader();
            reader.onload = (event) => {
                this.HeadingImage2 = event.target.result;
            };
            reader.readAsDataURL(this.headingImageObj);
            this.getStartedSection.get('county').clearValidators(); // 6. Clear All Validators
            this.getStartedSection.get('county').updateValueAndValidity();
            console.log("rightextension", this.getStartedSection);
        }
        else {
            this.getStartedSection.get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator
            this.getStartedSection.get('county').updateValueAndValidity();
            console.log("wrongextension", this.getStartedSection);
        }
    }
    onTipsChangeImage(e, index) {
        console.log("ind", index);
        const file = e.target.files[0];
        const fileType = file.type.split("/")[0];
        console.log(fileType);
        if (fileType == "image") {
            this.selectedfile = e.target.files[0];
            const formData = new FormData();
            formData.append('image', this.selectedfile);
            this.Service.uploadbenefitmedia(formData).subscribe((resp) => {
                console.log("image response ==>", resp);
                this.tipsArray.at(index).patchValue({
                    image: resp
                });
                console.log("full form", this.tipsSection);
            });
            this.tipsArray.controls[index].get('county').clearValidators(); // 6. Clear All Validators
            this.tipsArray.controls[index].get('county').updateValueAndValidity();
            console.log("rightextension", this.tipsSection);
            console.log("gussa na dila", this.tipsArray);
        }
        else {
            this.tipsArray.controls[index].get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator
            this.tipsArray.controls[index].get('county').updateValueAndValidity();
            console.log("wrongectension", this.tipsSection);
            console.log("gussa na dila", this.tipsArray);
        }
    }
    postcontent(type) {
        let obj;
        console.log("type==>", type);
        if (type == 'header') {
            if (this.headerSection.valid) {
                const formdata = new FormData();
                if (this.headingImageObj) {
                    console.log("yippeeeeeeee", this.headingImageObj);
                    const section_1 = {
                        is_visible: this.headerSection.controls['is_visible'].value
                    };
                    formdata.append("section_1", JSON.stringify(section_1));
                    formdata.append("image", this.headingImageObj);
                }
                else {
                    const section_1 = {
                        is_visible: this.headerSection.controls['is_visible'].value,
                        image: this.HeadingImage1
                    };
                    formdata.append("section_1", JSON.stringify(section_1));
                    //formdata.append("image", this.HeadingImage1)
                }
                obj = formdata;
            }
            else {
                this.headerSection.markAllAsTouched();
                return;
            }
        }
        if (type == 'tips') {
            if (this.tipsSection.valid) {
                if (this.tipsArray.valid) {
                    const formdata = new FormData();
                    const section_2 = { image_heading: this.tipsSection.get('tipsArray').value,
                        is_visible: this.tipsSection.controls['is_visible'].value,
                        heading: this.tipsSection.controls['heading'].value,
                        sub_heading: this.tipsSection.controls['subheading'].value
                    };
                    formdata.append("section_2", JSON.stringify(section_2));
                    obj = formdata;
                }
                else {
                    this.tipsArray.markAllAsTouched();
                    return;
                }
            }
        }
        if (type == 'getstart') {
            if (this.getStartedSection.valid) {
                const formdata = new FormData();
                if (this.headingImageObj) {
                    console.log("yippeeeeeeee", this.headingImageObj);
                    const section_3 = {
                        is_visible: this.getStartedSection.controls['is_visible'].value,
                        heading: this.getStartedSection.controls['heading'].value
                    };
                    formdata.append("section_3", JSON.stringify(section_3));
                    formdata.append("image", this.headingImageObj);
                }
                else {
                    const section_3 = {
                        is_visible: this.getStartedSection.controls['is_visible'].value,
                        heading: this.getStartedSection.controls['heading'].value,
                        image: this.HeadingImage1
                    };
                    formdata.append("section_3", JSON.stringify(section_3));
                    //formdata.append("image", this.HeadingImage1)
                }
                obj = formdata;
            }
            else {
                this.getStartedSection.markAllAsTouched();
                return;
            }
        }
        this.Service.postVideoIntroContent(obj).subscribe((resp) => {
            this.Service.showMessage({ message: "Submitted Successfully" });
        });
    }
};
VideoIntroComponent.ctorParameters = () => [
    { type: _topgradservice_service__WEBPACK_IMPORTED_MODULE_7__["TopgradserviceService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
VideoIntroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-video-intro',
        template: _raw_loader_video_intro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_video_intro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_topgradservice_service__WEBPACK_IMPORTED_MODULE_7__["TopgradserviceService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], VideoIntroComponent);



/***/ })

}]);
//# sourceMappingURL=pages-content-management-video-intro-video-intro-module-es2015.js.map