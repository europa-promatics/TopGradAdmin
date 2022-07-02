(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-add-sub-category-add-sub-category-module"], {
    /***/
    "E3XF": function E3XF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddSubCategoryModule", function () {
        return AddSubCategoryModule;
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


      var _add_sub_category_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-sub-category-routing.module */
      "hfyt");

      var AddSubCategoryModule = function AddSubCategoryModule() {
        _classCallCheck(this, AddSubCategoryModule);
      };

      AddSubCategoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _add_sub_category_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddSubCategoryRoutingModule"]]
      })], AddSubCategoryModule);
      /***/
    },

    /***/
    "hfyt": function hfyt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddSubCategoryRoutingModule", function () {
        return AddSubCategoryRoutingModule;
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


      var _add_sub_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-sub-category.component */
      "Eicf");

      var routes = [{
        path: '',
        component: _add_sub_category_component__WEBPACK_IMPORTED_MODULE_3__["AddSubCategoryComponent"]
      }];

      var AddSubCategoryRoutingModule = function AddSubCategoryRoutingModule() {
        _classCallCheck(this, AddSubCategoryRoutingModule);
      };

      AddSubCategoryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddSubCategoryRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-add-sub-category-add-sub-category-module-es5.js.map