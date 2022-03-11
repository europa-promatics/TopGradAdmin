(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-management-video-intro3-video-intro3-module"], {
    /***/
    "8t5k": function t5k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"employer-header-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"step1Section\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Video Intro Step 3</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Step 3 Heading</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"3. Upload your video\" formControlName=\"heading\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(step1Section.controls.heading.touched || step1Section.controls.heading.dirty) && step1Section.controls.heading.invalid && step1Section.controls.heading?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter heading\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(step1Section.controls.heading.touched || step1Section.controls.heading.dirty) && step1Section.controls.heading.invalid && step1Section.controls.heading?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 200 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Image</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img resume_img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage1?HeadingImage1:'assets/img/tip_intro.png'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\" (change)=\"setHeadingImage($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"step1Section.controls['Image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"step1Section.controls.county?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label >Description</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\"></editor>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(step1Section.controls.description.touched || step1Section.controls.description.dirty) && step1Section.controls.description.invalid && step1Section.controls.description?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(step1Section.controls.description.touched || step1Section.controls.description.dirty) && step1Section.controls.description.invalid && step1Section.controls.description?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 200 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('step1')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n<section class=\"work-for-sec\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"step2Section\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"manage-home-header\">\n\t\t\t\t\t\t\t<div class=\"card-header d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t<strong>Last section</strong>\n\t\t\t\t\t\t\t\t<div class=\"slide-cs\">\n\t\t\t\t\t\t\t\t\t<span class=\"mr-2\">Visibility </span>\n\t\t\t\t\t\t\t\t\t<mat-slide-toggle formControlName=\"is_visible\" (change)=\"fun1($event)\"></mat-slide-toggle>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"home-mng-form\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Image</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img resume_img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage2?HeadingImage2:'assets/img/stepsl_img.png'\"  class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\" (change)=\"setHeadingImage1($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"step2Section.controls['Image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"step2Section.controls.county?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\"></editor>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(step2Section.controls.description.touched || step2Section.controls.description.dirty) && step2Section.controls.description.invalid && step2Section.controls.description?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(step2Section.controls.description.touched || step2Section.controls.description.dirty) && step2Section.controls.description.invalid && step2Section.controls.description?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t**Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent('step2')\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";
      /***/
    },

    /***/
    "QAtP": function QAtP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoIntro3Component", function () {
        return VideoIntro3Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_video_intro3_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./video-intro3.component.html */
      "8t5k");
      /* harmony import */


      var _video_intro3_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./video-intro3.component.scss */
      "f3cQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _topgradservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../topgradservice.service */
      "DL5e");

      var VideoIntro3Component = /*#__PURE__*/function () {
        function VideoIntro3Component(Service, _snackBar, router, fb) {
          _classCallCheck(this, VideoIntro3Component);

          this.Service = Service;
          this._snackBar = _snackBar;
          this.router = router;
          this.fb = fb;
          this.step1Section = this.fb.group({
            heading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(200)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            Image: [''],
            is_visible: [''],
            county: ['']
          });
          this.step2Section = this.fb.group({
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            Image: [''],
            is_visible: [''],
            county: ['']
          });
        }

        _createClass(VideoIntro3Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getcontent();
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
          key: "getcontent",
          value: function getcontent() {
            var _this = this;

            this.Service.videointrocontent().subscribe(function (data) {
              console.log("recruitment page content is ====>", data);
              _this.HeadingImage1 = data.data.section_9.image;
              _this.HeadingImage2 = data.data.section_10.image;

              _this.step1Section.patchValue({
                heading: data.data.section_9.heading,
                description: data.data.section_9.description,
                Image: data.data.section_9.image,
                is_visible: data.data.section_9.is_visible
              });

              _this.step2Section.patchValue({
                description: data.data.section_10.description,
                Image: data.data.section_10.image,
                is_visible: data.data.section_10.is_visible
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
              this.step1Section.patchValue({
                Image: this.headingImageObj
              });
              var reader = new FileReader();

              reader.onload = function (event) {
                _this2.HeadingImage1 = event.target.result;
              };

              reader.readAsDataURL(this.headingImageObj);
              this.step1Section.get('county').clearValidators(); // 6. Clear All Validators

              this.step1Section.get('county').updateValueAndValidity();
              console.log("rightextension", this.step1Section);
            } else {
              this.step1Section.get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator

              this.step1Section.get('county').updateValueAndValidity();
              console.log("wrongextension", this.step1Section);
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
              this.step2Section.patchValue({
                Image: this.headingImageObj
              });
              var reader = new FileReader();

              reader.onload = function (event) {
                _this3.HeadingImage2 = event.target.result;
              };

              reader.readAsDataURL(this.headingImageObj);
              this.step2Section.get('county').clearValidators(); // 6. Clear All Validators

              this.step2Section.get('county').updateValueAndValidity();
              console.log("rightextension", this.step2Section);
            } else {
              this.step2Section.get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator

              this.step2Section.get('county').updateValueAndValidity();
              console.log("wrongextension", this.step2Section);
            }
          }
        }, {
          key: "postcontent",
          value: function postcontent(type) {
            var _this4 = this;

            var obj;
            console.log("type==>", type);

            if (type == 'step1') {
              console.log("i am step1 in", this.step1Section);

              if (this.step1Section.valid) {
                console.log("i am valid step 1", this.step1Section);
                var formdata = new FormData();

                if (this.headingImageObj) {
                  console.log("yippeeeeeeee", this.headingImageObj);
                  var section_9 = {
                    is_visible: this.step1Section.controls['is_visible'].value,
                    heading: this.step1Section.controls['heading'].value,
                    description: this.step1Section.controls['description'].value
                  };
                  formdata.append("section_9", JSON.stringify(section_9));
                  formdata.append("image", this.headingImageObj);
                } else {
                  var _section_ = {
                    is_visible: this.step1Section.controls['is_visible'].value,
                    heading: this.step1Section.controls['heading'].value,
                    description: this.step1Section.controls['description'].value,
                    image: this.HeadingImage1
                  };
                  formdata.append("section_9", JSON.stringify(_section_)); //formdata.append("image", this.HeadingImage1)
                }

                obj = formdata;
              } else {
                this.step1Section.markAllAsTouched();
                return;
              }
            }

            if (type == 'step2') {
              console.log("i am step1 in", this.step2Section);

              if (this.step2Section.valid) {
                console.log("i am valid step 1", this.step2Section);

                var _formdata = new FormData();

                if (this.headingImageObj) {
                  console.log("yippeeeeeeee", this.headingImageObj);
                  var section_10 = {
                    is_visible: this.step2Section.controls['is_visible'].value,
                    description: this.step2Section.controls['description'].value
                  };

                  _formdata.append("section_10", JSON.stringify(section_10));

                  _formdata.append("image", this.headingImageObj);
                } else {
                  var _section_2 = {
                    is_visible: this.step2Section.controls['is_visible'].value,
                    description: this.step2Section.controls['description'].value,
                    image: this.HeadingImage2
                  };

                  _formdata.append("section_10", JSON.stringify(_section_2)); //formdata.append("image", this.HeadingImage1)

                }

                obj = _formdata;
              } else {
                this.step2Section.markAllAsTouched();
                return;
              }
            }

            this.Service.postVideoIntroContent(obj).subscribe(function (resp) {
              _this4.Service.showMessage({
                message: "Submitted Successfully"
              });
            });
          }
        }]);

        return VideoIntro3Component;
      }();

      VideoIntro3Component.ctorParameters = function () {
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

      VideoIntro3Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-video-intro3',
        template: _raw_loader_video_intro3_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_video_intro3_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_topgradservice_service__WEBPACK_IMPORTED_MODULE_7__["TopgradserviceService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], VideoIntro3Component);
      /***/
    },

    /***/
    "WlFG": function WlFG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoIntro3RoutingModule", function () {
        return VideoIntro3RoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _video_intro3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./video-intro3.component */
      "QAtP");

      var routes = [{
        path: '',
        component: _video_intro3_component__WEBPACK_IMPORTED_MODULE_3__["VideoIntro3Component"]
      }];

      var VideoIntro3RoutingModule = function VideoIntro3RoutingModule() {
        _classCallCheck(this, VideoIntro3RoutingModule);
      };

      VideoIntro3RoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VideoIntro3RoutingModule);
      /***/
    },

    /***/
    "f3cQ": function f3cQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlby1pbnRybzMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "irEN": function irEN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoIntro3Module", function () {
        return VideoIntro3Module;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _video_intro3_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./video-intro3-routing.module */
      "WlFG");
      /* harmony import */


      var _video_intro3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./video-intro3.component */
      "QAtP");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @tinymce/tinymce-angular */
      "fB2i");

      var VideoIntro3Module = function VideoIntro3Module() {
        _classCallCheck(this, VideoIntro3Module);
      };

      VideoIntro3Module = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_video_intro3_component__WEBPACK_IMPORTED_MODULE_4__["VideoIntro3Component"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _video_intro3_routing_module__WEBPACK_IMPORTED_MODULE_3__["VideoIntro3RoutingModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_7__["EditorModule"]]
      })], VideoIntro3Module);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-content-management-video-intro3-video-intro3-module-es5.js.map