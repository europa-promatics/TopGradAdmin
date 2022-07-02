(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-edit-sub-admin-edit-sub-admin-module"], {
    /***/
    "GO9a": function GO9a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditSubAdminRoutingModule", function () {
        return EditSubAdminRoutingModule;
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


      var _edit_sub_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-sub-admin.component */
      "0ki/");

      var routes = [{
        path: '',
        component: _edit_sub_admin_component__WEBPACK_IMPORTED_MODULE_3__["EditSubAdminComponent"]
      }];

      var EditSubAdminRoutingModule = function EditSubAdminRoutingModule() {
        _classCallCheck(this, EditSubAdminRoutingModule);
      };

      EditSubAdminRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditSubAdminRoutingModule);
      /***/
    },

    /***/
    "p6jT": function p6jT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditSubAdminModule", function () {
        return EditSubAdminModule;
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


      var _edit_sub_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-sub-admin-routing.module */
      "GO9a");

      var EditSubAdminModule = function EditSubAdminModule() {
        _classCallCheck(this, EditSubAdminModule);
      };

      EditSubAdminModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _edit_sub_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditSubAdminRoutingModule"]]
      })], EditSubAdminModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-edit-sub-admin-edit-sub-admin-module-es5.js.map