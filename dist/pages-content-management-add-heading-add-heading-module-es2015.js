(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-management-add-heading-add-heading-module"],{

/***/ "NqfV":
/*!****************************************************************************!*\
  !*** ./src/app/pages/content-management/add-heading/add-heading.module.ts ***!
  \****************************************************************************/
/*! exports provided: AddHeadingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHeadingModule", function() { return AddHeadingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _add_heading_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-heading-routing.module */ "vQMW");




let AddHeadingModule = class AddHeadingModule {
};
AddHeadingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _add_heading_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddHeadingRoutingModule"]
        ]
    })
], AddHeadingModule);



/***/ }),

/***/ "vQMW":
/*!************************************************************************************!*\
  !*** ./src/app/pages/content-management/add-heading/add-heading-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: AddHeadingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHeadingRoutingModule", function() { return AddHeadingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _add_heading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-heading.component */ "GPan");




const routes = [
    {
        path: '',
        component: _add_heading_component__WEBPACK_IMPORTED_MODULE_3__["AddHeadingComponent"]
    }
];
let AddHeadingRoutingModule = class AddHeadingRoutingModule {
};
AddHeadingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AddHeadingRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-content-management-add-heading-add-heading-module-es2015.js.map