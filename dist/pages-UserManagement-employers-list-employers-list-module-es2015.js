(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-UserManagement-employers-list-employers-list-module"],{

/***/ "FFi9":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/UserManagement/employers-list/employers-list-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: EmployersListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployersListRoutingModule", function() { return EmployersListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _employers_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employers-list.component */ "TuRM");




const routes = [
    {
        path: '',
        component: _employers_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployersListComponent"]
    }
];
let EmployersListRoutingModule = class EmployersListRoutingModule {
};
EmployersListRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EmployersListRoutingModule);



/***/ }),

/***/ "NYjp":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/UserManagement/employers-list/employers-list.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"employer-mng-list\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"tabl_upr d-flex align-items-center justify-content-between\">\n          <mat-form-field appearance=\"standard\">\n            <mat-label>Filter</mat-label>\n            <input matInput (keyup)=\"applyFilter($event)\" [(ngModel)]=\"search\" placeholder=\"Ex. Mia\" class=\"filter_input\" #input>\n          </mat-form-field>\n          <!-- <div class=\"fltr_div d-flex align-items-center\">\n            <div class=\"form-group mb-0 ml-3\">\n              <select class=\"form-control custom-select\">\n                  <option selected>Select Filter</option>\n                  <option>Location</option>\n                  <option>Work Preference</option>\n                  <option>Availability</option>\n                  <option>Education</option>\n                  <option>License</option>\n                  <option>Work Rights</option>\n                  <option>Skills</option>\n              </select>\n            </div>\n\n            <div class=\"form-group mb-0 ml-3\">\n              <select class=\"form-control custom-select\">\n                  <option selected>Select Sub-Filter</option>\n                  <option>Melbourne</option>\n                  <option>Sydney</option>\n              </select>\n            </div>\n            <div class=\"appl_fltr ml-3\">\n              <button class=\"btn btn-primary\">\n              Apply Filter\n            </button>\n            </div>\n          </div> -->\n        </div>\n\n        <div class=\"mat-elevation-z8\">\n          <div class=\"table-responsive\">\n            <table mat-table [dataSource]=\"emplist\" matSort>\n\n              <!-- Checkbox Column -->\n              <ng-container matColumnDef=\"select\">\n                <th mat-header-cell *matHeaderCellDef>\n                  <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                    [aria-label]=\"checkboxLabel()\" class=\"td-check\">\n                  </mat-checkbox>\n                </th>\n                <td mat-cell *matCellDef=\"let row\">\n                  <mat-checkbox (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                    [aria-label]=\"checkboxLabel(row)\" class=\"td-check\">\n                  </mat-checkbox>\n                </td>\n              </ng-container>\n              <!-- ID Column -->\n              <ng-container matColumnDef=\"id\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> S.No </th>\n                <td mat-cell *matCellDef=\"let row ; let i=index\">  {{i+1}} </td>\n              </ng-container>\n\n              <!-- Name Column -->\n              <ng-container matColumnDef=\"name\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>First Name </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.first_name}} </td>\n              </ng-container>\n               <!-- lname Column -->\n              <ng-container matColumnDef=\"lname\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.last_name}} </td>\n              </ng-container>\n              <!-- Email Column -->\n              <ng-container matColumnDef=\"email\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Work Email Address</th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.email}} </td>\n              </ng-container>\n              <!-- Company Column -->\n              <ng-container matColumnDef=\"company\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Company Name</th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.company_name}} </td>\n              </ng-container>\n               <!-- Job title Column -->\n              <ng-container matColumnDef=\"jobtitle\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Job Title</th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.role}} </td>\n              </ng-container>\n               <!-- creation date Column -->\n              <ng-container matColumnDef=\"creation\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Creation Date (Time)</th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.createdAt | date}} </td>\n              </ng-container>\n              <!-- status column -->\n              <ng-container matColumnDef=\"status\">\n                <th mat-header-cell *matHeaderCellDef> Status </th>\n                <td mat-cell *matCellDef=\"let row\" >\n                     <mat-slide-toggle [checked]=\"row.status=='active'?true:false\"></mat-slide-toggle>\n                   </td>\n              </ng-container>\n               <!-- Action column -->\n               <ng-container matColumnDef=\"action\">\n                <th mat-header-cell *matHeaderCellDef> Action </th>\n                <td mat-cell *matCellDef=\"let row\">\n                    <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"td-btn\">\n                      <mat-icon>more_vert</mat-icon>\n                    </button>\n                    <mat-menu #menu=\"matMenu\" class=\"td-menu\">\n                      <a mat-menu-item class=\"\" routerLink=\"/viewEmployer/{{row._id}}\">\n                        <mat-icon class=\"material-icons-outlined\">visibility</mat-icon>\n                        <span>View</span>\n                      </a>\n                      <a mat-menu-item class=\"\" routerLink=\"/editEmployer/{{row._id}}\">\n                        <mat-icon class=\"material-icons-outlined\">edit</mat-icon>\n                        <span>Edit</span>\n                      </a>\n                      <!-- <a mat-menu-item class=\"\" data-toggle=\"modal\" (click)=\"resetpswrd.show()\">\n                        <mat-icon class=\"material-icons-outlined\">cached</mat-icon>\n                        <span>Reset Password</span>\n                      </a>\n                      <a mat-menu-item class=\"\" routerLink=\"\">\n                        <mat-icon class=\"material-icons-outlined\">block</mat-icon>\n                        <span>Ban</span>\n                      </a>\n                      <a mat-menu-item class=\"\" routerLink=\"\">\n                        <mat-icon class=\"material-icons-outlined\">message</mat-icon>\n                        <span>Send Message</span>\n                      </a>\n                      <a mat-menu-item class=\"\" routerLink=\"\">\n                        <mat-icon class=\"material-icons-outlined\">email</mat-icon>\n                        <span>Send Email</span>\n                      </a> -->\n                      <a mat-menu-item class=\"\" data-toggle=\"modal\" (click)=\"modal(row._id)\">\n                        <mat-icon class=\"material-icons-outlined\" >delete</mat-icon>\n                        <span>Delete</span>\n                      </a>\n                    </mat-menu>\n                </td>\n              </ng-container>\n\n              <!-- Progress Column -->\n              <!-- <ng-container matColumnDef=\"progress\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\n              </ng-container> -->\n\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n              <!-- Row shown when there is no matching data. -->\n              <tr class=\"mat-row\" *matNoDataRow>\n                <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n              </tr>\n            </table>\n          </div>\n          <mat-paginator [length]=\"totalRecords\" [pageIndex]=\"topPage\" [pageSize]=\"limit\"\n          [pageSizeOptions]=\"getPageSizeOptions()\" (page)=\"paginationOptionChange($event)\" aria-label=\"Select page of users\"></mat-paginator>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<!-- Modal -->\n<div bsModal #smallModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"smallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close td-btn\" (click)=\"smallModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" class=\"prof_modclose\">\n            <img src=\"assets/img/Group 225.png\">\n          </span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p class=\"mb-0\">Are you sure you want to delete the selected user's account?</p>\n      </div>\n      <div class=\"modal-footer justify-content-center\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"smallModal.hide()\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteEmployer(this.delId)\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div bsModal #resetpswrd=\"bs-modal\" class=\"modal fade reset_pswrd\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"replyModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close td-btn\" (click)=\"resetpswrd.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" class=\"prof_modclose\">\n            <img src=\"assets/img/Group 225.png\">\n          </span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label>Current Password</label>\n                <input type=\"password\" class=\"form-control\" value=\"abc123@\">\n              </div>\n              <div class=\"form-group\">\n                <label>New Password</label>\n                <input type=\"password\" class=\"form-control\">\n              </div>\n              <div class=\"form-group\">\n                <label>Confirm Password</label>\n                <input type=\"password\" class=\"form-control\">\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer justify-content-center\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"resetpswrd.hide()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\">Submit</button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "SU4D":
/*!******************************************************************************!*\
  !*** ./src/app/pages/UserManagement/employers-list/employers-list.module.ts ***!
  \******************************************************************************/
/*! exports provided: EmployersListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployersListModule", function() { return EmployersListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _employers_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employers-list.component */ "TuRM");
/* harmony import */ var _employers_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employers-list-routing.module */ "FFi9");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");


















let EmployersListModule = class EmployersListModule {
};
EmployersListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _employers_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployersListComponent"]
        ],
        imports: [
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__["BsDropdownModule"].forRoot(),
            _employers_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["EmployersListRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"]
        ],
        providers: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["BsModalRef"]]
    })
], EmployersListModule);



/***/ }),

/***/ "TuRM":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/UserManagement/employers-list/employers-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EmployersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployersListComponent", function() { return EmployersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employers_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employers-list.component.html */ "NYjp");
/* harmony import */ var _employers_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employers-list.component.scss */ "sxqn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _topgradservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../topgradservice.service */ "DL5e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");












/** Constants used to fill up our data base. */
const LNAME = [
    'A', 'T', 'V', 'C', 'J', 'R', 'J', 'J'
];
const NAMES = [
    'Maia', 'Asher',
];
const EMAILS = [
    'maia@gmail.com', 'asher@gmail.com', 'olivia@gmail.com', 'atticus@gmail.com', 'amelia@gmail.com', 'jack@gmail.com', 'charlotte@gmail.com', 'theodore@gmail.com', 'isla@gmail.com', 'oliver@gmail.com',
    'isabella@gmail.com', 'jasper@gmail.com', 'cora@gmail.com', 'levi@gmail.com', 'violet@gmail.com', 'arthur@gmail.com', 'mia@gmail.com', 'thomas@gmail.com', 'elizabeth@gmail.com'
];
const COMPANY = [
    'Promatics', 'PromaticsA', 'PromaticsB', 'PromaticsC', 'PromaticsD', 'PromaticsE', 'PromaticsF', 'PromaticsG', 'Promatics', 'Promatics',
    'Promatics', 'Promatics', 'Promatics', 'Promatics', 'Promatics', 'Promatics', 'Promatics', 'Promatics', 'Promatics'
];
const TITLE = [
    'Employer', 'Employer', 'Employer', 'Employer', 'Employer', 'Employer', 'Employer', 'Employer', 'Employer', 'Promatics',
    'Promatics', 'Promatics', 'Employer', 'Employer', 'Employer', 'Employer', 'Employer', 'Promatics', 'Promatics'
];
const CREATION = [
    '12-01-2012 (06:22 PM)', '12-12-2012 (02:22 PM)', '12-12-2012 (03:12 PM)', '24-11-2012 (03:12 PM)', '12-01-2012 (06:22 PM)', '12-01-2012 (02:22 PM)', '12-01-2012 (03:12 PM)', '12-01-2012 (03:12 PM)', '12-01-2012 (03:12 PM)',
    '09-01-2021 (06:22 PM)', '09-01-2021 (06:22 PM)', '12-01-2012 (02:22 PM)', '12-04-2012 (03:12 PM)', '12-01-2012 (06:22 PM)', '12-01-2012 (02:22 PM)', '12-01-2012 (02:22 PM)', '09-01-2021 (03:12 PM)'
];
let EmployersListComponent = class EmployersListComponent {
    constructor(route, Service, _snackBar) {
        this.route = route;
        this.Service = Service;
        this._snackBar = _snackBar;
        this.emplist = [];
        this.displayedColumns = ['select', 'id', 'name', 'lname', 'email', 'company', 'jobtitle', 'status', 'creation', 'action'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](true, []);
        // Create 100 users
        const users = Array.from({ length: 50 }, (_, k) => createNewUser(k + 1));
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](users);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    ngOnInit() {
        this.search = '';
        this.employerlist();
    }
    modal(id) {
        this.smallModal.show();
        this.delId = id;
    }
    deleteEmployer(id) {
        var obj = {
            deletedAt: true,
            user_id: id
        };
        this.Service.deleteuser(obj).subscribe(res => {
            console.log("fgdgfdgfdfgdfgd", res);
            this.smallModal.hide();
            if (res.code == 200) {
                this._snackBar.open("User Deleted Successfully", "close", {
                    duration: 2000
                });
                this.ngOnInit();
            }
        }, err => {
            console.log(err);
            this._snackBar.open("Some Error Occued", "close", {
                duration: 2000
            });
        });
    }
    employerlist() {
        console.log("khjhgjhgjhgjhghjghjgjhghjg");
        var obj = {
            limit: 5,
            offset: 0,
            role: "Employer",
            search: this.search
        };
        console.log("onnnn", obj);
        this.Service.emplist(obj).subscribe(data => {
            console.log("main data for users is ====", data);
            this.emplist = data.data;
            this.totalRecords = data.length;
        }, err => {
            console.log(err.status);
            if (err.status >= 404) {
                console.log('Some error occured');
            }
            else {
                // this.toastr.error('Some error occured, please try again!!', 'Error')
                console.log('Internet Connection Error');
            }
        });
    }
    applyFilter(filterValue) {
        this.search = filterValue.target.value;
        console.log("search", this.search);
        console.log("after searchhhhh-00------------0=====", this.event);
        if (this.event) {
            console.log("after searchhhhh=====", this.event);
            this.paginationOptionChange(this.event);
        }
        else {
            this.employerlist();
        }
    }
    paginationOptionChange(evt) {
        this.event = evt;
        console.log("evthrm", evt);
        this.topPage = evt.pageIndex;
        console.log('rsawsfsdsf', this.topPage);
        console.log("pagesize is======", evt.pageSize);
        var obj = {
            role: "Employer",
            search: this.search,
            limit: evt.pageSize,
            offset: (evt.pageIndex * evt.pageSize)
        };
        //  if(this.search){
        //   obj.search = this.search
        // }
        console.log("paginator obj==========", obj);
        this.Service.emplist(obj).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Response of all the service listing>>>>>", data);
            this.emplist = data.data,
                this.sortedData = this.emplist;
            this.totalRecords = data.count;
        }));
    }
    getPageSizeOptions() {
        return [5, 10, 50, 100];
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }
    /** The label for the checkbox on the passed row */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
    }
};
EmployersListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _topgradservice_service__WEBPACK_IMPORTED_MODULE_9__["TopgradserviceService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"] }
];
EmployersListComponent.propDecorators = {
    smallModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['smallModal',] }],
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"],] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"],] }]
};
EmployersListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-employers-list',
        template: _raw_loader_employers_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employers_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _topgradservice_service__WEBPACK_IMPORTED_MODULE_9__["TopgradserviceService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]])
], EmployersListComponent);

function createNewUser(id) {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ';
    const email = EMAILS[Math.round(Math.random() * (EMAILS.length - 1))] + ' ';
    const company = COMPANY[Math.round(Math.random() * (COMPANY.length - 1))] + ' ';
    const jobtitle = TITLE[Math.round(Math.random() * (TITLE.length - 1))] + ' ';
    const creation = CREATION[Math.round(Math.random() * (CREATION.length - 1))] + ' ';
    return {
        id: id.toString() + '.',
        name: name,
        email: email,
        company: company,
        jobtitle: jobtitle,
        creation: creation,
        lname: LNAME[Math.round(Math.random() * (LNAME.length - 1))],
    };
}


/***/ }),

/***/ "sxqn":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/UserManagement/employers-list/employers-list.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llcnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pages-UserManagement-employers-list-employers-list-module-es2015.js.map