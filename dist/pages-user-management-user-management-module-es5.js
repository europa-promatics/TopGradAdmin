(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-management-user-management-module"], {
    /***/
    "EVeu": function EVeu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserManagementRoutingModule", function () {
        return UserManagementRoutingModule;
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


      var _user_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-management.component */
      "w8Zw");

      var routes = [{
        path: '',
        component: _user_management_component__WEBPACK_IMPORTED_MODULE_3__["UserManagementComponent"]
      }];

      var UserManagementRoutingModule = function UserManagementRoutingModule() {
        _classCallCheck(this, UserManagementRoutingModule);
      };

      UserManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserManagementRoutingModule);
      /***/
    },

    /***/
    "hLrj": function hLrj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserManagementModule", function () {
        return UserManagementModule;
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


      var _user_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-management-routing.module */
      "EVeu");

      var UserManagementModule = function UserManagementModule() {
        _classCallCheck(this, UserManagementModule);
      };

      UserManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _user_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserManagementRoutingModule"]]
      })], UserManagementModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-user-management-user-management-module-es5.js.map