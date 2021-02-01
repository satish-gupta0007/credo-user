function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-salads-salads-component-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/salads/salads.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/salads/salads.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSaladsSaladsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-slide ></app-slide>\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Salads</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-row>\n      <ion-col  *ngFor=\"let list of getSaladsList\" (click)=\"onProductList(list.id,list)\">\n        <ion-card>\n          <img src={{list.img}} />\n          <ion-item>\n            <ion-label>\n              <h5> {{list.title}}</h5>\n              <h6>{{list.price}}</h6>\n            </ion-label>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-content>\n</div>\n\n";
    /***/
  },

  /***/
  "./src/app/Components/salads/salads.component-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/Components/salads/salads.component-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: SaladsRoutingModule */

  /***/
  function srcAppComponentsSaladsSaladsComponentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaladsRoutingModule", function () {
      return SaladsRoutingModule;
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


    var _salads_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./salads.component */
    "./src/app/Components/salads/salads.component.ts");

    var routes = [{
      path: '',
      component: _salads_component__WEBPACK_IMPORTED_MODULE_3__["SaladsComponent"]
    }];

    var SaladsRoutingModule = function SaladsRoutingModule() {
      _classCallCheck(this, SaladsRoutingModule);
    };

    SaladsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SaladsRoutingModule);
    /***/
  },

  /***/
  "./src/app/Components/salads/salads.component.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Components/salads/salads.component.module.ts ***!
    \**************************************************************/

  /*! exports provided: SaladsModule */

  /***/
  function srcAppComponentsSaladsSaladsComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaladsModule", function () {
      return SaladsModule;
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


    var _salads_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./salads.component */
    "./src/app/Components/salads/salads.component.ts");
    /* harmony import */


    var _salads_component_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./salads.component-routing.module */
    "./src/app/Components/salads/salads.component-routing.module.ts");

    var SaladsModule = function SaladsModule() {
      _classCallCheck(this, SaladsModule);
    };

    SaladsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _salads_component_routing_module__WEBPACK_IMPORTED_MODULE_7__["SaladsRoutingModule"], _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__["SlideModule"]],
      declarations: [_salads_component__WEBPACK_IMPORTED_MODULE_6__["SaladsComponent"]],
      exports: []
    })], SaladsModule);
    /***/
  },

  /***/
  "./src/app/Components/salads/salads.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/Components/salads/salads.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSaladsSaladsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-col {\n  width: 50%;\n}\n\nion-card {\n  margin: 0px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9zYWxhZHMvQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcSW9uaWMgUHJvamVjdHNcXFJlc3RhdXJhbnRBcHAvc3JjXFxhcHBcXENvbXBvbmVudHNcXHNhbGFkc1xcc2FsYWRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3NhbGFkcy9zYWxhZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9zYWxhZHMvc2FsYWRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIiwiaW9uLWNvbCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Components/salads/salads.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Components/salads/salads.component.ts ***!
    \*******************************************************/

  /*! exports provided: SaladsComponent */

  /***/
  function srcAppComponentsSaladsSaladsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaladsComponent", function () {
      return SaladsComponent;
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

    var SaladsComponent = /*#__PURE__*/function () {
      function SaladsComponent(category, route) {
        _classCallCheck(this, SaladsComponent);

        this.category = category;
        this.route = route;
        this.getSaladsList = [];
      }

      _createClass(SaladsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.category.getSalads().subscribe(function (data) {
            _this.getSaladsList = data.salads;
          });
        }
      }, {
        key: "onProductList",
        value: function onProductList(id, data) {
          this.route.navigate(['/products', id, data]);
        }
      }]);

      return SaladsComponent;
    }();

    SaladsComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SaladsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-salads',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./salads.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/salads/salads.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./salads.component.scss */
      "./src/app/Components/salads/salads.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], SaladsComponent);
    /***/
  }
}]);
//# sourceMappingURL=Components-salads-salads-component-module-es5.js.map