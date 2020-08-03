function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/catalogue/catalogue.component */
    "./src/app/components/catalogue/catalogue.component.ts");
    /* harmony import */


    var _components_screen404_screen404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/screen404/screen404.component */
    "./src/app/components/screen404/screen404.component.ts");
    /* harmony import */


    var _components_catalogue_product_category_product_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/catalogue/product-category/product-category.component */
    "./src/app/components/catalogue/product-category/product-category.component.ts");
    /* harmony import */


    var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/portfolio/portfolio.component */
    "./src/app/components/portfolio/portfolio.component.ts");
    /* harmony import */


    var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/contacts/contacts.component */
    "./src/app/components/contacts/contacts.component.ts");
    /* harmony import */


    var _components_payment_and_delivery_payment_and_delivery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/payment-and-delivery/payment-and-delivery.component */
    "./src/app/components/payment-and-delivery/payment-and-delivery.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'catalogue',
      pathMatch: 'full'
    }, {
      path: 'catalogue',
      component: _components_catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_2__["CatalogueComponent"],
      children: [{
        path: 'category/:id',
        component: _components_catalogue_product_category_product_category_component__WEBPACK_IMPORTED_MODULE_4__["ProductCategoryComponent"]
      }]
    }, {
      path: 'payment-and-delivery',
      component: _components_payment_and_delivery_payment_and_delivery_component__WEBPACK_IMPORTED_MODULE_7__["PaymentAndDeliveryComponent"]
    }, {
      path: 'contacts',
      component: _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__["ContactsComponent"]
    }, {
      path: 'portfolio',
      component: _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"]
    }, {
      path: '**',
      component: _components_screen404_screen404_component__WEBPACK_IMPORTED_MODULE_3__["Screen404Component"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'rodnikov';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 14,
      vars: 0,
      consts: [["routerLink", "/catalogue", "routerLinkActive", "active"], ["routerLink", "/payment-and-delivery", "routerLinkActive", "active"], ["routerLink", "/contacts", "routerLinkActive", "active"], ["routerLink", "/portfolio", "routerLinkActive", "active"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/catalogue/catalogue.component */
    "./src/app/components/catalogue/catalogue.component.ts");
    /* harmony import */


    var _components_screen404_screen404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/screen404/screen404.component */
    "./src/app/components/screen404/screen404.component.ts");
    /* harmony import */


    var _components_catalogue_product_category_product_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/catalogue/product-category/product-category.component */
    "./src/app/components/catalogue/product-category/product-category.component.ts");
    /* harmony import */


    var _components_catalogue_product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/catalogue/product/product.component */
    "./src/app/components/catalogue/product/product.component.ts");
    /* harmony import */


    var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/contacts/contacts.component */
    "./src/app/components/contacts/contacts.component.ts");
    /* harmony import */


    var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/portfolio/portfolio.component */
    "./src/app/components/portfolio/portfolio.component.ts");
    /* harmony import */


    var _components_payment_and_delivery_payment_and_delivery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/payment-and-delivery/payment-and-delivery.component */
    "./src/app/components/payment-and-delivery/payment-and-delivery.component.ts");
    /* harmony import */


    var _components_catalogue_product_product_price_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/catalogue/product/product.price.pipe */
    "./src/app/components/catalogue/product/product.price.pipe.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_4__["CatalogueComponent"], _components_screen404_screen404_component__WEBPACK_IMPORTED_MODULE_5__["Screen404Component"], _components_catalogue_product_category_product_category_component__WEBPACK_IMPORTED_MODULE_6__["ProductCategoryComponent"], _components_catalogue_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"], _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"], _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioComponent"], _components_payment_and_delivery_payment_and_delivery_component__WEBPACK_IMPORTED_MODULE_10__["PaymentAndDeliveryComponent"], _components_catalogue_product_product_price_pipe__WEBPACK_IMPORTED_MODULE_11__["ProductPricePipe"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_4__["CatalogueComponent"], _components_screen404_screen404_component__WEBPACK_IMPORTED_MODULE_5__["Screen404Component"], _components_catalogue_product_category_product_category_component__WEBPACK_IMPORTED_MODULE_6__["ProductCategoryComponent"], _components_catalogue_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"], _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"], _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioComponent"], _components_payment_and_delivery_payment_and_delivery_component__WEBPACK_IMPORTED_MODULE_10__["PaymentAndDeliveryComponent"], _components_catalogue_product_product_price_pipe__WEBPACK_IMPORTED_MODULE_11__["ProductPricePipe"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/catalogue/catalogue.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/catalogue/catalogue.component.ts ***!
    \*************************************************************/

  /*! exports provided: CatalogueComponent */

  /***/
  function srcAppComponentsCatalogueCatalogueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatalogueComponent", function () {
      return CatalogueComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _catalogue_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./catalogue.service */
    "./src/app/components/catalogue/catalogue.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function CatalogueComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "category/" + category_r1.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.name);
      }
    }

    var CatalogueComponent = /*#__PURE__*/function () {
      function CatalogueComponent(productsService) {
        _classCallCheck(this, CatalogueComponent);

        this.productsService = productsService;
      }

      _createClass(CatalogueComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.categories = this.productsService.getProductCategories();
        }
      }]);

      return CatalogueComponent;
    }();

    CatalogueComponent.ɵfac = function CatalogueComponent_Factory(t) {
      return new (t || CatalogueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_catalogue_service__WEBPACK_IMPORTED_MODULE_1__["CatalogueService"]));
    };

    CatalogueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CatalogueComponent,
      selectors: [["app-catalogue"]],
      decls: 4,
      vars: 1,
      consts: [[1, "catalogue"], [1, "categories"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink"]],
      template: function CatalogueComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CatalogueComponent_li_2_Template, 3, 2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0YWxvZ3VlL2NhdGFsb2d1ZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-catalogue',
          templateUrl: './catalogue.component.html',
          styleUrls: ['./catalogue.component.scss']
        }]
      }], function () {
        return [{
          type: _catalogue_service__WEBPACK_IMPORTED_MODULE_1__["CatalogueService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/catalogue/catalogue.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/catalogue/catalogue.service.ts ***!
    \***********************************************************/

  /*! exports provided: CatalogueService */

  /***/
  function srcAppComponentsCatalogueCatalogueServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatalogueService", function () {
      return CatalogueService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _catalogue_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./catalogue.store */
    "./src/app/components/catalogue/catalogue.store.ts");

    var CatalogueService = /*#__PURE__*/function () {
      function CatalogueService() {
        _classCallCheck(this, CatalogueService);
      }

      _createClass(CatalogueService, [{
        key: "getProductCategories",
        value: function getProductCategories() {
          return _catalogue_store__WEBPACK_IMPORTED_MODULE_1__["catalogueStore"];
        }
      }]);

      return CatalogueService;
    }();

    CatalogueService.ɵfac = function CatalogueService_Factory(t) {
      return new (t || CatalogueService)();
    };

    CatalogueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CatalogueService,
      factory: CatalogueService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogueService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/catalogue/catalogue.store.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/catalogue/catalogue.store.ts ***!
    \*********************************************************/

  /*! exports provided: catalogueStore */

  /***/
  function srcAppComponentsCatalogueCatalogueStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "catalogueStore", function () {
      return catalogueStore;
    });

    var catalogueStore = [];
    var seq = 0;

    while (catalogueStore.length < 10) {
      var category = {
        id: seq++,
        name: "cat ".concat(catalogueStore.length),
        images: [],
        products: []
      };

      while (category.products.length < 10) {
        var product = {
          id: seq++,
          name: "product ".concat(catalogueStore.length).concat(category.products.length),
          price: Math.random() * 300,
          images: ["assets/mock-images/".concat(Math.floor(Math.random() * 7) + 1, ".jpg")]
        };
        category.products.push(product);
      }

      catalogueStore.push(category);
    }
    /***/

  },

  /***/
  "./src/app/components/catalogue/product-category/product-category.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/catalogue/product-category/product-category.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ProductCategoryComponent */

  /***/
  function srcAppComponentsCatalogueProductCategoryProductCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductCategoryComponent", function () {
      return ProductCategoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _catalogue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../catalogue.service */
    "./src/app/components/catalogue/catalogue.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../product/product.component */
    "./src/app/components/catalogue/product/product.component.ts");

    function ProductCategoryComponent_app_product_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product", 4);
      }

      if (rf & 2) {
        var product_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r1);
      }
    }

    var ProductCategoryComponent = /*#__PURE__*/function () {
      function ProductCategoryComponent(route, productsService) {
        _classCallCheck(this, ProductCategoryComponent);

        this.route = route;
        this.productsService = productsService;
      }

      _createClass(ProductCategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.paramMap.subscribe(function (params) {
            var id = Number(params.get('id'));
            _this.category = _this.productsService.getProductCategories().find(function (c) {
              return c.id == id;
            });
          });
        }
      }]);

      return ProductCategoryComponent;
    }();

    ProductCategoryComponent.ɵfac = function ProductCategoryComponent_Factory(t) {
      return new (t || ProductCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_catalogue_service__WEBPACK_IMPORTED_MODULE_2__["CatalogueService"]));
    };

    ProductCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductCategoryComponent,
      selectors: [["app-product-category"]],
      decls: 5,
      vars: 2,
      consts: [[1, "product-category"], [1, "category-name"], [1, "category-products"], [3, "product", 4, "ngFor", "ngForOf"], [3, "product"]],
      template: function ProductCategoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductCategoryComponent_app_product_4_Template, 1, 1, "app-product", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.category.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.category.products);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0YWxvZ3VlL3Byb2R1Y3QtY2F0ZWdvcnkvcHJvZHVjdC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-category',
          templateUrl: './product-category.component.html',
          styleUrls: ['./product-category.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _catalogue_service__WEBPACK_IMPORTED_MODULE_2__["CatalogueService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/catalogue/product/product.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/catalogue/product/product.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppComponentsCatalogueProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _product_price_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./product.price.pipe */
    "./src/app/components/catalogue/product/product.price.pipe.ts");

    var ProductComponent = /*#__PURE__*/function () {
      function ProductComponent() {
        _classCallCheck(this, ProductComponent);
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductComponent;
    }();

    ProductComponent.ɵfac = function ProductComponent_Factory(t) {
      return new (t || ProductComponent)();
    };

    ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductComponent,
      selectors: [["app-product"]],
      inputs: {
        product: "product"
      },
      decls: 8,
      vars: 5,
      consts: [[1, "product"], [1, "product-name"], [1, "product-image"], ["alt", "", 3, "src"], [1, "product-price"]],
      template: function ProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "productPrice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.product.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0426\u0435\u043D\u0430 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, ctx.product), "");
        }
      },
      pipes: [_product_price_pipe__WEBPACK_IMPORTED_MODULE_1__["ProductPricePipe"]],
      styles: [".product[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100px;\n  max-height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pc2hhL1dvcmsvUHJvamVjdHMvcm9kbmlrb3Yvc3JjL2FwcC9jb21wb25lbnRzL2NhdGFsb2d1ZS9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2F0YWxvZ3VlL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0YWxvZ3VlL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0IHtcbiAgLnByb2R1Y3QtaW1hZ2Uge1xuICAgIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgfVxuICB9XG59XG4iLCIucHJvZHVjdCAucHJvZHVjdC1pbWFnZSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product',
          templateUrl: './product.component.html',
          styleUrls: ['./product.component.scss']
        }]
      }], function () {
        return [];
      }, {
        product: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/catalogue/product/product.price.pipe.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/catalogue/product/product.price.pipe.ts ***!
    \********************************************************************/

  /*! exports provided: ProductPricePipe */

  /***/
  function srcAppComponentsCatalogueProductProductPricePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductPricePipe", function () {
      return ProductPricePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProductPricePipe = /*#__PURE__*/function () {
      function ProductPricePipe() {
        _classCallCheck(this, ProductPricePipe);
      }

      _createClass(ProductPricePipe, [{
        key: "transform",
        value: function transform(value) {
          var prefix;
          var price;

          if (value.priceLower) {
            price = value.priceLower;
            prefix = 'от';
          } else {
            price = value.price;
            prefix = '';
          }

          if (isNaN(price)) {
            return 'уточняйте';
          } else {
            return "".concat(prefix, " ").concat(parseFloat(price).toFixed(2), " \u20B4");
          }
        }
      }]);

      return ProductPricePipe;
    }();

    ProductPricePipe.ɵfac = function ProductPricePipe_Factory(t) {
      return new (t || ProductPricePipe)();
    };

    ProductPricePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "productPrice",
      type: ProductPricePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductPricePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'productPrice'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/contacts/contacts.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/contacts/contacts.component.ts ***!
    \***********************************************************/

  /*! exports provided: ContactsComponent */

  /***/
  function srcAppComponentsContactsContactsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsComponent", function () {
      return ContactsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactsComponent = /*#__PURE__*/function () {
      function ContactsComponent() {
        _classCallCheck(this, ContactsComponent);
      }

      _createClass(ContactsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactsComponent;
    }();

    ContactsComponent.ɵfac = function ContactsComponent_Factory(t) {
      return new (t || ContactsComponent)();
    };

    ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactsComponent,
      selectors: [["app-contacts"]],
      decls: 2,
      vars: 0,
      template: function ContactsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contacts works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contacts',
          templateUrl: './contacts.component.html',
          styleUrls: ['./contacts.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/payment-and-delivery/payment-and-delivery.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/payment-and-delivery/payment-and-delivery.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: PaymentAndDeliveryComponent */

  /***/
  function srcAppComponentsPaymentAndDeliveryPaymentAndDeliveryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentAndDeliveryComponent", function () {
      return PaymentAndDeliveryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PaymentAndDeliveryComponent = /*#__PURE__*/function () {
      function PaymentAndDeliveryComponent() {
        _classCallCheck(this, PaymentAndDeliveryComponent);
      }

      _createClass(PaymentAndDeliveryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PaymentAndDeliveryComponent;
    }();

    PaymentAndDeliveryComponent.ɵfac = function PaymentAndDeliveryComponent_Factory(t) {
      return new (t || PaymentAndDeliveryComponent)();
    };

    PaymentAndDeliveryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaymentAndDeliveryComponent,
      selectors: [["app-payment-and-delivery"]],
      decls: 2,
      vars: 0,
      template: function PaymentAndDeliveryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "payment-and-delivery works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5bWVudC1hbmQtZGVsaXZlcnkvcGF5bWVudC1hbmQtZGVsaXZlcnkuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentAndDeliveryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-payment-and-delivery',
          templateUrl: './payment-and-delivery.component.html',
          styleUrls: ['./payment-and-delivery.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/portfolio/portfolio.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/portfolio/portfolio.component.ts ***!
    \*************************************************************/

  /*! exports provided: PortfolioComponent */

  /***/
  function srcAppComponentsPortfolioPortfolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
      return PortfolioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PortfolioComponent = /*#__PURE__*/function () {
      function PortfolioComponent() {
        _classCallCheck(this, PortfolioComponent);
      }

      _createClass(PortfolioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PortfolioComponent;
    }();

    PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
      return new (t || PortfolioComponent)();
    };

    PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PortfolioComponent,
      selectors: [["app-portfolio"]],
      decls: 2,
      vars: 0,
      template: function PortfolioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "portfolio works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-portfolio',
          templateUrl: './portfolio.component.html',
          styleUrls: ['./portfolio.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/screen404/screen404.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/screen404/screen404.component.ts ***!
    \*************************************************************/

  /*! exports provided: Screen404Component */

  /***/
  function srcAppComponentsScreen404Screen404ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Screen404Component", function () {
      return Screen404Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Screen404Component = /*#__PURE__*/function () {
      function Screen404Component() {
        _classCallCheck(this, Screen404Component);
      }

      _createClass(Screen404Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Screen404Component;
    }();

    Screen404Component.ɵfac = function Screen404Component_Factory(t) {
      return new (t || Screen404Component)();
    };

    Screen404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Screen404Component,
      selectors: [["app-screen404"]],
      decls: 2,
      vars: 0,
      template: function Screen404Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 404\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2NyZWVuNDA0L3NjcmVlbjQwNC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Screen404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-screen404',
          templateUrl: './screen404.component.html',
          styleUrls: ['./screen404.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/misha/Work/Projects/rodnikov/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map