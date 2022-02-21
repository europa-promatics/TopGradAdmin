(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-edit-video-edit-video-module"],{

/***/ "WF2g":
/*!***************************************************************!*\
  !*** ./src/app/views/edit-video/edit-video-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EditVideoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVideoRoutingModule", function() { return EditVideoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-video.component */ "q2wW");




const routes = [
    {
        path: '',
        component: _edit_video_component__WEBPACK_IMPORTED_MODULE_3__["EditVideoComponent"]
    }
];
let EditVideoRoutingModule = class EditVideoRoutingModule {
};
EditVideoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EditVideoRoutingModule);



/***/ }),

/***/ "WTXF":
/*!*******************************************************!*\
  !*** ./src/app/views/edit-video/edit-video.module.ts ***!
  \*******************************************************/
/*! exports provided: EditVideoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVideoModule", function() { return EditVideoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _edit_video_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-video-routing.module */ "WF2g");




let EditVideoModule = class EditVideoModule {
};
EditVideoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _edit_video_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditVideoRoutingModule"]
        ]
    })
], EditVideoModule);



/***/ })

}]);
//# sourceMappingURL=views-edit-video-edit-video-module-es2015.js.map