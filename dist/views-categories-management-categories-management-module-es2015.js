(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-categories-management-categories-management-module"],{

/***/ "0BwI":
/*!*****************************************************************************!*\
  !*** ./src/app/views/categories-management/categories-management.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CategoriesManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesManagementModule", function() { return CategoriesManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _categories_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories-management-routing.module */ "HIql");




let CategoriesManagementModule = class CategoriesManagementModule {
};
CategoriesManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _categories_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["CategoriesManagementRoutingModule"]
        ]
    })
], CategoriesManagementModule);



/***/ }),

/***/ "HIql":
/*!*************************************************************************************!*\
  !*** ./src/app/views/categories-management/categories-management-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: CategoriesManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesManagementRoutingModule", function() { return CategoriesManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _categories_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories-management.component */ "768J");




const routes = [
    {
        path: '',
        component: _categories_management_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesManagementComponent"]
    }
];
let CategoriesManagementRoutingModule = class CategoriesManagementRoutingModule {
};
CategoriesManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CategoriesManagementRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-categories-management-categories-management-module-es2015.js.map