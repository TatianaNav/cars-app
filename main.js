(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tatiananavalikhina/Documents/cars-app/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F5nt":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class AppService {
    constructor(http) {
        this.http = http;
    }
    sendQuery(data) {
        return this.http.post('https://testologia.site/intensive-price', data);
    }
    getData() {
        return this.http.get('https://testologia.site/intensive-data');
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "F5nt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AppComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u041F\u0440\u0438\u0432\u043E\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u041A\u043E\u043B-\u0432\u043E \u043C\u0435\u0441\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_32_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const car_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34); return ctx_r4.goScroll(_r2, car_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const car_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", car_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](car_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](car_r3.gear);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](car_r3.engine);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](car_r3.places);
} }
class AppComponent {
    constructor(fb, appService) {
        this.fb = fb;
        this.appService = appService;
        this.priceForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            car: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
    }
    ngOnInit() {
        this.appService.getData().subscribe(carsData => this.carsData = carsData);
    }
    goScroll(target, car) {
        target.scrollIntoView({ behavior: 'smooth' });
        if (car) {
            this.priceForm.patchValue({ car: car.name });
        }
    }
    onMouseMove(e) {
        this.trans = { transform: 'translate3d(' + ((e.clientX * 0.3) / 8) + 'px,' + ((e.clientY * 0.3) / 8) + 'px,0px)' };
    }
    onScroll() {
        this.bgPos = { backgroundPositionX: '0' + (0.3 * window.scrollY) + 'px' };
    }
    onSubmit() {
        if (this.priceForm.valid) {
            this.appService.sendQuery(this.priceForm.value)
                .subscribe({
                next: (response) => {
                    alert(response.message);
                    this.priceForm.reset();
                },
                error: (response) => {
                    alert(response.error.message);
                }
            });
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousemove", function AppComponent_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("scroll", function AppComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, decls: 53, vars: 5, consts: [[1, "header"], [1, "container"], [1, "logo"], ["src", "assets/images/logo.png", "alt", "logo"], [1, "menu"], [1, "menu-item"], ["href", "#"], ["href", "#cars"], ["href", "#price"], [1, "main", 3, "ngStyle"], [1, "main-info"], [1, "main-title"], [1, "main-text"], [1, "main-action"], ["id", "main-action", 1, "button", 3, "click"], ["id", "cars", 1, "car"], ["cars", ""], [1, "sub-title"], [1, "car-items"], ["class", "car-item", 4, "ngFor", "ngForOf"], ["id", "price", 1, "price"], ["price", ""], [1, "price-text"], ["action", "", 1, "price-form", 3, "formGroup"], ["type", "text", "id", "name", "placeholder", "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F", "formControlName", "name", 1, "price-input"], ["type", "text", "id", "phone", "placeholder", "\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D", "formControlName", "phone", 1, "price-input"], ["type", "text", "id", "car", "placeholder", "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u0430\u0441 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442", "formControlName", "car", 1, "price-input"], ["type", "button", "id", "price-action", 1, "button", 3, "disabled", "click"], ["src", "assets/images/rolls.png", "alt", "rolls", 1, "price-image", 3, "ngStyle"], [1, "footer"], [1, "rights"], [1, "car-item"], [1, "car-item-image"], ["alt", "image1", 3, "src"], [1, "car-item-title"], [1, "car-item-info"], [1, "car-item-point"], ["src", "assets/images/gear.png", "alt", "gear"], ["src", "assets/images/wheel.png", "alt", "weel"], ["src", "assets/images/belt.png", "alt", "belt"], [1, "car-item-action"], [1, "button", "car-button", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0411\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0430\u0432\u0442\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u0410\u0440\u0435\u043D\u0434\u0430 \u043F\u0440\u0435\u043C\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u0412 \u043D\u0430\u0448\u0435\u043C \u043A\u043B\u0443\u0431\u0435 \u0438\u043C\u0435\u0435\u0442\u0441\u044F \u0441\u043E\u043B\u0438\u0434\u043D\u0430\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0445 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u0439 \u2014 \u043E\u0442 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0445 \u0441\u0435\u0440\u0438\u0439\u043D\u044B\u0445 \u043C\u0430\u0448\u0438\u043D \u0434\u043E \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0433\u043E\u043D\u043E\u0447\u043D\u043E\u0433\u043E \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u0430. \u0412\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435\u0441\u044C \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E \u043F\u043E\u0431\u044B\u0432\u0430\u0442\u044C \u0437\u0430 \u0440\u0443\u043B\u0435\u043C \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0439 \u043B\u0435\u0433\u0435\u043D\u0434\u044B \u0438 \u0443\u0437\u043D\u0430\u0442\u044C, \u043D\u0430 \u0447\u0442\u043E \u043E\u043D\u0430 \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u0430 \u0437\u0430 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u043C\u0438 \u0433\u043E\u043D\u043E\u0447\u043D\u043E\u0439 \u0442\u0440\u0430\u0441\u0441\u044B! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27); return ctx.goScroll(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "section", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u041D\u0430\u0448 \u0430\u0432\u0442\u043E\u043F\u0430\u0440\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, AppComponent_div_32_Template, 27, 5, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "section", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u0423\u0437\u043D\u0430\u0442\u044C \u0446\u0435\u043D\u0443 \u0438 \u0437\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u0438 \u043C\u044B \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C \u0432\u0430\u043C \u0434\u043B\u044F \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u044F \u0432\u0441\u0435\u0445 \u0434\u0435\u0442\u0430\u043B\u0435\u0439 \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "form", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_44_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u0423\u0437\u043D\u0430\u0442\u044C \u0446\u0435\u043D\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "footer", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.bgPos);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.carsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.priceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.priceForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.trans);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #E5E5E5;\n  padding: 25px 0;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\n  display: flex;\n  align-items: center;\n}\n.logo[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n}\n.menu[_ngcontent-%COMP%]{\n  margin-left: 244px;\n}\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n}\n.menu-item[_ngcontent-%COMP%] {\n  margin-right: 115px;\n}\n.menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #030305;\n  text-decoration: none;\n}\n.menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid black;\n}\n.main[_ngcontent-%COMP%]{\n  background-image: url('/cars-app/background.png');\n  background-position: center;\n  background-size: cover;\n  padding: 104px 0 154px 0;\n}\n.main-info[_ngcontent-%COMP%] {\n  max-width: 855px;\n}\n.main-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 80px;\n  line-height: 110%;\n  color: #030305;\n  margin-bottom: 40px;\n}\n.main-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 130%;\n  color: #030305;\n  margin-bottom: 40px;\n  max-width: 502px;\n}\n.button[_ngcontent-%COMP%] {\n  padding: 20px;\n  width: 334px;\n  height: 64px;\n  background: #030305;\n  border: 0;\n  box-sizing: border-box;\n  text-align: center;\n\n  font-weight: bold;\n  font-size: 16px;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  color: #FFFFFF;\n  transition: background-color .5s;\n}\n.button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  cursor: pointer;\n  background: #575757;\n}\n.button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  color: gray;\n  background-color: #343434;\n\n}\n.car[_ngcontent-%COMP%] {\n  padding: 100px;\n}\n.sub-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 60px;\n  line-height: 70px;\n  color: #030305;\n}\n.car-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n.car-item[_ngcontent-%COMP%] {\n  max-width: 384px;\n  text-align: center;\n  margin-top: 40px;\n}\n.car-item-image[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.car-item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  transition: all .3s;\n}\n.car-item-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 150%;\n  letter-spacing: 0.02em;\n  color: #030305;\n  padding: 15px 0 17px 0;\n}\n.car-item-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.car-item-point[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 92px;\n  margin: 0 7.5px;\n}\n.car-item-point[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 11px;\n}\n.car-item-action[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  height: 54px;\n}\n.car-item-point[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  font-weight: bold;\n}\n.price[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.price[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 121px;\n}\n.price[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.price-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 130%;\n  color: #5D5D5F;\n  margin-bottom: 60px;\n}\n.price-form[_ngcontent-%COMP%] {\n  max-width: 344px;\n}\n.price-input[_ngcontent-%COMP%] {\n  padding: 22px 18px;\n  width: 344px;\n  height: 65px;\n  background: #FFFFFF;\n  border: 1px solid #5D5D5F;\n  font-size: 16px;\n  box-sizing: border-box;\n  color: #000000;\n  outline: none;\n  margin-bottom: 15px;\n}\n.price-input[_ngcontent-%COMP%]::placeholder {\n  color: #5D5D5F;\n}\n.price[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.price-image[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 401px;\n}\n.footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #E5E5E5;\n  padding: 25px 0;\n}\n.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.rights[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #030305;\n}\n.price-input.ng-touched.ng-valid[_ngcontent-%COMP%] {\n  border: 1px solid #5D5D5F;\n}\n.price-input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,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QzNCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U1RTVFNTtcbiAgcGFkZGluZzogMjVweCAwO1xufVxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5oZWFkZXIgLmNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ28gLmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG5cbi5tZW51e1xuICBtYXJnaW4tbGVmdDogMjQ0cHg7XG59XG5cbi5tZW51IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1lbnUtaXRlbSB7XG4gIG1hcmdpbi1yaWdodDogMTE1cHg7XG59XG5cbi5tZW51LWl0ZW0gYSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMwMzAzMDU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm1lbnUtaXRlbSBhOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4ubWFpbntcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwYWRkaW5nOiAxMDRweCAwIDE1NHB4IDA7XG59XG5cbi5tYWluLWluZm8ge1xuICBtYXgtd2lkdGg6IDg1NXB4O1xufVxuLm1haW4tdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBsaW5lLWhlaWdodDogMTEwJTtcbiAgY29sb3I6ICMwMzAzMDU7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5tYWluLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICBjb2xvcjogIzAzMDMwNTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgbWF4LXdpZHRoOiA1MDJweDtcbn1cbi5idXR0b24ge1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMzM0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZDogIzAzMDMwNTtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjVzO1xufVxuXG4uYnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjNTc1NzU3O1xufVxuXG4uYnV0dG9uOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgY29sb3I6IGdyYXk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG5cbn1cbi5jYXIge1xuICBwYWRkaW5nOiAxMDBweDtcbn1cbi5zdWItdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBsaW5lLWhlaWdodDogNzBweDtcbiAgY29sb3I6ICMwMzAzMDU7XG59XG5cbi5jYXItaXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNhci1pdGVtIHtcbiAgbWF4LXdpZHRoOiAzODRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uY2FyLWl0ZW0taW1hZ2U6aG92ZXIgaW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLmNhci1pdGVtLWltYWdlIGltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XG59XG5cbi5jYXItaXRlbS10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBjb2xvcjogIzAzMDMwNTtcbiAgcGFkZGluZzogMTVweCAwIDE3cHggMDtcbn1cblxuLmNhci1pdGVtLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhci1pdGVtLXBvaW50IHtcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDkycHg7XG4gIG1hcmdpbjogMCA3LjVweDtcbn1cblxuLmNhci1pdGVtLXBvaW50IGltZyB7XG4gIG1hcmdpbi1ib3R0b206IDExcHg7XG59XG5cbi5jYXItaXRlbS1hY3Rpb24gLmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBoZWlnaHQ6IDU0cHg7XG59XG5cbi5jYXItaXRlbS1wb2ludCA+IGRpdjpudGgtY2hpbGQoMikge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByaWNlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByaWNlIC5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiAxMjFweDtcbn1cblxuLnByaWNlIC5zdWItdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucHJpY2UtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gIGNvbG9yOiAjNUQ1RDVGO1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuXG4ucHJpY2UtZm9ybSB7XG4gIG1heC13aWR0aDogMzQ0cHg7XG59XG5cbi5wcmljZS1pbnB1dCB7XG4gIHBhZGRpbmc6IDIycHggMThweDtcbiAgd2lkdGg6IDM0NHB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1RDVENUY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5wcmljZS1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzVENUQ1Rjtcbn1cbi5wcmljZSAuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcmljZS1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA0MDFweDtcbn1cblxuLmZvb3RlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTVFNUU1O1xuICBwYWRkaW5nOiAyNXB4IDA7XG59XG5cbi5mb290ZXIgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5yaWdodHMge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMDMwMzA1O1xufVxuXG4ucHJpY2UtaW5wdXQubmctdG91Y2hlZC5uZy12YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1RDVENUY7XG59XG5cbi5wcmljZS1pbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map