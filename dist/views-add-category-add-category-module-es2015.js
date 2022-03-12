(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-add-category-add-category-module"],{

/***/ "UJO0":
/*!*******************************************************************!*\
  !*** ./src/app/views/add-category/add-category-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddCategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryRoutingModule", function() { return AddCategoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-category.component */ "Qnxy");




const routes = [
    {
        path: '',
        component: _add_category_component__WEBPACK_IMPORTED_MODULE_3__["AddCategoryComponent"]
    }
];
let AddCategoryRoutingModule = class AddCategoryRoutingModule {
};
AddCategoryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AddCategoryRoutingModule);



/***/ }),

/***/ "axhW":
/*!***********************************************************!*\
  !*** ./src/app/views/add-category/add-category.module.ts ***!
  \***********************************************************/
/*! exports provided: AddCategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryModule", function() { return AddCategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_category_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-category-routing.module */ "UJO0");




let AddCategoryModule = class AddCategoryModule {
};
AddCategoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _add_category_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddCategoryRoutingModule"]
        ]
    })
], AddCategoryModule);



/***/ })

}]);
//# sourceMappingURL=views-add-category-add-category-module-es2015.js.map