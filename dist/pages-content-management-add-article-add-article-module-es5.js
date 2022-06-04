(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-management-add-article-add-article-module"], {
    /***/
    "8I3c": function I3c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddArticleRoutingModule", function () {
        return AddArticleRoutingModule;
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


      var _add_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-article.component */
      "rKq+");

      var routes = [{
        path: '',
        component: _add_article_component__WEBPACK_IMPORTED_MODULE_3__["AddArticleComponent"]
      }];

      var AddArticleRoutingModule = function AddArticleRoutingModule() {
        _classCallCheck(this, AddArticleRoutingModule);
      };

      AddArticleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddArticleRoutingModule);
      /***/
    },

    /***/
    "K8is": function K8is(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "KXHg": function KXHg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddArticleModule", function () {
        return AddArticleModule;
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


      var _add_article_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-article-routing.module */
      "8I3c");
      /* harmony import */


      var _add_article_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-article.component */
      "rKq+");
      /* harmony import */


      var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @tinymce/tinymce-angular */
      "fB2i");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var AddArticleModule = function AddArticleModule() {
        _classCallCheck(this, AddArticleModule);
      };

      AddArticleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_article_component__WEBPACK_IMPORTED_MODULE_4__["AddArticleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _add_article_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddArticleRoutingModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_5__["EditorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
      })], AddArticleModule);
      /***/
    },

    /***/
    "rKq+": function rKq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddArticleComponent", function () {
        return AddArticleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_article_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-article.component.html */
      "vAPR");
      /* harmony import */


      var _add_article_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-article.component.scss */
      "K8is");
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

      var AddArticleComponent = /*#__PURE__*/function () {
        function AddArticleComponent(Service, _snackBar, router, fb) {
          _classCallCheck(this, AddArticleComponent);

          this.Service = Service;
          this._snackBar = _snackBar;
          this.router = router;
          this.fb = fb;
          this.type_article = '';
          this.addArticleform = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(200)]],
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            postedby: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
            postdescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(5000)]],
            Image: [''],
            is_visible: [''],
            county: ['']
          });
        }

        _createClass(AddArticleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.type_article = " ";
          }
        }, {
          key: "article",
          value: function article(event) {
            console.log(event.target.value);
            this.type_article = event.target.value;
            console.log("type============>", this.type_article);
          }
        }, {
          key: "category",
          value: function category(event) {
            console.log(event.target.value);
            this.category_type = event.target.value;
            console.log("type============>", this.category_type);
          }
        }, {
          key: "setHeadingImage",
          value: function setHeadingImage(event) {
            var _this = this;

            console.log(event.target.files[0]);
            var file = event.target.files[0];
            var fileType = file.type.split("/")[0];
            console.log(fileType);

            if (fileType == "image") {
              this.headingImageObj = event.target.files[0];
              var formData = new FormData();
              formData.append('image', this.headingImageObj);
              this.Service.uploadbenefitmedia(formData).subscribe(function (resp) {
                console.log("image response ==>", resp);

                _this.addArticleform.patchValue({
                  Image: resp
                });
              });
              var reader = new FileReader();

              reader.onload = function (event) {
                _this.HeadingImage1 = event.target.result;
              };

              reader.readAsDataURL(this.headingImageObj);
              this.addArticleform.get('county').clearValidators(); // 6. Clear All Validators

              this.addArticleform.get('county').updateValueAndValidity();
              console.log("rightextension", this.addArticleform);
            } else {
              this.addArticleform.get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator

              this.addArticleform.get('county').updateValueAndValidity();
              console.log("wrongextension", this.addArticleform);
            }
          }
        }, {
          key: "setHeadingImage1",
          value: function setHeadingImage1(event) {
            var _this2 = this;

            console.log(event.target.files[0]);
            var file = event.target.files[0];
            var fileType = file.type.split("/")[0];
            console.log(fileType);

            if (fileType == "image") {
              this.headingImageObj = event.target.files[0];
              var formData = new FormData();
              formData.append('image', this.headingImageObj);
              this.Service.uploadbenefitmedia(formData).subscribe(function (resp) {
                console.log("image response ==>", resp);

                _this2.addArticleform.patchValue({
                  Image: resp
                });
              });
              var reader = new FileReader();

              reader.onload = function (event) {
                _this2.HeadingImage2 = event.target.result;
              };

              reader.readAsDataURL(this.headingImageObj);
              this.addArticleform.get('county').clearValidators(); // 6. Clear All Validators

              this.addArticleform.get('county').updateValueAndValidity();
              console.log("rightextension", this.addArticleform);
            } else {
              this.addArticleform.get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator

              this.addArticleform.get('county').updateValueAndValidity();
              console.log("wrongextension", this.addArticleform);
            }
          }
        }, {
          key: "postcontent",
          value: function postcontent() {
            var _this3 = this;

            var obj;

            if (this.addArticleform.valid) {
              console.log("hmara form", this.addArticleform);
              var formdata = new FormData();
              console.log("yippeeeeeeee", this.headingImageObj);
              formdata.append("article_type", this.addArticleform.controls['type'].value);
              formdata.append("category", this.addArticleform.controls['category'].value);
              formdata.append("article_title", this.addArticleform.controls['title'].value);
              formdata.append("article_description", this.addArticleform.controls['description'].value);
              formdata.append("posted_by", this.addArticleform.controls['postedby'].value);
              formdata.append("posted_description", this.addArticleform.controls['postdescription'].value);

              if (this.addArticleform.controls['type'].value == 'small_article') {
                var medias = [{
                  "for": "main",
                  "url": this.addArticleform.controls['Image'].value
                }];
                var newmedia = JSON.stringify(medias);
                console.log("newmedia==========>>>", newmedia);
                formdata.append("medias", JSON.stringify(medias));
              }

              if (this.addArticleform.controls['type'].value == 'large_article') {
                var _medias = [{
                  "for": "article_image",
                  url: this.addArticleform.controls['Image'].value
                }];

                var _newmedia = JSON.stringify(_medias);

                console.log("newmedia==========>>>", _newmedia);
                formdata.append("medias", JSON.stringify(_medias));
              }

              obj = formdata;
            } else {
              this.addArticleform.markAllAsTouched();
              return;
            }

            console.log("objjjjjjjj===========>", obj);
            this.Service.addArticleContent(obj).subscribe(function (resp) {
              _this3.Service.showMessage({
                message: "Submitted Successfully"
              });
            });
          }
        }]);

        return AddArticleComponent;
      }();

      AddArticleComponent.ctorParameters = function () {
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

      AddArticleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-article',
        template: _raw_loader_add_article_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_article_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_topgradservice_service__WEBPACK_IMPORTED_MODULE_7__["TopgradserviceService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], AddArticleComponent);
      /***/
    },

    /***/
    "vAPR": function vAPR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"home-header-sec\">\n\t<div class=\"container\">\n\t    <div class=\"row\">\n\t      <div class=\"col-md-12\">\n\t      \t<div class=\"card\">\n\t      \t\t<div class=\"manage-home-header\">\n\t      \t\t\t<div class=\"card-header\">\n\t      \t\t\t\t<strong>Add Article</strong>\n\t      \t\t\t</div>\n\t      \t\t\t<div class=\"card-body\">\n\t      \t\t\t\t<form [formGroup]=\"addArticleform\">\n\t\t      \t\t\t\t<div class=\"home-mng-form\">\n\t\t      \t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Article Title</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Enter Title\" formControlName=\"title\" oninput=\"this.value = !this.value.trim() ? this.value.trim() : this.value\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"(addArticleform.controls.title.touched || addArticleform.controls.title.dirty) && addArticleform.controls.title.invalid && addArticleform.controls.title?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t*Please enter title\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"(addArticleform.controls.title.touched || addArticleform.controls.title.dirty) && addArticleform.controls.title.invalid && addArticleform.controls.title?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t**Maximum Length should be 200 characters\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Article Type</label>\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" placeholder=\"Enter Type\" formControlName=\"type\" (change)=\"article($event)\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"small_article\">Small Article</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"large_article\">Large Article</option>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Category</label>\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" placeholder=\"Enter Type\" formControlName=\"category\" (change)=\"category($event)\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"resumes\">Resumes</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"cover_letters\">Cover Letters</option>\n\t\t\t\t\t\t\t            <option value=\"internships\">Internships</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"job_interviews\">Job Interviews</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"job_trends\">Job Trends</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"linked_in\">LinkedIn</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"(addArticleform.controls.category.touched || addArticleform.controls.category.dirty) && addArticleform.controls.category.invalid && addArticleform.controls.category?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t*Please enter category\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"(addArticleform.controls.category.touched || addArticleform.controls.category.dirty) && addArticleform.controls.category.invalid && addArticleform.controls.category?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t**Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Article Description</label>\n\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\"></editor>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"(addArticleform.controls.description.touched || addArticleform.controls.description.dirty) && addArticleform.controls.description.invalid && addArticleform.controls.description?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"(addArticleform.controls.description.touched || addArticleform.controls.description.dirty) && addArticleform.controls.description.invalid && addArticleform.controls.description?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t**Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Posted By</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Enter name here\" formControlName=\"postedby\" oninput=\"this.value = !this.value.trim() ? this.value.trim() : this.value\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"(addArticleform.controls.postedby.touched || addArticleform.controls.postedby.dirty) && addArticleform.controls.postedby.invalid && addArticleform.controls.postedby?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t*Please enter name\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"(addArticleform.controls.postedby.touched || addArticleform.controls.postedby.dirty) && addArticleform.controls.postedby.invalid && addArticleform.controls.postedby?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t**Maximum Length should be 50 characters\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Posted Description</label>\n\t\t\t\t\t\t\t\t\t<editor formControlName=\"postdescription\"></editor>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"(addArticleform.controls.postdescription.touched || addArticleform.controls.postdescription.dirty) && addArticleform.controls.postdescription.invalid && addArticleform.controls.postdescription?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"(addArticleform.controls.postdescription.touched || addArticleform.controls.postdescription.dirty) && addArticleform.controls.postdescription.invalid && addArticleform.controls.postdescription?.errors?.maxlength  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t**Maximum Length should be 5000 characters\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"type_article =='large_article'\">\n\t\t\t\t\t\t\t\t\t<label>Article Image</label>\n\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img\">\n\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage1?HeadingImage1:'assets/img/dummy.png'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\" (change)=\"setHeadingImage($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"addArticleform.controls['Image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"addArticleform.controls.county?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\" *ngIf=\"type_article == 'small_article'\">\n\t\t\t\t\t\t\t\t\t<label>Banner Image</label>\n\t\t\t\t\t\t\t\t\t<div class=\"slider-video-cntnt\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"prev-upld-img\">\n\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"HeadingImage2?HeadingImage2:'assets/img/dummy.png'\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-imag text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn-primary btn  mt-3 position-relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"\" class=\"img-input-upld\" (change)=\"setHeadingImage1($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"addArticleform.controls['Image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"addArticleform.controls.county?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"postcontent()\">Save</button>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t</div>\n\t\t      \t\t\t</form>\n\t      \t\t\t</div>\n\t\t      \t</div>\n\t      \t</div>\n\t      </div>\n\t  \t</div>\n\t</div>\n</section>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-content-management-add-article-add-article-module-es5.js.map