(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-add-article-add-article-module"],{

/***/ "hCEz":
/*!*****************************************************************!*\
  !*** ./src/app/views/add-article/add-article-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddArticleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddArticleRoutingModule", function() { return AddArticleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-article.component */ "unrn");




const routes = [
    {
        path: '',
        component: _add_article_component__WEBPACK_IMPORTED_MODULE_3__["AddArticleComponent"]
    }
];
let AddArticleRoutingModule = class AddArticleRoutingModule {
};
AddArticleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AddArticleRoutingModule);



/***/ }),

/***/ "un/j":
/*!*********************************************************!*\
  !*** ./src/app/views/add-article/add-article.module.ts ***!
  \*********************************************************/
/*! exports provided: AddArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddArticleModule", function() { return AddArticleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_article_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-article-routing.module */ "hCEz");




let AddArticleModule = class AddArticleModule {
};
AddArticleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _add_article_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddArticleRoutingModule"]
        ]
    })
], AddArticleModule);



/***/ })

}]);
//# sourceMappingURL=views-add-article-add-article-module-es2015.js.map