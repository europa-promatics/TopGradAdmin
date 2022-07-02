(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-support-management-reports-reports-module"], {
    /***/
    "GvX8": function GvX8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function () {
        return ReportsRoutingModule;
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


      var _reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reports.component */
      "FDWR");

      var routes = [{
        path: '',
        component: _reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"]
      }];

      var ReportsRoutingModule = function ReportsRoutingModule() {
        _classCallCheck(this, ReportsRoutingModule);
      };

      ReportsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReportsRoutingModule);
      /***/
    },

    /***/
    "U+4V": function U4V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportsModule", function () {
        return ReportsModule;
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


      var _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reports-routing.module */
      "GvX8");

      var ReportsModule = function ReportsModule() {
        _classCallCheck(this, ReportsModule);
      };

      ReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportsRoutingModule"]]
      })], ReportsModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-support-management-reports-reports-module-es5.js.map