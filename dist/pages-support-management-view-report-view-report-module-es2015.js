(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-support-management-view-report-view-report-module"],{

/***/ "J+Pq":
/*!****************************************************************************!*\
  !*** ./src/app/pages/support-management/view-report/view-report.module.ts ***!
  \****************************************************************************/
/*! exports provided: ViewReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewReportModule", function() { return ViewReportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _view_report_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-report-routing.module */ "d8eP");




let ViewReportModule = class ViewReportModule {
};
ViewReportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _view_report_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewReportRoutingModule"]
        ]
    })
], ViewReportModule);



/***/ }),

/***/ "d8eP":
/*!************************************************************************************!*\
  !*** ./src/app/pages/support-management/view-report/view-report-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: ViewReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewReportRoutingModule", function() { return ViewReportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _view_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-report.component */ "i4dE");




const routes = [
    {
        path: '',
        component: _view_report_component__WEBPACK_IMPORTED_MODULE_3__["ViewReportComponent"]
    }
];
let ViewReportRoutingModule = class ViewReportRoutingModule {
};
ViewReportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ViewReportRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-support-management-view-report-view-report-module-es2015.js.map