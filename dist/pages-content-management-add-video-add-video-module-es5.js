(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-management-add-video-add-video-module"], {
    /***/
    "CjsJ": function CjsJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddVideoModule", function () {
        return AddVideoModule;
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


      var _add_video_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-video-routing.module */
      "PowG");

      var AddVideoModule = function AddVideoModule() {
        _classCallCheck(this, AddVideoModule);
      };

      AddVideoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _add_video_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddVideoRoutingModule"]]
      })], AddVideoModule);
      /***/
    },

    /***/
    "PowG": function PowG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddVideoRoutingModule", function () {
        return AddVideoRoutingModule;
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


      var _add_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-video.component */
      "bRVr");

      var routes = [{
        path: '',
        component: _add_video_component__WEBPACK_IMPORTED_MODULE_3__["AddVideoComponent"]
      }];

      var AddVideoRoutingModule = function AddVideoRoutingModule() {
        _classCallCheck(this, AddVideoRoutingModule);
      };

      AddVideoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddVideoRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-content-management-add-video-add-video-module-es5.js.map