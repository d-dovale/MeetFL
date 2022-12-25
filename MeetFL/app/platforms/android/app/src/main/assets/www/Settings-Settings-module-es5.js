function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Settings-Settings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Settings/Settings.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Settings/Settings.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSettingsSettingsHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar #j_207 color=\"primary\">\n        <ion-title #j_208>\n            Settings\n        </ion-title>\n        <ion-icon #j_209 name=\"settings\" size=\"large\" slot=\"start\">\n        </ion-icon>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"content\" color=\"primary\">\n    <ion-grid #j_185>\n        <ion-row #j_186>\n            <ion-col #j_187 class=\"sign-up-wrapper\">\n                <div #j_188 class=\"sign-up-panel\">\n                    <div #j_189 class=\"form-wrapper\">\n                        <ion-grid #j_190>\n                            <ion-row #j_191>\n                                <ion-col #j_192>\n                                    <ion-button #j_193 expand=\"block\" shape=\"round\" [routerLink]=\"['/socialsharingscreen']\">\n                                        Share our app\n                                    </ion-button>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                        <ion-grid #j_194>\n                            <ion-row #j_195>\n                                <ion-col #j_196>\n                                    <ion-button #j_197 expand=\"block\" shape=\"round\" [routerLink]=\"['/termsofservice_settings']\">\n                                        Terms of Service\n                                    </ion-button>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                        <ion-grid #j_198>\n                            <ion-row #j_199>\n                                <ion-col #j_200>\n                                    <ion-button #j_201 expand=\"block\" shape=\"round\" [routerLink]=\"['/privacypolicy_settings']\">\n                                        Privacy policy\n                                    </ion-button>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                        <ion-grid #j_202>\n                            <ion-row #j_203>\n                                <ion-col #j_204>\n                                    <ion-button #j_205 expand=\"block\" shape=\"round\" [routerLink]=\"['/login']\">\n                                        LOG OUT\n                                    </ion-button>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Settings/Settings.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/Settings/Settings.module.ts ***!
    \*********************************************/

  /*! exports provided: SettingsPageModule */

  /***/
  function srcAppSettingsSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
      return SettingsPageModule;
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


    var _Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Settings */
    "./src/app/Settings/Settings.ts");
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

    var SettingsPageModule = function SettingsPageModule() {
      _classCallCheck(this, SettingsPageModule);
    };

    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_Settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _scripts_directives_module__WEBPACK_IMPORTED_MODULE_8__["DirectivesModule"], _scripts_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_10__["CustomModulesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _Settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]
      }])],
      exports: [_Settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]]
    })], SettingsPageModule);
    /***/
  },

  /***/
  "./src/app/Settings/Settings.scss":
  /*!****************************************!*\
    !*** ./src/app/Settings/Settings.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSettingsSettingsScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sign-up-wrapper {\n  display: flex;\n  margin-top: 100px;\n  align-items: center;\n  justify-content: center;\n}\n.sign-up-wrapper .sign-up-panel {\n  background-color: #ffffff;\n  border-radius: 8px;\n  width: 350px;\n}\n.sign-up-wrapper .sign-up-panel .title-wrapper {\n  border-bottom: 2px solid #f4f4f4;\n  text-align: center;\n}\n.sign-up-wrapper .sign-up-panel .title-wrapper .title {\n  font-size: 30px;\n  line-height: 38px;\n}\n.sign-up-wrapper .sign-up-panel .form-wrapper ion-item {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 23px;\n  --padding-start: 0;\n}\n.sign-up-wrapper .sign-up-panel .form-wrapper ion-item ion-icon {\n  font-size: 20px;\n  height: 100%;\n  margin: 13px 0 0 0;\n}\n.sign-up-wrapper .sign-up-panel .form-wrapper ion-text.error {\n  display: inline-block;\n  margin-top: 5px;\n  visibility: hidden;\n  font-size: 13px;\n}\n.sign-up-wrapper .sign-up-panel .form-wrapper ion-text.error.visible {\n  visibility: visible;\n}\n.sign-up-wrapper .sign-up-panel .form-wrapper ion-button {\n  height: 35px;\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 28px;\n}\n.bottom-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.bottom-wrapper .accept-policy {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 20px;\n  text-align: center;\n}\n.bottom-wrapper .have-account {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n}\n.bottom-wrapper .employer {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n}\n@media (min-height: 800px) {\n  .title-wrapper {\n    padding: 30px;\n  }\n\n  .form-wrapper {\n    padding: 0 30px 30px 30px;\n  }\n  .form-wrapper ion-item {\n    margin-top: 5px;\n  }\n  .form-wrapper ion-button {\n    margin-top: 20px;\n  }\n\n  .bottom-wrapper {\n    margin: 10px 25px 25px 25px;\n  }\n}\n@media (max-height: 800px) {\n  .title-wrapper {\n    padding: 20px 30px 15px 30px;\n  }\n\n  .form-wrapper {\n    padding: 0 25px 25px 25px;\n  }\n  .form-wrapper ion-item {\n    --min-height: 40px;\n    margin-top: 0;\n  }\n  .form-wrapper ion-item ion-label {\n    margin-top: 5px;\n  }\n  .form-wrapper ion-item ion-input {\n    --padding-top: 0;\n  }\n  .form-wrapper ion-button {\n    margin-top: 10px;\n  }\n\n  .bottom-wrapper {\n    margin: 10px 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvYXBwZXJ5L2plbmtpbnMvd29ya3NwYWNlLzcwMTA5My1hbmRyb2lkLzYxODM2NS83MDEwOTMvYW5kcm9pZC9hcHAvc3JjL2FwcC9TZXR0aW5ncy9TZXR0aW5ncy5zY3NzIiwic3JjL2FwcC9TZXR0aW5ncy9TZXR0aW5ncy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKO0FEQ0k7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NSO0FEQ1E7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0FDQ1o7QURDWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NoQjtBREtZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0hoQjtBREtnQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNIcEI7QURPWTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0xoQjtBRE9nQjtFQUNJLG1CQUFBO0FDTHBCO0FEU1k7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNQaEI7QURhQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNWSjtBRFlJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1ZSO0FEYUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDWFI7QURjSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNaUjtBRGlCQTtFQUNJO0lBQ0ksYUFBQTtFQ2ROOztFRGlCRTtJQUNJLHlCQUFBO0VDZE47RURnQk07SUFDSSxlQUFBO0VDZFY7RURpQk07SUFDSSxnQkFBQTtFQ2ZWOztFRG1CRTtJQUNJLDJCQUFBO0VDaEJOO0FBQ0Y7QURtQkE7RUFDSTtJQUNFLDRCQUFBO0VDakJKOztFRG9CRTtJQUNJLHlCQUFBO0VDakJOO0VEbUJNO0lBQ0ksa0JBQUE7SUFDQSxhQUFBO0VDakJWO0VEbUJVO0lBQ0ksZUFBQTtFQ2pCZDtFRG9CVTtJQUNJLGdCQUFBO0VDbEJkO0VEc0JNO0lBQ0ksZ0JBQUE7RUNwQlY7O0VEd0JFO0lBQ0ksaUJBQUE7RUNyQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL1NldHRpbmdzL1NldHRpbmdzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi11cC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG4gICAgLnNpZ24tdXAtcGFuZWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgXG4gICAgICAgIC50aXRsZS13cmFwcGVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjRmNGY0O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmZvcm0td3JhcHBlciB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxM3B4IDAgMCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW9uLXRleHQuZXJyb3Ige1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAmLnZpc2libGUge1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYm90dG9tLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIFxuICAgIC5hY2NlcHQtcG9saWN5IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAuaGF2ZS1hY2NvdW50IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAgICAgXG4gICAgLmVtcGxveWVyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBcbn1cblxuQG1lZGlhIChtaW4taGVpZ2h0OiA4MDBweCkge1xuICAgIC50aXRsZS13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICB9XG4gICAgXG4gICAgLmZvcm0td3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IDAgMzBweCAzMHB4IDMwcHg7XG4gICAgICAgIFxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuYm90dG9tLXdyYXBwZXIge1xuICAgICAgICBtYXJnaW46IDEwcHggMjVweCAyNXB4IDI1cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDgwMHB4KSB7XG4gICAgLnRpdGxlLXdyYXBwZXIge1xuICAgICAgcGFkZGluZzogMjBweCAzMHB4IDE1cHggMzBweDtcbiAgICB9XG4gICAgXG4gICAgLmZvcm0td3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IDAgMjVweCAyNXB4IDI1cHg7XG4gICAgICAgIFxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmJvdHRvbS13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDI1cHg7XG4gICAgfVxufVxuIiwiLnNpZ24tdXAtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zaWduLXVwLXdyYXBwZXIgLnNpZ24tdXAtcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiAzNTBweDtcbn1cbi5zaWduLXVwLXdyYXBwZXIgLnNpZ24tdXAtcGFuZWwgLnRpdGxlLXdyYXBwZXIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y0ZjRmNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNpZ24tdXAtd3JhcHBlciAuc2lnbi11cC1wYW5lbCAudGl0bGUtd3JhcHBlciAudGl0bGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xufVxuLnNpZ24tdXAtd3JhcHBlciAuc2lnbi11cC1wYW5lbCAuZm9ybS13cmFwcGVyIGlvbi1pdGVtIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuLnNpZ24tdXAtd3JhcHBlciAuc2lnbi11cC1wYW5lbCAuZm9ybS13cmFwcGVyIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMTNweCAwIDAgMDtcbn1cbi5zaWduLXVwLXdyYXBwZXIgLnNpZ24tdXAtcGFuZWwgLmZvcm0td3JhcHBlciBpb24tdGV4dC5lcnJvciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5zaWduLXVwLXdyYXBwZXIgLnNpZ24tdXAtcGFuZWwgLmZvcm0td3JhcHBlciBpb24tdGV4dC5lcnJvci52aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5zaWduLXVwLXdyYXBwZXIgLnNpZ24tdXAtcGFuZWwgLmZvcm0td3JhcHBlciBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG4uYm90dG9tLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5ib3R0b20td3JhcHBlciAuYWNjZXB0LXBvbGljeSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ib3R0b20td3JhcHBlciAuaGF2ZS1hY2NvdW50IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJvdHRvbS13cmFwcGVyIC5lbXBsb3llciB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtaW4taGVpZ2h0OiA4MDBweCkge1xuICAudGl0bGUtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMzBweDtcbiAgfVxuXG4gIC5mb3JtLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDAgMzBweCAzMHB4IDMwcHg7XG4gIH1cbiAgLmZvcm0td3JhcHBlciBpb24taXRlbSB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG4gIC5mb3JtLXdyYXBwZXIgaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuXG4gIC5ib3R0b20td3JhcHBlciB7XG4gICAgbWFyZ2luOiAxMHB4IDI1cHggMjVweCAyNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC1oZWlnaHQ6IDgwMHB4KSB7XG4gIC50aXRsZS13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHggMTVweCAzMHB4O1xuICB9XG5cbiAgLmZvcm0td3JhcHBlciB7XG4gICAgcGFkZGluZzogMCAyNXB4IDI1cHggMjVweDtcbiAgfVxuICAuZm9ybS13cmFwcGVyIGlvbi1pdGVtIHtcbiAgICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICAuZm9ybS13cmFwcGVyIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG4gIC5mb3JtLXdyYXBwZXIgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xuICB9XG4gIC5mb3JtLXdyYXBwZXIgaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5ib3R0b20td3JhcHBlciB7XG4gICAgbWFyZ2luOiAxMHB4IDI1cHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Settings/Settings.ts":
  /*!**************************************!*\
    !*** ./src/app/Settings/Settings.ts ***!
    \**************************************/

  /*! exports provided: Settings */

  /***/
  function srcAppSettingsSettingsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Settings", function () {
      return Settings;
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

    var Settings = function Settings(Apperyio, $aio_mappingHelper, $aio_changeDetector) {
      _classCallCheck(this, Settings);

      this.Apperyio = Apperyio;
      this.$aio_mappingHelper = $aio_mappingHelper;
      this.$aio_changeDetector = $aio_changeDetector;
      this.currentItem = null;
      this.mappingData = {};
    };

    Settings.ctorParameters = function () {
      return [{
        type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"]
      }, {
        type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Settings = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./Settings.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Settings/Settings.html"))["default"],
      selector: 'page-settings',
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./Settings.scss */
      "./src/app/Settings/Settings.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"], _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], Settings);
    /***/
  }
}]);
//# sourceMappingURL=Settings-Settings-module-es5.js.map