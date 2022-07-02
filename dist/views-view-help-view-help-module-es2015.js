(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-view-help-view-help-module"],{

/***/ "345U":
/*!*************************************************************!*\
  !*** ./src/app/views/view-help/view-help-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ViewHelpRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewHelpRoutingModule", function() { return ViewHelpRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _view_help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-help.component */ "Jzsx");




const routes = [
    {
        path: '',
        component: _view_help_component__WEBPACK_IMPORTED_MODULE_3__["ViewHelpComponent"]
    }
];
let ViewHelpRoutingModule = class ViewHelpRoutingModule {
};
ViewHelpRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ViewHelpRoutingModule);



/***/ }),

/***/ "Awqi":
/*!*****************************************************!*\
  !*** ./src/app/views/view-help/view-help.module.ts ***!
  \*****************************************************/
/*! exports provided: ViewHelpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewHelpModule", function() { return ViewHelpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _view_help_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-help-routing.module */ "345U");




let ViewHelpModule = class ViewHelpModule {
};
ViewHelpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _view_help_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewHelpRoutingModule"]
        ]
    })
], ViewHelpModule);



/***/ })

}]);
//# sourceMappingURL=views-view-help-view-help-module-es2015.js.map