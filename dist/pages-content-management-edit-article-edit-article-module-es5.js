(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-management-edit-article-edit-article-module"], {
    /***/
    "ULaL": function ULaL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditArticleRoutingModule", function () {
        return EditArticleRoutingModule;
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


      var _edit_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-article.component */
      "U/Yp");

      var routes = [{
        path: '',
        component: _edit_article_component__WEBPACK_IMPORTED_MODULE_3__["EditArticleComponent"]
      }];

      var EditArticleRoutingModule = function EditArticleRoutingModule() {
        _classCallCheck(this, EditArticleRoutingModule);
      };

      EditArticleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditArticleRoutingModule);
      /***/
    },

    /***/
    "yZVn": function yZVn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditArticleModule", function () {
        return EditArticleModule;
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


      var _edit_article_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-article-routing.module */
      "ULaL");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "TN/R");

      var EditArticleModule = function EditArticleModule() {
        _classCallCheck(this, EditArticleModule);
      };

      EditArticleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _edit_article_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditArticleRoutingModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"]]
      })], EditArticleModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-content-management-edit-article-edit-article-module-es5.js.map