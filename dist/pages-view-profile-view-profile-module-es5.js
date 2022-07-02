(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-view-profile-view-profile-module"], {
    /***/
    "29AY": function AY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "TmL7": function TmL7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewProfileComponent", function () {
        return ViewProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_view_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./view-profile.component.html */
      "fsQA");
      /* harmony import */


      var _view_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view-profile.component.scss */
      "29AY");
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

      var ViewProfileComponent = /*#__PURE__*/function () {
        function ViewProfileComponent(Service, _snackBar, _formBuilder, router) {
          _classCallCheck(this, ViewProfileComponent);

          this.Service = Service;
          this._snackBar = _snackBar;
          this._formBuilder = _formBuilder;
          this.router = router;
          this.profileform = this._formBuilder.group({
            'first_name': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            'last_name': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            'image': [''],
            county: ['']
          });
          console.log(this.profileform);
        }

        _createClass(ViewProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.admindetails();
            this.first_name = localStorage.getItem('first_name');
            console.log("gyuyutyty", this.first_name);
          }
        }, {
          key: "onSelect",
          value: function onSelect(e) {
            var _this = this;

            console.log(e);
            console.log(e.target.files[0].name);
            var file = e.target.files[0];
            var fileType = file.type.split("/")[0];
            console.log(fileType);

            if (fileType == "image") {
              this.selectedfile = e.target.files[0];
              var _file = e.target.files[0];
              var reader = new FileReader();

              reader.onload = function (e) {
                return _this.imageSrc = reader.result;
              };

              reader.readAsDataURL(_file);
              this.profileform.get('county').clearValidators(); // 6. Clear All Validators

              this.profileform.get('county').updateValueAndValidity();
              console.log("rightextension", this.profileform);
            } else {
              this.profileform.get('county').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]); // 5.Set Required Validator

              this.profileform.get('county').updateValueAndValidity();
              console.log("wrongextension", this.profileform);
            }
          }
        }, {
          key: "admindetails",
          value: function admindetails() {
            this.first_name = localStorage.getItem('first_name');
            this.last_name = localStorage.getItem('last_name');
            this.email = localStorage.getItem('admin_email');
            this.image = localStorage.getItem('image');
          }
        }, {
          key: "editprofile",
          value: function editprofile() {
            var _this2 = this;

            var formData = new FormData();
            formData.append('image', this.selectedfile);
            formData.append('first_name', this.profileform.value.first_name);
            formData.append('last_name', this.profileform.value.last_name);
            formData.append('email', this.profileform.value.email); // var obj={
            //   first_name:this.profileform.value.first_name,
            //   last_name:this.profileform.value.last_name,
            //   email:this.profileform.value.email
            // }

            this.Service.profile(formData).subscribe(function (res) {
              console.log("fgdgfdgfdfgdfgd", res); // localStorage.setItem("admin_details",JSON.stringify(res.obj.email))

              if (res.code == 200) {
                _this2.Service.showMessage({
                  message: "Profile Updated Succsessfully"
                });

                localStorage.setItem('first_name', res.data.first_name);
                localStorage.setItem('last_name', res.data.last_name);
                localStorage.setItem('admin_email', res.data.email);
                localStorage.setItem('image', res.data.image);
              }
            }, function (err) {
              console.log("hjjhgjhghjgjhghjgjhghjg", err);

              _this2.Service.showMessage({
                message: err.error.errors.msg ? err.error.errors.msg : 'Something went Wrong'
              });
            });
          }
        }]);

        return ViewProfileComponent;
      }();

      ViewProfileComponent.ctorParameters = function () {
        return [{
          type: _topgradservice_service__WEBPACK_IMPORTED_MODULE_7__["TopgradserviceService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      ViewProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-profile',
        template: _raw_loader_view_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_topgradservice_service__WEBPACK_IMPORTED_MODULE_7__["TopgradserviceService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], ViewProfileComponent);
      /***/
    },

    /***/
    "fsQA": function fsQA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"edit-employer-sec\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t<strong>My Profile</strong>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"edit-wrapper\">\n                            <form [formGroup]=\"profileform\">\n\t\t\t\t\t\t\t\t<div class=\"text-center edit-profile\">\n\t\t\t\t\t\t\t\t\t<span class=\"user_dp position-relative\">\n\t\t\t\t\t\t\t\t\t\t<!-- <img src=\"{{this.image}}\" *ngIf=\"this?.image\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/avatars/8.jpg\" *ngIf=\"!this?.image\" class=\"img-fluid\"> -->\n\t\t\t\t\t\t\t\t\t\t<img id=\"blah\" [src]=\"imageSrc || image\"  class=\"img-fluid\"/>\n\t\t\t\t\t\t\t\t\t\t<mat-icon class=\"material-icons-outlined dp-icon\">edit</mat-icon>\n\t\t\t\t\t\t\t\t\t\t<input type=\"file\" class=\"dp-input\" (change)=\"onSelect($event)\" accept=\"image/*\" >\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"profileform.controls['image']?.errors?.required \"\n\t\t\t\t\t\t\t\t\tclass=\"invalid\">\n\t\t\t\t\t\t\t\t\t*Please select image\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"profileform.controls.county?.errors?.required  \" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t*Only images are allowed\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"edit-form mt-4\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-form-fields\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row justify-content-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>First Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"\" [ngModel]=\"first_name | titlecase\" (ngModelChange)=\"first_name\"  [formControl]=\"profileform.controls['first_name']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(profileform.touched || profileform.dirty) && profileform.invalid && profileform.controls.first_name?.errors?.required\" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please enter firstname\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Last Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"\" [ngModel]=\"last_name | titlecase\"  (ngModelChange)=\"last_name=$event\" [formControl]=\"profileform.controls['last_name']\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(profileform.touched || profileform.dirty) && profileform.invalid && profileform.controls.last_name?.errors?.required\" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please enter lastname\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Email Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"\" [formControl]=\"profileform.controls['email']\" [(ngModel)]=\"email\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"(profileform.touched || profileform.dirty) && profileform.invalid && profileform.controls.email?.errors?.required\" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*Please enter email\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Contact Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"+12 87543743\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" (click)=\"editprofile()\">Save</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n";
      /***/
    },

    /***/
    "s4pf": function s4pf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewProfileRoutingModule", function () {
        return ViewProfileRoutingModule;
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


      var _view_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-profile.component */
      "TmL7");

      var routes = [{
        path: '',
        component: _view_profile_component__WEBPACK_IMPORTED_MODULE_3__["ViewProfileComponent"]
      }];

      var ViewProfileRoutingModule = function ViewProfileRoutingModule() {
        _classCallCheck(this, ViewProfileRoutingModule);
      };

      ViewProfileRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewProfileRoutingModule);
      /***/
    },

    /***/
    "xMQH": function xMQH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewProfileModule", function () {
        return ViewProfileModule;
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


      var _view_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-profile-routing.module */
      "s4pf");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _view_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./view-profile.component */
      "TmL7");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54"); // import { BrowserModule } from '@angular/platform-browser';


      var ViewProfileModule = function ViewProfileModule() {
        _classCallCheck(this, ViewProfileModule);
      };

      ViewProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_view_profile_component__WEBPACK_IMPORTED_MODULE_5__["ViewProfileComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _view_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewProfileRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"] // BrowserModule
        ]
      })], ViewProfileModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-view-profile-view-profile-module-es5.js.map