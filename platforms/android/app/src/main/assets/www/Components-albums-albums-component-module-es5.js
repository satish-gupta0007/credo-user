function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-albums-albums-component-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/albums/albums.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/albums/albums.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAlbumsAlbumsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-slide></app-slide>\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Albums</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-card (click)=\"onSalads('Salads')\">\n      <div class=\"outer-div\">\n        <img src=\"../../../assets/images/albums/salads.png\">\n        <div class=\"inner-title\">\n          Salads\n        </div>\n        <div class=\"inner-subtitle\">\n          Delicious and healthy\n        </div>\n      </div>\n    </ion-card>\n    <ion-card (click)=\"onSides('Sides')\">\n      <div class=\"outer-div\">\n        <img src=\"../../../assets/images/albums/sides.png\">\n        <div class=\"inner-title\">\n          Sides\n        </div>\n        <div class=\"inner-subtitle\">\n          Complete a knock-out meal\n        </div>\n      </div>\n    </ion-card>\n\n    <ion-card (click)=\"onExtraOne('Φωτογραφίες εξωφύλλου')\">\n      <div class=\"outer-div\">\n        <img src=\"../../../assets/images/albums/extra1.jpg\">\n        <div class=\"inner-title\">\n          Φωτογραφίες εξωφύλλου\n        </div>\n\n      </div>\n\n    </ion-card>\n    <ion-card  (click)=\"onExtraTwo('Εικόνες προφίλ ')\">\n      <div class=\"outer-div\">\n        <img src=\"../../../assets/images/albums/extra2.png\">\n        <div class=\"inner-title\">\n          Εικόνες προφίλ\n        </div>\n      </div>\n    </ion-card>\n\n    <ion-card (click)=\"onMainCourse('Main Course')\"> \n      <div class=\"outer-div\">\n        <img src=\"../../../assets/images/albums/main-course.png\">\n        <div class=\"inner-title\">\n          Main Course\n        </div>\n        <div class=\"inner-subtitle\">\n          Our lovely suggestions\n        </div>\n      </div>\n    </ion-card>\n\n    <ion-card (click)=\"onAppetizers('Appetizers')\">\n\n      <div class=\"outer-div\">\n        <img src=\"../../../assets/images/albums/appetizers.png\">\n        <div class=\"inner-title\">\n          Appetizers\n        </div>\n        <div class=\"inner-subtitle\">\n          Most popular selections\n        </div>\n      </div>\n    </ion-card>\n    <ion-card (click)=\"onDeserts('Desserts')\">\n\n      <div class=\"outer-div\">\n        <img src=\"../../../assets/images/albums/deserts.jpg\">\n        <div class=\"inner-title\">\n          Desserts\n        </div>\n        <div class=\"inner-subtitle\">\n          Proven to please\n        </div>\n      </div>\n    </ion-card>\n  </ion-content>\n</div>";
    /***/
  },

  /***/
  "./src/app/Components/albums/albums.component-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/Components/albums/albums.component-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: AlbumsRoutingModule */

  /***/
  function srcAppComponentsAlbumsAlbumsComponentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumsRoutingModule", function () {
      return AlbumsRoutingModule;
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


    var _albums_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./albums.component */
    "./src/app/Components/albums/albums.component.ts");

    var routes = [{
      path: '',
      component: _albums_component__WEBPACK_IMPORTED_MODULE_3__["AlbumsComponent"]
    }];

    var AlbumsRoutingModule = function AlbumsRoutingModule() {
      _classCallCheck(this, AlbumsRoutingModule);
    };

    AlbumsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AlbumsRoutingModule);
    /***/
  },

  /***/
  "./src/app/Components/albums/albums.component.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Components/albums/albums.component.module.ts ***!
    \**************************************************************/

  /*! exports provided: AlbumsModule */

  /***/
  function srcAppComponentsAlbumsAlbumsComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumsModule", function () {
      return AlbumsModule;
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


    var _albums_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./albums.component */
    "./src/app/Components/albums/albums.component.ts");
    /* harmony import */


    var _albums_component_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./albums.component-routing.module */
    "./src/app/Components/albums/albums.component-routing.module.ts");

    var AlbumsModule = function AlbumsModule() {
      _classCallCheck(this, AlbumsModule);
    };

    AlbumsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _albums_component_routing_module__WEBPACK_IMPORTED_MODULE_7__["AlbumsRoutingModule"], _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__["SlideModule"]],
      declarations: [_albums_component__WEBPACK_IMPORTED_MODULE_6__["AlbumsComponent"]],
      exports: []
    })], AlbumsModule);
    /***/
  },

  /***/
  "./src/app/Components/albums/albums.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/Components/albums/albums.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAlbumsAlbumsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.outer-div {\n  right: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.inner-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: 700;\n  color: #fff;\n}\n\n.inner-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9hbGJ1bXMvQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcSW9uaWMgUHJvamVjdHNcXFJlc3RhdXJhbnRBcHAvc3JjXFxhcHBcXENvbXBvbmVudHNcXGFsYnVtc1xcYWxidW1zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL2FsYnVtcy9hbGJ1bXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFHSSxRQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2FsYnVtcy9hbGJ1bXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm91dGVyLWRpdiB7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgXHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuLmlubmVyLXRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzYlO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uaW5uZXItc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUyJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuIiwiaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm91dGVyLWRpdiB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLmlubmVyLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM2JTtcbiAgZm9udC1zaXplOiAyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmlubmVyLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MiU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Components/albums/albums.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Components/albums/albums.component.ts ***!
    \*******************************************************/

  /*! exports provided: AlbumsComponent */

  /***/
  function srcAppComponentsAlbumsAlbumsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumsComponent", function () {
      return AlbumsComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AlbumsComponent = /*#__PURE__*/function () {
      function AlbumsComponent(category, navCtrl, route) {
        _classCallCheck(this, AlbumsComponent);

        this.category = category;
        this.navCtrl = navCtrl;
        this.route = route;
        this.List = [];
      }

      _createClass(AlbumsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSalads",
        value: function onSalads(title) {
          var _this = this;

          this.category.getAppetizers().subscribe(function (data) {
            _this.List = data.salads;
            localStorage.setItem('albums', JSON.stringify(_this.List));

            _this.navCtrl.navigateForward('album-details', {
              queryParams: {
                title: title
              }
            });
          });
        }
      }, {
        key: "onSides",
        value: function onSides(title) {
          var _this2 = this;

          this.category.getAppetizers().subscribe(function (data) {
            _this2.List = data.sides;
            localStorage.setItem('albums', JSON.stringify(_this2.List));

            _this2.navCtrl.navigateForward('album-details', {
              queryParams: {
                title: title
              }
            });
          });
        }
      }, {
        key: "onMainCourse",
        value: function onMainCourse(title) {
          var _this3 = this;

          this.category.getAppetizers().subscribe(function (data) {
            _this3.List = data.maincourse;
            localStorage.setItem('albums', JSON.stringify(_this3.List));

            _this3.navCtrl.navigateForward('album-details', {
              queryParams: {
                title: title
              }
            });
          });
        }
      }, {
        key: "onAppetizers",
        value: function onAppetizers(title) {
          var _this4 = this;

          this.category.getAppetizers().subscribe(function (data) {
            _this4.List = data.appetizers;
            localStorage.setItem('albums', JSON.stringify(_this4.List));

            _this4.navCtrl.navigateForward('album-details', {
              queryParams: {
                title: title
              }
            });
          });
        }
      }, {
        key: "onDeserts",
        value: function onDeserts(title) {
          var _this5 = this;

          this.category.getAppetizers().subscribe(function (data) {
            _this5.List = data.deserts;
            localStorage.setItem('albums', JSON.stringify(_this5.List));

            _this5.navCtrl.navigateForward('album-details', {
              queryParams: {
                title: title
              }
            });
          });
        }
      }, {
        key: "onExtraOne",
        value: function onExtraOne(title) {
          var _this6 = this;

          this.category.getAppetizers().subscribe(function (data) {
            _this6.List = data.extra1;
            localStorage.setItem('albums', JSON.stringify(_this6.List));

            _this6.navCtrl.navigateForward('album-details', {
              queryParams: {
                title: title
              }
            });
          });
        }
      }, {
        key: "onExtraTwo",
        value: function onExtraTwo(title) {
          var _this7 = this;

          this.category.getAppetizers().subscribe(function (data) {
            _this7.List = data.extra2;
            localStorage.setItem('albums', JSON.stringify(_this7.List));

            _this7.navCtrl.navigateForward('album-details', {
              queryParams: {
                title: title
              }
            });
          });
        }
      }]);

      return AlbumsComponent;
    }();

    AlbumsComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AlbumsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-albums',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./albums.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/albums/albums.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./albums.component.scss */
      "./src/app/Components/albums/albums.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], AlbumsComponent);
    /***/
  }
}]);
//# sourceMappingURL=Components-albums-albums-component-module-es5.js.map