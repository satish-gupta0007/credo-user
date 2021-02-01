(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-articles-news-news-component-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/articles/news/news.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/articles/news/news.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>News</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content>\n  <img src={{NewsList.img}}>\n  <div class=\"text-format\">\n    <div>\n      <h2>{{NewsList.title}}</h2>\n      <p>{{NewsList.description}}</p>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/Components/articles/news/news.component-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Components/articles/news/news.component-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: NewsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsRoutingModule", function() { return NewsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news.component */ "./src/app/Components/articles/news/news.component.ts");




const routes = [
    {
        path: '',
        component: _news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"]
    }
];
let NewsRoutingModule = class NewsRoutingModule {
};
NewsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewsRoutingModule);



/***/ }),

/***/ "./src/app/Components/articles/news/news.component.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Components/articles/news/news.component.module.ts ***!
  \*******************************************************************/
/*! exports provided: NewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _news_component_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news.component-routing.module */ "./src/app/Components/articles/news/news.component-routing.module.ts");
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news.component */ "./src/app/Components/articles/news/news.component.ts");
/* harmony import */ var _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../slide/slide.component.module */ "./src/app/Components/slide/slide.component.module.ts");








let NewsModule = class NewsModule {
};
NewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _news_component_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewsRoutingModule"],
            _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_7__["SlideModule"]
        ],
        declarations: [_news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"]],
        exports: [],
    })
], NewsModule);



/***/ }),

/***/ "./src/app/Components/articles/news/news.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/Components/articles/news/news.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-format {\n  margin: 18px;\n  word-break: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9hcnRpY2xlcy9uZXdzL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXElvbmljIFByb2plY3RzXFxSZXN0YXVyYW50QXBwL3NyY1xcYXBwXFxDb21wb25lbnRzXFxhcnRpY2xlc1xcbmV3c1xcbmV3cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9hcnRpY2xlcy9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvYXJ0aWNsZXMvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtZm9ybWF0IHtcclxuICAgIG1hcmdpbjogMThweDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn0iLCIudGV4dC1mb3JtYXQge1xuICBtYXJnaW46IDE4cHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/Components/articles/news/news.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Components/articles/news/news.component.ts ***!
  \************************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/categories.service */ "./src/app/shared/categories.service.ts");




let NewsComponent = class NewsComponent {
    constructor(route, categories) {
        this.route = route;
        this.categories = categories;
        this.NewsList = {};
        let sub = this.route.params.subscribe(params => {
            this.id = params['id'];
            this.NewsList = params;
        });
    }
    ngOnInit() {
    }
};
NewsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] }
];
NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/articles/news/news.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news.component.scss */ "./src/app/Components/articles/news/news.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]])
], NewsComponent);



/***/ })

}]);
//# sourceMappingURL=Components-articles-news-news-component-module-es2015.js.map