(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-support-management-faq_emp-grad-view-faq-view-faq-module"],{

/***/ "6T7Q":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/support-management/faq_emp-grad/view-faq/view-faq.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ViewFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewFaqComponent", function() { return ViewFaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_faq_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-faq.component.html */ "NKcQ");
/* harmony import */ var _view_faq_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-faq.component.scss */ "TYEX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _topgradservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../topgradservice.service */ "DL5e");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







let ViewFaqComponent = class ViewFaqComponent {
    constructor(route, Service, location) {
        this.route = route;
        this.Service = Service;
        this.location = location;
    }
    ngOnInit() {
        this.faq_id();
    }
    faq_id() {
        var obj = {
            faq_id: this.route.snapshot.paramMap.get('id')
        };
        console.log("onnnn", obj);
        this.Service.faqDetail(obj).subscribe(data => {
            console.log("main data for users is ssssssssssssssssssss====", data);
            this.user = data.data;
        }, err => {
            console.log(err.status);
            if (err.status >= 404) {
                console.log('Some error occured');
            }
            else {
                this.toastr.error('Some error occured, please try again!!', 'Error');
                console.log('Internet Connection Error');
            }
        });
    }
    navigate() {
        console.log("Take me back.....");
        this.location.back();
    }
};
ViewFaqComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _topgradservice_service__WEBPACK_IMPORTED_MODULE_5__["TopgradserviceService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
ViewFaqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-faq',
        template: _raw_loader_view_faq_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_faq_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _topgradservice_service__WEBPACK_IMPORTED_MODULE_5__["TopgradserviceService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
], ViewFaqComponent);



/***/ }),

/***/ "IScc":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/support-management/faq_emp-grad/view-faq/view-faq.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ViewFaqModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewFaqModule", function() { return ViewFaqModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _view_faq_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-faq-routing.module */ "kbST");




let ViewFaqModule = class ViewFaqModule {
};
ViewFaqModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _view_faq_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewFaqRoutingModule"]
        ]
    })
], ViewFaqModule);



/***/ }),

/***/ "NKcQ":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support-management/faq_emp-grad/view-faq/view-faq.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"home-header-sec\">\n\t<div class=\"container\">\n\t    <div class=\"row\">\n\t      <div class=\"col-md-12\">\n\t      \t<div class=\"card\">\n\t      \t\t<div class=\"manage-home-header\">\n\t      \t\t\t<div class=\"card-header\">\n\t      \t\t\t\t<strong>Graduate View FAQ</strong>\n\t      \t\t\t</div>\n\t      \t\t\t<div class=\"card-body\">\n\t      \t\t\t\t<form>\n\t\t      \t\t\t\t<div class=\"home-mng-form\">\n\t\t      \t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Category</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" value=\"{{user?.category_id.name}}\" disabled=\"disabled\">\n\t\t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Title</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Enter Title\" value=\"{{user?.title}}\" disabled=\"disabled\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t<div style=\"height: 100px;\"  class=\"form-control\" rows=\"4\" disabled=\"disabled\"[innerHTML]=\"user?.description\" >\n\t\t\t\t\t\t\t\t     </div>\n\t\t\t\t\t\t\t\t\t<!-- <div [innerHTML]=\"user?.description\">\n\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\"  (click)=\"navigate()\">Back</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t</div>\n\t\t      \t\t\t</form>\n\t      \t\t\t</div>\n\t\t      \t</div>\n\t      \t</div>\n\t      </div>\n\t  \t</div>\n\t</div>\n</section>\n\n");

/***/ }),

/***/ "TYEX":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/support-management/faq_emp-grad/view-faq/view-faq.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWZhcS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "kbST":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/support-management/faq_emp-grad/view-faq/view-faq-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ViewFaqRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewFaqRoutingModule", function() { return ViewFaqRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-faq.component */ "6T7Q");




const routes = [
    {
        path: '',
        component: _view_faq_component__WEBPACK_IMPORTED_MODULE_3__["ViewFaqComponent"]
    }
];
let ViewFaqRoutingModule = class ViewFaqRoutingModule {
};
ViewFaqRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ViewFaqRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-support-management-faq_emp-grad-view-faq-view-faq-module-es2015.js.map