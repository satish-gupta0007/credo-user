function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-articles-articles-component-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/articles/articles.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/articles/articles.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsArticlesArticlesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-slide ></app-slide>\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>News</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <br>\n  <ion-content fullscreen>\n    <ion-list >\n\n      <ion-item *ngFor=\"let record of newsList,let i=index\">\n        <ion-thumbnail  slot=\"start\">\n          <img src={{record.img}}>\n        </ion-thumbnail >\n        <ion-label (click)=\"onNews(record.id,record)\">\n          <h2>{{record.title}}</h2>\n          <h3>{{record.description}}</h3>\n        </ion-label>\n      </ion-item>\n      <br>\n    </ion-list>\n  </ion-content>\n</div>";
    /***/
  },

  /***/
  "./src/app/Components/articles/articles.component-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/Components/articles/articles.component-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ArticlesRoutingModule */

  /***/
  function srcAppComponentsArticlesArticlesComponentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticlesRoutingModule", function () {
      return ArticlesRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _articles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./articles.component */
    "./src/app/Components/articles/articles.component.ts");

    var routes = [{
      path: '',
      component: _articles_component__WEBPACK_IMPORTED_MODULE_3__["ArticlesComponent"]
    }];

    var ArticlesRoutingModule = function ArticlesRoutingModule() {
      _classCallCheck(this, ArticlesRoutingModule);
    };

    ArticlesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ArticlesRoutingModule);
    /***/
  },

  /***/
  "./src/app/Components/articles/articles.component.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/Components/articles/articles.component.module.ts ***!
    \******************************************************************/

  /*! exports provided: ArticlesModule */

  /***/
  function srcAppComponentsArticlesArticlesComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticlesModule", function () {
      return ArticlesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../slide/slide.component.module */
    "./src/app/Components/slide/slide.component.module.ts");
    /* harmony import */


    var _articles_component_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./articles.component-routing.module */
    "./src/app/Components/articles/articles.component-routing.module.ts");
    /* harmony import */


    var _articles_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./articles.component */
    "./src/app/Components/articles/articles.component.ts");

    var ArticlesModule = function ArticlesModule() {
      _classCallCheck(this, ArticlesModule);
    };

    ArticlesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _articles_component_routing_module__WEBPACK_IMPORTED_MODULE_6__["ArticlesRoutingModule"], _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__["SlideModule"]],
      declarations: [_articles_component__WEBPACK_IMPORTED_MODULE_7__["ArticlesComponent"]],
      exports: []
    })], ArticlesModule);
    /***/
  },

  /***/
  "./src/app/Components/articles/articles.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/Components/articles/articles.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsArticlesArticlesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Components/articles/articles.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Components/articles/articles.component.ts ***!
    \***********************************************************/

  /*! exports provided: ArticlesComponent */

  /***/
  function srcAppComponentsArticlesArticlesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function () {
      return ArticlesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/categories.service */
    "./src/app/shared/categories.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ArticlesComponent = /*#__PURE__*/function () {
      function ArticlesComponent(categories, router) {
        _classCallCheck(this, ArticlesComponent);

        this.categories = categories;
        this.router = router;
        this.newsList = [];
      }

      _createClass(ArticlesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.categories.getNewsList().subscribe(function (data) {
            _this.newsList = data.news;
          });
        }
      }, {
        key: "onNews",
        value: function onNews(id, data) {
          this.router.navigate(['/articles', id, data]);
        }
      }]);

      return ArticlesComponent;
    }();

    ArticlesComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ArticlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-articles',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./articles.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/articles/articles.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./articles.component.scss */
      "./src/app/Components/articles/articles.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ArticlesComponent);
    /***/
  }
}]);
//# sourceMappingURL=Components-articles-articles-component-module-es5.js.map