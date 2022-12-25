function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Tabs-Tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Tabs/Tabs.html":
  /*!**********************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Tabs/Tabs.html ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n    <ion-tab-bar selectedTab=\"16479051\" slot=\"bottom\">\n        <ion-tab-button tab=\"Profile\">\n            <ion-icon name=\"person\">\n            </ion-icon>\n            <ion-label>\n                Profile\n            </ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"Home\">\n            <ion-icon name=\"home\">\n            </ion-icon>\n            <ion-label>\n                Home\n            </ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"Settings\">\n            <ion-icon name=\"settings\">\n            </ion-icon>\n            <ion-label>\n                Settings\n            </ion-label>\n        </ion-tab-button>\n    </ion-tab-bar>\n</ion-tabs>";
    /***/
  },

  /***/
  "./src/app/Tabs/Tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/Tabs/Tabs.module.ts ***!
    \*************************************/

  /*! exports provided: PageRoutingModule, TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageRoutingModule", function () {
      return PageRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Tabs */
    "./src/app/Tabs/Tabs.ts");
    /* harmony import */


    var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../scripts/pipes.module */
    "./src/app/scripts/pipes.module.ts");
    /* harmony import */


    var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../scripts/directives.module */
    "./src/app/scripts/directives.module.ts");
    /* harmony import */


    var _scripts_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../scripts/components.module */
    "./src/app/scripts/components.module.ts");
    /* harmony import */


    var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../scripts/custom-modules.module */
    "./src/app/scripts/custom-modules.module.ts");

    var routes = [{
      path: '',
      component: _Tabs__WEBPACK_IMPORTED_MODULE_6__["Tabs"],
      children: [{
        path: 'Profile',
        children: [{
          path: '',
          loadChildren: '../Profile/Profile.module#ProfilePageModule'
        }]
      }, {
        path: 'Home',
        children: [{
          path: '',
          loadChildren: '../Home/Home.module#HomePageModule'
        }]
      }, {
        path: 'Settings',
        children: [{
          path: '',
          loadChildren: '../Settings/Settings.module#SettingsPageModule'
        }]
      }, {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
      }]
    }];

    var PageRoutingModule = function PageRoutingModule() {
      _classCallCheck(this, PageRoutingModule);
    };

    PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })], PageRoutingModule);

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_Tabs__WEBPACK_IMPORTED_MODULE_6__["Tabs"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _scripts_directives_module__WEBPACK_IMPORTED_MODULE_8__["DirectivesModule"], _scripts_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_10__["CustomModulesModule"], PageRoutingModule],
      exports: [_Tabs__WEBPACK_IMPORTED_MODULE_6__["Tabs"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/Tabs/Tabs.scss":
  /*!********************************!*\
    !*** ./src/app/Tabs/Tabs.scss ***!
    \********************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsTabsScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1RhYnMvVGFicy5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/Tabs/Tabs.ts":
  /*!******************************!*\
    !*** ./src/app/Tabs/Tabs.ts ***!
    \******************************/

  /*! exports provided: Tabs */

  /***/
  function srcAppTabsTabsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tabs", function () {
      return Tabs;
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


    var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../scripts/apperyio/apperyio_helper */
    "./src/app/scripts/apperyio/apperyio_helper.ts");
    /* harmony import */


    var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../scripts/apperyio/apperyio_mapping_helper */
    "./src/app/scripts/apperyio/apperyio_mapping_helper.ts");

    var Tabs = function Tabs(Apperyio, $aio_mappingHelper, $aio_changeDetector) {
      _classCallCheck(this, Tabs);

      this.Apperyio = Apperyio;
      this.$aio_mappingHelper = $aio_mappingHelper;
      this.$aio_changeDetector = $aio_changeDetector;
      this.currentItem = null;
      this.mappingData = {};
    };

    Tabs.ctorParameters = function () {
      return [{
        type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"]
      }, {
        type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Tabs = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./Tabs.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Tabs/Tabs.html"))["default"],
      selector: 'page-tabs',
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./Tabs.scss */
      "./src/app/Tabs/Tabs.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"], _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], Tabs);
    /***/
  }
}]);
//# sourceMappingURL=Tabs-Tabs-module-es5.js.map