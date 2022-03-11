(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-view-job-view-job-module"], {
    /***/
    "4RoS": function RoS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewJobRoutingModule", function () {
        return ViewJobRoutingModule;
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


      var _view_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-job.component */
      "/9A/");

      var routes = [{
        path: '',
        component: _view_job_component__WEBPACK_IMPORTED_MODULE_3__["ViewJobComponent"]
      }];

      var ViewJobRoutingModule = function ViewJobRoutingModule() {
        _classCallCheck(this, ViewJobRoutingModule);
      };

      ViewJobRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewJobRoutingModule);
      /***/
    },

    /***/
    "YpNO": function YpNO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewJobModule", function () {
        return ViewJobModule;
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


      var _view_job_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-job-routing.module */
      "4RoS");

      var ViewJobModule = function ViewJobModule() {
        _classCallCheck(this, ViewJobModule);
      };

      ViewJobModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _view_job_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewJobRoutingModule"]]
      })], ViewJobModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-view-job-view-job-module-es5.js.map