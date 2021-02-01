function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-posts-posts-details-posts-details-component-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/posts/posts-details/posts-details.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/posts/posts-details/posts-details.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPostsPostsDetailsPostsDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{PostsDetails.title}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content>\n  <div class=\"text-center\">\n    <h2>{{PostsDetails.title}}</h2>\n    <p>\n      <ion-icon name=\"time\"></ion-icon> {{PostsDetails.date}} <br>\n      <ion-icon name=\"pricetag\"></ion-icon> {{PostsDetails.event}}<br>\n      <ion-icon name=\"person\"></ion-icon>  {{PostsDetails.hotel}}\n    </p>\n  </div>\n    <div>\n      <img src={{PostsDetails.img}}>\n    </div>\n    <div class=\"text-center\">\n    <div>\n      <p>{{PostsDetails.description}}</p>\n      <p></p>\n    </div>\n    <div>\n      <!-- <ion-list>\n        <ion-item>\n          <ion-icon name=\"location\"></ion-icon>\n          &nbsp;<ion-label>\n            <h2>{{EventDetails.hotel}}</h2>\n            <p>{{EventDetails.street}}</p>\n            <p>{{EventDetails.location}}</p>\n          </ion-label>\n        </ion-item>\n      </ion-list> -->\n      <div>\n        <ion-button expand=\"full\" color=\"primary\">{{PostsDetails.button}}\n          <ion-icon name=\"play-circle-outline\" slot=\"end\"></ion-icon>\n\n        </ion-button>\n      </div>\n    </div>\n</div>\n  \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Components/posts/posts-details/posts-details.component-routing.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/Components/posts/posts-details/posts-details.component-routing.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: PostsDetailsRoutingModule */

  /***/
  function srcAppComponentsPostsPostsDetailsPostsDetailsComponentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsDetailsRoutingModule", function () {
      return PostsDetailsRoutingModule;
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


    var _posts_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./posts-details.component */
    "./src/app/Components/posts/posts-details/posts-details.component.ts");

    var routes = [{
      path: '',
      component: _posts_details_component__WEBPACK_IMPORTED_MODULE_3__["PostsDetailsComponent"]
    }];

    var PostsDetailsRoutingModule = function PostsDetailsRoutingModule() {
      _classCallCheck(this, PostsDetailsRoutingModule);
    };

    PostsDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PostsDetailsRoutingModule);
    /***/
  },

  /***/
  "./src/app/Components/posts/posts-details/posts-details.component.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/Components/posts/posts-details/posts-details.component.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: PostsDetailsModule */

  /***/
  function srcAppComponentsPostsPostsDetailsPostsDetailsComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsDetailsModule", function () {
      return PostsDetailsModule;
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


    var _posts_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./posts-details.component */
    "./src/app/Components/posts/posts-details/posts-details.component.ts");
    /* harmony import */


    var _posts_details_component_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./posts-details.component-routing.module */
    "./src/app/Components/posts/posts-details/posts-details.component-routing.module.ts");

    var PostsDetailsModule = function PostsDetailsModule() {
      _classCallCheck(this, PostsDetailsModule);
    };

    PostsDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _posts_details_component_routing_module__WEBPACK_IMPORTED_MODULE_6__["PostsDetailsRoutingModule"]],
      declarations: [_posts_details_component__WEBPACK_IMPORTED_MODULE_5__["PostsDetailsComponent"]],
      exports: []
    })], PostsDetailsModule);
    /***/
  },

  /***/
  "./src/app/Components/posts/posts-details/posts-details.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/Components/posts/posts-details/posts-details.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPostsPostsDetailsPostsDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text-center {\n  margin: 18px;\n  word-break: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wb3N0cy9wb3N0cy1kZXRhaWxzL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXElvbmljIFByb2plY3RzXFxSZXN0YXVyYW50QXBwL3NyY1xcYXBwXFxDb21wb25lbnRzXFxwb3N0c1xccG9zdHMtZGV0YWlsc1xccG9zdHMtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9wb3N0cy9wb3N0cy1kZXRhaWxzL3Bvc3RzLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcG9zdHMvcG9zdHMtZGV0YWlscy9wb3N0cy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY2VudGVye1xyXG4gICAgbWFyZ2luOiAxOHB4O1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufSIsIi50ZXh0LWNlbnRlciB7XG4gIG1hcmdpbjogMThweDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Components/posts/posts-details/posts-details.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/Components/posts/posts-details/posts-details.component.ts ***!
    \***************************************************************************/

  /*! exports provided: PostsDetailsComponent */

  /***/
  function srcAppComponentsPostsPostsDetailsPostsDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsDetailsComponent", function () {
      return PostsDetailsComponent;
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

    var PostsDetailsComponent = /*#__PURE__*/function () {
      function PostsDetailsComponent(active) {
        var _this = this;

        _classCallCheck(this, PostsDetailsComponent);

        this.active = active;
        this.PostsDetails = [];
        this.active.params.subscribe(function (params) {
          _this.id = params['id'];
          _this.PostsDetails = params;
        });
      }

      _createClass(PostsDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PostsDetailsComponent;
    }();

    PostsDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    PostsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-posts-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./posts-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/posts/posts-details/posts-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./posts-details.component.scss */
      "./src/app/Components/posts/posts-details/posts-details.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], PostsDetailsComponent);
    /***/
  }
}]);
//# sourceMappingURL=Components-posts-posts-details-posts-details-component-module-es5.js.map