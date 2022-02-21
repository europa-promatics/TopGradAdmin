(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-video-intro-video-intro-module"], {
    /***/
    "1jFd": function jFd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoIntroModule", function () {
        return VideoIntroModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _video_intro_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./video-intro-routing.module */
      "yMsN");

      var VideoIntroModule = function VideoIntroModule() {
        _classCallCheck(this, VideoIntroModule);
      };

      VideoIntroModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _video_intro_routing_module__WEBPACK_IMPORTED_MODULE_3__["VideoIntroRoutingModule"]]
      })], VideoIntroModule);
      /***/
    },

    /***/
    "yMsN": function yMsN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoIntroRoutingModule", function () {
        return VideoIntroRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _video_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./video-intro.component */
      "KTfr");

      var routes = [{
        path: '',
        component: _video_intro_component__WEBPACK_IMPORTED_MODULE_3__["VideoIntroComponent"]
      }];

      var VideoIntroRoutingModule = function VideoIntroRoutingModule() {
        _classCallCheck(this, VideoIntroRoutingModule);
      };

      VideoIntroRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VideoIntroRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-video-intro-video-intro-module-es5.js.map