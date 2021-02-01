function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-favorites-favorites-component-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/favorites/favorites.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/favorites/favorites.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFavoritesFavoritesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-slide></app-slide>\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Favorites</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content pullingIcon=\"arrow-dropdown\"  refreshingSpinner=\"circles\"\n     >\n      </ion-refresher-content>\n      </ion-refresher>\n    <div *ngIf=\"FavoriteList.length===0\">\n    <ion-label>\n      <h1 style=\"text-align: center;\">No Favorite items</h1>\n    </ion-label>\n\n    </div>\n    <ion-list>\n      <ion-item-sliding *ngFor=\"let list of FavoriteList; let i=index\">\n        <ion-item  (click)=\"onGOTODATA(list.id,list)\">\n          <ion-thumbnail>\n            <img src={{list.img}}>\n          </ion-thumbnail>\n          <ion-label>\n            <h2>{{list.title}}</h2>\n            <p>{{list.description}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item-options>\n          <ion-item-option color=\"danger\" (click)=\"onRemove(i)\">\n            Remove\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-content>\n</div>";
    /***/
  },

  /***/
  "./src/app/Components/favorites/favorites.component.-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/Components/favorites/favorites.component.-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: FavoritesRoutingModule */

  /***/
  function srcAppComponentsFavoritesFavoritesComponentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesRoutingModule", function () {
      return FavoritesRoutingModule;
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


    var _favorites_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./favorites.component */
    "./src/app/Components/favorites/favorites.component.ts");

    var routes = [{
      path: '',
      component: _favorites_component__WEBPACK_IMPORTED_MODULE_3__["FavoritesComponent"]
    }];

    var FavoritesRoutingModule = function FavoritesRoutingModule() {
      _classCallCheck(this, FavoritesRoutingModule);
    };

    FavoritesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FavoritesRoutingModule);
    /***/
  },

  /***/
  "./src/app/Components/favorites/favorites.component.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Components/favorites/favorites.component.module.ts ***!
    \********************************************************************/

  /*! exports provided: FavoritesModule */

  /***/
  function srcAppComponentsFavoritesFavoritesComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesModule", function () {
      return FavoritesModule;
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


    var _favorites_component_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./favorites.component.-routing.module */
    "./src/app/Components/favorites/favorites.component.-routing.module.ts");
    /* harmony import */


    var _favorites_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./favorites.component */
    "./src/app/Components/favorites/favorites.component.ts");

    var FavoritesModule = function FavoritesModule() {
      _classCallCheck(this, FavoritesModule);
    };

    FavoritesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _favorites_component_routing_module__WEBPACK_IMPORTED_MODULE_6__["FavoritesRoutingModule"], _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__["SlideModule"]],
      declarations: [_favorites_component__WEBPACK_IMPORTED_MODULE_7__["FavoritesComponent"]],
      exports: []
    })], FavoritesModule);
    /***/
  },

  /***/
  "./src/app/Components/favorites/favorites.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/Components/favorites/favorites.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFavoritesFavoritesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-label {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9mYXZvcml0ZXMvQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcSW9uaWMgUHJvamVjdHNcXFJlc3RhdXJhbnRBcHAvc3JjXFxhcHBcXENvbXBvbmVudHNcXGZhdm9yaXRlc1xcZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVse1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn0iLCJpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Components/favorites/favorites.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Components/favorites/favorites.component.ts ***!
    \*************************************************************/

  /*! exports provided: FavoritesComponent */

  /***/
  function srcAppComponentsFavoritesFavoritesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function () {
      return FavoritesComponent;
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

    var FavoritesComponent = /*#__PURE__*/function () {
      function FavoritesComponent(route, toastController) {
        _classCallCheck(this, FavoritesComponent);

        this.route = route;
        this.toastController = toastController;
        this.FavoriteList = [];
      }

      _createClass(FavoritesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var test = localStorage.getItem('favorite');

          if (test == null) {} else {
            this.FavoriteList = JSON.parse(localStorage.getItem('favorite'));
          }
        }
      }, {
        key: "onGOTODATA",
        value: function onGOTODATA(id, data) {
          this.route.navigate(['/products', id, data]);
        }
      }, {
        key: "onRemove",
        value: function onRemove(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.FavoriteList.splice(id, 1);
                    localStorage.setItem('favorite', JSON.stringify(this.FavoriteList));
                    _context.next = 4;
                    return this.toastController.create({
                      color: 'light',
                      duration: 2000,
                      message: 'Item removed from Favotite'
                    });

                  case 4:
                    toast = _context.sent;
                    _context.next = 7;
                    return toast.present();

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          setTimeout(function () {
            event.target.complete();
          }, 2000);
          this.ngOnInit();
        }
      }]);

      return FavoritesComponent;
    }();

    FavoritesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };

    FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-favorites',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./favorites.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/favorites/favorites.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./favorites.component.scss */
      "./src/app/Components/favorites/favorites.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])], FavoritesComponent);
    /***/
  }
}]);
//# sourceMappingURL=Components-favorites-favorites-component-module-es5.js.map