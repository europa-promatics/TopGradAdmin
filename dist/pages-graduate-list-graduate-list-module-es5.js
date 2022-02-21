(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-graduate-list-graduate-list-module"], {
    /***/
    "MHIT": function MHIT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraduateListModule", function () {
        return GraduateListModule;
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


      var _graduate_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./graduate-list-routing.module */
      "TW0z");

      var GraduateListModule = function GraduateListModule() {
        _classCallCheck(this, GraduateListModule);
      };

      GraduateListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _graduate_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["GraduateListRoutingModule"]]
      })], GraduateListModule);
      /***/
    },

    /***/
    "TW0z": function TW0z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraduateListRoutingModule", function () {
        return GraduateListRoutingModule;
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


      var _graduate_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./graduate-list.component */
      "xwI+");

      var routes = [{
        path: '',
        component: _graduate_list_component__WEBPACK_IMPORTED_MODULE_3__["GraduateListComponent"]
      }];

      var GraduateListRoutingModule = function GraduateListRoutingModule() {
        _classCallCheck(this, GraduateListRoutingModule);
      };

      GraduateListRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GraduateListRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-graduate-list-graduate-list-module-es5.js.map