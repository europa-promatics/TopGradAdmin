(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-management-view-sub-heading-view-sub-heading-module"],{

/***/ "Cq+C":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/content-management/view-sub-heading/view-sub-heading-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: ViewSubHeadingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSubHeadingRoutingModule", function() { return ViewSubHeadingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_sub_heading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-sub-heading.component */ "ze67");




const routes = [
    {
        path: '',
        component: _view_sub_heading_component__WEBPACK_IMPORTED_MODULE_3__["ViewSubHeadingComponent"]
    }
];
let ViewSubHeadingRoutingModule = class ViewSubHeadingRoutingModule {
};
ViewSubHeadingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ViewSubHeadingRoutingModule);



/***/ }),

/***/ "LAy1":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content-management/view-sub-heading/view-sub-heading.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"add_hdng sec\">\n\t<div class=\"container\">\n\t    <div class=\"row\">\n\t      <div class=\"col-md-12\">\n\t      \t<div class=\"card\">\n\t      \t\t<div class=\"manage-home-header\">\n\t      \t\t\t<div class=\"card-header\">\n\t      \t\t\t\t<strong>View Sub Heading</strong>\n\t      \t\t\t</div>\n\t      \t\t\t<div class=\"card-body\">\n\t      \t\t\t\t<form [formGroup]=\"viewsubheadingform\">\n\t\t      \t\t\t\t<div class=\"home-mng-form\">\n\t\t      \t\t\t\t\t<!-- <div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Category</label>\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\">\n\t\t\t\t\t\t                <option>General</option>\n\t\t\t\t\t\t                <option>My Account</option>\n\t\t\t\t\t\t                <option>Jobs</option>\n\t\t\t\t\t\t                <option>Permissions & Privacy</option>\n\t\t\t\t\t\t            </select>\n\t\t\t\t\t\t\t\t</div> -->\n\t\t      \t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Title</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Enter Title\" formControlName=\"title\">\n\t\t\t\t\t\t\t\t</div>\n                                <div *ngIf=\"(viewsubheadingform.controls.title?.touched || viewsubheadingform.controls.title?.dirty) && viewsubheadingform.controls.title?.invalid && viewsubheadingform.controls.title.errors?.required\" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t*Please enter title\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t<editor formControlName=\"description\"></editor>\n\t\t\t\t\t\t\t\t</div>\n                                <div *ngIf=\"(viewsubheadingform.controls.description?.touched || viewsubheadingform.controls.description?.dirty) && viewsubheadingform.controls.description?.invalid && viewsubheadingform.controls.description.errors?.required\" class=\"invalid\">\n\t\t\t\t\t\t\t\t\t*Please enter description\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary mr-4\" routerLink=\"/editSubHeading/{{this.content_id}}/{{this.id}}\">Edit</button>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Back</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t</div>\n\t\t      \t\t\t</form>\n\t      \t\t\t</div>\n\t\t      \t</div>\n\t      \t</div>\n\t      </div>\n\t  \t</div>\n\t</div>\n</section>\n\n");

/***/ }),

/***/ "e8xx":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/content-management/view-sub-heading/view-sub-heading.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ViewSubHeadingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSubHeadingModule", function() { return ViewSubHeadingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _view_sub_heading_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-sub-heading-routing.module */ "Cq+C");
/* harmony import */ var _view_sub_heading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-sub-heading.component */ "ze67");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "fB2i");







let ViewSubHeadingModule = class ViewSubHeadingModule {
};
ViewSubHeadingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _view_sub_heading_component__WEBPACK_IMPORTED_MODULE_4__["ViewSubHeadingComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _view_sub_heading_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewSubHeadingRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_6__["EditorModule"],
        ]
    })
], ViewSubHeadingModule);



/***/ }),

/***/ "wzsI":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/content-management/view-sub-heading/view-sub-heading.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXN1Yi1oZWFkaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "ze67":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/content-management/view-sub-heading/view-sub-heading.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ViewSubHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSubHeadingComponent", function() { return ViewSubHeadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_sub_heading_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-sub-heading.component.html */ "LAy1");
/* harmony import */ var _view_sub_heading_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-sub-heading.component.scss */ "wzsI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _topgradservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../topgradservice.service */ "DL5e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");








let ViewSubHeadingComponent = class ViewSubHeadingComponent {
    constructor(route, Service, _formBuilder, _snackBar) {
        this.route = route;
        this.Service = Service;
        this._formBuilder = _formBuilder;
        this._snackBar = _snackBar;
        this.viewsubheadingform = this._formBuilder.group({
            'title': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            'description': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    }
    ngOnInit() {
        this.getsubheading();
        this.content_id = this.route.snapshot.paramMap.get('content_id');
        this.id = this.route.snapshot.paramMap.get('id');
        console.log("such a boring day... such a boring people ", this.id, this.content_id);
    }
    getsubheading() {
        var obj = {
            content_id: this.route.snapshot.paramMap.get('content_id'),
            sub_heading_id: this.route.snapshot.paramMap.get('id')
        };
        console.log("getsubheading   obj", obj);
        this.Service.getsubheading(obj).subscribe(res => {
            console.log("response", res);
            this.viewsubheadingform.patchValue({
                title: res.data[0].sub_heading[0].title,
                description: res.data[0].sub_heading[0].description
            });
        });
    }
};
ViewSubHeadingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _topgradservice_service__WEBPACK_IMPORTED_MODULE_5__["TopgradserviceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
];
ViewSubHeadingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-sub-heading',
        template: _raw_loader_view_sub_heading_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_sub_heading_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _topgradservice_service__WEBPACK_IMPORTED_MODULE_5__["TopgradserviceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
], ViewSubHeadingComponent);



/***/ })

}]);
//# sourceMappingURL=pages-content-management-view-sub-heading-view-sub-heading-module-es2015.js.map