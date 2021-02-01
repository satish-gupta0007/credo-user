(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-categories-categories-component-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/categories/categories.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/categories/categories.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-slide></app-slide>\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Categories</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content >\n    <ion-list>\n\n      <ion-item (click)=\"onAppetizers()\">\n        <ion-thumbnail  slot=\"start\">\n          <img src=\"./../../../assets/images/appetizers/cat1.png\">\n        </ion-thumbnail >\n        <ion-label>\n          <h2>Appetizers</h2>\n          <h3>This is for the Appetizers</h3>\n          <!-- <p>Listen, I've had a pretty messed up day...</p> -->\n        </ion-label>\n      </ion-item>\n      \n      <ion-item (click)=\"onSalads()\">\n        <ion-thumbnail  slot=\"start\">\n          <img src=\"./../../../assets/images/salads/c1.png\">\n        </ion-thumbnail >\n        <ion-label>\n          <h2>Salads</h2>\n          <h3>This is for the SaladsF</h3>\n          <!-- <p>Listen, I've had a pretty messed up day...</p> -->\n        </ion-label>\n      </ion-item>\n      \n      <ion-item (click)=\"onSalads()\">\n        <ion-thumbnail  slot=\"start\">\n          <img src=\"./../../../assets/images/sides/cat-b-thumb.png\">\n        </ion-thumbnail >\n        <ion-label>\n          <h2>Sides</h2>\n          <h3>This is for the Sides</h3>\n          <!-- <p>Listen, I've had a pretty messed up day...</p> -->\n        </ion-label>\n      </ion-item>\n      \n      <ion-item (click)=\"onDeserts()\">\n        <ion-thumbnail  slot=\"start\">\n          <img src=\"./../../../assets/images/deserts/d1.png\">\n        </ion-thumbnail >\n        <ion-label>\n          <h2>Deserts</h2>\n          <h3>This is for the Deserts</h3>\n          <!-- <p>Listen, I've had a pretty messed up day...</p> -->\n        </ion-label>\n      </ion-item >\n      \n      <ion-item (click)=\"onMainCourse()\">\n        <ion-thumbnail  slot=\"start\">\n          <img src=\"./../../../assets/images/main-course/cat-d-thumb.png\">\n        </ion-thumbnail >\n        <ion-label>\n          <h2>Main Course</h2>\n          <h3>This is for the Main Course</h3>\n          <!-- <p>Listen, I've had a pretty messed up day...</p> -->\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</div>");

/***/ }),

/***/ "./src/app/Components/categories/categories.component-routing.moule.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/categories/categories.component-routing.moule.ts ***!
  \*****************************************************************************/
/*! exports provided: CategoriesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesRoutingModule", function() { return CategoriesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.component */ "./src/app/Components/categories/categories.component.ts");




const routes = [
    {
        path: '',
        component: _categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"]
    }
];
let CategoriesRoutingModule = class CategoriesRoutingModule {
};
CategoriesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriesRoutingModule);



/***/ }),

/***/ "./src/app/Components/categories/categories.component.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Components/categories/categories.component.module.ts ***!
  \**********************************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _categories_component_routing_moule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories.component-routing.moule */ "./src/app/Components/categories/categories.component-routing.moule.ts");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.component */ "./src/app/Components/categories/categories.component.ts");
/* harmony import */ var _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../slide/slide.component.module */ "./src/app/Components/slide/slide.component.module.ts");








let CategoriesModule = class CategoriesModule {
};
CategoriesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _categories_component_routing_moule__WEBPACK_IMPORTED_MODULE_5__["CategoriesRoutingModule"],
            _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_7__["SlideModule"]
        ],
        declarations: [_categories_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesComponent"]],
        exports: [],
    })
], CategoriesModule);



/***/ }),

/***/ "./src/app/Components/categories/categories.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Components/categories/categories.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/Components/categories/categories.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/categories/categories.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/categories.service */ "./src/app/shared/categories.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let CategoriesComponent = class CategoriesComponent {
    constructor(category, navCtrl) {
        this.category = category;
        this.navCtrl = navCtrl;
        this.CategoryList = [];
    }
    ngOnInit() {
        this.category.getDatas().subscribe((data) => {
            this.CategoryList = data;
        });
    }
    onAppetizers() {
        this.navCtrl.navigateForward('/appetizers');
    }
    onSalads() {
        this.navCtrl.navigateForward('/salads');
    }
    onMainCourse() {
        this.navCtrl.navigateForward('/main-course');
    }
    onDeserts() {
        this.navCtrl.navigateForward('/deserts');
    }
    onSides() {
        this.navCtrl.navigateForward('/sides');
    }
};
CategoriesComponent.ctorParameters = () => [
    { type: src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/categories/categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories.component.scss */ "./src/app/Components/categories/categories.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], CategoriesComponent);



/***/ })

}]);
//# sourceMappingURL=Components-categories-categories-component-module-es2015.js.map