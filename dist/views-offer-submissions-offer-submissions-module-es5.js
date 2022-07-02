(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-offer-submissions-offer-submissions-module"], {
    /***/
    "3rLm": function rLm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OfferSubmissionsRoutingModule", function () {
        return OfferSubmissionsRoutingModule;
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


      var _offer_submissions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./offer-submissions.component */
      "3xDY");

      var routes = [{
        path: '',
        component: _offer_submissions_component__WEBPACK_IMPORTED_MODULE_3__["OfferSubmissionsComponent"]
      }];

      var OfferSubmissionsRoutingModule = function OfferSubmissionsRoutingModule() {
        _classCallCheck(this, OfferSubmissionsRoutingModule);
      };

      OfferSubmissionsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OfferSubmissionsRoutingModule);
      /***/
    },

    /***/
    "rBbh": function rBbh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OfferSubmissionsModule", function () {
        return OfferSubmissionsModule;
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


      var _offer_submissions_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./offer-submissions-routing.module */
      "3rLm");

      var OfferSubmissionsModule = function OfferSubmissionsModule() {
        _classCallCheck(this, OfferSubmissionsModule);
      };

      OfferSubmissionsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _offer_submissions_routing_module__WEBPACK_IMPORTED_MODULE_3__["OfferSubmissionsRoutingModule"]]
      })], OfferSubmissionsModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-offer-submissions-offer-submissions-module-es5.js.map