(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-career-articles-career-articles-module"], {
    /***/
    "uPJ4": function uPJ4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CareerArticlesModule", function () {
        return CareerArticlesModule;
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


      var _career_articles_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./career-articles-routing.module */
      "utin");

      var CareerArticlesModule = function CareerArticlesModule() {
        _classCallCheck(this, CareerArticlesModule);
      };

      CareerArticlesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _career_articles_routing_module__WEBPACK_IMPORTED_MODULE_3__["CareerArticlesRoutingModule"]]
      })], CareerArticlesModule);
      /***/
    },

    /***/
    "utin": function utin(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CareerArticlesRoutingModule", function () {
        return CareerArticlesRoutingModule;
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


      var _career_articles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./career-articles.component */
      "ICAa");

      var routes = [{
        path: '',
        component: _career_articles_component__WEBPACK_IMPORTED_MODULE_3__["CareerArticlesComponent"]
      }];

      var CareerArticlesRoutingModule = function CareerArticlesRoutingModule() {
        _classCallCheck(this, CareerArticlesRoutingModule);
      };

      CareerArticlesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CareerArticlesRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-career-articles-career-articles-module-es5.js.map