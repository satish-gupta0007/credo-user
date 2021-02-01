function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-posts-posts-component-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/posts/posts.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/posts/posts.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPostsPostsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-slide></app-slide>\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Posts</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item *ngFor=\"let list of PostList\" (click)=\"onPosts(list.id,list)\">\n        <ion-thumbnail>\n          <img src={{list.img}}>\n        </ion-thumbnail>\n        <ion-label>\n          <div class=\"text-render\">\n            <h2>{{list.button}}</h2>\n            <p>\n              <ion-icon name=\"time\"></ion-icon> {{list.date}}\n            </p>\n            <p>{{list.description}}</p>\n          </div>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</div>";
    /***/
  },

  /***/
  "./src/app/Components/posts/posts.component-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Components/posts/posts.component-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: PostsRoutingModule */

  /***/
  function srcAppComponentsPostsPostsComponentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsRoutingModule", function () {
      return PostsRoutingModule;
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


    var _posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./posts.component */
    "./src/app/Components/posts/posts.component.ts");

    var routes = [{
      path: '',
      component: _posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"]
    }];

    var PostsRoutingModule = function PostsRoutingModule() {
      _classCallCheck(this, PostsRoutingModule);
    };

    PostsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PostsRoutingModule);
    /***/
  },

  /***/
  "./src/app/Components/posts/posts.component.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/Components/posts/posts.component.module.ts ***!
    \************************************************************/

  /*! exports provided: PostsModule */

  /***/
  function srcAppComponentsPostsPostsComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsModule", function () {
      return PostsModule;
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


    var _posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./posts.component */
    "./src/app/Components/posts/posts.component.ts");
    /* harmony import */


    var _posts_component_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./posts.component-routing.module */
    "./src/app/Components/posts/posts.component-routing.module.ts");

    var PostsModule = function PostsModule() {
      _classCallCheck(this, PostsModule);
    };

    PostsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _posts_component_routing_module__WEBPACK_IMPORTED_MODULE_7__["PostsRoutingModule"], _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__["SlideModule"]],
      declarations: [_posts_component__WEBPACK_IMPORTED_MODULE_6__["PostsComponent"]],
      exports: []
    })], PostsModule);
    /***/
  },

  /***/
  "./src/app/Components/posts/posts.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/Components/posts/posts.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPostsPostsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text-render {\n  margin-left: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wb3N0cy9DOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFxJb25pYyBQcm9qZWN0c1xcUmVzdGF1cmFudEFwcC9zcmNcXGFwcFxcQ29tcG9uZW50c1xccG9zdHNcXHBvc3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1yZW5kZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTdweDtcclxufSIsIi50ZXh0LXJlbmRlciB7XG4gIG1hcmdpbi1sZWZ0OiAxN3B4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Components/posts/posts.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Components/posts/posts.component.ts ***!
    \*****************************************************/

  /*! exports provided: PostsComponent */

  /***/
  function srcAppComponentsPostsPostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsComponent", function () {
      return PostsComponent;
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

    var PostsComponent = /*#__PURE__*/function () {
      function PostsComponent(category, route) {
        _classCallCheck(this, PostsComponent);

        this.category = category;
        this.route = route;
        this.PostList = [];
      }

      _createClass(PostsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.category.getAppetizers().subscribe(function (result) {
            _this.PostList = result.posts;
          });
        }
      }, {
        key: "onPosts",
        value: function onPosts(id, data) {
          this.route.navigate(['posts-details', id, data]);
        }
      }]);

      return PostsComponent;
    }();

    PostsComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-posts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./posts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/posts/posts.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./posts.component.scss */
      "./src/app/Components/posts/posts.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], PostsComponent);
    /***/
  }
}]);
//# sourceMappingURL=Components-posts-posts-component-module-es5.js.map