function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-events-event-details-event-details-module-event-details-module-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/events/event-details/event-details.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/events/event-details/event-details.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEventsEventDetailsEventDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{EventDetails.title}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content>\n  <div class=\"text-center\">\n    <h2>{{EventDetails.title}}</h2>\n    <p>\n      <ion-icon name=\"time\"></ion-icon> {{EventDetails.date}} <br>\n      <ion-icon name=\"compass\"></ion-icon> {{EventDetails.hotel}}\n    </p>\n  </div>\n    <div>\n      <img src={{EventDetails.img}}>\n    </div>\n    <div class=\"text-center\">\n    <div>\n      <p>{{EventDetails.description}}</p>\n      <p></p>\n    </div>\n    <div>\n      <ion-list>\n        <ion-item>\n          <ion-icon name=\"location\"></ion-icon>\n          &nbsp;<ion-label>\n            <h2>{{EventDetails.hotel}}</h2>\n            <p>{{EventDetails.street}}</p>\n            <p>{{EventDetails.location}}</p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n      <div>\n        <ion-button expand=\"full\" color=\"primary\">GET DIRECTIONS</ion-button>\n        <ion-button expand=\"full\" color=\"success\">ADD TO CALENDER</ion-button>\n\n      </div>\n    </div>\n</div>\n  \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Components/events/event-details/event-details-module/event-details-module-routing.module.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/Components/events/event-details/event-details-module/event-details-module-routing.module.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: EventDetailsModuleRoutingModule */

  /***/
  function srcAppComponentsEventsEventDetailsEventDetailsModuleEventDetailsModuleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventDetailsModuleRoutingModule", function () {
      return EventDetailsModuleRoutingModule;
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


    var _event_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../event-details.component */
    "./src/app/Components/events/event-details/event-details.component.ts");

    var routes = [{
      path: '',
      component: _event_details_component__WEBPACK_IMPORTED_MODULE_3__["EventDetailsComponent"]
    }];

    var EventDetailsModuleRoutingModule = function EventDetailsModuleRoutingModule() {
      _classCallCheck(this, EventDetailsModuleRoutingModule);
    };

    EventDetailsModuleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EventDetailsModuleRoutingModule);
    /***/
  },

  /***/
  "./src/app/Components/events/event-details/event-details-module/event-details-module.module.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/Components/events/event-details/event-details-module/event-details-module.module.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: EventDetailsModuleModule */

  /***/
  function srcAppComponentsEventsEventDetailsEventDetailsModuleEventDetailsModuleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventDetailsModuleModule", function () {
      return EventDetailsModuleModule;
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


    var _event_details_module_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./event-details-module-routing.module */
    "./src/app/Components/events/event-details/event-details-module/event-details-module-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _event_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../event-details.component */
    "./src/app/Components/events/event-details/event-details.component.ts");

    var EventDetailsModuleModule = function EventDetailsModuleModule() {
      _classCallCheck(this, EventDetailsModuleModule);
    };

    EventDetailsModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_event_details_component__WEBPACK_IMPORTED_MODULE_6__["EventDetailsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _event_details_module_routing_module__WEBPACK_IMPORTED_MODULE_3__["EventDetailsModuleRoutingModule"]]
    })], EventDetailsModuleModule);
    /***/
  },

  /***/
  "./src/app/Components/events/event-details/event-details.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/Components/events/event-details/event-details.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEventsEventDetailsEventDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text-center {\n  margin: 18px;\n  word-break: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9ldmVudHMvZXZlbnQtZGV0YWlscy9DOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFxJb25pYyBQcm9qZWN0c1xcUmVzdGF1cmFudEFwcC9zcmNcXGFwcFxcQ29tcG9uZW50c1xcZXZlbnRzXFxldmVudC1kZXRhaWxzXFxldmVudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL2V2ZW50cy9ldmVudC1kZXRhaWxzL2V2ZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWRldGFpbHMvZXZlbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWNlbnRlcntcclxuICAgIG1hcmdpbjogMThweDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn0iLCIudGV4dC1jZW50ZXIge1xuICBtYXJnaW46IDE4cHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Components/events/event-details/event-details.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/Components/events/event-details/event-details.component.ts ***!
    \****************************************************************************/

  /*! exports provided: EventDetailsComponent */

  /***/
  function srcAppComponentsEventsEventDetailsEventDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function () {
      return EventDetailsComponent;
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


    var src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/categories.service */
    "./src/app/shared/categories.service.ts");

    var EventDetailsComponent = /*#__PURE__*/function () {
      function EventDetailsComponent(activate, category) {
        var _this = this;

        _classCallCheck(this, EventDetailsComponent);

        this.activate = activate;
        this.category = category;
        this.EventDetails = [];
        var sub = this.activate.params.subscribe(function (params) {
          _this.id = params['id'];
          _this.EventDetails = params;
        });
      }

      _createClass(EventDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EventDetailsComponent;
    }();

    EventDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]
      }];
    };

    EventDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/events/event-details/event-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./event-details.component.scss */
      "./src/app/Components/events/event-details/event-details.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]])], EventDetailsComponent);
    /***/
  }
}]);
//# sourceMappingURL=Components-events-event-details-event-details-module-event-details-module-module-es5.js.map