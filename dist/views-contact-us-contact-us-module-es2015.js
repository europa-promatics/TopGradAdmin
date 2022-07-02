(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-contact-us-contact-us-module"],{

/***/ "26d7":
/*!*******************************************************!*\
  !*** ./src/app/views/contact-us/contact-us.module.ts ***!
  \*******************************************************/
/*! exports provided: ContactUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModule", function() { return ContactUsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us-routing.module */ "4Mse");




let ContactUsModule = class ContactUsModule {
};
ContactUsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContactUsRoutingModule"]
        ]
    })
], ContactUsModule);



/***/ }),

/***/ "4Mse":
/*!***************************************************************!*\
  !*** ./src/app/views/contact-us/contact-us-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ContactUsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsRoutingModule", function() { return ContactUsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us.component */ "PUU/");




const routes = [
    {
        path: '',
        component: _contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"]
    }
];
let ContactUsRoutingModule = class ContactUsRoutingModule {
};
ContactUsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ContactUsRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-contact-us-contact-us-module-es2015.js.map