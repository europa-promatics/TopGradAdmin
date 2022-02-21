(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-employers-list-employers-list-module"], {
    /***/
    "Hgyl": function Hgyl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployersListModule", function () {
        return EmployersListModule;
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


      var _employers_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./employers-list-routing.module */
      "iHYw");

      var EmployersListModule = function EmployersListModule() {
        _classCallCheck(this, EmployersListModule);
      };

      EmployersListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _employers_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployersListRoutingModule"]]
      })], EmployersListModule);
      /***/
    },

    /***/
    "iHYw": function iHYw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployersListRoutingModule", function () {
        return EmployersListRoutingModule;
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


      var _employers_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./employers-list.component */
      "AMTe");

      var routes = [{
        path: '',
        component: _employers_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployersListComponent"]
      }];

      var EmployersListRoutingModule = function EmployersListRoutingModule() {
        _classCallCheck(this, EmployersListRoutingModule);
      };

      EmployersListRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EmployersListRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-employers-list-employers-list-module-es5.js.map