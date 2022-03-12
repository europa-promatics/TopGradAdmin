(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-view-job-view-job-module"],{

/***/ "/9A/":
/*!******************************************************!*\
  !*** ./src/app/views/view-job/view-job.component.ts ***!
  \******************************************************/
/*! exports provided: ViewJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewJobComponent", function() { return ViewJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_job_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-job.component.html */ "Mbux");
/* harmony import */ var _view_job_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-job.component.scss */ "5T/K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _topgradservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../topgradservice.service */ "DL5e");







let ViewJobComponent = class ViewJobComponent {
    constructor(route, Service) {
        this.route = route;
        this.Service = Service;
    }
    ngOnInit() {
        this.jobDetail();
    }
    jobDetail() {
        var obj = {
            employer_job_id: this.route.snapshot.paramMap.get('id')
        };
        console.log("onnnn", obj);
        this.Service.jobManagementDetail(obj).subscribe(data => {
            var _a, _b, _c;
            console.log("main data for users is ssssssssssssssssssss====", data);
            this.user = data.data;
            if (this.user.contract_type == 'temp_contract') {
                let cType = "Temp/Contract";
                this.user.cType = cType;
            }
            else if (this.user.contract_type == 'full_time') {
                let cType = 'Full Time';
                this.user.cType = cType;
            }
            else if (this.user.contract_type == 'part_time') {
                let cType = 'Part Time';
                this.user.cType = cType;
            }
            else if (this.user.contract_type == 'casual') {
                let cType = 'Casual';
                this.user.cType = cType;
            }
            //  * current date and next date-----
            let current_date = moment__WEBPACK_IMPORTED_MODULE_5__();
            let last_date = moment__WEBPACK_IMPORTED_MODULE_5__(this.user.deadline_date);
            this.date = last_date.diff(current_date, 'days');
            // // * Posted---------
            this.firstDate = moment__WEBPACK_IMPORTED_MODULE_5__((_a = this.user) === null || _a === void 0 ? void 0 : _a.deadline_date);
            this.secondDate = moment__WEBPACK_IMPORTED_MODULE_5__((_b = this.user) === null || _b === void 0 ? void 0 : _b.createdAt);
            this.diffInDays2 = Math.abs((_c = this.firstDate) === null || _c === void 0 ? void 0 : _c.diff(this.secondDate, 'days'));
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
};
ViewJobComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _topgradservice_service__WEBPACK_IMPORTED_MODULE_6__["TopgradserviceService"] }
];
ViewJobComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-job',
        template: _raw_loader_view_job_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_job_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _topgradservice_service__WEBPACK_IMPORTED_MODULE_6__["TopgradserviceService"]])
], ViewJobComponent);



/***/ }),

/***/ "4RoS":
/*!***********************************************************!*\
  !*** ./src/app/views/view-job/view-job-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ViewJobRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewJobRoutingModule", function() { return ViewJobRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-job.component */ "/9A/");




const routes = [
    {
        path: '',
        component: _view_job_component__WEBPACK_IMPORTED_MODULE_3__["ViewJobComponent"]
    }
];
let ViewJobRoutingModule = class ViewJobRoutingModule {
};
ViewJobRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ViewJobRoutingModule);



/***/ }),

/***/ "5T/K":
/*!********************************************************!*\
  !*** ./src/app/views/view-job/view-job.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWpvYi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Mbux":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/view-job/view-job.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"view-job-sec\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"job-description-sec card\">\n                    <div class=\"card-header\">\n                        <strong>View Job Details</strong>\n                    </div>\n\t\t\t\t\t<div class=\"gradPreview_result position-relative\">\n                        <div class=\"preview_wrapper\">\n                        \t<div class=\"prevw_main_ttl d-flex justify-content-between align-items-center\">\n                        \t\t<h4>{{user?.job_title}}</h4>\n                        \t\t<small>Posted:{{diffInDays2}} days ago</small>\n                        \t</div>\n                        \t<div class=\"job_nam_prvw\">\n                        \t\t<div class=\"row\">\n                        \t\t\t<div class=\"col-sm-6\">\n                        \t\t\t\t<div class=\"prvw_jb_ttl\">\n                        \t\t\t\t\t<p>{{user?.company_name}} <small *ngIf=\"remote == true\">remote work possible</small></p>\n                        \t\t\t\t\t<small class=\"prevw_loctn\">{{user?.job_location?.name}}</small>\n                        \t\t\t\t</div>\n                        \t\t\t\t<div class=\"prev_schdul d-flex justify-content-start\">\n                            \t\t\t\t<div class=\"prev_availby\">\n                            \t\t\t\t\t<small>Availability:</small>\n\t\t\t\t\t\t\t\t\t\t\t\t<p>{{user?.cType}}</p>\n                            \t\t\t\t\t\n                            \t\t\t\t</div>\n                            \t\t\t\t<div class=\"prev_availby prev_wrk_typ\">\n                            \t\t\t\t\t<small>Work type:</small>\n                            \t\t\t\t\t<p>{{user?.work_type}}</p>\n                            \t\t\t\t</div>\n                                            <div class=\"prev_availby prev_wrk_typ\">\n                                                <small>Posted By:</small>\n                                                <p>{{user?.user_id?.first_name}} {{user?.user_id?.last_name}}</p>\n                                            </div>\n                        \t\t\t\t</div>\n                        \t\t\t</div>\n                        \t\t\t<div class=\"col-sm-6\">\n                        \t\t\t\t<div class=\"prvw_jb_skills gradKey_prve\">\n                        \t\t\t\t\t<div class=\"typed_text\">\n                        \t\t\t\t\t\t<small>Key Skills:</small>\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let data of user?.skills; let i=index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{data?.name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <span>Figma</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"colr_green\">Adobe Illustrator</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"colr_green\">Adobe Photoshop</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Python</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Figma</span> -->\n\t\t\t\t\t\t\t\t\t\t\t</div>\n                        \t\t\t\t</div>\n                        \t\t\t</div>\n                        \t\t</div>\n                        \t</div>\n                        \t<div class=\"prev_descriptions\">\n                        \t\t<h2 >Description:</h2>\n\t\t\t\t\t\t\t\t<small [innerHTML]=\"user?.job_description\"></small>\n\t\t\t\t\t\t\t\t<!-- {{user?.job_description}} -->\n                        \t\t<!-- <div class=\"compny_info\">\n                        \t\t\t<h6>About the Company</h6>\n                        \t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                        \t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                        \t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                        \t\t\tconsequat.</p>\n                        \t\t</div>\n                        \t\t<div class=\"compny_info\">\n                        \t\t\t<h6>Job Responsibilities</h6>\n                        \t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                        \t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                        \t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                        \t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                        \t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                        \t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n                        \t\t</div>\n                        \t\t<div class=\"compny_info\">\n                        \t\t\t<h6>Qualifications & Experience</h6>\n                        \t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                        \t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                        \t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                        \t\t\tconsequat.</p>\n                        \t\t</div> -->\n                        \t</div>\n                        \t<div class=\"job_nam_prvw prevwDeadline\">\n                        \t\t<div class=\"row\">\n                        \t\t\t<div class=\"col-sm-4\">\n                        \t\t\t\t<div class=\"deadTtl\">\n                        \t\t\t\t\t<small>Application deadline:</small>\n                        \t\t\t\t\t<small class=\"ddl_date\">{{user?.deadline_date |date:'MM/dd/yyyy':'UTC'}}<sub>&ensp;closes in {{date}} days</sub></small>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <small class=\"ddl_date\">{{user?.deadline_date |  date : \"MM/dd/yyyy\"}} <sub>&ensp;closes in 5 days</sub></small> -->\n                        \t\t\t\t</div>\n                        \t\t\t</div>\n                        \t\t\t<div class=\"col-sm-8\">\n                        \t\t\t\t<div class=\"deadTtl\">\n                        \t\t\t\t\t<small>Salary:-</small>\n                        \t\t\t\t\t<small class=\"ddl_date\">${{user?.salary.maximum_sal}} - ${{user?.salary.minimum_sal}} per {{user?.salary.sal_type}}</small>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<!-- <small class=\"ddl_date\" *ngFor=\"let inner of user?.salary | keyvalue\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>{{inner.key}}</span>:-\n\t\t\t\t\t\t\t\t\t\t\t\t<span>{{inner.value}}</span><br>\n\t\t\t\t\t\t\t\t\t\t\t</small> -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- {{user?.salary.maximum_sal}}\n\t\t\t\t\t\t\t\t\t\t\t{{user?.salary.minimum_sal}}\n\t\t\t\t\t\t\t\t\t\t\t{{user?.salary.sal_type}} -->\n                        \t\t\t\t</div>\n                        \t\t\t</div>\n                        \t\t</div>\n                        \t</div>\n                        \t<div class=\"deadTtl\">\n            \t\t\t\t\t<small>Expected start date:</small>\n            \t\t\t\t\t<small class=\"ddl_date\">{{user?.expected_start_date |  date : \"MM/dd/yy\":'UTC'}}</small>\n\t\t\t\t\t\t\t\t\n            \t\t\t\t</div>\n                            <div class=\"edit-btns text-right mt-3\">\n                                <a class=\"btn btn-primary\" routerLink=\"/jobsManagement\">Back</a>\n                            </div>\n                        </div>\n                \t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>");

/***/ }),

/***/ "YpNO":
/*!***************************************************!*\
  !*** ./src/app/views/view-job/view-job.module.ts ***!
  \***************************************************/
/*! exports provided: ViewJobModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewJobModule", function() { return ViewJobModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "fB2i");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-dropzone */ "kvL/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _view_job_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./view-job.component */ "/9A/");
/* harmony import */ var _view_job_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./view-job-routing.module */ "4RoS");




















let ViewJobModule = class ViewJobModule {
};
ViewJobModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _view_job_component__WEBPACK_IMPORTED_MODULE_18__["ViewJobComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__["EditorModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__["NgxDropzoneModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__["EditorModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__["NgxDropzoneModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            // MatFormFieldModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _view_job_routing_module__WEBPACK_IMPORTED_MODULE_19__["ViewJobRoutingModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"]
        ],
        providers: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalRef"]]
    })
], ViewJobModule);



/***/ })

}]);
//# sourceMappingURL=views-view-job-view-job-module-es2015.js.map