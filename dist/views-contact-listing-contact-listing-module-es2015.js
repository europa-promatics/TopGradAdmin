(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-contact-listing-contact-listing-module"],{

/***/ "7xRC":
/*!*****************************************************************!*\
  !*** ./src/app/views/contact-listing/contact-listing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ContactListingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListingModule", function() { return ContactListingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _contact_listing_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-listing-routing.module */ "kVzs");





let ContactListingModule = class ContactListingModule {
};
ContactListingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _contact_listing_routing_module__WEBPACK_IMPORTED_MODULE_4__["ContactListingRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]
    })
], ContactListingModule);



/***/ }),

/***/ "kVzs":
/*!*************************************************************************!*\
  !*** ./src/app/views/contact-listing/contact-listing-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ContactListingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListingRoutingModule", function() { return ContactListingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _contact_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-listing.component */ "RWm0");




const routes = [
    {
        path: '',
        component: _contact_listing_component__WEBPACK_IMPORTED_MODULE_3__["ContactListingComponent"]
    }
];
let ContactListingRoutingModule = class ContactListingRoutingModule {
};
ContactListingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ContactListingRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-contact-listing-contact-listing-module-es2015.js.map