(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-view-article-view-article-module"], {
    /***/
    "AKMg": function AKMg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewArticleRoutingModule", function () {
        return ViewArticleRoutingModule;
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


      var _view_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-article.component */
      "e9LB");

      var routes = [{
        path: '',
        component: _view_article_component__WEBPACK_IMPORTED_MODULE_3__["ViewArticleComponent"]
      }];

      var ViewArticleRoutingModule = function ViewArticleRoutingModule() {
        _classCallCheck(this, ViewArticleRoutingModule);
      };

      ViewArticleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewArticleRoutingModule);
      /***/
    },

    /***/
    "RzhO": function RzhO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewArticleModule", function () {
        return ViewArticleModule;
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


      var _view_article_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-article-routing.module */
      "AKMg");

      var ViewArticleModule = function ViewArticleModule() {
        _classCallCheck(this, ViewArticleModule);
      };

      ViewArticleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _view_article_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewArticleRoutingModule"]]
      })], ViewArticleModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-view-article-view-article-module-es5.js.map