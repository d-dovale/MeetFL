(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Login-Login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Login/Login.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Login/Login.html ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"content\" color=\"primary\">\n    <ion-grid #j_67>\n        <ion-row #j_68>\n            <ion-col #j_69 class=\"login-wrapper\">\n                <div #j_70 class=\"login-panel\">\n                    <div #j_71 class=\"title-wrapper\">\n                        <ion-img #j_72 src=\"assets/images/output-onlinepngtools_6.png\" alt=\"Image error\"\n                        class=\"login-logo\">\n                        </ion-img>\n                        <ion-text #j_73 color=\"light\" class=\"bottom-title\">\n                            Log in to continue\n                        </ion-text>\n                    </div>\n                    <div #j_74 class=\"form-wrapper\">\n                        <form #loginForm=\"ngForm\" #loginForm_el (ngSubmit)=\"loginformNgSubmit__j_75($event, currentItem)\">\n                            <ion-item #j_76__ion4Item>\n                                <ion-label #j_76__ion4Label color=\"light\" position=\"floating\">\n                                    Username\n                                </ion-label>\n                                <ion-icon #j_76__icon ngClass=\"input-icon\" name=\"person\" slot=\"end\" color=\"light\">\n                                </ion-icon>\n                                <ion-input #username=\"ngModel\" #username_el [ngModel] [ngModelOptions]=\"{updateOn: 'change'}\"\n                                color=\"dark\" maxlength=\"254\" minlength=\"1\" name=\"username\" pattern=\"^(([^<>()\\[\\]\\\\.,;:\\s@&#34;]+(\\.[^<>()\\[\\]\\\\.,;:\\s@&#34;]+)*)|(&#34;.+&#34;))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$\"\n                                required=\"true\" type=\"email\">\n                                </ion-input>\n                            </ion-item>\n                            <ion-text #j_77 color=\"danger\" class=\"error\" [ngClass]=\"{'visible': username.touched && username.errors}\">\n                                Please enter a valid Email\n                            </ion-text>\n                            <ion-item #j_78__ion4Item>\n                                <ion-label #j_78__ion4Label color=\"light\" position=\"floating\">\n                                    Password\n                                </ion-label>\n                                <ion-icon #j_78__icon ngClass=\"eye\" name=\"eye\" slot=\"end\" color=\"light\">\n                                </ion-icon>\n                                <ion-input #password=\"ngModel\" #password_el [ngModel] [ngModelOptions]=\"{updateOn: 'change'}\"\n                                ngClass=\"password\" color=\"dark\" name=\"password\" required=\"true\" type=\"password\">\n                                </ion-input>\n                            </ion-item>\n                            <ion-text #j_79 color=\"danger\" class=\"error\" [ngClass]=\"{'visible': password.touched && password.errors && password.errors.required}\">\n                                Please enter a Password\n                            </ion-text>\n                            <div #j_80 class=\"keep-logged-in\">\n                                <ion-item #j_81__ion4Item lines=\"none\" mode=\"ios\">\n                                    <ion-label #j_81__ion4Label color=\"dark\" mode=\"ios\">\n                                        Keep me logged in\n                                    </ion-label>\n                                    <ion-checkbox #rememberme=\"ngModel\" #rememberme_el [ngModel]=\"false\" mode=\"ios\"\n                                    name=\"rememberme\" slot=\"start\" value=\"Checkbox1_value\">\n                                    </ion-checkbox>\n                                </ion-item>\n                            </div>\n                            <ion-button #j_82 color=\"primary\" expand=\"block\" shape=\"round\" type=\"submit\" (click)=\"signinbuttonClick__j_82($event, currentItem)\">\n                                Sign in\n                            </ion-button>\n                        </form>\n                        <div #j_83 class=\"bottom-panel\">\n                            <ion-text #j_84 color=\"dark\" class=\"sign-up\" (click)=\"Apperyio.navigateTo('SignUp')\">\n                                Sign up\n                            </ion-text>\n                        </div>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/Login/Login.module.ts":
/*!***************************************!*\
  !*** ./src/app/Login/Login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Login */ "./src/app/Login/Login.ts");
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/pipes.module */ "./src/app/scripts/pipes.module.ts");
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scripts/directives.module */ "./src/app/scripts/directives.module.ts");
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scripts/components.module */ "./src/app/scripts/components.module.ts");
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scripts/custom-modules.module */ "./src/app/scripts/custom-modules.module.ts");











let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _Login__WEBPACK_IMPORTED_MODULE_6__["Login"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _scripts_directives_module__WEBPACK_IMPORTED_MODULE_8__["DirectivesModule"],
            _scripts_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
            _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_10__["CustomModulesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                    path: '',
                    component: _Login__WEBPACK_IMPORTED_MODULE_6__["Login"]
                }])
        ],
        exports: [
            _Login__WEBPACK_IMPORTED_MODULE_6__["Login"]
        ]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/Login/Login.scss":
/*!**********************************!*\
  !*** ./src/app/Login/Login.scss ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.login-wrapper .login-panel {\n  background-color: #ffffff;\n  border-radius: 8px;\n  width: 360px;\n}\n.login-wrapper .login-panel .title-wrapper {\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  border-bottom: 2px solid #f4f4f4;\n}\n.login-wrapper .login-panel .title-wrapper .top-title {\n  font-size: 30px;\n  line-height: 38px;\n}\n.login-wrapper .login-panel .title-wrapper .bottom-title {\n  font-size: 18px;\n  line-height: 23px;\n  margin-top: 5px;\n}\n.login-wrapper .login-panel .form-wrapper {\n  padding: 0 30px 30px 30px;\n}\n.login-wrapper .login-panel .form-wrapper ion-item {\n  margin-top: 10px;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 23px;\n  --padding-start: 0;\n}\n.login-wrapper .login-panel .form-wrapper ion-item ion-icon {\n  font-size: 20px;\n  height: 100%;\n  margin: 13px 0 0 0;\n}\n.login-wrapper .login-panel .form-wrapper ion-text.error {\n  display: inline-block;\n  margin-top: 5px;\n  visibility: hidden;\n}\n.login-wrapper .login-panel .form-wrapper ion-text.error.visible {\n  visibility: visible;\n}\n.login-wrapper .login-panel .form-wrapper .keep-logged-in {\n  margin-top: 10px;\n}\n.login-wrapper .login-panel .form-wrapper .keep-logged-in ion-checkbox {\n  height: 20px;\n  width: 20px;\n}\n.login-wrapper .login-panel .form-wrapper ion-button.ion-color-primary {\n  margin-top: 25px;\n  height: 54px;\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 28px;\n}\n.login-wrapper .login-panel .form-wrapper .bottom-panel {\n  display: flex;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  margin-top: 25px;\n}\n.login-wrapper .login-panel .form-wrapper .bottom-panel .sign-up {\n  margin-left: auto;\n}\n@media (min-height: 800px) {\n  .login-wrapper {\n    margin-top: 50px;\n  }\n}\n@media (max-height: 800px) {\n  .login-wrapper {\n    margin-top: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvYXBwZXJ5L2plbmtpbnMvd29ya3NwYWNlLzcwMTA5My1hbmRyb2lkLzYxODM2NS83MDEwOTMvYW5kcm9pZC9hcHAvc3JjL2FwcC9Mb2dpbi9Mb2dpbi5zY3NzIiwic3JjL2FwcC9Mb2dpbi9Mb2dpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDSjtBRENJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDUjtBRENRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FDQ1o7QURDWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NoQjtBREVZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FoQjtBRElRO0VBQ0kseUJBQUE7QUNGWjtBRElZO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRmhCO0FESWdCO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ZwQjtBRE1ZO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNKaEI7QURNZ0I7RUFDSSxtQkFBQTtBQ0pwQjtBRFFZO0VBQ0ksZ0JBQUE7QUNOaEI7QURRZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ05wQjtBRFVZO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNSaEI7QURXWTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDVGhCO0FEV2dCO0VBQ0ksaUJBQUE7QUNUcEI7QURnQkE7RUFDSTtJQUNJLGdCQUFBO0VDYk47QUFDRjtBRGdCQTtFQUNJO0lBQ0ksZ0JBQUE7RUNkTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvTG9naW4vTG9naW4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG4gICAgLmxvZ2luLXBhbmVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICB3aWR0aDogMzYwcHg7XG4gICAgICAgIFxuICAgICAgICAudGl0bGUtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y0ZjRmNDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnRvcC10aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuYm90dG9tLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZm9ybS13cmFwcGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweCAzMHB4IDMwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEzcHggMCAwIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpb24tdGV4dC5lcnJvciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJi52aXNpYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5rZWVwLWxvZ2dlZC1pbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpb24tY2hlY2tib3gge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW9uLWJ1dHRvbi5pb24tY29sb3ItcHJpbWFyeSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5ib3R0b20tcGFuZWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAuc2lnbi11cCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIChtaW4taGVpZ2h0OiA4MDBweCkge1xuICAgIC5sb2dpbi13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LWhlaWdodDogODAwcHgpIHtcbiAgICAubG9naW4td3JhcHBlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgfVxufVxuIiwiLmxvZ2luLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2dpbi13cmFwcGVyIC5sb2dpbi1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDM2MHB4O1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luLXBhbmVsIC50aXRsZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmNGY0ZjQ7XG59XG4ubG9naW4td3JhcHBlciAubG9naW4tcGFuZWwgLnRpdGxlLXdyYXBwZXIgLnRvcC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG59XG4ubG9naW4td3JhcHBlciAubG9naW4tcGFuZWwgLnRpdGxlLXdyYXBwZXIgLmJvdHRvbS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5sb2dpbi13cmFwcGVyIC5sb2dpbi1wYW5lbCAuZm9ybS13cmFwcGVyIHtcbiAgcGFkZGluZzogMCAzMHB4IDMwcHggMzBweDtcbn1cbi5sb2dpbi13cmFwcGVyIC5sb2dpbi1wYW5lbCAuZm9ybS13cmFwcGVyIGlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luLXBhbmVsIC5mb3JtLXdyYXBwZXIgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAxM3B4IDAgMCAwO1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luLXBhbmVsIC5mb3JtLXdyYXBwZXIgaW9uLXRleHQuZXJyb3Ige1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luLXBhbmVsIC5mb3JtLXdyYXBwZXIgaW9uLXRleHQuZXJyb3IudmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4ubG9naW4td3JhcHBlciAubG9naW4tcGFuZWwgLmZvcm0td3JhcHBlciAua2VlcC1sb2dnZWQtaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luLXBhbmVsIC5mb3JtLXdyYXBwZXIgLmtlZXAtbG9nZ2VkLWluIGlvbi1jaGVja2JveCB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG4ubG9naW4td3JhcHBlciAubG9naW4tcGFuZWwgLmZvcm0td3JhcHBlciBpb24tYnV0dG9uLmlvbi1jb2xvci1wcmltYXJ5IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgaGVpZ2h0OiA1NHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luLXBhbmVsIC5mb3JtLXdyYXBwZXIgLmJvdHRvbS1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG4ubG9naW4td3JhcHBlciAubG9naW4tcGFuZWwgLmZvcm0td3JhcHBlciAuYm90dG9tLXBhbmVsIC5zaWduLXVwIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbkBtZWRpYSAobWluLWhlaWdodDogODAwcHgpIHtcbiAgLmxvZ2luLXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LWhlaWdodDogODAwcHgpIHtcbiAgLmxvZ2luLXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/Login/Login.ts":
/*!********************************!*\
  !*** ./src/app/Login/Login.ts ***!
  \********************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ "./src/app/scripts/apperyio/apperyio_helper.ts");
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ "./src/app/scripts/apperyio/apperyio_mapping_helper.ts");





let Login = class Login {
    constructor(Apperyio, $aio_mappingHelper, $aio_changeDetector) {
        this.Apperyio = Apperyio;
        this.$aio_mappingHelper = $aio_mappingHelper;
        this.$aio_changeDetector = $aio_changeDetector;
        this.currentItem = null;
        this.mappingData = {};
        this.$aio_dataServices = {
            "dbLogin": "invokeService_dbLogin"
        };
    }
    __getMapping(_currentItem, property, defaultValue, isVariable, isSelected) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    }
    __setMapping(data = {}, keyName, propName) {
        const changes = data.detail || {};
        if (propName) {
            this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes[propName]);
        }
        else {
            this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes.value);
        }
    }
    markFormControlsAsTouched() {
        this.formUtils.markFormControlsAsTouched(this.loginForm.form, ['username', 'password']);
    }
    ngOnInit() {
        this.pageNgOnInit__j_65();
    }
    pageNgOnInit__j_65(event, currentItem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /* Run TypeScript */
            const databaseId = this.Apperyio.config.get("SecuritySettings.database_id");
            if (databaseId == 'SPECIFY YOUR DATABASE ID') {
                const alert = yield this.Apperyio.getController("AlertController").create({
                    header: 'Alert',
                    subHeader: 'Database Id is not specified',
                    message: 'Please open SecuritySettings and specify your database id as database_id property',
                    buttons: ['OK']
                });
                yield alert.present();
            }
            console.log('login screen');
            this.formUtils.showPasswordOnClick('page-login');
        });
    }
    loginformNgSubmit__j_75(event, currentItem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.loginForm.valid) {
                /* Invoke data service */
                this.invokeService_dbLogin();
            }
        });
    }
    signinbuttonClick__j_82(event, currentItem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /* Run TypeScript */
            this.formUtils.markFormControlsAsTouched(this.loginForm.form, ['username', 'password']);
        });
    }
    invokeService_dbLogin(cb) {
        this.Apperyio.getService("LoginService").then((service) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!service) {
                console.log("Error. Service was not found.");
                return;
            }
            let data = {};
            let params = {};
            let headers = {};
            this.$aio_changeDetector.detectChanges();
            /* Mapping */
            data = this.$aio_mappingHelper.updateData(data, [], this.$aio_mappingHelper.getComponentPropValue.call(this, 'loginForm', 'ionic4form', 'formData'));
            /* Present Loading */
            yield (() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let options = {
                    'spinner': 'circles',
                };
                let controller = this.Apperyio.getController('LoadingController');
                const loading = yield controller.create(options);
                return yield loading.present();
            }))();
            service.execute({
                data: data,
                params: params,
                headers: headers
            }).subscribe(
            /* onsuccess */
            (res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let mappingData = {};
                /* Mapping */
                yield this.$aio_mappingHelper.setServiceDataValue("sessionToken", [], this.$aio_mappingHelper.getSubdata(res, ["sessionToken"]));
                /* Dismiss loading */
                yield this.Apperyio.getController("LoadingController").dismiss();
                /* Navigate to Page */
                this.Apperyio.navigateTo('Tabs');
                this.mappingData = Object.assign({}, this.mappingData, mappingData);
                if (cb && typeof cb === "function")
                    cb(res);
            }), 
            /* onerror */
            (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                /* Dismiss loading */
                yield this.Apperyio.getController("LoadingController").dismiss();
                /* Present Toast */
                yield (() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    let options = {
                        'color': 'danger',
                        'duration': 1000,
                        'message': 'Invalid user\u0027s credentials',
                        'position': 'top',
                        'buttons': []
                    };
                    let controller = this.Apperyio.getController('ToastController');
                    const toast = yield controller.create(options);
                    return yield toast.present();
                }))();
            }));
        }));
    }
};
Login.ctorParameters = () => [
    { type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"] },
    { type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginForm_el', {
        static: false
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Login.prototype, "loginForm_el", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginForm', {
        static: true
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Login.prototype, "loginForm", void 0);
Login = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Login.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Login/Login.html")).default,
        selector: 'page-login',
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Login.scss */ "./src/app/Login/Login.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"], _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], Login);



/***/ })

}]);
//# sourceMappingURL=Login-Login-module-es2015.js.map