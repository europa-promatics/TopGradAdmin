(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-support-management-faq_emp-grad-edit-faq-edit-faq-module"], {
    /***/
    "Krsj": function Krsj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditFaqRoutingModule", function () {
        return EditFaqRoutingModule;
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


      var _edit_faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-faq.component */
      "u7tu");

      var routes = [{
        path: '',
        component: _edit_faq_component__WEBPACK_IMPORTED_MODULE_3__["EditFaqComponent"]
      }];

      var EditFaqRoutingModule = function EditFaqRoutingModule() {
        _classCallCheck(this, EditFaqRoutingModule);
      };

      EditFaqRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditFaqRoutingModule);
      /***/
    },

    /***/
    "Q8q4": function Q8q4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWZhcS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "R3CR": function R3CR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditFaqModule", function () {
        return EditFaqModule;
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


      var _edit_faq_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-faq-routing.module */
      "Krsj");

      var EditFaqModule = function EditFaqModule() {
        _classCallCheck(this, EditFaqModule);
      };

      EditFaqModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _edit_faq_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditFaqRoutingModule"]]
      })], EditFaqModule);
      /***/
    },

    /***/
    "TMif": function TMif(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"home-header-sec\">\n\t<div class=\"container\">\n\t    <div class=\"row\">\n\t      <div class=\"col-md-12\">\n\t      \t<div class=\"card\">\n\t      \t\t<div class=\"manage-home-header\">\n\t      \t\t\t<div class=\"card-header\">\n\t      \t\t\t\t<strong>Employer Edit FAQ</strong>\n\t      \t\t\t</div>\n\t      \t\t\t<div class=\"card-body\">\n\t      \t\t\t\t<form [formGroup]=\"inputTitle\">\n\t\t      \t\t\t\t<div class=\"home-mng-form\">\n\t\t      \t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Category</label>\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\"  formControlName=\"category_id\" [(ngModel)]=\"selectedValue\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let row of faq\"  [ngValue]=\"row._id\" [selected]=\"row._id==selectedValue\" >{{row?.name}}</option>\n\t\t\t\t\t\t                <!-- <option>My Account</option>\n\t\t\t\t\t\t                <option>Jobs</option>\n\t\t\t\t\t\t                <option>Permissions & Privacy</option> -->\n\t\t\t\t\t\t            </select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Title</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Enter Title\" formControlName=\"title\" [(ngModel)]=\"title1\" >\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"( inputTitle.controls.title?.dirty)\n\t\t\t\t\t\t\t\t\t&& inputTitle.controls.title?.invalid && inputTitle.controls.title?.errors?.required\" style=\"color:red\" >\n\t\t\t\t\t\t\t\t\t*Please enter title here....\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\" [(ngModel)]=\"description1\"></editor>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"(inputTitle.controls.description?.touched || inputTitle.controls.description?.dirty)\n\t\t\t\t\t\t\t\t\t&& inputTitle.controls.description?.invalid && inputTitle.controls.description?.errors?.required\" style=\"color:red\" >\n\t\t\t\t\t\t\t\t\t*Please enter description here....\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t<button mat-stroked-button (click)=\"openSnackBar()\"  class=\"btn btn-primary mr-4\" (click)=\"addEditFaq(this.id)\">Save</button>\n\t\t\t\t\t\t\t\t\t<button  class=\"btn btn-primary\"  routerLink='/employersFaq'>Back</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t</div>\n\t\t      \t\t\t</form>\n\t      \t\t\t</div>\n\t\t      \t</div>\n\t      \t</div>\n\t      </div>\n\t  \t</div>\n\t</div>\n</section>\n\n";
      /***/
    },

    /***/
    "u7tu": function u7tu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditFaqComponent", function () {
        return EditFaqComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_faq_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-faq.component.html */
      "TMif");
      /* harmony import */


      var _edit_faq_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-faq.component.scss */
      "Q8q4");
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
      /*! ../../../../topgradservice.service */
      "DL5e");

      var EditFaqComponent = /*#__PURE__*/function () {
        function EditFaqComponent(_snackBar, route, Service, fb, router) {
          _classCallCheck(this, EditFaqComponent);

          this._snackBar = _snackBar;
          this.route = route;
          this.Service = Service;
          this.fb = fb;
          this.router = router;
          this.faq = [];
          this.title1 = [];
          this.inputTitle = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            category_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }

        _createClass(EditFaqComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.faq_id();
            this.getFaqCategories();
            this.title = "";
            this.description = "";
            this.faq = "";
            this.title1 = "";
          }
        }, {
          key: "getFaqCategories",
          value: function getFaqCategories() {
            var _this = this;

            var data = {
              user_type: 'employer'
            };
            console.log("categories=============", data);
            this.Service.faqCategories(data).subscribe(function (data) {
              console.log("fgdfgfgdfgdfgdfgdfgdfgdgf", data);
              _this.faq = data.data;
            }, function (err) {
              console.log(err.status);

              if (err.status >= 404) {
                console.log('Some error occured');
              } else {
                _this.toastr.error('Some error occured, please try again!!', 'Error');
              }
            });
          }
        }, {
          key: "faq_id",
          value: function faq_id() {
            var _this2 = this;

            var obj = {
              faq_id: this.route.snapshot.paramMap.get('id')
            };
            console.log("onnnn", obj);
            this.Service.faqDetail(obj).subscribe(function (data) {
              console.log("main data for users is ssssssssssssssssssss====", data);
              _this2.user = data.data;
              _this2.description1 = _this2.user.description;
              _this2.title1 = _this2.user.title;
              _this2.selectedValue = _this2.user.category_id._id; // this.ngOnInit()
            }, function (err) {
              console.log(err.status);

              if (err.status >= 404) {
                console.log('Some error occured');
              } else {
                _this2.toastr.error('Some error occured, please try again!!', 'Error');

                console.log('Internet Connection Error');
              }
            });
          }
        }, {
          key: "edit_faq",
          value: function edit_faq(id) {
            console.log("", id);
            this.id = id;
          }
        }, {
          key: "openSnackBar",
          value: function openSnackBar() {
            this.id = this.id;
          }
        }, {
          key: "addEditFaq",
          value: function addEditFaq(id) {
            var _this3 = this;

            console.log("formmmmmmmmmmmm", this.inputTitle);

            if (this.inputTitle.invalid) {
              this.inputTitle.markAllAsTouched();
            } else {
              var obj = {
                faq_id: this.route.snapshot.paramMap.get('id'),
                category_id: this.inputTitle.controls.category_id.value,
                title: this.inputTitle.controls.title.value,
                description: this.inputTitle.controls.description.value
              };
              console.log("AddingFaq=========>", obj);
              this.Service.addEditFaq(obj).subscribe(function (res) {
                console.log("Response==========", res);

                _this3.Service.showMessage({
                  message: "Edit Successfully"
                });

                _this3.router.navigate(['/employersFaq']);
              });
            }
          }
        }]);

        return EditFaqComponent;
      }();

      EditFaqComponent.ctorParameters = function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _topgradservice_service__WEBPACK_IMPORTED_MODULE_7__["TopgradserviceService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      EditFaqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-faq',
        template: _raw_loader_edit_faq_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_faq_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _topgradservice_service__WEBPACK_IMPORTED_MODULE_7__["TopgradserviceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], EditFaqComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-support-management-faq_emp-grad-edit-faq-edit-faq-module-es5.js.map