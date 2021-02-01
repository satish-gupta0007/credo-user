(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-drupal-drupal-details-drupal-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/drupal/drupal-details/drupal-details.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/drupal/drupal-details/drupal-details.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n \n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{DrupalDataList.title}}</ion-title>\n  </ion-toolbar>\n  \n</ion-header>\n<ion-content>\n  <img src={{DrupalDataList.img}}>\n\n<div class=\"text-format\">\n  <div>\n    <h2>{{DrupalDataList.title}}</h2>\n    <p>{{DrupalDataList.description1}}</p>\n    <p>{{DrupalDataList.description2}}</p>\n    <p>{{DrupalDataList.description3}}</p>\n  </div>\n</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/Components/drupal/drupal-details/drupal-details-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/drupal/drupal-details/drupal-details-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DrupalDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrupalDetailsRoutingModule", function() { return DrupalDetailsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _drupal_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drupal-details.component */ "./src/app/Components/drupal/drupal-details/drupal-details.component.ts");




const routes = [
    {
        path: '',
        component: _drupal_details_component__WEBPACK_IMPORTED_MODULE_3__["DrupalDetailsComponent"],
    }
];
let DrupalDetailsRoutingModule = class DrupalDetailsRoutingModule {
};
DrupalDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DrupalDetailsRoutingModule);



/***/ }),

/***/ "./src/app/Components/drupal/drupal-details/drupal-details.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/Components/drupal/drupal-details/drupal-details.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-format {\n  margin: 18px;\n  word-break: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9kcnVwYWwvZHJ1cGFsLWRldGFpbHMvQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcSW9uaWMgUHJvamVjdHNcXFJlc3RhdXJhbnRBcHAvc3JjXFxhcHBcXENvbXBvbmVudHNcXGRydXBhbFxcZHJ1cGFsLWRldGFpbHNcXGRydXBhbC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL2RydXBhbC9kcnVwYWwtZGV0YWlscy9kcnVwYWwtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9kcnVwYWwvZHJ1cGFsLWRldGFpbHMvZHJ1cGFsLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1mb3JtYXQge1xyXG4gICAgbWFyZ2luOiAxOHB4O1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG4iLCIudGV4dC1mb3JtYXQge1xuICBtYXJnaW46IDE4cHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/Components/drupal/drupal-details/drupal-details.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Components/drupal/drupal-details/drupal-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: DrupalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrupalDetailsComponent", function() { return DrupalDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/categories.service */ "./src/app/shared/categories.service.ts");




let DrupalDetailsComponent = class DrupalDetailsComponent {
    constructor(activate, category) {
        this.activate = activate;
        this.category = category;
        this.DrupalDataList = [];
        let sub = this.activate.params.subscribe(params => {
            this.id = params['id'];
            this.DrupalDataList = params;
        });
    }
    ngOnInit() {
    }
};
DrupalDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] }
];
DrupalDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-drupal-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drupal-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/drupal/drupal-details/drupal-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drupal-details.component.scss */ "./src/app/Components/drupal/drupal-details/drupal-details.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]])
], DrupalDetailsComponent);



/***/ }),

/***/ "./src/app/Components/drupal/drupal-details/drupal-details.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Components/drupal/drupal-details/drupal-details.module.ts ***!
  \***************************************************************************/
/*! exports provided: DrupalDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrupalDetailsModule", function() { return DrupalDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _drupal_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drupal-details-routing.module */ "./src/app/Components/drupal/drupal-details/drupal-details-routing.module.ts");
/* harmony import */ var _drupal_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drupal-details.component */ "./src/app/Components/drupal/drupal-details/drupal-details.component.ts");







let DrupalDetailsModule = class DrupalDetailsModule {
};
DrupalDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _drupal_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DrupalDetailsRoutingModule"],
        ],
        declarations: [_drupal_details_component__WEBPACK_IMPORTED_MODULE_6__["DrupalDetailsComponent"]],
        exports: [],
    })
], DrupalDetailsModule);



/***/ })

}]);
//# sourceMappingURL=Components-drupal-drupal-details-drupal-details-module-es2015.js.map