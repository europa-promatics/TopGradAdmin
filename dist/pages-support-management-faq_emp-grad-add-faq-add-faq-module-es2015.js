(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-support-management-faq_emp-grad-add-faq-add-faq-module"],{

/***/ "1PmH":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/support-management/faq_emp-grad/add-faq/add-faq-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddFaqRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFaqRoutingModule", function() { return AddFaqRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _add_faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-faq.component */ "jjW2");




const routes = [
    {
        path: '',
        component: _add_faq_component__WEBPACK_IMPORTED_MODULE_3__["AddFaqComponent"]
    }
];
let AddFaqRoutingModule = class AddFaqRoutingModule {
};
AddFaqRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AddFaqRoutingModule);



/***/ }),

/***/ "TQoX":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support-management/faq_emp-grad/add-faq/add-faq.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"home-header-sec\">\n\t<div class=\"container\">\n\t    <div class=\"row\">\n\t      <div class=\"col-md-12\">\n\t      \t<div class=\"card\">\n\t      \t\t<div class=\"manage-home-header\">\n\t      \t\t\t<div class=\"card-header\">\n\t      \t\t\t\t<strong>Add FAQ</strong>\n\t      \t\t\t</div>\n\t      \t\t\t<div class=\"card-body\">\n\t      \t\t\t\t<form [formGroup]=\"inputTitle\">\n\t\t      \t\t\t\t<div class=\"home-mng-form\">\n\t\t      \t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Category</label>\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\"  formControlName=\"category_id\" [(ngModel)]=\"selectedValue\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let row of faq\"  [ngValue]=\"row._id\" [selected]=\"row._id==selectedValue\" >{{row?.name}}</option>\n\t\t\t\t\t\t                <!-- <option>My Account</option>\n\t\t\t\t\t\t                <option>Jobs</option>\n\t\t\t\t\t\t                <option>Permissions & Privacy</option> -->\n\t\t\t\t\t\t            </select>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"(inputTitle.controls.category_id?.touched || inputTitle.controls.category_id?.dirty)\n\t\t\t\t\t\t\t\t\t&& inputTitle.controls.category_id?.invalid && inputTitle.controls.category_id?.errors?.required\" style=\"color:red\" >\n\t\t\t\t\t\t\t\t\t*Please selected Category....\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Title</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Enter Title\" formControlName=\"title\" [(ngModel)]=\"title1\"  >\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"(inputTitle.controls.title?.touched || inputTitle.controls.title?.dirty)\n\t\t\t\t\t\t\t\t\t&& inputTitle.controls.title?.invalid && inputTitle.controls.title?.errors?.required\" style=\"color:red\" >\n\t\t\t\t\t\t\t\t\t*Please enter title here....\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t<textarea formControlName=\"description\" class=\"form-control\" rows=\"4\"></textarea>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"(inputTitle.controls.description?.touched || inputTitle.controls.description?.dirty)\n\t\t\t\t\t\t\t\t\t&& inputTitle.controls.description?.invalid && inputTitle.controls.description?.errors?.required\" style=\"color:red\" >\n\t\t\t\t\t\t\t\t\t*Please enter description here....\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"edit-btns d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t\t<button mat-stroked-button (click)=\"openSnackBar()\"  class=\"btn btn-primary mr-4\" (click)=\"addEditFaq(this.id)\">Save</button>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" routerLink='/employersFaq'>Back</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t      \t\t\t\t</div>\n\t\t      \t\t\t</form>\n\t      \t\t\t</div>\n\t\t      \t</div>\n\t      \t</div>\n\t      </div>\n\t  \t</div>\n\t</div>\n</section>\n\n");

/***/ }),

/***/ "jjW2":
/*!************************************************************************************!*\
  !*** ./src/app/pages/support-management/faq_emp-grad/add-faq/add-faq.component.ts ***!
  \************************************************************************************/
/*! exports provided: AddFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFaqComponent", function() { return AddFaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_faq_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-faq.component.html */ "TQoX");
/* harmony import */ var _add_faq_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-faq.component.scss */ "rBPh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _topgradservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../topgradservice.service */ "DL5e");








let AddFaqComponent = class AddFaqComponent {
    constructor(_snackBar, route, Service, fb, router) {
        this._snackBar = _snackBar;
        this.route = route;
        this.Service = Service;
        this.fb = fb;
        this.router = router;
        this.inputTitle = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            category_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    ngOnInit() {
        this.getFaqCategories();
        this.title = "";
        this.description = "";
        this.faq = "";
        this.title1 = "";
    }
    getFaqCategories() {
        var obj = {
            user_type: 'employer'
        };
        console.log("categories=============", obj);
        this.Service.faqCategories(obj).subscribe(data => {
            console.log("fgdfgfgdfgdfgdfgdfgdfgdgf", data);
            this.faq = data.data;
            console.log("my gaq categories=======>>>", this.faq);
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
    add_faq(id) {
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
            console.log("editingFaq=========>", obj);
            this.Service.addEditFaq(obj).subscribe(res => {
                console.log("Response==========", res);
                this.Service.showMessage({ message: "Added Successfully" });
                this.router.navigate(['/employersFaq']);
            });
        }
    }
};
AddFaqComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _topgradservice_service__WEBPACK_IMPORTED_MODULE_7__["TopgradserviceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AddFaqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-faq',
        template: _raw_loader_add_faq_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_faq_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _topgradservice_service__WEBPACK_IMPORTED_MODULE_7__["TopgradserviceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], AddFaqComponent);



/***/ }),

/***/ "pBKc":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/support-management/faq_emp-grad/add-faq/add-faq.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AddFaqModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFaqModule", function() { return AddFaqModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _add_faq_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-faq-routing.module */ "1PmH");
/* harmony import */ var _add_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-faq.component */ "jjW2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "crmZ");







let AddFaqModule = class AddFaqModule {
};
AddFaqModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _add_faq_component__WEBPACK_IMPORTED_MODULE_4__["AddFaqComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _add_faq_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddFaqRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_6__["EditorModule"]
        ]
    })
], AddFaqModule);



/***/ }),

/***/ "rBPh":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/support-management/faq_emp-grad/add-faq/add-faq.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZmFxLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=pages-support-management-faq_emp-grad-add-faq-add-faq-module-es2015.js.map