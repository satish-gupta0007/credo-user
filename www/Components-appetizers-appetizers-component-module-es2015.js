(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-appetizers-appetizers-component-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/appetizers/appetizers.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/appetizers/appetizers.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-slide></app-slide>\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Appetizers</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-row>\n      <ion-col *ngFor=\"let list of ApptizersList\" (click)=\"onAppetizers(list.id,list)\">\n        <ion-card>\n          <img src={{list.img}} />\n          <ion-item>\n            <ion-label>\n              <h5> {{list.title}}</h5>\n              <h6>{{list.price}}</h6>\n            </ion-label>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-content>\n</div>");

/***/ }),

/***/ "./src/app/Components/appetizers/appetizers.component-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Components/appetizers/appetizers.component-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: AppetizersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppetizersRoutingModule", function() { return AppetizersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _appetizers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appetizers.component */ "./src/app/Components/appetizers/appetizers.component.ts");




const routes = [
    {
        path: '',
        component: _appetizers_component__WEBPACK_IMPORTED_MODULE_3__["AppetizersComponent"]
    }
];
let AppetizersRoutingModule = class AppetizersRoutingModule {
};
AppetizersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppetizersRoutingModule);



/***/ }),

/***/ "./src/app/Components/appetizers/appetizers.component.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Components/appetizers/appetizers.component.module.ts ***!
  \**********************************************************************/
/*! exports provided: AppetizersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppetizersModule", function() { return AppetizersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slide/slide.component.module */ "./src/app/Components/slide/slide.component.module.ts");
/* harmony import */ var _appetizers_component_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appetizers.component-routing.module */ "./src/app/Components/appetizers/appetizers.component-routing.module.ts");
/* harmony import */ var _appetizers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./appetizers.component */ "./src/app/Components/appetizers/appetizers.component.ts");








let AppetizersModule = class AppetizersModule {
};
AppetizersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _appetizers_component_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppetizersRoutingModule"],
            _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__["SlideModule"]
        ],
        declarations: [_appetizers_component__WEBPACK_IMPORTED_MODULE_7__["AppetizersComponent"]],
        exports: [],
    })
], AppetizersModule);



/***/ }),

/***/ "./src/app/Components/appetizers/appetizers.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Components/appetizers/appetizers.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  width: 50%;\n}\n\nion-card {\n  margin: 0px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9hcHBldGl6ZXJzL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXElvbmljIFByb2plY3RzXFxSZXN0YXVyYW50QXBwL3NyY1xcYXBwXFxDb21wb25lbnRzXFxhcHBldGl6ZXJzXFxhcHBldGl6ZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL2FwcGV0aXplcnMvYXBwZXRpemVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2FwcGV0aXplcnMvYXBwZXRpemVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsImlvbi1jb2wge1xuICB3aWR0aDogNTAlO1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Components/appetizers/appetizers.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/appetizers/appetizers.component.ts ***!
  \***************************************************************/
/*! exports provided: AppetizersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppetizersComponent", function() { return AppetizersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/categories.service */ "./src/app/shared/categories.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppetizersComponent = class AppetizersComponent {
    constructor(category, route) {
        this.category = category;
        this.route = route;
        this.ApptizersList = [];
    }
    ngOnInit() {
        this.category.getAppetizers().subscribe((data) => {
            this.ApptizersList = data.appetizers;
        });
    }
    onAppetizers(id, list) {
        this.route.navigate(['/products', id, list]);
    }
};
AppetizersComponent.ctorParameters = () => [
    { type: src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AppetizersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appetizers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./appetizers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/appetizers/appetizers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./appetizers.component.scss */ "./src/app/Components/appetizers/appetizers.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AppetizersComponent);



/***/ })

}]);
//# sourceMappingURL=Components-appetizers-appetizers-component-module-es2015.js.map