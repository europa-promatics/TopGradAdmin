(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-management-user-management-module"],{

/***/ "EVeu":
/*!*************************************************************************!*\
  !*** ./src/app/pages/user-management/user-management-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: UserManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementRoutingModule", function() { return UserManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _user_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-management.component */ "w8Zw");




const routes = [
    {
        path: '',
        component: _user_management_component__WEBPACK_IMPORTED_MODULE_3__["UserManagementComponent"]
    }
];
let UserManagementRoutingModule = class UserManagementRoutingModule {
};
UserManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserManagementRoutingModule);



/***/ }),

/***/ "hLrj":
/*!*****************************************************************!*\
  !*** ./src/app/pages/user-management/user-management.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModule", function() { return UserManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _user_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-management-routing.module */ "EVeu");




let UserManagementModule = class UserManagementModule {
};
UserManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserManagementRoutingModule"]
        ]
    })
], UserManagementModule);



/***/ })

}]);
//# sourceMappingURL=pages-user-management-user-management-module-es2015.js.map