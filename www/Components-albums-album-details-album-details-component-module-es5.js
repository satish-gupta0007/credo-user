function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-albums-album-details-album-details-component-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/albums/album-details/album-details.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/albums/album-details/album-details.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAlbumsAlbumDetailsAlbumDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button></ion-back-button>\n      <ion-title>{{title}}</ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card *ngFor=\"let list of AlbumList\">\n    <img src={{list.img}}>\n    <ion-label>\n      <h2>{{list.title}}</h2>\n    </ion-label>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Components/albums/album-details/album-details.component-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/Components/albums/album-details/album-details.component-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: AlbumDetailsRoutingModule */

  /***/
  function srcAppComponentsAlbumsAlbumDetailsAlbumDetailsComponentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumDetailsRoutingModule", function () {
      return AlbumDetailsRoutingModule;
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


    var _album_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./album-details.component */
    "./src/app/Components/albums/album-details/album-details.component.ts");

    var routes = [{
      path: '',
      component: _album_details_component__WEBPACK_IMPORTED_MODULE_3__["AlbumDetailsComponent"]
    }];

    var AlbumDetailsRoutingModule = function AlbumDetailsRoutingModule() {
      _classCallCheck(this, AlbumDetailsRoutingModule);
    };

    AlbumDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AlbumDetailsRoutingModule);
    /***/
  },

  /***/
  "./src/app/Components/albums/album-details/album-details.component.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/Components/albums/album-details/album-details.component.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: AlbumsModule */

  /***/
  function srcAppComponentsAlbumsAlbumDetailsAlbumDetailsComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
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


    var _album_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./album-details.component */
    "./src/app/Components/albums/album-details/album-details.component.ts");
    /* harmony import */


    var _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../slide/slide.component.module */
    "./src/app/Components/slide/slide.component.module.ts");
    /* harmony import */


    var _album_details_component_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./album-details.component-routing.module */
    "./src/app/Components/albums/album-details/album-details.component-routing.module.ts");

    var AlbumsModule = function AlbumsModule() {
      _classCallCheck(this, AlbumsModule);
    };

    AlbumsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _album_details_component_routing_module__WEBPACK_IMPORTED_MODULE_7__["AlbumDetailsRoutingModule"], _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_6__["SlideModule"]],
      declarations: [_album_details_component__WEBPACK_IMPORTED_MODULE_5__["AlbumDetailsComponent"]],
      exports: []
    })], AlbumsModule);
    /***/
  },

  /***/
  "./src/app/Components/albums/album-details/album-details.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/Components/albums/album-details/album-details.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAlbumsAlbumDetailsAlbumDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  margin: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9hbGJ1bXMvYWxidW0tZGV0YWlscy9DOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFxJb25pYyBQcm9qZWN0c1xcUmVzdGF1cmFudEFwcC9zcmNcXGFwcFxcQ29tcG9uZW50c1xcYWxidW1zXFxhbGJ1bS1kZXRhaWxzXFxhbGJ1bS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL2FsYnVtcy9hbGJ1bS1kZXRhaWxzL2FsYnVtLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2FsYnVtcy9hbGJ1bS1kZXRhaWxzL2FsYnVtLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn0iLCJpb24tY2FyZCB7XG4gIG1hcmdpbjogMTVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Components/albums/album-details/album-details.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/Components/albums/album-details/album-details.component.ts ***!
    \****************************************************************************/

  /*! exports provided: AlbumDetailsComponent */

  /***/
  function srcAppComponentsAlbumsAlbumDetailsAlbumDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumDetailsComponent", function () {
      return AlbumDetailsComponent;
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

    var AlbumDetailsComponent = /*#__PURE__*/function () {
      function AlbumDetailsComponent(activate) {
        _classCallCheck(this, AlbumDetailsComponent);

        this.activate = activate;
        this.AlbumList = [];
        this.title = this.activate.snapshot.queryParamMap.get('title');
      }

      _createClass(AlbumDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.AlbumList = JSON.parse(localStorage.getItem('albums'));
        }
      }]);

      return AlbumDetailsComponent;
    }();

    AlbumDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    AlbumDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-album-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./album-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/albums/album-details/album-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./album-details.component.scss */
      "./src/app/Components/albums/album-details/album-details.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], AlbumDetailsComponent);
    /***/
  }
}]);
//# sourceMappingURL=Components-albums-album-details-album-details-component-module-es5.js.map