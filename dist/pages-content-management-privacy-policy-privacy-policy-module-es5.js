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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-management-privacy-policy-privacy-policy-module"], {
    /***/
    "BGHv": function BGHv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyPolicyModule", function () {
        return PrivacyPolicyModule;
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


      var _privacy_policy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./privacy-policy.component */
      "f6KL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "dZIy");
      /* harmony import */


      var _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./privacy-policy-routing.module */
      "O5rX"); //import { FormsModule,ReactiveFormsModule } from '@angular/forms';


      var PrivacyPolicyModule = function PrivacyPolicyModule() {
        _classCallCheck(this, PrivacyPolicyModule);
      };

      PrivacyPolicyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_privacy_policy_component__WEBPACK_IMPORTED_MODULE_3__["PrivacyPolicyComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__["BsDropdownModule"].forRoot(), //  FormsModule,ReactiveFormsModule,
        _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_16__["PrivacyPolicyRoutingModule"]],
        providers: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["BsModalRef"]]
      })], PrivacyPolicyModule);
      /***/
    },

    /***/
    "GusX": function GusX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YWN5LXBvbGljeS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "O5rX": function O5rX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyPolicyRoutingModule", function () {
        return PrivacyPolicyRoutingModule;
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


      var _privacy_policy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./privacy-policy.component */
      "f6KL");

      var routes = [{
        path: '',
        component: _privacy_policy_component__WEBPACK_IMPORTED_MODULE_3__["PrivacyPolicyComponent"]
      }];

      var PrivacyPolicyRoutingModule = function PrivacyPolicyRoutingModule() {
        _classCallCheck(this, PrivacyPolicyRoutingModule);
      };

      PrivacyPolicyRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PrivacyPolicyRoutingModule);
      /***/
    },

    /***/
    "f6KL": function f6KL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function () {
        return PrivacyPolicyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_privacy_policy_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./privacy-policy.component.html */
      "owlc");
      /* harmony import */


      var _privacy_policy_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./privacy-policy.component.scss */
      "GusX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _topgradservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../topgradservice.service */
      "DL5e");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /** Constants used to fill up our data base. */


      var TITLE = ['How do I keep track of a b c?', 'Lorem ipsum dolor sit?'];
      var LASTNAME = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth']; // const CATEGORY: string[] = [
      //   'General', 'My Account', 'Jobs', 'Permissions & Privacy', 
      // ];

      var DESCRIPTION = ['Lorem ipsum sit donar Lorem ipsum sit donar', 'Lorem ipsum sit donar Lorem ipsum sit donar', 'Lorem ipsum sit donar Lorem ipsum sit donar', 'Lorem ipsum sit donar Lorem ipsum sit donar'];

      var PrivacyPolicyComponent = /*#__PURE__*/function () {
        function PrivacyPolicyComponent(route, Service, _snackBar) {
          _classCallCheck(this, PrivacyPolicyComponent);

          this.route = route;
          this.Service = Service;
          this._snackBar = _snackBar;
          this.displayedColumns = ['select', 'id', 'title', 'description', 'action'];
          this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](true, []);
          var users = Array.from({
            length: 50
          }, function (_, k) {
            return createNewUser(k + 1);
          }); // Assign the data to the data source for the table to render

          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.policylist);
        }

        _createClass(PrivacyPolicyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.privacypolicylist();
          }
        }, {
          key: "privacypolicylist",
          value: function privacypolicylist() {
            var _this = this;

            console.log("khjhgjhgjhgjhghjghjgjhghjg");
            var obj = {
              limit: 10,
              offset: 0,
              type: "privacy"
            };
            console.log("onnnn", obj);
            this.Service.termslist(obj).subscribe(function (data) {
              console.log("main data for privacy is ====", data);
              _this.policylist = data.data;
              _this.totalRecords = data.length;
            }, function (err) {
              console.log(err.status);

              if (err.status >= 404) {
                console.log('Some error occured');
              } else {
                // this.toastr.error('Some error occured, please try again!!', 'Error')
                console.log('Internet Connection Error');
              }
            });
          }
        }, {
          key: "modal",
          value: function modal(id) {
            this.smallModal.show();
            this.delId = id;
          }
        }, {
          key: "deleteheading",
          value: function deleteheading(id) {
            var _this2 = this;

            var obj = {
              content_id: id
            };
            this.Service.deleteterm(obj).subscribe(function (res) {
              console.log("fgdgfdgfdfgdfgd", res);

              _this2.smallModal.hide();

              if (res.code == 200) {
                _this2._snackBar.open("Heading Deleted Successfully", "close", {
                  duration: 2000
                });

                _this2.ngOnInit();
              }
            }, function (err) {
              console.log(err);

              _this2._snackBar.open("Some Error Occued", "close", {
                duration: 2000
              });
            });
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
        }]);

        return PrivacyPolicyComponent;
      }();

      PrivacyPolicyComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: _topgradservice_service__WEBPACK_IMPORTED_MODULE_4__["TopgradserviceService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]
        }];
      };

      PrivacyPolicyComponent.propDecorators = {
        smallModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['smallModal']
        }],
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"]]
        }]
      };
      PrivacyPolicyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-privacy-policy',
        template: _raw_loader_privacy_policy_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_privacy_policy_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _topgradservice_service__WEBPACK_IMPORTED_MODULE_4__["TopgradserviceService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]])], PrivacyPolicyComponent);

      function createNewUser(id) {
        var title = TITLE[Math.round(Math.random() * (TITLE.length - 1))] + ' '; // const category = CATEGORY[Math.round(Math.random() * (CATEGORY.length - 1))] + ' ';

        var description = DESCRIPTION[Math.round(Math.random() * (DESCRIPTION.length - 1))] + ' ';
        return {
          id: id.toString() + '.',
          title: title,
          description: description
        };
      }
      /***/

    },

    /***/
    "owlc": function owlc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"privcy_polcy\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"catgry-tools d-flex justify-content-between align-items-center\">\n\t\t\t\t\t<mat-form-field appearance=\"standard\">\n\t\t\t\t\t\t<mat-label>Filter</mat-label>\n\t\t\t\t\t\t<input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. Mia\" class=\"filter_input\" #input>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<span class=\"add-categry\">\n\t\t\t\t\t\t<a class=\"btn-primary btn\" routerLink=\"/addHeading/privacy\">Add Heading</a>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"mat-elevation-z8\">\n\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t<table mat-table [dataSource]=\"policylist\" matSort>\n\t\t\t\t\t\t\t<!-- Checkbox Column -->\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"select\">\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>\n\t\t\t\t\t\t\t\t\t<mat-checkbox (change)=\"$event ? masterToggle() : null\"\n\t\t\t\t\t\t\t\t\t\t[checked]=\"selection.hasValue() && isAllSelected()\"\n\t\t\t\t\t\t\t\t\t\t[indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n\t\t\t\t\t\t\t\t\t\t[aria-label]=\"checkboxLabel()\" class=\"td-check\">\n\t\t\t\t\t\t\t\t\t</mat-checkbox>\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">\n\t\t\t\t\t\t\t\t\t<mat-checkbox (click)=\"$event.stopPropagation()\"\n\t\t\t\t\t\t\t\t\t\t(change)=\"$event ? selection.toggle(row) : null\"\n\t\t\t\t\t\t\t\t\t\t[checked]=\"selection.isSelected(row)\" [aria-label]=\"checkboxLabel(row)\"\n\t\t\t\t\t\t\t\t\t\tclass=\"td-check\">\n\t\t\t\t\t\t\t\t\t</mat-checkbox>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<!-- ID Column -->\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"id\">\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> S.No </th>\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row ; let i=index\"> {{i+1}} </td>\n\t\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t\t<!-- firstName Column -->\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"title\">\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>Heading </th>\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row\"> {{row?.heading.title}} </td>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<!-- Company Column -->\n\t\t\t\t\t\t\t<!-- <ng-container matColumnDef=\"category\">\n\t\t\t\t  <th mat-header-cell *matHeaderCellDef mat-sort-header>Category</th>\n\t\t\t\t  <td mat-cell *matCellDef=\"let row\"> {{row.category}} </td>\n\t\t\t\t</ng-container> -->\n\n\t\t\t\t\t\t\t<!-- enquiry Column -->\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"description\">\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row\" class=\"td-width\" [innerHTML]=\"row?.heading.description\"> </td>\n\t\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t\t<!-- Action column -->\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"action\">\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> Action </th>\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">\n\t\t\t\t\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"td-btn\">\n\t\t\t\t\t\t\t\t\t\t<mat-icon>more_vert</mat-icon>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<mat-menu #menu=\"matMenu\" class=\"td-menu\">\n\t\t\t\t\t\t\t\t\t\t<a mat-menu-item class=\"\" routerLink=\"/terms-conditions-sub-headings/{{row._id}}/privacy\">\n\t\t\t\t\t\t\t\t\t\t\t<mat-icon class=\"material-icons-outlined\">visibility</mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t<span>View Subheading</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<a mat-menu-item class=\"\" routerLink=\"/editHeading/{{row._id}}\">\n\t\t\t\t\t\t\t\t\t\t\t<mat-icon class=\"material-icons-outlined\">edit</mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t<span>Edit</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t\t<a mat-menu-item class=\"\" data-toggle=\"modal\" (click)=\"modal(row._id)\" >\n\t\t\t\t\t\t\t\t\t\t\t<mat-icon class=\"material-icons-outlined\">delete</mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t<span>Delete</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</mat-menu>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t\t<!-- Progress Column -->\n\t\t\t\t\t\t\t<!-- <ng-container matColumnDef=\"progress\">\n\t\t\t\t  <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\n\t\t\t\t  <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\n\t\t\t\t</ng-container> -->\n\n\t\t\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n\t\t\t\t\t\t\t<!-- Row shown when there is no matching data. -->\n\t\t\t\t\t\t\t<tr class=\"mat-row\" *matNoDataRow>\n\t\t\t\t\t\t\t\t<td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t\t<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" aria-label=\"Select page of users\">\n\t\t\t\t\t</mat-paginator>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<!-- Modal -->\n<div bsModal #smallModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"smallModalLabel\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-sm\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close td-btn\" (click)=\"smallModal.hide()\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\" class=\"prof_modclose\">\n\t\t\t\t\t\t<img src=\"assets/img/Group 225.png\">\n\t\t\t\t\t</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<p>Are you sure you want to delete the selected Terms?</p>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer justify-content-center\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"smallModal.hide()\">No</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteheading(this.delId)\">Yes</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-content-management-privacy-policy-privacy-policy-module-es5.js.map