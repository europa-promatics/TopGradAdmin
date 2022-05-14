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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-jobs-management-jobs-management-module"], {
    /***/
    "Ar1G": function Ar1G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2JzLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "R0pq": function R0pq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobsManagementModule", function () {
        return JobsManagementModule;
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


      var _jobs_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./jobs-management-routing.module */
      "tEqj");
      /* harmony import */


      var _jobs_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./jobs-management.component */
      "TNju");
      /* harmony import */


      var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @tinymce/tinymce-angular */
      "fB2i");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-dropzone */
      "kvL/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "dZIy");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");

      var JobsManagementModule = function JobsManagementModule() {
        _classCallCheck(this, JobsManagementModule);
      };

      JobsManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_jobs_management_component__WEBPACK_IMPORTED_MODULE_4__["JobsManagementComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_5__["EditorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["NgxDropzoneModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_5__["EditorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["NgxDropzoneModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], // MatFormFieldModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _jobs_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["JobsManagementRoutingModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"]],
        providers: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["BsModalRef"]]
      })], JobsManagementModule);
      /***/
    },

    /***/
    "TNju": function TNju(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobsManagementComponent", function () {
        return JobsManagementComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_jobs_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./jobs-management.component.html */
      "WpKD");
      /* harmony import */


      var _jobs_management_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./jobs-management.component.scss */
      "Ar1G");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _topgradservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../topgradservice.service */
      "DL5e");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /** Constants used to fill up our data base. */


      var DEADLINE = ['08-09-2021', '07-09-2021', '01-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021', '08-09-2021'];
      var POSTEDBY = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
      var FIRSTNAME = [];
      var LASTNAME = [];
      var WORKTYPE = ['Employment', 'Employment', 'Internship', 'Employment', 'Employment', 'Employment', 'Employment', 'Employment', 'Internship'];
      var CONTRACT = ['Full-Time', 'Part-Time', 'Part-Time', 'Part-Time', 'Part-Time', 'Part-Time', 'Part-Time', 'Part-Time', 'Part-Time', 'Part-Time', 'Full-Time', 'Full-Time', 'Part-Time', 'Part-Time', 'Part-Time', 'Part-Time', 'Part-Time', 'Part-Time', 'Part-Time'];
      var TITLE = ['UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'Promatics', 'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'UI/UX Designer', 'Promatics', 'Promatics']; // const APPLICATIONS: string[] = [
      //   '23', '33', '77', '34', '3', '56', '56', '56', '56', '78',
      //   '78', '78', '56', '56', '56', '56', '56', '78', '78'
      // ];

      var JobsManagementComponent = /*#__PURE__*/function () {
        function JobsManagementComponent(Service, fb) {
          _classCallCheck(this, JobsManagementComponent);

          var _a;

          this.Service = Service;
          this.fb = fb;
          this.displayedColumns = ['select', 'id', 'postedby', 'jobtitle', 'worktype', 'contracttype', 'deadline', 'status',
          /*'applications',*/
          'action'];
          this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](true, []);
          this.search = ' ';
          var users = [];

          for (var i = 1; i <= 100; i++) {
            users.push(createNewUser(i));
          }

          ; //paginator...........

          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](users);
          this.sortedData = (_a = this.jobList1) === null || _a === void 0 ? void 0 : _a.slice(); //sorting........
        } // sorting ----------------


        _createClass(JobsManagementComponent, [{
          key: "sortData",
          value: function sortData(sort) {
            var data = this.jobList1.slice();
            console.log("dfagfdtyewdtuyety", data);

            if (!sort.active || sort.direction === '') {
              this.sortedData = data;
              return;
            }

            this.sortedData = data.sort(function (a, b) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;

              var isAsc = sort.direction === 'asc';

              switch (sort.active) {
                case 'id':
                  return compare((_a = a.id) === null || _a === void 0 ? void 0 : _a.toUpperCase(), (_b = b.id) === null || _b === void 0 ? void 0 : _b.toUpperCase(), isAsc);

                case 'first_name':
                  return compare((_c = a.first_name) === null || _c === void 0 ? void 0 : _c.toUpperCase(), (_d = b.first_name) === null || _d === void 0 ? void 0 : _d.toUpperCase(), isAsc);

                case 'last_name':
                  return compare((_e = a.last_name) === null || _e === void 0 ? void 0 : _e.toUpperCase(), (_f = b.last_name) === null || _f === void 0 ? void 0 : _f.toUpperCase(), isAsc);

                case 'work_type':
                  return compare((_g = a.work_type) === null || _g === void 0 ? void 0 : _g.toUpperCase(), (_h = b.work_type) === null || _h === void 0 ? void 0 : _h.toUpperCase(), isAsc);

                case 'contract_type':
                  return compare((_j = a.contract_type) === null || _j === void 0 ? void 0 : _j.toUpperCase(), (_k = b.contract_type) === null || _k === void 0 ? void 0 : _k.toUpperCase(), isAsc);

                case 'job_title':
                  return compare((_l = a.job_title) === null || _l === void 0 ? void 0 : _l.toUpperCase(), (_m = b.job_title) === null || _m === void 0 ? void 0 : _m.toUpperCase(), isAsc);

                case 'deadline_date':
                  return compare((_o = a.deadline_date) === null || _o === void 0 ? void 0 : _o.toUpperCase(), (_p = b.deadline_date) === null || _p === void 0 ? void 0 : _p.toUpperCase(), isAsc);

                default:
                  return 0;
              }
            });
          }
        }, {
          key: "openSnackBar",
          value: function openSnackBar() {
            this.id = this.id;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator; //paginator..............

            this.dataSource.sort = this.sort; //sorting..........
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.jobListing(); //listinggg

            this.search = ""; // filter
          } // Paginator -----------

        }, {
          key: "paginationOptionChange",
          value: function paginationOptionChange(evt) {
            var _this = this;

            this.event = evt;
            this.topPage = evt.pageIndex;
            var obj = {
              search: this.search,
              limit: evt.pageSize,
              offset: evt.pageIndex * evt.pageSize
            };

            if (this.search) {
              obj.search = this.search;
            }

            this.Service.jobManagementList(obj).subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _a, i, cType, _cType, _cType2, _cType3;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log("Response of all the service listing>>>>>", res);
                        this.jobList1 = res.data.records;

                        for (i = 0; i < ((_a = this.jobList1) === null || _a === void 0 ? void 0 : _a.length); i++) {
                          if (this.jobList1[i].contract_type == 'temp_contract') {
                            cType = "Temp/Contract";
                            this.jobList1[i].cType = cType;
                          } else if (this.jobList1[i].contract_type == 'full_time') {
                            _cType = 'Full Time';
                            this.jobList1[i].cType = _cType;
                          } else if (this.jobList1[i].contract_type == 'part_time') {
                            _cType2 = 'Part Time';
                            this.jobList1[i].cType = _cType2;
                          } else if (this.jobList1[i].contract_type == 'casual') {
                            _cType3 = 'Casual';
                            this.jobList1[i].cType = _cType3;
                          }
                        }

                        this.sortedData = this.jobList1;
                        this.totalRecords = res.data.count;

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "getPageSizeOptions",
          value: function getPageSizeOptions() {
            return [5, 10, 50, 100];
          } // listing-------------

        }, {
          key: "jobListing",
          value: function jobListing() {
            var _this2 = this;

            var obj = {
              limit: 10,
              offset: 0,
              search: this.search
            };

            if (this.search) {
              obj.search = this.search;
            }

            this.Service.jobManagementList(obj).subscribe(function (res) {
              var _a;

              console.log("Response==========", res);
              _this2.jobList1 = res.data.records;

              for (var i = 0; i < ((_a = _this2.jobList1) === null || _a === void 0 ? void 0 : _a.length); i++) {
                if (_this2.jobList1[i].contract_type == 'temp_contract') {
                  var cType = "Temp/Contract";
                  _this2.jobList1[i].cType = cType;
                } else if (_this2.jobList1[i].contract_type == 'full_time') {
                  var _cType4 = 'Full Time';
                  _this2.jobList1[i].cType = _cType4;
                } else if (_this2.jobList1[i].contract_type == 'part_time') {
                  var _cType5 = 'Part Time';
                  _this2.jobList1[i].cType = _cType5;
                } else if (_this2.jobList1[i].contract_type == 'casual') {
                  var _cType6 = 'Casual';
                  _this2.jobList1[i].cType = _cType6;
                }
              }

              _this2.totalRecords = res.data.count;
              console.log("job List===>", _this2.jobList1);
              _this2.sortedData = _this2.jobList1;
              console.log("job sorted List===>", _this2.sortedData);
            });
            console.log("Object==========", obj);
          } // filter------------

        }, {
          key: "applyFilter",
          value: function applyFilter(filterValue) {
            this.search = filterValue.target.value;

            if (this.event) {
              this.paginationOptionChange(this.event);
            } else {
              this.jobListing();

              if (this.dataSource.paginator) {
                this.dataSource.paginator.firstPage();
              }
            }
          }
        }, {
          key: "view_id",
          value: function view_id() {}
        }, {
          key: "delete_id",
          value: function delete_id(id) {
            this.item_id = id;
            this.smallModal.show();
            console.log("job management===>>>", this.item_id);
            this.ngOnInit();
          }
        }, {
          key: "jobManageDelete",
          value: function jobManageDelete(id) {
            var _this3 = this;

            var obj = {
              employer_job_id: id
            };
            console.log("deleted industry", obj);
            this.smallModal.hide();
            this.Service.jobManagementDelete(obj).subscribe(function (res) {
              console.log("Response==========", res);

              _this3.Service.showMessage({
                message: "Deleted Successfully"
              });

              _this3.ngOnInit();

              _this3.smallModal.hide();
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

        return JobsManagementComponent;
      }();

      JobsManagementComponent.ctorParameters = function () {
        return [{
          type: _topgradservice_service__WEBPACK_IMPORTED_MODULE_9__["TopgradserviceService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]
        }];
      };

      JobsManagementComponent.propDecorators = {
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
        }]
      };
      JobsManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-jobs-management',
        template: _raw_loader_jobs_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_jobs_management_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_topgradservice_service__WEBPACK_IMPORTED_MODULE_9__["TopgradserviceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]])], JobsManagementComponent);

      function createNewUser(id) {
        var postedby = POSTEDBY[Math.round(Math.random() * (POSTEDBY.length - 1))] + ' ';
        var first_name = FIRSTNAME[Math.round(Math.random() * (FIRSTNAME.length - 1))] + ' ';
        var lastName = LASTNAME[Math.round(Math.random() * (LASTNAME.length - 1))] + ' ';
        var worktype = WORKTYPE[Math.round(Math.random() * (WORKTYPE.length - 1))] + ' ';
        var contracttype = CONTRACT[Math.round(Math.random() * (CONTRACT.length - 1))] + ' ';
        var jobtitle = TITLE[Math.round(Math.random() * (TITLE.length - 1))] + ' '; // const applications = APPLICATIONS[Math.round(Math.random() * (APPLICATIONS.length - 1))] + ' ';

        return {
          id: id.toString() + '.',
          postedby: postedby,
          first_name: first_name,
          lastName: lastName,
          worktype: worktype,
          contracttype: contracttype,
          jobtitle: jobtitle,
          // applications: applications,
          deadline: DEADLINE[Math.round(Math.random() * (DEADLINE.length - 1))]
        };
      } // sorting..........


      function compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
      }
      /***/

    },

    /***/
    "WpKD": function WpKD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"jobs-mngmnt\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <mat-form-field appearance=\"standard\">\n          <mat-label>Filter</mat-label>\n          <input matInput (keyup)=\"applyFilter($event)\"  [(ngModel)]=\"search \" placeholder=\"Ex. Mia\" class=\"filter_input\" #input>\n        </mat-form-field>\n\n        <div class=\"mat-elevation-z8\">\n          <div class=\"table-responsive\">\n            <table mat-table [dataSource]=\"sortedData\" matSort (matSortChange)=\"sortData($event)\">\n              <!-- Checkbox Column -->\n              <ng-container matColumnDef=\"select\">\n                <th mat-header-cell *matHeaderCellDef>\n                  <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                    [aria-label]=\"checkboxLabel()\" class=\"td-check\">\n                  </mat-checkbox>\n                </th>\n                <td mat-cell *matCellDef=\"let row\">\n                  <mat-checkbox (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                    [aria-label]=\"checkboxLabel(row)\" class=\"td-check\">\n                  </mat-checkbox>\n                </td>\n              </ng-container>\n              <!-- ID Column -->\n              <ng-container matColumnDef=\"id\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header=\"id\"> S.No </th>\n                <td mat-cell *matCellDef=\"let row; let i=index\"> {{i+1}}  </td>\n              </ng-container>\n\n              <!-- postedby Column -->\n              <ng-container matColumnDef=\"postedby\">\n                <th mat-header-cell *matHeaderCellDef  mat-sort-header=\"first_name\">Employer Name </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.user_detail.first_name}} {{row.user_detail.last_name}} </td>\n              </ng-container>\n              <!-- worktype Column -->\n              <ng-container matColumnDef=\"worktype\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header=\"work_type\">Work Type</th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.work_type}} </td>\n              </ng-container>\n              <!-- Company Column -->\n              <ng-container matColumnDef=\"contracttype\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header=\"contract_type\">Contract Type</th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.cType}} </td>\n                <!-- <ng-container *ngIf=\"row?.contract_type == temp_contract\"> \n                  <td mat-cell *matCellDef=\"let row\" > Temp/Contract </td> \n                </ng-container>\n                <ng-container *ngIf=\"row?.contract_type == full_time\"> \n                  <td mat-cell *matCellDef=\"let row\" >Full Time </td> \n                </ng-container>\n                <ng-container *ngIf=\"row?.contract_type == part_time\"> \n                  <td mat-cell *matCellDef=\"let row\" > Part Time </td> \n                </ng-container>\n                <ng-container *ngIf=\"row?.contract_type == casual\"> \n                  <td mat-cell *matCellDef=\"let row\" > Casual </td> \n                </ng-container> -->\n              </ng-container>\n\n               <!-- Job title Column -->\n              <ng-container matColumnDef=\"jobtitle\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header=\"job_title\">Job Title</th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.job_title}} </td>\n              </ng-container>\n             \n              <!-- deadline Column -->\n              <ng-container matColumnDef=\"deadline\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header=\"deadline_date\"> Deadline </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.deadline_date | date:\"MM/dd/yyyy \"}} </td>\n              </ng-container>\n              <!-- status column -->\n              <ng-container matColumnDef=\"status\">\n                <th mat-header-cell *matHeaderCellDef> Status </th>\n                <td mat-cell *matCellDef=\"let row\">\n                     <mat-slide-toggle [checked]=\"row.user_detail.status=='active'?true:false\"></mat-slide-toggle>\n                   </td>\n              </ng-container>\n              <!-- status column -->\n\n\n              <!-- <ng-container matColumnDef=\"applications\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Applicants </th>\n                <td mat-cell *matCellDef=\"let row\"><a routerLink=\"/applicantsManagement\"> {{row.applications}}</a> </td>\n              </ng-container> -->\n\n\n               <!-- Action column -->\n               <ng-container matColumnDef=\"action\">\n                <th mat-header-cell *matHeaderCellDef> Action </th>\n                <td mat-cell *matCellDef=\"let row\">\n                    <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"td-btn\">\n                      <mat-icon>more_vert</mat-icon>\n                    </button>\n                    <mat-menu #menu=\"matMenu\" class=\"td-menu\">\n                      <a mat-menu-item class=\"\" routerLink=\"/viewJob/{{row._id}}\">\n                        <mat-icon class=\"material-icons-outlined\" (click)=\"view_id(row._id)\">visibility</mat-icon>\n                        <span>View</span>\n                      </a>\n                      <!-- <a mat-menu-item class=\"\" routerLink=\"/editJob\">\n                        <mat-icon class=\"material-icons-outlined\">edit</mat-icon>\n                        <span>Edit</span>\n                      </a> -->\n                      <a mat-menu-item class=\"\" data-toggle=\"modal\" (click)=\"delete_id(row._id)\">\n                        <mat-icon class=\"material-icons-outlined\" >delete</mat-icon>\n                        <span>Delete</span>\n                      </a>\n                    </mat-menu>\n                </td>\n              </ng-container>\n\n              <!-- Progress Column -->\n              <!-- <ng-container matColumnDef=\"progress\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\n              </ng-container> -->\n\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n              <!-- Row shown when there is no matching data. -->\n              <tr class=\"mat-row\" *matNoDataRow>\n                <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n              </tr>\n            </table>\n          </div>\n          <mat-paginator [length]=\"totalRecords\" [pageIndex]=\"topPage\" [pageSize]=\"limit\"\n          [pageSizeOptions]=\"getPageSizeOptions()\" (page)=\"paginationOptionChange($event)\" showFirstLastButtons>\n        </mat-paginator>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Modal -->\n<div bsModal #smallModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"smallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close td-btn\" (click)=\"smallModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" class=\"prof_modclose\">\n            <img src=\"assets/img/Group 225.png\">\n          </span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete the selected Job?</p>\n      </div>\n      <div class=\"modal-footer justify-content-center\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"smallModal.hide()\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"jobManageDelete(this.item_id)\" (click)=\"openSnackBar()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n";
      /***/
    },

    /***/
    "tEqj": function tEqj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobsManagementRoutingModule", function () {
        return JobsManagementRoutingModule;
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


      var _jobs_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./jobs-management.component */
      "TNju");

      var routes = [{
        path: '',
        component: _jobs_management_component__WEBPACK_IMPORTED_MODULE_3__["JobsManagementComponent"]
      }];

      var JobsManagementRoutingModule = function JobsManagementRoutingModule() {
        _classCallCheck(this, JobsManagementRoutingModule);
      };

      JobsManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], JobsManagementRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-jobs-management-jobs-management-module-es5.js.map