(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-help-management-help-management-module"], {
    /***/
    "WCba": function WCba(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpManagementRoutingModule", function () {
        return HelpManagementRoutingModule;
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


      var _help_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./help-management.component */
      "4X2+");

      var routes = [{
        path: '',
        component: _help_management_component__WEBPACK_IMPORTED_MODULE_3__["HelpManagementComponent"]
      }];

      var HelpManagementRoutingModule = function HelpManagementRoutingModule() {
        _classCallCheck(this, HelpManagementRoutingModule);
      };

      HelpManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HelpManagementRoutingModule);
      /***/
    },

    /***/
    "v/TH": function vTH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpManagementModule", function () {
        return HelpManagementModule;
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


      var _help_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./help-management-routing.module */
      "WCba");

      var HelpManagementModule = function HelpManagementModule() {
        _classCallCheck(this, HelpManagementModule);
      };

      HelpManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _help_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["HelpManagementRoutingModule"]]
      })], HelpManagementModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-help-management-help-management-module-es5.js.map