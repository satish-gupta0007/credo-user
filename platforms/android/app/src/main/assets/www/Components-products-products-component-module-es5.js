function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-products-products-component-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/products/products.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/products/products.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProductsProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Product</ion-title>\n    <ion-buttons slot=\"end\" (click)=\"onCart()\">\n      <ion-icon class=\"cart-size\" name=\"cart\" large color=\"primary\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\n      <ion-slide>\n        <img src={{ProductList.img}}>\n      </ion-slide>\n    </ion-slides>\n  <div class=\"text-render\">\n    <h2>{{ProductList.description}}</h2>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae interdum ante. Quisque a augue elit. Sed id\n      dolor id est scelerisque porttitor eget a ligula. Ut dapibus feugiat purus tempus maximus.</p>\n    <ion-header>\n      Options and extras\n    </ion-header>\n    <p>Select the options you want to be included in this item.</p>\n    <hr>\n    <ion-header>\n      Size and Prices\n    </ion-header>\n    <br>\n    <ion-radio-group value={{ProductList.price}}>\n      <ion-list>\n        <ion-item>\n          <ion-label>Standard\n            <p>{{ProductList.price}}</p>\n          </ion-label>\n          <ion-radio value={{ProductList.price}} color=\"primary\" checked></ion-radio>\n        </ion-item>\n      </ion-list>\n    </ion-radio-group>\n    <br>\n    <div>\n      <ion-button expand=\"full\" color=\"primary\" (click)=\"onAddCart(ProductList)\">\n        <ion-icon name=\"basket\" slot=\"start\"></ion-icon>\n        Quick add to cart\n      </ion-button>\n    </div>\n    <div>\n      <ion-row>\n        <ion-col>\n          <ion-button color=\"light\" (click)=\"onCartConfirmation(ProductList)\">\n            <ion-icon slot=\"start\" name=\"cart\"></ion-icon>\n            Add to cart\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button color=\"light\" (click)=\"onAddFavorite(ProductList,ProductList.title)\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>\n            Add to favs\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Components/products/products.component-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/Components/products/products.component-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ProductsRoutingModule */

  /***/
  function srcAppComponentsProductsProductsComponentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function () {
      return ProductsRoutingModule;
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


    var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./products.component */
    "./src/app/Components/products/products.component.ts");

    var routes = [{
      path: '',
      component: _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
    }];

    var ProductsRoutingModule = function ProductsRoutingModule() {
      _classCallCheck(this, ProductsRoutingModule);
    };

    ProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductsRoutingModule);
    /***/
  },

  /***/
  "./src/app/Components/products/products.component.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/Components/products/products.component.module.ts ***!
    \******************************************************************/

  /*! exports provided: ProducsModule */

  /***/
  function srcAppComponentsProductsProductsComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProducsModule", function () {
      return ProducsModule;
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


    var _products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./products.component */
    "./src/app/Components/products/products.component.ts");
    /* harmony import */


    var _products_component_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./products.component-routing.module */
    "./src/app/Components/products/products.component-routing.module.ts");

    var ProducsModule = function ProducsModule() {
      _classCallCheck(this, ProducsModule);
    };

    ProducsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _products_component_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProductsRoutingModule"], _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__["SlideModule"]],
      declarations: [_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"]],
      exports: []
    })], ProducsModule);
    /***/
  },

  /***/
  "./src/app/Components/products/products.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/Components/products/products.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProductsProductsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cart-size {\n  font-size: xx-large;\n}\n\n.text-render {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wcm9kdWN0cy9DOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFxJb25pYyBQcm9qZWN0c1xcUmVzdGF1cmFudEFwcC9zcmNcXGFwcFxcQ29tcG9uZW50c1xccHJvZHVjdHNcXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydC1zaXplIHtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuLnRleHQtcmVuZGVyIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIC8vIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG4iLCIuY2FydC1zaXplIHtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cblxuLnRleHQtcmVuZGVyIHtcbiAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Components/products/products.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Components/products/products.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppComponentsProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent(activate, navCtrl, toastController, alertController) {
        var _this = this;

        _classCallCheck(this, ProductsComponent);

        this.activate = activate;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.alertController = alertController;
        this.AddtoCart = [];
        this.ProductList = [];
        this.FavoriteList = [];
        this.slideOpts = {
          initialSlide: 1,
          speed: 400
        };
        this.activate.params.subscribe(function (params) {
          _this.id = params['id'];
          _this.ProductList = params;
        });
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onAddCart",
        value: function onAddCart(data) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var test, toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    debugger;
                    test = localStorage.getItem('users');

                    if (test == null) {
                      this.AddtoCart.push(data);
                      localStorage.setItem('users', JSON.stringify(this.AddtoCart));
                    } else {
                      this.AddtoCart = JSON.parse(localStorage.getItem('users'));
                      this.AddtoCart.push(data);
                      localStorage.setItem('users', JSON.stringify(this.AddtoCart));
                    }

                    _context.next = 5;
                    return this.toastController.create({
                      color: 'light',
                      duration: 2000,
                      message: 'Item added to cart'
                    });

                  case 5:
                    toast = _context.sent;
                    _context.next = 8;
                    return toast.present();

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onCart",
        value: function onCart() {
          this.navCtrl.navigateForward('/cart');
        }
      }, {
        key: "onAddFavorite",
        value: function onAddFavorite(data, title) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var test, toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    test = localStorage.getItem('favorite');

                    if (test == null) {
                      this.FavoriteList.push(data);
                      localStorage.setItem('favorite', JSON.stringify(this.FavoriteList));
                    } else {
                      this.FavoriteList = JSON.parse(localStorage.getItem('favorite'));
                      this.FavoriteList.push(data);
                      localStorage.setItem('favorite', JSON.stringify(this.FavoriteList));
                    }

                    _context2.next = 4;
                    return this.toastController.create({
                      color: 'light',
                      duration: 2000,
                      message: title + 'has been added to favorite'
                    });

                  case 4:
                    toast = _context2.sent;
                    _context2.next = 7;
                    return toast.present();

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onCartConfirmation",
        value: function onCartConfirmation(data) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'Add to cart',
                      inputs: [{
                        type: 'text',
                        value: '1'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {}
                      }, {
                        text: 'ADD',
                        handler: function handler() {
                          _this2.onAddCart(data);
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/products/products.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products.component.scss */
      "./src/app/Components/products/products.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], ProductsComponent);
    /***/
  }
}]);
//# sourceMappingURL=Components-products-products-component-module-es5.js.map