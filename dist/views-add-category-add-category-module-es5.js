(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-add-category-add-category-module"], {
    /***/
    "UJO0": function UJO0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCategoryRoutingModule", function () {
        return AddCategoryRoutingModule;
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


      var _add_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-category.component */
      "Qnxy");

      var routes = [{
        path: '',
        component: _add_category_component__WEBPACK_IMPORTED_MODULE_3__["AddCategoryComponent"]
      }];

      var AddCategoryRoutingModule = function AddCategoryRoutingModule() {
        _classCallCheck(this, AddCategoryRoutingModule);
      };

      AddCategoryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddCategoryRoutingModule);
      /***/
    },

    /***/
    "axhW": function axhW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCategoryModule", function () {
        return AddCategoryModule;
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


      var _add_category_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-category-routing.module */
      "UJO0");

      var AddCategoryModule = function AddCategoryModule() {
        _classCallCheck(this, AddCategoryModule);
      };

      AddCategoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _add_category_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddCategoryRoutingModule"]]
      })], AddCategoryModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-add-category-add-category-module-es5.js.map