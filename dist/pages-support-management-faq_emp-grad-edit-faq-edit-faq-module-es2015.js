(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-support-management-faq_emp-grad-edit-faq-edit-faq-module"],{

/***/ "Krsj":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/support-management/faq_emp-grad/edit-faq/edit-faq-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: EditFaqRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFaqRoutingModule", function() { return EditFaqRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _edit_faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-faq.component */ "u7tu");




const routes = [
    {
        path: '',
        component: _edit_faq_component__WEBPACK_IMPORTED_MODULE_3__["EditFaqComponent"]
    }
];
let EditFaqRoutingModule = class EditFaqRoutingModule {
};
EditFaqRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EditFaqRoutingModule);



/***/ }),

/***/ "Q8q4":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/support-management/faq_emp-grad/edit-faq/edit-faq.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWZhcS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "R3CR":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/support-management/faq_emp-grad/edit-faq/edit-faq.module.ts ***!
  \***********************************************************************************/
/*! exports provided: EditFaqModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFaqModule", function() { return EditFaqModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _edit_faq_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-faq-routing.module */ "Krsj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _edit_faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-faq.component */ "u7tu");






let EditFaqModule = class EditFaqModule {
};
EditFaqModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_edit_faq_component__WEBPACK_IMPORTED_MODULE_5__["EditFaqComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _edit_faq_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditFaqRoutingModule"]
        ]
    })
], EditFaqModule);



/***/ }),

/***/ "TMif":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support-management/faq_emp-grad/edit-faq/edit-faq.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"home-header-sec\">\n\t<div class=\"container\">\n\t    <div class=\"row\">\n\t      <div class=\"col-md-12\">\n\t      \t<div class=\"card\">\n\t      \t\t<div class=\"manage-home-header\">\n\t      \t\t\t<div class=\"card-header\">\n\t      \t\t\t\t<strong>Employer Edit FAQ</strong>\n\t      \t\t\t</div>\n\t      \t\t\t<div class=\"card-body\">\n\t      \t\t\t\t<form [formGroup]=\"inputTitle\">\n\t\t      \t\t\t\t<div class=\"home-mng-form\">\n\t\t      \t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Category</label>\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\"  formControlName=\"category_id\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let row of faq\" [ngValue]=\"row._id\" [selected]=\"row._id==selectedValue\" >{{row?.name}}</option>\n\t\t\t\t\t\t                <!-- <option>My Account</option>\n\t\t\t\t\t\t                <option>Jobs</option>\n\t\t\t\t\t\t                <option>Permissions & Privacy</option> -->\n\t\t\t\t\t\t            </select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Title</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Enter Title\" formControlName=\"title\" >\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"( inputTitle.controls.title?.dirty)\n\t\t\t\t\t\t\t\t\t && inputTitle.controls.title?.invalid && inputTitle.controls.title?.errors?.required\" style=\"color:red\" >\n\t\t\t\t\t\t\t\t\t*Please enter title here....\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t<textarea formControlName=\"description\" class=\"form-control\" ></textarea>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"(inputTitle.controls.description?.touched || inputTitle.controls.description?.dirty)\n\t\t\t\t\t\t\t\t\t&& inputTitle.controls.description?.invalid && inputTitle.controls.description?.errors?.required\" style=\"color:red\" >\n\t\t\t\t\t\t\t\t\t*Please enter description here....\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t<button mat-stroked-button (click)=\"openSnackBar()\"  class=\"btn btn-primary mr-4\" (click)=\"addEditFaq(this.id)\">Save</button>\n\t\t\t\t\t\t\t\t\t<button  class=\"btn btn-primary\"  routerLink='/employersFaq'>Back</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t</div>\n\t\t      \t\t\t</form>\n\t      \t\t\t</div>\n\t\t      \t</div>\n\t      \t</div>\n\t      </div>\n\t  \t</div>\n\t</div>\n</section>\n\n");

/***/ }),

/***/ "u7tu":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/support-management/faq_emp-grad/edit-faq/edit-faq.component.ts ***!
  \**************************************************************************************/
/*! exports provided: EditFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFaqComponent", function() { return EditFaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_faq_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-faq.component.html */ "TMif");
/* harmony import */ var _edit_faq_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-faq.component.scss */ "Q8q4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _topgradservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../topgradservice.service */ "DL5e");








let EditFaqComponent = class EditFaqComponent {
    constructor(_snackBar, route, Service, fb, router) {
        this._snackBar = _snackBar;
        this.route = route;
        this.Service = Service;
        this.fb = fb;
        this.router = router;
        this.faq = [];
        this.title1 = [];
        this.inputTitle = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            category_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    ngOnInit() {
        this.faq_id();
        this.getFaqCategories();
        this.title = "";
        this.description = "";
        this.faq = "";
        this.title1 = "";
    }
    getFaqCategories() {
        var data = {
            user_type: 'employer'
        };
        console.log("categories=============", data);
        this.Service.faqCategories(data).subscribe(data => {
            console.log("fgdfgfgdfgdfgdfgdfgdfgdgf", data);
            this.faq = data.data;
            console.log("My faq array==========>>", this.faq);
            console.log("formmmmmmmmmmmm", this.inputTitle);
        }, err => {
            console.log(err.status);
            if (err.status >= 404) {
                console.log('Some error occured');
            }
            else {
                this.toastr.error('Some error occured, please try again!!', 'Error');
            }
        });
    }
    faq_id() {
        var obj = {
            faq_id: this.route.snapshot.paramMap.get('id')
        };
        console.log("onnnn", obj);
        this.Service.faqDetail(obj).subscribe(data => {
            console.log("main data for users is ssssssssssssssssssss====", data);
            this.user = data.data;
            this.inputTitle.patchValue({
                category_id: this.user.category_id.name,
                title: this.user.title,
                description: this.user.description
            });
            // this.ngOnInit()
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
    edit_faq(id) {
        console.log("", id);
        this.id = id;
    }
    openSnackBar() {
        this.id = this.id;
    }
    addEditFaq(id) {
        console.log("formmmmmmmmmmmm", this.inputTitle);
        if (this.inputTitle.invalid) {
            this.inputTitle.markAllAsTouched();
        }
        else {
            var obj = {
                faq_id: this.route.snapshot.paramMap.get('id'),
                category_id: this.inputTitle.controls.category_id.value,
                title: this.inputTitle.controls.title.value,
                description: this.inputTitle.controls.description.value,
            };
            console.log("AddingFaq=========>", obj);
            this.Service.addEditFaq(obj).subscribe(res => {
                console.log("Response==========", res);
                this.Service.showMessage({ message: "Edit Successfully" });
                this.router.navigate(['/employersFaq']);
            });
        }
    }
};
EditFaqComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _topgradservice_service__WEBPACK_IMPORTED_MODULE_7__["TopgradserviceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
EditFaqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-faq',
        template: _raw_loader_edit_faq_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_faq_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _topgradservice_service__WEBPACK_IMPORTED_MODULE_7__["TopgradserviceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], EditFaqComponent);



/***/ })

}]);
//# sourceMappingURL=pages-support-management-faq_emp-grad-edit-faq-edit-faq-module-es2015.js.map