(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-view-video-view-video-module"],{

/***/ "cWCo":
/*!*******************************************************!*\
  !*** ./src/app/views/view-video/view-video.module.ts ***!
  \*******************************************************/
/*! exports provided: ViewVideoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVideoModule", function() { return ViewVideoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _view_video_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-video-routing.module */ "g91v");




let ViewVideoModule = class ViewVideoModule {
};
ViewVideoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _view_video_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewVideoRoutingModule"]
        ]
    })
], ViewVideoModule);



/***/ }),

/***/ "g91v":
/*!***************************************************************!*\
  !*** ./src/app/views/view-video/view-video-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ViewVideoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVideoRoutingModule", function() { return ViewVideoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-video.component */ "fjVs");




const routes = [
    {
        path: '',
        component: _view_video_component__WEBPACK_IMPORTED_MODULE_3__["ViewVideoComponent"]
    }
];
let ViewVideoRoutingModule = class ViewVideoRoutingModule {
};
ViewVideoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ViewVideoRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-view-video-view-video-module-es2015.js.map