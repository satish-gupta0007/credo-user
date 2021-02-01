function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-delivery-takeaway-takeaway-component-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/delivery/takeaway/takeaway.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/delivery/takeaway/takeaway.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDeliveryTakeawayTakeawayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n    <ion-back-button></ion-back-button>\n    <ion-title>Take away</ion-title>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n \n    <img src=\"./../../../../assets/images/Capture.PNG\">\n    <div class=\"text-render\">\n      <h3>High Street Restaurant</h3>\n      <ion-label>\n        <p>50 Market Street, San Francisco, California 94103, United States</p>\n      </ion-label>\n      <p>Submit your order and it will be ready to be picked up in about 30 minutes.</p>\n    </div>\n \n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n    \n        <ion-button>\n          Submit\n          <ion-icon slot=\"end\" name=\"paper-plane\"></ion-icon>\n        </ion-button>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/Components/delivery/takeaway/takeaway.component-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/Components/delivery/takeaway/takeaway.component-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: TakeAwayRoutingModule */

  /***/
  function srcAppComponentsDeliveryTakeawayTakeawayComponentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TakeAwayRoutingModule", function () {
      return TakeAwayRoutingModule;
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


    var _takeaway_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./takeaway.component */
    "./src/app/Components/delivery/takeaway/takeaway.component.ts");

    var routes = [{
      path: '',
      component: _takeaway_component__WEBPACK_IMPORTED_MODULE_3__["TakeawayComponent"]
    }];

    var TakeAwayRoutingModule = function TakeAwayRoutingModule() {
      _classCallCheck(this, TakeAwayRoutingModule);
    };

    TakeAwayRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TakeAwayRoutingModule);
    /***/
  },

  /***/
  "./src/app/Components/delivery/takeaway/takeaway.component.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/Components/delivery/takeaway/takeaway.component.module.ts ***!
    \***************************************************************************/

  /*! exports provided: TakeAwayModule */

  /***/
  function srcAppComponentsDeliveryTakeawayTakeawayComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TakeAwayModule", function () {
      return TakeAwayModule;
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


    var _takeaway_component_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./takeaway.component-routing.module */
    "./src/app/Components/delivery/takeaway/takeaway.component-routing.module.ts");
    /* harmony import */


    var _takeaway_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./takeaway.component */
    "./src/app/Components/delivery/takeaway/takeaway.component.ts");

    var TakeAwayModule = function TakeAwayModule() {
      _classCallCheck(this, TakeAwayModule);
    };

    TakeAwayModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _takeaway_component_routing_module__WEBPACK_IMPORTED_MODULE_5__["TakeAwayRoutingModule"]],
      declarations: [_takeaway_component__WEBPACK_IMPORTED_MODULE_6__["TakeawayComponent"]],
      exports: []
    })], TakeAwayModule);
    /***/
  },

  /***/
  "./src/app/Components/delivery/takeaway/takeaway.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/Components/delivery/takeaway/takeaway.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDeliveryTakeawayTakeawayComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  width: -webkit-fill-available;\n}\n\n.text-render {\n  margin: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9kZWxpdmVyeS90YWtlYXdheS9DOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFxJb25pYyBQcm9qZWN0c1xcUmVzdGF1cmFudEFwcC9zcmNcXGFwcFxcQ29tcG9uZW50c1xcZGVsaXZlcnlcXHRha2Vhd2F5XFx0YWtlYXdheS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9kZWxpdmVyeS90YWtlYXdheS90YWtlYXdheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2RlbGl2ZXJ5L3Rha2Vhd2F5L3Rha2Vhd2F5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn1cclxuLnRleHQtcmVuZGVye1xyXG4gICAgbWFyZ2luOiAxOHB4O1xyXG59IiwiaW1nIHtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5cbi50ZXh0LXJlbmRlciB7XG4gIG1hcmdpbjogMThweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Components/delivery/takeaway/takeaway.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Components/delivery/takeaway/takeaway.component.ts ***!
    \********************************************************************/

  /*! exports provided: TakeawayComponent */

  /***/
  function srcAppComponentsDeliveryTakeawayTakeawayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TakeawayComponent", function () {
      return TakeawayComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TakeawayComponent = /*#__PURE__*/function () {
      function TakeawayComponent() {
        _classCallCheck(this, TakeawayComponent);
      }

      _createClass(TakeawayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TakeawayComponent;
    }();

    TakeawayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-takeaway',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./takeaway.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/delivery/takeaway/takeaway.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./takeaway.component.scss */
      "./src/app/Components/delivery/takeaway/takeaway.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TakeawayComponent);
    /***/
  }
}]);
//# sourceMappingURL=Components-delivery-takeaway-takeaway-component-module-es5.js.map