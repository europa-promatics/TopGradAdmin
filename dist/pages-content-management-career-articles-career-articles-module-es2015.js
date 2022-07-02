(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-management-career-articles-career-articles-module"],{

/***/ "sZCD":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/content-management/career-articles/career-articles-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: CareerArticlesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerArticlesRoutingModule", function() { return CareerArticlesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _career_articles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./career-articles.component */ "8lXT");




const routes = [
    {
        path: '',
        component: _career_articles_component__WEBPACK_IMPORTED_MODULE_3__["CareerArticlesComponent"]
    }
];
let CareerArticlesRoutingModule = class CareerArticlesRoutingModule {
};
CareerArticlesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CareerArticlesRoutingModule);



/***/ }),

/***/ "xKJK":
/*!************************************************************************************!*\
  !*** ./src/app/pages/content-management/career-articles/career-articles.module.ts ***!
  \************************************************************************************/
/*! exports provided: CareerArticlesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerArticlesModule", function() { return CareerArticlesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _career_articles_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./career-articles-routing.module */ "sZCD");




let CareerArticlesModule = class CareerArticlesModule {
};
CareerArticlesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _career_articles_routing_module__WEBPACK_IMPORTED_MODULE_3__["CareerArticlesRoutingModule"]
        ]
    })
], CareerArticlesModule);



/***/ })

}]);
//# sourceMappingURL=pages-content-management-career-articles-career-articles-module-es2015.js.map