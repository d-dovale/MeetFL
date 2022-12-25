function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TermsOfService_Settings-TermsOfService_Settings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/TermsOfService_Settings/TermsOfService_Settings.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/TermsOfService_Settings/TermsOfService_Settings.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTermsOfService_SettingsTermsOfService_SettingsHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"content\" color=\"primary\">\n    <ion-grid #j_212>\n        <ion-row #j_213>\n            <ion-col #j_214 class=\"terms-wrapper\">\n                <div #j_215 class=\"terms-panel\">\n                    <ion-text #j_216 color=\"dark\" class=\"title\">\n                        Terms of Service\n                    </ion-text>\n                    <ion-text #j_217 color=\"dark\" class=\"description\">\n                        This General Privacy Policy (also referred to as the ‘Privacy Policy’) provides\n                        information on the collection, use, and sharing (collectively referred to ‘processing’\n                        or ‘process’) as of personal information by Corporation and its affiliates in connection\n                        with your use of websites, mobile applications, and social media pages that link\n                        to this Privacy Policy, your interactions with during in-person meetings or at events,\n                        and in the context of other offline sales and marketing activities. This Privacy\n                        Policy also explains the privacy rights you have in relation to these processing\n                        activities.This General Privacy Policy (also referred to as the ‘Privacy Policy’)\n                        provides information on the collection, use, and sharing (collectively referred to\n                        ‘processing’ or ‘process’) as of personal information by Corporation and its affiliates\n                        in connection with your use of websites, mobile applications, and social media pages\n                        that link to this Privacy Policy, your interactions with during in-person meetings\n                        or at events, and in the context of other offline sales and marketing activities.\n                        This Privacy Policy also explains the privacy rights you have in relation to these\n                        processing activities.\n                    </ion-text>\n                    <ion-button #j_218 color=\"primary\" expand=\"block\" [routerLink]=\"['/tabs']\">\n                        Ok\n                    </ion-button>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/TermsOfService_Settings/TermsOfService_Settings.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/TermsOfService_Settings/TermsOfService_Settings.module.ts ***!
    \***************************************************************************/

  /*! exports provided: TermsOfService_SettingsPageModule */

  /***/
  function srcAppTermsOfService_SettingsTermsOfService_SettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsOfService_SettingsPageModule", function () {
      return TermsOfService_SettingsPageModule;
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


    var _TermsOfService_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./TermsOfService_Settings */
    "./src/app/TermsOfService_Settings/TermsOfService_Settings.ts");
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

    var TermsOfService_SettingsPageModule = function TermsOfService_SettingsPageModule() {
      _classCallCheck(this, TermsOfService_SettingsPageModule);
    };

    TermsOfService_SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_TermsOfService_Settings__WEBPACK_IMPORTED_MODULE_6__["TermsOfService_Settings"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _scripts_directives_module__WEBPACK_IMPORTED_MODULE_8__["DirectivesModule"], _scripts_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_10__["CustomModulesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _TermsOfService_Settings__WEBPACK_IMPORTED_MODULE_6__["TermsOfService_Settings"]
      }])],
      exports: [_TermsOfService_Settings__WEBPACK_IMPORTED_MODULE_6__["TermsOfService_Settings"]]
    })], TermsOfService_SettingsPageModule);
    /***/
  },

  /***/
  "./src/app/TermsOfService_Settings/TermsOfService_Settings.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/TermsOfService_Settings/TermsOfService_Settings.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTermsOfService_SettingsTermsOfService_SettingsScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".terms-wrapper {\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n}\n.terms-wrapper .terms-panel {\n  background-color: #ffffff;\n  border-radius: 8px;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  width: 335px;\n}\n.terms-wrapper .terms-panel .title {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 23px;\n}\n.terms-wrapper .terms-panel .description {\n  font-size: 14px;\n  line-height: 26px;\n  margin-top: 20px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.terms-wrapper .terms-panel ion-button {\n  margin-top: 25px;\n  height: 54px;\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvYXBwZXJ5L2plbmtpbnMvd29ya3NwYWNlLzcwMTA5My1hbmRyb2lkLzYxODM2NS83MDEwOTMvYW5kcm9pZC9hcHAvc3JjL2FwcC9UZXJtc09mU2VydmljZV9TZXR0aW5ncy9UZXJtc09mU2VydmljZV9TZXR0aW5ncy5zY3NzIiwic3JjL2FwcC9UZXJtc09mU2VydmljZV9TZXR0aW5ncy9UZXJtc09mU2VydmljZV9TZXR0aW5ncy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7QURDSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NSO0FEQ1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NaO0FERVE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBWjtBREdRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNEWiIsImZpbGUiOiJzcmMvYXBwL1Rlcm1zT2ZTZXJ2aWNlX1NldHRpbmdzL1Rlcm1zT2ZTZXJ2aWNlX1NldHRpbmdzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVybXMtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG4gICAgLnRlcm1zLXBhbmVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMzM1cHg7XG4gICAgICAgIFxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogNjB2aDtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAgIGhlaWdodDogNTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi50ZXJtcy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4udGVybXMtd3JhcHBlciAudGVybXMtcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAzMzVweDtcbn1cbi50ZXJtcy13cmFwcGVyIC50ZXJtcy1wYW5lbCAudGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xufVxuLnRlcm1zLXdyYXBwZXIgLnRlcm1zLXBhbmVsIC5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDYwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4udGVybXMtd3JhcHBlciAudGVybXMtcGFuZWwgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGhlaWdodDogNTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/TermsOfService_Settings/TermsOfService_Settings.ts":
  /*!********************************************************************!*\
    !*** ./src/app/TermsOfService_Settings/TermsOfService_Settings.ts ***!
    \********************************************************************/

  /*! exports provided: TermsOfService_Settings */

  /***/
  function srcAppTermsOfService_SettingsTermsOfService_SettingsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsOfService_Settings", function () {
      return TermsOfService_Settings;
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

    var TermsOfService_Settings = function TermsOfService_Settings(Apperyio, $aio_mappingHelper, $aio_changeDetector) {
      _classCallCheck(this, TermsOfService_Settings);

      this.Apperyio = Apperyio;
      this.$aio_mappingHelper = $aio_mappingHelper;
      this.$aio_changeDetector = $aio_changeDetector;
      this.currentItem = null;
      this.mappingData = {};
    };

    TermsOfService_Settings.ctorParameters = function () {
      return [{
        type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"]
      }, {
        type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    TermsOfService_Settings = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./TermsOfService_Settings.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/TermsOfService_Settings/TermsOfService_Settings.html"))["default"],
      selector: 'page-terms-of-service_-settings',
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./TermsOfService_Settings.scss */
      "./src/app/TermsOfService_Settings/TermsOfService_Settings.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"], _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], TermsOfService_Settings);
    /***/
  }
}]);
//# sourceMappingURL=TermsOfService_Settings-TermsOfService_Settings-module-es5.js.map