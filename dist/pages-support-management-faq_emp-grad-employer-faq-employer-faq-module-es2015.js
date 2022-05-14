(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-support-management-faq_emp-grad-employer-faq-employer-faq-module"],{

/***/ "18Xp":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/support-management/faq_emp-grad/employer-faq/employer-faq.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llci1mYXEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "DBXZ":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/support-management/faq_emp-grad/employer-faq/employer-faq-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: EmployerFaqRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerFaqRoutingModule", function() { return EmployerFaqRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _employer_faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employer-faq.component */ "ay3V");




const routes = [
    {
        path: '',
        component: _employer_faq_component__WEBPACK_IMPORTED_MODULE_3__["EmployerFaqComponent"]
    }
];
let EmployerFaqRoutingModule = class EmployerFaqRoutingModule {
};
EmployerFaqRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EmployerFaqRoutingModule);



/***/ }),

/***/ "PsTM":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/support-management/faq_emp-grad/employer-faq/employer-faq.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: EmployerFaqModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerFaqModule", function() { return EmployerFaqModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _employer_faq_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employer-faq-routing.module */ "DBXZ");
/* harmony import */ var _employer_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employer-faq.component */ "ay3V");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");















let EmployerFaqModule = class EmployerFaqModule {
};
EmployerFaqModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _employer_faq_component__WEBPACK_IMPORTED_MODULE_4__["EmployerFaqComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _employer_faq_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployerFaqRoutingModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__["BsDropdownModule"].forRoot()
        ],
        providers: [
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["BsModalRef"]
        ]
    })
], EmployerFaqModule);



/***/ }),

/***/ "ay3V":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/support-management/faq_emp-grad/employer-faq/employer-faq.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EmployerFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerFaqComponent", function() { return EmployerFaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employer_faq_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employer-faq.component.html */ "uSiJ");
/* harmony import */ var _employer_faq_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employer-faq.component.scss */ "18Xp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _topgradservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../topgradservice.service */ "DL5e");











/** Constants used to fill up our data base. */
const TITLE = [
    'How do I keep track of a b c?', 'Lorem ipsum dolor sit?'
];
// const LASTNAME: string[] = [
//   'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
//   'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
// ];
const CATEGORY = [
    'General', 'My Account', 'Jobs', 'Permissions & Privacy',
];
const DESCRIPTION = [
    'Lorem ipsum sit donar Lorem ipsum sit donar', 'Lorem ipsum sit donar Lorem ipsum sit donar', 'Lorem ipsum sit donar Lorem ipsum sit donar', 'Lorem ipsum sit donar Lorem ipsum sit donar',
];
let EmployerFaqComponent = class EmployerFaqComponent {
    constructor(Service, fb) {
        var _a;
        this.Service = Service;
        this.fb = fb;
        this.displayedColumns = ['id', 'title', 'description', 'category', 'action'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](true, []);
        this.search = '';
        const users = [];
        for (let i = 1; i <= 100; i++) {
            users.push(createNewUser(i));
        }
        ;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](users);
        this.sortedData = (_a = this.EmployerFaqList) === null || _a === void 0 ? void 0 : _a.slice();
    }
    sortData(sort) {
        const data = this.EmployerFaqList.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'id':
                    return compare(a.id, b.id, isAsc);
                case 'title':
                    return compare(a.id, b.id, isAsc);
                case 'category':
                    return compare(a.id, b.id, isAsc);
                case 'description':
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
        this.faqList();
    }
    paginationOptionChange(evt) {
        console.log("evthrm", evt);
        this.topPage = evt.pageIndex;
        console.log('rsawsfsdsf', this.topPage);
        var obj = {
            user_type: "employer",
            limit: evt.pageSize,
            offset: (evt.pageIndex * evt.pageSize)
        };
        if (this.search) {
            obj.search = this.search;
        }
        this.Service.faqList(obj).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Response of all the service listing>>>>>", data);
            this.EmployerFaqList = data.data;
            this.sortedData = this.EmployerFaqList;
            this.totalRecords = data.count;
        }));
    }
    getPageSizeOptions() {
        return [5, 10, 25, 50, 100];
    }
    faqList() {
        console.log("javascriptt========");
        var obj = {
            user_type: "employer",
            limit: 5,
            offset: 0
        };
        if (this.search) {
            obj.search = this.search;
        }
        this.Service.faqList(obj).subscribe(res => {
            console.log("Response==========", res);
            this.EmployerFaqList = res.data;
            this.sortedData = this.EmployerFaqList;
            this.totalRecords = res.count;
        });
        console.log("Object==========", obj);
    }
    applyFilter(filterValue) {
        console.log("filterValue", this.search);
        this.faqList();
    }
    delete_id(id) {
        this.item_id = id;
        this.smallModal.show();
        console.log("adsdsadsadsds", this.item_id);
        this.ngOnInit();
    }
    faqDelete(id) {
        var obj = {
            faq_id: id
        };
        console.log("adsdsadsadsds", obj);
        this.smallModal.hide();
        this.Service.faqDelete(obj).subscribe(res => {
            console.log("Response==========", res);
            this.ngOnInit();
            this.smallModal.hide();
        });
    }
};
EmployerFaqComponent.ctorParameters = () => [
    { type: _topgradservice_service__WEBPACK_IMPORTED_MODULE_10__["TopgradserviceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] }
];
EmployerFaqComponent.propDecorators = {
    smallModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['smallModal',] }],
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"],] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"],] }]
};
EmployerFaqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-employer-faq',
        template: _raw_loader_employer_faq_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employer_faq_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_topgradservice_service__WEBPACK_IMPORTED_MODULE_10__["TopgradserviceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]])
], EmployerFaqComponent);

function createNewUser(id) {
    const title = TITLE[Math.round(Math.random() * (TITLE.length - 1))] + ' ';
    const category = CATEGORY[Math.round(Math.random() * (CATEGORY.length - 1))] + ' ';
    const description = DESCRIPTION[Math.round(Math.random() * (DESCRIPTION.length - 1))] + ' ';
    return {
        id: id.toString() + '.',
        title: title,
        category: category,
        description: description,
    };
}
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "uSiJ":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support-management/faq_emp-grad/employer-faq/employer-faq.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"jobs-mngmnt\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <mat-progress-bar mode=\"indeterminate\" value=\"100\" *ngIf=\"!sortedData\"></mat-progress-bar>\n        <div class=\"catgry-tools d-flex justify-content-between align-items-center\">\n          <mat-form-field appearance=\"standard\">\n            <mat-label>Filter</mat-label>\n            <input matInput (keyup)=\"applyFilter($event)\" [(ngModel)]=\"search\" placeholder=\"Ex. Mia\" class=\"filter_input\" #input>\n          </mat-form-field>\n          <span class=\"add-categry\">\n            <a class=\"btn-primary btn\" routerLink=\"/add-faq\">Add FAQ</a>\n          </span>\n        </div>\n\n        <div class=\"mat-elevation-z8\">\n          <div class=\"table-responsive\">\n            <table mat-table [dataSource]=\"sortedData\"  matSort (matSortChange)=\"sortData($event)\">\n              <!-- Checkbox Column -->\n              <!-- <ng-container matColumnDef=\"select\">\n                <th mat-header-cell *matHeaderCellDef>\n                  <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                    [aria-label]=\"checkboxLabel()\" class=\"td-check\">\n                  </mat-checkbox>\n                </th>\n                <td mat-cell *matCellDef=\"let row\">\n                  <mat-checkbox (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                    [aria-label]=\"checkboxLabel(row)\" class=\"td-check\">\n                  </mat-checkbox>\n                </td>\n              </ng-container> -->\n              <!-- ID Column -->\n              <ng-container matColumnDef=\"id\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header=\"id\"> S.No </th>\n                <td mat-cell *matCellDef=\"let row; let i=index\"> {{i+1}} </td>\n              </ng-container>\n\n              <!-- firstName Column -->\n              <ng-container matColumnDef=\"title\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header=\"title\">Title </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.title}} </td>\n              </ng-container>\n              <!-- Company Column -->\n              <ng-container matColumnDef=\"category\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header=\"category\">Category</th>\n                <td mat-cell *matCellDef=\"let row\"> {{row?.category_data?.name}} </td>\n              </ng-container>\n             \n              <!-- enquiry Column -->\n              <ng-container matColumnDef=\"description\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header=\"description\"> Description </th>\n                <td mat-cell *matCellDef=\"let row\" class=\"td-width\" [innerHTML]=\"row.description\"></td>\n              </ng-container>\n\n               <!-- Action column -->\n               <ng-container matColumnDef=\"action\">\n                <th mat-header-cell *matHeaderCellDef> Action </th>\n                <td mat-cell *matCellDef=\"let row\">\n                    <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"td-btn\">\n                      <mat-icon>more_vert</mat-icon>\n                    </button>\n                    <mat-menu #menu=\"matMenu\" class=\"td-menu\">\n                        <a mat-menu-item class=\"\" routerLink=\"/view-faq/{{row._id}}\">\n                            <mat-icon class=\"material-icons-outlined\" (click)=\"view_id(row._id)\">visibility</mat-icon>\n                            <span>View</span>\n                        </a>\n                        <a mat-menu-item class=\"\" routerLink=\"/edit-faq/{{row._id}}\"  >\n                            <mat-icon class=\"material-icons-outlined\" (click)=\"edit_faq(row._id)\">edit</mat-icon>\n                            <span>Edit</span>\n                        </a>\n                        \n                        <a mat-menu-item class=\"\" data-toggle=\"modal\" (click)=\"smallModal.show()\">\n                            <mat-icon class=\"material-icons-outlined\" (click)=\"delete_id(row._id)\">delete</mat-icon>\n                            <span>Delete</span>\n                        </a>\n                    </mat-menu>\n                </td>\n              </ng-container>\n\n              <!-- Progress Column -->\n              <!-- <ng-container matColumnDef=\"progress\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\n              </ng-container> -->\n\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n              <!-- Row shown when there is no matching data. -->\n              <tr class=\"mat-row\" *matNoDataRow>\n                <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n              </tr>\n            </table>\n          </div>\n            <mat-paginator [length]=\"totalRecords\" [pageIndex]=\"topPage\" [pageSize]=\"limit\"\n              [pageSizeOptions]=\"getPageSizeOptions()\" (page)=\"paginationOptionChange($event)\" showFirstLastButtons>\n            </mat-paginator>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Modal -->\n<div bsModal #smallModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"smallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close td-btn\" (click)=\"smallModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" class=\"prof_modclose\">\n            <img src=\"assets/img/Group 225.png\">\n          </span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete the selected FAQ?</p>\n      </div>\n      <div class=\"modal-footer justify-content-center\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"smallModal.hide()\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"faqDelete(this.item_id)\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=pages-support-management-faq_emp-grad-employer-faq-employer-faq-module-es2015.js.map