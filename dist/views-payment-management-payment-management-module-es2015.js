(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-payment-management-payment-management-module"],{

/***/ "PrMM":
/*!*******************************************************************************!*\
  !*** ./src/app/views/payment-management/payment-management-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PaymentManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentManagementRoutingModule", function() { return PaymentManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _payment_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-management.component */ "0Wcs");




const routes = [
    {
        path: '',
        component: _payment_management_component__WEBPACK_IMPORTED_MODULE_3__["PaymentManagementComponent"]
    }
];
let PaymentManagementRoutingModule = class PaymentManagementRoutingModule {
};
PaymentManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PaymentManagementRoutingModule);



/***/ }),

/***/ "chJq":
/*!***********************************************************************!*\
  !*** ./src/app/views/payment-management/payment-management.module.ts ***!
  \***********************************************************************/
/*! exports provided: PaymentManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentManagementModule", function() { return PaymentManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _payment_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-management-routing.module */ "PrMM");




let PaymentManagementModule = class PaymentManagementModule {
};
PaymentManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _payment_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["PaymentManagementRoutingModule"]
        ]
    })
], PaymentManagementModule);



/***/ })

}]);
//# sourceMappingURL=views-payment-management-payment-management-module-es2015.js.map