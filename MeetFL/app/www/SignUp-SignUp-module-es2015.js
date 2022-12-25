(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SignUp-SignUp-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/SignUp/SignUp.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/SignUp/SignUp.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"content\" color=\"primary\">\n    <ion-grid #j_25>\n        <ion-row #j_26>\n            <ion-col #j_27 class=\"sign-up-wrapper\">\n                <div #j_28 class=\"sign-up-panel\">\n                    <div #j_29 class=\"title-wrapper\">\n                        <ion-text #j_30 color=\"primary\" class=\"title\">\n                            Sign up\n                        </ion-text>\n                    </div>\n                    <div #j_31 class=\"form-wrapper\">\n                        <form #signUpForm=\"ngForm\" #signUpForm_el (ngSubmit)=\"signupformNgSubmit__j_32($event, currentItem)\">\n                            <ion-item #j_33__ion4Item>\n                                <ion-label #j_33__ion4Label color=\"light\" position=\"floating\">\n                                    First name\n                                </ion-label>\n                                <ion-icon #j_33__icon name=\"person\" slot=\"end\" color=\"light\">\n                                </ion-icon>\n                                <ion-input #firstName=\"ngModel\" #firstName_el [ngModel] [ngModelOptions]=\"{updateOn: 'change'}\"\n                                color=\"dark\" maxlength=\"50\" minlength=\"1\" name=\"firstName\" pattern=\"^[a-zA-Z0-9 ]*$\"\n                                required=\"true\" type=\"text\">\n                                </ion-input>\n                            </ion-item>\n                            <ion-text #j_34 color=\"danger\" class=\"error\" [ngClass]=\"{'visible': firstName.touched && firstName.errors}\">\n                                {{firstName.errors &amp;&amp; firstName.errors.pattern ? 'Special characters are\n                                not allowed' : 'Please enter a valid First name'}}\n                            </ion-text>\n                            <ion-item #j_35__ion4Item>\n                                <ion-label #j_35__ion4Label color=\"light\" position=\"floating\">\n                                    Last name\n                                </ion-label>\n                                <ion-icon #j_35__icon name=\"person\" slot=\"end\" color=\"light\">\n                                </ion-icon>\n                                <ion-input #lastName=\"ngModel\" #lastName_el [ngModel] [ngModelOptions]=\"{updateOn: 'change'}\"\n                                color=\"dark\" maxlength=\"50\" minlength=\"1\" name=\"lastName\" pattern=\"^[a-zA-Z0-9 ]*$\"\n                                required=\"true\" type=\"text\">\n                                </ion-input>\n                            </ion-item>\n                            <ion-text #j_36 color=\"danger\" class=\"error\" [ngClass]=\"{'visible': lastName.touched && lastName.errors}\">\n                                {{lastName.errors &amp;&amp; lastName.errors.pattern ? 'Special characters are not\n                                allowed' : 'Please enter a valid Last name'}}\n                            </ion-text>\n                            <ion-item #j_37__ion4Item>\n                                <ion-label #j_37__ion4Label color=\"light\" position=\"floating\">\n                                    Email Address\n                                </ion-label>\n                                <ion-icon #j_37__icon name=\"mail\" slot=\"end\" color=\"light\">\n                                </ion-icon>\n                                <ion-input #username=\"ngModel\" #username_el [ngModel] [ngModelOptions]=\"{updateOn: 'change'}\"\n                                color=\"dark\" maxlength=\"254\" minlength=\"1\" name=\"username\" pattern=\"^(([^<>()\\[\\]\\\\.,;:\\s@&#34;]+(\\.[^<>()\\[\\]\\\\.,;:\\s@&#34;]+)*)|(&#34;.+&#34;))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$\"\n                                required=\"true\" type=\"email\">\n                                </ion-input>\n                            </ion-item>\n                            <ion-text #j_38 color=\"danger\" class=\"error\" [ngClass]=\"{'visible': username.touched && username.errors}\">\n                                Please enter a valid Email\n                            </ion-text>\n                            <ion-item #j_39__ion4Item>\n                                <ion-label #j_39__ion4Label color=\"light\" position=\"floating\">\n                                    Password\n                                </ion-label>\n                                <ion-icon #j_39__icon ngClass=\"eye\" name=\"eye\" slot=\"end\" color=\"light\">\n                                </ion-icon>\n                                <ion-input #password=\"ngModel\" #password_el [ngModel] [ngModelOptions]=\"{updateOn: 'change'}\"\n                                ngClass=\"password\" color=\"dark\" maxlength=\"50\" minlength=\"6\" name=\"password\" pattern=\"^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[ -/:-@\\[-`{-~]).{6,50}$\"\n                                required=\"true\" type=\"password\">\n                                </ion-input>\n                            </ion-item>\n                            <ion-text #j_40 color=\"danger\" class=\"error\" [ngClass]=\"{'visible': password.touched && password.errors}\">\n                                {{password.errors &amp;&amp; password.errors.pattern ? 'Password must be at least\n                                6 characters long, contain letters, numbers and symbols' : 'Please enter a valid\n                                Password'}}\n                            </ion-text>\n                            <ion-item #j_41 lines=\"none\" disabled=\"false\">\n                                <ion-label #j_41__ion4Label color=\"light\" position=\"floating\">\n                                    What type of job are you looking for?\n                                </ion-label>\n                                <ion-select #jobID=\"ngModel\" #jobID_el [ngModel] disabled=\"false\" name=\"jobID\">\n                                    <ion-select-option #j_43 value=\"human_services\">\n                                        Human Services\n                                    </ion-select-option>\n                                    <ion-select-option #j_44 value=\"finance\">\n                                        Finance\n                                    </ion-select-option>\n                                    <ion-select-option #j_45 value=\"education\">\n                                        Education\n                                    </ion-select-option>\n                                    <ion-select-option #j_46 value=\"research\">\n                                        Research\n                                    </ion-select-option>\n                                </ion-select>\n                            </ion-item>\n                            <ion-item #j_47 lines=\"none\" disabled=\"false\">\n                                <ion-label #j_47__ion4Label color=\"light\" position=\"floating\">\n                                    What is your position?\n                                </ion-label>\n                                <ion-select #position=\"ngModel\" #position_el [ngModel] disabled=\"false\" name=\"position\">\n                                    <ion-select-option #j_49 value=\"employee\">\n                                        Employee\n                                    </ion-select-option>\n                                    <ion-select-option #j_50 value=\"employer\">\n                                        Employer\n                                    </ion-select-option>\n                                </ion-select>\n                            </ion-item>\n                            <ion-button #j_51 color=\"primary\" expand=\"block\" shape=\"round\" type=\"submit\" (click)=\"markFormControlsAsTouched()\">\n                                Sign up\n                            </ion-button>\n                        </form>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row #j_52>\n            <ion-col #j_53 class=\"bottom-wrapper\">\n                <div #j_54 class=\"accept-policy\">\n                    <ion-text #j_55>\n                        By signing up you accept the\n                    </ion-text>\n                    <ion-text #j_56 color=\"secondary\" (click)=\"Apperyio.navigateTo('termsofservice')\">\n                        Terms of Service\n                    </ion-text>\n                    <ion-text #j_57>\n                        and\n                    </ion-text>\n                    <ion-text #j_58 color=\"secondary\" (click)=\"Apperyio.navigateTo('privacypolicy')\">\n                        Privacy Policy\n                    </ion-text>\n                </div>\n                <div #j_59 class=\"have-account\">\n                    <ion-text #j_60>\n                        Already have an account?\n                    </ion-text>\n                    <ion-text #j_61 color=\"secondary\" (click)=\"Apperyio.navigateTo('login')\">\n                        Sign in\n                    </ion-text>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/SignUp/SignUp.module.ts":
/*!*****************************************!*\
  !*** ./src/app/SignUp/SignUp.module.ts ***!
  \*****************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SignUp */ "./src/app/SignUp/SignUp.ts");
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/pipes.module */ "./src/app/scripts/pipes.module.ts");
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scripts/directives.module */ "./src/app/scripts/directives.module.ts");
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scripts/components.module */ "./src/app/scripts/components.module.ts");
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scripts/custom-modules.module */ "./src/app/scripts/custom-modules.module.ts");











let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _SignUp__WEBPACK_IMPORTED_MODULE_6__["SignUp"]
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
                    component: _SignUp__WEBPACK_IMPORTED_MODULE_6__["SignUp"]
                }])
        ],
        exports: [
            _SignUp__WEBPACK_IMPORTED_MODULE_6__["SignUp"]
        ]
    })
], SignUpPageModule);



/***/ }),

/***/ "./src/app/SignUp/SignUp.scss":
/*!************************************!*\
  !*** ./src/app/SignUp/SignUp.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sign-up-wrapper {\n  display: flex;\n  margin-top: 40px;\n  align-items: center;\n  justify-content: center;\n}\n.sign-up-wrapper .sign-up-panel {\n  background-color: #ffffff;\n  border-radius: 8px;\n  width: 350px;\n}\n.sign-up-wrapper .sign-up-panel .title-wrapper {\n  border-bottom: 2px solid #f4f4f4;\n  text-align: center;\n}\n.sign-up-wrapper .sign-up-panel .title-wrapper .title {\n  font-size: 30px;\n  line-height: 38px;\n}\n.sign-up-wrapper .sign-up-panel .form-wrapper ion-item {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 23px;\n  --padding-start: 0;\n}\n.sign-up-wrapper .sign-up-panel .form-wrapper ion-item ion-icon {\n  font-size: 20px;\n  height: 100%;\n  margin: 13px 0 0 0;\n}\n.sign-up-wrapper .sign-up-panel .form-wrapper ion-text.error {\n  display: inline-block;\n  margin-top: 5px;\n  visibility: hidden;\n  font-size: 13px;\n}\n.sign-up-wrapper .sign-up-panel .form-wrapper ion-text.error.visible {\n  visibility: visible;\n}\n.sign-up-wrapper .sign-up-panel .form-wrapper ion-button {\n  height: 54px;\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 28px;\n}\n.bottom-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.bottom-wrapper .accept-policy {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 20px;\n  text-align: center;\n}\n.bottom-wrapper .have-account {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n}\n.bottom-wrapper .employer {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n}\n@media (min-height: 800px) {\n  .title-wrapper {\n    padding: 30px;\n  }\n\n  .form-wrapper {\n    padding: 0 30px 30px 30px;\n  }\n  .form-wrapper ion-item {\n    margin-top: 5px;\n  }\n  .form-wrapper ion-button {\n    margin-top: 20px;\n  }\n\n  .bottom-wrapper {\n    margin: 10px 25px 25px 25px;\n  }\n}\n@media (max-height: 800px) {\n  .title-wrapper {\n    padding: 20px 30px 15px 30px;\n  }\n\n  .form-wrapper {\n    padding: 0 25px 25px 25px;\n  }\n  .form-wrapper ion-item {\n    --min-height: 40px;\n    margin-top: 0;\n  }\n  .form-wrapper ion-item ion-label {\n    margin-top: 5px;\n  }\n  .form-wrapper ion-item ion-input {\n    --padding-top: 0;\n  }\n  .form-wrapper ion-button {\n    margin-top: 10px;\n  }\n\n  .bottom-wrapper {\n    margin: 10px 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvYXBwZXJ5L2plbmtpbnMvd29ya3NwYWNlLzcwMTA5My1hbmRyb2lkLzYxODM2NS83MDEwOTMvYW5kcm9pZC9hcHAvc3JjL2FwcC9TaWduVXAvU2lnblVwLnNjc3MiLCJzcmMvYXBwL1NpZ25VcC9TaWduVXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDSjtBRENJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDUjtBRENRO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtBQ0NaO0FEQ1k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDaEI7QURLWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNIaEI7QURLZ0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSHBCO0FET1k7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNMaEI7QURPZ0I7RUFDSSxtQkFBQTtBQ0xwQjtBRFNZO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDUGhCO0FEYUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDVko7QURZSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNWUjtBRGFJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1hSO0FEY0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDWlI7QURpQkE7RUFDSTtJQUNJLGFBQUE7RUNkTjs7RURpQkU7SUFDSSx5QkFBQTtFQ2ROO0VEZ0JNO0lBQ0ksZUFBQTtFQ2RWO0VEaUJNO0lBQ0ksZ0JBQUE7RUNmVjs7RURtQkU7SUFDSSwyQkFBQTtFQ2hCTjtBQUNGO0FEbUJBO0VBQ0k7SUFDRSw0QkFBQTtFQ2pCSjs7RURvQkU7SUFDSSx5QkFBQTtFQ2pCTjtFRG1CTTtJQUNJLGtCQUFBO0lBQ0EsYUFBQTtFQ2pCVjtFRG1CVTtJQUNJLGVBQUE7RUNqQmQ7RURvQlU7SUFDSSxnQkFBQTtFQ2xCZDtFRHNCTTtJQUNJLGdCQUFBO0VDcEJWOztFRHdCRTtJQUNJLGlCQUFBO0VDckJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9TaWduVXAvU2lnblVwLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi11cC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbiAgICAuc2lnbi11cC1wYW5lbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICBcbiAgICAgICAgLnRpdGxlLXdyYXBwZXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmNGY0ZjQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZm9ybS13cmFwcGVyIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEzcHggMCAwIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpb24tdGV4dC5lcnJvciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICYudmlzaWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ib3R0b20td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG4gICAgLmFjY2VwdC1wb2xpY3kge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5oYXZlLWFjY291bnQge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgICAgICBcbiAgICAuZW1wbG95ZXIge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIFxufVxuXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDgwMHB4KSB7XG4gICAgLnRpdGxlLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgIH1cbiAgICBcbiAgICAuZm9ybS13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZzogMCAzMHB4IDMwcHggMzBweDtcbiAgICAgICAgXG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5ib3R0b20td3JhcHBlciB7XG4gICAgICAgIG1hcmdpbjogMTBweCAyNXB4IDI1cHggMjVweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LWhlaWdodDogODAwcHgpIHtcbiAgICAudGl0bGUtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nOiAyMHB4IDMwcHggMTVweCAzMHB4O1xuICAgIH1cbiAgICBcbiAgICAuZm9ybS13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZzogMCAyNXB4IDI1cHggMjVweDtcbiAgICAgICAgXG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIC0tbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuYm90dG9tLXdyYXBwZXIge1xuICAgICAgICBtYXJnaW46IDEwcHggMjVweDtcbiAgICB9XG59XG4iLCIuc2lnbi11cC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc2lnbi11cC13cmFwcGVyIC5zaWduLXVwLXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogMzUwcHg7XG59XG4uc2lnbi11cC13cmFwcGVyIC5zaWduLXVwLXBhbmVsIC50aXRsZS13cmFwcGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmNGY0ZjQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaWduLXVwLXdyYXBwZXIgLnNpZ24tdXAtcGFuZWwgLnRpdGxlLXdyYXBwZXIgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbn1cbi5zaWduLXVwLXdyYXBwZXIgLnNpZ24tdXAtcGFuZWwgLmZvcm0td3JhcHBlciBpb24taXRlbSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbn1cbi5zaWduLXVwLXdyYXBwZXIgLnNpZ24tdXAtcGFuZWwgLmZvcm0td3JhcHBlciBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDEzcHggMCAwIDA7XG59XG4uc2lnbi11cC13cmFwcGVyIC5zaWduLXVwLXBhbmVsIC5mb3JtLXdyYXBwZXIgaW9uLXRleHQuZXJyb3Ige1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uc2lnbi11cC13cmFwcGVyIC5zaWduLXVwLXBhbmVsIC5mb3JtLXdyYXBwZXIgaW9uLXRleHQuZXJyb3IudmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uc2lnbi11cC13cmFwcGVyIC5zaWduLXVwLXBhbmVsIC5mb3JtLXdyYXBwZXIgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cblxuLmJvdHRvbS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYm90dG9tLXdyYXBwZXIgLmFjY2VwdC1wb2xpY3kge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYm90dG9tLXdyYXBwZXIgLmhhdmUtYWNjb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ib3R0b20td3JhcHBlciAuZW1wbG95ZXIge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLWhlaWdodDogODAwcHgpIHtcbiAgLnRpdGxlLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gIH1cblxuICAuZm9ybS13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwIDMwcHggMzBweCAzMHB4O1xuICB9XG4gIC5mb3JtLXdyYXBwZXIgaW9uLWl0ZW0ge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuICAuZm9ybS13cmFwcGVyIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuICAuYm90dG9tLXdyYXBwZXIge1xuICAgIG1hcmdpbjogMTBweCAyNXB4IDI1cHggMjVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtaGVpZ2h0OiA4MDBweCkge1xuICAudGl0bGUtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMjBweCAzMHB4IDE1cHggMzBweDtcbiAgfVxuXG4gIC5mb3JtLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDAgMjVweCAyNXB4IDI1cHg7XG4gIH1cbiAgLmZvcm0td3JhcHBlciBpb24taXRlbSB7XG4gICAgLS1taW4taGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgLmZvcm0td3JhcHBlciBpb24taXRlbSBpb24tbGFiZWwge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuICAuZm9ybS13cmFwcGVyIGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgfVxuICAuZm9ybS13cmFwcGVyIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICAuYm90dG9tLXdyYXBwZXIge1xuICAgIG1hcmdpbjogMTBweCAyNXB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/SignUp/SignUp.ts":
/*!**********************************!*\
  !*** ./src/app/SignUp/SignUp.ts ***!
  \**********************************/
/*! exports provided: SignUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp", function() { return SignUp; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ "./src/app/scripts/apperyio/apperyio_helper.ts");
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ "./src/app/scripts/apperyio/apperyio_mapping_helper.ts");
/* harmony import */ var _scripts_custom_FormUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/custom/FormUtils */ "./src/app/scripts/custom/FormUtils.ts");






let SignUp = class SignUp {
    constructor(Apperyio, $aio_mappingHelper, $aio_changeDetector, formUtils) {
        this.Apperyio = Apperyio;
        this.$aio_mappingHelper = $aio_mappingHelper;
        this.$aio_changeDetector = $aio_changeDetector;
        this.formUtils = formUtils;
        this.currentItem = null;
        this.mappingData = {};
        this.$aio_dataServices = {
            "dbSignup": "invokeService_dbSignup",
            "service1": "invokeService_service1"
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
        this.formUtils.markFormControlsAsTouched(this.signUpForm.form, ['firstName', 'lastName', 'username', 'password', 'jobID']);
    }
    ngOnInit() {
        this.pageNgOnInit__j_23();
    }
    pageNgOnInit__j_23(event, currentItem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /* Run TypeScript */
            this.formUtils.showPasswordOnClick('page-sign-up');
        });
    }
    signupformNgSubmit__j_32(event, currentItem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.signUpForm.valid) {
                /* Invoke data service */
                this.invokeService_dbSignup();
            }
        });
    }
    invokeService_dbSignup(cb) {
        this.Apperyio.getService("SignupService").then((service) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!service) {
                console.log("Error. Service was not found.");
                return;
            }
            let data = {};
            let params = {};
            let headers = {};
            this.$aio_changeDetector.detectChanges();
            /* Mapping */
            data = this.$aio_mappingHelper.updateData(data, [], this.$aio_mappingHelper.getComponentPropValue.call(this, 'signUpForm', 'ionic4form', 'formData'));
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
                /* Navigate to Page */
                this.Apperyio.navigateTo('Tabs');
                /* Dismiss loading */
                yield this.Apperyio.getController("LoadingController").dismiss();
                /* Mapping */
                yield this.$aio_mappingHelper.setServiceDataValue("sessionToken", [], this.$aio_mappingHelper.getSubdata(res, ["sessionToken"]));
                /* Invoke data service */
                this.invokeService_service1();
                this.mappingData = Object.assign({}, this.mappingData, mappingData);
                if (cb && typeof cb === "function")
                    cb(res);
            }), 
            /* onerror */
            (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                /* Present Toast */
                yield (() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    let options = {
                        'color': 'danger',
                        'duration': 1000,
                        'message': 'Invalid user\u0027s data',
                        'position': 'top',
                        'buttons': []
                    };
                    let controller = this.Apperyio.getController('ToastController');
                    const toast = yield controller.create(options);
                    return yield toast.present();
                }))();
                /* Dismiss loading */
                yield this.Apperyio.getController("LoadingController").dismiss();
            }));
        }));
    }
    invokeService_service1(cb) {
        this.Apperyio.getService("SignUp").then((service) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!service) {
                console.log("Error. Service was not found.");
                return;
            }
            let data = {};
            let params = {};
            let headers = {};
            this.$aio_changeDetector.detectChanges();
            /* Mapping */
            data = this.$aio_mappingHelper.updateData(data, [], this.$aio_mappingHelper.getComponentPropValue.call(this, 'signUpForm', 'ionic4form', 'formData'));
            service.execute({
                data: data,
                params: params,
                headers: headers
            }).subscribe(
            /* onsuccess */
            (res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (cb && typeof cb === "function")
                    cb(res);
            }), (err) => {
                console.log(err);
            });
        }));
    }
};
SignUp.ctorParameters = () => [
    { type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"] },
    { type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _scripts_custom_FormUtils__WEBPACK_IMPORTED_MODULE_4__["ExportedClass"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signUpForm_el', {
        static: false
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SignUp.prototype, "signUpForm_el", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signUpForm', {
        static: true
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SignUp.prototype, "signUpForm", void 0);
SignUp = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./SignUp.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/SignUp/SignUp.html")).default,
        selector: 'page-sign-up',
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./SignUp.scss */ "./src/app/SignUp/SignUp.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"], _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _scripts_custom_FormUtils__WEBPACK_IMPORTED_MODULE_4__["ExportedClass"]])
], SignUp);



/***/ })

}]);
//# sourceMappingURL=SignUp-SignUp-module-es2015.js.map