(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-profile-profile-component-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/profile/profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/profile/profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content fullscreen>\n    <ion-card>\n      <img src={{record.photoURL}} style=\"width: -webkit-fill-available;\">\n      <ion-card-header class=\"text-size\">\n        <ion-card-title >Name: {{record.displayName}}</ion-card-title>\n        <ion-card-subtitle>Email: {{record.email}}</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n       Email Verified: {{record.emailVerified}}\n      </ion-card-content>\n    <ion-button (click)=\"onLogout()\"  expand=\"full\" shape=\"round\">Logout</ion-button>\n    </ion-card>\n    \n  <!-- </div> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Components/profile/profile.component-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/Components/profile/profile.component-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "./src/app/Components/profile/profile.component.ts");




const routes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]
    }
];
let ProfileRoutingModule = class ProfileRoutingModule {
};
ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileRoutingModule);



/***/ }),

/***/ "./src/app/Components/profile/profile.component.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/Components/profile/profile.component.module.ts ***!
  \****************************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slide/slide.component.module */ "./src/app/Components/slide/slide.component.module.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.component */ "./src/app/Components/profile/profile.component.ts");
/* harmony import */ var _profile_component_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile.component-routing.module */ "./src/app/Components/profile/profile.component-routing.module.ts");








let ProfileModule = class ProfileModule {
};
ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_component_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProfileRoutingModule"],
            _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__["SlideModule"]
        ],
        declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]],
        exports: [],
    })
], ProfileModule);



/***/ }),

/***/ "./src/app/Components/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/Components/profile/profile.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-size {\n  font-size: x-large;\n  font-style: oblique;\n  font-family: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9maWxlL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXElvbmljIFByb2plY3RzXFxSZXN0YXVyYW50QXBwL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1zaXple1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbml0aWFsO1xyXG59IiwiLnRleHQtc2l6ZSB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgZm9udC1mYW1pbHk6IGluaXRpYWw7XG59Il19 */");

/***/ }),

/***/ "./src/app/Components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let ProfileComponent = class ProfileComponent {
    constructor(fire, navctrl) {
        this.fire = fire;
        this.navctrl = navctrl;
    }
    ngOnInit() {
        let t = JSON.parse(localStorage.getItem("response"));
        if (t.additionalUserInfo.providerId == "facebook.com") {
            this.record = JSON.parse(localStorage.getItem("facebook"));
        }
        else {
            this.record = JSON.parse(localStorage.getItem("google"));
        }
    }
    onLogout() {
        this.fire.auth.signOut();
        this.navctrl.navigateForward('welcome');
        localStorage.removeItem("google");
        localStorage.removeItem("facebook");
    }
};
ProfileComponent.ctorParameters = () => [
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/Components/profile/profile.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], ProfileComponent);



/***/ })

}]);
//# sourceMappingURL=Components-profile-profile-component-module-es2015.js.map