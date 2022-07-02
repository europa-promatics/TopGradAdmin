(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-management-view-video-view-video-module"], {
    /***/
    "ojjy": function ojjy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewVideoRoutingModule", function () {
        return ViewVideoRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _view_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-video.component */
      "bh3J");

      var routes = [{
        path: '',
        component: _view_video_component__WEBPACK_IMPORTED_MODULE_3__["ViewVideoComponent"]
      }];

      var ViewVideoRoutingModule = function ViewVideoRoutingModule() {
        _classCallCheck(this, ViewVideoRoutingModule);
      };

      ViewVideoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewVideoRoutingModule);
      /***/
    },

    /***/
    "tqrE": function tqrE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewVideoModule", function () {
        return ViewVideoModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var ngx_plyr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-plyr */
      "0ZLC");
      /* harmony import */


      var _view_video_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./view-video-routing.module */
      "ojjy");

      var ViewVideoModule = function ViewVideoModule() {
        _classCallCheck(this, ViewVideoModule);
      };

      ViewVideoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_plyr__WEBPACK_IMPORTED_MODULE_3__["PlyrModule"], _view_video_routing_module__WEBPACK_IMPORTED_MODULE_4__["ViewVideoRoutingModule"]]
      })], ViewVideoModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-content-management-view-video-view-video-module-es5.js.map