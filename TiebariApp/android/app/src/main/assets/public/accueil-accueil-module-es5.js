function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accueil-accueil-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/accueil/accueil.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accueil/accueil.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccueilAccueilPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content padding>\n<form [formGroup]=\"loginForm\">\n\n  <div class=\"padding\">\n    <div class=\"logo\">\n      <ion-icon color=\"light\" name=\"contact\"></ion-icon>\n    </div>\n\n    <ion-item>\n      <ion-label color=\"light\" position=\"stacked\">Email</ion-label>\n      <ion-input color=\"light\" type=\"mail\" placeholder=\"Adresse email\"\n      [class.invalid]=\"!loginForm.controls['email'].valid &&\n      loginForm.controls['email'].touched\"\n      >\n\n      </ion-input>\n    </ion-item>\n    <ion-item\n            class=\"error-message\"\n            *ngIf=\"!loginForm.controls['email'].valid &&\n       loginForm.controls['email'].touched\"\n    >\n      <ion-label>Please enter a valid email address.</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color=\"light\" position=\"stacked\">Mot de passe</ion-label>\n      <ion-input color=\"light\" type=\"password\" placeholder=\"Mot de passe\"\n                 [class.invalid]=\"!loginForm.controls['password'].valid\n                 && loginForm.controls['password'].touched\"\n      >\n\n      </ion-input>\n\n      <ion-item\n              class=\"error-message\"\n              *ngIf=\"!loginForm.controls['password'].valid\n      && loginForm.controls['password'].touched\"\n      >\n        <ion-label>Your password needs more than 6 characters.</ion-label>\n      </ion-item>\n\n    </ion-item>\n\n    <ion-button color=\"light\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"loginUser(loginForm)\" [disabled]=\"!loginForm.valid\">Connexion</ion-button>\n  </div>\n</form>\n\n\n  <ion-button expand=\"block\" fill=\"clear\" routerLink=\"/inscription\">\n    Create a new account\n  </ion-button>\n\n  <ion-button expand=\"block\" fill=\"clear\" routerLink=\"/reset-password\">\n    I forgot my password :(\n  </ion-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/accueil/accueil.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/accueil/accueil.module.ts ***!
    \*******************************************/

  /*! exports provided: AccueilPageModule */

  /***/
  function srcAppAccueilAccueilModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccueilPageModule", function () {
      return AccueilPageModule;
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


    var _accueil_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./accueil.page */
    "./src/app/accueil/accueil.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AccueilPageModule = function AccueilPageModule() {
      _classCallCheck(this, AccueilPageModule);
    };

    AccueilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([{
        path: '',
        component: _accueil_page__WEBPACK_IMPORTED_MODULE_5__["AccueilPage"]
      }]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_accueil_page__WEBPACK_IMPORTED_MODULE_5__["AccueilPage"]]
    })], AccueilPageModule);
    /***/
  },

  /***/
  "./src/app/accueil/accueil.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/accueil/accueil.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccueilAccueilPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "form {\n  margin-bottom: 32px;\n}\nform ion-content {\n  --ion-background-color: linear-gradient(#bdc3c7, #2c3e50);\n}\nform ion-item {\n  --ion-background-color: transparent!important;\n}\nform .logo {\n  position: relative;\n  height: 250px;\n}\nform .logo ion-icon {\n  font-size: 64px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\nform .padding {\n  padding: 5%;\n}\nform button {\n  margin-top: 20px !important;\n}\np {\n  font-size: 0.8em;\n  color: #d2d2d2;\n}\nion-label {\n  margin-left: 5px;\n}\nion-input {\n  padding: 5px;\n}\n.invalid {\n  border-bottom: 1px solid #ff6153;\n}\n.error-message {\n  min-height: 2.2rem;\n}\n.error-message ion-label {\n  margin: 2px 0;\n  font-size: 60%;\n  color: #ff6153;\n}\n.error-message .item-inner {\n  border-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J5dWt1L0J1cmVhdS9hL1RpZWJhcmlWMi9UaWViYXJpQXBwL3NyYy9hcHAvYWNjdWVpbC9hY2N1ZWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNjdWVpbC9hY2N1ZWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG1CQUFBO0FDQUY7QURDRTtFQUNFLHlEQUFBO0FDQ0o7QURDRTtFQUVFLDZDQUFBO0FDQUo7QURFRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQ0FKO0FERUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNBSjtBREVFO0VBRUUsV0FBQTtBQ0RKO0FER0U7RUFDRSwyQkFBQTtBQ0RKO0FES0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNGRjtBREtBO0VBQ0UsZ0JBQUE7QUNGRjtBREtBO0VBQ0UsWUFBQTtBQ0ZGO0FES0E7RUFDRSxnQ0FBQTtBQ0ZGO0FES0E7RUFDRSxrQkFBQTtBQ0ZGO0FER0U7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNESjtBREdFO0VBQ0UsMkJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2FjY3VlaWwvYWNjdWVpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmZvcm0ge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBpb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCNiZGMzYzcsICMyYzNlNTApO1xuICB9XG4gIGlvbi1pdGVte1xuXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xuICB9XG4gIC5sb2dve1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICB9XG4gIC5sb2dvIGlvbi1pY29ue1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIC5wYWRkaW5ne1xuXG4gICAgcGFkZGluZzogNSU7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjZDJkMmQyO1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG5pb24taW5wdXQge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5pbnZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjYxNTM7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgbWluLWhlaWdodDogMi4ycmVtO1xuICBpb24tbGFiZWwge1xuICAgIG1hcmdpbjogMnB4IDA7XG4gICAgZm9udC1zaXplOiA2MCU7XG4gICAgY29sb3I6ICNmZjYxNTM7XG4gIH1cbiAgLml0ZW0taW5uZXIge1xuICAgIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxufVxuIiwiZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG5mb3JtIGlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCNiZGMzYzcsICMyYzNlNTApO1xufVxuZm9ybSBpb24taXRlbSB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcbn1cbmZvcm0gLmxvZ28ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjUwcHg7XG59XG5mb3JtIC5sb2dvIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuZm9ybSAucGFkZGluZyB7XG4gIHBhZGRpbmc6IDUlO1xufVxuZm9ybSBidXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbnAge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogI2QyZDJkMjtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uaW52YWxpZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmY2MTUzO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIG1pbi1oZWlnaHQ6IDIuMnJlbTtcbn1cbi5lcnJvci1tZXNzYWdlIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMnB4IDA7XG4gIGZvbnQtc2l6ZTogNjAlO1xuICBjb2xvcjogI2ZmNjE1Mztcbn1cbi5lcnJvci1tZXNzYWdlIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/accueil/accueil.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/accueil/accueil.page.ts ***!
    \*****************************************/

  /*! exports provided: AccueilPage */

  /***/
  function srcAppAccueilAccueilPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccueilPage", function () {
      return AccueilPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AccueilPage =
    /*#__PURE__*/
    function () {
      function AccueilPage(menu, loadingCtrl, alertCtrl, authService, router, formBuilder) {
        _classCallCheck(this, AccueilPage);

        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
      }

      _createClass(AccueilPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)])]
          });
        }
      }, {
        key: "loginUser",
        value: function loginUser(loginForm) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var email, password;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (loginForm.valid) {
                      _context2.next = 4;
                      break;
                    }

                    console.log('Form is not valid yet, current value:', loginForm.value);
                    _context2.next = 12;
                    break;

                  case 4:
                    _context2.next = 6;
                    return this.loadingCtrl.create();

                  case 6:
                    this.loading = _context2.sent;
                    _context2.next = 9;
                    return this.loading.present();

                  case 9:
                    email = loginForm.value.email;
                    password = loginForm.value.password;
                    this.authService.loginUser(email, password).then(function () {
                      _this.loading.dismiss().then(function () {
                        _this.router.navigateByUrl('/accueil');
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

                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return AccueilPage;
    }();

    AccueilPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    AccueilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accueil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./accueil.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/accueil/accueil.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./accueil.page.scss */
      "./src/app/accueil/accueil.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], AccueilPage);
    /***/
  }
}]);
//# sourceMappingURL=accueil-accueil-module-es5.js.map