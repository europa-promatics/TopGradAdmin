(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-view-interview-view-interview-module"], {
    /***/
    "QFrm": function QFrm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewInterviewModule", function () {
        return ViewInterviewModule;
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


      var _view_interview_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-interview-routing.module */
      "qQtL");

      var ViewInterviewModule = function ViewInterviewModule() {
        _classCallCheck(this, ViewInterviewModule);
      };

      ViewInterviewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _view_interview_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewInterviewRoutingModule"]]
      })], ViewInterviewModule);
      /***/
    },

    /***/
    "qQtL": function qQtL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewInterviewRoutingModule", function () {
        return ViewInterviewRoutingModule;
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


      var _view_interview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-interview.component */
      "Y+84");

      var routes = [{
        path: '',
        component: _view_interview_component__WEBPACK_IMPORTED_MODULE_3__["ViewInterviewComponent"]
      }];

      var ViewInterviewRoutingModule = function ViewInterviewRoutingModule() {
        _classCallCheck(this, ViewInterviewRoutingModule);
      };

      ViewInterviewRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewInterviewRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-view-interview-view-interview-module-es5.js.map