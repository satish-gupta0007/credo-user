function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-wordpress-wordpress-component-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/wordpress/wordpress.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/wordpress/wordpress.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsWordpressWordpressComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-slide></app-slide>\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Wordpress</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-row *ngFor=\"let list of WordpressList\">\n      <ion-col>\n        <ion-card style=\"margin: 0px;\" (click)=\"getWordpressDetails(list.id,list)\">\n          <img src={{list.img}} />\n\n          <ion-card-content>\n            <h2>{{list.title}}</h2>\n            <p>{{list.description}}</p>\n          </ion-card-content>\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-content>\n</div>";
    /***/
  },

  /***/
  "./src/app/Components/wordpress/wordpress.component-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/Components/wordpress/wordpress.component-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: WordpressRoutingModule */

  /***/
  function srcAppComponentsWordpressWordpressComponentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WordpressRoutingModule", function () {
      return WordpressRoutingModule;
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


    var _wordpress_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./wordpress.component */
    "./src/app/Components/wordpress/wordpress.component.ts");

    var routes = [{
      path: '',
      component: _wordpress_component__WEBPACK_IMPORTED_MODULE_3__["WordpressComponent"]
    }];

    var WordpressRoutingModule = function WordpressRoutingModule() {
      _classCallCheck(this, WordpressRoutingModule);
    };

    WordpressRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WordpressRoutingModule);
    /***/
  },

  /***/
  "./src/app/Components/wordpress/wordpress.component.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Components/wordpress/wordpress.component.module.ts ***!
    \********************************************************************/

  /*! exports provided: WordpressModule */

  /***/
  function srcAppComponentsWordpressWordpressComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WordpressModule", function () {
      return WordpressModule;
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


    var _wordpress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./wordpress.component */
    "./src/app/Components/wordpress/wordpress.component.ts");
    /* harmony import */


    var _wordpress_component_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./wordpress.component-routing.module */
    "./src/app/Components/wordpress/wordpress.component-routing.module.ts");

    var WordpressModule = function WordpressModule() {
      _classCallCheck(this, WordpressModule);
    };

    WordpressModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _wordpress_component_routing_module__WEBPACK_IMPORTED_MODULE_7__["WordpressRoutingModule"], _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__["SlideModule"]],
      declarations: [_wordpress_component__WEBPACK_IMPORTED_MODULE_6__["WordpressComponent"]],
      exports: []
    })], WordpressModule);
    /***/
  },

  /***/
  "./src/app/Components/wordpress/wordpress.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/Components/wordpress/wordpress.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsWordpressWordpressComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvd29yZHByZXNzL3dvcmRwcmVzcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/Components/wordpress/wordpress.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Components/wordpress/wordpress.component.ts ***!
    \*************************************************************/

  /*! exports provided: WordpressComponent */

  /***/
  function srcAppComponentsWordpressWordpressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WordpressComponent", function () {
      return WordpressComponent;
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

    var WordpressComponent = /*#__PURE__*/function () {
      function WordpressComponent(category, route) {
        _classCallCheck(this, WordpressComponent);

        this.category = category;
        this.route = route;
        this.WordpressList = [];
      }

      _createClass(WordpressComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.category.getWordpress().subscribe(function (data) {
            _this.WordpressList = data.wordpress;
          });
        }
      }, {
        key: "getWordpressDetails",
        value: function getWordpressDetails(id, data) {
          this.route.navigate(['wordpress-details', id, data]);
        }
      }]);

      return WordpressComponent;
    }();

    WordpressComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    WordpressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wordpress',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wordpress.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/wordpress/wordpress.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wordpress.component.scss */
      "./src/app/Components/wordpress/wordpress.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], WordpressComponent);
    /***/
  }
}]);
//# sourceMappingURL=Components-wordpress-wordpress-component-module-es5.js.map