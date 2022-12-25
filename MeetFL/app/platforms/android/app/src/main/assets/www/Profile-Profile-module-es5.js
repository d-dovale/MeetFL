function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Profile-Profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Profile/Profile.html":
  /*!****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Profile/Profile.html ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n    <ion-toolbar #j_122 color=\"primary\">\n        <ion-buttons #j_123 slot=\"start\" *ngIf=\"!editMode\">\n            <ion-menu-button #j_124 color=\"light\">\n            </ion-menu-button>\n        </ion-buttons>\n        <ion-buttons #j_125 slot=\"start\" *ngIf=\"editMode\">\n            <ion-button #j_126 color=\"light\" expand=\"block\" fill=\"clear\" (click)=\"cancelbuttonClick__j_126($event, currentItem)\">\n                Cancel\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons #j_127 slot=\"end\" *ngIf=\"editMode\">\n            <ion-button #j_128 color=\"light\" disabled=\"{{profileForm.invalid}}\" expand=\"block\"\n            fill=\"clear\" (click)=\"savebuttonClick__j_128($event, currentItem)\">\n                Save\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons #j_129 slot=\"end\" *ngIf=\"!editMode\">\n            <ion-button #j_130 color=\"light\" expand=\"block\" fill=\"clear\" (click)=\"editbuttonClick__j_130($event, currentItem)\">\n                <ion-icon #j_130__icon name=\"brush\" src=\"assets/images/edit_Profile.svg\">\n                </ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"main-content\">\n    <div #j_88>\n        <div #j_89 class=\"title-wrapper\">\n            <ion-avatar #j_90>\n                <ion-img #j_91 [src]=\"photo\" alt=\"Avatar\">\n                </ion-img>\n            </ion-avatar>\n            <ion-text #j_92 color=\"light\" class=\"name\">\n                {{userInfo.firstName}} {{userInfo.lastName}}\n            </ion-text>\n            <ion-text #j_93 color=\"light\" class=\"description\">\n                Member since 21th Mrach, 2019\n            </ion-text>\n        </div>\n        <div #j_94>\n            <form #profileForm=\"ngForm\" #profileForm_el class=\"profile-form\" [ngClass]=\"{'view-mode': !editMode}\">\n                <ion-item #j_96__ion4Item lines=\"none\">\n                    <ion-label #j_96__ion4Label color=\"medium\" position=\"floating\">\n                        First name\n                    </ion-label>\n                    <ion-icon #j_96__icon name=\"person\" slot=\"end\" color=\"medium\">\n                    </ion-icon>\n                    <ion-input #firstName=\"ngModel\" #firstName_el [ngModel] clearInput=\"true\" color=\"dark\"\n                    maxlength=\"50\" minlength=\"1\" name=\"firstName\" readonly=\"{{!editMode}}\" required=\"true\">\n                    </ion-input>\n                </ion-item>\n                <ion-text #j_97 color=\"danger\" class=\"error\" [ngClass]=\"{'visible': firstName.touched && firstName.errors}\"\n                *ngIf=\"editMode\">\n                    {{firstName.errors &amp;&amp; firstName.errors.pattern ? 'Special characters are\n                    not allowed' : 'Please enter a valid First name'}}\n                </ion-text>\n                <ion-item #j_98__ion4Item lines=\"none\">\n                    <ion-label #j_98__ion4Label color=\"medium\" position=\"floating\">\n                        Last name\n                    </ion-label>\n                    <ion-icon #j_98__icon name=\"person\" slot=\"end\" color=\"medium\">\n                    </ion-icon>\n                    <ion-input #lastName=\"ngModel\" #lastName_el [ngModel] clearInput=\"true\" color=\"dark\"\n                    maxlength=\"50\" minlength=\"1\" name=\"lastName\" readonly=\"{{!editMode}}\" required=\"true\">\n                    </ion-input>\n                </ion-item>\n                <ion-text #j_99 color=\"danger\" class=\"error\" [ngClass]=\"{'visible': lastName.touched && lastName.errors}\"\n                *ngIf=\"editMode\">\n                    {{lastName.errors &amp;&amp; lastName.errors.pattern ? 'Special characters are not\n                    allowed' : 'Please enter a valid Last name'}}\n                </ion-text>\n                <ion-item #j_100__ion4Item lines=\"none\">\n                    <ion-label #j_100__ion4Label color=\"medium\" position=\"floating\">\n                        Address 1\n                    </ion-label>\n                    <ion-input #address1=\"ngModel\" #address1_el [ngModel] clearInput=\"true\" color=\"dark\"\n                    maxlength=\"50\" name=\"address1\" readonly=\"{{!editMode}}\">\n                    </ion-input>\n                </ion-item>\n                <ion-text #j_101 color=\"danger\" class=\"error\" [ngClass]=\"{'visible': address1.touched && address1.errors}\"\n                *ngIf=\"editMode\">\n                    Please enter a valid Address 1\n                </ion-text>\n                <ion-item #j_102__ion4Item lines=\"none\">\n                    <ion-label #j_102__ion4Label color=\"medium\" position=\"floating\">\n                        Address 2\n                    </ion-label>\n                    <ion-input #address2=\"ngModel\" #address2_el [ngModel] clearInput=\"true\" color=\"dark\"\n                    maxlength=\"50\" name=\"address2\" readonly=\"{{!editMode}}\">\n                    </ion-input>\n                </ion-item>\n                <ion-text #j_103 color=\"danger\" class=\"error\" [ngClass]=\"{'visible': address2.touched && address2.errors}\"\n                *ngIf=\"editMode\">\n                    Please enter a valid Address 2\n                </ion-text>\n                <ion-item #j_104__ion4Item lines=\"none\">\n                    <ion-label #j_104__ion4Label color=\"medium\" position=\"floating\">\n                        City\n                    </ion-label>\n                    <ion-icon #j_104__icon name=\"pin\" slot=\"end\" color=\"medium\">\n                    </ion-icon>\n                    <ion-input #city=\"ngModel\" #city_el [ngModel] clearInput=\"true\" color=\"dark\" maxlength=\"50\"\n                    name=\"city\" pattern=\"^[a-zA-Z0-9 ]*$\" readonly=\"{{!editMode}}\">\n                    </ion-input>\n                </ion-item>\n                <ion-text #j_105 color=\"danger\" class=\"error\" [ngClass]=\"{'visible': city.touched && city.errors}\"\n                *ngIf=\"editMode\">\n                    Please enter a valid City\n                </ion-text>\n                <ion-item #j_106__ion4Item lines=\"none\">\n                    <ion-label #j_106__ion4Label color=\"medium\" position=\"floating\">\n                        Zip\n                    </ion-label>\n                    <ion-input #zipCode=\"ngModel\" #zipCode_el [ngModel] clearInput=\"true\" color=\"dark\"\n                    name=\"zipCode\" pattern=\"(^\\d{5}$)|(^\\d{5}-\\d{4}$)\" readonly=\"{{!editMode}}\" type=\"text\">\n                    </ion-input>\n                </ion-item>\n                <ion-text #j_107 color=\"danger\" class=\"error\" [ngClass]=\"{'visible': zipCode.touched && zipCode.errors}\"\n                *ngIf=\"editMode\">\n                    Please enter a valid Zip code\n                </ion-text>\n                <ion-item #j_108__ion4Item lines=\"none\">\n                    <ion-label #j_108__ion4Label color=\"medium\" position=\"floating\">\n                        Email\n                    </ion-label>\n                    <ion-icon #j_108__icon name=\"mail\" slot=\"end\" color=\"medium\">\n                    </ion-icon>\n                    <ion-input #email=\"ngModel\" #email_el [ngModel] color=\"dark\" maxlength=\"254\" minlength=\"1\"\n                    name=\"email\" pattern=\"^(([^<>()\\[\\]\\\\.,;:\\s@&#34;]+(\\.[^<>()\\[\\]\\\\.,;:\\s@&#34;]+)*)|(&#34;.+&#34;))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$\"\n                    readonly=\"{{!editMode}}\" required=\"true\" type=\"email\">\n                    </ion-input>\n                </ion-item>\n                <ion-item #j_109__ion4Item lines=\"none\">\n                    <ion-label #j_109__ion4Label color=\"medium\" position=\"floating\">\n                        Phone number\n                    </ion-label>\n                    <ion-icon #j_109__icon name=\"call\" slot=\"end\" color=\"medium\">\n                    </ion-icon>\n                    <ion-input #phoneNumber=\"ngModel\" #phoneNumber_el [ngModel] clearInput=\"true\" color=\"dark\"\n                    maxlength=\"14\" name=\"phoneNumber\" readonly=\"{{!editMode}}\" type=\"tel\">\n                    </ion-input>\n                </ion-item>\n                <ion-text #j_110 color=\"danger\" class=\"error\" [ngClass]=\"{'visible': phoneNumber.touched && phoneNumber.errors}\"\n                *ngIf=\"editMode\">\n                    Please enter a valid Phone Number\n                </ion-text>\n                <ion-item #j_111 lines=\"none\">\n                    <ion-label #j_111__ion4Label color=\"medium\" position=\"floating\">\n                        Type of Job\n                    </ion-label>\n                    <ion-select #jobID=\"ngModel\" #jobID_el [ngModel] disabled=\"{{!editMode}}\" name=\"jobID\">\n                        <ion-select-option #j_113 value=\"human_services\">\n                            Human Services\n                        </ion-select-option>\n                        <ion-select-option #j_114 value=\"finance\">\n                            Finance\n                        </ion-select-option>\n                        <ion-select-option #j_115 value=\"education\">\n                            Education\n                        </ion-select-option>\n                        <ion-select-option #j_116 value=\"research\">\n                            Research\n                        </ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item #j_117 lines=\"none\">\n                    <ion-label #j_117__ion4Label color=\"medium\" position=\"floating\">\n                        Position\n                    </ion-label>\n                    <ion-select #position=\"ngModel\" #position_el [ngModel] disabled=\"{{!editMode}}\"\n                    name=\"position\">\n                        <ion-select-option #j_119 value=\"employer\">\n                            Employer\n                        </ion-select-option>\n                        <ion-select-option #j_120 value=\"employee\">\n                            Employee\n                        </ion-select-option>\n                    </ion-select>\n                </ion-item>\n            </form>\n        </div>\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Profile/Profile.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/Profile/Profile.module.ts ***!
    \*******************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Profile */
    "./src/app/Profile/Profile.ts");
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

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_Profile__WEBPACK_IMPORTED_MODULE_6__["Profile"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _scripts_directives_module__WEBPACK_IMPORTED_MODULE_8__["DirectivesModule"], _scripts_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_10__["CustomModulesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _Profile__WEBPACK_IMPORTED_MODULE_6__["Profile"]
      }])],
      exports: [_Profile__WEBPACK_IMPORTED_MODULE_6__["Profile"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/Profile/Profile.scss":
  /*!**************************************!*\
    !*** ./src/app/Profile/Profile.scss ***!
    \**************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --ion-font-family: \"Google Sans\", -apple-system, BlinkMacSystemFont, sans-serif;\n}\n:host ion-content.content {\n  --background: linear-gradient(var(--ion-color-primary), var(--ion-color-secondary));\n}\n:host ion-content.main-content {\n  --background: linear-gradient( to bottom, var(--ion-color-primary) 250px, var(--ion-color-primary) 250px, #f4f4f4 250px );\n  --padding-top: 10px;\n  --padding-end: 10px;\n  --padding-bottom: 10px;\n  --padding-start: 10px;\n}\n.ion-color-white {\n  --ion-color-base: var(--ion-color-white) !important;\n  --ion-color-base-rgb: var(--ion-color-white-rgb) !important;\n  --ion-color-contrast: var(--ion-color-white-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-white-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-white-shade) !important;\n  --ion-color-tint: var(--ion-color-white-tint) !important;\n}\n.ion-color-black {\n  --ion-color-base: var(--ion-color-black) !important;\n  --ion-color-base-rgb: var(--ion-color-black-rgb) !important;\n  --ion-color-contrast: var(--ion-color-black-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-black-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-black-shade) !important;\n  --ion-color-tint: var(--ion-color-black-tint) !important;\n}\n.title-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.title-wrapper ion-avatar {\n  height: 140px;\n  width: 140px;\n  border: 3px solid var(--ion-color-light);\n  margin-bottom: 10px;\n}\n.title-wrapper .name {\n  font-weight: 500;\n  font-size: 28px;\n  line-height: 36px;\n  letter-spacing: 0.02em;\n}\n.title-wrapper .description {\n  font-size: 12px;\n  line-height: 15px;\n  opacity: 0.7;\n}\nion-item {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 23px;\n  --padding-top: 3px;\n  --padding-end: 25px;\n  --padding-bottom: 3px;\n  --padding-start: 25px;\n}\nion-item ion-icon {\n  font-size: 20px;\n  height: 100%;\n  margin: 13px 0 0 0;\n}\nion-text.error {\n  display: inline-block;\n  margin: 5px 25px 0 25px;\n  visibility: hidden;\n}\nion-text.error.visible {\n  visibility: visible;\n}\nform.view-mode ion-item {\n  border-radius: 4px;\n  border: 1px solid transparent;\n}\nform.view-mode .item-select-disabled ion-label {\n  opacity: 1 !important;\n}\nform.view-mode .item-select-disabled ion-select {\n  opacity: 1;\n  color: var(--ion-color-dark);\n}\nform:not(.view-mode) {\n  background-color: white;\n  border-radius: 4px;\n}\nform:not(.view-mode) ion-item:first-child {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n}\nform:not(.view-mode) ion-item:last-child {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\nform:not(.view-mode) ion-item ion-icon {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvYXBwZXJ5L2plbmtpbnMvd29ya3NwYWNlLzcwMTA5My1hbmRyb2lkLzYxODM2NS83MDEwOTMvYW5kcm9pZC9hcHAvc3JjL2FwcC9Qcm9maWxlL1Byb2ZpbGUuc2NzcyIsInNyYy9hcHAvUHJvZmlsZS9Qcm9maWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDSSwrRUFBQTtBQ1JKO0FEVUk7RUFDSSxtRkFBQTtBQ1JSO0FEV0k7RUFDSSx5SEFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDVFI7QURnQkk7RUFDSSxtREFBQTtFQUNBLDJEQUFBO0VBQ0EsZ0VBQUE7RUFDQSx3RUFBQTtFQUNBLDBEQUFBO0VBQ0Esd0RBQUE7QUNiUjtBRE9JO0VBQ0ksbURBQUE7RUFDQSwyREFBQTtFQUNBLGdFQUFBO0VBQ0Esd0VBQUE7RUFDQSwwREFBQTtFQUNBLHdEQUFBO0FDSlI7QURRQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNMSjtBRE9JO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0FDTFI7QURRSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNOUjtBRFNJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ1BSO0FEV0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDUko7QURVSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNSUjtBRFlBO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDVEo7QURXSTtFQUNJLG1CQUFBO0FDVFI7QURjSTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7QUNYUjtBRGVRO0VBQ0kscUJBQUE7QUNiWjtBRGdCUTtFQUNJLFVBQUE7RUFDQSw0QkFBQTtBQ2RaO0FEbUJBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtBQ2hCSjtBRGtCSTtFQUNJLDRCQUFBO0VBQ0EsMkJBQUE7QUNoQlI7QURtQkk7RUFDSSwrQkFBQTtFQUNBLDhCQUFBO0FDakJSO0FEb0JJO0VBQ0ksYUFBQTtBQ2xCUiIsImZpbGUiOiJzcmMvYXBwL1Byb2ZpbGUvUHJvZmlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5cbi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG5cbjpob3N0IHtcbiAgICAtLWlvbi1mb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmO1xuICAgIFxuICAgIGlvbi1jb250ZW50LmNvbnRlbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpKTtcbiAgICB9XG4gICAgXG4gICAgaW9uLWNvbnRlbnQubWFpbi1jb250ZW50IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIHRvIGJvdHRvbSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDI1MHB4LCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgMjUwcHgsICNmNGY0ZjQgMjUwcHggKTtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgIH1cbn1cblxuJGN1c3RvbUNvbG9yczogKCd3aGl0ZScsICdibGFjaycpO1xuXG5AZWFjaCAkY29sb3IgaW4gJGN1c3RvbUNvbG9ycyB7XG4gICAgLmlvbi1jb2xvci0jeyRjb2xvcn0ge1xuICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9KSAhaW1wb3J0YW50O1xuICAgICAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS1yZ2IpICFpbXBvcnRhbnQ7XG4gICAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9LWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xuICAgICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS1zaGFkZSkgIWltcG9ydGFudDtcbiAgICAgICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS10aW50KSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLnRpdGxlLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgXG4gICAgaW9uLWF2YXRhciB7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLm5hbWUge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgIH1cbiAgICBcbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxufVxuXG5pb24taXRlbSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDI1cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMjVweDtcbiAgICBcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXJnaW46IDEzcHggMCAwIDA7XG4gICAgfVxufVxuXG5pb24tdGV4dC5lcnJvciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogNXB4IDI1cHggMCAyNXB4O1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBcbiAgICAmLnZpc2libGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbn1cblxuZm9ybS52aWV3LW1vZGUge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgXG4gICAgLml0ZW0tc2VsZWN0LWRpc2FibGVkIHtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZm9ybTpub3QoLnZpZXctbW9kZSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBcbiAgICBpb24taXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICB9XG4gICAgXG4gICAgaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgICB9XG4gICAgXG4gICAgaW9uLWl0ZW0gaW9uLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1pb24tZm9udC1mYW1pbHk6IFwiR29vZ2xlIFNhbnNcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQuY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSwgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkpO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQubWFpbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIHRvIGJvdHRvbSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDI1MHB4LCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgMjUwcHgsICNmNGY0ZjQgMjUwcHggKTtcbiAgLS1wYWRkaW5nLXRvcDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xufVxuXG4uaW9uLWNvbG9yLXdoaXRlIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXdoaXRlKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXdoaXRlLXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci13aGl0ZS1jb250cmFzdCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itd2hpdGUtY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXdoaXRlLXNoYWRlKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itd2hpdGUtdGludCkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1ibGFjayB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1ibGFjaykgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1ibGFjay1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItYmxhY2stY29udHJhc3QpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWJsYWNrLWNvbnRyYXN0LXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1ibGFjay1zaGFkZSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWJsYWNrLXRpbnQpICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi50aXRsZS13cmFwcGVyIGlvbi1hdmF0YXIge1xuICBoZWlnaHQ6IDE0MHB4O1xuICB3aWR0aDogMTQwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4udGl0bGUtd3JhcHBlciAubmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG59XG4udGl0bGUtd3JhcHBlciAuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbmlvbi1pdGVtIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctZW5kOiAyNXB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjVweDtcbn1cbmlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMTNweCAwIDAgMDtcbn1cblxuaW9uLXRleHQuZXJyb3Ige1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogNXB4IDI1cHggMCAyNXB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5pb24tdGV4dC5lcnJvci52aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuZm9ybS52aWV3LW1vZGUgaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuZm9ybS52aWV3LW1vZGUgLml0ZW0tc2VsZWN0LWRpc2FibGVkIGlvbi1sYWJlbCB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cbmZvcm0udmlldy1tb2RlIC5pdGVtLXNlbGVjdC1kaXNhYmxlZCBpb24tc2VsZWN0IHtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuZm9ybTpub3QoLnZpZXctbW9kZSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuZm9ybTpub3QoLnZpZXctbW9kZSkgaW9uLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG59XG5mb3JtOm5vdCgudmlldy1tb2RlKSBpb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xufVxuZm9ybTpub3QoLnZpZXctbW9kZSkgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Profile/Profile.ts":
  /*!************************************!*\
    !*** ./src/app/Profile/Profile.ts ***!
    \************************************/

  /*! exports provided: Profile */

  /***/
  function srcAppProfileProfileTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Profile", function () {
      return Profile;
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

    var Profile = /*#__PURE__*/function () {
      function Profile(Apperyio, $aio_mappingHelper, $aio_changeDetector) {
        _classCallCheck(this, Profile);

        this.Apperyio = Apperyio;
        this.$aio_mappingHelper = $aio_mappingHelper;
        this.$aio_changeDetector = $aio_changeDetector;
        this.editMode = false;
        this.userInfo = {};
        this.photo = "./assets/images/person.png";
        this.currentItem = null;
        this.mappingData = {};
        this.$aio_dataServices = {
          "getProfile": "invokeService_getProfile",
          "updateProfile": "invokeService_updateProfile",
          "update": "invokeService_update",
          "get": "invokeService_get"
        };
      }

      _createClass(Profile, [{
        key: "__getMapping",
        value: function __getMapping(_currentItem, property, defaultValue, isVariable, isSelected) {
          return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
        }
      }, {
        key: "__setMapping",
        value: function __setMapping() {
          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var keyName = arguments.length > 1 ? arguments[1] : undefined;
          var propName = arguments.length > 2 ? arguments[2] : undefined;
          var changes = data.detail || {};

          if (propName) {
            this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes[propName]);
          } else {
            this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes.value);
          }
        }
      }, {
        key: "setEditMode",
        value: function setEditMode(editModeValue) {
          this.editMode = editModeValue;
          var items = document.getElementsByClassName('profile-form')[0].getElementsByTagName('ion-item');

          for (var i = 0; i < items.length; i++) {
            var lines = this.editMode ? 'inset' : 'none';
            items[i].setAttribute('lines', lines);
          }
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.pageIonViewDidEnter__j_86();
        }
      }, {
        key: "pageIonViewDidEnter__j_86",
        value: function pageIonViewDidEnter__j_86(event, currentItem) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    /* Invoke data service */
                    this.invokeService_get();

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "cancelbuttonClick__j_126",
        value: function cancelbuttonClick__j_126(event, currentItem) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    /* Run TypeScript */
                    this.profileForm.form.setValue(this.userInfo);
                    this.setEditMode(false);

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "savebuttonClick__j_128",
        value: function savebuttonClick__j_128(event, currentItem) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    /* Invoke data service */
                    this.invokeService_updateProfile();

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "editbuttonClick__j_130",
        value: function editbuttonClick__j_130(event, currentItem) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    /* Run TypeScript */
                    this.setEditMode(true);

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "invokeService_getProfile",
        value: function invokeService_getProfile(cb) {
          var _this = this;

          this.Apperyio.getService("GetProfileService").then(function (service) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this2 = this;

              var data, params, headers;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (service) {
                        _context6.next = 3;
                        break;
                      }

                      console.log("Error. Service was not found.");
                      return _context6.abrupt("return");

                    case 3:
                      data = {};
                      params = {};
                      headers = {};
                      this.$aio_changeDetector.detectChanges();
                      /* Mapping */

                      data = this.$aio_mappingHelper.updateData(data, [], this.$aio_mappingHelper.getComponentPropValue.call(this, 'profileForm', 'ionic4form', 'formData'));
                      service.execute({
                        data: data,
                        params: params,
                        headers: headers
                      }).subscribe(
                      /* onsuccess */
                      function (res) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          var mappingData;
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  mappingData = {};
                                  /* Run TypeScript */

                                  console.log(res);
                                  this.userInfo = res;
                                  this.profileForm.form.setValue(this.userInfo);
                                  this.mappingData = Object.assign({}, this.mappingData, mappingData);
                                  if (cb && typeof cb === "function") cb(res);

                                case 6:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      }, function (err) {
                        console.log(err);
                      });

                    case 9:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          });
        }
      }, {
        key: "invokeService_updateProfile",
        value: function invokeService_updateProfile(cb) {
          var _this3 = this;

          this.Apperyio.getService("UpdateProfileService").then(function (service) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this4 = this;

              var data, params, headers;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (service) {
                        _context8.next = 3;
                        break;
                      }

                      console.log("Error. Service was not found.");
                      return _context8.abrupt("return");

                    case 3:
                      data = {};
                      params = {};
                      headers = {};
                      this.$aio_changeDetector.detectChanges();
                      /* Mapping */

                      data = this.$aio_mappingHelper.updateData(data, [], this.$aio_mappingHelper.getComponentPropValue.call(this, 'profileForm', 'ionic4form', 'formData'));
                      service.execute({
                        data: data,
                        params: params,
                        headers: headers
                      }).subscribe(
                      /* onsuccess */
                      function (res) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                          var mappingData;
                          return regeneratorRuntime.wrap(function _callee7$(_context7) {
                            while (1) {
                              switch (_context7.prev = _context7.next) {
                                case 0:
                                  mappingData = {};
                                  /* Run TypeScript */

                                  this.userInfo = this.profileForm.form.value;
                                  this.setEditMode(false);
                                  /* Invoke data service */

                                  this.invokeService_getProfile();
                                  this.mappingData = Object.assign({}, this.mappingData, mappingData);
                                  if (cb && typeof cb === "function") cb(res);

                                case 6:
                                case "end":
                                  return _context7.stop();
                              }
                            }
                          }, _callee7, this);
                        }));
                      }, function (err) {
                        console.log(err);
                      });

                    case 9:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          });
        }
      }, {
        key: "invokeService_update",
        value: function invokeService_update(cb) {
          var _this5 = this;

          this.Apperyio.getService("").then(function (service) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this6 = this;

              var data, params, headers;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      if (service) {
                        _context10.next = 3;
                        break;
                      }

                      console.log("Error. Service was not found.");
                      return _context10.abrupt("return");

                    case 3:
                      data = {};
                      params = {};
                      headers = {};
                      service.execute({
                        data: data,
                        params: params,
                        headers: headers
                      }).subscribe(
                      /* onsuccess */
                      function (res) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                          var mappingData;
                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) {
                              switch (_context9.prev = _context9.next) {
                                case 0:
                                  mappingData = {};
                                  /* Run TypeScript */

                                  this.userInfo = this.profileForm.form.value;
                                  this.setEditMode(false);
                                  /* Invoke data service */

                                  this.invokeService_get();
                                  this.mappingData = Object.assign({}, this.mappingData, mappingData);
                                  if (cb && typeof cb === "function") cb(res);

                                case 6:
                                case "end":
                                  return _context9.stop();
                              }
                            }
                          }, _callee9, this);
                        }));
                      }, function (err) {
                        console.log(err);
                      });

                    case 7:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            }));
          });
        }
      }, {
        key: "invokeService_get",
        value: function invokeService_get(cb) {
          var _this7 = this;

          this.Apperyio.getService("LoginDB_Userdisplay_read_service").then(function (service) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this8 = this;

              var data, params, headers;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      if (service) {
                        _context12.next = 3;
                        break;
                      }

                      console.log("Error. Service was not found.");
                      return _context12.abrupt("return");

                    case 3:
                      data = {};
                      params = {};
                      headers = {};
                      service.execute({
                        data: data,
                        params: params,
                        headers: headers
                      }).subscribe(
                      /* onsuccess */
                      function (res) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                          var mappingData;
                          return regeneratorRuntime.wrap(function _callee11$(_context11) {
                            while (1) {
                              switch (_context11.prev = _context11.next) {
                                case 0:
                                  mappingData = {};
                                  /* Mapping */

                                  _context11.t0 = this.$aio_mappingHelper;
                                  _context11.t1 = this.userInfo;
                                  _context11.t2 = [];
                                  _context11.next = 6;
                                  return this.$aio_mappingHelper.getStorageValue("userData", []);

                                case 6:
                                  _context11.t3 = _context11.sent;
                                  this.userInfo = _context11.t0.updateData.call(_context11.t0, _context11.t1, _context11.t2, _context11.t3);

                                  /* Run TypeScript */
                                  console.log(res);
                                  this.userInfo = res;
                                  this.profileForm.form.setValue(this.userInfo);
                                  this.mappingData = Object.assign({}, this.mappingData, mappingData);
                                  if (cb && typeof cb === "function") cb(res);

                                case 13:
                                case "end":
                                  return _context11.stop();
                              }
                            }
                          }, _callee11, this);
                        }));
                      }, function (err) {
                        console.log(err);
                      });

                    case 7:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12);
            }));
          });
        }
      }]);

      return Profile;
    }();

    Profile.ctorParameters = function () {
      return [{
        type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"]
      }, {
        type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('profileForm_el', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], Profile.prototype, "profileForm_el", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('profileForm', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], Profile.prototype, "profileForm", void 0);
    Profile = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./Profile.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Profile/Profile.html"))["default"],
      selector: 'page-profile',
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./Profile.scss */
      "./src/app/Profile/Profile.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"], _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], Profile);
    /***/
  }
}]);
//# sourceMappingURL=Profile-Profile-module-es5.js.map