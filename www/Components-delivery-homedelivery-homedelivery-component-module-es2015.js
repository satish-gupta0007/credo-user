(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-delivery-homedelivery-homedelivery-component-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/delivery/homedelivery/homedelivery.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/delivery/homedelivery/homedelivery.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Home Delivery</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content fullscreen>\n  <form [formGroup]=\"HomeDeliveryForm\" padding-right>\n    <!-- firstname -->\n    <ion-item>\n      <ion-label position=\"floating\">First Name</ion-label>\n      <ion-input type=\"text\" formControlName=\"firstname\"\n          [ngClass]=\"{'has-error':HomeDeliveryForm.get('firstname').errors && (HomeDeliveryForm.get('firstname').touched || HomeDeliveryForm.get('firstname').dirty)}\">\n      </ion-input>\n      <small\n          *ngIf=\"HomeDeliveryForm.get('firstname').errors && (HomeDeliveryForm.get('firstname').touched || HomeDeliveryForm.get('firstname').dirty)\"\n          class=\"testforvalid\">\n          <small *ngIf=\"HomeDeliveryForm.get('firstname').errors.required\">\n              firstname is required\n          </small>\n          \n      </small>\n  </ion-item>\n\n  <!-- Lastname -->\n    <ion-item>\n      <ion-label position=\"floating\">Last name</ion-label>\n      <ion-input type=\"text\" formControlName=\"lastname\"\n          [ngClass]=\"{'has-error':HomeDeliveryForm.get('lastname').errors && (HomeDeliveryForm.get('lastname').touched || HomeDeliveryForm.get('lastname').dirty)}\">\n      </ion-input>\n      <small\n          *ngIf=\"HomeDeliveryForm.get('lastname').errors && (HomeDeliveryForm.get('lastname').touched || HomeDeliveryForm.get('lastname').dirty)\"\n          class=\"testforvalid\">\n          <small *ngIf=\"HomeDeliveryForm.get('lastname').errors.required\">\n              Lastname is required\n          </small>\n      </small>\n    </ion-item>\n\n    <!-- Phone no -->\n    <ion-item>\n      <ion-label position=\"floating\">Phone</ion-label>\n      <ion-input type=\"text\" formControlName=\"phone\"\n          [ngClass]=\"{'has-error':HomeDeliveryForm.get('phone').errors && (HomeDeliveryForm.get('phone').touched || HomeDeliveryForm.get('phone').dirty)}\">\n      </ion-input>\n      <small\n          *ngIf=\"HomeDeliveryForm.get('phone').errors && (HomeDeliveryForm.get('phone').touched || HomeDeliveryForm.get('phone').dirty)\"\n          class=\"testforvalid\">\n          <small *ngIf=\"HomeDeliveryForm.get('phone').errors.required\">\n              Phon no is required\n          </small>\n      </small>\n    </ion-item>\n\n    <!-- Email -->\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"text\" formControlName=\"email\"\n      [ngClass]=\"{'has-error':HomeDeliveryForm.get('email').errors && (HomeDeliveryForm.get('email').touched || HomeDeliveryForm.get('email').dirty)}\">\n  </ion-input>\n  <small\n      *ngIf=\"HomeDeliveryForm.get('email').errors && (HomeDeliveryForm.get('email').touched || HomeDeliveryForm.get('email').dirty)\"\n      class=\"testforvalid\">\n      <small *ngIf=\"HomeDeliveryForm.get('email').errors.required\">\n         Email is required\n      </small>\n      <small *ngIf=\"HomeDeliveryForm.get('email').errors.email\">\n      Email Should be a valid email\n     </small>\n  </small>\n    </ion-item>\n\n    <!-- Address -->\n    <ion-item>\n      <ion-label position=\"floating\">Address</ion-label>\n      <ion-input type=\"text\" formControlName=\"address\"\n      [ngClass]=\"{'has-error':HomeDeliveryForm.get('address').errors && (HomeDeliveryForm.get('address').touched || HomeDeliveryForm.get('address').dirty)}\">\n  </ion-input>\n  <small\n      *ngIf=\"HomeDeliveryForm.get('address').errors && (HomeDeliveryForm.get('address').touched || HomeDeliveryForm.get('address').dirty)\"\n      class=\"testforvalid\">\n      <small *ngIf=\"HomeDeliveryForm.get('address').errors.required\">\n          Address  is required\n      </small>\n  </small>\n    </ion-item>\n\n    <!-- ZipCode -->\n    <ion-item>\n      <ion-label position=\"floating\">Zip</ion-label>\n      <ion-input type=\"text\" formControlName=\"zip\"\n      [ngClass]=\"{'has-error':HomeDeliveryForm.get('zip').errors && (HomeDeliveryForm.get('zip').touched || HomeDeliveryForm.get('zip').dirty)}\">\n  </ion-input>\n  <small\n      *ngIf=\"HomeDeliveryForm.get('zip').errors && (HomeDeliveryForm.get('zip').touched || HomeDeliveryForm.get('zip').dirty)\"\n      class=\"testforvalid\">\n      <small *ngIf=\"HomeDeliveryForm.get('zip').errors.required\">\n          Zip code is required\n      </small>\n  </small>\n    </ion-item>\n\n    <!-- CityName -->\n    <ion-item>\n      <ion-label position=\"floating\">City</ion-label>\n      <ion-input type=\"text\" formControlName=\"city\"\n      [ngClass]=\"{'has-error':HomeDeliveryForm.get('city').errors && (HomeDeliveryForm.get('city').touched || HomeDeliveryForm.get('city').dirty)}\">\n  </ion-input>\n  <small\n      *ngIf=\"HomeDeliveryForm.get('city').errors && (HomeDeliveryForm.get('city').touched || HomeDeliveryForm.get('city').dirty)\"\n      class=\"testforvalid\">\n      <small *ngIf=\"HomeDeliveryForm.get('city').errors.required\">\n         City is required\n      </small>\n  </small>\n    </ion-item>\n\n    <!-- CountryName -->\n    <ion-item>\n      <ion-label position=\"floating\">Country</ion-label>\n      <ion-input type=\"text\" formControlName=\"country\"\n      [ngClass]=\"{'has-error':HomeDeliveryForm.get('country').errors && (HomeDeliveryForm.get('country').touched || HomeDeliveryForm.get('country').dirty)}\">\n  </ion-input>\n  \n    </ion-item>\n    <small\n    *ngIf=\"HomeDeliveryForm.get('country').errors && (HomeDeliveryForm.get('country').touched || HomeDeliveryForm.get('country').dirty)\"\n    class=\"testforvalid\">\n    <small *ngIf=\"HomeDeliveryForm.get('country').errors.required\">\n        Country  is required\n    </small>\n</small>\n  </form>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\" (click)=\"onSubmit(HomeDeliveryForm.value)\">\n      <ion-button [disabled]=\"!HomeDeliveryForm.valid\">\n        Submit\n        <ion-icon name=\"paper-plane\" slot=\"end\">\n        </ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/Components/delivery/homedelivery/homedelivery.component-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/Components/delivery/homedelivery/homedelivery.component-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: HomeDeliveryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeDeliveryRoutingModule", function() { return HomeDeliveryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _homedelivery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homedelivery.component */ "./src/app/Components/delivery/homedelivery/homedelivery.component.ts");




const routes = [
    {
        path: '',
        component: _homedelivery_component__WEBPACK_IMPORTED_MODULE_3__["HomedeliveryComponent"]
    }
];
let HomeDeliveryRoutingModule = class HomeDeliveryRoutingModule {
};
HomeDeliveryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomeDeliveryRoutingModule);



/***/ }),

/***/ "./src/app/Components/delivery/homedelivery/homedelivery.component.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/delivery/homedelivery/homedelivery.component.module.ts ***!
  \***********************************************************************************/
/*! exports provided: HomeDeliveryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeDeliveryModule", function() { return HomeDeliveryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _homedelivery_component_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homedelivery.component-routing.module */ "./src/app/Components/delivery/homedelivery/homedelivery.component-routing.module.ts");
/* harmony import */ var _homedelivery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homedelivery.component */ "./src/app/Components/delivery/homedelivery/homedelivery.component.ts");







let HomeDeliveryModule = class HomeDeliveryModule {
};
HomeDeliveryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _homedelivery_component_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeDeliveryRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_homedelivery_component__WEBPACK_IMPORTED_MODULE_6__["HomedeliveryComponent"]],
        exports: [],
    })
], HomeDeliveryModule);



/***/ }),

/***/ "./src/app/Components/delivery/homedelivery/homedelivery.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/Components/delivery/homedelivery/homedelivery.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".testforvalid {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9kZWxpdmVyeS9ob21lZGVsaXZlcnkvQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcSW9uaWMgUHJvamVjdHNcXFJlc3RhdXJhbnRBcHAvc3JjXFxhcHBcXENvbXBvbmVudHNcXGRlbGl2ZXJ5XFxob21lZGVsaXZlcnlcXGhvbWVkZWxpdmVyeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9kZWxpdmVyeS9ob21lZGVsaXZlcnkvaG9tZWRlbGl2ZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9kZWxpdmVyeS9ob21lZGVsaXZlcnkvaG9tZWRlbGl2ZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3Rmb3J2YWxpZHtcclxuICBjb2xvcjogcmVkO1xyXG59IiwiLnRlc3Rmb3J2YWxpZCB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/Components/delivery/homedelivery/homedelivery.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Components/delivery/homedelivery/homedelivery.component.ts ***!
  \****************************************************************************/
/*! exports provided: HomedeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomedeliveryComponent", function() { return HomedeliveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let HomedeliveryComponent = class HomedeliveryComponent {
    constructor(fb, toastController, navCtrl) {
        this.fb = fb;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        this.HomeDeliveryForm = this.fb.group({
            firstname: ['Satish', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: ['Gupta', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['9898031481', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['sg95144@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            zip: ['380026', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['Ahmedabad', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country: ['Gujarat', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    onSubmit(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            localStorage.setItem('order', JSON.stringify(data));
            const options = {
                key: 'rzp_test_7uz0fpp603h0XN',
                amount: localStorage.getItem("totalprice") + "00",
                name: 'Merchant Name',
                description: 'Purchase Description',
                prefile: {
                    name: data.firstname + data.lastname,
                    email: data.email
                },
                notes: {
                    address: data.address
                },
                theme: {
                    color: 'green'
                },
                handler: this.paymentResponseHander.bind(this)
            };
            const rzp = new Razorpay(options);
            console.log(rzp);
            rzp.open();
            const toast = yield this.toastController.create({
                color: 'light',
                duration: 2000,
                message: 'You Ordered Successfull!!',
            });
            yield toast.present();
            this.navCtrl.navigateForward('/home');
        });
    }
    paymentResponseHander(response) {
        console.log(response);
        console.log(response.razorpay_payment_id);
    }
};
HomedeliveryComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
HomedeliveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homedelivery',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homedelivery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/delivery/homedelivery/homedelivery.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homedelivery.component.scss */ "./src/app/Components/delivery/homedelivery/homedelivery.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], HomedeliveryComponent);



/***/ })

}]);
//# sourceMappingURL=Components-delivery-homedelivery-homedelivery-component-module-es2015.js.map