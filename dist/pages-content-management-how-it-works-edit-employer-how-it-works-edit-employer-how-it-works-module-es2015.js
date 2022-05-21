(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-management-how-it-works-edit-employer-how-it-works-edit-employer-how-it-works-module"],{

/***/ "/ZRv":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/content-management/how-it-works/edit-employer-how-it-works/edit-employer-how-it-works.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: EditEmployerHowItWorksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmployerHowItWorksModule", function() { return EditEmployerHowItWorksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-dropzone */ "kvL/");
/* harmony import */ var _edit_employer_how_it_works_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-employer-how-it-works-routing.module */ "RR6u");
/* harmony import */ var _edit_employer_how_it_works_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-employer-how-it-works.component */ "q0x6");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "fB2i");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










let EditEmployerHowItWorksModule = class EditEmployerHowItWorksModule {
};
EditEmployerHowItWorksModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _edit_employer_how_it_works_component__WEBPACK_IMPORTED_MODULE_5__["EditEmployerHowItWorksComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_6__["EditorModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _edit_employer_how_it_works_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditEmployerHowItWorksRoutingModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__["NgxDropzoneModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
        ]
    })
], EditEmployerHowItWorksModule);



/***/ }),

/***/ "OxEM":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content-management/how-it-works/edit-employer-how-it-works/edit-employer-how-it-works.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"employer-header-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form1\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Employer Header Section</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Title</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"title\"></editor>\n\t\t\t\t\t\t\t\t\t\t<!-- <label>Title</label> -->\n\t\t\t\t\t\t\t\t\t\t<!-- <input class=\"form-control\" rows=\"3\" name=\"\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Write your title here...\" formControlName=\"title\"> -->\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form1.controls.title?.touched || section_form1.controls.title?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form1.controls.title?.invalid && section_form1.controls.title?.errors?.required\" style=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your title....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Banner Image</label>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage1\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" title=\"\" class=\"img-input-upld\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"setHeadingImage1($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"section_form1.controls.county?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editEmpHowItWorks1(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"whychose-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form2\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Why choose TopGrads</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun1($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" rows=\"3\" name=\"heading\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Write your heading here...\" formControlName=\"heading\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form2?.controls.heading?.touched || section_form2?.controls.heading?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form2?.controls.heading?.invalid && section_form2?.controls.heading?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\"></editor>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form2?.controls.description?.touched || section_form2?.controls.description?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form2?.controls.description?.invalid && section_form2?.controls.description?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your description....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Section Image</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage2?HeadingImage2:'assets/img/whychose_emp.png'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"image\" title=\"\" class=\"img-input-upld\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"setHeadingImage2($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"section_form2.controls.county?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editEmpHowItWorks2(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"recruitmenteasy-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form3\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>We make recruitment easy</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun2($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" rows=\"3\" name=\"heading2\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Write your heading here...\" formControlName=\"heading2\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form3.controls.heading2?.touched || section_form3.controls.heading2?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form3.controls.heading2?.invalid && section_form3.controls.heading2?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editEmpHowItWorks3(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"createjob-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form4\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Create Job in 4 steps</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun3($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Section Image</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage3?HeadingImage3:'assets/img/imag_tilt.png'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" title=\"\" class=\"img-input-upld\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"setHeadingImage3($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"section_form4.controls.county?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editEmpHowItWorks4(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"JobPosting-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form5\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Fee-less Job Posting</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun4($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" rows=\"3\" name=\"heading3\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Write your heading here...\" formControlName=\"heading3\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form5.controls.heading3?.touched || section_form5.controls.heading3?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form5.controls.heading3?.invalid && section_form5.controls.heading3?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description1\"></editor>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form5.controls.description1?.touched || section_form5.controls.description1?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form5.controls.description1?.invalid && section_form5.controls.description1?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your description....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editEmpHowItWorks5(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"moreResume-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form6\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>More Than Just a Resume</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun5($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" rows=\"3\" name=\"heading\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Write your heading here...\" formControlName=\"heading4\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form6.controls.heading4?.touched || section_form6.controls.heading4?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form6.controls.heading4?.invalid && section_form6.controls.heading4?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description2\"></editor>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form6.controls.description2?.touched || section_form6.controls.description2?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form6.controls.description2?.invalid && section_form6.controls.description2?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your description....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editEmpHowItWorks6(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"gradSerach-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form7\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Graduate Search</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun6($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>No. of Listings to be displayed</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" rows=\"3\" name=\"heading\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Listing to be displayed here...\" formControlName=\"listing\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form7.controls.listing?.touched || section_form7.controls.listing?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form7.controls.listing?.invalid && section_form7.controls.listing?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please listing to be displayed....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editEmpHowItWorks7(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"EasyShortlisting-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form8\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Easy Shortlisting</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun7($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" rows=\"3\" name=\"heading\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Write your heading here...\" formControlName=\"heading5\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form8.controls.heading5?.touched || section_form8.controls.heading5?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form8.controls.heading5?.invalid && section_form8.controls.heading5?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description3\"></editor>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form8.controls.description3?.touched || section_form8.controls.description3?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form8.controls.description3?.invalid && section_form8.controls.description3?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your description....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editEmpHowItWorks8(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"recruitmenteasy-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form9\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>All the best grads in one place</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun8($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" rows=\"3\" name=\"heading\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Write your heading here...\" formControlName=\"heading6\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form9.controls.heading6?.touched || section_form9.controls.heading6?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form9.controls.heading6?.invalid && section_form9.controls.heading6?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editEmpHowItWorks9(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"UniqueMatch-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form10\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Unique Match Percentage</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun9($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" rows=\"3\" name=\"heading\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Write your heading here...\" formControlName=\"heading7\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form10.controls.heading7?.touched || section_form10.controls.heading7?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form10.controls.heading7?.invalid && section_form10.controls.heading7?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description4\"></editor>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form10.controls.description4?.touched || section_form10.controls.description4?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form10.controls.description4?.invalid && section_form10.controls.description4?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your description....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editEmpHowItWorks10(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"matchHighlyt-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form11\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Highlighted unique Match</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun10($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Section Image</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage4?HeadingImage4:'assets/img/special_endrosed.svg'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" title=\"\" class=\"img-input-upld\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"setHeadingImage4($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"section_form11.controls.county?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editEmpHowItWorks11(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"carddates-matched-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form12\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Unique Matched Candidates</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun11($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>No. of Listings to be displayed</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" rows=\"3\" name=\"heading\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"listing to be displayed here...\" formControlName=\"listing2\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form12.controls.listing2?.touched || section_form12.controls.listing2?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form12.controls.listing2?.invalid && section_form12.controls.listing2?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please listing to be displayed....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editEmpHowItWorks12(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"EndorsedCandidates-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form13\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Endorsed Candidates</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun12($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" rows=\"3\" name=\"heading\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Write your heading here...\" formControlName=\"heading8\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form13.controls.heading8?.touched || section_form13.controls.heading8?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form13.controls.heading8?.invalid && section_form13.controls.heading8?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description5\"></editor>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form13.controls.description5?.touched || section_form13.controls.description5?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form13.controls.description5?.invalid && section_form13.controls.description5?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your description....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editEmpHowItWorks13(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"Endorsed-steps-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form14\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Endrosement Steps</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun13($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"endrose-step\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<ng-container formArrayName=\"emparray\"\n\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let alias of section_form14.controls['emparray'].controls; let i=index\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container [formGroupName]=\"i\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>step {{i+1}}: Icon</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"emparray.controls[i].controls['image'].value ? emparray.controls[i].controls['image'].value:'assets/img/refernce.svg'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\" (change)=\"empHeadingImg($event,i)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"emparray.controls[i].controls['image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"emparray.controls[i].controls['image'].county?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Easily edited online\" formControlName=\"heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"emparray.controls[i].controls['heading'].errors?.required  \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"emparray.controls[i].controls['heading'].errors?.maxlength  \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\"></editor>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"emparray.controls[i].controls['description'].errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"emparray.controls[i].controls['description'].errors?.maxlength  \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Maximum Length should be 500 characters\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\"(click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"editEmployerHowItWorks()\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"organise&progress-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form15\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Organise and progress candidates your way</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun14($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" rows=\"3\" name=\"heading\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Write your heading here...\" formControlName=\"heading12\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form15.controls.heading12?.touched || section_form15.controls.heading12?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form15.controls.heading12?.invalid && section_form15.controls.heading12?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editEmpHowItWorks15(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"organise&progress-components\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form16\" >\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t<strong>Employer Dashoboard Components</strong>\n\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun15($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t<div class=\"imag_upld_prvw mb-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<!-- <div *ngFor=\"let item of Section16Images ;let i=index\" \n\t\t\t\t\t\t\t\t\t\t class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"upld-img-holdr\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon type=\"button\" >highlight_off</mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t <img src=\"assets/img/refernce.svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon type=\"button\" (click)=\"onRemove1(item)\">highlight_off</mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2 img_cols\" *ngFor=\"let item of Section16Images ;let i=index\"  >\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"upld-img-holdr\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon type=\"button\" >highlight_off</mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"item\">\n\t\t\t\t\t\t\t\t\t\t\t\t <!-- <img src=\"assets/img/refernce.svg\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon type=\"button\" (click)=\"onRemove1(item)\">highlight_off</mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-2 img_cols\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"upld-img-holdr\">\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/refernce.svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon>highlight_off</mat-icon>\t\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"enable-organise\">\n\t\t\t\t\t\t\t\t\t\t<ngx-dropzone  class=\"custom-dropzone\" ngx-dropzone [accept]=\"'image/*'\" (change)=\"onSelect($event)\" >\n\t\t\t\t\t\t\t\t\t\t\t<ngx-dropzone-label>Drop your images here!</ngx-dropzone-label>\n\t\t\t\t\t\t\t\t\t\t\t<ngx-dropzone-image-preview *ngFor=\"let f of files;let i=index\" ngProjectAs=\"ngx-dropzone-preview\" [file]=\"f\"\n\t\t\t\t\t\t\t\t\t\t\t [removable]=\"true\" (removed)=\"onRemove(f)\"> \n\t\t\t\t\t\t\t\t\t\t\t\t<ngx-dropzone-label> </ngx-dropzone-label>\n\t\t\t\t\t\t\t\t\t\t\t</ngx-dropzone-image-preview>\n\t\t\t\t\t\t\t\t\t\t</ngx-dropzone>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"editEmpHowItWorks16()\">Save</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"PersonalisedDashboard-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form17\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Your Personalised Dashboard</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun16($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" rows=\"3\" name=\"heading\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Write your heading here...\" formControlName=\"heading13\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form17.controls.heading13?.touched || section_form17.controls.heading13?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form17.controls.heading13?.invalid && section_form17.controls.heading13?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description9\"></editor>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form17.controls.description9?.touched || section_form17.controls.description9?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form17.controls.description9?.invalid && section_form17.controls.description9?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your description....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editEmpHowItWorks17(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"Scheduleinterviews-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form18\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Schedule Interviews</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun17($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" rows=\"3\" name=\"heading\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Write your heading here...\" formControlName=\"heading14\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form18.controls.heading14?.touched || section_form18.controls.heading14?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form18.controls.heading14?.invalid && section_form18.controls.heading14?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description10\"></editor>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form18.controls.description10?.touched || section_form18.controls.description10?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form18.controls.description10?.invalid && section_form18.controls.description10?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your description....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editEmpHowItWorks18(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"newhire-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form19\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-newhire\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>New hire modal</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun18($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Modal Image</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage6\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" title=\"\" class=\"img-input-upld\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"setHeadingImage6($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"section_form19.controls.county?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Title Message</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" rows=\"3\" name=\"heading\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Write your Title Message here...\" formControlName=\"titleMsg\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form19.controls.titleMsg?.touched || section_form19.controls.titleMsg?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form19.controls.titleMsg?.invalid && section_form19.controls.titleMsg?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your Title Msg....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Message info</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" rows=\"3\" name=\"heading\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Write your Message Info here...\" formControlName=\"msgInfo\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form19.controls.msgInfo?.touched || section_form19.controls.msgInfo?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form19.controls.msgInfo?.invalid && section_form19.controls.msgInfo?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your Msg Info....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editEmpHowItWorks19(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"Select&Offer-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form20\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Select and Offer</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun19($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" rows=\"3\" name=\"heading\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Write your heading here...\" formControlName=\"heading15\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form20.controls.heading15?.touched || section_form20.controls.heading15?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form20.controls.heading15?.invalid && section_form20.controls.heading15?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description11\"></editor>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form20.controls.description11?.touched || section_form20.controls.description11?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form20.controls.description11?.invalid && section_form20.controls.description11?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your description....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editEmpHowItWorks20(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"employer-footer-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"section_form21\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Employer Footer</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun20($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Title</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" rows=\"3\" name=\"heading\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Write your title here...\" formControlName=\"title111\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form21.controls.title111?.touched || section_form21.controls.title111?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form21.controls.title111?.invalid && section_form21.controls.title111?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your title....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Sub-heading</label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" rows=\"3\" name=\"heading\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Write your Sub-heading here...\" formControlName=\"S_heading\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form21.controls.S_heading?.touched || section_form21.controls.S_heading?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form21.controls.S_heading?.invalid && section_form21.controls.S_heading?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your Sub-heading....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description12\"></editor>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(section_form21.controls.description12?.touched || section_form21.controls.description12?.dirty)\n\t\t\t\t\t\t\t\t\t&& section_form21.controls.description12?.invalid && section_form21.controls.description12?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color:red\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter your description....\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Footer Image</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage7\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" title=\"\" class=\"img-input-upld\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"setHeadingImage7($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"section_form21.controls.county?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" mat-stroked-button (click)=\"openSnackBar()\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"editEmpHowItWorks21(id)\">Save</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n");

/***/ }),

/***/ "RR6u":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/content-management/how-it-works/edit-employer-how-it-works/edit-employer-how-it-works-routing.module.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: EditEmployerHowItWorksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmployerHowItWorksRoutingModule", function() { return EditEmployerHowItWorksRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_employer_how_it_works_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-employer-how-it-works.component */ "q0x6");




const routes = [
    {
        path: '',
        component: _edit_employer_how_it_works_component__WEBPACK_IMPORTED_MODULE_3__["EditEmployerHowItWorksComponent"]
    }
];
let EditEmployerHowItWorksRoutingModule = class EditEmployerHowItWorksRoutingModule {
};
EditEmployerHowItWorksRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EditEmployerHowItWorksRoutingModule);



/***/ }),

/***/ "q0x6":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/content-management/how-it-works/edit-employer-how-it-works/edit-employer-how-it-works.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: EditEmployerHowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmployerHowItWorksComponent", function() { return EditEmployerHowItWorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_employer_how_it_works_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-employer-how-it-works.component.html */ "OxEM");
/* harmony import */ var _edit_employer_how_it_works_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-employer-how-it-works.component.scss */ "tpNV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _topgradservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../topgradservice.service */ "DL5e");









let EditEmployerHowItWorksComponent = class EditEmployerHowItWorksComponent {
    constructor(_snackBar, fb, route, Service, router, sanitizer) {
        this._snackBar = _snackBar;
        this.fb = fb;
        this.route = route;
        this.Service = Service;
        this.router = router;
        this.sanitizer = sanitizer;
        this.HeadingImage8 = [];
        this.images = [];
        this.previousImage = [];
        this.image = [];
        this.files = [];
        this.Section16Images = [];
        this.section_form1 = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Image: [''],
            county: [''],
            is_visible: [''],
        });
        this.section_form2 = this.fb.group({
            heading: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Image: ['',],
            county: [''],
            is_visible: [''],
        });
        this.section_form3 = this.fb.group({
            heading2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form4 = this.fb.group({
            Image: [''],
            county: [''],
            is_visible: [''],
        });
        this.section_form5 = this.fb.group({
            heading3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form6 = this.fb.group({
            heading4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form7 = this.fb.group({
            listing: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form8 = this.fb.group({
            heading5: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form9 = this.fb.group({
            heading6: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form10 = this.fb.group({
            heading7: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form11 = this.fb.group({
            Image: [''],
            county: [''],
            is_visible: [''],
        });
        this.section_form12 = this.fb.group({
            listing2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form13 = this.fb.group({
            heading8: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description5: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form14 = this.fb.group({
            'is_visible': [''],
            'emparray': this.fb.array([])
        });
        this.section_form15 = this.fb.group({
            heading12: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form16 = this.fb.group({
            Image: [''],
            county: [''],
            is_visible: [''],
        });
        this.section_form17 = this.fb.group({
            heading13: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description9: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form18 = this.fb.group({
            heading14: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description10: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form19 = this.fb.group({
            titleMsg: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            msgInfo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Image: [''],
            county: [''],
            is_visible: [''],
        });
        this.section_form20 = this.fb.group({
            heading15: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description11: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            is_visible: [''],
        });
        this.section_form21 = this.fb.group({
            title111: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            S_heading: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description12: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Image: ['',],
            county: [''],
            is_visible: [''],
        });
    }
    ngOnInit() {
        this.getContent();
    }
    get emparray() {
        return this.section_form14.get('emparray');
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
    fun5(e) {
        console.log("hfjsdfjsdhfjkds", e);
        this._snackBar.open("Visibility changed successfully", "close", {
            duration: 2000
        });
    }
    fun6(e) {
        console.log("hfjsdfjsdhfjkds", e);
        this._snackBar.open("Visibility changed successfully", "close", {
            duration: 2000
        });
    }
    fun7(e) {
        console.log("hfjsdfjsdhfjkds", e);
        this._snackBar.open("Visibility changed successfully", "close", {
            duration: 2000
        });
    }
    fun8(e) {
        console.log("hfjsdfjsdhfjkds", e);
        this._snackBar.open("Visibility changed successfully", "close", {
            duration: 2000
        });
    }
    fun9(e) {
        console.log("hfjsdfjsdhfjkds", e);
        this._snackBar.open("Visibility changed successfully", "close", {
            duration: 2000
        });
    }
    fun10(e) {
        console.log("hfjsdfjsdhfjkds", e);
        this._snackBar.open("Visibility changed successfully", "close", {
            duration: 2000
        });
    }
    fun11(e) {
        console.log("hfjsdfjsdhfjkds", e);
        this._snackBar.open("Visibility changed successfully", "close", {
            duration: 2000
        });
    }
    fun12(e) {
        console.log("hfjsdfjsdhfjkds", e);
        this._snackBar.open("Visibility changed successfully", "close", {
            duration: 2000
        });
    }
    fun13(e) {
        console.log("hfjsdfjsdhfjkds", e);
        this._snackBar.open("Visibility changed successfully", "close", {
            duration: 2000
        });
    }
    fun14(e) {
        console.log("hfjsdfjsdhfjkds", e);
        this._snackBar.open("Visibility changed successfully", "close", {
            duration: 2000
        });
    }
    fun15(e) {
        console.log("hfjsdfjsdhfjkds", e);
        this._snackBar.open("Visibility changed successfully", "close", {
            duration: 2000
        });
    }
    fun16(e) {
        console.log("hfjsdfjsdhfjkds", e);
        this._snackBar.open("Visibility changed successfully", "close", {
            duration: 2000
        });
    }
    fun17(e) {
        console.log("hfjsdfjsdhfjkds", e);
        this._snackBar.open("Visibility changed successfully", "close", {
            duration: 2000
        });
    }
    fun18(e) {
        console.log("hfjsdfjsdhfjkds", e);
        this._snackBar.open("Visibility changed successfully", "close", {
            duration: 2000
        });
    }
    fun19(e) {
        console.log("hfjsdfjsdhfjkds", e);
        this._snackBar.open("Visibility changed successfully", "close", {
            duration: 2000
        });
    }
    fun20(e) {
        console.log("hfjsdfjsdhfjkds", e);
        this._snackBar.open("Visibility changed successfully", "close", {
            duration: 2000
        });
    }
    setHeadingImage1(event) {
        var _a, _b, _c, _d;
        console.log(event.target.files[0]);
        const file = event.target.files[0];
        this.selected_file = event.target.files[0];
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
        this.selected_file = event.target.files[0];
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
    setHeadingImage3(event) {
        var _a, _b, _c, _d;
        console.log(event.target.files[0]);
        const file = event.target.files[0];
        this.selected_file = event.target.files[0];
        const fileType = file.type.split("/")[0];
        console.log(fileType);
        console.log('sdsafdff', this.section_form4);
        if (fileType == "image") {
            this.headingImageObj = event.target.files[0];
            this.section_form4.patchValue({
                Image: this.headingImageObj,
            });
            let reader = new FileReader();
            reader.onload = (event) => {
                this.HeadingImage3 = event.target.result;
            };
            reader.readAsDataURL(this.headingImageObj);
            (_a = this.section_form4.get('county')) === null || _a === void 0 ? void 0 : _a.clearValidators();
            (_b = this.section_form4.get('county')) === null || _b === void 0 ? void 0 : _b.updateValueAndValidity();
            console.log("rightextension", this.section_form4);
        }
        else {
            (_c = this.section_form4.get('county')) === null || _c === void 0 ? void 0 : _c.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            (_d = this.section_form4.get('county')) === null || _d === void 0 ? void 0 : _d.updateValueAndValidity();
            console.log("wrongextension", this.section_form4);
        }
    }
    setHeadingImage4(event) {
        var _a, _b, _c, _d;
        console.log(event.target.files[0]);
        const file = event.target.files[0];
        this.selected_file = event.target.files[0];
        const fileType = file.type.split("/")[0];
        console.log(fileType);
        console.log('sdsafdff', this.section_form11);
        if (fileType == "image") {
            this.headingImageObj = event.target.files[0];
            this.section_form11.patchValue({
                Image: this.headingImageObj,
            });
            let reader = new FileReader();
            reader.onload = (event) => {
                this.HeadingImage4 = event.target.result;
            };
            reader.readAsDataURL(this.headingImageObj);
            (_a = this.section_form11.get('county')) === null || _a === void 0 ? void 0 : _a.clearValidators();
            (_b = this.section_form11.get('county')) === null || _b === void 0 ? void 0 : _b.updateValueAndValidity();
            console.log("rightextension", this.section_form11);
        }
        else {
            (_c = this.section_form11.get('county')) === null || _c === void 0 ? void 0 : _c.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            (_d = this.section_form11.get('county')) === null || _d === void 0 ? void 0 : _d.updateValueAndValidity();
            console.log("wrongextension", this.section_form11);
        }
    }
    empHeadingImg(e, index) {
        console.log("index", index);
        const file = e.target.files[0];
        const fileType = file.type.split("/")[0];
        if (fileType == "image") {
            this.selectedfile = e.target.files[0];
            const formData = new FormData();
            formData.append('image', this.selectedfile);
            this.Service.uploadEditGraduateHowItsWorks(formData).subscribe((res) => {
                console.log("image response ==>", res);
                this.emparray.at(index).patchValue({
                    image: res
                });
            });
            this.emparray.controls[index].get('county').clearValidators();
            this.emparray.controls[index].get('county').updateValueAndValidity();
        }
        else {
            this.emparray.controls[index].get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.emparray.controls[index].get('county').updateValueAndValidity();
        }
    }
    setHeadingImage6(event) {
        var _a, _b, _c, _d;
        console.log(event.target.files[0]);
        const file = event.target.files[0];
        this.selected_file = event.target.files[0];
        const fileType = file.type.split("/")[0];
        console.log(fileType);
        console.log('sdsafdff', this.section_form19);
        if (fileType == "image") {
            this.sectionA = {};
            this.headingImageObj = event.target.files[0];
            this.section_form19.patchValue({
                Image: this.headingImageObj,
            });
            let reader = new FileReader();
            reader.onload = (event) => {
                this.HeadingImage6 = event.target.result;
            };
            reader.readAsDataURL(this.headingImageObj);
            (_a = this.section_form19.get('county')) === null || _a === void 0 ? void 0 : _a.clearValidators();
            (_b = this.section_form19.get('county')) === null || _b === void 0 ? void 0 : _b.updateValueAndValidity();
            console.log("rightextension", this.section_form19);
        }
        else {
            (_c = this.section_form19.get('county')) === null || _c === void 0 ? void 0 : _c.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            (_d = this.section_form19.get('county')) === null || _d === void 0 ? void 0 : _d.updateValueAndValidity();
            console.log("wrongextension", this.section_form10);
        }
    }
    setHeadingImage7(event) {
        var _a, _b, _c, _d;
        console.log(event.target.files[0]);
        const file = event.target.files[0];
        this.selected_file = event.target.files[0];
        const fileType = file.type.split("/")[0];
        console.log(fileType);
        console.log('sdsafdff', this.section_form21);
        if (fileType == "image") {
            this.headingImageObj = event.target.files[0];
            this.section_form21.patchValue({
                Image: this.headingImageObj,
            });
            let reader = new FileReader();
            reader.onload = (event) => {
                this.HeadingImage7 = event.target.result;
            };
            reader.readAsDataURL(this.headingImageObj);
            (_a = this.section_form21.get('county')) === null || _a === void 0 ? void 0 : _a.clearValidators();
            (_b = this.section_form21.get('county')) === null || _b === void 0 ? void 0 : _b.updateValueAndValidity();
            console.log("rightextension", this.section_form21);
        }
        else {
            (_c = this.section_form21.get('county')) === null || _c === void 0 ? void 0 : _c.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            (_d = this.section_form21.get('county')) === null || _d === void 0 ? void 0 : _d.updateValueAndValidity();
            console.log("wrongextension", this.section_form21);
        }
    }
    getContent() {
        var obj = {
            content_id: "62131e0b9a4fb6871a828022"
        };
        this.Service.getEmpHowItWorks(obj).subscribe(data => {
            console.log("Response==========", data);
            this.HeadingImage1 = data === null || data === void 0 ? void 0 : data.data.section_1.image,
                this.HeadingImage2 = data === null || data === void 0 ? void 0 : data.data.section_2.image,
                this.HeadingImage3 = data === null || data === void 0 ? void 0 : data.data.section_4.image,
                this.HeadingImage4 = data === null || data === void 0 ? void 0 : data.data.section_11.image,
                this.HeadingImage6 = data === null || data === void 0 ? void 0 : data.data.section_19.image,
                this.HeadingImage7 = data === null || data === void 0 ? void 0 : data.data.section_21.image,
                this.HeadingImage8 = data.data.section_16.images,
                this.Section16Images = this.HeadingImage8,
                console.log("section_16==>>>>", this.section_16);
            this.section_form1.patchValue({
                title: data === null || data === void 0 ? void 0 : data.data.section_1.heading,
                is_visible: data === null || data === void 0 ? void 0 : data.data.section_1.is_visible
            }),
                this.section_form2.patchValue({
                    heading: data === null || data === void 0 ? void 0 : data.data.section_2.heading,
                    description: data === null || data === void 0 ? void 0 : data.data.section_2.description,
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_2.is_visible
                }),
                this.section_form3.patchValue({
                    heading2: data === null || data === void 0 ? void 0 : data.data.section_3.heading,
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_3.is_visible
                }),
                this.section_form4.patchValue({
                    Image: data === null || data === void 0 ? void 0 : data.data.section_4.image,
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_4.is_visible
                }),
                this.section_form5.patchValue({
                    heading3: data === null || data === void 0 ? void 0 : data.data.section_5.heading,
                    description1: data === null || data === void 0 ? void 0 : data.data.section_5.description,
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_5.is_visible
                }),
                this.section_form6.patchValue({
                    heading4: data === null || data === void 0 ? void 0 : data.data.section_6.heading,
                    description2: data === null || data === void 0 ? void 0 : data.data.section_6.description,
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_6.is_visible
                }),
                this.section_form7.patchValue({
                    listing: data === null || data === void 0 ? void 0 : data.data.section_7.heading,
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_7.is_visible
                }),
                this.section_form8.patchValue({
                    heading5: data === null || data === void 0 ? void 0 : data.data.section_8.heading,
                    description3: data === null || data === void 0 ? void 0 : data.data.section_8.description,
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_8.is_visible
                }),
                this.section_form9.patchValue({
                    heading6: data === null || data === void 0 ? void 0 : data.data.section_9.heading,
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_9.is_visible
                }),
                this.section_form10.patchValue({
                    heading7: data === null || data === void 0 ? void 0 : data.data.section_10.heading,
                    description4: data === null || data === void 0 ? void 0 : data.data.section_10.description,
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_10.is_visible
                }),
                this.section_form11.patchValue({
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_11.is_visible
                }),
                this.section_form12.patchValue({
                    listing2: data === null || data === void 0 ? void 0 : data.data.section_12.heading,
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_12.is_visible
                }),
                this.section_form13.patchValue({
                    heading8: data === null || data === void 0 ? void 0 : data.data.section_13.heading,
                    description5: data === null || data === void 0 ? void 0 : data.data.section_13.description,
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_13.is_visible
                }),
                this.section_form14.patchValue({
                    is_visible: data.data.section_14.is_visible,
                });
            data.data.section_14.data.forEach((element) => {
                this.emparray.push(this.fb.group({
                    heading: [element.heading, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
                    description: [element.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(500)]],
                    image: [element.image, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    county: ['']
                }));
            });
            this.section_form15.patchValue({
                heading12: data === null || data === void 0 ? void 0 : data.data.section_15.heading,
                is_visible: data === null || data === void 0 ? void 0 : data.data.section_15.is_visible
            }),
                this.section_form16.patchValue({
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_16.is_visible,
                }),
                this.section_form17.patchValue({
                    heading13: data === null || data === void 0 ? void 0 : data.data.section_17.heading,
                    description9: data === null || data === void 0 ? void 0 : data.data.section_17.description,
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_17.is_visible
                }),
                this.section_form18.patchValue({
                    heading14: data === null || data === void 0 ? void 0 : data.data.section_18.heading,
                    description10: data === null || data === void 0 ? void 0 : data.data.section_18.description,
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_18.is_visible
                }),
                this.section_form19.patchValue({
                    Image: data === null || data === void 0 ? void 0 : data.data.section_19.image,
                    titleMsg: data === null || data === void 0 ? void 0 : data.data.section_19.heading,
                    msgInfo: data === null || data === void 0 ? void 0 : data.data.section_19.heading,
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_19.is_visible
                }),
                this.section_form20.patchValue({
                    heading15: data === null || data === void 0 ? void 0 : data.data.section_20.heading,
                    description11: data === null || data === void 0 ? void 0 : data.data.section_20.description,
                    is_visible: data === null || data === void 0 ? void 0 : data.data.section_20.is_visible
                });
            this.section_form21.patchValue({
                Image: data === null || data === void 0 ? void 0 : data.data.section_21.image,
                title111: data === null || data === void 0 ? void 0 : data.data.section_21.heading,
                S_heading: data === null || data === void 0 ? void 0 : data.data.section_21.sub_heading,
                description12: data === null || data === void 0 ? void 0 : data.data.section_21.description,
                is_visible: data === null || data === void 0 ? void 0 : data.data.section_21.is_visible
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
    onSelect(e) {
        console.log("e-----", e);
        let obj;
        this.files.push(...e.addedFiles);
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
        this.Section16Images.splice(this.Section16Images.indexOf(item), 1);
        this.Service.editEmpHowItWorksDelete(obj).subscribe(res => {
            console.log("Delete Response==========", res);
            this.ngOnInit();
        });
    }
    openSnackBar() {
        this.id = this.id;
    }
    editEmpHowItWorks1(id) {
        let obj;
        if (this.section_form1.valid) {
            console.log(this.section_form1);
            const formdata = new FormData();
            formdata.append("content_id", "62131e0b9a4fb6871a828022");
            if (this.headingImageObj) {
                this.sectionA = {
                    "heading": this.section_form1.controls.title.value,
                    "is_visible": this.section_form1.controls.is_visible.value,
                };
                formdata.append("section_1", JSON.stringify(this.sectionA));
                formdata.append("image", this.headingImageObj);
            }
            else {
                this.sectionA = {
                    "heading": this.section_form1.controls.title.value,
                    "is_visible": this.section_form1.controls.is_visible.value,
                    "image": this.HeadingImage1,
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
        this.Service.editEmpHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editEmployerHowItWorks']);
        });
    }
    editEmpHowItWorks2(id) {
        let obj;
        if (this.section_form2.valid) {
            console.log(this.section_form2);
            const formdata = new FormData();
            formdata.append("content_id", "62131e0b9a4fb6871a828022");
            if (this.headingImageObj) {
                this.sectionA = {
                    "heading": this.section_form2.controls.heading.value,
                    "description": this.section_form2.controls.description.value,
                    "is_visible": this.section_form2.controls.is_visible.value,
                };
                formdata.append("section_2", JSON.stringify(this.sectionA));
                formdata.append("image", this.headingImageObj);
            }
            else {
                this.sectionA = {
                    "heading": this.section_form2.controls.heading.value,
                    "description": this.section_form2.controls.description.value,
                    "is_visible": this.section_form2.controls.is_visible.value,
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
        this.Service.editEmpHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editEmployerHowItWorks']);
        });
    }
    editEmpHowItWorks3(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form3.controls.heading2.value,
            "is_visible": this.section_form3.controls.is_visible.value,
        };
        if (this.section_form3.valid) {
            console.log(this.section_form3);
            const formdata = new FormData();
            formdata.append("content_id", "62131e0b9a4fb6871a828022");
            formdata.append("section_3", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("editttttttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form1.markAllAsTouched();
            return;
        }
        this.Service.editEmpHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editEmployerHowItWorks']);
        });
    }
    editEmpHowItWorks4(id) {
        let obj;
        if (this.section_form4.valid) {
            console.log(this.section_form4);
            const formdata = new FormData();
            formdata.append("content_id", "62131e0b9a4fb6871a828022");
            if (this.headingImageObj) {
                this.sectionA = {
                    "is_visible": this.section_form4.controls.is_visible.value,
                };
                formdata.append("section_4", JSON.stringify(this.sectionA));
                formdata.append("image", this.headingImageObj);
            }
            else {
                this.sectionA = {
                    "is_visible": this.section_form4.controls.is_visible.value,
                    "image": this.HeadingImage3,
                };
                formdata.append("section_2", JSON.stringify(this.sectionA));
            }
            console.log("edittttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form4.markAllAsTouched();
            return;
        }
        this.Service.editEmpHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editEmployerHowItWorks']);
        });
    }
    editEmpHowItWorks5(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form5.controls.heading3.value,
            "description": this.section_form5.controls.description1.value,
            "is_visible": this.section_form5.controls.is_visible.value,
        };
        if (this.section_form5.valid) {
            console.log(this.section_form5);
            const formdata = new FormData();
            formdata.append("content_id", "62131e0b9a4fb6871a828022");
            formdata.append("section_5", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("editttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form5.markAllAsTouched();
            return;
        }
        this.Service.editEmpHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editEmployerHowItWorks']);
        });
    }
    editEmpHowItWorks6(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form6.controls.heading4.value,
            "description": this.section_form6.controls.description2.value,
            "is_visible": this.section_form6.controls.is_visible.value,
        };
        if (this.section_form6.valid) {
            console.log(this.section_form6);
            const formdata = new FormData();
            formdata.append("content_id", "62131e0b9a4fb6871a828022");
            formdata.append("section_6", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("edittttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form6.markAllAsTouched();
            return;
        }
        this.Service.editEmpHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editEmployerHowItWorks']);
        });
    }
    editEmpHowItWorks7(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form7.controls.listing.value,
            "is_visible": this.section_form7.controls.is_visible.value,
        };
        if (this.section_form7.valid) {
            console.log(this.section_form7);
            const formdata = new FormData();
            formdata.append("content_id", "62131e0b9a4fb6871a828022");
            formdata.append("section_7", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("edittttttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form7.markAllAsTouched();
            return;
        }
        this.Service.editEmpHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editEmployerHowItWorks']);
        });
    }
    editEmpHowItWorks8(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form8.controls.heading5.value,
            "description": this.section_form8.controls.description3.value,
            "is_visible": this.section_form8.controls.is_visible.value,
        };
        if (this.section_form7.valid) {
            console.log(this.section_form7);
            const formdata = new FormData();
            formdata.append("content_id", "62131e0b9a4fb6871a828022");
            formdata.append("section_8", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("edittttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form8.markAllAsTouched();
            return;
        }
        this.Service.editEmpHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editEmployerHowItWorks']);
        });
    }
    editEmpHowItWorks9(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form9.controls.heading6.value,
            "is_visible": this.section_form9.controls.is_visible.value,
        };
        if (this.section_form7.valid) {
            console.log(this.section_form7);
            const formdata = new FormData();
            formdata.append("content_id", "62131e0b9a4fb6871a828022");
            formdata.append("section_9", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("ediitttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form9.markAllAsTouched();
            return;
        }
        this.Service.editEmpHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editEmployerHowItWorks']);
        });
    }
    editEmpHowItWorks10(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form10.controls.heading7.value,
            "description": this.section_form10.controls.description4.value,
            "is_visible": this.section_form10.controls.is_visible.value,
        };
        if (this.section_form7.valid) {
            console.log(this.section_form7);
            const formdata = new FormData();
            formdata.append("content_id", "62131e0b9a4fb6871a828022");
            formdata.append("section_10", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("ediittttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form10.markAllAsTouched();
            return;
        }
        this.Service.editEmpHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editEmployerHowItWorks']);
        });
    }
    editEmpHowItWorks11(id) {
        let obj;
        if (this.section_form11.valid) {
            console.log(this.section_form11);
            const formdata = new FormData();
            formdata.append("content_id", "62131e0b9a4fb6871a828022");
            if (this.headingImageObj) {
                this.sectionA = {
                    "is_visible": this.section_form11.controls.is_visible.value,
                };
                formdata.append("section_11", JSON.stringify(this.sectionA));
                formdata.append("image", this.headingImageObj);
            }
            else {
                this.sectionA = {
                    "is_visible": this.section_form11.controls.is_visible.value,
                    "image": this.HeadingImage4,
                };
                formdata.append("section_11", JSON.stringify(this.sectionA));
            }
            console.log("edittttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form11.markAllAsTouched();
            return;
        }
        this.Service.editEmpHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editEmployerHowItWorks']);
        });
    }
    editEmpHowItWorks12(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form12.controls.listing2.value,
            "is_visible": this.section_form12.controls.is_visible.value,
        };
        if (this.section_form7.valid) {
            console.log(this.section_form7);
            const formdata = new FormData();
            formdata.append("content_id", "62131e0b9a4fb6871a828022");
            formdata.append("section_12", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("edittttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form12.markAllAsTouched();
            return;
        }
        this.Service.editEmpHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editEmployerHowItWorks']);
        });
    }
    editEmpHowItWorks13(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form13.controls.heading8.value,
            "description": this.section_form13.controls.description5.value,
            "is_visible": this.section_form13.controls.is_visible.value,
        };
        if (this.section_form7.valid) {
            console.log(this.section_form7);
            const formdata = new FormData();
            formdata.append("content_id", "62131e0b9a4fb6871a828022");
            formdata.append("section_13", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("edittttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form13.markAllAsTouched();
            return;
        }
        this.Service.editEmpHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editEmployerHowItWorks']);
        });
    }
    editEmployerHowItWorks() {
        let obj;
        if (this.section_form14.valid) {
            if (this.emparray) {
                const formdata = new FormData();
                const section_11 = {
                    data: this.section_form14.get('emparray').value,
                    is_visible: this.section_form14.controls['is_visible'].value
                };
                formdata.append('section_14', JSON.stringify(section_11));
                this.content_id = "62131e0b9a4fb6871a828022";
                formdata.append("content_id", this.content_id);
                obj = formdata;
            }
            else {
                this.emparray.markAllAsTouched();
            }
        }
        this.Service.editEmpHowItWorks(obj).subscribe((res) => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Submitted Successfully" });
            this.router.navigate(['/editEmployerHowItWorks']);
        });
    }
    editEmpHowItWorks15(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form15.controls.heading12.value,
            "is_visible": this.section_form15.controls.is_visible.value,
        };
        if (this.section_form7.valid) {
            console.log(this.section_form7);
            const formdata = new FormData();
            formdata.append("content_id", "62131e0b9a4fb6871a828022");
            formdata.append("section_15", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("AddingFaq=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form15.markAllAsTouched();
            return;
        }
        this.Service.editEmpHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editEmployerHowItWorks']);
        });
    }
    editEmpHowItWorks16(id) {
        let obj;
        if (this.section_form16.valid) {
            console.log(this.section_form16);
            const formdata = new FormData();
            formdata.append("content_id", "62131e0b9a4fb6871a828022");
            formdata.append("section_16", "true");
            formdata.append("previousImage", JSON.stringify(this.HeadingImage8));
            console.log("consolelog===", this.HeadingImage8);
            for (let i = 0; i < this.files.length; i++) {
                formdata.append('image', (this.files[i]));
            }
            console.log("editttt=====>", formdata);
            obj = formdata;
        }
        else {
            this.section_form16.markAllAsTouched();
            return;
        }
        console.log("uhuhuhuh", this.section_form16);
        this.Service.editEmpHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.ngOnInit();
            this.section_form16.reset();
            this.files = [];
            this.router.navigate(['/editEmployerHowItWorks']);
        });
    }
    editEmpHowItWorks17(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form17.controls.heading13.value,
            "description": this.section_form17.controls.description9.value,
            "is_visible": this.section_form17.controls.is_visible.value,
        };
        if (this.section_form17.valid) {
            console.log(this.section_form17);
            const formdata = new FormData();
            formdata.append("content_id", "62131e0b9a4fb6871a828022");
            formdata.append("section_17", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("AddingFaq=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form17.markAllAsTouched();
            return;
        }
        this.Service.editEmpHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editEmployerHowItWorks']);
        });
    }
    editEmpHowItWorks18(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form18.controls.heading14.value,
            "description": this.section_form18.controls.description10.value,
            "is_visible": this.section_form18.controls.is_visible.value,
        };
        if (this.section_form18.valid) {
            console.log(this.section_form18);
            const formdata = new FormData();
            formdata.append("content_id", "62131e0b9a4fb6871a828022");
            formdata.append("section_18", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("AddingFaq=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form18.markAllAsTouched();
            return;
        }
        this.Service.editEmpHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editEmployerHowItWorks']);
        });
    }
    editEmpHowItWorks19(id) {
        let obj;
        if (this.section_form19.valid) {
            console.log(this.section_form19);
            const formdata = new FormData();
            formdata.append("content_id", "62131e0b9a4fb6871a828022");
            if (this.headingImageObj) {
                this.sectionA = {
                    "heading": this.section_form19.controls.titleMsg.value,
                    "description": this.section_form19.controls.msgInfo.value,
                    "is_visible": this.section_form19.controls.is_visible.value,
                };
                formdata.append("section_19", JSON.stringify(this.sectionA));
                formdata.append("image", this.headingImageObj);
            }
            else {
                this.sectionA = {
                    "heading": this.section_form19.controls.titleMsg.value,
                    "description": this.section_form19.controls.msgInfo.value,
                    "is_visible": true,
                    "image": this.HeadingImage6,
                };
                formdata.append("section_19", JSON.stringify(this.sectionA));
            }
            console.log("edittttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form19.markAllAsTouched();
            return;
        }
        this.Service.editEmpHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editEmployerHowItWorks']);
        });
    }
    editEmpHowItWorks20(id) {
        let obj;
        this.sectionA = {
            "heading": this.section_form20.controls.heading15.value,
            "description": this.section_form20.controls.description11.value,
            "is_visible": this.section_form20.controls.is_visible.value,
        };
        if (this.section_form20.valid) {
            console.log(this.section_form20);
            const formdata = new FormData();
            formdata.append("content_id", "62131e0b9a4fb6871a828022");
            formdata.append("section_20", JSON.stringify(this.sectionA));
            if (this.headingImageObj) {
                formdata.append("image", this.headingImageObj);
            }
            console.log("AddingFaq=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form20.markAllAsTouched();
            return;
        }
        this.Service.editEmpHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editEmployerHowItWorks']);
        });
    }
    editEmpHowItWorks21(id) {
        let obj;
        if (this.section_form21.valid) {
            console.log(this.section_form21);
            const formdata = new FormData();
            formdata.append("content_id", "62131e0b9a4fb6871a828022");
            if (this.headingImageObj) {
                this.sectionA = {
                    "heading": this.section_form21.controls.title111.value,
                    "sub_heading": this.section_form21.controls.S_heading.value,
                    "description": this.section_form21.controls.description12.value,
                    "is_visible": this.section_form21.controls.is_visible.value,
                };
                formdata.append("section_21", JSON.stringify(this.sectionA));
                formdata.append("image", this.headingImageObj);
            }
            else {
                this.sectionA = {
                    "heading": this.section_form21.controls.title111.value,
                    "sub_heading": this.section_form21.controls.S_heading.value,
                    "description": this.section_form21.controls.description12.value,
                    "is_visible": this.section_form21.controls.is_visible.value,
                    "image": this.HeadingImage7,
                };
                formdata.append("section_21", JSON.stringify(this.sectionA));
            }
            console.log("edittttttttttt=========>", formdata);
            obj = formdata;
        }
        else {
            this.section_form21.markAllAsTouched();
            return;
        }
        this.Service.editEmpHowItWorks(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Edit Successfully" });
            this.router.navigate(['/editEmployerHowItWorks']);
        });
    }
};
EditEmployerHowItWorksComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _topgradservice_service__WEBPACK_IMPORTED_MODULE_8__["TopgradserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
];
EditEmployerHowItWorksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-employer-how-it-works',
        template: _raw_loader_edit_employer_how_it_works_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_employer_how_it_works_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _topgradservice_service__WEBPACK_IMPORTED_MODULE_8__["TopgradserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
], EditEmployerHowItWorksComponent);



/***/ }),

/***/ "tpNV":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/content-management/how-it-works/edit-employer-how-it-works/edit-employer-how-it-works.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWVtcGxveWVyLWhvdy1pdC13b3Jrcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pages-content-management-how-it-works-edit-employer-how-it-works-edit-employer-how-it-works-module-es2015.js.map