(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-help-management-help-management-module"],{

/***/ "WCba":
/*!*************************************************************************!*\
  !*** ./src/app/views/help-management/help-management-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: HelpManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpManagementRoutingModule", function() { return HelpManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _help_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help-management.component */ "4X2+");




const routes = [
    {
        path: '',
        component: _help_management_component__WEBPACK_IMPORTED_MODULE_3__["HelpManagementComponent"]
    }
];
let HelpManagementRoutingModule = class HelpManagementRoutingModule {
};
HelpManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HelpManagementRoutingModule);



/***/ }),

/***/ "v/TH":
/*!*****************************************************************!*\
  !*** ./src/app/views/help-management/help-management.module.ts ***!
  \*****************************************************************/
/*! exports provided: HelpManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpManagementModule", function() { return HelpManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _help_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help-management-routing.module */ "WCba");




let HelpManagementModule = class HelpManagementModule {
};
HelpManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _help_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["HelpManagementRoutingModule"]
        ]
    })
], HelpManagementModule);



/***/ })

}]);
//# sourceMappingURL=views-help-management-help-management-module-es2015.js.map