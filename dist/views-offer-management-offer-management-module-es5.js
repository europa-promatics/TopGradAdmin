(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-offer-management-offer-management-module"], {
    /***/
    "kEOs": function kEOs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OfferManagementRoutingModule", function () {
        return OfferManagementRoutingModule;
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


      var _offer_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./offer-management.component */
      "fMvR");

      var routes = [{
        path: '',
        component: _offer_management_component__WEBPACK_IMPORTED_MODULE_3__["OfferManagementComponent"]
      }];

      var OfferManagementRoutingModule = function OfferManagementRoutingModule() {
        _classCallCheck(this, OfferManagementRoutingModule);
      };

      OfferManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OfferManagementRoutingModule);
      /***/
    },

    /***/
    "tMkp": function tMkp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OfferManagementModule", function () {
        return OfferManagementModule;
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


      var _offer_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./offer-management-routing.module */
      "kEOs");

      var OfferManagementModule = function OfferManagementModule() {
        _classCallCheck(this, OfferManagementModule);
      };

      OfferManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _offer_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["OfferManagementRoutingModule"]]
      })], OfferManagementModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-offer-management-offer-management-module-es5.js.map