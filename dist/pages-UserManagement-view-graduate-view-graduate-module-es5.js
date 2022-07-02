(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-UserManagement-view-graduate-view-graduate-module"], {
    /***/
    "4yzh": function yzh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWdyYWR1YXRlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "Iitw": function Iitw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewGraduateModule", function () {
        return ViewGraduateModule;
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


      var _view_graduate_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-graduate-routing.module */
      "u6mD");
      /* harmony import */


      var _view_graduate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./view-graduate.component */
      "vjop");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");

      var ViewGraduateModule = function ViewGraduateModule() {
        _classCallCheck(this, ViewGraduateModule);
      };

      ViewGraduateModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_view_graduate_component__WEBPACK_IMPORTED_MODULE_4__["ViewGraduateComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _view_graduate_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewGraduateRoutingModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__["ModalModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_17__["BsDropdownModule"].forRoot(), _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"]],
        providers: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__["BsModalRef"]]
      })], ViewGraduateModule);
      /***/
    },

    /***/
    "p9Rs": function p9Rs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"view-graduate-sec\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\n    \t\t\t<div class=\"card\">\n    \t\t\t\t<!-- <mat-tab-group> -->\n    \t\t\t\t\t<!-- <mat-tab label=\"Graduate Profile\"> -->\n\t\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\t\t<strong>Graduate Profile</strong>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"edit-wrapper\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"edit-form mt-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"edit-profile d-flex align-items-center\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"user_dp position-relative ml-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/avatars/8.jpg\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"view_heading ml-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h2>{{profiledata?.first_name | titlecase}} {{profiledata?.last_name | titlecase}}</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"gt_dash_sub_head\">{{profiledata?.headline | titlecase}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"accoun_date\">{{profiledata?.location?.name | titlecase}}</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"other_dtls ml-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t<p><span class=\"dtl_hdng\">Work preferences:</span>{{profiledata?.work_preference | titlecase}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p><span class=\"dtl_hdng\">Availability:</span>{{profiledata?.availability | titlecase}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"profiledata?.open_to_relocation == true &&  profiledata?.open_to_remote_work == true\" ><span class=\"dtl_hdng\">Location:</span>Open to remote working/relocation</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"profiledata?.open_to_relocation == true  && profiledata?.open_to_remote_work == false\" ><span class=\"dtl_hdng\">Location:</span>Open to relocation</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"profiledata?.open_to_remote_work == true && profiledata?.open_to_relocation == false\" ><span class=\"dtl_hdng\">Location:</span>Open to remote working</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"access-form-fields mt-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row justify-content-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"access-form\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"grad_dtls\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prfl_smry\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>Profile summary</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{profiledata?.summary | titlecase}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prfl_smry\" *ngFor=\"let i of profiledata?.work_experience\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>Work experience</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"expe_list1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul type=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"experiene_txt d-flex\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"exper_img mr-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"experience_inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{i.company_logo}}\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"work_right_txt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"all_headings d-flex justify-content-between\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"ex_headings\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"account_intern\">{{i?.job_title | titlecase}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"accnt_subhead\">{{i?.company_name | titlecase}} • {{i.employment_type | titlecase}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"accoun_date\" *ngIf=\"i.still_in_role==true\" >{{i?.monthName}} {{i?.start_year}} - Present ({{i?.ServingMonths}} months)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"accoun_date\" *ngIf=\"i.still_in_role==false\" >{{i?.monthName}} {{i?.start_year}} - {{i?.lastMonthName}} {{i?.end_year}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul type=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>- {{i?.description | titlecase}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <li>- Reviewed, prepared, and issued bills and invoices from over 300+ clients</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>- Assisted with incoming earnings and outgoing payments</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>- Organized files, records, cash, and cash equivalents to comply with policy and procedure</li> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"files_prevw mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"prw_ttl\">Files</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"file_icons_pw d-flex align-items-center\" *ngFor=\"let f of i.media\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"25\" height=\"32\" viewBox=\"0 0 25 32\" fill=\"none\" xmlns=\"{{f?.url}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path d=\"M21.1761 5.17688C20.8764 4.88148 20.5691 4.58109 20.2671 4.27585C19.9625 3.97307 19.663 3.66538 19.3682 3.36506C17.2671 1.21606 16.0158 0 14.7104 0H4.94144C2.2349 0 0.0293812 2.20931 0.0293812 4.92326V24.6657C0.0293812 25.3182 0.55831 25.8471 1.21078 25.8471C1.86324 25.8471 2.39217 25.3182 2.39217 24.6657V4.90854C2.39217 3.54972 3.49247 2.44691 4.8482 2.44691L13.8446 2.44195C14.7191 2.44195 14.7191 3.75896 14.7191 4.85069V8.60098C14.7104 9.84532 14.7104 9.8318 15.9471 9.8318H19.6312C20.8555 9.8318 22.0872 9.83795 22.0872 11.0626V27.0767C22.0872 28.4356 20.9869 29.5384 19.6312 29.5384H4.8482C3.49247 29.5384 2.39217 28.4356 2.39217 27.0767V24.3343C2.39217 23.6737 1.85667 23.1382 1.19609 23.1382C0.535506 23.1382 0 23.6737 0 24.3343V27.0767C0 29.7907 2.20429 32 4.91206 32H19.6213C22.329 32 24.5333 29.7907 24.5333 27.0767V9.84532C24.5333 8.5382 23.3202 7.2828 21.1761 5.17688Z\" fill=\"#9A9A9A\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prew_info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"pw_accnt mb-0\">{{f?.name}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"pw_size mb-0\">{{f?.size}} • Added {{f?.date | date:\"dd/MM/yyyy\"}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prfl_smry\" *ngFor=\"let e of profiledata?.education\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>Education</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"expe_list1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul type=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"experiene_txt d-flex\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"exper_img mr-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"experience_inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/image 22.png\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"work_right_txt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"all_headings\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"ex_headings\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"account_intern\">{{e?.institution | titlecase}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"accnt_subhead\">{{e?.qualification | titlecase}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"accoun_date mb-0\">{{e?.start_year}} - {{e.end_year}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"accoun_date mb-0\">Grade: {{e?.grade | titlecase}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"files_prevw mb-3\" *ngFor=\"let edu of e?.media\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"prw_ttl\">Files</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"file_icons_pw d-flex align-items-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"25\" height=\"32\" viewBox=\"0 0 25 32\" fill=\"none\" xmlns=\"{{edu.url}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path d=\"M21.1761 5.17688C20.8764 4.88148 20.5691 4.58109 20.2671 4.27585C19.9625 3.97307 19.663 3.66538 19.3682 3.36506C17.2671 1.21606 16.0158 0 14.7104 0H4.94144C2.2349 0 0.0293812 2.20931 0.0293812 4.92326V24.6657C0.0293812 25.3182 0.55831 25.8471 1.21078 25.8471C1.86324 25.8471 2.39217 25.3182 2.39217 24.6657V4.90854C2.39217 3.54972 3.49247 2.44691 4.8482 2.44691L13.8446 2.44195C14.7191 2.44195 14.7191 3.75896 14.7191 4.85069V8.60098C14.7104 9.84532 14.7104 9.8318 15.9471 9.8318H19.6312C20.8555 9.8318 22.0872 9.83795 22.0872 11.0626V27.0767C22.0872 28.4356 20.9869 29.5384 19.6312 29.5384H4.8482C3.49247 29.5384 2.39217 28.4356 2.39217 27.0767V24.3343C2.39217 23.6737 1.85667 23.1382 1.19609 23.1382C0.535506 23.1382 0 23.6737 0 24.3343V27.0767C0 29.7907 2.20429 32 4.91206 32H19.6213C22.329 32 24.5333 29.7907 24.5333 27.0767V9.84532C24.5333 8.5382 23.3202 7.2828 21.1761 5.17688Z\" fill=\"#9A9A9A\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prew_info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"pw_accnt mb-0\">{{edu?.name}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"pw_size mb-0\">{{edu?.size}} • Added {{edu?.date | date:\"dd/MM/yyyy\"}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prfl_smry\" *ngFor=\"let project of profiledata?.projects\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>Projects (Uni/TAFE)</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"expe_list1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul type=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"experiene_txt d-flex\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"exper_img mr-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"experience_inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/image 22.png\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"work_right_txt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"all_headings\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"ex_headings\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"account_intern\">{{project?.project_name | titlecase}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"accnt_subhead\">{{project?.education | titlecase}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"accoun_date mb-0\">{{project?.year}} </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"singl_div\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"accoun_date mb-0\">Summary</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{project?.project_summary | titlecase}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"singl_div\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"accoun_date mb-0\">Key tasks</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul type=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>- {{project?.key_tasks | titlecase}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <li>- Consectetur adipiscing elit</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>- Suspendisse elit nulla id lacinia a porta sit amet.</li> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"singl_div\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"accoun_date mb-0\">Outcomes</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul type=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>- {{project?.outcomes | titlecase}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <li>- Consectetur adipiscing elit</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>- Suspendisse elit nulla id lacinia a porta sit amet.</li> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"files_prevw mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"prw_ttl\">Files</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"file_icons_pw d-flex align-items-center\" *ngFor=\"let media of project?.media\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"25\" height=\"32\" viewBox=\"0 0 25 32\" fill=\"none\" xmlns=\"{{media.url}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path d=\"M21.1761 5.17688C20.8764 4.88148 20.5691 4.58109 20.2671 4.27585C19.9625 3.97307 19.663 3.66538 19.3682 3.36506C17.2671 1.21606 16.0158 0 14.7104 0H4.94144C2.2349 0 0.0293812 2.20931 0.0293812 4.92326V24.6657C0.0293812 25.3182 0.55831 25.8471 1.21078 25.8471C1.86324 25.8471 2.39217 25.3182 2.39217 24.6657V4.90854C2.39217 3.54972 3.49247 2.44691 4.8482 2.44691L13.8446 2.44195C14.7191 2.44195 14.7191 3.75896 14.7191 4.85069V8.60098C14.7104 9.84532 14.7104 9.8318 15.9471 9.8318H19.6312C20.8555 9.8318 22.0872 9.83795 22.0872 11.0626V27.0767C22.0872 28.4356 20.9869 29.5384 19.6312 29.5384H4.8482C3.49247 29.5384 2.39217 28.4356 2.39217 27.0767V24.3343C2.39217 23.6737 1.85667 23.1382 1.19609 23.1382C0.535506 23.1382 0 23.6737 0 24.3343V27.0767C0 29.7907 2.20429 32 4.91206 32H19.6213C22.329 32 24.5333 29.7907 24.5333 27.0767V9.84532C24.5333 8.5382 23.3202 7.2828 21.1761 5.17688Z\" fill=\"#9A9A9A\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prew_info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"pw_accnt mb-0\">{{media?.name}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"pw_size mb-0\">{{media?.size}} • Added {{media?.date | date:\"dd/MM/yyyy\"}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prfl_smry\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>Licences and certifications</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"expe_list1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul type=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"experiene_txt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"work_right_txt\" *ngFor=\"let license of profiledata?.licenses\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"all_headings\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"singl_div\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mb-1\">{{license?.name | titlecase}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"accoun_date \">{{license?.issuingMonthName}} {{license?.issuing_year}} - {{license?.expiryMonthName}} {{license?.expiry_year}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"singl_div\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mb-1\">VIC Responsible Service of Alcohol Licence</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"accoun_date \">Issued Feb 2020</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prfl_smry\" *ngFor=\"let experience of profiledata?.volunteer_experience\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>Volunteer experience</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"expe_list1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul type=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"experiene_txt d-flex\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"exper_img mr-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"experience_inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{experience.organization_logo}}\" class=\"img-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"work_right_txt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"all_headings\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"ex_headings\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"account_intern\">{{experience?.organization | titlecase}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"accnt_subhead\">{{experience?.description | titlecase}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"accoun_date mb-0\">{{experience?.startMonthName}} {{experience?.start_year}} - Present (10 months)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prfl_smry\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>Resume</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"files_prevw mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"file_icons_pw d-flex align-items-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg width=\"25\" height=\"32\" viewBox=\"0 0 25 32\" fill=\"none\" xmlns=\"{{profiledata?.resume.url}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path d=\"M21.1761 5.17688C20.8764 4.88148 20.5691 4.58109 20.2671 4.27585C19.9625 3.97307 19.663 3.66538 19.3682 3.36506C17.2671 1.21606 16.0158 0 14.7104 0H4.94144C2.2349 0 0.0293812 2.20931 0.0293812 4.92326V24.6657C0.0293812 25.3182 0.55831 25.8471 1.21078 25.8471C1.86324 25.8471 2.39217 25.3182 2.39217 24.6657V4.90854C2.39217 3.54972 3.49247 2.44691 4.8482 2.44691L13.8446 2.44195C14.7191 2.44195 14.7191 3.75896 14.7191 4.85069V8.60098C14.7104 9.84532 14.7104 9.8318 15.9471 9.8318H19.6312C20.8555 9.8318 22.0872 9.83795 22.0872 11.0626V27.0767C22.0872 28.4356 20.9869 29.5384 19.6312 29.5384H4.8482C3.49247 29.5384 2.39217 28.4356 2.39217 27.0767V24.3343C2.39217 23.6737 1.85667 23.1382 1.19609 23.1382C0.535506 23.1382 0 23.6737 0 24.3343V27.0767C0 29.7907 2.20429 32 4.91206 32H19.6213C22.329 32 24.5333 29.7907 24.5333 27.0767V9.84532C24.5333 8.5382 23.3202 7.2828 21.1761 5.17688Z\" fill=\"#9A9A9A\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prew_info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"pw_accnt mb-0\">{{profiledata?.resume?.name}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"pw_size mb-0\">{{profiledata?.resume?.size}} • Added {{profiledata?.resume?.date | date:\"dd/MM/yyyy\"}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prfl_smry\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>Video Resume</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"video_info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<video controls (click)=\"toggleVideo($event)\" #videoPlayer\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t src=\"{{profiledata?.video_resume?.url}}\" type=\"video/mp4\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBrowser not supported\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</video>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <p class=\"accoun_date mb-0\">126 KB • Added 02/05/19</p> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"vid_img mt-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<video src=\"{{profiledata.video_resume.url}}\" class=\"img-fluid\"></video>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"add-click employr_vw\"></span><video src=\"{{profiledata?.video_resume?.url}}\" ></video>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prfl_smry\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>Technical skills</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"expe_list1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"typed_text typed_subpart d-flex flex-wrap\" type=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let skill of profiledata?.skills\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill_dtl dropdown\" dropdown placement=\"bottom right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span data-toggle=\"dropdown\" dropdownToggle (click)=\"false\">{{skill?.skill_id?.name | titlecase}}</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right text-center\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        <div class=\"dropdown-header text-center\"><strong>{{skill?.skill_id?.name | titlecase}}</strong></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        <h4>Proficiency Level</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        \t<div class=\"ratng_stars\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t                            \t<ul class=\"list-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t                            \t\t<li class=\"list-inline-item\"><svg width=\"30\" height=\"29\" viewBox=\"0 0 30 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path d=\"M29.671 12.1172C29.8164 11.9745 29.9194 11.7933 29.9682 11.5942C30.0169 11.3952 30.0096 11.1863 29.9469 10.9913C29.8842 10.7963 29.7688 10.623 29.6137 10.4912C29.4586 10.3593 29.27 10.274 29.0695 10.2452L20.5824 8.99605C20.4087 8.9696 20.244 8.90104 20.1021 8.79623C19.9603 8.69142 19.8456 8.55346 19.7677 8.39409L15.9865 0.61033C15.8966 0.427029 15.7579 0.272783 15.586 0.164956C15.4141 0.0571287 15.2159 0 15.0137 0C14.8116 0 14.6134 0.0571287 14.4415 0.164956C14.2696 0.272783 14.1309 0.427029 14.041 0.61033L10.2598 8.39409C10.1819 8.55346 10.0672 8.69142 9.92537 8.79623C9.78352 8.90104 9.61875 8.9696 9.44509 8.99605L0.930534 10.2452C0.729973 10.274 0.541424 10.3593 0.386317 10.4912C0.23121 10.623 0.115766 10.7963 0.0531045 10.9913C-0.00955693 11.1863 -0.0169222 11.3952 0.0318457 11.5942C0.0806135 11.7933 0.183559 11.9745 0.328981 12.1172L6.46826 18.1751C6.59481 18.2987 6.68949 18.4519 6.74403 18.6211C6.79856 18.7903 6.81128 18.9705 6.78107 19.1459L5.33046 27.716C5.29652 27.918 5.31899 28.1255 5.39533 28.3152C5.47167 28.505 5.59885 28.6693 5.76253 28.7898C5.92621 28.9102 6.11989 28.982 6.32171 28.997C6.52354 29.0121 6.7255 28.9697 6.90482 28.8747L14.4947 24.8211C14.6507 24.7387 14.8241 24.6957 15 24.6957C15.1759 24.6957 15.3493 24.7387 15.5053 24.8211L23.0952 28.8608C23.2734 28.9546 23.4738 28.9965 23.6741 28.982C23.8744 28.9674 24.0668 28.8969 24.23 28.7783C24.3931 28.6597 24.5205 28.4976 24.5981 28.3101C24.6757 28.1226 24.7004 27.9169 24.6695 27.716L23.2189 19.1459C23.1887 18.9705 23.2014 18.7903 23.256 18.6211C23.3105 18.4519 23.4052 18.2987 23.5317 18.1751L29.671 12.1172Z\" fill=\"#FADE97\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><svg width=\"30\" height=\"29\" viewBox=\"0 0 30 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path d=\"M29.671 12.1172C29.8164 11.9745 29.9194 11.7933 29.9682 11.5942C30.0169 11.3952 30.0096 11.1863 29.9469 10.9913C29.8842 10.7963 29.7688 10.623 29.6137 10.4912C29.4586 10.3593 29.27 10.274 29.0695 10.2452L20.5824 8.99605C20.4087 8.9696 20.244 8.90104 20.1021 8.79623C19.9603 8.69142 19.8456 8.55346 19.7677 8.39409L15.9865 0.61033C15.8966 0.427029 15.7579 0.272783 15.586 0.164956C15.4141 0.0571287 15.2159 0 15.0137 0C14.8116 0 14.6134 0.0571287 14.4415 0.164956C14.2696 0.272783 14.1309 0.427029 14.041 0.61033L10.2598 8.39409C10.1819 8.55346 10.0672 8.69142 9.92537 8.79623C9.78352 8.90104 9.61875 8.9696 9.44509 8.99605L0.930534 10.2452C0.729973 10.274 0.541424 10.3593 0.386317 10.4912C0.23121 10.623 0.115766 10.7963 0.0531045 10.9913C-0.00955693 11.1863 -0.0169222 11.3952 0.0318457 11.5942C0.0806135 11.7933 0.183559 11.9745 0.328981 12.1172L6.46826 18.1751C6.59481 18.2987 6.68949 18.4519 6.74403 18.6211C6.79856 18.7903 6.81128 18.9705 6.78107 19.1459L5.33046 27.716C5.29652 27.918 5.31899 28.1255 5.39533 28.3152C5.47167 28.505 5.59885 28.6693 5.76253 28.7898C5.92621 28.9102 6.11989 28.982 6.32171 28.997C6.52354 29.0121 6.7255 28.9697 6.90482 28.8747L14.4947 24.8211C14.6507 24.7387 14.8241 24.6957 15 24.6957C15.1759 24.6957 15.3493 24.7387 15.5053 24.8211L23.0952 28.8608C23.2734 28.9546 23.4738 28.9965 23.6741 28.982C23.8744 28.9674 24.0668 28.8969 24.23 28.7783C24.3931 28.6597 24.5205 28.4976 24.5981 28.3101C24.6757 28.1226 24.7004 27.9169 24.6695 27.716L23.2189 19.1459C23.1887 18.9705 23.2014 18.7903 23.256 18.6211C23.3105 18.4519 23.4052 18.2987 23.5317 18.1751L29.671 12.1172Z\" fill=\"#FADE97\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><svg width=\"30\" height=\"29\" viewBox=\"0 0 30 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path d=\"M29.671 12.1172C29.8164 11.9745 29.9194 11.7933 29.9682 11.5942C30.0169 11.3952 30.0096 11.1863 29.9469 10.9913C29.8842 10.7963 29.7688 10.623 29.6137 10.4912C29.4586 10.3593 29.27 10.274 29.0695 10.2452L20.5824 8.99605C20.4087 8.9696 20.244 8.90104 20.1021 8.79623C19.9603 8.69142 19.8456 8.55346 19.7677 8.39409L15.9865 0.61033C15.8966 0.427029 15.7579 0.272783 15.586 0.164956C15.4141 0.0571287 15.2159 0 15.0137 0C14.8116 0 14.6134 0.0571287 14.4415 0.164956C14.2696 0.272783 14.1309 0.427029 14.041 0.61033L10.2598 8.39409C10.1819 8.55346 10.0672 8.69142 9.92537 8.79623C9.78352 8.90104 9.61875 8.9696 9.44509 8.99605L0.930534 10.2452C0.729973 10.274 0.541424 10.3593 0.386317 10.4912C0.23121 10.623 0.115766 10.7963 0.0531045 10.9913C-0.00955693 11.1863 -0.0169222 11.3952 0.0318457 11.5942C0.0806135 11.7933 0.183559 11.9745 0.328981 12.1172L6.46826 18.1751C6.59481 18.2987 6.68949 18.4519 6.74403 18.6211C6.79856 18.7903 6.81128 18.9705 6.78107 19.1459L5.33046 27.716C5.29652 27.918 5.31899 28.1255 5.39533 28.3152C5.47167 28.505 5.59885 28.6693 5.76253 28.7898C5.92621 28.9102 6.11989 28.982 6.32171 28.997C6.52354 29.0121 6.7255 28.9697 6.90482 28.8747L14.4947 24.8211C14.6507 24.7387 14.8241 24.6957 15 24.6957C15.1759 24.6957 15.3493 24.7387 15.5053 24.8211L23.0952 28.8608C23.2734 28.9546 23.4738 28.9965 23.6741 28.982C23.8744 28.9674 24.0668 28.8969 24.23 28.7783C24.3931 28.6597 24.5205 28.4976 24.5981 28.3101C24.6757 28.1226 24.7004 27.9169 24.6695 27.716L23.2189 19.1459C23.1887 18.9705 23.2014 18.7903 23.256 18.6211C23.3105 18.4519 23.4052 18.2987 23.5317 18.1751L29.671 12.1172Z\" fill=\"#FADE97\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><svg width=\"30\" height=\"29\" viewBox=\"0 0 30 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path d=\"M29.671 12.1172C29.8164 11.9745 29.9194 11.7933 29.9682 11.5942C30.0169 11.3952 30.0096 11.1863 29.9469 10.9913C29.8842 10.7963 29.7688 10.623 29.6137 10.4912C29.4586 10.3593 29.27 10.274 29.0695 10.2452L20.5824 8.99605C20.4087 8.9696 20.244 8.90104 20.1021 8.79623C19.9603 8.69142 19.8456 8.55346 19.7677 8.39409L15.9865 0.61033C15.8966 0.427029 15.7579 0.272783 15.586 0.164956C15.4141 0.0571287 15.2159 0 15.0137 0C14.8116 0 14.6134 0.0571287 14.4415 0.164956C14.2696 0.272783 14.1309 0.427029 14.041 0.61033L10.2598 8.39409C10.1819 8.55346 10.0672 8.69142 9.92537 8.79623C9.78352 8.90104 9.61875 8.9696 9.44509 8.99605L0.930534 10.2452C0.729973 10.274 0.541424 10.3593 0.386317 10.4912C0.23121 10.623 0.115766 10.7963 0.0531045 10.9913C-0.00955693 11.1863 -0.0169222 11.3952 0.0318457 11.5942C0.0806135 11.7933 0.183559 11.9745 0.328981 12.1172L6.46826 18.1751C6.59481 18.2987 6.68949 18.4519 6.74403 18.6211C6.79856 18.7903 6.81128 18.9705 6.78107 19.1459L5.33046 27.716C5.29652 27.918 5.31899 28.1255 5.39533 28.3152C5.47167 28.505 5.59885 28.6693 5.76253 28.7898C5.92621 28.9102 6.11989 28.982 6.32171 28.997C6.52354 29.0121 6.7255 28.9697 6.90482 28.8747L14.4947 24.8211C14.6507 24.7387 14.8241 24.6957 15 24.6957C15.1759 24.6957 15.3493 24.7387 15.5053 24.8211L23.0952 28.8608C23.2734 28.9546 23.4738 28.9965 23.6741 28.982C23.8744 28.9674 24.0668 28.8969 24.23 28.7783C24.3931 28.6597 24.5205 28.4976 24.5981 28.3101C24.6757 28.1226 24.7004 27.9169 24.6695 27.716L23.2189 19.1459C23.1887 18.9705 23.2014 18.7903 23.256 18.6211C23.3105 18.4519 23.4052 18.2987 23.5317 18.1751L29.671 12.1172Z\" fill=\"#FADE97\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><svg width=\"30\" height=\"29\" viewBox=\"0 0 30 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path d=\"M29.3208 11.7604L29.3198 11.7613L23.1824 17.8174C23.1821 17.8177 23.1819 17.8179 23.1816 17.8181C22.997 17.9987 22.8593 18.2219 22.7801 18.4678C22.7008 18.7136 22.6823 18.9752 22.726 19.2298C22.7261 19.2301 22.7261 19.2305 22.7262 19.2308L24.1758 27.7953C24.1921 27.905 24.1783 28.017 24.1361 28.1189C24.0935 28.2218 24.024 28.3098 23.9359 28.3739C23.8479 28.4379 23.7447 28.4755 23.6378 28.4833C23.5313 28.491 23.4244 28.4689 23.3289 28.4188C23.3286 28.4186 23.3283 28.4185 23.328 28.4184L15.7402 24.3797L15.7387 24.3789C15.5109 24.2587 15.2575 24.1957 15 24.1957C14.7425 24.1957 14.4891 24.2587 14.2613 24.3788L14.2591 24.38L6.67083 28.4329C6.67064 28.433 6.67045 28.4331 6.67027 28.4332C6.57408 28.484 6.46626 28.5064 6.3588 28.4984C6.25111 28.4904 6.14723 28.4521 6.05891 28.3871C5.97053 28.322 5.90108 28.2327 5.85919 28.1286C5.81732 28.0245 5.80488 27.9104 5.82349 27.7993C5.82351 27.7992 5.82353 27.799 5.82355 27.7989L7.27381 19.2308C7.27387 19.2305 7.27392 19.2301 7.27398 19.2298C7.31767 18.9752 7.29916 18.7136 7.21993 18.4678C7.14071 18.2219 7.00307 17.9988 6.81846 17.8182C6.81819 17.818 6.81792 17.8177 6.81764 17.8174L0.680169 11.7613L0.679246 11.7604C0.600571 11.6832 0.544246 11.5845 0.517479 11.4753C0.490705 11.366 0.494768 11.2512 0.529131 11.1443L0.0553482 10.9921L0.529131 11.1443C0.563481 11.0374 0.626506 10.9432 0.71022 10.8721C0.793878 10.8009 0.894917 10.7555 1.00169 10.7401L1.00311 10.7399L9.51767 9.49077L9.52039 9.49035C9.77473 9.4516 10.0156 9.35126 10.2225 9.19836C10.4294 9.04549 10.5962 8.8447 10.7091 8.61349L10.7095 8.61257L14.4898 0.830625C14.4899 0.830374 14.4901 0.830124 14.4902 0.829874C14.5395 0.729797 14.6149 0.646439 14.7072 0.588498C14.7998 0.530449 14.9059 0.5 15.0137 0.5C15.1216 0.5 15.2277 0.530448 15.3203 0.588498C15.4126 0.64644 15.488 0.729796 15.5373 0.829872C15.5374 0.830122 15.5376 0.830372 15.5377 0.830623L19.318 8.61257L19.3184 8.61349C19.4313 8.8447 19.5981 9.04549 19.805 9.19836C20.0119 9.35126 20.2528 9.4516 20.5071 9.49036L20.5096 9.49072L28.9967 10.7399L28.9983 10.7401C29.1051 10.7555 29.2061 10.8009 29.2898 10.8721C29.3735 10.9432 29.4365 11.0374 29.4709 11.1443C29.5052 11.2512 29.5093 11.366 29.4825 11.4752L29.9682 11.5942L29.4825 11.4753C29.4558 11.5845 29.3994 11.6832 29.3208 11.7604Z\" stroke=\"#FADE97\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t                            \t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t                            </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t                            <h4>Description</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        <p>{{skill?.description}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t      </div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"skill_dtl dropdown\" dropdown placement=\"bottom right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span data-toggle=\"dropdown\" dropdownToggle (click)=\"false\">Adobe Illustrator</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right text-center\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        <div class=\"dropdown-header text-center\"><strong>Adobe Illustrator</strong></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        <h4>Proficiency Level</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        \t<div class=\"ratng_stars\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t                            \t<ul class=\"list-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t                            \t\t<li class=\"list-inline-item\"><svg width=\"30\" height=\"29\" viewBox=\"0 0 30 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path d=\"M29.671 12.1172C29.8164 11.9745 29.9194 11.7933 29.9682 11.5942C30.0169 11.3952 30.0096 11.1863 29.9469 10.9913C29.8842 10.7963 29.7688 10.623 29.6137 10.4912C29.4586 10.3593 29.27 10.274 29.0695 10.2452L20.5824 8.99605C20.4087 8.9696 20.244 8.90104 20.1021 8.79623C19.9603 8.69142 19.8456 8.55346 19.7677 8.39409L15.9865 0.61033C15.8966 0.427029 15.7579 0.272783 15.586 0.164956C15.4141 0.0571287 15.2159 0 15.0137 0C14.8116 0 14.6134 0.0571287 14.4415 0.164956C14.2696 0.272783 14.1309 0.427029 14.041 0.61033L10.2598 8.39409C10.1819 8.55346 10.0672 8.69142 9.92537 8.79623C9.78352 8.90104 9.61875 8.9696 9.44509 8.99605L0.930534 10.2452C0.729973 10.274 0.541424 10.3593 0.386317 10.4912C0.23121 10.623 0.115766 10.7963 0.0531045 10.9913C-0.00955693 11.1863 -0.0169222 11.3952 0.0318457 11.5942C0.0806135 11.7933 0.183559 11.9745 0.328981 12.1172L6.46826 18.1751C6.59481 18.2987 6.68949 18.4519 6.74403 18.6211C6.79856 18.7903 6.81128 18.9705 6.78107 19.1459L5.33046 27.716C5.29652 27.918 5.31899 28.1255 5.39533 28.3152C5.47167 28.505 5.59885 28.6693 5.76253 28.7898C5.92621 28.9102 6.11989 28.982 6.32171 28.997C6.52354 29.0121 6.7255 28.9697 6.90482 28.8747L14.4947 24.8211C14.6507 24.7387 14.8241 24.6957 15 24.6957C15.1759 24.6957 15.3493 24.7387 15.5053 24.8211L23.0952 28.8608C23.2734 28.9546 23.4738 28.9965 23.6741 28.982C23.8744 28.9674 24.0668 28.8969 24.23 28.7783C24.3931 28.6597 24.5205 28.4976 24.5981 28.3101C24.6757 28.1226 24.7004 27.9169 24.6695 27.716L23.2189 19.1459C23.1887 18.9705 23.2014 18.7903 23.256 18.6211C23.3105 18.4519 23.4052 18.2987 23.5317 18.1751L29.671 12.1172Z\" fill=\"#FADE97\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><svg width=\"30\" height=\"29\" viewBox=\"0 0 30 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path d=\"M29.671 12.1172C29.8164 11.9745 29.9194 11.7933 29.9682 11.5942C30.0169 11.3952 30.0096 11.1863 29.9469 10.9913C29.8842 10.7963 29.7688 10.623 29.6137 10.4912C29.4586 10.3593 29.27 10.274 29.0695 10.2452L20.5824 8.99605C20.4087 8.9696 20.244 8.90104 20.1021 8.79623C19.9603 8.69142 19.8456 8.55346 19.7677 8.39409L15.9865 0.61033C15.8966 0.427029 15.7579 0.272783 15.586 0.164956C15.4141 0.0571287 15.2159 0 15.0137 0C14.8116 0 14.6134 0.0571287 14.4415 0.164956C14.2696 0.272783 14.1309 0.427029 14.041 0.61033L10.2598 8.39409C10.1819 8.55346 10.0672 8.69142 9.92537 8.79623C9.78352 8.90104 9.61875 8.9696 9.44509 8.99605L0.930534 10.2452C0.729973 10.274 0.541424 10.3593 0.386317 10.4912C0.23121 10.623 0.115766 10.7963 0.0531045 10.9913C-0.00955693 11.1863 -0.0169222 11.3952 0.0318457 11.5942C0.0806135 11.7933 0.183559 11.9745 0.328981 12.1172L6.46826 18.1751C6.59481 18.2987 6.68949 18.4519 6.74403 18.6211C6.79856 18.7903 6.81128 18.9705 6.78107 19.1459L5.33046 27.716C5.29652 27.918 5.31899 28.1255 5.39533 28.3152C5.47167 28.505 5.59885 28.6693 5.76253 28.7898C5.92621 28.9102 6.11989 28.982 6.32171 28.997C6.52354 29.0121 6.7255 28.9697 6.90482 28.8747L14.4947 24.8211C14.6507 24.7387 14.8241 24.6957 15 24.6957C15.1759 24.6957 15.3493 24.7387 15.5053 24.8211L23.0952 28.8608C23.2734 28.9546 23.4738 28.9965 23.6741 28.982C23.8744 28.9674 24.0668 28.8969 24.23 28.7783C24.3931 28.6597 24.5205 28.4976 24.5981 28.3101C24.6757 28.1226 24.7004 27.9169 24.6695 27.716L23.2189 19.1459C23.1887 18.9705 23.2014 18.7903 23.256 18.6211C23.3105 18.4519 23.4052 18.2987 23.5317 18.1751L29.671 12.1172Z\" fill=\"#FADE97\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><svg width=\"30\" height=\"29\" viewBox=\"0 0 30 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path d=\"M29.671 12.1172C29.8164 11.9745 29.9194 11.7933 29.9682 11.5942C30.0169 11.3952 30.0096 11.1863 29.9469 10.9913C29.8842 10.7963 29.7688 10.623 29.6137 10.4912C29.4586 10.3593 29.27 10.274 29.0695 10.2452L20.5824 8.99605C20.4087 8.9696 20.244 8.90104 20.1021 8.79623C19.9603 8.69142 19.8456 8.55346 19.7677 8.39409L15.9865 0.61033C15.8966 0.427029 15.7579 0.272783 15.586 0.164956C15.4141 0.0571287 15.2159 0 15.0137 0C14.8116 0 14.6134 0.0571287 14.4415 0.164956C14.2696 0.272783 14.1309 0.427029 14.041 0.61033L10.2598 8.39409C10.1819 8.55346 10.0672 8.69142 9.92537 8.79623C9.78352 8.90104 9.61875 8.9696 9.44509 8.99605L0.930534 10.2452C0.729973 10.274 0.541424 10.3593 0.386317 10.4912C0.23121 10.623 0.115766 10.7963 0.0531045 10.9913C-0.00955693 11.1863 -0.0169222 11.3952 0.0318457 11.5942C0.0806135 11.7933 0.183559 11.9745 0.328981 12.1172L6.46826 18.1751C6.59481 18.2987 6.68949 18.4519 6.74403 18.6211C6.79856 18.7903 6.81128 18.9705 6.78107 19.1459L5.33046 27.716C5.29652 27.918 5.31899 28.1255 5.39533 28.3152C5.47167 28.505 5.59885 28.6693 5.76253 28.7898C5.92621 28.9102 6.11989 28.982 6.32171 28.997C6.52354 29.0121 6.7255 28.9697 6.90482 28.8747L14.4947 24.8211C14.6507 24.7387 14.8241 24.6957 15 24.6957C15.1759 24.6957 15.3493 24.7387 15.5053 24.8211L23.0952 28.8608C23.2734 28.9546 23.4738 28.9965 23.6741 28.982C23.8744 28.9674 24.0668 28.8969 24.23 28.7783C24.3931 28.6597 24.5205 28.4976 24.5981 28.3101C24.6757 28.1226 24.7004 27.9169 24.6695 27.716L23.2189 19.1459C23.1887 18.9705 23.2014 18.7903 23.256 18.6211C23.3105 18.4519 23.4052 18.2987 23.5317 18.1751L29.671 12.1172Z\" fill=\"#FADE97\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><svg width=\"30\" height=\"29\" viewBox=\"0 0 30 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path d=\"M29.671 12.1172C29.8164 11.9745 29.9194 11.7933 29.9682 11.5942C30.0169 11.3952 30.0096 11.1863 29.9469 10.9913C29.8842 10.7963 29.7688 10.623 29.6137 10.4912C29.4586 10.3593 29.27 10.274 29.0695 10.2452L20.5824 8.99605C20.4087 8.9696 20.244 8.90104 20.1021 8.79623C19.9603 8.69142 19.8456 8.55346 19.7677 8.39409L15.9865 0.61033C15.8966 0.427029 15.7579 0.272783 15.586 0.164956C15.4141 0.0571287 15.2159 0 15.0137 0C14.8116 0 14.6134 0.0571287 14.4415 0.164956C14.2696 0.272783 14.1309 0.427029 14.041 0.61033L10.2598 8.39409C10.1819 8.55346 10.0672 8.69142 9.92537 8.79623C9.78352 8.90104 9.61875 8.9696 9.44509 8.99605L0.930534 10.2452C0.729973 10.274 0.541424 10.3593 0.386317 10.4912C0.23121 10.623 0.115766 10.7963 0.0531045 10.9913C-0.00955693 11.1863 -0.0169222 11.3952 0.0318457 11.5942C0.0806135 11.7933 0.183559 11.9745 0.328981 12.1172L6.46826 18.1751C6.59481 18.2987 6.68949 18.4519 6.74403 18.6211C6.79856 18.7903 6.81128 18.9705 6.78107 19.1459L5.33046 27.716C5.29652 27.918 5.31899 28.1255 5.39533 28.3152C5.47167 28.505 5.59885 28.6693 5.76253 28.7898C5.92621 28.9102 6.11989 28.982 6.32171 28.997C6.52354 29.0121 6.7255 28.9697 6.90482 28.8747L14.4947 24.8211C14.6507 24.7387 14.8241 24.6957 15 24.6957C15.1759 24.6957 15.3493 24.7387 15.5053 24.8211L23.0952 28.8608C23.2734 28.9546 23.4738 28.9965 23.6741 28.982C23.8744 28.9674 24.0668 28.8969 24.23 28.7783C24.3931 28.6597 24.5205 28.4976 24.5981 28.3101C24.6757 28.1226 24.7004 27.9169 24.6695 27.716L23.2189 19.1459C23.1887 18.9705 23.2014 18.7903 23.256 18.6211C23.3105 18.4519 23.4052 18.2987 23.5317 18.1751L29.671 12.1172Z\" fill=\"#FADE97\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\"><svg width=\"30\" height=\"29\" viewBox=\"0 0 30 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path d=\"M29.3208 11.7604L29.3198 11.7613L23.1824 17.8174C23.1821 17.8177 23.1819 17.8179 23.1816 17.8181C22.997 17.9987 22.8593 18.2219 22.7801 18.4678C22.7008 18.7136 22.6823 18.9752 22.726 19.2298C22.7261 19.2301 22.7261 19.2305 22.7262 19.2308L24.1758 27.7953C24.1921 27.905 24.1783 28.017 24.1361 28.1189C24.0935 28.2218 24.024 28.3098 23.9359 28.3739C23.8479 28.4379 23.7447 28.4755 23.6378 28.4833C23.5313 28.491 23.4244 28.4689 23.3289 28.4188C23.3286 28.4186 23.3283 28.4185 23.328 28.4184L15.7402 24.3797L15.7387 24.3789C15.5109 24.2587 15.2575 24.1957 15 24.1957C14.7425 24.1957 14.4891 24.2587 14.2613 24.3788L14.2591 24.38L6.67083 28.4329C6.67064 28.433 6.67045 28.4331 6.67027 28.4332C6.57408 28.484 6.46626 28.5064 6.3588 28.4984C6.25111 28.4904 6.14723 28.4521 6.05891 28.3871C5.97053 28.322 5.90108 28.2327 5.85919 28.1286C5.81732 28.0245 5.80488 27.9104 5.82349 27.7993C5.82351 27.7992 5.82353 27.799 5.82355 27.7989L7.27381 19.2308C7.27387 19.2305 7.27392 19.2301 7.27398 19.2298C7.31767 18.9752 7.29916 18.7136 7.21993 18.4678C7.14071 18.2219 7.00307 17.9988 6.81846 17.8182C6.81819 17.818 6.81792 17.8177 6.81764 17.8174L0.680169 11.7613L0.679246 11.7604C0.600571 11.6832 0.544246 11.5845 0.517479 11.4753C0.490705 11.366 0.494768 11.2512 0.529131 11.1443L0.0553482 10.9921L0.529131 11.1443C0.563481 11.0374 0.626506 10.9432 0.71022 10.8721C0.793878 10.8009 0.894917 10.7555 1.00169 10.7401L1.00311 10.7399L9.51767 9.49077L9.52039 9.49035C9.77473 9.4516 10.0156 9.35126 10.2225 9.19836C10.4294 9.04549 10.5962 8.8447 10.7091 8.61349L10.7095 8.61257L14.4898 0.830625C14.4899 0.830374 14.4901 0.830124 14.4902 0.829874C14.5395 0.729797 14.6149 0.646439 14.7072 0.588498C14.7998 0.530449 14.9059 0.5 15.0137 0.5C15.1216 0.5 15.2277 0.530448 15.3203 0.588498C15.4126 0.64644 15.488 0.729796 15.5373 0.829872C15.5374 0.830122 15.5376 0.830372 15.5377 0.830623L19.318 8.61257L19.3184 8.61349C19.4313 8.8447 19.5981 9.04549 19.805 9.19836C20.0119 9.35126 20.2528 9.4516 20.5071 9.49036L20.5096 9.49072L28.9967 10.7399L28.9983 10.7401C29.1051 10.7555 29.2061 10.8009 29.2898 10.8721C29.3735 10.9432 29.4365 11.0374 29.4709 11.1443C29.5052 11.2512 29.5093 11.366 29.4825 11.4752L29.9682 11.5942L29.4825 11.4753C29.4558 11.5845 29.3994 11.6832 29.3208 11.7604Z\" stroke=\"#FADE97\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t                            \t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t                            </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t                            <h4>Description</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        <p>I am highly proficient in creating mobile\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tapplication, webpages, and tablet screens on\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFigma. I am highly proficient in creating mobile\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tapplication, webpages, and tablet screens on\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFigma.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t      </div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Data Analysis</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Adobe Photoshop</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Adobe XD</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Marketing</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Python</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Resume Writing</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"prfl_smry\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>Work rights</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"expe_list1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul type=\"none\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"experiene_txt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"work_right_txt\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"all_headings\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"singl_div\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mb-1\">{{profiledata?.work_right?.work_right | titlecase}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"accoun_date \">Valid until {{profiledata?.work_right?.work_expiry | titlecase}} {{profiledata?.work_right?.expiry_year}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-primary\" routerLink=\"/graduateList\">Back</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- </mat-tab> -->\n\t\t\t\t\t\t<!-- <mat-tab label=\"Orders and Insurances\"> -->\n\t\t\t\t\t\t\t<!-- <div class=\"card-header\">\n\t\t\t\t\t\t\t\t<strong>View Graduate Details</strong>\n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t<!-- <div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t      <div class=\"col-md-12\">\n\t\t\t\t\t\t\t        <mat-form-field appearance=\"standard\">\n\t\t\t\t\t\t\t          <mat-label>Filter</mat-label>\n\t\t\t\t\t\t\t          <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. Mia\" class=\"filter_input\" #input>\n\t\t\t\t\t\t\t        </mat-form-field>\n\n\t\t\t\t\t\t\t        <div class=\"mat-elevation-z8\">\n\t\t\t\t\t\t\t          <div class=\"table-responsive\">\n\t\t\t\t\t\t\t            <table mat-table [dataSource]=\"dataSource\" matSort> -->\n\t\t\t\t\t\t\t              <!-- Checkbox Column -->\n\t\t\t\t\t\t\t              <!-- <ng-container matColumnDef=\"select\">\n\t\t\t\t\t\t\t                <th mat-header-cell *matHeaderCellDef>\n\t\t\t\t\t\t\t                  <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n\t\t\t\t\t\t\t                    [checked]=\"selection.hasValue() && isAllSelected()\"\n\t\t\t\t\t\t\t                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n\t\t\t\t\t\t\t                    [aria-label]=\"checkboxLabel()\" class=\"td-check\">\n\t\t\t\t\t\t\t                  </mat-checkbox>\n\t\t\t\t\t\t\t                </th>\n\t\t\t\t\t\t\t                <td mat-cell *matCellDef=\"let row\">\n\t\t\t\t\t\t\t                  <mat-checkbox (click)=\"$event.stopPropagation()\"\n\t\t\t\t\t\t\t                    (change)=\"$event ? selection.toggle(row) : null\"\n\t\t\t\t\t\t\t                    [checked]=\"selection.isSelected(row)\"\n\t\t\t\t\t\t\t                    [aria-label]=\"checkboxLabel(row)\" class=\"td-check\">\n\t\t\t\t\t\t\t                  </mat-checkbox>\n\t\t\t\t\t\t\t                </td>\n\t\t\t\t\t\t\t              </ng-container> -->\n\t\t\t\t\t\t\t              <!-- ID Column -->\n\t\t\t\t\t\t\t              <!-- <ng-container matColumnDef=\"id\">\n\t\t\t\t\t\t\t                <th mat-header-cell *matHeaderCellDef mat-sort-header> S.No </th>\n\t\t\t\t\t\t\t                <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n\t\t\t\t\t\t\t              </ng-container> -->\n\n\t\t\t\t\t\t\t              <!-- postedby Column -->\n\t\t\t\t\t\t\t              <!-- <ng-container matColumnDef=\"transid\">\n\t\t\t\t\t\t\t                <th mat-header-cell *matHeaderCellDef mat-sort-header>Invoice ID </th>\n\t\t\t\t\t\t\t                <td mat-cell *matCellDef=\"let row\"> {{row.transid}} </td>\n\t\t\t\t\t\t\t              </ng-container> -->\n\n\n\t\t\t\t\t\t\t              <!-- Company Column -->\n\t\t\t\t\t\t\t              <!-- <ng-container matColumnDef=\"offer\">\n\t\t\t\t\t\t\t                <th mat-header-cell *matHeaderCellDef mat-sort-header>Offer Selected</th>\n\t\t\t\t\t\t\t                <td mat-cell *matCellDef=\"let row\"> {{row.offer}} </td>\n\t\t\t\t\t\t\t              </ng-container> -->\n\n\t\t\t\t\t\t\t               <!-- Job title Column -->\n\t\t\t\t\t\t\t              <!-- <ng-container matColumnDef=\"startdate\">\n\t\t\t\t\t\t\t                <th mat-header-cell *matHeaderCellDef mat-sort-header>Start Date</th>\n\t\t\t\t\t\t\t                <td mat-cell *matCellDef=\"let row\"> {{row.startdate}} </td>\n\t\t\t\t\t\t\t              </ng-container> -->\n\t\t\t\t\t\t\t              \n\t\t\t\t\t\t\t              <!-- status column -->\n\t\t\t\t\t\t\t              <!-- <ng-container matColumnDef=\"subsexp\">\n\t\t\t\t\t\t\t                <th mat-header-cell *matHeaderCellDef mat-sort-header> Expiry date </th>\n\t\t\t\t\t\t\t                <td mat-cell *matCellDef=\"let row\">{{row.subsexp}}</td>\n\t\t\t\t\t\t\t              </ng-container>\n\n\t\t\t\t\t\t\t              <ng-container matColumnDef=\"status\">\n\t\t\t\t\t\t\t                <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\n\t\t\t\t\t\t\t                <td mat-cell *matCellDef=\"let row\"><span class=\"badge badge-success\">Paid</span></td>\n\t\t\t\t\t\t\t                <td mat-cell *matCellDef=\"let row\"><span class=\"badge badge-primary\">Pending</span></td>\n\t\t\t\t\t\t\t                <td mat-cell *matCellDef=\"let row\"><span class=\"badge badge-danger\">Failed</span></td>\n\t\t\t\t\t\t\t              </ng-container> -->\n\n\t\t\t\t\t\t\t              <!-- Company Column -->\n\t\t\t\t\t\t\t              <!-- <ng-container matColumnDef=\"amount\">\n\t\t\t\t\t\t\t                <th mat-header-cell *matHeaderCellDef mat-sort-header>Amount</th>\n\t\t\t\t\t\t\t                <td mat-cell *matCellDef=\"let row\"> ${{row.amount}} </td>\n\t\t\t\t\t\t\t              </ng-container>\n\n\t\t\t\t\t\t\t              <ng-container matColumnDef=\"paid\">\n\t\t\t\t\t\t\t                <th mat-header-cell *matHeaderCellDef mat-sort-header>Paid</th>\n\t\t\t\t\t\t\t                <td mat-cell *matCellDef=\"let row\"> ${{row.paid}} </td>\n\t\t\t\t\t\t\t              </ng-container>\n\n\t\t\t\t\t\t\t              <ng-container matColumnDef=\"balance\">\n\t\t\t\t\t\t\t                <th mat-header-cell *matHeaderCellDef mat-sort-header>Balance</th>\n\t\t\t\t\t\t\t                <td mat-cell *matCellDef=\"let row\"> ${{row.balance}} </td>\n\t\t\t\t\t\t\t              </ng-container> -->\n\t\t\t\t\t\t\t               <!-- Action column -->\n\t\t\t\t\t\t\t               <!-- <ng-container matColumnDef=\"action\">\n\t\t\t\t\t\t\t                <th mat-header-cell *matHeaderCellDef> Action </th>\n\t\t\t\t\t\t\t                <td mat-cell *matCellDef=\"let row\">\n\t\t\t\t\t\t\t                    <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"td-btn\">\n\t\t\t\t\t\t\t                      <mat-icon>more_vert</mat-icon>\n\t\t\t\t\t\t\t                    </button>\n\t\t\t\t\t\t\t                    <mat-menu #menu=\"matMenu\" class=\"td-menu\">\n\t\t\t\t\t\t\t                      <a mat-menu-item class=\"\" routerLink=\"/\">\n\t\t\t\t\t\t\t                        <mat-icon class=\"material-icons-outlined\">visibility</mat-icon>\n\t\t\t\t\t\t\t                        <span>View</span>\n\t\t\t\t\t\t\t                      </a>\n\t\t\t\t\t\t\t                      <a mat-menu-item class=\"\" data-toggle=\"modal\" (click)=\"smallModal.show()\">\n\t\t\t\t\t\t\t                        <mat-icon class=\"material-icons-outlined\">delete</mat-icon>\n\t\t\t\t\t\t\t                        <span>Delete</span>\n\t\t\t\t\t\t\t                      </a>\n\t\t\t\t\t\t\t                    </mat-menu>\n\t\t\t\t\t\t\t                </td>\n\t\t\t\t\t\t\t              </ng-container> -->\n\n\t\t\t\t\t\t\t              <!-- Progress Column -->\n\t\t\t\t\t\t\t              <!-- <ng-container matColumnDef=\"progress\">\n\t\t\t\t\t\t\t                <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\n\t\t\t\t\t\t\t                <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\n\t\t\t\t\t\t\t              </ng-container> -->\n\n\t\t\t\t\t\t\t              <!-- <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t\t\t\t\t              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr> -->\n\n\t\t\t\t\t\t\t              <!-- Row shown when there is no matching data. -->\n\t\t\t\t\t\t\t              <!-- <tr class=\"mat-row\" *matNoDataRow>\n\t\t\t\t\t\t\t                <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n\t\t\t\t\t\t\t              </tr>\n\t\t\t\t\t\t\t            </table>\n\t\t\t\t\t\t\t          </div>\n\t\t\t\t\t\t\t          <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" aria-label=\"Select page of users\"></mat-paginator>\n\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</mat-tab>\n        \t\t\t</mat-tab-group> -->\n\t\t\t\t</div>\n            \t\t\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>";
      /***/
    },

    /***/
    "u6mD": function u6mD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewGraduateRoutingModule", function () {
        return ViewGraduateRoutingModule;
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


      var _view_graduate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-graduate.component */
      "vjop");

      var routes = [{
        path: '',
        component: _view_graduate_component__WEBPACK_IMPORTED_MODULE_3__["ViewGraduateComponent"]
      }];

      var ViewGraduateRoutingModule = function ViewGraduateRoutingModule() {
        _classCallCheck(this, ViewGraduateRoutingModule);
      };

      ViewGraduateRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewGraduateRoutingModule);
      /***/
    },

    /***/
    "vjop": function vjop(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewGraduateComponent", function () {
        return ViewGraduateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_view_graduate_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./view-graduate.component.html */
      "p9Rs");
      /* harmony import */


      var _view_graduate_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view-graduate.component.scss */
      "4yzh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sort */
      "LUZP");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "CtHx");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _topgradservice_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../topgradservice.service */
      "DL5e");
      /** Constants used to fill up our data base. */


      var TRANSID = ['INV-65D9E592', 'INV-95D9E0897', 'INV-32D9E092'];
      var AMOUNT = ['195'];
      var PAID = ['195'];
      var BALANCE = ['0'];
      var OFFER = ['Basic Internship Agreement', 'Insurance and Agreement', 'Insurance Only'];
      var SDATE = ['08-09-2021', '07-09-2021', '01-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021'];
      var SUBSEXP = ['08-09-2021', '07-09-2021', '01-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021'];

      var ViewGraduateComponent = /*#__PURE__*/function () {
        function ViewGraduateComponent(_snackBar, route, Service, fb, router) {
          _classCallCheck(this, ViewGraduateComponent);

          this._snackBar = _snackBar;
          this.route = route;
          this.Service = Service;
          this.fb = fb;
          this.router = router;
          this.displayedColumns = ['select', 'id', 'transid', 'offer', 'startdate', 'subsexp', 'status', 'amount', 'paid', 'action'];
          this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](true, []); // Create 100 users

          var users = Array.from({
            length: 50
          }, function (_, k) {
            return createNewUser(k + 1);
          }); // Assign the data to the data source for the table to render

          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](users);
        }

        _createClass(ViewGraduateComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.employerdetails();
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource.filter = filterValue.trim().toLowerCase();

            if (this.dataSource.paginator) {
              this.dataSource.paginator.firstPage();
            }
          }
          /** Whether the number of selected elements matches the total number of rows. */

        }, {
          key: "isAllSelected",
          value: function isAllSelected() {
            var numSelected = this.selection.selected.length;
            var numRows = this.dataSource.data.length;
            return numSelected === numRows;
          }
          /** Selects all rows if they are not all selected; otherwise clear selection. */

        }, {
          key: "masterToggle",
          value: function masterToggle() {
            var _this$selection;

            if (this.isAllSelected()) {
              this.selection.clear();
              return;
            }

            (_this$selection = this.selection).select.apply(_this$selection, _toConsumableArray(this.dataSource.data));
          }
          /** The label for the checkbox on the passed row */

        }, {
          key: "checkboxLabel",
          value: function checkboxLabel(row) {
            if (!row) {
              return "".concat(this.isAllSelected() ? 'deselect' : 'select', " all");
            }

            return "".concat(this.selection.isSelected(row) ? 'deselect' : 'select', " row ").concat(row.id + 1);
          }
        }, {
          key: "employerdetails",
          value: function employerdetails() {
            var _this = this;

            var obj = {
              user_id: this.route.snapshot.paramMap.get('id')
            };
            this.Service.getEmployerDetail(obj).subscribe(function (resp) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6;

              console.log("employer detail is ====>", resp);
              _this.profiledata = resp.data;
              var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

              for (var i = 0; i < ((_a = _this.profiledata) === null || _a === void 0 ? void 0 : _a.work_experience.length); i++) {
                var date1 = new Date((_c = (_b = _this.profiledata) === null || _b === void 0 ? void 0 : _b.work_experience[i]) === null || _c === void 0 ? void 0 : _c.start_year, (_e = (_d = _this.profiledata) === null || _d === void 0 ? void 0 : _d.work_experience[i]) === null || _e === void 0 ? void 0 : _e.start_month, 0);
                console.log("gfjhsdfjdshfjhhgdfjhg", date1);
                console.log("djchjch", _this.profiledata.work_experience[i]);

                if (_this.profiledata.work_experience[i].still_in_role == true) {
                  var date2 = new Date();
                  console.log("hgfdjsdhfjksdhf1", date2);
                  _this.monthName = months[date1.getMonth()]; // "July" (or current month)

                  _this.profiledata.work_experience[i].monthName = _this.monthName;
                } else {
                  var date2 = new Date((_g = (_f = _this.profiledata) === null || _f === void 0 ? void 0 : _f.work_experience[i]) === null || _g === void 0 ? void 0 : _g.end_year, (_j = (_h = _this.profiledata) === null || _h === void 0 ? void 0 : _h.work_experience[i]) === null || _j === void 0 ? void 0 : _j.end_month, 0);
                  console.log("hgfdjsdhfjksdhf2", date2);
                  _this.monthName1 = months[date2.getMonth()]; // "July" (or current month)

                  _this.profiledata.work_experience[i].lastMonthName = _this.monthName1;
                }

                var Time = (date2.getTime() - date1.getTime()) / 1000;
                console.log("timeeeee=====", Time);
                var Months = Time / (60 * 60 * 24 * 7 * 4); //Diference in Days

                console.log("Days===>", Months);
                _this.profiledata.work_experience[i].ServingMonths = Math.floor(Months);
              }

              for (var _i = 0; _i < ((_k = _this.profiledata) === null || _k === void 0 ? void 0 : _k.licenses.length); _i++) {
                var f = new Date((_m = (_l = _this.profiledata) === null || _l === void 0 ? void 0 : _l.licenses[_i]) === null || _m === void 0 ? void 0 : _m.issuing_year, (_p = (_o = _this.profiledata) === null || _o === void 0 ? void 0 : _o.licenses[_i]) === null || _p === void 0 ? void 0 : _p.issuing_month, 0);
                console.log("var f", f);
                _this.licenseMonthName = months[f.getMonth()]; // "July" (or current month)

                _this.profiledata.licenses[_i].issuingMonthName = _this.licenseMonthName;
                console.log("djchjch", _this.profiledata.licenses[_i]);
                var g = new Date((_r = (_q = _this.profiledata) === null || _q === void 0 ? void 0 : _q.licenses[_i]) === null || _r === void 0 ? void 0 : _r.expiry_year, (_t = (_s = _this.profiledata) === null || _s === void 0 ? void 0 : _s.licenses[_i]) === null || _t === void 0 ? void 0 : _t.expiry_month, 0);
                console.log("var f", f);
                _this.licenseEnddate = months[g.getMonth()]; // "July" (or current month)

                _this.profiledata.licenses[_i].expiryMonthName = _this.licenseEnddate;
                console.log("djchjch", _this.profiledata.licenses[_i]);
              }

              for (var _i2 = 0; _i2 < ((_u = _this.profiledata) === null || _u === void 0 ? void 0 : _u.volunteer_experience.length); _i2++) {
                var h = new Date((_w = (_v = _this.profiledata) === null || _v === void 0 ? void 0 : _v.volunteer_experience[_i2]) === null || _w === void 0 ? void 0 : _w.start_year, (_y = (_x = _this.profiledata) === null || _x === void 0 ? void 0 : _x.volunteer_experience[_i2]) === null || _y === void 0 ? void 0 : _y.start_month, 0);
                console.log("var h", h);
                _this.experienseStartDate = months[h.getMonth()]; // "July" (or current month)

                _this.profiledata.volunteer_experience[_i2].startMonthName = _this.experienseStartDate;
                console.log("djchjch", _this.profiledata.volunteer_experience[_i2]);
                var j = new Date((_0 = (_z = _this.profiledata) === null || _z === void 0 ? void 0 : _z.volunteer_experience[_i2]) === null || _0 === void 0 ? void 0 : _0.end_year, (_2 = (_1 = _this.profiledata) === null || _1 === void 0 ? void 0 : _1.volunteer_experience[_i2]) === null || _2 === void 0 ? void 0 : _2.end_month, 0);
                console.log("var j", j);
                _this.experienseEndDate = months[j.getMonth()]; // "July" (or current month)

                _this.profiledata.licenses[_i2].endMonthName = _this.experienseEndDate;
                console.log("djchjch", _this.profiledata.volunteer_experience[_i2]);
              }

              var k = new Date((_4 = (_3 = _this.profiledata) === null || _3 === void 0 ? void 0 : _3.work_right) === null || _4 === void 0 ? void 0 : _4.expiry_year, (_6 = (_5 = _this.profiledata) === null || _5 === void 0 ? void 0 : _5.work_right) === null || _6 === void 0 ? void 0 : _6.expiry_month, 0);
              console.log("var k", k);
              _this.work_rightEndDate = months[j.getMonth()]; // "July" (or current month)

              _this.profiledata.work_right.work_expiry = _this.work_rightEndDate;
              console.log("djchjch", _this.profiledata.work_right);
            }); // jobList(){
            //   this.service.jobList().subscribe(res => {
            //   this.joblist = res.data
            //   var date1=new Date()
            //   console.log("date 1====",date1);
            //   for(let i=0; i<=this.joblist.length ; i++){
            //   var date2=new Date(this.joblist[i].deadline_date)
            //   console.log("date 2 =====>",date2);
            //   var Time = date2.getTime() - date1.getTime();
            //   console.log("TIME====>",Time);
            //   var Days = Time / (1000 * 3600 * 24);
            //   console.log("Days===>",Days);
            //   this.joblist[i].Leftdays=Math.floor(Days)
            //   console.log("jobposttsss", this.joblist);
            //   }
            //   })
          }
        }, {
          key: "toggleVideo",
          value: function toggleVideo(event) {
            console.log("mera mn khne lga...", event);
            this.videoplayer.nativeElement.play();
          }
        }]);

        return ViewGraduateComponent;
      }();

      ViewGraduateComponent.ctorParameters = function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
        }, {
          type: _topgradservice_service__WEBPACK_IMPORTED_MODULE_12__["TopgradserviceService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }];
      };

      ViewGraduateComponent.propDecorators = {
        smallModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['smallModal']
        }],
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"]]
        }],
        videoplayer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['videoPlayer']
        }]
      };
      ViewGraduateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-graduate',
        template: _raw_loader_view_graduate_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_graduate_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _topgradservice_service__WEBPACK_IMPORTED_MODULE_12__["TopgradserviceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])], ViewGraduateComponent);

      function createNewUser(id) {
        var transid = TRANSID[Math.round(Math.random() * (TRANSID.length - 1))] + ' ';
        var amount = AMOUNT[Math.round(Math.random() * (AMOUNT.length - 1))] + ' ';
        var paid = PAID[Math.round(Math.random() * (PAID.length - 1))] + ' ';
        var balance = BALANCE[Math.round(Math.random() * (BALANCE.length - 1))] + ' ';
        var offer = OFFER[Math.round(Math.random() * (OFFER.length - 1))] + ' ';
        var startdate = SDATE[Math.round(Math.random() * (SDATE.length - 1))] + ' ';
        var subsexp = SUBSEXP[Math.round(Math.random() * (SUBSEXP.length - 1))] + ' ';
        return {
          id: id.toString() + '.',
          transid: transid,
          amount: amount,
          paid: paid,
          balance: balance,
          offer: offer,
          startdate: startdate,
          subsexp: subsexp
        };
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-UserManagement-view-graduate-view-graduate-module-es5.js.map