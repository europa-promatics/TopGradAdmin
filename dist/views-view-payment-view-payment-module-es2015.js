(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-view-payment-view-payment-module"],{

/***/ "Fi+h":
/*!***********************************************************!*\
  !*** ./src/app/views/view-payment/view-payment.module.ts ***!
  \***********************************************************/
/*! exports provided: ViewPaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPaymentModule", function() { return ViewPaymentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _view_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-payment-routing.module */ "d8xV");




let ViewPaymentModule = class ViewPaymentModule {
};
ViewPaymentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _view_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewPaymentRoutingModule"]
        ]
    })
], ViewPaymentModule);



/***/ }),

/***/ "d8xV":
/*!*******************************************************************!*\
  !*** ./src/app/views/view-payment/view-payment-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ViewPaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPaymentRoutingModule", function() { return ViewPaymentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-payment.component */ "iQG3");




const routes = [
    {
        path: '',
        component: _view_payment_component__WEBPACK_IMPORTED_MODULE_3__["ViewPaymentComponent"]
    }
];
let ViewPaymentRoutingModule = class ViewPaymentRoutingModule {
};
ViewPaymentRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ViewPaymentRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-view-payment-view-payment-module-es2015.js.map