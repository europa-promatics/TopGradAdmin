(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-categories-management-categories-management-module"], {
    /***/
    "0BwI": function BwI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesManagementModule", function () {
        return CategoriesManagementModule;
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


      var _categories_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./categories-management-routing.module */
      "HIql");

      var CategoriesManagementModule = function CategoriesManagementModule() {
        _classCallCheck(this, CategoriesManagementModule);
      };

      CategoriesManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _categories_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["CategoriesManagementRoutingModule"]]
      })], CategoriesManagementModule);
      /***/
    },

    /***/
    "HIql": function HIql(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesManagementRoutingModule", function () {
        return CategoriesManagementRoutingModule;
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


      var _categories_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./categories-management.component */
      "768J");

      var routes = [{
        path: '',
        component: _categories_management_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesManagementComponent"]
      }];

      var CategoriesManagementRoutingModule = function CategoriesManagementRoutingModule() {
        _classCallCheck(this, CategoriesManagementRoutingModule);
      };

      CategoriesManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CategoriesManagementRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-categories-management-categories-management-module-es5.js.map