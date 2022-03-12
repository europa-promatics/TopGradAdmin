(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-header-section-header-section-module"], {
    /***/
    "IF3N": function IF3N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderSectionRoutingModule", function () {
        return HeaderSectionRoutingModule;
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


      var _header_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./header-section.component */
      "Q1t5");

      var routes = [{
        path: '',
        component: _header_section_component__WEBPACK_IMPORTED_MODULE_3__["HeaderSectionComponent"]
      }];

      var HeaderSectionRoutingModule = function HeaderSectionRoutingModule() {
        _classCallCheck(this, HeaderSectionRoutingModule);
      };

      HeaderSectionRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HeaderSectionRoutingModule);
      /***/
    },

    /***/
    "hVxK": function hVxK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderSectionModule", function () {
        return HeaderSectionModule;
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


      var _header_section_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./header-section-routing.module */
      "IF3N");

      var HeaderSectionModule = function HeaderSectionModule() {
        _classCallCheck(this, HeaderSectionModule);
      };

      HeaderSectionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _header_section_routing_module__WEBPACK_IMPORTED_MODULE_3__["HeaderSectionRoutingModule"]]
      })], HeaderSectionModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-header-section-header-section-module-es5.js.map