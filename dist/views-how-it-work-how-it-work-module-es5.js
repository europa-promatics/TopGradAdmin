(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-how-it-work-how-it-work-module"], {
    /***/
    "bvab": function bvab(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HowItWorkRoutingModule", function () {
        return HowItWorkRoutingModule;
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


      var _how_it_work_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./how-it-work.component */
      "h6yy");

      var routes = [{
        path: '',
        component: _how_it_work_component__WEBPACK_IMPORTED_MODULE_3__["HowItWorkComponent"]
      }];

      var HowItWorkRoutingModule = function HowItWorkRoutingModule() {
        _classCallCheck(this, HowItWorkRoutingModule);
      };

      HowItWorkRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HowItWorkRoutingModule);
      /***/
    },

    /***/
    "ugvd": function ugvd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HowItWorkModule", function () {
        return HowItWorkModule;
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


      var _how_it_work_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./how-it-work-routing.module */
      "bvab");

      var HowItWorkModule = function HowItWorkModule() {
        _classCallCheck(this, HowItWorkModule);
      };

      HowItWorkModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _how_it_work_routing_module__WEBPACK_IMPORTED_MODULE_3__["HowItWorkRoutingModule"]]
      })], HowItWorkModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-how-it-work-how-it-work-module-es5.js.map