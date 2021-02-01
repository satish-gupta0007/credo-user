function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-desserts-desserts-component-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/desserts/desserts.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/desserts/desserts.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDessertsDessertsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-slide ></app-slide>\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Deserts</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-row>\n      <ion-col  *ngFor=\"let list of DesertList\" (click)=\"onProduct(list.id,list)\">\n        <ion-card >\n          <img src={{list.img}} />\n          <ion-item>\n            <ion-label>\n              <h5> {{list.title}}</h5>\n              <h6>{{list.price}}</h6>\n            </ion-label>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-content>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/Components/desserts/desserts.component-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/Components/desserts/desserts.component-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: DesertsRoutingModule */

  /***/
  function srcAppComponentsDessertsDessertsComponentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DesertsRoutingModule", function () {
      return DesertsRoutingModule;
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


    var _desserts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./desserts.component */
    "./src/app/Components/desserts/desserts.component.ts");

    var routes = [{
      path: '',
      component: _desserts_component__WEBPACK_IMPORTED_MODULE_3__["DessertsComponent"]
    }];

    var DesertsRoutingModule = function DesertsRoutingModule() {
      _classCallCheck(this, DesertsRoutingModule);
    };

    DesertsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DesertsRoutingModule);
    /***/
  },

  /***/
  "./src/app/Components/desserts/desserts.component.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/Components/desserts/desserts.component.module.ts ***!
    \******************************************************************/

  /*! exports provided: DesertsModule */

  /***/
  function srcAppComponentsDessertsDessertsComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DesertsModule", function () {
      return DesertsModule;
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


    var _desserts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./desserts.component */
    "./src/app/Components/desserts/desserts.component.ts");
    /* harmony import */


    var _desserts_component_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./desserts.component-routing.module */
    "./src/app/Components/desserts/desserts.component-routing.module.ts");

    var DesertsModule = function DesertsModule() {
      _classCallCheck(this, DesertsModule);
    };

    DesertsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _desserts_component_routing_module__WEBPACK_IMPORTED_MODULE_7__["DesertsRoutingModule"], _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__["SlideModule"]],
      declarations: [_desserts_component__WEBPACK_IMPORTED_MODULE_6__["DessertsComponent"]],
      exports: []
    })], DesertsModule);
    /***/
  },

  /***/
  "./src/app/Components/desserts/desserts.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/Components/desserts/desserts.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDessertsDessertsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-col {\n  width: 50%;\n}\n\nion-card {\n  margin: 0px;\n  width: 100%;\n}\n\nimg {\n  max-height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9kZXNzZXJ0cy9DOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFxJb25pYyBQcm9qZWN0c1xcUmVzdGF1cmFudEFwcC9zcmNcXGFwcFxcQ29tcG9uZW50c1xcZGVzc2VydHNcXGRlc3NlcnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL2Rlc3NlcnRzL2Rlc3NlcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUNFSjs7QURBQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZGVzc2VydHMvZGVzc2VydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29sIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5pbWcge1xyXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsImlvbi1jb2wge1xuICB3aWR0aDogNTAlO1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW1nIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Components/desserts/desserts.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Components/desserts/desserts.component.ts ***!
    \***********************************************************/

  /*! exports provided: DessertsComponent */

  /***/
  function srcAppComponentsDessertsDessertsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DessertsComponent", function () {
      return DessertsComponent;
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

    var DessertsComponent = /*#__PURE__*/function () {
      function DessertsComponent(category, route) {
        _classCallCheck(this, DessertsComponent);

        this.category = category;
        this.route = route;
        this.DesertList = [];
      }

      _createClass(DessertsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.category.getdeserts().subscribe(function (data) {
            _this.DesertList = data.deserts;
          });
        }
      }, {
        key: "onProduct",
        value: function onProduct(id, data) {
          this.route.navigate(['/products', id, data]);
        }
      }]);

      return DessertsComponent;
    }();

    DessertsComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    DessertsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-desserts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./desserts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/desserts/desserts.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./desserts.component.scss */
      "./src/app/Components/desserts/desserts.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], DessertsComponent);
    /***/
  }
}]);
//# sourceMappingURL=Components-desserts-desserts-component-module-es5.js.map