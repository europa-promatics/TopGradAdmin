(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-edit-job-edit-job-module"],{

/***/ "Dl+0":
/*!***********************************************************!*\
  !*** ./src/app/views/edit-job/edit-job-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EditJobRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditJobRoutingModule", function() { return EditJobRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-job.component */ "+rVA");




const routes = [
    {
        path: '',
        component: _edit_job_component__WEBPACK_IMPORTED_MODULE_3__["EditJobComponent"]
    }
];
let EditJobRoutingModule = class EditJobRoutingModule {
};
EditJobRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EditJobRoutingModule);



/***/ }),

/***/ "zGRg":
/*!***************************************************!*\
  !*** ./src/app/views/edit-job/edit-job.module.ts ***!
  \***************************************************/
/*! exports provided: EditJobModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditJobModule", function() { return EditJobModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _edit_job_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-job-routing.module */ "Dl+0");




let EditJobModule = class EditJobModule {
};
EditJobModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _edit_job_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditJobRoutingModule"]
        ]
    })
], EditJobModule);



/***/ })

}]);
//# sourceMappingURL=views-edit-job-edit-job-module-es2015.js.map