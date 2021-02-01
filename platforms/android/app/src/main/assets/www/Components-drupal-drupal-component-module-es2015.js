(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-drupal-drupal-component-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/drupal/drupal.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/drupal/drupal.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-slide ></app-slide>\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Drupal</ion-title>\n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n  <ion-card *ngFor=\"let list of DrupalDataList\" (click)=\"onDrupaldetails(list.id,list)\">\n    <img src={{list.img}}>\n    <ion-card-content>\n      <h2>{{list.title}}</h2>\n      <p>{{list.description}}</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n</div>");

/***/ }),

/***/ "./src/app/Components/drupal/drupal.component-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Components/drupal/drupal.component-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: DrupalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrupalRoutingModule", function() { return DrupalRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _drupal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drupal.component */ "./src/app/Components/drupal/drupal.component.ts");




const routes = [
    {
        path: '',
        component: _drupal_component__WEBPACK_IMPORTED_MODULE_3__["DrupalComponent"],
    }
];
let DrupalRoutingModule = class DrupalRoutingModule {
};
DrupalRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DrupalRoutingModule);



/***/ }),

/***/ "./src/app/Components/drupal/drupal.component.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/Components/drupal/drupal.component.module.ts ***!
  \**************************************************************/
/*! exports provided: DrupalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrupalModule", function() { return DrupalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slide/slide.component.module */ "./src/app/Components/slide/slide.component.module.ts");
/* harmony import */ var _drupal_component_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drupal.component-routing.module */ "./src/app/Components/drupal/drupal.component-routing.module.ts");
/* harmony import */ var _drupal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drupal.component */ "./src/app/Components/drupal/drupal.component.ts");








let DrupalModule = class DrupalModule {
};
DrupalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _drupal_component_routing_module__WEBPACK_IMPORTED_MODULE_6__["DrupalRoutingModule"],
            _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__["SlideModule"]
        ],
        declarations: [_drupal_component__WEBPACK_IMPORTED_MODULE_7__["DrupalComponent"]],
        exports: [],
    })
], DrupalModule);



/***/ }),

/***/ "./src/app/Components/drupal/drupal.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Components/drupal/drupal.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZHJ1cGFsL2RydXBhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/Components/drupal/drupal.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/drupal/drupal.component.ts ***!
  \*******************************************************/
/*! exports provided: DrupalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrupalComponent", function() { return DrupalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/categories.service */ "./src/app/shared/categories.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DrupalComponent = class DrupalComponent {
    constructor(category, router) {
        this.category = category;
        this.router = router;
        this.DrupalDataList = [];
    }
    ngOnInit() {
        this.category.getDrupaldata().subscribe((result) => {
            this.DrupalDataList = result.drupal;
        });
    }
    onDrupaldetails(id, data) {
        this.router.navigate(['/drupal-details', id, data]);
    }
};
DrupalComponent.ctorParameters = () => [
    { type: src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DrupalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-drupal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drupal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/drupal/drupal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drupal.component.scss */ "./src/app/Components/drupal/drupal.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], DrupalComponent);



/***/ })

}]);
//# sourceMappingURL=Components-drupal-drupal-component-module-es2015.js.map