(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-contact-us-contact-us-component-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/contact-us/contact-us.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/contact-us/contact-us.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-slide></app-slide>\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Contact-us</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <br>\n    <div class=\"text-render\">\n    <h1>High Street Restaurant</h1>\n    <p>50 Market Street, San Francisco, California 94103, United States</p>\n    <h3>About Us</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    </div>\n    <ion-list>\n      <ion-header class=\"text-render\">Open Hours</ion-header>\n      <ion-item>\n        <ion-label>\n          <h2>Monday</h2>\n          <p>12:30 - 20:30</p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h2>Tuesday</h2>\n          <p>12:30 - 16:30 | 20:30 - 00:30</p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h2>Wednesday</h2>\n          <p>12:30 - 20:30</p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h2>Thursday</h2>\n          <p>12:30 - 21:01</p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <h2>Friday</h2>\n          <p>12:30 - 21:01</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <br>\n    <ion-list>\n      <ion-header class=\"text-render\">Contact Us</ion-header>\n      <ion-item>\n        Call Us\n        <ion-icon name=\"call\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        Send us email \n        <ion-icon name=\"mail\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        Find us / Get directions \n        <ion-icon name=\"map\" slot=\"end\"></ion-icon>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-header class=\"text-render\">Get Social With Us</ion-header>\n      <ion-item>\n        Facebook \n        <ion-icon name=\"logo-facebook\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        Instagram \n        <ion-icon name=\"logo-instagram\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        Twitter \n        <ion-icon name=\"logo-twitter\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        Pinterest \n        <ion-icon name=\"logo-pinterest\" slot=\"end\"></ion-icon>\n      </ion-item>\n    </ion-list>\n    </ion-content>\n</div> ");

/***/ }),

/***/ "./src/app/Components/contact-us/contact-us.component-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Components/contact-us/contact-us.component-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ContactUsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsRoutingModule", function() { return ContactUsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us.component */ "./src/app/Components/contact-us/contact-us.component.ts");




const routes = [
    {
        path: '',
        component: _contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"]
    }
];
let ContactUsRoutingModule = class ContactUsRoutingModule {
};
ContactUsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactUsRoutingModule);



/***/ }),

/***/ "./src/app/Components/contact-us/contact-us.component.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Components/contact-us/contact-us.component.module.ts ***!
  \**********************************************************************/
/*! exports provided: ContactUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModule", function() { return ContactUsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slide/slide.component.module */ "./src/app/Components/slide/slide.component.module.ts");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us.component */ "./src/app/Components/contact-us/contact-us.component.ts");
/* harmony import */ var _contact_us_component_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-us.component-routing.module */ "./src/app/Components/contact-us/contact-us.component-routing.module.ts");








let ContactUsModule = class ContactUsModule {
};
ContactUsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contact_us_component_routing_module__WEBPACK_IMPORTED_MODULE_7__["ContactUsRoutingModule"],
            _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__["SlideModule"]
        ],
        declarations: [_contact_us_component__WEBPACK_IMPORTED_MODULE_6__["ContactUsComponent"]],
        exports: [],
    })
], ContactUsModule);



/***/ }),

/***/ "./src/app/Components/contact-us/contact-us.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Components/contact-us/contact-us.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-render {\n  margin: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9jb250YWN0LXVzL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXElvbmljIFByb2plY3RzXFxSZXN0YXVyYW50QXBwL3NyY1xcYXBwXFxDb21wb25lbnRzXFxjb250YWN0LXVzXFxjb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtcmVuZGVye1xyXG4gICAgbWFyZ2luOiAxOHB4O1xyXG4gICAgLy8gd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59IiwiLnRleHQtcmVuZGVyIHtcbiAgbWFyZ2luOiAxOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/Components/contact-us/contact-us.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/contact-us/contact-us.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactUsComponent = class ContactUsComponent {
    constructor() { }
    ngOnInit() { }
};
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/contact-us/contact-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/Components/contact-us/contact-us.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContactUsComponent);



/***/ })

}]);
//# sourceMappingURL=Components-contact-us-contact-us-component-module-es2015.js.map