(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-delivery-delivery-component-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/delivery/delivery.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/delivery/delivery.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Delivery method</ion-title>\n  </ion-toolbar>\n  \n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item (click)=\"onHomeDelivery()\">\n      <ion-icon slot=\"start\" name=\"home\"></ion-icon>\n      <ion-label>\n        <h2>Home Delivery</h2>\n        <p>Choose for receiving your order at home.</p>\n      </ion-label>\n    </ion-item>\n    <ion-item (click)=\"onTakeAway()\">\n      <ion-icon slot=\"start\" name=\"basket\"></ion-icon>\n      <ion-label>\n        <h2>Take away</h2>\n        <p>Choose for picking up your order from our store.</p>\n      </ion-label>\n    </ion-item>\n    <ion-item (click)=\"onDineIn()\">\n      <ion-icon slot=\"start\" name=\"restaurant\"></ion-icon>\n      <ion-label>\n        <h2>Dine in</h2>\n        <p>Choose for being served in the store.</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/Components/delivery/delivery.component-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Components/delivery/delivery.component-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: DeliveryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryRoutingModule", function() { return DeliveryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _delivery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delivery.component */ "./src/app/Components/delivery/delivery.component.ts");




const routes = [
    {
        path: '',
        component: _delivery_component__WEBPACK_IMPORTED_MODULE_3__["DeliveryComponent"]
    }
];
let DeliveryRoutingModule = class DeliveryRoutingModule {
};
DeliveryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeliveryRoutingModule);



/***/ }),

/***/ "./src/app/Components/delivery/delivery.component.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/Components/delivery/delivery.component.module.ts ***!
  \******************************************************************/
/*! exports provided: DeliveryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryModule", function() { return DeliveryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slide/slide.component.module */ "./src/app/Components/slide/slide.component.module.ts");
/* harmony import */ var _delivery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delivery.component */ "./src/app/Components/delivery/delivery.component.ts");
/* harmony import */ var _delivery_component_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delivery.component-routing.module */ "./src/app/Components/delivery/delivery.component-routing.module.ts");








let DeliveryModule = class DeliveryModule {
};
DeliveryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _delivery_component_routing_module__WEBPACK_IMPORTED_MODULE_7__["DeliveryRoutingModule"],
            _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__["SlideModule"]
        ],
        declarations: [_delivery_component__WEBPACK_IMPORTED_MODULE_6__["DeliveryComponent"]],
        exports: [],
    })
], DeliveryModule);



/***/ }),

/***/ "./src/app/Components/delivery/delivery.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/Components/delivery/delivery.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZGVsaXZlcnkvZGVsaXZlcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Components/delivery/delivery.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/delivery/delivery.component.ts ***!
  \***********************************************************/
/*! exports provided: DeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryComponent", function() { return DeliveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let DeliveryComponent = class DeliveryComponent {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() { }
    onHomeDelivery() {
        this.navCtrl.navigateForward('/checkout-home');
    }
    onTakeAway() {
        this.navCtrl.navigateForward('/checkout-takeaway');
    }
    onDineIn() {
        this.navCtrl.navigateForward('/checkout-dinein');
    }
};
DeliveryComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
DeliveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delivery',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delivery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/delivery/delivery.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delivery.component.scss */ "./src/app/Components/delivery/delivery.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], DeliveryComponent);



/***/ })

}]);
//# sourceMappingURL=Components-delivery-delivery-component-module-es2015.js.map