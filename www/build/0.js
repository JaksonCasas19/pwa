webpackJsonp([0],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalPageModule = /** @class */ (function () {
    function ModalPageModule() {
    }
    ModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]),
            ],
        })
    ], ModalPageModule);
    return ModalPageModule;
}());

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
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


var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalPage.prototype.exit = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"D:\ionic\MiPrimeraAplicacion\JaksonWeb\JaksonApp\src\pages\modal\modal.html"*/'<ion-content>\n  <img src="https://4.bp.blogspot.com/-cyQI2KyDLAU/XIu-7v_Dt3I/AAAAAAAABEQ/VcZyg1OM6soOL5Ee0PYixN3ZasOFunUuACLcBGAs/s1600/sampleflex.jpg">\n  <ion-fab left top>\n    <button ion-fab mini color="greendark" (click)="exit()"><ion-icon name="close"></ion-icon></button>\n  </ion-fab>\n\n  <h1 color="greendark" text-center> Hola, Soy Jakson!</h1>\n  <div class="story">\n    <div>\n        <p style="margin: 5px; text-align: justify;">Mi pasión por la tecnología inicio a los 8 años, mi tío sabía mucho de diseño digitales pues me llamo mucho la atención uno de sus ediciones de fotos que me mostro una vez y le pregunte como lo hacía y pues me respondió:<i>Este se llama adobe Photoshop.</i> La verdad fue la primera vez que escuche ese nombre raro jeje y bueno lo descargue en mi computadora y no sabía por dónde empezar entonces solo puse como usar Photoshop y fue mi primer contacto con el mundo del diseño y bueno terminando mi primaria ya había creado bastante proyectos con este programa.. <br> Mas adelante cuando inicie mi secundaria tuve el agrado de conocer a un amigo de 4° y me comento acerca de HTML le dije que era eso? y me comento que era etiquetas para crear páginas webs y yo dije WUAU! entonces siempre quise hacer una página web en esa época pero no sabía cómo hacerlo luego busque tutoriales en google y la mayoría de los contenidos estaban en ingles pues en YouTube habían pocos en español con eso me sirvió para aprender lo básico por el 2014 deje de lado las ediciones de fotos y las páginas webs para crear videos y lo comencé a subir a Facebook donde más tarde abrí mi canal de YouTube y comencé a subir... Actualmente Soy estudiante de ingeniería de sistemas. También me dedico a Diseñar webs, y estoy especializado desarrollo de software y en las plataformas digitales, marketing por redes sociales.<br>\n          Mi contenido en esta plataforma tiene que ver con tecnología, codificación e ingeniería. He estado trabajando como desarrollador web FreeLancer estos años, realmente disfruto aprendiendo cosas nuevas.</p> \n      </div>\n  </div>\n\n  \n\n  <div class="schedule">\n    <span class="title">\n      Contáctame\n    </span>\n    <div class="detail">\n      <span class="date"><ion-icon name="logo-facebook"></ion-icon>\n        <span>Dale!</span>\n      </span>\n     \n      <span class="location">\n        FACEBOOK\n        <span class="city">\n          como Jakson Casas\n        </span>\n      </span>\n      <button class="btn">\n        <ion-icon name="mail"></ion-icon>\n        <a href="mailto:jaksoncasas@gmail.com" style="color: white; text-decoration: none;">E-Mail</a>\n      </button>\n    </div>\n  \n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\MiPrimeraAplicacion\JaksonWeb\JaksonApp\src\pages\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map