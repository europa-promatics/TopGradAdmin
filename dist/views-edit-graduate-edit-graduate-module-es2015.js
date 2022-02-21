(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-edit-graduate-edit-graduate-module"],{

/***/ "n4J3":
/*!*********************************************************************!*\
  !*** ./src/app/views/edit-graduate/edit-graduate-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: EditGraduateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGraduateRoutingModule", function() { return EditGraduateRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_graduate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-graduate.component */ "Ehck");




const routes = [
    {
        path: '',
        component: _edit_graduate_component__WEBPACK_IMPORTED_MODULE_3__["EditGraduateComponent"]
    }
];
let EditGraduateRoutingModule = class EditGraduateRoutingModule {
};
EditGraduateRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EditGraduateRoutingModule);



/***/ }),

/***/ "uuA8":
/*!*************************************************************!*\
  !*** ./src/app/views/edit-graduate/edit-graduate.module.ts ***!
  \*************************************************************/
/*! exports provided: EditGraduateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGraduateModule", function() { return EditGraduateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _edit_graduate_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-graduate-routing.module */ "n4J3");




let EditGraduateModule = class EditGraduateModule {
};
EditGraduateModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _edit_graduate_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditGraduateRoutingModule"]
        ]
    })
], EditGraduateModule);



/***/ })

}]);
//# sourceMappingURL=views-edit-graduate-edit-graduate-module-es2015.js.map