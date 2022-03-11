(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-messaging-reports-messaging-reports-module"], {
    /***/
    "0Mck": function Mck(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagingReportsRoutingModule", function () {
        return MessagingReportsRoutingModule;
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


      var _messaging_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./messaging-reports.component */
      "3a5B");

      var routes = [{
        path: '',
        component: _messaging_reports_component__WEBPACK_IMPORTED_MODULE_3__["MessagingReportsComponent"]
      }];

      var MessagingReportsRoutingModule = function MessagingReportsRoutingModule() {
        _classCallCheck(this, MessagingReportsRoutingModule);
      };

      MessagingReportsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MessagingReportsRoutingModule);
      /***/
    },

    /***/
    "VoQE": function VoQE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagingReportsModule", function () {
        return MessagingReportsModule;
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


      var _messaging_reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./messaging-reports-routing.module */
      "0Mck");

      var MessagingReportsModule = function MessagingReportsModule() {
        _classCallCheck(this, MessagingReportsModule);
      };

      MessagingReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _messaging_reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["MessagingReportsRoutingModule"]]
      })], MessagingReportsModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-messaging-reports-messaging-reports-module-es5.js.map