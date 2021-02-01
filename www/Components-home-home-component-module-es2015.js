(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-home-home-component-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-slide></app-slide>\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button style=\"color: black;\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Home</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content class=\"ios overscroll hydrated\">\n    <div>\n      \n      <ion-slides pager=\"true\" [options]=\"slideOpts\">\n\n        <ion-slide>\n          <div class=\"slide\">\n            <img src=\"../../../assets/images/home/c1.png\" >\n            <div class=\"home-title\">\n              Crawfish\n            </div>\n          </div>\n        </ion-slide>\n\n        <ion-slide>\n          <img src=\"../../../assets/images/home/c2.png\" >\n          <div class=\"home-title\">\n            Chicken and Onion Mix\n          </div>\n        </ion-slide>\n\n        <ion-slide>\n          <img src=\"../../../assets/images/home/c3.png\">\n          <div class=\"home-title\">\n            Shrimp Rolls\n          </div>\n        </ion-slide>\n\n      </ion-slides>\n    </div>\n    <ion-row>\n      <ion-col>\n        <ion-card style=\"margin: 0px;\" (click)=\"onAppitizer()\">\n          <img src=\"../../../assets/images/appetizers/cat1.png\">\n          <ion-card-content>\n            <h5> Appetizers </h5>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card style=\"margin: 0px;\" (click)=\"onSalads()\">\n          <img src=\"../../../assets/images/salads/c1.png\">\n          <ion-card-content>\n            <h5>Salads</h5>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-card style=\"margin: 0px;\" (click)=\"onSides()\">\n          <img src=\"../../../assets/images/sides/cat-b-thumb.png\">\n          <ion-card-content>\n            <h5> Sides </h5>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card style=\"margin: 0px;\" (click)=\"onDeserts()\">\n          <img src=\"../../../assets/images/deserts/d1.png\">\n          <ion-card-content>\n            <h5>Deserts</h5>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col style=\"width:100%\">\n        <ion-card style=\"    width: 100%;\n      margin: 0;\" (click)=\"onMaincourse()\">\n          <img src=\"../../../assets/images/main-course/cat-d-thumb.png\">\n          <ion-card-content>\n            <h5> Main Course </h5>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <div>\n      <ion-card style=\"margin: 0px;\">\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-item (click)=\"onContact()\">\n                <ion-icon name=\"information-circle\"></ion-icon>\n                Contact us\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item (click)=\"onMap()\">\n                <ion-icon name=\"map\"></ion-icon>\n                Map\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </div>\n  </ion-content>\n</div>");

/***/ }),

/***/ "./src/app/Components/home/home.component-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/Components/home/home.component-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/Components/home/home.component.ts");




const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/Components/home/home.component.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/Components/home/home.component.module.ts ***!
  \**********************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_component_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component-routing.module */ "./src/app/Components/home/home.component-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/Components/home/home.component.ts");
/* harmony import */ var _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../slide/slide.component.module */ "./src/app/Components/slide/slide.component.module.ts");








let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_component_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"],
            _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_7__["SlideModule"],
            _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_7__["SlideModule"],
        ],
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]],
        exports: [],
    })
], HomeModule);



/***/ }),

/***/ "./src/app/Components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/Components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home-title {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n  border: 0;\n  background: rgba(255, 255, 255, 0.6);\n  padding: 10px;\n  text-align: left;\n  height: 60px;\n}\n\n.swiper-pagination-bullet {\n  --bullet-background: #37469B;\n  margin: 0 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXElvbmljIFByb2plY3RzXFxSZXN0YXVyYW50QXBwL3NyY1xcYXBwXFxDb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS10aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogIzM3NDY5QjtcclxuICAgIG1hcmdpbjogMCA0cHg7O1xyXG59IiwiLmhvbWUtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6ICMzNzQ2OUI7XG4gIG1hcmdpbjogMCA0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/Components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let HomeComponent = class HomeComponent {
    constructor(navCtrl, menuController) {
        this.navCtrl = navCtrl;
        this.menuController = menuController;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
    }
    ngOnInit() {
    }
    onAppitizer() {
        this.navCtrl.navigateForward('/appetizers');
    }
    onSalads() {
        this.navCtrl.navigateForward('/salads');
    }
    onSides() {
        this.navCtrl.navigateForward('/sides');
    }
    onDeserts() {
        this.navCtrl.navigateForward('/deserts');
    }
    onMaincourse() {
        this.navCtrl.navigateForward('/main-course');
    }
    onContact() {
        this.navCtrl.navigateForward('/contact-us');
    }
    onMap() {
        this.navCtrl.navigateForward('/map');
    }
};
HomeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/Components/home/home.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], HomeComponent);



/***/ })

}]);
//# sourceMappingURL=Components-home-home-component-module-es2015.js.map