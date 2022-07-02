(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-view-applicant-view-applicant-module"], {
    /***/
    "ETiW": function ETiW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewApplicantModule", function () {
        return ViewApplicantModule;
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


      var _view_applicant_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-applicant-routing.module */
      "jWgu");

      var ViewApplicantModule = function ViewApplicantModule() {
        _classCallCheck(this, ViewApplicantModule);
      };

      ViewApplicantModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _view_applicant_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewApplicantRoutingModule"]]
      })], ViewApplicantModule);
      /***/
    },

    /***/
    "jWgu": function jWgu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewApplicantRoutingModule", function () {
        return ViewApplicantRoutingModule;
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


      var _view_applicant_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-applicant.component */
      "MiC3");

      var routes = [{
        path: '',
        component: _view_applicant_component__WEBPACK_IMPORTED_MODULE_3__["ViewApplicantComponent"]
      }];

      var ViewApplicantRoutingModule = function ViewApplicantRoutingModule() {
        _classCallCheck(this, ViewApplicantRoutingModule);
      };

      ViewApplicantRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewApplicantRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-view-applicant-view-applicant-module-es5.js.map