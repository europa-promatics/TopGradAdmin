(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-jobs-management-jobs-management-module"],{

/***/ "R0pq":
/*!*****************************************************************!*\
  !*** ./src/app/views/jobs-management/jobs-management.module.ts ***!
  \*****************************************************************/
/*! exports provided: JobsManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsManagementModule", function() { return JobsManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _jobs_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobs-management-routing.module */ "tEqj");




let JobsManagementModule = class JobsManagementModule {
};
JobsManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _jobs_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["JobsManagementRoutingModule"]
        ]
    })
], JobsManagementModule);



/***/ }),

/***/ "tEqj":
/*!*************************************************************************!*\
  !*** ./src/app/views/jobs-management/jobs-management-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: JobsManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsManagementRoutingModule", function() { return JobsManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _jobs_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobs-management.component */ "TNju");




const routes = [
    {
        path: '',
        component: _jobs_management_component__WEBPACK_IMPORTED_MODULE_3__["JobsManagementComponent"]
    }
];
let JobsManagementRoutingModule = class JobsManagementRoutingModule {
};
JobsManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], JobsManagementRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-jobs-management-jobs-management-module-es2015.js.map