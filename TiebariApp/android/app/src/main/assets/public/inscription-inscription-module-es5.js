function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inscription-inscription-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inscription/inscription.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inscription/inscription.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInscriptionInscriptionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content padding>\n  <form [formGroup]=\"signupForm\">\n  <div class=\"padding\">\n    <div class=\"logo\">\n      <ion-icon color=\"light\" name=\"contact\"></ion-icon>\n    </div>\n\n    <ion-item>\n      <ion-label color=\"light\" position=\"stacked\">Email</ion-label>\n      <ion-input color=\"light\" type=\"mail\" placeholder=\"Adresse email\" formControlName=\"email\" [class.invalid]=\"!signupForm.controls['email'].valid\n       && signupForm.controls['email'].touched\">\n\n      </ion-input>\n    </ion-item>\n    <ion-item\n            class=\"error-message\"\n            *ngIf=\"!signupForm.controls['email'].valid\n      && signupForm.controls['email'].touched\"\n    >\n      <ion-label>Please enter a valid email.</ion-label>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label color=\"light\" position=\"stacked\">Mot de passe</ion-label>\n      <ion-input color=\"light\" type=\"password\" placeholder=\"Mot de passe\" formControlName=\"password\" [class.invalid]=\"!signupForm.controls['password'].valid\n      && signupForm.controls['password'].touched\">\n\n      </ion-input>\n    </ion-item>\n    <ion-item\n            class=\"error-message\"\n            *ngIf=\"!signupForm.controls['password'].valid  &&\n      signupForm.controls['password'].touched\"\n    >\n      <ion-label>Your password needs more than 6 characters.</ion-label>\n    </ion-item>\n\n\n    <ion-button  color=\"light\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"signupUser(signupForm)\"[disabled]=\"!signupForm.valid\">\n      Inscription</ion-button>\n\n  </div>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/inscription/inscription.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/inscription/inscription.module.ts ***!
    \***************************************************/

  /*! exports provided: InscriptionPageModule */

  /***/
  function srcAppInscriptionInscriptionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InscriptionPageModule", function () {
      return InscriptionPageModule;
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
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _inscription_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inscription.page */
    "./src/app/inscription/inscription.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var InscriptionPageModule = function InscriptionPageModule() {
      _classCallCheck(this, InscriptionPageModule);
    };

    InscriptionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([{
        path: '',
        component: _inscription_page__WEBPACK_IMPORTED_MODULE_5__["InscriptionPage"]
      }])],
      declarations: [_inscription_page__WEBPACK_IMPORTED_MODULE_5__["InscriptionPage"]]
    })], InscriptionPageModule);
    /***/
  },

  /***/
  "./src/app/inscription/inscription.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/inscription/inscription.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInscriptionInscriptionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "form {\n  margin-bottom: 32px;\n}\nform button {\n  margin-top: 20px !important;\n}\np {\n  font-size: 0.8em;\n  color: #d2d2d2;\n}\nion-label {\n  margin-left: 5px;\n}\nion-input {\n  padding: 5px;\n}\n.invalid {\n  border-bottom: 1px solid #ff6153;\n}\n.error-message {\n  min-height: 2.2rem;\n}\n.error-message ion-label {\n  margin: 2px 0;\n  font-size: 60%;\n  color: #ff6153;\n}\n.error-message .item-inner {\n  border-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J5dWt1L0J1cmVhdS9hL1RpZWJhcmlWMi9UaWViYXJpQXBwL3NyYy9hcHAvaW5zY3JpcHRpb24vaW5zY3JpcHRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9pbnNjcmlwdGlvbi9pbnNjcmlwdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGO0FEQUU7RUFDRSwyQkFBQTtBQ0VKO0FERUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNDRjtBREVBO0VBQ0UsZ0JBQUE7QUNDRjtBREVBO0VBQ0UsWUFBQTtBQ0NGO0FERUE7RUFDRSxnQ0FBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNFSjtBREFFO0VBQ0UsMkJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2luc2NyaXB0aW9uL2luc2NyaXB0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBidXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG5wIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6ICNkMmQyZDI7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmludmFsaWQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmNjE1Mztcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBtaW4taGVpZ2h0OiAyLjJyZW07XG4gIGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luOiAycHggMDtcbiAgICBmb250LXNpemU6IDYwJTtcbiAgICBjb2xvcjogI2ZmNjE1MztcbiAgfVxuICAuaXRlbS1pbm5lciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG59XG4iLCJmb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cbmZvcm0gYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6ICNkMmQyZDI7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmludmFsaWQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmNjE1Mztcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBtaW4taGVpZ2h0OiAyLjJyZW07XG59XG4uZXJyb3ItbWVzc2FnZSBpb24tbGFiZWwge1xuICBtYXJnaW46IDJweCAwO1xuICBmb250LXNpemU6IDYwJTtcbiAgY29sb3I6ICNmZjYxNTM7XG59XG4uZXJyb3ItbWVzc2FnZSAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/inscription/inscription.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/inscription/inscription.page.ts ***!
    \*************************************************/

  /*! exports provided: InscriptionPage */

  /***/
  function srcAppInscriptionInscriptionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InscriptionPage", function () {
      return InscriptionPage;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var InscriptionPage =
    /*#__PURE__*/
    function () {
      function InscriptionPage(authService, loadingCtrl, alertCtrl, formBuilder, router) {
        _classCallCheck(this, InscriptionPage);

        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.router = router;
        this.signupForm = this.formBuilder.group({
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email])],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        });
      }

      _createClass(InscriptionPage, [{
        key: "signupUser",
        value: function signupUser(signupForm) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var email, password;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (signupForm.valid) {
                      _context2.next = 4;
                      break;
                    }

                    console.log('Need to complete the form, current value: ', signupForm.value);
                    _context2.next = 12;
                    break;

                  case 4:
                    email = signupForm.value.email;
                    password = signupForm.value.password;
                    this.authService.signupUser(email, password).then(function () {
                      _this.loading.dismiss().then(function () {
                        _this.router.navigateByUrl('home');
                      });
                    }, function (error) {
                      _this.loading.dismiss().then(function () {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
                        /*#__PURE__*/
                        regeneratorRuntime.mark(function _callee() {
                          var alert;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return this.alertCtrl.create({
                                    message: error.message,
                                    buttons: [{
                                      text: 'Ok',
                                      role: 'cancel'
                                    }]
                                  });

                                case 2:
                                  alert = _context.sent;
                                  _context.next = 5;
                                  return alert.present();

                                case 5:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });
                    });
                    _context2.next = 9;
                    return this.loadingCtrl.create();

                  case 9:
                    this.loading = _context2.sent;
                    _context2.next = 12;
                    return this.loading.present();

                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InscriptionPage;
    }();

    InscriptionPage.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    InscriptionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inscription',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inscription.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inscription/inscription.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inscription.page.scss */
      "./src/app/inscription/inscription.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], InscriptionPage);
    /***/
  }
}]);
//# sourceMappingURL=inscription-inscription-module-es5.js.map