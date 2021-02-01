function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-map-map-component-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/map/map.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/map/map.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMapMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-slide ></app-slide>\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Map</ion-title>\n    </ion-toolbar>\n  </ion-header>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/Components/map/map.component-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Components/map/map.component-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: MapRoutingModule */

  /***/
  function srcAppComponentsMapMapComponentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapRoutingModule", function () {
      return MapRoutingModule;
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


    var _map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./map.component */
    "./src/app/Components/map/map.component.ts");

    var routes = [{
      path: '',
      component: _map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]
    }];

    var MapRoutingModule = function MapRoutingModule() {
      _classCallCheck(this, MapRoutingModule);
    };

    MapRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MapRoutingModule);
    /***/
  },

  /***/
  "./src/app/Components/map/map.component.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/Components/map/map.component.module.ts ***!
    \********************************************************/

  /*! exports provided: MapModule */

  /***/
  function srcAppComponentsMapMapComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapModule", function () {
      return MapModule;
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


    var _map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./map.component */
    "./src/app/Components/map/map.component.ts");
    /* harmony import */


    var _map_component_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./map.component-routing.module */
    "./src/app/Components/map/map.component-routing.module.ts");

    var MapModule = function MapModule() {
      _classCallCheck(this, MapModule);
    };

    MapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _map_component_routing_module__WEBPACK_IMPORTED_MODULE_7__["MapRoutingModule"], _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__["SlideModule"]],
      declarations: [_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"]],
      exports: []
    })], MapModule);
    /***/
  },

  /***/
  "./src/app/Components/map/map.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/Components/map/map.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMapMapComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbWFwL21hcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/Components/map/map.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/Components/map/map.component.ts ***!
    \*************************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppComponentsMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MapComponent = /*#__PURE__*/function () {
      function MapComponent() {
        _classCallCheck(this, MapComponent);
      }

      _createClass(MapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MapComponent;
    }();

    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/map/map.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map.component.scss */
      "./src/app/Components/map/map.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MapComponent);
    /***/
  }
}]);
//# sourceMappingURL=Components-map-map-component-module-es5.js.map