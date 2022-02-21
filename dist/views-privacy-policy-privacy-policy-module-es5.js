(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-privacy-policy-privacy-policy-module"], {
    /***/
    "0VcX": function VcX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyPolicyRoutingModule", function () {
        return PrivacyPolicyRoutingModule;
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


      var _privacy_policy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./privacy-policy.component */
      "JroR");

      var routes = [{
        path: '',
        component: _privacy_policy_component__WEBPACK_IMPORTED_MODULE_3__["PrivacyPolicyComponent"]
      }];

      var PrivacyPolicyRoutingModule = function PrivacyPolicyRoutingModule() {
        _classCallCheck(this, PrivacyPolicyRoutingModule);
      };

      PrivacyPolicyRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PrivacyPolicyRoutingModule);
      /***/
    },

    /***/
    "RAp4": function RAp4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyPolicyModule", function () {
        return PrivacyPolicyModule;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./privacy-policy-routing.module */
      "0VcX"); //import { FormsModule,ReactiveFormsModule } from '@angular/forms';


      var PrivacyPolicyModule = function PrivacyPolicyModule() {
        _classCallCheck(this, PrivacyPolicyModule);
      };

      PrivacyPolicyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], //  FormsModule,ReactiveFormsModule,
        _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_4__["PrivacyPolicyRoutingModule"]],
        providers: []
      })], PrivacyPolicyModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-privacy-policy-privacy-policy-module-es5.js.map