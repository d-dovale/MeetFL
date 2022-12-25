(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["BugReporting-BugReporting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/BugReporting/BugReporting.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/BugReporting/BugReporting.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"content\" color=\"primary\">\n    <ion-grid #j_146>\n        <ion-row #j_147>\n            <ion-col #j_148 class=\"terms-wrapper\">\n                <div #j_149 class=\"terms-panel\">\n                    <ion-text #j_150 color=\"dark\" class=\"title\">\n                        Bug reporting\n                    </ion-text>\n                    <ion-text #j_151 color=\"dark\" class=\"description\">\n                        If you have encountered a bug with the program, please report it here.\n                    </ion-text>\n                    <ion-item #j_152__ion4Item>\n                        <ion-input #j_152 name=\"Input1\" placeholder=\"Enter text\">\n                        </ion-input>\n                    </ion-item>\n                    <ion-button #j_153 color=\"primary\" expand=\"block\" shape=\"round\" [routerLink]=\"['/signup']\"\n                    (click)=\"button1_copyClick__j_153($event, currentItem)\">\n                        Report bug\n                    </ion-button>\n                    <div #j_154 class=\"go-back\">\n                        <ion-text #j_155 color=\"dark\" class=\"go-back\" (click)=\"Apperyio.navigateTo('Tabs')\">\n                            Go Back\n                        </ion-text>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/BugReporting/BugReporting.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/BugReporting/BugReporting.module.ts ***!
  \*****************************************************/
/*! exports provided: BugReportingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugReportingPageModule", function() { return BugReportingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _BugReporting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BugReporting */ "./src/app/BugReporting/BugReporting.ts");
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/pipes.module */ "./src/app/scripts/pipes.module.ts");
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scripts/directives.module */ "./src/app/scripts/directives.module.ts");
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scripts/components.module */ "./src/app/scripts/components.module.ts");
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scripts/custom-modules.module */ "./src/app/scripts/custom-modules.module.ts");











let BugReportingPageModule = class BugReportingPageModule {
};
BugReportingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _BugReporting__WEBPACK_IMPORTED_MODULE_6__["BugReporting"]
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
                    component: _BugReporting__WEBPACK_IMPORTED_MODULE_6__["BugReporting"]
                }])
        ],
        exports: [
            _BugReporting__WEBPACK_IMPORTED_MODULE_6__["BugReporting"]
        ]
    })
], BugReportingPageModule);



/***/ }),

/***/ "./src/app/BugReporting/BugReporting.scss":
/*!************************************************!*\
  !*** ./src/app/BugReporting/BugReporting.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".terms-wrapper {\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n}\n.terms-wrapper .terms-panel {\n  background-color: #ffffff;\n  border-radius: 8px;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  width: 335px;\n}\n.terms-wrapper .terms-panel .title {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 23px;\n}\n.terms-wrapper .terms-panel .description {\n  font-size: 14px;\n  line-height: 26px;\n  margin-top: 20px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.terms-wrapper .terms-panel ion-button {\n  margin-top: 25px;\n  height: 54px;\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 28px;\n}\n.terms-wrapper .terms-panel .go-back {\n  display: flex;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  margin-top: 8px;\n}\n.terms-wrapper .terms-panel .go-back .go-back {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvYXBwZXJ5L2plbmtpbnMvd29ya3NwYWNlLzcwMTA5My1hbmRyb2lkLzYxODM2NS83MDEwOTMvYW5kcm9pZC9hcHAvc3JjL2FwcC9CdWdSZXBvcnRpbmcvQnVnUmVwb3J0aW5nLnNjc3MiLCJzcmMvYXBwL0J1Z1JlcG9ydGluZy9CdWdSZXBvcnRpbmcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKO0FEQ0k7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDUjtBRENRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDWjtBREVRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQVo7QURHUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRFo7QURHUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNEWjtBREVZO0VBQ0ksaUJBQUE7QUNBaEIiLCJmaWxlIjoic3JjL2FwcC9CdWdSZXBvcnRpbmcvQnVnUmVwb3J0aW5nLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVybXMtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG4gICAgLnRlcm1zLXBhbmVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMzM1cHg7XG4gICAgICAgIFxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogNjB2aDtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAgIGhlaWdodDogNTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgfVxuICAgICAgICAuZ28tYmFjayB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgLmdvLWJhY2sge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLnRlcm1zLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi50ZXJtcy13cmFwcGVyIC50ZXJtcy1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDMzNXB4O1xufVxuLnRlcm1zLXdyYXBwZXIgLnRlcm1zLXBhbmVsIC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG59XG4udGVybXMtd3JhcHBlciAudGVybXMtcGFuZWwgLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWF4LWhlaWdodDogNjB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi50ZXJtcy13cmFwcGVyIC50ZXJtcy1wYW5lbCBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgaGVpZ2h0OiA1NHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLnRlcm1zLXdyYXBwZXIgLnRlcm1zLXBhbmVsIC5nby1iYWNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLnRlcm1zLXdyYXBwZXIgLnRlcm1zLXBhbmVsIC5nby1iYWNrIC5nby1iYWNrIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/BugReporting/BugReporting.ts":
/*!**********************************************!*\
  !*** ./src/app/BugReporting/BugReporting.ts ***!
  \**********************************************/
/*! exports provided: BugReporting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugReporting", function() { return BugReporting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ "./src/app/scripts/apperyio/apperyio_helper.ts");
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ "./src/app/scripts/apperyio/apperyio_mapping_helper.ts");





let BugReporting = class BugReporting {
    constructor(Apperyio, $aio_mappingHelper, $aio_changeDetector) {
        this.Apperyio = Apperyio;
        this.$aio_mappingHelper = $aio_mappingHelper;
        this.$aio_changeDetector = $aio_changeDetector;
        this.currentItem = null;
        this.mappingData = {};
        this.$aio_dataServices = {
            "service3": "invokeService_service3"
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
    button1_copyClick__j_153(event, currentItem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /* Invoke data service */
            this.invokeService_service3();
        });
    }
    invokeService_service3(cb) {
        this.Apperyio.getService("LoginDB_bugReports_create_service").then((service) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!service) {
                console.log("Error. Service was not found.");
                return;
            }
            let data = {};
            let params = {};
            let headers = {};
            this.$aio_changeDetector.detectChanges();
            /* Mapping */
            data = this.$aio_mappingHelper.updateData(data, ["Bug"], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_152', 'ionic4input', 'value'));
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
                this.mappingData = Object.assign({}, this.mappingData, mappingData);
                if (cb && typeof cb === "function")
                    cb(res);
            }), (err) => {
                console.log(err);
            });
        }));
    }
};
BugReporting.ctorParameters = () => [
    { type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"] },
    { type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('j_152', {
        static: false
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BugReporting.prototype, "j_152", void 0);
BugReporting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./BugReporting.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/BugReporting/BugReporting.html")).default,
        selector: 'page-bug-reporting',
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./BugReporting.scss */ "./src/app/BugReporting/BugReporting.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"], _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], BugReporting);



/***/ })

}]);
//# sourceMappingURL=BugReporting-BugReporting-module-es2015.js.map