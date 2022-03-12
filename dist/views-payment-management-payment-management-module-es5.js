(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-payment-management-payment-management-module"], {
    /***/
    "PrMM": function PrMM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentManagementRoutingModule", function () {
        return PaymentManagementRoutingModule;
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


      var _payment_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payment-management.component */
      "0Wcs");

      var routes = [{
        path: '',
        component: _payment_management_component__WEBPACK_IMPORTED_MODULE_3__["PaymentManagementComponent"]
      }];

      var PaymentManagementRoutingModule = function PaymentManagementRoutingModule() {
        _classCallCheck(this, PaymentManagementRoutingModule);
      };

      PaymentManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PaymentManagementRoutingModule);
      /***/
    },

    /***/
    "chJq": function chJq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentManagementModule", function () {
        return PaymentManagementModule;
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


      var _payment_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payment-management-routing.module */
      "PrMM");

      var PaymentManagementModule = function PaymentManagementModule() {
        _classCallCheck(this, PaymentManagementModule);
      };

      PaymentManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _payment_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["PaymentManagementRoutingModule"]]
      })], PaymentManagementModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-payment-management-payment-management-module-es5.js.map