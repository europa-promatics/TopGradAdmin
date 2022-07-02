(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-homepage-management-homepage-management-module"], {
    /***/
    "TTEN": function TTEN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomepageManagementRoutingModule", function () {
        return HomepageManagementRoutingModule;
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


      var _homepage_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./homepage-management.component */
      "tkH9");

      var routes = [{
        path: '',
        component: _homepage_management_component__WEBPACK_IMPORTED_MODULE_3__["HomepageManagementComponent"]
      }];

      var HomepageManagementRoutingModule = function HomepageManagementRoutingModule() {
        _classCallCheck(this, HomepageManagementRoutingModule);
      };

      HomepageManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomepageManagementRoutingModule);
      /***/
    },

    /***/
    "VBcH": function VBcH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomepageManagementModule", function () {
        return HomepageManagementModule;
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


      var _homepage_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./homepage-management-routing.module */
      "TTEN");

      var HomepageManagementModule = function HomepageManagementModule() {
        _classCallCheck(this, HomepageManagementModule);
      };

      HomepageManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _homepage_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomepageManagementRoutingModule"]]
      })], HomepageManagementModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-homepage-management-homepage-management-module-es5.js.map