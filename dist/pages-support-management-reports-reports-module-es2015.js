(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-support-management-reports-reports-module"],{

/***/ "GvX8":
/*!****************************************************************************!*\
  !*** ./src/app/pages/support-management/reports/reports-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports.component */ "FDWR");




const routes = [
    {
        path: '',
        component: _reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"]
    }
];
let ReportsRoutingModule = class ReportsRoutingModule {
};
ReportsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ReportsRoutingModule);



/***/ }),

/***/ "U+4V":
/*!********************************************************************!*\
  !*** ./src/app/pages/support-management/reports/reports.module.ts ***!
  \********************************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports-routing.module */ "GvX8");




let ReportsModule = class ReportsModule {
};
ReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportsRoutingModule"]
        ]
    })
], ReportsModule);



/***/ })

}]);
//# sourceMappingURL=pages-support-management-reports-reports-module-es2015.js.map