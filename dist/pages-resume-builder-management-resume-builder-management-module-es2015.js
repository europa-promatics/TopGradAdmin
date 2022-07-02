(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-resume-builder-management-resume-builder-management-module"],{

/***/ "5IT5":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/resume-builder-management/resume-builder-management.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bWUtYnVpbGRlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Vsxq":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/resume-builder-management/resume-builder-management-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ResumeBuilderManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeBuilderManagementRoutingModule", function() { return ResumeBuilderManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _resume_builder_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resume-builder-management.component */ "s8gK");




const routes = [
    {
        path: '',
        component: _resume_builder_management_component__WEBPACK_IMPORTED_MODULE_3__["ResumeBuilderManagementComponent"]
    }
];
let ResumeBuilderManagementRoutingModule = class ResumeBuilderManagementRoutingModule {
};
ResumeBuilderManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ResumeBuilderManagementRoutingModule);



/***/ }),

/***/ "ixza":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/resume-builder-management/resume-builder-management.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ResumeBuilderManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeBuilderManagementModule", function() { return ResumeBuilderManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "crmZ");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _resume_builder_management_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume-builder-management-routing.module */ "Vsxq");
/* harmony import */ var _resume_builder_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resume-builder-management.component */ "s8gK");








let ResumeBuilderManagementModule = class ResumeBuilderManagementModule {
};
ResumeBuilderManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _resume_builder_management_component__WEBPACK_IMPORTED_MODULE_7__["ResumeBuilderManagementComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__["EditorModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _resume_builder_management_routing_module__WEBPACK_IMPORTED_MODULE_6__["ResumeBuilderManagementRoutingModule"]
        ]
    })
], ResumeBuilderManagementModule);



/***/ }),

/***/ "jLNX":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resume-builder-management/resume-builder-management.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"employer-header-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"headerSection\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Resume Builder Header Section</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Title</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"heading\"></editor>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <label>Title</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Create your Resume with ease!\" formControlName=\"heading\"> -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(headerSection.controls.heading.touched || headerSection.controls.heading.dirty) && headerSection.controls.heading.invalid && headerSection.controls.heading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(headerSection.controls.heading.touched || headerSection.controls.heading.dirty) && headerSection.controls.heading.invalid && headerSection.controls.heading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Sub-Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Use our Free Resume Builder Tool to create the perfect Resume!\" formControlName=\"subheading\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(headerSection.controls.subheading.touched || headerSection.controls.subheading.dirty) && headerSection.controls.subheading.invalid && headerSection.controls.subheading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter sub heading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(headerSection.controls.subheading.touched || headerSection.controls.subheading.dirty) && headerSection.controls.subheading.invalid && headerSection.controls.subheading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 200 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Banner Image</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img resume_img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage1?HeadingImage1:'assets/img/resume-build.png'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\" (change)=\"setHeadingImage($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"headerSection.controls['Image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"headerSection.controls.county?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('header')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"work-for-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"helpSection\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>We help you</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun1($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"heading\"></editor>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"We help you perfect your Resume that lands you a job faster.\" formControlName=\"heading\"> -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(helpSection.controls.heading.touched || helpSection.controls.heading.dirty) && helpSection.controls.heading.invalid && helpSection.controls.heading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(helpSection.controls.heading.touched || helpSection.controls.heading.dirty) && helpSection.controls.heading.invalid && helpSection.controls.heading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('help')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"Endorsed-steps-sec resume_tips_sctn\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"resumetipsSection\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Resume Tips</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun2($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"endrose-step\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container formArrayName=\" \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let alias of resumetipsSection.controls['tipsArray'].controls; let i=index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container [formGroupName]=\"i\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{i+1}}: Icon</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"tipsArray.controls[i].controls['image'].value ? tipsArray.controls[i].controls['image'].value:'assets/img/select icon.svg'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\" (change)=\"onTipsChangeImage($event,i)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"tipsArray.controls[i].controls['image']?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"tipsArray.controls[i].controls['image'].county?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Easily edited online\" formControlName=\"heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <div *ngIf=\"tipsArray.controls[i].controls['heading'].errors?.required  \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"tipsArray.controls[i].controls['heading'].errors?.maxlength  \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\"></editor>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"tipsArray.controls[i].controls['description'].errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"tipsArray.controls[i].controls['description'].errors?.maxlength  \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"endrose-step\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>2: Icon</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/tips.svg\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Expert tips\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<editor></editor>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"endrose-step\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>3: Icon</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/templates.svg\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Professional templates\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<editor></editor>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"endrose-step\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>4: Icon</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/format.svg\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Multi-format options\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<editor></editor>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"endrose-step\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>5: Icon</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/info detect.svg\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Content extract\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<editor></editor>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('tips')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"whychose-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"stepsSection\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Steps to create Resume</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun3($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"heading\"></editor>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Follow three simple steps to create your Resume\" formControlName=\"heading\"> -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(stepsSection.controls.heading.touched || stepsSection.controls.heading.dirty) && stepsSection.controls.heading.invalid && stepsSection.controls.heading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(stepsSection.controls.heading.touched || stepsSection.controls.heading.dirty) && stepsSection.controls.heading.invalid && stepsSection.controls.heading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<ng-container formArrayName=\"stepsArray\"\n\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let alias of stepsSection.controls['stepsArray'].controls; let i=index\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-container [formGroupName]=\"i\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Step {{i+1}}: Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"1. Select a Resume template\" formControlName=\"heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"stepsArray.controls[i].controls['heading'].errors?.required  \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"stepsArray.controls[i].controls['heading'].errors?.maxlength  \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\"></editor>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"stepsArray.controls[i].controls['description'].errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"stepsArray.controls[i].controls['description'].errors?.maxlength  \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Step 2: Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"2. Edit Resume content online\" formControlName=\"heading2\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(stepsSection.controls.heading2.touched || stepsSection.controls.heading2.dirty) && stepsSection.controls.heading2.invalid && stepsSection.controls.heading2?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(stepsSection.controls.heading2.touched || stepsSection.controls.heading2.dirty) && stepsSection.controls.heading2.invalid && stepsSection.controls.heading2?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description2\"></editor>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(stepsSection.controls.description2.touched || stepsSection.controls.description2.dirty) && stepsSection.controls.description2.invalid && stepsSection.controls.description2?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(stepsSection.controls.description2.touched || stepsSection.controls.description2.dirty) && stepsSection.controls.description2.invalid && stepsSection.controls.description2?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 500 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Step 3: Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"3. Click Download\" formControlName=\"heading3\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(stepsSection.controls.heading3.touched || stepsSection.controls.heading3.dirty) && stepsSection.controls.heading3.invalid && stepsSection.controls.heading3?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(stepsSection.controls.heading3.touched || stepsSection.controls.heading3.dirty) && stepsSection.controls.heading3.invalid && stepsSection.controls.heading3?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description3\"></editor>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(stepsSection.controls.description3.touched || stepsSection.controls.description3.dirty) && stepsSection.controls.description3.invalid && stepsSection.controls.description3?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(stepsSection.controls.description3.touched || stepsSection.controls.description3.dirty) && stepsSection.controls.description3.invalid && stepsSection.controls.description3?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 500 characters\n\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('steps')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n\n<section class=\"employer-header-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"startnowSection\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Resume Builder Start Now</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun4($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Title</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"heading\"></editor>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <label>Title</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Professional Resumes for faster job offers!\" formControlName=\"heading\"> -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(startnowSection.controls.heading.touched || startnowSection.controls.heading.dirty) && startnowSection.controls.heading.invalid && startnowSection.controls.heading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter title\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(startnowSection.controls.heading.touched || startnowSection.controls.heading.dirty) && startnowSection.controls.heading.invalid && startnowSection.controls.heading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Sub-Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Want to land a job?\" formControlName=\"subheading\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(startnowSection.controls.subheading.touched || startnowSection.controls.subheading.dirty) && startnowSection.controls.subheading.invalid && startnowSection.controls.subheading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter sub heading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(startnowSection.controls.subheading.touched || startnowSection.controls.subheading.dirty) && startnowSection.controls.subheading.invalid && startnowSection.controls.subheading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\"></editor>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(startnowSection.controls.description.touched || startnowSection.controls.description.dirty) && startnowSection.controls.description.invalid && startnowSection.controls.description?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(startnowSection.controls.description.touched || startnowSection.controls.description.dirty) && startnowSection.controls.description.invalid && startnowSection.controls.description?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Banner Image</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img resume_img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage2?HeadingImage2:'assets/img/resumebtm.png'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\" (change)=\"setHeadingImage1($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"startnowSection.controls['Image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"startnowSection.controls.county?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('startnow')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "s8gK":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/resume-builder-management/resume-builder-management.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ResumeBuilderManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeBuilderManagementComponent", function() { return ResumeBuilderManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_resume_builder_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./resume-builder-management.component.html */ "jLNX");
/* harmony import */ var _resume_builder_management_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume-builder-management.component.scss */ "5IT5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _topgradservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../topgradservice.service */ "DL5e");








let ResumeBuilderManagementComponent = class ResumeBuilderManagementComponent {
    constructor(Service, _snackBar, router, fb) {
        this.Service = Service;
        this._snackBar = _snackBar;
        this.router = router;
        this.fb = fb;
        this.headerSection = this.fb.group({
            heading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            subheading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(200)]],
            Image: ['',],
            is_visible: [''],
            county: ['']
        });
        this.helpSection = this.fb.group({
            heading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            is_visible: [''],
            county: ['']
        });
        this.stepsSection = this.fb.group({
            heading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            is_visible: [''],
            county: [''],
            'stepsArray': this.fb.array([])
        });
        this.startnowSection = this.fb.group({
            heading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            subheading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            Image: ['',],
            is_visible: [''],
            county: ['']
        });
        this.resumetipsSection = this.fb.group({
            'is_visible': [''],
            'tipsArray': this.fb.array([])
        });
    }
    ngOnInit() {
        this.getcontent();
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
    fun3(e) {
        console.log("hfjsdfjsdhfjkds", e);
        this._snackBar.open("Visibility changed successfully", "close", {
            duration: 2000
        });
    }
    fun4(e) {
        console.log("hfjsdfjsdhfjkds", e);
        this._snackBar.open("Visibility changed successfully", "close", {
            duration: 2000
        });
    }
    get tipsArray() {
        return this.resumetipsSection.get('tipsArray');
    }
    get stepsArray() {
        return this.stepsSection.get('stepsArray');
    }
    getcontent() {
        this.Service.resumebuildercontent().subscribe(data => {
            console.log("recruitment page content is ====>", data);
            this.HeadingImage1 = data.data.section_1.image;
            this.HeadingImage2 = data.data.section_5.image;
            this.headerSection.patchValue({
                heading: data.data.section_1.heading,
                subheading: data.data.section_1.sub_heading,
                Image: data.data.section_1.image,
                is_visible: data.data.section_1.is_visible
            });
            this.helpSection.patchValue({
                heading: data.data.section_2.heading,
                is_visible: data.data.section_2.is_visible
            });
            this.startnowSection.patchValue({
                heading: data.data.section_5.heading,
                subheading: data.data.section_5.sub_heading,
                description: data.data.section_5.description,
                Image: data.data.section_5.image,
                is_visible: data.data.section_5.is_visible
            });
            this.resumetipsSection.patchValue({
                is_visible: data.data.section_3.is_visible
            });
            data.data.section_3.data.forEach((element) => {
                this.tipsArray.push(this.fb.group({
                    heading: [element.heading, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
                    description: [element.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
                    image: [element.image, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    county: ['']
                }));
            });
            this.stepsSection.patchValue({
                is_visible: data.data.section_4.is_visible,
                heading: data.data.section_4.heading
            });
            data.data.section_4.data.forEach((element) => {
                this.stepsArray.push(this.fb.group({
                    heading: [element.heading, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
                    description: [element.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]]
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
            this.startnowSection.patchValue({
                Image: this.headingImageObj,
            });
            let reader = new FileReader();
            reader.onload = (event) => {
                this.HeadingImage2 = event.target.result;
            };
            reader.readAsDataURL(this.headingImageObj);
            this.startnowSection.get('county').clearValidators(); // 6. Clear All Validators
            this.startnowSection.get('county').updateValueAndValidity();
            console.log("rightextension", this.startnowSection);
        }
        else {
            this.startnowSection.get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator
            this.startnowSection.get('county').updateValueAndValidity();
            console.log("wrongextension", this.startnowSection);
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
                console.log("full form", this.resumetipsSection);
            });
            this.tipsArray.controls[index].get('county').clearValidators(); // 6. Clear All Validators
            this.tipsArray.controls[index].get('county').updateValueAndValidity();
            console.log("rightextension", this.resumetipsSection);
            console.log("gussa na dila", this.tipsArray);
        }
        else {
            this.tipsArray.controls[index].get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator
            this.tipsArray.controls[index].get('county').updateValueAndValidity();
            console.log("wrongectension", this.resumetipsSection);
            console.log("gussa na dila", this.tipsArray);
        }
    }
    postcontent(type) {
        let obj;
        console.log("type==>", type);
        if (type == 'header') {
            if (this.headerSection.valid) {
                const formdata = new FormData();
                this.content_id = "621c4bbd6f7babe92ccc9618";
                formdata.append("content_id", this.content_id);
                if (this.headingImageObj) {
                    const section_1 = {
                        heading: this.headerSection.controls['heading'].value,
                        sub_heading: this.headerSection.controls['subheading'].value,
                        is_visible: this.headerSection.controls['is_visible'].value
                    };
                    formdata.append("section_1", JSON.stringify(section_1));
                    formdata.append("image", this.headingImageObj);
                }
                else {
                    const section_1 = {
                        heading: this.headerSection.controls['heading'].value,
                        sub_heading: this.headerSection.controls['subheading'].value,
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
        if (type == 'help') {
            if (this.helpSection.valid) {
                const formdata = new FormData();
                const section_2 = {
                    heading: this.helpSection.controls['heading'].value,
                    is_visible: this.helpSection.controls['is_visible'].value
                };
                formdata.append("section_2", JSON.stringify(section_2));
                this.content_id = "621c4bbd6f7babe92ccc9618";
                formdata.append("content_id", this.content_id);
                obj = formdata;
            }
            else {
                this.helpSection.markAllAsTouched();
                return;
            }
        }
        if (type == 'startnow') {
            if (this.startnowSection.valid) {
                const formdata = new FormData();
                this.content_id = "621c4bbd6f7babe92ccc9618";
                formdata.append("content_id", this.content_id);
                if (this.headingImageObj) {
                    const section_5 = {
                        heading: this.startnowSection.controls['heading'].value,
                        sub_heading: this.startnowSection.controls['subheading'].value,
                        description: this.startnowSection.controls['description'].value,
                        is_visible: this.startnowSection.controls['is_visible'].value
                    };
                    formdata.append("section_5", JSON.stringify(section_5));
                    formdata.append("image", this.headingImageObj);
                }
                else {
                    const section_5 = {
                        heading: this.startnowSection.controls['heading'].value,
                        sub_heading: this.startnowSection.controls['subheading'].value,
                        description: this.startnowSection.controls['description'].value,
                        is_visible: this.startnowSection.controls['is_visible'].value,
                        image: this.HeadingImage2
                    };
                    formdata.append("section_5", JSON.stringify(section_5));
                    //formdata.append("image", this.HeadingImage2)
                }
                obj = formdata;
            }
            else {
                this.startnowSection.markAllAsTouched();
                return;
            }
        }
        if (type == 'tips') {
            if (this.resumetipsSection.valid) {
                if (this.tipsArray.valid) {
                    const formdata = new FormData();
                    const section_3 = { data: this.resumetipsSection.get('tipsArray').value,
                        is_visible: this.resumetipsSection.controls['is_visible'].value
                    };
                    formdata.append("section_3", JSON.stringify(section_3));
                    this.content_id = "621c4bbd6f7babe92ccc9618";
                    formdata.append("content_id", this.content_id);
                    obj = formdata;
                }
                else {
                    this.tipsArray.markAllAsTouched();
                    return;
                }
            }
        }
        if (type == 'steps') {
            if (this.stepsSection.valid) {
                if (this.stepsArray.valid) {
                    const formdata = new FormData();
                    const section_4 = { data: this.stepsSection.get('stepsArray').value,
                        is_visible: this.stepsSection.controls['is_visible'].value,
                        heading: this.stepsSection.controls['heading'].value
                    };
                    formdata.append("section_4", JSON.stringify(section_4));
                    this.content_id = "621c4bbd6f7babe92ccc9618";
                    formdata.append("content_id", this.content_id);
                    obj = formdata;
                }
                else {
                    this.stepsArray.markAllAsTouched();
                    return;
                }
            }
        }
        this.Service.postResumeBuilderContent(obj).subscribe((resp) => {
            this.Service.showMessage({ message: "Submitted Successfully" });
        });
    }
};
ResumeBuilderManagementComponent.ctorParameters = () => [
    { type: _topgradservice_service__WEBPACK_IMPORTED_MODULE_7__["TopgradserviceService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
ResumeBuilderManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-resume-builder-management',
        template: _raw_loader_resume_builder_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_resume_builder_management_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_topgradservice_service__WEBPACK_IMPORTED_MODULE_7__["TopgradserviceService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], ResumeBuilderManagementComponent);



/***/ })

}]);
//# sourceMappingURL=pages-resume-builder-management-resume-builder-management-module-es2015.js.map