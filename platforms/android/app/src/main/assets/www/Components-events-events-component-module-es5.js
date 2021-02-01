function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-events-events-component-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/events/events.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/events/events.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEventsEventsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-slide></app-slide>\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Events</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list >\n      <ion-item *ngFor=\"let list of EventList\" (click)=\"onEventDetails(list.id,list)\">\n        <ion-thumbnail>\n          <img src={{list.img}}>\n        </ion-thumbnail>\n        <ion-label>\n          <h2>{{list.title}}</h2>\n          <p>\n            <ion-icon name=\"time\"></ion-icon>{{list.date}} <br>\n            <ion-icon name=\"compass\"></ion-icon>{{list.hotel}}\n          </p>\n          <p>{{list.description}}</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</div>";
    /***/
  },

  /***/
  "./src/app/Components/events/events.component-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/Components/events/events.component-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: EventsRoutingModule */

  /***/
  function srcAppComponentsEventsEventsComponentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsRoutingModule", function () {
      return EventsRoutingModule;
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


    var _events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./events.component */
    "./src/app/Components/events/events.component.ts");

    var routes = [{
      path: '',
      component: _events_component__WEBPACK_IMPORTED_MODULE_3__["EventsComponent"]
    }];

    var EventsRoutingModule = function EventsRoutingModule() {
      _classCallCheck(this, EventsRoutingModule);
    };

    EventsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EventsRoutingModule);
    /***/
  },

  /***/
  "./src/app/Components/events/events.component.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Components/events/events.component.module.ts ***!
    \**************************************************************/

  /*! exports provided: EventsModule */

  /***/
  function srcAppComponentsEventsEventsComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsModule", function () {
      return EventsModule;
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


    var _events_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./events.component */
    "./src/app/Components/events/events.component.ts");
    /* harmony import */


    var _events_component_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./events.component-routing.module */
    "./src/app/Components/events/events.component-routing.module.ts");

    var EventsModule = function EventsModule() {
      _classCallCheck(this, EventsModule);
    };

    EventsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _events_component_routing_module__WEBPACK_IMPORTED_MODULE_7__["EventsRoutingModule"], _slide_slide_component_module__WEBPACK_IMPORTED_MODULE_5__["SlideModule"]],
      declarations: [_events_component__WEBPACK_IMPORTED_MODULE_6__["EventsComponent"]],
      exports: []
    })], EventsModule);
    /***/
  },

  /***/
  "./src/app/Components/events/events.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/Components/events/events.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEventsEventsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-label {\n  margin-left: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9ldmVudHMvQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcSW9uaWMgUHJvamVjdHNcXFJlc3RhdXJhbnRBcHAvc3JjXFxhcHBcXENvbXBvbmVudHNcXGV2ZW50c1xcZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnRzL2V2ZW50cy9ldmVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9ldmVudHMvZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG59XHJcbiIsImlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Components/events/events.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Components/events/events.component.ts ***!
    \*******************************************************/

  /*! exports provided: EventsComponent */

  /***/
  function srcAppComponentsEventsEventsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsComponent", function () {
      return EventsComponent;
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

    var EventsComponent = /*#__PURE__*/function () {
      function EventsComponent(category, route) {
        _classCallCheck(this, EventsComponent);

        this.category = category;
        this.route = route;
        this.EventList = [];
      }

      _createClass(EventsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.category.getevents().subscribe(function (result) {
            _this.EventList = result.events;
          });
        }
      }, {
        key: "onEventDetails",
        value: function onEventDetails(id, data) {
          this.route.navigate(['/event-details', id, data]);
        }
      }]);

      return EventsComponent;
    }();

    EventsComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    EventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-events',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./events.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/events/events.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./events.component.scss */
      "./src/app/Components/events/events.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], EventsComponent);
    /***/
  }
}]);
//# sourceMappingURL=Components-events-events-component-module-es5.js.map