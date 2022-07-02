(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-management-view-sub-heading-view-sub-heading-module"], {
    /***/
    "Cq+C": function CqC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewSubHeadingRoutingModule", function () {
        return ViewSubHeadingRoutingModule;
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


      var _view_sub_heading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-sub-heading.component */
      "ze67");

      var routes = [{
        path: '',
        component: _view_sub_heading_component__WEBPACK_IMPORTED_MODULE_3__["ViewSubHeadingComponent"]
      }];

      var ViewSubHeadingRoutingModule = function ViewSubHeadingRoutingModule() {
        _classCallCheck(this, ViewSubHeadingRoutingModule);
      };

      ViewSubHeadingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewSubHeadingRoutingModule);
      /***/
    },

    /***/
    "LAy1": function LAy1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"add_hdng sec\">\n\t<div class=\"container\">\n\t    <div class=\"row\">\n\t      <div class=\"col-md-12\">\n\t      \t<div class=\"card\">\n\t      \t\t<div class=\"manage-home-header\">\n\t      \t\t\t<div class=\"card-header\">\n\t      \t\t\t\t<strong>View Sub Heading</strong>\n\t      \t\t\t</div>\n\t      \t\t\t<div class=\"card-body\">\n\t      \t\t\t\t<form [formGroup]=\"viewsubheadingform\">\n\t\t      \t\t\t\t<div class=\"home-mng-form\">\n\t\t      \t\t\t\t\t<!-- <div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Category</label>\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\">\n\t\t\t\t\t\t                <option>General</option>\n\t\t\t\t\t\t                <option>My Account</option>\n\t\t\t\t\t\t                <option>Jobs</option>\n\t\t\t\t\t\t                <option>Permissions & Privacy</option>\n\t\t\t\t\t\t            </select>\n\t\t\t\t\t\t\t\t</div> -->\n\t\t      \t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Title</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Enter Title\" formControlName=\"title\">\n\t\t\t\t\t\t\t\t</div>\n                                <div *ngIf=\"(viewsubheadingform.controls.title?.touched || viewsubheadingform.controls.title?.dirty) && viewsubheadingform.controls.title?.invalid && viewsubheadingform.controls.title.errors?.required\" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t*Please enter title\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\"></editor>\n\t\t\t\t\t\t\t\t</div>\n                                <div *ngIf=\"(viewsubheadingform.controls.description?.touched || viewsubheadingform.controls.description?.dirty) && viewsubheadingform.controls.description?.invalid && viewsubheadingform.controls.description.errors?.required\" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" routerLink=\"/editSubHeading/{{this.content_id}}/{{this.id}}/{{type}}\">Edit</button>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=navigate()>Back</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t</div>\n\t\t      \t\t\t</form>\n\t      \t\t\t</div>\n\t\t      \t</div>\n\t      \t</div>\n\t      </div>\n\t  \t</div>\n\t</div>\n</section>\n\n";
      /***/
    },

    /***/
    "e8xx": function e8xx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewSubHeadingModule", function () {
        return ViewSubHeadingModule;
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


      var _view_sub_heading_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-sub-heading-routing.module */
      "Cq+C");
      /* harmony import */


      var _view_sub_heading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./view-sub-heading.component */
      "ze67");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @tinymce/tinymce-angular */
      "crmZ");

      var ViewSubHeadingModule = function ViewSubHeadingModule() {
        _classCallCheck(this, ViewSubHeadingModule);
      };

      ViewSubHeadingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_view_sub_heading_component__WEBPACK_IMPORTED_MODULE_4__["ViewSubHeadingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _view_sub_heading_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewSubHeadingRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_6__["EditorModule"]]
      })], ViewSubHeadingModule);
      /***/
    },

    /***/
    "wzsI": function wzsI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXN1Yi1oZWFkaW5nLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "ze67": function ze67(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewSubHeadingComponent", function () {
        return ViewSubHeadingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_view_sub_heading_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./view-sub-heading.component.html */
      "LAy1");
      /* harmony import */


      var _view_sub_heading_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view-sub-heading.component.scss */
      "wzsI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _topgradservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../topgradservice.service */
      "DL5e");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      var ViewSubHeadingComponent = /*#__PURE__*/function () {
        function ViewSubHeadingComponent(route, Service, _formBuilder, _snackBar, location) {
          _classCallCheck(this, ViewSubHeadingComponent);

          this.route = route;
          this.Service = Service;
          this._formBuilder = _formBuilder;
          this._snackBar = _snackBar;
          this.location = location;
          this.viewsubheadingform = this._formBuilder.group({
            'title': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            'description': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
          });
        }

        _createClass(ViewSubHeadingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getsubheading();
            this.content_id = this.route.snapshot.paramMap.get('content_id');
            this.id = this.route.snapshot.paramMap.get('id');
            this.type = this.route.snapshot.paramMap.get('type');
            console.log("such a boring day... such a boring people ", this.id, this.content_id);
          }
        }, {
          key: "getsubheading",
          value: function getsubheading() {
            var _this = this;

            var obj = {
              content_id: this.route.snapshot.paramMap.get('content_id'),
              sub_heading_id: this.route.snapshot.paramMap.get('id')
            };
            console.log("getsubheading   obj", obj);
            this.Service.getsubheading(obj).subscribe(function (res) {
              console.log("response", res);

              _this.viewsubheadingform.patchValue({
                title: res.data[0].sub_heading[0].title,
                description: res.data[0].sub_heading[0].description
              });
            });
          }
        }, {
          key: "navigate",
          value: function navigate() {
            this.location.back();
          }
        }]);

        return ViewSubHeadingComponent;
      }();

      ViewSubHeadingComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _topgradservice_service__WEBPACK_IMPORTED_MODULE_5__["TopgradserviceService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
        }];
      };

      ViewSubHeadingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-sub-heading',
        template: _raw_loader_view_sub_heading_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_sub_heading_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _topgradservice_service__WEBPACK_IMPORTED_MODULE_5__["TopgradserviceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])], ViewSubHeadingComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-content-management-view-sub-heading-view-sub-heading-module-es5.js.map