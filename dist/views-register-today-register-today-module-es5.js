(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-register-today-register-today-module"], {
    /***/
    "37wc": function wc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterTodayModule", function () {
        return RegisterTodayModule;
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


      var _register_today_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register-today-routing.module */
      "56c7");

      var RegisterTodayModule = function RegisterTodayModule() {
        _classCallCheck(this, RegisterTodayModule);
      };

      RegisterTodayModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _register_today_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegisterTodayRoutingModule"]]
      })], RegisterTodayModule);
      /***/
    },

    /***/
    "56c7": function c7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterTodayRoutingModule", function () {
        return RegisterTodayRoutingModule;
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


      var _register_today_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register-today.component */
      "iafZ");

      var routes = [{
        path: '',
        component: _register_today_component__WEBPACK_IMPORTED_MODULE_3__["RegisterTodayComponent"]
      }];

      var RegisterTodayRoutingModule = function RegisterTodayRoutingModule() {
        _classCallCheck(this, RegisterTodayRoutingModule);
      };

      RegisterTodayRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegisterTodayRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-register-today-register-today-module-es5.js.map