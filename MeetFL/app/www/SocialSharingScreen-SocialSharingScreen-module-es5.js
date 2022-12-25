function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SocialSharingScreen-SocialSharingScreen-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/SocialSharingScreen/SocialSharingScreen.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/SocialSharingScreen/SocialSharingScreen.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSocialSharingScreenSocialSharingScreenHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar #j_19 color=\"primary\">\n        <ion-title #j_21>\n            Tell your friends about MeetFL!\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n    <ion-item #j_2__ion4Item>\n        <ion-label #j_2__ion4Label position=\"stacked\">\n            Message\n        </ion-label>\n        <ion-icon #j_2__icon name=\"mail\" slot=\"end\">\n        </ion-icon>\n        <ion-input #j_2 name=\"Input1\" placeholder=\"Enter text\" value=\"Install MeetFL today, It's the best!\">\n        </ion-input>\n    </ion-item>\n    <ion-item #j_3__ion4Item>\n        <ion-label #j_3__ion4Label position=\"stacked\">\n            Subject\n        </ion-label>\n        <ion-icon #j_3__icon name=\"albums\" slot=\"end\">\n        </ion-icon>\n        <ion-input #j_3 name=\"Input1\" placeholder=\"Enter text\" value=\"MeetFL\">\n        </ion-input>\n    </ion-item>\n    <ion-item #j_4__ion4Item>\n        <ion-label #j_4__ion4Label position=\"stacked\">\n            Url\n        </ion-label>\n        <ion-icon #j_4__icon name=\"add\" slot=\"end\">\n        </ion-icon>\n        <ion-input #j_4 name=\"Input1\" placeholder=\"Enter text\">\n        </ion-input>\n    </ion-item>\n    <ion-item #j_5__ion4Item>\n        <ion-label #j_5__ion4Label position=\"stacked\">\n            Image\n        </ion-label>\n        <ion-icon #j_5__icon name=\"image\" slot=\"end\">\n        </ion-icon>\n        <ion-input #j_5 name=\"Input1\" placeholder=\"Enter text\" [(ngModel)]=\"imageToShare\">\n        </ion-input>\n    </ion-item>\n    <ion-grid #j_6>\n        <ion-row #j_7>\n            <ion-col #j_8>\n                <ion-button #j_9 expand=\"full\" shape=\"round\" (click)=\"sharebuttonClick__j_9($event, currentItem)\">\n                    <ion-icon #j_9__icon name=\"share-alt\" slot=\"start\">\n                    </ion-icon>\n                    Share\n                </ion-button>\n            </ion-col>\n            <ion-col #j_10>\n                <ion-button #j_11 expand=\"block\" shape=\"round\" [routerLink]=\"['/tabs']\">\n                    Go Back\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-grid #j_12>\n        <ion-row #j_13>\n            <ion-col #j_14>\n                <ion-text #j_15>\n                    Application\n                </ion-text>\n            </ion-col>\n            <ion-col #j_16>\n                <ion-text #j_17>\n                    {{__getMapping(currentItem, 'j_17__text', '', false)}}\n                </ion-text>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/SocialSharingScreen/SocialSharingScreen.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/SocialSharingScreen/SocialSharingScreen.module.ts ***!
    \*******************************************************************/

  /*! exports provided: SocialSharingScreenPageModule */

  /***/
  function srcAppSocialSharingScreenSocialSharingScreenModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialSharingScreenPageModule", function () {
      return SocialSharingScreenPageModule;
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


    var _SocialSharingScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./SocialSharingScreen */
    "./src/app/SocialSharingScreen/SocialSharingScreen.ts");
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

    var SocialSharingScreenPageModule = function SocialSharingScreenPageModule() {
      _classCallCheck(this, SocialSharingScreenPageModule);
    };

    SocialSharingScreenPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_SocialSharingScreen__WEBPACK_IMPORTED_MODULE_6__["SocialSharingScreen"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _scripts_directives_module__WEBPACK_IMPORTED_MODULE_8__["DirectivesModule"], _scripts_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_10__["CustomModulesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _SocialSharingScreen__WEBPACK_IMPORTED_MODULE_6__["SocialSharingScreen"]
      }])],
      exports: [_SocialSharingScreen__WEBPACK_IMPORTED_MODULE_6__["SocialSharingScreen"]]
    })], SocialSharingScreenPageModule);
    /***/
  },

  /***/
  "./src/app/SocialSharingScreen/SocialSharingScreen.scss":
  /*!**************************************************************!*\
    !*** ./src/app/SocialSharingScreen/SocialSharingScreen.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSocialSharingScreenSocialSharingScreenScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".go-back {\n  display: flex;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  margin-top: 8px;\n}\n.go-back .go-back {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvYXBwZXJ5L2plbmtpbnMvd29ya3NwYWNlLzcwMTA5My1hbmRyb2lkLzYxODM2NS83MDEwOTMvYW5kcm9pZC9hcHAvc3JjL2FwcC9Tb2NpYWxTaGFyaW5nU2NyZWVuL1NvY2lhbFNoYXJpbmdTY3JlZW4uc2NzcyIsInNyYy9hcHAvU29jaWFsU2hhcmluZ1NjcmVlbi9Tb2NpYWxTaGFyaW5nU2NyZWVuLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7QURBSTtFQUNJLGlCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9Tb2NpYWxTaGFyaW5nU2NyZWVuL1NvY2lhbFNoYXJpbmdTY3JlZW4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nby1iYWNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAuZ28tYmFjayB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cbn1cbiIsIi5nby1iYWNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLmdvLWJhY2sgLmdvLWJhY2sge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/SocialSharingScreen/SocialSharingScreen.ts":
  /*!************************************************************!*\
    !*** ./src/app/SocialSharingScreen/SocialSharingScreen.ts ***!
    \************************************************************/

  /*! exports provided: SocialSharingScreen */

  /***/
  function srcAppSocialSharingScreenSocialSharingScreenTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialSharingScreen", function () {
      return SocialSharingScreen;
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

    var SocialSharingScreen = /*#__PURE__*/function () {
      function SocialSharingScreen(Apperyio, $aio_mappingHelper, $aio_changeDetector) {
        _classCallCheck(this, SocialSharingScreen);

        this.Apperyio = Apperyio;
        this.$aio_mappingHelper = $aio_mappingHelper;
        this.$aio_changeDetector = $aio_changeDetector;
        this.imageToShare = '';
        this.currentItem = null;
        this.mappingData = {};
        this.$aio_dataServices = {
          "socialSharing": "invokeService_socialSharing"
        };
      }

      _createClass(SocialSharingScreen, [{
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
        key: "sharebuttonClick__j_9",
        value: function sharebuttonClick__j_9(event, currentItem) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    /* Invoke data service */
                    this.invokeService_socialSharing();

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "invokeService_socialSharing",
        value: function invokeService_socialSharing(cb) {
          var _this = this;

          this.Apperyio.getService("SocialSharingService").then(function (service) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var data;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (service) {
                        _context3.next = 3;
                        break;
                      }

                      console.log("Error. Service was not found.");
                      return _context3.abrupt("return");

                    case 3:
                      data = {};
                      this.$aio_changeDetector.detectChanges();
                      /* Mapping */

                      data = this.$aio_mappingHelper.updateData(data, ["message"], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_2', 'ionic4input', 'value'));
                      data = this.$aio_mappingHelper.updateData(data, ["subject"], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_3', 'ionic4input', 'value'));
                      data = this.$aio_mappingHelper.updateData(data, ["url"], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_4', 'ionic4input', 'value'));
                      data = this.$aio_mappingHelper.updateData(data, ["files"], function (value) {
                        return [value];
                      }(this.$aio_mappingHelper.getSubdata(this.imageToShare, [])));
                      service.execute({
                        data: data
                      }).subscribe(
                      /* onsuccess */
                      function (res) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var _this3 = this;

                          var mappingData;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  mappingData = {};
                                  /* Mapping */

                                  mappingData.j_17__text = function () {
                                    return _this3.$aio_mappingHelper.getSubdata(res, ["app"]);
                                  };

                                  this.mappingData = Object.assign({}, this.mappingData, mappingData);
                                  if (cb && typeof cb === "function") cb(res);

                                case 4:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      }, function (err) {
                        console.log(err);
                      });

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          });
        }
      }]);

      return SocialSharingScreen;
    }();

    SocialSharingScreen.ctorParameters = function () {
      return [{
        type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"]
      }, {
        type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('j_2', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SocialSharingScreen.prototype, "j_2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('j_3', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SocialSharingScreen.prototype, "j_3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('j_4', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SocialSharingScreen.prototype, "j_4", void 0);
    SocialSharingScreen = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./SocialSharingScreen.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/SocialSharingScreen/SocialSharingScreen.html"))["default"],
      selector: 'page-social-sharing-screen',
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./SocialSharingScreen.scss */
      "./src/app/SocialSharingScreen/SocialSharingScreen.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"], _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], SocialSharingScreen);
    /***/
  }
}]);
//# sourceMappingURL=SocialSharingScreen-SocialSharingScreen-module-es5.js.map