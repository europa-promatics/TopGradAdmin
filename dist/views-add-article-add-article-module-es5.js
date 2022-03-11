(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-add-article-add-article-module"], {
    /***/
    "hCEz": function hCEz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddArticleRoutingModule", function () {
        return AddArticleRoutingModule;
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


      var _add_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-article.component */
      "unrn");

      var routes = [{
        path: '',
        component: _add_article_component__WEBPACK_IMPORTED_MODULE_3__["AddArticleComponent"]
      }];

      var AddArticleRoutingModule = function AddArticleRoutingModule() {
        _classCallCheck(this, AddArticleRoutingModule);
      };

      AddArticleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddArticleRoutingModule);
      /***/
    },

    /***/
    "un/j": function unJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddArticleModule", function () {
        return AddArticleModule;
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


      var _add_article_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-article-routing.module */
      "hCEz");

      var AddArticleModule = function AddArticleModule() {
        _classCallCheck(this, AddArticleModule);
      };

      AddArticleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _add_article_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddArticleRoutingModule"]]
      })], AddArticleModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-add-article-add-article-module-es5.js.map