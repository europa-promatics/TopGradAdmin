(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-management-video-intro-video-intro-module"], {
    /***/
    "5hQx": function hQx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoIntroRoutingModule", function () {
        return VideoIntroRoutingModule;
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


      var _video_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./video-intro.component */
      "W2SL");

      var routes = [{
        path: '',
        component: _video_intro_component__WEBPACK_IMPORTED_MODULE_3__["VideoIntroComponent"]
      }];

      var VideoIntroRoutingModule = function VideoIntroRoutingModule() {
        _classCallCheck(this, VideoIntroRoutingModule);
      };

      VideoIntroRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VideoIntroRoutingModule);
      /***/
    },

    /***/
    "6rQE": function rQE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoIntroModule", function () {
        return VideoIntroModule;
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


      var _video_intro_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./video-intro-routing.module */
      "5hQx");
      /* harmony import */


      var _video_intro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./video-intro.component */
      "W2SL");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var VideoIntroModule = function VideoIntroModule() {
        _classCallCheck(this, VideoIntroModule);
      };

      VideoIntroModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_video_intro_component__WEBPACK_IMPORTED_MODULE_4__["VideoIntroComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _video_intro_routing_module__WEBPACK_IMPORTED_MODULE_3__["VideoIntroRoutingModule"]]
      })], VideoIntroModule);
      /***/
    },

    /***/
    "JMmS": function JMmS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"employer-header-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"headerSection\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Video Intro Header Section</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Main Image</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img resume_img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage1?HeadingImage1:'assets/img/video_img.png'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\" (change)=\"setHeadingImage($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"headerSection.controls['Image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"headerSection.controls.county?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('header')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"Endorsed-steps-sec resume_tips_sctn video_resm\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"tipsSection\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Video Resume Tips</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun1($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Main Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Why should you upload your Video Resume?\" formControlName=\"heading\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(tipsSection.controls.heading.touched || tipsSection.controls.heading.dirty) && tipsSection.controls.heading.invalid && tipsSection.controls.heading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(tipsSection.controls.heading.touched || tipsSection.controls.heading.dirty) && tipsSection.controls.heading.invalid && tipsSection.controls.heading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 200 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Sub Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Video resumes create a connection between you and the recruiters.\" formControlName=\"subheading\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(tipsSection.controls.subheading.touched || tipsSection.controls.subheading.dirty) && tipsSection.controls.subheading.invalid && tipsSection.controls.subheading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter subheading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(tipsSection.controls.subheading.touched || tipsSection.controls.subheading.dirty) && tipsSection.controls.subheading.invalid && tipsSection.controls.subheading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 200 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"endrose-step\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container formArrayName=\"tipsArray\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let alias of tipsSection.controls['tipsArray'].controls; let i=index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container [formGroupName]=\"i\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>{{i+1}}: Image</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"tipsArray.controls[i].controls['image'].value ? tipsArray.controls[i].controls['image'].value:'assets/img/video-card1.png'\"class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\" (change)=\"onTipsChangeImage($event,i)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"tipsArray.controls[i].controls['image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"tipsArray.controls[i].controls['image'].county?.errors?.required\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Get found by Recruiter\" formControlName=\"heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"tipsArray.controls[i].controls['heading'].errors?.required  \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"tipsArray.controls[i].controls['heading'].errors?.maxlength  \"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"endrose-step\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>2: Image</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/video-card2.png\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Get into more Interviews\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"endrose-step\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>3: Image</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/video-card3.png\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Get Hired Faster\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('tips')\" >Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"work-for-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"getStartedSection\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Get started</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun2($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"Get started with three easy steps\" formControlName=\"heading\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(getStartedSection.controls.heading.touched || getStartedSection.controls.heading.dirty) && getStartedSection.controls.heading.invalid && getStartedSection.controls.heading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(getStartedSection.controls.heading.touched || getStartedSection.controls.heading.dirty) && getStartedSection.controls.heading.invalid && getStartedSection.controls.heading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 200 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Image</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img resume_img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage2?HeadingImage2:'assets/img/steps_img.png'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\" (change)=\"setHeadingImage1($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"getStartedSection.controls['Image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"getStartedSection.controls.county?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('getstart')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";
      /***/
    },

    /***/
    "Ti/3": function Ti3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlby1pbnRyby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "W2SL": function W2SL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoIntroComponent", function () {
        return VideoIntroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_video_intro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./video-intro.component.html */
      "JMmS");
      /* harmony import */


      var _video_intro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./video-intro.component.scss */
      "Ti/3");
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
      /*! ../../../topgradservice.service */
      "DL5e");

      var VideoIntroComponent = /*#__PURE__*/function () {
        function VideoIntroComponent(Service, _snackBar, router, fb) {
          _classCallCheck(this, VideoIntroComponent);

          this.Service = Service;
          this._snackBar = _snackBar;
          this.router = router;
          this.fb = fb;
          this.headerSection = this.fb.group({
            Image: [''],
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
            Image: [''],
            is_visible: [''],
            county: ['']
          });
        }

        _createClass(VideoIntroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getcontent();
          }
        }, {
          key: "tipsArray",
          get: function get() {
            return this.tipsSection.get('tipsArray');
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
          key: "getcontent",
          value: function getcontent() {
            var _this = this;

            this.Service.videointrocontent().subscribe(function (data) {
              console.log("recruitment page content is ====>", data);
              _this.HeadingImage1 = data.data.section_1.image;
              _this.HeadingImage2 = data.data.section_3.image;

              _this.headerSection.patchValue({
                Image: data.data.section_1.image,
                is_visible: data.data.section_1.is_visible
              });

              _this.getStartedSection.patchValue({
                heading: data.data.section_3.heading,
                Image: data.data.section_3.image,
                is_visible: data.data.section_3.is_visible
              });

              _this.tipsSection.patchValue({
                is_visible: data.data.section_2.is_visible,
                heading: data.data.section_2.heading,
                subheading: data.data.section_2.sub_heading
              });

              data.data.section_2.image_heading.forEach(function (element) {
                _this.tipsArray.push(_this.fb.group({
                  heading: [element.heading, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
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
                _this2.HeadingImage1 = event.target.result;
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
              this.getStartedSection.patchValue({
                Image: this.headingImageObj
              });
              var reader = new FileReader();

              reader.onload = function (event) {
                _this3.HeadingImage2 = event.target.result;
              };

              reader.readAsDataURL(this.headingImageObj);
              this.getStartedSection.get('county').clearValidators(); // 6. Clear All Validators

              this.getStartedSection.get('county').updateValueAndValidity();
              console.log("rightextension", this.getStartedSection);
            } else {
              this.getStartedSection.get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator

              this.getStartedSection.get('county').updateValueAndValidity();
              console.log("wrongextension", this.getStartedSection);
            }
          }
        }, {
          key: "onTipsChangeImage",
          value: function onTipsChangeImage(e, index) {
            var _this4 = this;

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

                _this4.tipsArray.at(index).patchValue({
                  image: resp
                });

                console.log("full form", _this4.tipsSection);
              });
              this.tipsArray.controls[index].get('county').clearValidators(); // 6. Clear All Validators

              this.tipsArray.controls[index].get('county').updateValueAndValidity();
              console.log("rightextension", this.tipsSection);
              console.log("gussa na dila", this.tipsArray);
            } else {
              this.tipsArray.controls[index].get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator

              this.tipsArray.controls[index].get('county').updateValueAndValidity();
              console.log("wrongectension", this.tipsSection);
              console.log("gussa na dila", this.tipsArray);
            }
          }
        }, {
          key: "postcontent",
          value: function postcontent(type) {
            var _this5 = this;

            var obj;
            console.log("type==>", type);

            if (type == 'header') {
              if (this.headerSection.valid) {
                var formdata = new FormData();

                if (this.headingImageObj) {
                  console.log("yippeeeeeeee", this.headingImageObj);
                  var section_1 = {
                    is_visible: this.headerSection.controls['is_visible'].value
                  };
                  formdata.append("section_1", JSON.stringify(section_1));
                  formdata.append("image", this.headingImageObj);
                } else {
                  var _section_ = {
                    is_visible: this.headerSection.controls['is_visible'].value,
                    image: this.HeadingImage1
                  };
                  formdata.append("section_1", JSON.stringify(_section_)); //formdata.append("image", this.HeadingImage1)
                }

                obj = formdata;
              } else {
                this.headerSection.markAllAsTouched();
                return;
              }
            }

            if (type == 'tips') {
              console.log("i am invalid");
              console.log(this.tipsSection);

              if (this.tipsSection.valid) {
                console.log("i am valid section");

                if (this.tipsArray.valid) {
                  console.log("i am valid array");

                  var _formdata = new FormData();

                  var section_2 = {
                    image_heading: this.tipsSection.get('tipsArray').value,
                    is_visible: this.tipsSection.controls['is_visible'].value,
                    heading: this.tipsSection.controls['heading'].value,
                    sub_heading: this.tipsSection.controls['subheading'].value
                  };

                  _formdata.append("section_2", JSON.stringify(section_2));

                  obj = _formdata;
                } else {
                  this.tipsArray.markAllAsTouched();
                  return;
                }
              } else {
                this.tipsSection.markAllAsTouched();
                return;
              }
            }

            if (type == 'getstart') {
              if (this.getStartedSection.valid) {
                var _formdata2 = new FormData();

                if (this.headingImageObj) {
                  console.log("yippeeeeeeee", this.headingImageObj);
                  var section_3 = {
                    is_visible: this.getStartedSection.controls['is_visible'].value,
                    heading: this.getStartedSection.controls['heading'].value
                  };

                  _formdata2.append("section_3", JSON.stringify(section_3));

                  _formdata2.append("image", this.headingImageObj);
                } else {
                  var _section_2 = {
                    is_visible: this.getStartedSection.controls['is_visible'].value,
                    heading: this.getStartedSection.controls['heading'].value,
                    image: this.HeadingImage1
                  };

                  _formdata2.append("section_3", JSON.stringify(_section_2)); //formdata.append("image", this.HeadingImage1)

                }

                obj = _formdata2;
              } else {
                this.getStartedSection.markAllAsTouched();
                return;
              }
            }

            this.Service.postVideoIntroContent(obj).subscribe(function (resp) {
              _this5.Service.showMessage({
                message: "Submitted Successfully"
              });
            });
          }
        }]);

        return VideoIntroComponent;
      }();

      VideoIntroComponent.ctorParameters = function () {
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

      VideoIntroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-video-intro',
        template: _raw_loader_video_intro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_video_intro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_topgradservice_service__WEBPACK_IMPORTED_MODULE_7__["TopgradserviceService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], VideoIntroComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-content-management-video-intro-video-intro-module-es5.js.map