webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = navParams.data.item;
    }
    InfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPage');
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"D:\ionic\MiPrimeraAplicacion\JaksonWeb\JaksonApp\src\pages\info\info.html"*/'<!--\n  Generated template for the InfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <ion-navbar color="bestground">\n    <ion-title>  {{ item.title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <img src="{{item.img}}">\n  <!--Info prew-->\n\n  <ion-card class="animated fadeInDown">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n          <ion-card-content color="danger">\n            <ion-icon name="logo-youtube" style="font-size: 30px; padding-right: 40px; border-right: 3px solid;"></ion-icon>\n          </ion-card-content>\n        </ion-col>\n        <ion-col col-8>\n          <ion-card-content>\n            <p class="gray" style="text-align: left;">\n              Visita mi canal como <b>Jakson Casas VFX</b>\n          </p>\n          </ion-card-content>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class="story animated fadeInUp">\n          <div>\n            <ion-icon name="calendar" style="font-size: 36px ;"></ion-icon>  <p style="margin: 5px; text-align: center;"><b>Fecha: </b>{{item.date}}</p> \n          </div>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div class="story animated fadeInUp">\n          <div>\n              <p style="margin: 5px; text-align: center;"><b>Tipo: </b>{{item.type}}</p> \n          </div>\n        </div>\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>\n\n\n  \n  <!--Descripcion\n  <div class="story">\n    <div>\n        <p style="margin: 5px; text-align: justify;">Soy estudiante de ingeniería de sistemas...</p> \n    </div>\n  </div>-->\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MiPrimeraAplicacion\JaksonWeb\JaksonApp\src\pages\info\info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		269,
		2
	],
	"../pages/info/info.module": [
		270,
		1
	],
	"../pages/modal/modal.module": [
		271,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_info_info__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_info_info__["a" /* InfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_info_info__["a" /* InfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\MiPrimeraAplicacion\JaksonWeb\JaksonApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\ionic\MiPrimeraAplicacion\JaksonWeb\JaksonApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_info__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.splash = true;
        this.segment = 'view';
        this.name = 'Que tal!';
        this.action = "add new";
        this.product = {
            id: undefined,
            name: 'Jumping Lucas',
            price: undefined,
            currency: "OMR"
        };
        this.miLista = [];
        this.miVideo = [];
        this.miVideo = [
            {
                'img': 'assets/imgs/sample20-min.jpg',
                'title': 'The last - 4k',
                'type': '2.3 K Views',
                'date': 'Feb/2015'
            },
            {
                'img': 'assets/imgs/sample21-min.jpg',
                'title': 'Star Wars Lightsaber',
                'type': '1.2 K Views',
                'date': 'Ago/2015'
            },
            {
                'img': 'assets/imgs/sample24-min.jpg',
                'title': 'Iron Man - Activa Tv',
                'type': '510 Views',
                'date': 'Oct/2015'
            },
            {
                'img': 'assets/imgs/sample23-min.jpg',
                'title': 'Skateboard Film',
                'type': '1.1 K Views',
                'date': 'Dic/2014'
            },
            {
                'img': 'assets/imgs/sample22-min.jpg',
                'title': 'Hancock With a GoPro',
                'type': '2.8 K Views',
                'date': 'Enr/2015'
            },
            {
                'img': 'assets/imgs/sample25-min.jpg',
                'title': 'Actividad Paranormal',
                'type': '2.4 K Views',
                'date': 'Oct/2014'
            },
            {
                'img': 'assets/imgs/sample26-min.jpg',
                'title': 'Sisters Terror',
                'type': '1.1 K Views',
                'date': 'Fe/2016'
            },
        ];
        this.miLista = [
            {
                'title': 'El Cachimbo',
                'img': 'assets/imgs/optimized-y1hj.jpg',
                'type': 'Juego para PC',
                'date': 'Jun/2016'
            },
            {
                'title': 'Jumping Lucas',
                'img': 'assets/imgs/optimized-bmgt.jpg',
                'type': 'Juego para Android',
                'date': 'Abr/2017'
            },
            {
                'title': 'UnacApp',
                'img': 'assets/imgs/sample19-min.jpg',
                'type': 'Android App',
                'date': 'Jun/2019'
            },
            {
                'title': 'Cañete Fire',
                'img': 'assets/imgs/optimized-vuuv.jpg',
                'type': 'Juego para PC',
                'date': 'Dec/2017'
            },
            {
                'title': 'Geuni.pe',
                'img': 'assets/imgs/optimized-2dqj.jpg',
                'type': 'Pagina Web',
                'date': 'Dec/2012'
            },
            {
                'title': 'AR',
                'img': 'assets/imgs/AR.gif',
                'type': 'Realidad Aumentada',
                'date': 'Enr/2018'
            },
            {
                'title': 'Last Tendence',
                'img': 'assets/imgs/optimized-kqdk.jpg',
                'type': 'Pagina Web',
                'date': 'Feb/2013'
            },
            {
                'title': 'GameWeb',
                'img': 'assets/imgs/optimized-v5pl.jpg',
                'type': 'Juego Web',
                'date': 'Dec/2016'
            },
            {
                'title': 'FastWeb',
                'img': 'assets/imgs/optimized-zcsy.jpg',
                'type': 'Tienda Online',
                'date': 'Feb/2019'
            },
            {
                'title': 'Trivia',
                'img': 'assets/imgs/optimized-dvhx.jpg',
                'type': 'Asistente Virtual',
                'date': 'Mar/2019'
            },
            {
                'title': 'D Calin',
                'img': 'assets/imgs/optimized-nqk4.jpg',
                'type': 'Programa para PC',
                'date': 'Mar/2018'
            },
            {
                'title': 'Oishi Sushi Bar ',
                'img': 'assets/imgs/optimized-iftg.jpg',
                'type': 'Programa para PC',
                'date': 'Jul/2018'
            },
            {
                'title': 'Registro Web',
                'img': 'assets/imgs/optimized-lrbj.jpg',
                'type': 'Pagina Web',
                'date': 'Nov/2018'
            },
            {
                'title': 'Fast App',
                'img': 'assets/imgs/optimized-lkqp.jpg',
                'type': 'Android App',
                'date': 'Feb/2019'
            },
            {
                'title': 'Cañete App',
                'img': 'assets/imgs/optimized-usas.jpg',
                'type': 'Android App',
                'date': 'Ago/2018'
            },
            {
                'title': 'Registro Web',
                'img': 'assets/imgs/optimized-oj5e.jpg',
                'type': 'Pagina Web',
                'date': 'Nov/2018'
            },
            {
                'title': 'WCJ Radio Online',
                'img': 'assets/imgs/optimized-l3lm.jpg',
                'type': 'Pagina Web',
                'date': 'Enr/2015'
            },
            {
                'title': 'Muriell',
                'img': 'assets/imgs/optimized-gtup.jpg',
                'type': 'Pagina Web',
                'date': 'Sep/2013'
            },
            {
                'title': 'Zona Urbana',
                'img': 'assets/imgs/optimized-h9nn.jpg',
                'type': 'Pagina Web',
                'date': 'May/2013'
            },
            {
                'title': 'Dj Akson',
                'img': 'assets/imgs/optimized-ivi6.jpg',
                'type': 'Pagina Web',
                'date': 'Nov/2012'
            },
        ];
        this.show();
    }
    HomePage.prototype.view = function (data) {
        this.modalCtrl.create('ModalPage', {
            details: data
        }).present();
    };
    HomePage.prototype.editor = function () {
    };
    HomePage.prototype.edit = function () {
    };
    HomePage.prototype.clear = function () {
    };
    HomePage.prototype.add = function () {
    };
    HomePage.prototype.show = function () {
    };
    HomePage.prototype.delete = function () {
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () { return _this.splash = false; }, 4000);
    };
    HomePage.prototype.openNavDetailsPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__info_info__["a" /* InfoPage */], { item: item });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ionic\MiPrimeraAplicacion\JaksonWeb\JaksonApp\src\pages\home\home.html"*/'<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n  <div class="flb">\n    <div class="Aligner-item Aligner-item--top"></div>\n    <img src="assets/imgs/optimized-s2wk.png">\n    <div class="Aligner-item Aligner-item--bottom"></div>\n  </div>\n</div>\n<ion-header no-border>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-8>\n          <img src="assets/imgs/optimized-s2wk.png" height="70" width="84">\n      </ion-col>\n      <ion-col col-4>\n          <ion-segment [(ngModel)]="segment" color="light" no-border>\n              <ion-segment-button value="view">\n                  <ion-icon name="home"></ion-icon>\n              </ion-segment-button>\n              <ion-segment-button value="home">\n                <ion-icon name="flash"></ion-icon>\n              </ion-segment-button>\n            </ion-segment>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n  <ion-toolbar padding>\n    <div [ngSwitch]="segment">\n        <ion-list *ngSwitchCase="\'home\'">\n          <!--<ion-card class="animated pulse">\n            <ion-grid>\n              <ion-row>\n                <ion-col col-4>\n                  <ion-card-content color="bethove">\n                    <ion-icon name="text" style="font-size: 30px; padding-right: 40px; border-right: 3px solid;"></ion-icon>\n                  </ion-card-content>\n                </ion-col>\n                <ion-col col-8>\n                  <ion-card-content>\n                    <p class="gray">\n                    <b>Hey! {{ name }}</b> \n                    <br>\n                    Bienvenido a mi Web.\n                  </p>\n                  </ion-card-content>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card>-->\n        </ion-list>\n        <ion-list *ngSwitchCase="\'view\'"> \n        </ion-list> \n      </div>\n</ion-toolbar>\n</ion-header>\n<ion-content padding class="masters">\n  <div [ngSwitch]="segment">\n      <div *ngSwitchCase="\'view\'" class="animated fadeIn">\n        <ion-slides pager="true"  autoplay="5000" loop="true" speed="500">\n            <ion-slide>\n            <img src="assets/imgs/optimized-ed8t.png" alt="">\n          </ion-slide>\n          <ion-slide>\n                <img src="assets/imgs/fastapp13-min.jpg" alt="">\n              </ion-slide>\n          <ion-slide>\n            <img src="assets/imgs/optimized-8whb.jpg" alt="">\n          </ion-slide>  \n          <ion-slide>\n            <img src="assets/imgs/optimized-9kgr.jpg" alt="">\n          </ion-slide>\n        </ion-slides>           \n       \n        <div ion-item *ngFor="let item of miLista" >\n              <div (click) = "openNavDetailsPage(item)" >\n            \n                  <div class="cut" >\n                    <div class="game-image">\n                       <img src="{{item.img}}" style="border-radius: 15px 15px 0px 0px" >\n                    </div>\n                     \n                  </div>\n                  <div padding-bottom padding-left padding-right>\n                \n                  <div class="card-title">\n                        {{ item.title}}\n                  </div>\n                  <div class="card-subtitle">\n                    {{ item.type}}\n                  </div>\n                     \n                  <button color="bestground" ion-button round  class="favorite"  icon-start >\n                    <ion-icon name="heart"></ion-icon>\n                    </button>\n                \n              \n              </div>\n            </div>\n          </div>\n\n          <h2>Videos <span style="color:#01a686;">Youtube</span></h2>\n          <div ion-item *ngFor="let item of miVideo" >\n            <div (click) = "openNavDetailsPage(item)" >\n          \n                <div class="cut" >\n                  <div class="game-image">\n                     <img src="{{item.img}}" style="border-radius: 15px 15px 0px 0px" >\n                  </div>\n                   \n                </div>\n                <div padding-bottom padding-left padding-right>\n              \n                <div class="card-title">\n                  {{ item.title}}\n                </div>\n                <div class="card-subtitle">\n                  {{ item.type}}\n                </div>\n                   \n                <button color="bestground" ion-button round  class="favorite"  icon-start >\n                  <ion-icon name="fastforward"></ion-icon>\n                  </button>\n              \n            \n            </div>\n          </div>\n        </div>\n\n\n      \n      \n       \n              <h2 style="color:#bbbbbb;font-size: 35px">Búscame en</h2>\n              <div style="color:#01a686; font-size: 40px">\n                \n                <a href=\'https://www.instagram.com/jaksonsanchez1/\' target=\'_blank\' style="color:#01a686;">\n                <i  class=\'fa fa-instagram\'></i></a>\n                <a href=\'https://twitter.com/Jakson_casas\' target=\'_blank\' style="color:#01a686;">\n                <i class=\'fa fa-twitter\'></i></a>\n                <a href=\'https://www.youtube.com/user/Jaksonscoficial\' target=\'_blank\' style="color:#01a686;">\n                <i class=\'fa fa-youtube-play\'></i> </a>\n              </div>\n             \n       \n          \n\n          <span style="color:#6e6e6e"> Jakson Casas ©2019</span> \n\n     \n\n      \n      </div>\n    <div *ngSwitchCase="\'home\'" class="animated fadeIn">\n      <br>\n      <br>\n      <br>\n     \n          <div (click)="view()">\n        <img src="assets/imgs/sample12.png" >\n            </div>\n\n            \n \n  </div> \n</div>\n</ion-content>\n\n<!--<ion-footer no-border  class="animated fadeInUp" >\n   <span style="padding:106px;"> Jakson Casas ©2019</span> \n \n</ion-footer>-->\n\n\n<img class="bg-header animated fadeIn" src="assets/imgs/bg-header1.png" alt="">'/*ion-inline-end:"D:\ionic\MiPrimeraAplicacion\JaksonWeb\JaksonApp\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map