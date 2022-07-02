(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-management-view-article-view-article-module"],{

/***/ "7D5D":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/content-management/view-article/view-article-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ViewArticleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewArticleRoutingModule", function() { return ViewArticleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _view_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-article.component */ "a+qF");




const routes = [
    {
        path: '',
        component: _view_article_component__WEBPACK_IMPORTED_MODULE_3__["ViewArticleComponent"]
    }
];
let ViewArticleRoutingModule = class ViewArticleRoutingModule {
};
ViewArticleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ViewArticleRoutingModule);



/***/ }),

/***/ "zyyM":
/*!******************************************************************************!*\
  !*** ./src/app/pages/content-management/view-article/view-article.module.ts ***!
  \******************************************************************************/
/*! exports provided: ViewArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewArticleModule", function() { return ViewArticleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _view_article_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-article-routing.module */ "7D5D");




let ViewArticleModule = class ViewArticleModule {
};
ViewArticleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _view_article_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewArticleRoutingModule"]
        ]
    })
], ViewArticleModule);



/***/ })

}]);
//# sourceMappingURL=pages-content-management-view-article-view-article-module-es2015.js.map