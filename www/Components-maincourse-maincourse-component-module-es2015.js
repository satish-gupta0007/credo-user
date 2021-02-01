(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-maincourse-maincourse-component-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/maincourse/maincourse.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/maincourse/maincourse.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-slide ></app-slide>\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Deserts</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-row>\n      <ion-col  *ngFor=\"let list of MainCourseList\" (click)=\"onProduct(list.id,list)\">\n        <ion-card >\n          <img src={{list.img}} />\n          <ion-item>\n            <ion-label>\n              <h5> {{list.title}}</h5>\n              <h6>{{list.price}}</h6>\n            </ion-label>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-content>\n</div>\n");

/***/ }),

/***/ "./src/app/Components/maincourse/maincourse.component-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Components/maincourse/maincourse.component-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: MainCourseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCourseRoutingModule", function() { return MainCourseRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _maincourse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maincourse.component */ "./src/app/Components/maincourse/maincourse.component.ts");




const routes = [
    {
        path: '',
        component: _maincourse_component__WEBPACK_IMPORTED_MODULE_3__["MaincourseComponent"]
    }
];
let MainCourseRoutingModule = class MainCourseRoutingModule {
};
MainCourseRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MainCourseRoutingModule);



/***/ }),

/***/ "./src/app/Components/maincourse/maincourse.component.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Components/maincourse/maincourse.component.module.ts ***!
  \**********************************************************************/
/*! exports provided: MainCourseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCourseModule", function() { return MainCourseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slide/slide.component.module */ "./src/app/Components/slide/slide.component.module.ts");
/* harmony import */ var _maincourse_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maincourse.component */ "./src/app/Components/maincourse/maincourse.component.ts");
/* harmony import */ var _maincourse_component_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./maincourse.component-routing.module */ "./src/app/Components/maincourse/maincourse.component-routing.module.ts");








let MainCourseModule = class MainCourseModule {
};
MainCourseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _maincourse_component_routing_module__WEBPACK_IMPORTED_MODULE_7__["MainCourseRoutingModule"],
            _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__["SlideModule"]
        ],
        declarations: [_maincourse_component__WEBPACK_IMPORTED_MODULE_6__["MaincourseComponent"]],
        exports: [],
    })
], MainCourseModule);



/***/ }),

/***/ "./src/app/Components/maincourse/maincourse.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Components/maincourse/maincourse.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  width: 50%;\n}\n\nion-card {\n  margin: 0px;\n  width: 100%;\n}\n\nimg {\n  border: 0;\n  max-width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9tYWluY291cnNlL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXElvbmljIFByb2plY3RzXFxSZXN0YXVyYW50QXBwL3NyY1xcYXBwXFxDb21wb25lbnRzXFxtYWluY291cnNlXFxtYWluY291cnNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL21haW5jb3Vyc2UvbWFpbmNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbWFpbmNvdXJzZS9tYWluY291cnNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaW1ne1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxufSIsImlvbi1jb2wge1xuICB3aWR0aDogNTAlO1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW1nIHtcbiAgYm9yZGVyOiAwO1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/Components/maincourse/maincourse.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/maincourse/maincourse.component.ts ***!
  \***************************************************************/
/*! exports provided: MaincourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaincourseComponent", function() { return MaincourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/categories.service */ "./src/app/shared/categories.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MaincourseComponent = class MaincourseComponent {
    constructor(category, route) {
        this.category = category;
        this.route = route;
        this.MainCourseList = [];
    }
    ngOnInit() {
        this.category.getMainCourse().subscribe((result) => {
            this.MainCourseList = result.maincourse;
        });
    }
    onProduct(id, data) {
        this.route.navigate(['/products', id, data]);
    }
};
MaincourseComponent.ctorParameters = () => [
    { type: src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MaincourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-maincourse',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./maincourse.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/maincourse/maincourse.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./maincourse.component.scss */ "./src/app/Components/maincourse/maincourse.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], MaincourseComponent);



/***/ })

}]);
//# sourceMappingURL=Components-maincourse-maincourse-component-module-es2015.js.map