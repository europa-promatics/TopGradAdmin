(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-management-industry-management-graduate-industry-graduate-industry-module"],{

/***/ "PIgR":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content-management/industry-management/graduate-industry/graduate-industry.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"applicant-mngmnt\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"catgry-tools d-flex justify-content-between align-items-center\">\n          <mat-form-field appearance=\"standard\">\n            <mat-label>Filter</mat-label>\n            <input matInput (keyup)=\"applyFilter($event)\"  [(ngModel)]=\"search \" placeholder=\"Ex. Mia\" class=\"filter_input\" #input>\n          </mat-form-field>\n          <span class=\"add-categry\">\n            <a class=\"btn-primary btn\" data-toggle=\"modal\" (click)=\"addModal.show()\">Add</a>\n          </span>\n        </div>\n\n        <div class=\"mat-elevation-z8\">\n          <div class=\"table-responsive\">\n            <table mat-table [dataSource]=\"sortedData\" matSort (matSortChange)=\"sortData($event)\">\n              <!-- Checkbox Column -->\n              <ng-container matColumnDef=\"select\">\n                <th mat-header-cell *matHeaderCellDef>\n                  <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                    [aria-label]=\"checkboxLabel()\" class=\"td-check\">\n                  </mat-checkbox>\n                </th>\n                <td mat-cell *matCellDef=\"let row \">\n                  <mat-checkbox (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                    [aria-label]=\"checkboxLabel(row)\" class=\"td-check\">\n                  </mat-checkbox>\n                </td>\n              </ng-container>\n              <!-- ID Column -->\n              <ng-container matColumnDef=\"id\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> S.No </th>\n                <td mat-cell *matCellDef=\"let row ; let i=index\"> {{i+1}} </td>\n              </ng-container>\n\n              <!-- Name Column -->\n              <ng-container matColumnDef=\"name\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Industry Name</th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n              </ng-container>\n              \n             \n               <!-- Action column -->\n               <ng-container matColumnDef=\"action\">\n                <th mat-header-cell *matHeaderCellDef> Action </th>\n                <td mat-cell *matCellDef=\"let row\">\n                    <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"td-btn\">\n                      <mat-icon>more_vert</mat-icon>\n                    </button>\n                    <mat-menu #menu=\"matMenu\" class=\"td-menu\">\n                      <!-- <a mat-menu-item class=\"\" routerLink=\"/viewSubAdmin\">\n                        <mat-icon class=\"material-icons-outlined\">visibility</mat-icon>\n                        <span>View</span>\n                      </a> -->\n                      <a mat-menu-item class=\"\" data-toggle=\"modal\" (click)=\"edit_industry(row._id)\">\n                        <mat-icon class=\"material-icons-outlined\" >edit</mat-icon>\n                        <span>Edit</span>\n                      </a>\n                      <a mat-menu-item class=\"\" data-toggle=\"modal\" (click)=\"delete_id(row._id)\">\n                        <mat-icon class=\"material-icons-outlined\">delete</mat-icon>\n                        <span>Delete</span>\n                      </a>\n                    </mat-menu>\n                </td>\n              </ng-container>\n\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n              <!-- Row shown when there is no matching data. -->\n              <tr class=\"mat-row\" *matNoDataRow>\n                <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n              </tr>\n            </table>\n          </div>\n          <mat-paginator [length]=\"totalRecords\" [pageIndex]=\"topPage\" [pageSize]=\"limit\"\n          [pageSizeOptions]=\"getPageSizeOptions()\" (page)=\"paginationOptionChange($event)\" showFirstLastButtons>\n        </mat-paginator>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<div bsModal #addModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close td-btn\" (click)=\"addModalRemove()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" class=\"prof_modclose\">\n            <img src=\"assets/img/Group 225.png\">\n          </span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div >\n          <strong class=\"label-add\">Add Industry</strong>\n        </div>\n        <form>\n          <div class=\"row\" [formGroup]=\"addForm\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                 <!-- <label>Industry Name</label> -->\n                 <input type=\"text\" name=\"\" class=\"form-control\"  value=\"\" formControlName=\"name\" [(ngModel)]=\"name1\">\n                 <div *ngIf=\"(addForm.controls.name?.touched || addForm.controls.name?.dirty)\n                && addForm.controls.name?.invalid && addForm.controls.name?.errors?.required\" style=\"color:red\" >\n                *Please enter Industry Name here....\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer justify-content-center\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addModalRemove()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addIndustry()\" >Submit</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n  \n<div bsModal #editModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close td-btn\" (click)=\"editModalRemove()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" class=\"prof_modclose\">\n            <img src=\"assets/img/Group 225.png\">\n          </span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div >\n          <strong class=\"label-edit\">Edit Industry</strong>\n        </div>\n        <form>\n          <div class=\"row\" [formGroup]=\"editForm\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                 <input type=\"text\" name=\"\" class=\"form-control\"  value=\"\" formControlName=\"name\" [(ngModel)]=\"name1\">\n                 <div *ngIf=\"(editForm.controls.name?.touched || editForm.controls.name?.dirty)\n                 && editForm.controls.name?.invalid && editForm.controls.name?.errors?.required\" style=\"color:red\" >\n                 *Please enter Industry Name here....\n                 </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer justify-content-center\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"editModalRemove()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\"   (click)=\" EditIndustry(this.id)\" (click)=\"openSnackBar()\">Submit</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div bsModal #smallModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"smallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close td-btn\"  (click)=\"smallModal.hide()\"  aria-label=\"Close\">\n          <span aria-hidden=\"true\" class=\"prof_modclose\">\n            <img src=\"assets/img/Group 225.png\">\n          </span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete the selected Sub Admin?</p>\n      </div>\n      <div class=\"modal-footer justify-content-center\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"smallModal.hide()\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"industryGraduateDelete(this.item_id)\" (click)=\"openSnackBar()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "PQaE":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/content-management/industry-management/graduate-industry/graduate-industry.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: GraduateIndustryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraduateIndustryComponent", function() { return GraduateIndustryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_graduate_industry_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./graduate-industry.component.html */ "PIgR");
/* harmony import */ var _graduate_industry_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graduate-industry.component.scss */ "rMVx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _topgradservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../topgradservice.service */ "DL5e");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");













const NAMES = [];
let GraduateIndustryComponent = class GraduateIndustryComponent {
    constructor(Service, dialog, fb, route) {
        var _a;
        this.Service = Service;
        this.dialog = dialog;
        this.fb = fb;
        this.route = route;
        this.userList = [];
        this.displayedColumns = ['select', 'id', 'name', 'action'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](true, []);
        this.name1 = [];
        this.addForm = this.fb.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required])],
        });
        this.editForm = this.fb.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required])],
        });
        const users = [];
        for (let i = 1; i <= 100; i++) {
            users.push(createNewUser(i));
        }
        ;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](users);
        this.sortedData = (_a = this.graduateListing) === null || _a === void 0 ? void 0 : _a.slice();
    }
    sortData(sort) {
        const data = this.graduateListing.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'id':
                    return compare(a.id, b.id, isAsc);
                case 'name':
                    return compare(a.id, b.id, isAsc);
                default:
                    return 0;
            }
        });
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    ngOnInit() {
        this.search = '';
        this.graduateList();
        this.name = "";
    }
    openSnackBar() {
        this.id = this.id;
    }
    editModalRemove() {
        this.editModal.hide();
        this.editForm.reset();
    }
    industryId() {
        var obj = {
            industry_id: this.id
        };
        console.log("industry iddddd===>>", obj);
        this.Service.addEditIndustryDetail(obj).subscribe(data => {
            console.log("detailsssss====", data);
            this.user = data.data;
            this.name1 = this.user.name;
        }, err => {
            console.log(err.status);
            if (err.status >= 404) {
                console.log('Some error occured');
            }
            else {
                this.toastr.error('Some error occured, please try again!!', 'Error');
                console.log('Internet Connection Error');
            }
        });
    }
    edit_industry(id) {
        console.log("edittttttttttttttt===>>>", id);
        this.id = id;
        this.editModal.show();
        this.industryId();
    }
    addIndustry(id) {
        console.log("formmmmmmmmmmmm", this.addForm);
        if (this.addForm.invalid) {
            this.addForm.markAllAsTouched();
        }
        else {
            var obj = {
                type: 'graduate',
                name: this.addForm.controls.name.value,
                industry_id: this.id
            };
            if (this.id) {
                obj.industry_id = id;
            }
            console.log("Adddddd=========>", obj);
            this.Service.addIndustry(obj).subscribe(res => {
                console.log("Response==========", res);
                this.Service.showMessage({ message: "Added Successfully" });
                this.ngOnInit();
                this.addModal.hide();
                this.editModal.hide();
                this.addForm.reset();
            });
        }
    }
    EditIndustry(id) {
        console.log("formmmmmmmmmmmm", this.addForm);
        if (this.addForm.invalid) {
            this.addForm.markAllAsTouched();
        }
        else {
            var obj = {
                type: 'graduate',
                name: this.addForm.controls.name.value,
                industry_id: this.id
            };
            if (this.id) {
                obj.industry_id = id;
            }
            console.log("Adddddd=========>", obj);
            this.Service.addIndustry(obj).subscribe(res => {
                console.log("Response==========", res);
                this.Service.showMessage({ message: "Updated Successfully" });
                this.ngOnInit();
                this.addModal.hide();
                this.editModal.hide();
                this.addForm.reset();
            });
        }
    }
    addModalRemove() {
        this.addModal.hide();
        this.addForm.reset();
    }
    paginationOptionChange(evt) {
        console.log("evthrm", evt);
        this.event = evt;
        this.topPage = evt.pageIndex;
        console.log('rsawsfsdsf', this.topPage);
        var obj = {
            type: 'graduate',
            limit: evt.pageSize,
            offset: (evt.pageIndex * evt.pageSize),
            search: this.search
        };
        this.Service.industryList(obj).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Response of all the service listing>>>>>", res);
            this.graduateListing = res.data,
                this.sortedData = this.graduateListing;
            this.totalRecords = res.count;
        }));
    }
    getPageSizeOptions() {
        return [5, 10, 50, 100];
    }
    graduateList() {
        console.log("javascriptt========");
        var obj = {
            type: 'graduate',
            limit: 5,
            offset: 0,
            search: this.search
        };
        console.log("object===>", obj);
        this.Service.industryList(obj).subscribe(res => {
            console.log("Response==========", res);
            this.graduateListing = res.data;
            this.sortedData = this.graduateListing;
            this.totalRecords = res.count;
        });
        console.log("Object==========");
    }
    delete_id(id) {
        this.item_id = id;
        this.smallModal.show();
        console.log("industry name", this.item_id);
        this.ngOnInit();
    }
    industryGraduateDelete(id) {
        var obj = {
            industry_id: id
        };
        console.log("deleted industry", obj);
        this.smallModal.hide();
        this.Service.industryDelete(obj).subscribe(res => {
            console.log("Response==========", res);
            this.Service.showMessage({ message: "Deleted Successfully" });
            this.ngOnInit();
            this.smallModal.hide();
        });
    }
    applyFilter(filterValue) {
        this.search = filterValue.target.value;
        if (this.event) {
            this.paginationOptionChange(this.event);
        }
        else {
            this.graduateList();
        }
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
    }
};
GraduateIndustryComponent.ctorParameters = () => [
    { type: _topgradservice_service__WEBPACK_IMPORTED_MODULE_9__["TopgradserviceService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] }
];
GraduateIndustryComponent.propDecorators = {
    smallModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['smallModal',] }],
    addModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['addModal',] }],
    editModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['editModal',] }],
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"],] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"],] }]
};
GraduateIndustryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-graduate-industry',
        template: _raw_loader_graduate_industry_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_graduate_industry_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_topgradservice_service__WEBPACK_IMPORTED_MODULE_9__["TopgradserviceService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]])
], GraduateIndustryComponent);

function createNewUser(id) {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ';
    return {
        id: id.toString() + '.',
        name: name,
    };
}
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "XOL1":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/content-management/industry-management/graduate-industry/graduate-industry-routing.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: GraduateIndustryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraduateIndustryRoutingModule", function() { return GraduateIndustryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _graduate_industry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graduate-industry.component */ "PQaE");




const routes = [
    {
        path: '',
        component: _graduate_industry_component__WEBPACK_IMPORTED_MODULE_3__["GraduateIndustryComponent"]
    }
];
let GraduateIndustryRoutingModule = class GraduateIndustryRoutingModule {
};
GraduateIndustryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GraduateIndustryRoutingModule);



/***/ }),

/***/ "rMVx":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/content-management/industry-management/graduate-industry/graduate-industry.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFkdWF0ZS1pbmR1c3RyeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "s3Lz":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/content-management/industry-management/graduate-industry/graduate-industry.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: GraduateIndustryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraduateIndustryModule", function() { return GraduateIndustryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-dropzone */ "kvL/");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "fB2i");
/* harmony import */ var _graduate_industry_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./graduate-industry-routing.module */ "XOL1");
/* harmony import */ var _graduate_industry_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./graduate-industry.component */ "PQaE");




















let GraduateIndustryModule = class GraduateIndustryModule {
};
GraduateIndustryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _graduate_industry_component__WEBPACK_IMPORTED_MODULE_18__["GraduateIndustryComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_16__["EditorModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__["NgxDropzoneModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _graduate_industry_routing_module__WEBPACK_IMPORTED_MODULE_17__["GraduateIndustryRoutingModule"],
            // MatFormFieldModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"]
        ],
        providers: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["BsModalRef"]]
    })
], GraduateIndustryModule);



/***/ })

}]);
//# sourceMappingURL=pages-content-management-industry-management-graduate-industry-graduate-industry-module-es2015.js.map