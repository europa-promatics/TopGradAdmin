(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-add-sub-admin-add-sub-admin-module"], {
    /***/
    "+/bG": function bG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddSubAdminRoutingModule", function () {
        return AddSubAdminRoutingModule;
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


      var _add_sub_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-sub-admin.component */
      "1jXZ");

      var routes = [{
        path: '',
        component: _add_sub_admin_component__WEBPACK_IMPORTED_MODULE_3__["AddSubAdminComponent"]
      }];

      var AddSubAdminRoutingModule = function AddSubAdminRoutingModule() {
        _classCallCheck(this, AddSubAdminRoutingModule);
      };

      AddSubAdminRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddSubAdminRoutingModule);
      /***/
    },

    /***/
    "nGCS": function nGCS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddSubAdminModule", function () {
        return AddSubAdminModule;
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


      var _add_sub_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-sub-admin-routing.module */
      "+/bG");

      var AddSubAdminModule = function AddSubAdminModule() {
        _classCallCheck(this, AddSubAdminModule);
      };

      AddSubAdminModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _add_sub_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddSubAdminRoutingModule"]]
      })], AddSubAdminModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-add-sub-admin-add-sub-admin-module-es5.js.map