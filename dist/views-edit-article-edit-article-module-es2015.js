(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-edit-article-edit-article-module"],{

/***/ "M1k3":
/*!*******************************************************************!*\
  !*** ./src/app/views/edit-article/edit-article-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EditArticleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditArticleRoutingModule", function() { return EditArticleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-article.component */ "L3zY");




const routes = [
    {
        path: '',
        component: _edit_article_component__WEBPACK_IMPORTED_MODULE_3__["EditArticleComponent"]
    }
];
let EditArticleRoutingModule = class EditArticleRoutingModule {
};
EditArticleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EditArticleRoutingModule);



/***/ }),

/***/ "fBoI":
/*!***********************************************************!*\
  !*** ./src/app/views/edit-article/edit-article.module.ts ***!
  \***********************************************************/
/*! exports provided: EditArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditArticleModule", function() { return EditArticleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _edit_article_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-article-routing.module */ "M1k3");




let EditArticleModule = class EditArticleModule {
};
EditArticleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _edit_article_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditArticleRoutingModule"]
        ]
    })
], EditArticleModule);



/***/ })

}]);
//# sourceMappingURL=views-edit-article-edit-article-module-es2015.js.map