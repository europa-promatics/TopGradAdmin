(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-view-offer-view-offer-module"],{

/***/ "H/ah":
/*!*******************************************************!*\
  !*** ./src/app/views/view-offer/view-offer.module.ts ***!
  \*******************************************************/
/*! exports provided: ViewOfferModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOfferModule", function() { return ViewOfferModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _view_offer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-offer-routing.module */ "TwwZ");




let ViewOfferModule = class ViewOfferModule {
};
ViewOfferModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _view_offer_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewOfferRoutingModule"]
        ]
    })
], ViewOfferModule);



/***/ }),

/***/ "TwwZ":
/*!***************************************************************!*\
  !*** ./src/app/views/view-offer/view-offer-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ViewOfferRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOfferRoutingModule", function() { return ViewOfferRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _view_offer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-offer.component */ "PnTO");




const routes = [
    {
        path: '',
        component: _view_offer_component__WEBPACK_IMPORTED_MODULE_3__["ViewOfferComponent"]
    }
];
let ViewOfferRoutingModule = class ViewOfferRoutingModule {
};
ViewOfferRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ViewOfferRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-view-offer-view-offer-module-es2015.js.map