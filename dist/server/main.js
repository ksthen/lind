(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ngx-markdown/dist/lib/markdown.component.js":
/*!******************************************************************!*\
  !*** ./node_modules/ngx-markdown/dist/lib/markdown.component.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var markdown_service_1 = __webpack_require__(/*! ./markdown.service */ "./node_modules/ngx-markdown/dist/lib/markdown.service.js");
var MarkdownComponent = /** @class */ (function () {
    function MarkdownComponent(element, markdownService) {
        this.element = element;
        this.markdownService = markdownService;
        this.error = new core_1.EventEmitter();
    }
    Object.defineProperty(MarkdownComponent.prototype, "data", {
        get: function () { return this._data; },
        set: function (value) {
            this._data = value;
            this.render(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownComponent.prototype, "src", {
        get: function () { return this._src; },
        set: function (value) {
            var _this = this;
            this._src = value;
            this.markdownService
                .getSource(value)
                .subscribe(function (markdown) { return _this.render(markdown); }, function (error) { return _this.error.emit(error); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownComponent.prototype, "isTranscluded", {
        get: function () {
            return !this.data && !this.src;
        },
        enumerable: true,
        configurable: true
    });
    MarkdownComponent.prototype.ngAfterViewInit = function () {
        if (this.isTranscluded) {
            this.render(this.element.nativeElement.innerHTML);
        }
    };
    MarkdownComponent.prototype.render = function (markdown) {
        this.element.nativeElement.innerHTML = this.markdownService.compile(markdown);
        this.markdownService.highlight();
    };
    MarkdownComponent.decorators = [
        { type: core_1.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'markdown, [markdown]',
                    template: '<ng-content></ng-content>',
                    styles: [":host /deep/ table{border-spacing:0;border-collapse:collapse;margin-bottom:16px}:host /deep/ table td,:host /deep/ table th{padding:6px 13px;border:1px solid #ddd}:host /deep/ table tr:nth-child(2n){background-color:rgba(0,0,0,.03)}:host /deep/ blockquote{padding:0 1em;color:rgba(0,0,0,.535);border-left:.25em solid rgba(0,0,0,.11)}"],
                },] },
    ];
    /** @nocollapse */
    MarkdownComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: markdown_service_1.MarkdownService, },
    ]; };
    MarkdownComponent.propDecorators = {
        "data": [{ type: core_1.Input },],
        "src": [{ type: core_1.Input },],
        "error": [{ type: core_1.Output },],
    };
    return MarkdownComponent;
}());
exports.MarkdownComponent = MarkdownComponent;
//# sourceMappingURL=markdown.component.js.map

/***/ }),

/***/ "./node_modules/ngx-markdown/dist/lib/markdown.component.ngfactory.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ngx-markdown/dist/lib/markdown.component.ngfactory.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./markdown.component */ "./node_modules/ngx-markdown/dist/lib/markdown.component.js");
var i2 = __webpack_require__(/*! ./markdown.service */ "./node_modules/ngx-markdown/dist/lib/markdown.service.js");
var styles_MarkdownComponent = ["[_nghost-%COMP%]     table{border-spacing:0;border-collapse:collapse;margin-bottom:16px}[_nghost-%COMP%]     table td, [_nghost-%COMP%]     table th{padding:6px 13px;border:1px solid #ddd}[_nghost-%COMP%]     table tr:nth-child(2n){background-color:rgba(0,0,0,.03)}[_nghost-%COMP%]     blockquote{padding:0 1em;color:rgba(0,0,0,.535);border-left:.25em solid rgba(0,0,0,.11)}"];
var RenderType_MarkdownComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_MarkdownComponent, data: {} });
exports.RenderType_MarkdownComponent = RenderType_MarkdownComponent;
function View_MarkdownComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
exports.View_MarkdownComponent_0 = View_MarkdownComponent_0;
function View_MarkdownComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "markdown", [], null, null, null, View_MarkdownComponent_0, RenderType_MarkdownComponent)), i0.ɵdid(1, 4243456, null, 0, i1.MarkdownComponent, [i0.ElementRef, i2.MarkdownService], null, null)], null, null); }
exports.View_MarkdownComponent_Host_0 = View_MarkdownComponent_Host_0;
var MarkdownComponentNgFactory = i0.ɵccf("markdown, [markdown]", i1.MarkdownComponent, View_MarkdownComponent_Host_0, { data: "data", src: "src" }, { error: "error" }, ["*"]);
exports.MarkdownComponentNgFactory = MarkdownComponentNgFactory;


/***/ }),

/***/ "./node_modules/ngx-markdown/dist/lib/markdown.service.js":
/*!****************************************************************!*\
  !*** ./node_modules/ngx-markdown/dist/lib/markdown.service.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var marked = __webpack_require__(/*! marked */ "marked");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var marked_options_1 = __webpack_require__(/*! ./marked-options */ "./node_modules/ngx-markdown/dist/lib/marked-options.js");
var MarkdownService = /** @class */ (function () {
    function MarkdownService(http, options) {
        this.http = http;
        this.options = options;
        if (!this.renderer) {
            this.renderer = new marked.Renderer();
        }
    }
    Object.defineProperty(MarkdownService.prototype, "renderer", {
        get: function () { return this.options.renderer; },
        set: function (value) { this.options.renderer = value; },
        enumerable: true,
        configurable: true
    });
    MarkdownService.prototype.compile = function (markdown, markedOptions) {
        if (markedOptions === void 0) { markedOptions = this.options; }
        var precompiled = this.precompile(markdown);
        return marked(precompiled, markedOptions);
    };
    MarkdownService.prototype.getSource = function (src) {
        var _this = this;
        return this.http
            .get(src, { responseType: 'text' })
            .pipe(operators_1.map(function (markdown) { return _this.handleExtension(src, markdown); }));
    };
    MarkdownService.prototype.highlight = function () {
        if (typeof Prism !== 'undefined') {
            Prism.highlightAll(false);
        }
    };
    MarkdownService.prototype.handleExtension = function (src, markdown) {
        var extension = src
            ? src.split('.').splice(-1).join()
            : null;
        return extension !== 'md'
            ? '```' + extension + '\n' + markdown + '\n```'
            : markdown;
    };
    MarkdownService.prototype.precompile = function (markdown) {
        if (!markdown) {
            return '';
        }
        var indentStart;
        return markdown
            .replace(/\&gt;/g, '>')
            .split('\n')
            .map(function (line) {
            // find position of 1st non-whitespace character
            // to determine the markdown indentation start
            if (line.length > 0 && isNaN(indentStart)) {
                indentStart = line.search(/\S|$/);
            }
            // remove whitespaces before indentation start
            return indentStart
                ? line.substring(indentStart)
                : line;
        }).join('\n');
    };
    MarkdownService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MarkdownService.ctorParameters = function () { return [
        { type: http_1.HttpClient, },
        { type: marked_options_1.MarkedOptions, },
    ]; };
    return MarkdownService;
}());
exports.MarkdownService = MarkdownService;
//# sourceMappingURL=markdown.service.js.map

/***/ }),

/***/ "./node_modules/ngx-markdown/dist/lib/marked-options.js":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-markdown/dist/lib/marked-options.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MarkedOptions = /** @class */ (function () {
    function MarkedOptions() {
    }
    return MarkedOptions;
}());
exports.MarkedOptions = MarkedOptions;
//# sourceMappingURL=marked-options.js.map

/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i2 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var styles_AppComponent = [];
var RenderType_AppComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_AppComponent, data: {} });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 16777216, null, null, 1, "router-outlet", [["id", "top"]], null, null, null, null, null)), i0.ɵdid(1, 212992, null, 0, i1.RouterOutlet, [i1.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i0.ɵdid(1, 114688, null, 0, i2.AppComponent, [i1.Router, i0.PLATFORM_ID], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i0.ɵccf("app-root", i2.AppComponent, View_AppComponent_Host_0, {}, {}, []);
exports.AppComponentNgFactory = AppComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, platformId) {
        this.router = router;
        this.platformId = platformId;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.router.events.subscribe(function (evt) {
                if (!(evt instanceof router_1.NavigationEnd)) {
                    return;
                }
                window.scrollTo(0, 0);
            });
        }
    };
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
var i2 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i3 = __webpack_require__(/*! ./pages/start/start.component.ngfactory */ "./src/app/pages/start/start.component.ngfactory.js");
var i4 = __webpack_require__(/*! ./pages/menu/menu.component.ngfactory */ "./src/app/pages/menu/menu.component.ngfactory.js");
var i5 = __webpack_require__(/*! ./pages/not-found/not-found.component.ngfactory */ "./src/app/pages/not-found/not-found.component.ngfactory.js");
var i6 = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
var i7 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i8 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i9 = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
var i10 = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
var i11 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i12 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i13 = __webpack_require__(/*! @nguniversal/common */ "@nguniversal/common");
var i14 = __webpack_require__(/*! @angular/animations */ "@angular/animations");
var i15 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i16 = __webpack_require__(/*! ngx-markdown/dist/lib/markdown.service */ "ngx-markdown/dist/lib/markdown.service");
var i17 = __webpack_require__(/*! ngx-markdown/dist/lib/marked-options */ "ngx-markdown/dist/lib/marked-options");
var i18 = __webpack_require__(/*! ./services/content.service */ "./src/app/services/content.service.ts");
var i19 = __webpack_require__(/*! @angular/http */ "@angular/http");
var i20 = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
var i21 = __webpack_require__(/*! ./pages/start/start.component */ "./src/app/pages/start/start.component.ts");
var i22 = __webpack_require__(/*! ./pages/menu/menu.component */ "./src/app/pages/menu/menu.component.ts");
var i23 = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
var i24 = __webpack_require__(/*! ngx-markdown/dist/lib/markdown.module */ "ngx-markdown/dist/lib/markdown.module");
var i25 = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.StartComponentNgFactory, i4.MenuComponentNgFactory, i5.NotFoundComponentNgFactory, i6.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_l, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i7.NgLocalization, i7.NgLocaleLocalization, [i0.LOCALE_ID, [2, i7.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_j, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_k, []), i0.ɵmpd(4608, i8.DomSanitizer, i8.ɵangular_packages_platform_browser_platform_browser_e, [i7.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i8.DomSanitizer]), i0.ɵmpd(4608, i8.HAMMER_GESTURE_CONFIG, i8.HammerGestureConfig, []), i0.ɵmpd(5120, i8.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p1_0, p2_0, p2_1, p2_2) { return [new i8.ɵDomEventsPlugin(p0_0, p0_1), new i8.ɵKeyEventsPlugin(p1_0), new i8.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2)]; }, [i7.DOCUMENT, i0.NgZone, i7.DOCUMENT, i7.DOCUMENT, i8.HAMMER_GESTURE_CONFIG, i0.ɵConsole]), i0.ɵmpd(4608, i8.EventManager, i8.EventManager, [i8.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i8.ɵDomSharedStylesHost, i8.ɵDomSharedStylesHost, [i7.DOCUMENT]), i0.ɵmpd(4608, i8.ɵDomRendererFactory2, i8.ɵDomRendererFactory2, [i8.EventManager, i8.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i9.ɵangular_packages_platform_server_platform_server_c, i9.ɵangular_packages_platform_server_platform_server_c, [i8.DOCUMENT, [2, i8.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i8.ɵSharedStylesHost, null, [i9.ɵangular_packages_platform_server_platform_server_c]), i0.ɵmpd(4608, i9.ɵServerRendererFactory2, i9.ɵServerRendererFactory2, [i0.NgZone, i8.DOCUMENT, i8.ɵSharedStylesHost]), i0.ɵmpd(4608, i10.AnimationDriver, i10.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i10.ɵAnimationStyleNormalizer, i11.ɵangular_packages_platform_browser_animations_animations_c, []), i0.ɵmpd(4608, i10.ɵAnimationEngine, i11.ɵangular_packages_platform_browser_animations_animations_a, [i10.AnimationDriver, i10.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i9.ɵangular_packages_platform_server_platform_server_a, [i9.ɵServerRendererFactory2, i10.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i8.Meta, i8.Meta, [i7.DOCUMENT]), i0.ɵmpd(4608, i8.Title, i8.Title, [i7.DOCUMENT]), i0.ɵmpd(4608, i12.HttpXsrfTokenExtractor, i12.ɵangular_packages_common_http_http_h, [i7.DOCUMENT, i0.PLATFORM_ID, i12.ɵangular_packages_common_http_http_f]), i0.ɵmpd(4608, i12.ɵangular_packages_common_http_http_i, i12.ɵangular_packages_common_http_http_i, [i12.HttpXsrfTokenExtractor, i12.ɵangular_packages_common_http_http_g]), i0.ɵmpd(4608, i8.TransferState, i8.TransferState, []), i0.ɵmpd(4608, i13.ɵnguniversal_modules_common_common_a, i13.ɵnguniversal_modules_common_common_a, [i0.ApplicationRef, i8.TransferState]), i0.ɵmpd(5120, i12.HTTP_INTERCEPTORS, function (p0_0, p1_0) { return [p0_0, p1_0]; }, [i12.ɵangular_packages_common_http_http_i, i13.ɵnguniversal_modules_common_common_a]), i0.ɵmpd(4608, i12.XhrFactory, i9.ɵangular_packages_platform_server_platform_server_d, []), i0.ɵmpd(4608, i12.HttpXhrBackend, i12.HttpXhrBackend, [i12.XhrFactory]), i0.ɵmpd(6144, i12.HttpBackend, null, [i12.HttpXhrBackend]), i0.ɵmpd(5120, i12.HttpHandler, i9.ɵangular_packages_platform_server_platform_server_g, [i12.HttpBackend, [2, i12.HTTP_INTERCEPTORS]]), i0.ɵmpd(4608, i12.HttpClient, i12.HttpClient, [i12.HttpHandler]), i0.ɵmpd(4608, i12.ɵangular_packages_common_http_http_e, i12.ɵangular_packages_common_http_http_e, []), i0.ɵmpd(4608, i14.AnimationBuilder, i11.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i8.DOCUMENT]), i0.ɵmpd(5120, i15.ActivatedRoute, i15.ɵangular_packages_router_router_f, [i15.Router]), i0.ɵmpd(4608, i15.NoPreloading, i15.NoPreloading, []), i0.ɵmpd(6144, i15.PreloadingStrategy, null, [i15.NoPreloading]), i0.ɵmpd(135680, i15.RouterPreloader, i15.RouterPreloader, [i15.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i15.PreloadingStrategy]), i0.ɵmpd(4608, i15.PreloadAllModules, i15.PreloadAllModules, []), i0.ɵmpd(5120, i15.ROUTER_INITIALIZER, i15.ɵangular_packages_router_router_i, [i15.ɵangular_packages_router_router_g]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i15.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i16.MarkdownService, i16.MarkdownService, [i12.HttpClient, i17.MarkedOptions]), i0.ɵmpd(4608, i18.ContentService, i18.ContentService, []), i0.ɵmpd(4608, i19.BrowserXhr, i9.ɵangular_packages_platform_server_platform_server_d, []), i0.ɵmpd(4608, i19.ResponseOptions, i19.BaseResponseOptions, []), i0.ɵmpd(4608, i19.XSRFStrategy, i9.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i19.XHRBackend, i19.XHRBackend, [i19.BrowserXhr, i19.ResponseOptions, i19.XSRFStrategy]), i0.ɵmpd(4608, i19.RequestOptions, i19.BaseRequestOptions, []), i0.ɵmpd(5120, i19.Http, i9.ɵangular_packages_platform_server_platform_server_f, [i19.XHRBackend, i19.RequestOptions]), i0.ɵmpd(5120, i9.BEFORE_APP_SERIALIZED, function (p0_0, p0_1, p0_2) { return [i9.ɵangular_packages_platform_server_platform_server_b(p0_0, p0_1, p0_2)]; }, [i8.DOCUMENT, i0.APP_ID, i8.TransferState]), i0.ɵmpd(1073742336, i7.CommonModule, i7.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i8.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i15.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(256, i0.APP_ID, "my-app", []), i0.ɵmpd(2048, i8.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(512, i15.ɵangular_packages_router_router_g, i15.ɵangular_packages_router_router_g, [i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p1_1, p1_2, p2_0) { return [i8.ɵangular_packages_platform_browser_platform_browser_h(p0_0), i8.ɵangular_packages_platform_browser_platform_browser_f(p1_0, p1_1, p1_2), i15.ɵangular_packages_router_router_h(p2_0)]; }, [[2, i0.NgProbeToken], i8.ɵTRANSITION_ID, i7.DOCUMENT, i0.Injector, i15.ɵangular_packages_router_router_g]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i8.BrowserModule, i8.BrowserModule, [[3, i8.BrowserModule]]), i0.ɵmpd(1024, i15.ɵangular_packages_router_router_a, i15.ɵangular_packages_router_router_d, [[3, i15.Router]]), i0.ɵmpd(512, i15.UrlSerializer, i15.DefaultUrlSerializer, []), i0.ɵmpd(512, i15.ChildrenOutletContexts, i15.ChildrenOutletContexts, []), i0.ɵmpd(256, i15.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i7.LocationStrategy, i15.ɵangular_packages_router_router_c, [i7.PlatformLocation, [2, i7.APP_BASE_HREF], i15.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i7.Location, i7.Location, [i7.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i20.ModuleMapNgFactoryLoader, [i0.Compiler, i20.MODULE_MAP]), i0.ɵmpd(1024, i15.ROUTES, function () { return [[{ path: "", redirectTo: "start", pathMatch: "full" }, { path: "start", component: i21.StartComponent }, { path: "styrelsen", component: i21.StartComponent }, { path: "regler", component: i21.StartComponent }, { path: "stadgar", component: i21.StartComponent }, { path: "staddagar", component: i21.StartComponent }, { path: "tvfiber", component: i21.StartComponent }, { path: "dokument", component: i21.StartComponent }, { path: "parkeringgarage", component: i21.StartComponent }, { path: "privacy", component: i21.StartComponent }, { path: "cookies", component: i21.StartComponent }, { path: "test", component: i21.StartComponent }, { path: "meny", component: i22.MenuComponent }, { path: "**", component: i23.NotFoundComponent }]]; }, []), i0.ɵmpd(1024, i15.Router, i15.ɵangular_packages_router_router_e, [i0.ApplicationRef, i15.UrlSerializer, i15.ChildrenOutletContexts, i7.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i15.ROUTES, i15.ROUTER_CONFIGURATION, [2, i15.UrlHandlingStrategy], [2, i15.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i15.RouterModule, i15.RouterModule, [[2, i15.ɵangular_packages_router_router_a], [2, i15.Router]]), i0.ɵmpd(1073742336, i12.HttpClientXsrfModule, i12.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i12.HttpClientModule, i12.HttpClientModule, []), i0.ɵmpd(1073742336, i24.MarkdownModule, i24.MarkdownModule, []), i0.ɵmpd(1073742336, i8.BrowserTransferStateModule, i8.BrowserTransferStateModule, []), i0.ɵmpd(1073742336, i13.TransferHttpCacheModule, i13.TransferHttpCacheModule, []), i0.ɵmpd(1073742336, i11.BrowserAnimationsModule, i11.BrowserAnimationsModule, []), i0.ɵmpd(1073742336, i25.AppModule, i25.AppModule, []), i0.ɵmpd(1073742336, i19.HttpModule, i19.HttpModule, []), i0.ɵmpd(1073742336, i11.NoopAnimationsModule, i11.NoopAnimationsModule, []), i0.ɵmpd(1073742336, i9.ServerModule, i9.ServerModule, []), i0.ɵmpd(1073742336, i20.ModuleMapLoaderModule, i20.ModuleMapLoaderModule, []), i0.ɵmpd(1073742336, i9.ServerTransferStateModule, i9.ServerTransferStateModule, []), i0.ɵmpd(1073742336, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i12.ɵangular_packages_common_http_http_f, "XSRF-TOKEN", []), i0.ɵmpd(256, i12.ɵangular_packages_common_http_http_g, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i11.ANIMATION_MODULE_TYPE, "NoopAnimations", []), i0.ɵmpd(256, i17.MarkedOptions, { gfm: true, tables: true, breaks: false, pedantic: false, sanitize: false, smartLists: true, smartypants: false }, [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;


/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;


/***/ }),

/***/ "./src/app/components/article/article.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/components/article/article.component.ngfactory.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./article.component.scss.shim.ngstyle */ "./src/app/components/article/article.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../../../../node_modules/ngx-markdown/dist/lib/markdown.component.ngfactory */ "./node_modules/ngx-markdown/dist/lib/markdown.component.ngfactory.js");
var i3 = __webpack_require__(/*! ngx-markdown/dist/lib/markdown.component */ "ngx-markdown/dist/lib/markdown.component");
var i4 = __webpack_require__(/*! ngx-markdown/dist/lib/markdown.service */ "ngx-markdown/dist/lib/markdown.service");
var i5 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i6 = __webpack_require__(/*! ./article.component */ "./src/app/components/article/article.component.ts");
var styles_ArticleComponent = [i0.styles];
var RenderType_ArticleComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ArticleComponent, data: {} });
exports.RenderType_ArticleComponent = RenderType_ArticleComponent;
function View_ArticleComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "container pt-4 pb-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "div", [["class", "row justify-content-md-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "div", [["class", "col col-sm-12 article"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "markdown", [], null, null, null, i2.View_MarkdownComponent_0, i2.RenderType_MarkdownComponent)), i1.ɵdid(4, 4243456, null, 0, i3.MarkdownComponent, [i1.ElementRef, i4.MarkdownService], { data: [0, "data"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.article.text; _ck(_v, 4, 0, currVal_0); }, null); }
function View_ArticleComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "container-fluid"]], null, null, null, null, null)), i1.ɵdid(1, 278528, null, 0, i5.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(2, { "bg-secondary": 0 }), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ArticleComponent_1)), i1.ɵdid(4, 16384, null, 0, i5.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "container-fluid"; var currVal_1 = _ck(_v, 2, 0, (_co.article.version === "muted")); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.article; _ck(_v, 4, 0, currVal_2); }, null); }
exports.View_ArticleComponent_0 = View_ArticleComponent_0;
function View_ArticleComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-article", [], null, null, null, View_ArticleComponent_0, RenderType_ArticleComponent)), i1.ɵdid(1, 114688, null, 0, i6.ArticleComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ArticleComponent_Host_0 = View_ArticleComponent_Host_0;
var ArticleComponentNgFactory = i1.ɵccf("app-article", i6.ArticleComponent, View_ArticleComponent_Host_0, { article: "article" }, {}, []);
exports.ArticleComponentNgFactory = ArticleComponentNgFactory;


/***/ }),

/***/ "./src/app/components/article/article.component.scss.shim.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/components/article/article.component.scss.shim.ngstyle.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".article[_ngcontent-%COMP%] {\n  max-width: 100%;\n  overflow: hidden; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/article/article.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/article/article.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;


/***/ }),

/***/ "./src/app/components/contact-table/contact-table.component.ngfactory.js":
/*!*******************************************************************************!*\
  !*** ./src/app/components/contact-table/contact-table.component.ngfactory.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./contact-table.component.scss.shim.ngstyle */ "./src/app/components/contact-table/contact-table.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./contact-table.component */ "./src/app/components/contact-table/contact-table.component.ts");
var styles_ContactTableComponent = [i0.styles];
var RenderType_ContactTableComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ContactTableComponent, data: {} });
exports.RenderType_ContactTableComponent = RenderType_ContactTableComponent;
function View_ContactTableComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 11, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [["class", "col-sm-6 col-md-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(3, null, ["", ""])), (_l()(), i1.ɵeld(4, 0, null, null, 1, "div", [["class", "col-sm-6 col-md-3"]], null, null, null, null, null)), (_l()(), i1.ɵted(5, null, [" ", " "])), (_l()(), i1.ɵeld(6, 0, null, null, 1, "div", [["class", "col-sm-6 col-md-3"]], null, null, null, null, null)), (_l()(), i1.ɵted(7, null, [" ", " "])), (_l()(), i1.ɵeld(8, 0, null, null, 1, "div", [["class", "col-sm-6 col-md-3"]], null, null, null, null, null)), (_l()(), i1.ɵted(9, null, [" ", " "])), (_l()(), i1.ɵeld(10, 0, null, null, 1, "div", [["class", "col-sm-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 0, "hr", [], null, null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.function; _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.context.$implicit.name; _ck(_v, 5, 0, currVal_1); var currVal_2 = _v.context.$implicit.address; _ck(_v, 7, 0, currVal_2); var currVal_3 = _v.context.$implicit.phone; _ck(_v, 9, 0, currVal_3); }); }
function View_ContactTableComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "div", [["class", "container pt-4 pb-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "div", [["class", "col col-sm-12 pt-4 pb-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, ["", ""])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactTableComponent_2)), i1.ɵdid(6, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.contactTable.contacts; _ck(_v, 6, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.contactTable.header; _ck(_v, 4, 0, currVal_0); }); }
function View_ContactTableComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactTableComponent_1)), i1.ɵdid(1, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.contactTable; _ck(_v, 1, 0, currVal_0); }, null); }
exports.View_ContactTableComponent_0 = View_ContactTableComponent_0;
function View_ContactTableComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-contact-table", [], null, null, null, View_ContactTableComponent_0, RenderType_ContactTableComponent)), i1.ɵdid(1, 114688, null, 0, i3.ContactTableComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ContactTableComponent_Host_0 = View_ContactTableComponent_Host_0;
var ContactTableComponentNgFactory = i1.ɵccf("app-contact-table", i3.ContactTableComponent, View_ContactTableComponent_Host_0, { contactTable: "contactTable" }, {}, []);
exports.ContactTableComponentNgFactory = ContactTableComponentNgFactory;


/***/ }),

/***/ "./src/app/components/contact-table/contact-table.component.scss.shim.ngstyle.js":
/*!***************************************************************************************!*\
  !*** ./src/app/components/contact-table/contact-table.component.scss.shim.ngstyle.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/contact-table/contact-table.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/contact-table/contact-table.component.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var ContactTableComponent = /** @class */ (function () {
    function ContactTableComponent() {
    }
    ContactTableComponent.prototype.ngOnInit = function () {
    };
    return ContactTableComponent;
}());
exports.ContactTableComponent = ContactTableComponent;


/***/ }),

/***/ "./src/app/components/file-list/file-list.component.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/components/file-list/file-list.component.ngfactory.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./file-list.component.scss.shim.ngstyle */ "./src/app/components/file-list/file-list.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./file-list.component */ "./src/app/components/file-list/file-list.component.ts");
var styles_FileListComponent = [i0.styles];
var RenderType_FileListComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_FileListComponent, data: {} });
exports.RenderType_FileListComponent = RenderType_FileListComponent;
function View_FileListComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, "div", [["class", "col-sm-12 col-md-6 col-lg-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 6, "a", [["class", "media text-dark"]], [[8, "href", 4]], null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 2, "button", [["class", "btn btn-primary align-self-middle btn-circle mr-3 d-flex justify-content-center align-items-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, ":svg:svg", [["viewBox", "0 0 384 512"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 0, ":svg:path", [["d", "M224 136V0H24C10.3 0 0 10.8 0 24v464c0 13.3 10.5 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-13 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 2, "div", [["class", "media-body pt-2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(8, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.url; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.header; _ck(_v, 8, 0, currVal_1); }); }
function View_FileListComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "div", [["class", "container pt-4 pb-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 5, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "div", [["class", "col-sm-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, ["", ""])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FileListComponent_2)), i1.ɵdid(6, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.files.files; _ck(_v, 6, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.files.header; _ck(_v, 4, 0, currVal_0); }); }
function View_FileListComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_FileListComponent_1)), i1.ɵdid(1, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.files; _ck(_v, 1, 0, currVal_0); }, null); }
exports.View_FileListComponent_0 = View_FileListComponent_0;
function View_FileListComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-file-list", [], null, null, null, View_FileListComponent_0, RenderType_FileListComponent)), i1.ɵdid(1, 114688, null, 0, i3.FileListComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_FileListComponent_Host_0 = View_FileListComponent_Host_0;
var FileListComponentNgFactory = i1.ɵccf("app-file-list", i3.FileListComponent, View_FileListComponent_Host_0, { files: "files" }, {}, []);
exports.FileListComponentNgFactory = FileListComponentNgFactory;


/***/ }),

/***/ "./src/app/components/file-list/file-list.component.scss.shim.ngstyle.js":
/*!*******************************************************************************!*\
  !*** ./src/app/components/file-list/file-list.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["svg[_ngcontent-%COMP%] {\n  height: 25px;\n  color: white;\n  fill: white; }\n\n.btn-circle[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%; }\n\nh2[_ngcontent-%COMP%] {\n  padding-top: 0; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/file-list/file-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/file-list/file-list.component.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var FileListComponent = /** @class */ (function () {
    function FileListComponent() {
    }
    FileListComponent.prototype.ngOnInit = function () {
    };
    return FileListComponent;
}());
exports.FileListComponent = FileListComponent;


/***/ }),

/***/ "./src/app/components/gallery/gallery.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ngfactory.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./gallery.component.scss.shim.ngstyle */ "./src/app/components/gallery/gallery.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./gallery.component */ "./src/app/components/gallery/gallery.component.ts");
var styles_GalleryComponent = [i0.styles];
var RenderType_GalleryComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_GalleryComponent, data: {} });
exports.RenderType_GalleryComponent = RenderType_GalleryComponent;
function View_GalleryComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [["class", "col-6 col-sm-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [["class", "img-fluid"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.url; _ck(_v, 1, 0, currVal_0); }); }
function View_GalleryComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "div", [["class", "container-fluid"]], null, null, null, null, null)), i1.ɵdid(1, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(2, { "bg-secondary": 0 }), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "row no-gutters pt-4 pb-4"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_GalleryComponent_2)), i1.ɵdid(5, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "container-fluid"; var currVal_1 = _ck(_v, 2, 0, (_co.gallery.version === "muted")); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.gallery.images; _ck(_v, 5, 0, currVal_2); }, null); }
function View_GalleryComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_GalleryComponent_1)), i1.ɵdid(1, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.gallery; _ck(_v, 1, 0, currVal_0); }, null); }
exports.View_GalleryComponent_0 = View_GalleryComponent_0;
function View_GalleryComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-gallery", [], null, null, null, View_GalleryComponent_0, RenderType_GalleryComponent)), i1.ɵdid(1, 114688, null, 0, i3.GalleryComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_GalleryComponent_Host_0 = View_GalleryComponent_Host_0;
var GalleryComponentNgFactory = i1.ɵccf("app-gallery", i3.GalleryComponent, View_GalleryComponent_Host_0, { gallery: "gallery" }, {}, []);
exports.GalleryComponentNgFactory = GalleryComponentNgFactory;


/***/ }),

/***/ "./src/app/components/gallery/gallery.component.scss.shim.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.scss.shim.ngstyle.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/gallery/gallery.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
;
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;


/***/ }),

/***/ "./src/app/components/hero/hero.component.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/components/hero/hero.component.ngfactory.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./hero.component.scss.shim.ngstyle */ "./src/app/components/hero/hero.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./hero.component */ "./src/app/components/hero/hero.component.ts");
var styles_HeroComponent = [i0.styles];
var RenderType_HeroComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HeroComponent, data: { "animation": [{ type: 7, name: "heroAnimation", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 3, steps: [{ type: 11, selector: ".top", animation: { type: 6, styles: { opacity: 0, transform: "translateY(20px)" }, offset: null }, options: { optional: true } }, { type: 11, selector: ".top", animation: [{ type: 4, styles: { type: 6, styles: "*", offset: null }, timings: "400ms 0ms ease" }], options: { optional: true } }, { type: 11, selector: ".heading", animation: { type: 6, styles: { opacity: 0, transform: "translateY(20px)" }, offset: null }, options: { optional: true } }, { type: 11, selector: ".heading", animation: [{ type: 4, styles: { type: 6, styles: "*", offset: null }, timings: "400ms 100ms ease" }], options: null }, { type: 11, selector: ".paragraph", animation: { type: 6, styles: { opacity: 0, transform: "translateY(20px)" }, offset: null }, options: { optional: true } }, { type: 11, selector: ".paragraph", animation: [{ type: 4, styles: { type: 6, styles: "*", offset: null }, timings: "400ms 200ms ease" }], options: { optional: true } }, { type: 11, selector: ".btn", animation: { type: 6, styles: { opacity: 0, transform: "translateY(40px)" }, offset: null }, options: { optional: true } }, { type: 11, selector: ".btn", animation: [{ type: 12, timings: "50ms", animation: [{ type: 4, styles: { type: 6, styles: "*", offset: null }, timings: "200ms ease" }] }], options: { optional: true } }, { type: 11, selector: ".scroll-container", animation: { type: 6, styles: { opacity: 0, bottom: "80px" }, offset: null }, options: { optional: true } }, { type: 11, selector: ".scroll-container", animation: [{ type: 4, styles: { type: 6, styles: "*", offset: null }, timings: "400ms 1000ms" }], options: { optional: true } }], options: null }], options: null }], options: {} }] } });
exports.RenderType_HeroComponent = RenderType_HeroComponent;
function View_HeroComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "h4", [["class", "jumbotron-heading top"]], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hero.top; _ck(_v, 1, 0, currVal_0); }); }
function View_HeroComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "h1", [["class", "jumbotron-heading heading"]], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hero.header; _ck(_v, 1, 0, currVal_0); }); }
function View_HeroComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "p", [["class", "lead paragraph"]], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hero.p; _ck(_v, 1, 0, currVal_0); }); }
function View_HeroComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "a", [["class", "btn btn-outline-light mr-2 mt-3 text-light"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), i1.ɵted(1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hero.linkOne.href; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.hero.linkOne.text; _ck(_v, 1, 0, currVal_1); }); }
function View_HeroComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "a", [["class", "btn btn-outline-light mr-2  mt-3 text-light"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(1, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(2, 1), (_l()(), i1.ɵted(3, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 2, 0, ("/" + _co.hero.linkOne.href)); _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 1).target; var currVal_1 = i1.ɵnov(_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _co.hero.linkOne.text; _ck(_v, 3, 0, currVal_3); }); }
function View_HeroComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "a", [["class", "btn btn-outline-light mr-2 mt-3 text-light"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.scrollTo(_co.hero.linkOne.href) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hero.linkOne.text; _ck(_v, 1, 0, currVal_0); }); }
function View_HeroComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeroComponent_6)), i1.ɵdid(2, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeroComponent_7)), i1.ɵdid(4, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeroComponent_8)), i1.ɵdid(6, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.hero.linkOne.type === "external"); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.hero.linkOne.type === "internal"); _ck(_v, 4, 0, currVal_1); var currVal_2 = (_co.hero.linkOne.type === "anchor"); _ck(_v, 6, 0, currVal_2); }, null); }
function View_HeroComponent_10(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "a", [["class", "btn btn-outline-light ml-2 mt-3 text-light"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), i1.ɵted(1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hero.linkTwo.href; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.hero.linkTwo.text; _ck(_v, 1, 0, currVal_1); }); }
function View_HeroComponent_11(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, "a", [["class", "btn btn-outline-light ml-2 mt-3 text-light"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(1, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(2, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.hero.linkTwo.href; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 1).target; var currVal_1 = i1.ɵnov(_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _co.hero.linkTwo.text; _ck(_v, 2, 0, currVal_3); }); }
function View_HeroComponent_12(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "a", [["class", "btn btn-outline-light ml-2 mt-3 text-light"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.scrollTo(_co.hero.linkTwo.href) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hero.linkTwo.text; _ck(_v, 1, 0, currVal_0); }); }
function View_HeroComponent_9(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeroComponent_10)), i1.ɵdid(2, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeroComponent_11)), i1.ɵdid(4, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeroComponent_12)), i1.ɵdid(6, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.hero.linkTwo.type === "external"); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.hero.linkTwo.type === "internal"); _ck(_v, 4, 0, currVal_1); var currVal_2 = (_co.hero.linkTwo.type === "anchor"); _ck(_v, 6, 0, currVal_2); }, null); }
function View_HeroComponent_13(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "div", [["class", "scroll-container rounded-circle"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.scrollTo("#down") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, ":svg:svg", [["height", "20"], ["ratio", "1"], ["viewBox", "0 0 20 20"], ["width", "20"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, ":svg:polygon", [["points", "10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 0, ":svg:line", [["fill", "none"], ["stroke", "#000"], ["x1", "10.5"], ["x2", "10.5"], ["y1", "4"], ["y2", "15"]], null, null, null, null, null))], null, null); }
function View_HeroComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 20, "section", [["class", "jumbotron jumbotron-fluid text-center"]], [[24, "@heroAnimation", 0]], null, null, null, null)), i1.ɵdid(1, 278528, null, 0, i3.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵdid(2, 278528, null, 0, i3.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(3, { "background-image": 0 }), (_l()(), i1.ɵeld(4, 0, null, null, 16, "div", [["class", "overlay-dark"]], null, null, null, null, null)), i1.ɵdid(5, 278528, null, 0, i3.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(6, { "overlay-light": 0 }), (_l()(), i1.ɵeld(7, 0, null, null, 11, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeroComponent_2)), i1.ɵdid(9, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeroComponent_3)), i1.ɵdid(11, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeroComponent_4)), i1.ɵdid(13, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(14, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeroComponent_5)), i1.ɵdid(16, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeroComponent_9)), i1.ɵdid(18, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeroComponent_13)), i1.ɵdid(20, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = "jumbotron jumbotron-fluid text-center"; var currVal_2 = (_co.hero.size || "full"); _ck(_v, 1, 0, currVal_1, currVal_2); var currVal_3 = _ck(_v, 3, 0, (("url(" + _co.hero.image) + ")")); _ck(_v, 2, 0, currVal_3); var currVal_4 = "overlay-dark"; var currVal_5 = _ck(_v, 6, 0, (_co.hero.version === "light")); _ck(_v, 5, 0, currVal_4, currVal_5); var currVal_6 = _co.hero.top; _ck(_v, 9, 0, currVal_6); var currVal_7 = _co.hero.header; _ck(_v, 11, 0, currVal_7); var currVal_8 = _co.hero.p; _ck(_v, 13, 0, currVal_8); var currVal_9 = _co.hero.linkOne; _ck(_v, 16, 0, currVal_9); var currVal_10 = _co.hero.linkTwo; _ck(_v, 18, 0, currVal_10); var currVal_11 = !_co.hero.disableScrollDown; _ck(_v, 20, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = true; _ck(_v, 0, 0, currVal_0); }); }
function View_HeroComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeroComponent_1)), i1.ɵdid(1, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(2, 0, null, null, 0, "div", [["id", "down"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hero; _ck(_v, 1, 0, currVal_0); }, null); }
exports.View_HeroComponent_0 = View_HeroComponent_0;
function View_HeroComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-hero", [], null, null, null, View_HeroComponent_0, RenderType_HeroComponent)), i1.ɵdid(1, 114688, null, 0, i4.HeroComponent, [i1.PLATFORM_ID], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HeroComponent_Host_0 = View_HeroComponent_Host_0;
var HeroComponentNgFactory = i1.ɵccf("app-hero", i4.HeroComponent, View_HeroComponent_Host_0, { hero: "hero" }, {}, []);
exports.HeroComponentNgFactory = HeroComponentNgFactory;


/***/ }),

/***/ "./src/app/components/hero/hero.component.scss.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/components/hero/hero.component.scss.shim.ngstyle.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".btn[_ngcontent-%COMP%] {\n  color: white !important; }\n\n.jumbotron[_ngcontent-%COMP%] {\n  background-size: cover;\n  width: 100%;\n  position: relative; }\n\n.jumbotron-fluid[_ngcontent-%COMP%] {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.small[_ngcontent-%COMP%] {\n  height: calc(60vh - 80px); }\n\n.medium[_ngcontent-%COMP%] {\n  height: calc(80vh - 80px); }\n\n.large[_ngcontent-%COMP%] {\n  height: calc(90vh - 80px); }\n\n.full[_ngcontent-%COMP%] {\n  height: calc(100vh - 80px); }\n\n.container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 1; }\n\n.scroll-container[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 1;\n  background-color: rgba(255, 255, 255, 0.3);\n  width: 30px;\n  height: 30px;\n  padding: 5px;\n  overflow: hidden;\n  cursor: pointer;\n  fill: white;\n  color: white;\n  stroke: white; }\n\n.scroll-container[_ngcontent-%COMP%]   line[_ngcontent-%COMP%] {\n    stroke: white; }\n\n.overlay-light[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.5);\n  position: relative;\n  height: 100%;\n  width: 100%;\n  color: black; }\n\n.overlay-dark[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.2);\n  position: relative;\n  height: 100%;\n  width: 100%;\n  color: white; }\n\n.btn-outline-light[_ngcontent-%COMP%]:hover {\n  color: #212529 !important; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/hero/hero.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/hero/hero.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var HeroComponent = /** @class */ (function () {
    function HeroComponent(platformId) {
        this.platformId = platformId;
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    HeroComponent.prototype.scrollTo = function (item) {
        if (common_1.isPlatformBrowser(this.platformId)) {
            var id = document.querySelector(item);
            if (id) {
                id.scrollIntoView({ block: 'start', behavior: 'smooth' });
            }
        }
    };
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;


/***/ }),

/***/ "./src/app/components/news/news.component.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/components/news/news.component.ngfactory.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./news.component.scss.shim.ngstyle */ "./src/app/components/news/news.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./news.component */ "./src/app/components/news/news.component.ts");
var styles_NewsComponent = [i0.styles];
var RenderType_NewsComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_NewsComponent, data: { "animation": [{ type: 7, name: "fadeAnimation", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ":enter", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: { optional: true } }, { type: 11, selector: ":enter", animation: [{ type: 12, timings: "40ms", animation: [{ type: 4, styles: { type: 6, styles: "*", offset: null }, timings: "800ms ease" }] }], options: { optional: true } }], options: null }], options: {} }] } });
exports.RenderType_NewsComponent = RenderType_NewsComponent;
function View_NewsComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 9, "div", [["class", "row align-items-center "]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "div", [["class", "col-sm-12 col-md-4 pt-3 pb-3 fade-in"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "img", [["class", "img-fluid"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 6, "div", [["class", "col-sm-12 col-md-8"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(5, null, ["", ""])), (_l()(), i1.ɵeld(6, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(7, null, ["", ""])), (_l()(), i1.ɵeld(8, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(9, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.image; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.top; _ck(_v, 5, 0, currVal_1); var currVal_2 = _v.context.$implicit.header; _ck(_v, 7, 0, currVal_2); var currVal_3 = _v.context.$implicit.text; _ck(_v, 9, 0, currVal_3); }); }
function View_NewsComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "div", [["class", "row mb-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "div", [["class", "col-sm-12 text-center mt-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 3, "button", [["class", "btn btn-primary"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showAllNews() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(4, { "disabled": 0 }), (_l()(), i1.ɵted(-1, null, ["Ladda fler"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "btn btn-primary"; var currVal_1 = _ck(_v, 4, 0, (_co.displayNews === _co.news.newsItems)); _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_NewsComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, "div", [["class", "container pt-4 pb-4"]], [[24, "@fadeAnimation", 0]], null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, ["", ""])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NewsComponent_2)), i1.ɵdid(6, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NewsComponent_3)), i1.ɵdid(8, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.displayNews; _ck(_v, 6, 0, currVal_2); var currVal_3 = (_co.displayNews.length !== _co.news.newsItems.length); _ck(_v, 8, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.displayNews.length; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.news.header; _ck(_v, 4, 0, currVal_1); }); }
function View_NewsComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_NewsComponent_1)), i1.ɵdid(1, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.displayNews; _ck(_v, 1, 0, currVal_0); }, null); }
exports.View_NewsComponent_0 = View_NewsComponent_0;
function View_NewsComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-news", [], null, null, null, View_NewsComponent_0, RenderType_NewsComponent)), i1.ɵdid(1, 114688, null, 0, i3.NewsComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_NewsComponent_Host_0 = View_NewsComponent_Host_0;
var NewsComponentNgFactory = i1.ɵccf("app-news", i3.NewsComponent, View_NewsComponent_Host_0, { news: "news" }, {}, []);
exports.NewsComponentNgFactory = NewsComponentNgFactory;


/***/ }),

/***/ "./src/app/components/news/news.component.scss.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/components/news/news.component.scss.shim.ngstyle.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".file-item[_ngcontent-%COMP%] {\n  border-top: 1px solid; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/components/news/news.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/news/news.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.news.newsItems) {
            this.displayNews = this.news.newsItems.filter(function (item) { return _this.news.newsItems.indexOf(item) < 3; });
        }
    };
    NewsComponent.prototype.showAllNews = function () {
        if (this.news.newsItems) {
            this.displayNews = this.news.newsItems;
        }
    };
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;


/***/ }),

/***/ "./src/app/pages/footer/footer.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/pages/footer/footer.component.ngfactory.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./footer.component.scss.shim.ngstyle */ "./src/app/pages/footer/footer.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./footer.component */ "./src/app/pages/footer/footer.component.ts");
var i5 = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");
var styles_FooterComponent = [i0.styles];
var RenderType_FooterComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_FooterComponent, data: {} });
exports.RenderType_FooterComponent = RenderType_FooterComponent;
function View_FooterComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "a", [["class", "text-dark"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.scrollTo() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(3, 1), (_l()(), i1.ɵted(4, null, ["", ""]))], function (_ck, _v) { var currVal_2 = ("/" + _ck(_v, 3, 0, _v.context.$implicit.link)); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.title; _ck(_v, 4, 0, currVal_3); }); }
function View_FooterComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "div", [["class", "col-sm-12 col-md-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(2, null, ["", ""])), (_l()(), i1.ɵeld(3, 0, null, null, 2, "ul", [["class", "list-unstyled"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_3)), i1.ɵdid(5, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_1 = _v.context.$implicit.categoryItems; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.categoryTitle; _ck(_v, 2, 0, currVal_0); }); }
function View_FooterComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 7, "div", [["class", "container-fluid"]], null, null, null, null, null)), i1.ɵdid(1, 278528, null, 0, i3.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(2, { "background-image": 0 }), (_l()(), i1.ɵeld(3, 0, null, null, 4, "div", [["class", "footer-overlay pt-5 pb-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 3, "div", [["class", "container pt-5 pb-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_2)), i1.ɵdid(7, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, (("url(" + _co.menu.background) + ")")); _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.menu.categories; _ck(_v, 7, 0, currVal_1); }, null); }
function View_FooterComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_FooterComponent_1)), i1.ɵdid(1, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(2, 0, null, null, 15, "div", [["class", "container-fluid bg-primary"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 14, "div", [["class", "pt-4 pb-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 13, "div", [["class", "col text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 10, "p", [["class", "text-light mt-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 3, "a", [["class", "text-light"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 7).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(7, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(8, 1), (_l()(), i1.ɵted(-1, null, ["Privacy Policy"])), (_l()(), i1.ɵeld(10, 0, null, null, 1, "span", [["class", "text-light"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" | "])), (_l()(), i1.ɵeld(12, 0, null, null, 3, "a", [["class", "text-light"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 13).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(13, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(14, 1), (_l()(), i1.ɵted(-1, null, ["Cookies"])), (_l()(), i1.ɵeld(16, 0, null, null, 1, "p", [["class", "text-light mt-4 mb-4"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Copyright \u00A9 2018 \u00D6stra Lind\u00E5s Samf\u00E4llighet "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.menu; _ck(_v, 1, 0, currVal_0); var currVal_3 = _ck(_v, 8, 0, "/privacy"); _ck(_v, 7, 0, currVal_3); var currVal_6 = _ck(_v, 14, 0, "/cookies"); _ck(_v, 13, 0, currVal_6); }, function (_ck, _v) { var currVal_1 = i1.ɵnov(_v, 7).target; var currVal_2 = i1.ɵnov(_v, 7).href; _ck(_v, 6, 0, currVal_1, currVal_2); var currVal_4 = i1.ɵnov(_v, 13).target; var currVal_5 = i1.ɵnov(_v, 13).href; _ck(_v, 12, 0, currVal_4, currVal_5); }); }
exports.View_FooterComponent_0 = View_FooterComponent_0;
function View_FooterComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-footer", [], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), i1.ɵdid(1, 114688, null, 0, i4.FooterComponent, [i1.PLATFORM_ID, i5.ContentService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_FooterComponent_Host_0 = View_FooterComponent_Host_0;
var FooterComponentNgFactory = i1.ɵccf("app-footer", i4.FooterComponent, View_FooterComponent_Host_0, {}, {}, []);
exports.FooterComponentNgFactory = FooterComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/footer/footer.component.scss.shim.ngstyle.js":
/*!********************************************************************!*\
  !*** ./src/app/pages/footer/footer.component.scss.shim.ngstyle.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".footer-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.6); }\n\n.container-fluid[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0; }\n\nh2[_ngcontent-%COMP%] {\n  margin-top: 2rem; }\n\nli[_ngcontent-%COMP%] {\n  margin-top: 1rem; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/pages/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/footer/footer.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var content_service_1 = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var FooterComponent = /** @class */ (function () {
    function FooterComponent(platformId, cs) {
        this.platformId = platformId;
        this.cs = cs;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.menu = this.cs.getMenu();
    };
    FooterComponent.prototype.scrollTo = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            var id = document.querySelector('#down');
            if (id) {
                id.scrollIntoView({ block: 'start', behavior: 'smooth' });
            }
        }
    };
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/pages/menu/menu.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/pages/menu/menu.component.ngfactory.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./menu.component.scss.shim.ngstyle */ "./src/app/pages/menu/menu.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./menu.component */ "./src/app/pages/menu/menu.component.ts");
var i5 = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");
var styles_MenuComponent = [i0.styles];
var RenderType_MenuComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_MenuComponent, data: { "animation": [{ type: 7, name: "slideIn", definitions: [{ type: 1, expr: "* => *", animation: [{ type: 11, selector: ".slide-in-bottom", animation: { type: 6, styles: { opacity: 0, transform: "translate(0px, 40px)" }, offset: null }, options: { optional: true } }, { type: 11, selector: ".slide-in-bottom", animation: { type: 12, timings: "40ms", animation: [{ type: 4, styles: { type: 6, styles: { opacity: 1, transform: "translateX(0)" }, offset: null }, timings: "400ms 100ms ease" }] }, options: { optional: true } }, { type: 11, selector: ".slide-in-bottom", animation: [{ type: 4, styles: { type: 6, styles: "*", offset: null }, timings: 100 }], options: { optional: true } }], options: null }], options: {} }] } });
exports.RenderType_MenuComponent = RenderType_MenuComponent;
function View_MenuComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "li", [["class", "slide-in-bottom"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "a", [["class", "text-dark"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(3, 1), (_l()(), i1.ɵted(4, null, [" ", " "]))], function (_ck, _v) { var currVal_2 = ("/" + _ck(_v, 3, 0, _v.context.$implicit.link)); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.title; _ck(_v, 4, 0, currVal_3); }); }
function View_MenuComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "h3", [["class", "slide-in-bottom mt-5"]], null, null, null, null, null)), (_l()(), i1.ɵted(2, null, ["", ""])), (_l()(), i1.ɵeld(3, 0, null, null, 2, "ul", [["class", "list-unstyled"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MenuComponent_3)), i1.ɵdid(5, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_1 = _v.context.$implicit.categoryItems; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.categoryTitle; _ck(_v, 2, 0, currVal_0); }); }
function View_MenuComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 13, "div", [], null, null, null, null, null)), i1.ɵdid(1, 278528, null, 0, i3.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(2, { "background-image": 0 }), (_l()(), i1.ɵeld(3, 0, null, null, 10, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 9, "div", [["class", "overlay"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 4, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 2, "div", [["class", "col text-center"]], [[24, "@slideIn", 0]], null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MenuComponent_2)), i1.ɵdid(9, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(10, 0, null, null, 3, "div", [["class", "button-container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "btn close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00D7"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, (("url(" + _co.menu.background) + ")")); _ck(_v, 1, 0, currVal_0); var currVal_2 = _co.menu.categories; _ck(_v, 9, 0, currVal_2); }, function (_ck, _v) { var currVal_1 = undefined; _ck(_v, 7, 0, currVal_1); }); }
function View_MenuComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, "div", [["class", "modal"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MenuComponent_1)), i1.ɵdid(2, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.menu; _ck(_v, 2, 0, currVal_0); }, null); }
exports.View_MenuComponent_0 = View_MenuComponent_0;
function View_MenuComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-menu", [], null, null, null, View_MenuComponent_0, RenderType_MenuComponent)), i1.ɵdid(1, 114688, null, 0, i4.MenuComponent, [i5.ContentService, i3.Location], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_MenuComponent_Host_0 = View_MenuComponent_Host_0;
var MenuComponentNgFactory = i1.ɵccf("app-menu", i4.MenuComponent, View_MenuComponent_Host_0, {}, {}, []);
exports.MenuComponentNgFactory = MenuComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/menu/menu.component.scss.shim.ngstyle.js":
/*!****************************************************************!*\
  !*** ./src/app/pages/menu/menu.component.scss.shim.ngstyle.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".modal[_ngcontent-%COMP%] {\n  display: block; }\n\n.modal-body[_ngcontent-%COMP%] {\n  height: 100vh;\n  position: relative;\n  background-size: cover;\n  padding: 0;\n  border: none; }\n\n.close[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-right: 2rem;\n  font-size: 3rem; }\n\n.overlay[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.6);\n  height: 100%;\n  width: 100%;\n  position: relative;\n  border: none; }\n\n.container[_ngcontent-%COMP%] {\n  position: absolute;\n  overflow: scroll;\n  max-height: 100vh;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 1;\n  border: none; }\n\n.button-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  z-index: 999;\n  border: none; }\n\nli[_ngcontent-%COMP%] {\n  margin-top: 1rem; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/pages/menu/menu.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/menu/menu.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var content_service_1 = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var MenuComponent = /** @class */ (function () {
    function MenuComponent(cs, location) {
        this.cs = cs;
        this.location = location;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.menu = this.cs.getMenu();
    };
    MenuComponent.prototype.closeModal = function () {
        this.location.back();
    };
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;


/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ngfactory.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./not-found.component.scss.shim.ngstyle */ "./src/app/pages/not-found/not-found.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../../components/hero/hero.component.ngfactory */ "./src/app/components/hero/hero.component.ngfactory.js");
var i3 = __webpack_require__(/*! ../../components/hero/hero.component */ "./src/app/components/hero/hero.component.ts");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! ./not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
var i6 = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");
var i7 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_NotFoundComponent = [i0.styles];
var RenderType_NotFoundComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_NotFoundComponent, data: {} });
exports.RenderType_NotFoundComponent = RenderType_NotFoundComponent;
function View_NotFoundComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-hero", [], null, null, null, i2.View_HeroComponent_0, i2.RenderType_HeroComponent)), i1.ɵdid(1, 114688, null, 0, i3.HeroComponent, [i1.PLATFORM_ID], { hero: [0, "hero"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.page.modules[0].hero; _ck(_v, 1, 0, currVal_0); }, null); }
function View_NotFoundComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_NotFoundComponent_1)), i1.ɵdid(1, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.page.modules.length; _ck(_v, 1, 0, currVal_0); }, null); }
exports.View_NotFoundComponent_0 = View_NotFoundComponent_0;
function View_NotFoundComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-not-found", [], null, null, null, View_NotFoundComponent_0, RenderType_NotFoundComponent)), i1.ɵdid(1, 114688, null, 0, i5.NotFoundComponent, [i6.ContentService, i7.Title, i7.Meta], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_NotFoundComponent_Host_0 = View_NotFoundComponent_Host_0;
var NotFoundComponentNgFactory = i1.ɵccf("app-not-found", i5.NotFoundComponent, View_NotFoundComponent_Host_0, {}, {}, []);
exports.NotFoundComponentNgFactory = NotFoundComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.scss.shim.ngstyle.js":
/*!**************************************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.scss.shim.ngstyle.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var content_service_1 = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(cs, titleService, metaService) {
        this.cs = cs;
        this.titleService = titleService;
        this.metaService = metaService;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        this.page = this.cs.getData('notFound');
        this.titleService.setTitle('Östra Lindås Samfällighet | ' + this.page.title);
        this.metaService.addTag({ name: 'robots', content: '"noindex,nofollow' });
    };
    return NotFoundComponent;
}());
exports.NotFoundComponent = NotFoundComponent;


/***/ }),

/***/ "./src/app/pages/start/start.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/pages/start/start.component.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./start.component.scss.shim.ngstyle */ "./src/app/pages/start/start.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../../components/hero/hero.component.ngfactory */ "./src/app/components/hero/hero.component.ngfactory.js");
var i3 = __webpack_require__(/*! ../../components/hero/hero.component */ "./src/app/components/hero/hero.component.ts");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! ../../components/news/news.component.ngfactory */ "./src/app/components/news/news.component.ngfactory.js");
var i6 = __webpack_require__(/*! ../../components/news/news.component */ "./src/app/components/news/news.component.ts");
var i7 = __webpack_require__(/*! ../../components/article/article.component.ngfactory */ "./src/app/components/article/article.component.ngfactory.js");
var i8 = __webpack_require__(/*! ../../components/article/article.component */ "./src/app/components/article/article.component.ts");
var i9 = __webpack_require__(/*! ../../components/file-list/file-list.component.ngfactory */ "./src/app/components/file-list/file-list.component.ngfactory.js");
var i10 = __webpack_require__(/*! ../../components/file-list/file-list.component */ "./src/app/components/file-list/file-list.component.ts");
var i11 = __webpack_require__(/*! ../../components/gallery/gallery.component.ngfactory */ "./src/app/components/gallery/gallery.component.ngfactory.js");
var i12 = __webpack_require__(/*! ../../components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
var i13 = __webpack_require__(/*! ../../components/contact-table/contact-table.component.ngfactory */ "./src/app/components/contact-table/contact-table.component.ngfactory.js");
var i14 = __webpack_require__(/*! ../../components/contact-table/contact-table.component */ "./src/app/components/contact-table/contact-table.component.ts");
var i15 = __webpack_require__(/*! ../top-bar/top-bar.component.ngfactory */ "./src/app/pages/top-bar/top-bar.component.ngfactory.js");
var i16 = __webpack_require__(/*! ../top-bar/top-bar.component */ "./src/app/pages/top-bar/top-bar.component.ts");
var i17 = __webpack_require__(/*! ../footer/footer.component.ngfactory */ "./src/app/pages/footer/footer.component.ngfactory.js");
var i18 = __webpack_require__(/*! ../footer/footer.component */ "./src/app/pages/footer/footer.component.ts");
var i19 = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");
var i20 = __webpack_require__(/*! ./start.component */ "./src/app/pages/start/start.component.ts");
var i21 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i22 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_StartComponent = [i0.styles];
var RenderType_StartComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_StartComponent, data: {} });
exports.RenderType_StartComponent = RenderType_StartComponent;
function View_StartComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-hero", [], null, null, null, i2.View_HeroComponent_0, i2.RenderType_HeroComponent)), i1.ɵdid(1, 114688, null, 0, i3.HeroComponent, [i1.PLATFORM_ID], { hero: [0, "hero"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.hero; _ck(_v, 1, 0, currVal_0); }, null); }
function View_StartComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_StartComponent_2)), i1.ɵdid(2, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = ((_v.context.$implicit.type === "hero") && _v.context.$implicit.hero); _ck(_v, 2, 0, currVal_0); }, null); }
function View_StartComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-news", [], null, null, null, i5.View_NewsComponent_0, i5.RenderType_NewsComponent)), i1.ɵdid(1, 114688, null, 0, i6.NewsComponent, [], { news: [0, "news"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.news; _ck(_v, 1, 0, currVal_0); }, null); }
function View_StartComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-article", [], null, null, null, i7.View_ArticleComponent_0, i7.RenderType_ArticleComponent)), i1.ɵdid(1, 114688, null, 0, i8.ArticleComponent, [], { article: [0, "article"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.article; _ck(_v, 1, 0, currVal_0); }, null); }
function View_StartComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-file-list", [], null, null, null, i9.View_FileListComponent_0, i9.RenderType_FileListComponent)), i1.ɵdid(1, 114688, null, 0, i10.FileListComponent, [], { files: [0, "files"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.files; _ck(_v, 1, 0, currVal_0); }, null); }
function View_StartComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-gallery", [], null, null, null, i11.View_GalleryComponent_0, i11.RenderType_GalleryComponent)), i1.ɵdid(1, 114688, null, 0, i12.GalleryComponent, [], { gallery: [0, "gallery"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.gallery; _ck(_v, 1, 0, currVal_0); }, null); }
function View_StartComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-contact-table", [], null, null, null, i13.View_ContactTableComponent_0, i13.RenderType_ContactTableComponent)), i1.ɵdid(1, 114688, null, 0, i14.ContactTableComponent, [], { contactTable: [0, "contactTable"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.contactTable; _ck(_v, 1, 0, currVal_0); }, null); }
function View_StartComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 10, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_StartComponent_4)), i1.ɵdid(2, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_StartComponent_5)), i1.ɵdid(4, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_StartComponent_6)), i1.ɵdid(6, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_StartComponent_7)), i1.ɵdid(8, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_StartComponent_8)), i1.ɵdid(10, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = ((_v.context.$implicit.type === "news") && _v.context.$implicit.news); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_v.context.$implicit.type === "article") && _v.context.$implicit.article); _ck(_v, 4, 0, currVal_1); var currVal_2 = ((_v.context.$implicit.type === "files") && _v.context.$implicit.files); _ck(_v, 6, 0, currVal_2); var currVal_3 = ((_v.context.$implicit.type === "gallery") && _v.context.$implicit.gallery); _ck(_v, 8, 0, currVal_3); var currVal_4 = ((_v.context.$implicit.type === "contactTable") && _v.context.$implicit.contactTable); _ck(_v, 10, 0, currVal_4); }, null); }
function View_StartComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-top-bar", [], null, null, null, i15.View_TopBarComponent_0, i15.RenderType_TopBarComponent)), i1.ɵdid(1, 114688, null, 0, i16.TopBarComponent, [], null, null), (_l()(), i1.ɵeld(2, 0, null, null, 4, "main", [["role", "main"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_StartComponent_1)), i1.ɵdid(4, 802816, null, 0, i4.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_StartComponent_3)), i1.ɵdid(6, 802816, null, 0, i4.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(7, 0, null, null, 1, "app-footer", [], null, null, null, i17.View_FooterComponent_0, i17.RenderType_FooterComponent)), i1.ɵdid(8, 114688, null, 0, i18.FooterComponent, [i1.PLATFORM_ID, i19.ContentService], null, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_0 = _co.page.modules; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.page.modules; _ck(_v, 6, 0, currVal_1); _ck(_v, 8, 0); }, null); }
exports.View_StartComponent_0 = View_StartComponent_0;
function View_StartComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-start", [], null, null, null, View_StartComponent_0, RenderType_StartComponent)), i1.ɵdid(1, 114688, null, 0, i20.StartComponent, [i19.ContentService, i21.ActivatedRoute, i22.Title, i22.Meta], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_StartComponent_Host_0 = View_StartComponent_Host_0;
var StartComponentNgFactory = i1.ɵccf("app-start", i20.StartComponent, View_StartComponent_Host_0, {}, {}, []);
exports.StartComponentNgFactory = StartComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/start/start.component.scss.shim.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/pages/start/start.component.scss.shim.ngstyle.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/pages/start/start.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/start/start.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var content_service_1 = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var StartComponent = /** @class */ (function () {
    function StartComponent(cs, route, titleService, metaService) {
        this.cs = cs;
        this.route = route;
        this.titleService = titleService;
        this.metaService = metaService;
    }
    StartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.url.subscribe(function (url) {
            _this.page = _this.cs.getData(url[0].path);
            _this.titleService.setTitle('Östra Lindås Samfällighet | ' + _this.page.title);
            _this.metaService.updateTag({ name: 'description', content: _this.page.description });
            _this.metaService.updateTag({ name: 'keywords', content: 'Östra Lindås, ' + _this.page.title });
        });
    };
    return StartComponent;
}());
exports.StartComponent = StartComponent;


/***/ }),

/***/ "./src/app/pages/top-bar/top-bar.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/pages/top-bar/top-bar.component.ngfactory.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./top-bar.component.scss.shim.ngstyle */ "./src/app/pages/top-bar/top-bar.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./top-bar.component */ "./src/app/pages/top-bar/top-bar.component.ts");
var styles_TopBarComponent = [i0.styles];
var RenderType_TopBarComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_TopBarComponent, data: {} });
exports.RenderType_TopBarComponent = RenderType_TopBarComponent;
function View_TopBarComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, "nav", [["class", "navbar navbar-light bg-light border-bottom box-shadow"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "a", [["class", "navbar-brand"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(3, 1), (_l()(), i1.ɵeld(4, 0, null, null, 0, "img", [["src", "./assets/images/logo.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 3, "button", [["aria-expanded", "false"], ["aria-label", "Toggle navigation"], ["class", "navbar-toggler btn"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 6).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(6, 16384, null, 0, i2.RouterLink, [i2.Router, i2.ActivatedRoute, [8, null], i1.Renderer2, i1.ElementRef], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(7, 1), (_l()(), i1.ɵeld(8, 0, null, null, 0, "span", [["class", "navbar-toggler-icon"]], null, null, null, null, null))], function (_ck, _v) { var currVal_2 = _ck(_v, 3, 0, "/start"); _ck(_v, 2, 0, currVal_2); var currVal_3 = _ck(_v, 7, 0, "/meny"); _ck(_v, 6, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
exports.View_TopBarComponent_0 = View_TopBarComponent_0;
function View_TopBarComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-top-bar", [], null, null, null, View_TopBarComponent_0, RenderType_TopBarComponent)), i1.ɵdid(1, 114688, null, 0, i4.TopBarComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_TopBarComponent_Host_0 = View_TopBarComponent_Host_0;
var TopBarComponentNgFactory = i1.ɵccf("app-top-bar", i4.TopBarComponent, View_TopBarComponent_Host_0, {}, {}, []);
exports.TopBarComponentNgFactory = TopBarComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/top-bar/top-bar.component.scss.shim.ngstyle.js":
/*!**********************************************************************!*\
  !*** ./src/app/pages/top-bar/top-bar.component.scss.shim.ngstyle.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".navbar-brand[_ngcontent-%COMP%] {\n  max-width: 70vw;\n  margin-right: 0; }\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 75px; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/pages/top-bar/top-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/top-bar/top-bar.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var TopBarComponent = /** @class */ (function () {
    function TopBarComponent() {
    }
    TopBarComponent.prototype.ngOnInit = function () {
    };
    return TopBarComponent;
}());
exports.TopBarComponent = TopBarComponent;


/***/ }),

/***/ "./src/app/services/content.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/content.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContentService = /** @class */ (function () {
    function ContentService() {
    }
    ContentService.prototype.getData = function (id) {
        var data = {
            notFound: {
                title: '404 - Sidan hittades inte',
                description: 'Sidan hittades inte',
                modules: [
                    this.getModule('notFoundHero')
                ]
            },
            start: {
                title: 'Start',
                description: 'Välkommen till Östra Lindås Samfällighet',
                modules: [
                    this.getModule('startHero'),
                    this.getModule('startNews'),
                    this.getArticle('startArticle'),
                    this.getModule('startGallery')
                ]
            },
            styrelsen: {
                title: 'Styrelsen och föreningsfakta',
                description: 'Här hittar du kontaktuppgifter till styrelsen samt områdesansvariga i Östra Lindås Samfällighet',
                modules: [
                    this.getModule('styrelsenHero'),
                    this.getModule('styrelsenContactTable'),
                    this.getModule('omradesansvarigTable'),
                    this.getArticle('faktaArticle')
                ]
            },
            regler: {
                title: 'Regler',
                description: 'Här hittar du information om samfällighetens relger',
                modules: [
                    this.getModule('reglerHero'),
                    this.getArticle('reglerArticle')
                ]
            },
            stadgar: {
                title: 'Stadgar',
                description: 'Här hittar du information om samfällighetens stadgar',
                modules: [
                    this.getModule('stadgarHero'),
                    this.getArticle('stadgarArticle')
                ]
            },
            staddagar: {
                title: 'Städdagar och Grönområden',
                description: 'Här hittar du information föreingens städdagar och grönområdet samt klippkartor',
                modules: [
                    this.getModule('stadDagarHero'),
                    this.getArticle('stadDagarOneArticle'),
                    this.getModule('omradesansvarigTable'),
                    this.getArticle('stadDagarTwoArticle'),
                ]
            },
            parkeringgarage: {
                title: 'Parkering, Garage & Vägar',
                description: 'Här hittar du information om vägar, parkeringsplatser och samfällighetens garage samt snöröjningskartor',
                modules: [
                    this.getModule('parkeringGarageHero'),
                    this.getArticle('parkeringGarageArticle')
                ]
            },
            tvfiber: {
                title: 'TV och Fiber',
                description: 'Här hittar du information om TV och fiber',
                modules: [
                    this.getModule('tvHero'),
                    this.getArticle('tvArticle')
                ]
            },
            dokument: {
                title: 'Dokument',
                description: 'Dokument, ritningar och infobrev med mera',
                modules: [
                    this.getModule('dokumentHero'),
                    this.getModule('files'),
                    this.getModule('infobrev'),
                ]
            },
            privacy: {
                title: 'Privacy',
                description: 'Privacy policy',
                modules: [
                    this.getArticle('privacyArticle')
                ]
            },
            cookies: {
                title: 'Cookies',
                description: 'Cookies',
                modules: [
                    this.getArticle('cookiesArticle')
                ]
            },
            test: {
                title: 'Test',
                description: 'Test',
                modules: [
                    this.getModule('startHero'),
                    this.getModule('startNews'),
                    this.getArticle('startArticle'),
                    this.getModule('startGallery'),
                    this.getModule('dokumentHero'),
                    this.getModule('files'),
                    this.getModule('infobrev'),
                    this.getArticle('reglerArticle'),
                    this.getModule('styrelsenContactTable')
                ]
            }
        };
        return data[id];
    };
    ContentService.prototype.getMenu = function () {
        return {
            background: './assets/images/image1.jpg',
            categories: [
                {
                    categoryTitle: 'Föreningen',
                    categoryItems: [
                        {
                            title: 'Nyheter / Om föreningen',
                            link: 'start'
                        },
                        {
                            title: 'Styrelsen / Föreningsfakta',
                            link: 'styrelsen'
                        },
                        {
                            title: 'Regler',
                            link: 'regler'
                        },
                        {
                            title: 'Stadgar',
                            link: 'stadgar'
                        }
                    ]
                },
                {
                    categoryTitle: 'Samfälligheten',
                    categoryItems: [
                        {
                            title: 'Städdagar / Grönområden',
                            link: 'staddagar'
                        },
                        {
                            title: 'Parkering, Garage / Vägar',
                            link: 'parkeringgarage'
                        },
                        {
                            title: 'TV / Fiber',
                            link: 'tvfiber'
                        },
                        {
                            title: 'Dokument',
                            link: 'dokument'
                        }
                    ]
                }
            ]
        };
    }; // menu
    ContentService.prototype.getModule = function (id) {
        var modules = {
            notFoundHero: {
                type: 'hero',
                hero: {
                    top: '404',
                    header: 'Sidan hittades inte',
                    image: './assets/images/image1.jpg',
                    version: 'light',
                    size: 'full',
                    linkOne: {
                        text: 'Till startsidan',
                        href: '/',
                        type: 'internal'
                    },
                    disableScrollDown: true
                }
            },
            startHero: {
                type: 'hero',
                hero: {
                    top: 'Välkommen till',
                    header: 'Östra Lindås Samfällighet',
                    image: './assets/images/image1.jpg',
                    version: 'light',
                    size: 'large',
                    linkOne: {
                        text: 'Meny',
                        href: 'meny',
                        type: 'internal'
                    },
                    linkTwo: {
                        text: 'Nyheter',
                        href: '#down',
                        type: 'anchor'
                    },
                }
            },
            styrelsenHero: {
                type: 'hero',
                hero: {
                    top: 'Kontaktinformation',
                    header: 'Styrelsen & Föreningsfakta',
                    ptemp: 'Här hittar du kontaktuppgifter till styrelsen samt fakta om föreningen',
                    image: './assets/images/image12.jpg',
                    version: 'light',
                    size: 'medium',
                }
            },
            reglerHero: {
                type: 'hero',
                hero: {
                    header: 'Samfällighetens Regler',
                    ptemp: 'Här hittar du information om samfällighetens relger',
                    image: './assets/images/image3.jpg',
                    version: 'light',
                    size: 'medium',
                }
            },
            stadgarHero: {
                type: 'hero',
                hero: {
                    header: 'Samfällighetens Stadgar',
                    ptemp: 'Här hittar du information om samfällighetens stadgar',
                    image: './assets/images/image10.jpg',
                    version: 'light',
                    size: 'medium',
                }
            },
            stadDagarHero: {
                type: 'hero',
                hero: {
                    header: 'Städdagar & Grönområden',
                    ptemp: 'Här hittar du information föreingens städdagar och grönområdet samt klippkartor',
                    image: './assets/images/image8.jpg',
                    version: 'light',
                    size: 'medium',
                }
            },
            parkeringGarageHero: {
                type: 'hero',
                hero: {
                    header: 'Parkering, Garage & Vägar',
                    ptemp: 'Här hittar du information om vägar, parkeringsplatser och samfällighetens garage samt snöröjningskartor',
                    image: './assets/images/image7.jpg',
                    version: 'light',
                    size: 'medium',
                }
            },
            tvHero: {
                type: 'hero',
                hero: {
                    header: 'TV och Fiber',
                    ptemp: 'Här hittar du information om TV-utbudet samt fiber',
                    image: './assets/images/image11.jpg',
                    version: 'light',
                    size: 'medium',
                }
            },
            dokumentHero: {
                type: 'hero',
                hero: {
                    top: 'Arkiv',
                    header: 'Dokument & ritningar',
                    ptemp: 'Här hittar du dokument, ritningar informationsbrev, med mera',
                    image: './assets/images/image13.jpg',
                    version: 'light',
                    size: 'medium',
                }
            },
            styrelsenContactTable: {
                type: 'contactTable',
                contactTable: {
                    header: 'Styrelsen 2018',
                    contacts: [
                        {
                            function: 'Ordförande',
                            name: 'Lars Hermanson',
                            address: 'Billdals Aspväg 38',
                            phone: '031 91 32 82 '
                        },
                        {
                            function: 'Kassör',
                            name: 'Gabriella Barta Söderqvist	',
                            address: 'Billdals Aspväg 70',
                            phone: '031 91 20 19'
                        },
                        {
                            function: 'Sekreterare',
                            name: 'Sara Danestedt',
                            address: 'Billdals Aspväg 110',
                            phone: '031 91 48 16'
                        },
                        {
                            function: 'Ledamot',
                            name: 'Kristoffer Sthen',
                            address: 'Lindåsvägen 68',
                            phone: '0723 71 75 03'
                        },
                        {
                            function: 'Ledamot',
                            name: 'Mikael Forsman',
                            address: 'Billdals Aspväg 62',
                            phone: '031 91 47 11'
                        },
                        {
                            function: 'Suppleant',
                            name: 'Jonas Jävert',
                            address: 'Lindåsvägen 22',
                            phone: '0739 02 04 57'
                        }
                    ]
                }
            },
            omradesansvarigTable: {
                type: 'contactTable',
                contactTable: {
                    header: 'Områdesansvariga',
                    contacts: [
                        {
                            function: 'Område 1',
                            name: '	Jonas Jävert',
                            address: 'Lindåsvägen 22',
                        },
                        {
                            function: 'Område 2',
                            name: 'Lena Larsson / Linda Vendelstrand Gardelin',
                            address: 'LV 50 / LV60  '
                        },
                        {
                            function: 'Område 3',
                            name: 'Björn Töpel',
                            address: 'Lindåsvägen 116'
                        },
                        {
                            function: 'Område 4',
                            name: 'Lars Hägnemo',
                            address: 'Billdals Aspväg 140',
                        },
                        {
                            function: 'Område 5',
                            name: 'Lars Björklund',
                            address: 'Billdals Aspväg 86'
                        },
                        {
                            function: 'Område 6',
                            name: 'Gabriella Barta Söderqvist',
                            address: 'Billdals Aspväg 70'
                        },
                        {
                            function: 'Område 7',
                            name: 'Christian Conradi',
                            address: 'Billdals Aspväg 7'
                        }
                    ]
                }
            },
            startNews: {
                type: 'news',
                news: {
                    header: 'Nyheter',
                    newsItems: [
                        {
                            top: 'Maj 2018',
                            header: 'Ny "Vippy"',
                            text: 'Ny "vippy" gungbräda är på plats!',
                            image: './assets/images/image16.jpg'
                        },
                        {
                            top: 'Maj 2018',
                            header: 'Ny hemsida',
                            text: 'Till följd av GDPR vill vi minska hanteringen av personuppgifter. Vi har därför byggt en ny hemsida med ett minimum personuppgifter. Vi kommer även att stänga ner epost-listorna tills vidare. Medlemsregister, städområden, årsmötesprotokoll mm. tillhandahålls av styrelsen på begäran.',
                            image: './assets/images/image1.jpg'
                        },
                        {
                            top: '21-22 Oktober',
                            header: 'Höstens städdagar',
                            text: 'Höstens städdagar är planerade till 21-22 Oktober',
                            image: './assets/images/image8.jpg'
                        },
                        {
                            top: 'Maj 2018',
                            header: 'Årsmötesprotokoll',
                            text: 'Protokollet från årsmötet är nu distribuerat. Protokollet kan även tillhandahålls av styrelsen på begäran.',
                            image: './assets/images/image9.jpg'
                        },
                    ]
                }
            },
            files: {
                type: 'files',
                files: {
                    header: 'Dokument',
                    files: [
                        {
                            header: 'Anläggningsbeslut',
                            text: 'Anläggningsbeslut för samfälligheten',
                        },
                        {
                            header: 'Fiber AV',
                            text: 'Ritning över fibernät Billdals Aspväg',
                        },
                        {
                            header: 'Fiber LV',
                            text: 'Ritning över fibernät Lindåsvägen',
                        },
                    ]
                }
            },
            infobrev: {
                type: 'files',
                files: {
                    header: 'Infobrev',
                    files: [
                        {
                            header: 'Välkomstbrev',
                        },
                        {
                            header: 'Julbrev 2017',
                        },
                        {
                            header: 'Sommarbrev 2017',
                        },
                        {
                            header: 'Julbrev 2016',
                        },
                        {
                            header: 'Sommarbrev 2016',
                        },
                    ]
                }
            },
            startGallery: {
                type: 'gallery',
                gallery: {
                    version: 'muted',
                    images: [
                        { url: './assets/images/image15.jpg' },
                        { url: './assets/images/image3.jpg' },
                        { url: './assets/images/image5.jpg' },
                        { url: './assets/images/image4.jpg' },
                        { url: './assets/images/image9.jpg' },
                        { url: './assets/images/image14.jpg' },
                    ]
                }
            }
        }; //modules
        return modules[id];
    };
    ContentService.prototype.getArticle = function (id) {
        var articles = {
            startArticle: {
                type: 'article',
                article: {
                    version: 'muted',
                    text: "\n            ## Om f\u00F6reningen\n      \n            \u00D6stra Lind\u00E5s anl\u00E4ggningssamf\u00E4llighetsf\u00F6rening bel\u00E4get \u00F6ster om gamla S\u00E4r\u00F6v\u00E4gen i s\u00F6dra Billdal. L\u00E4nsgr\u00E4nsen till Hallands l\u00E4n ligger enbart n\u00E5gra meter s\u00F6der om \u00D6stra Lind\u00E5s.\n            Omr\u00E5det byggdes huvudsakligen under 1972 och idag omfattar samf\u00E4lligheten totalt 135 hush\u00E5ll p\u00E5 Lind\u00E5sv\u00E4gen 8-128 och Billdals Aspv\u00E4g 2-148.\n      \n            Angr\u00E4nsande till omr\u00E5det ligger Lind\u00E5sskolan som har cirka 590 elever fr\u00E5n f\u00F6rskoleklass till \u00E5rskurs 9. P\u00E5 skolan finns ett fritidshem med fyra avdelningar. I n\u00E4romr\u00E5det finns det f\u00F6rskolor; Lindebov\u00E4gen, S\u00F6dra S\u00E4r\u00F6v\u00E4gen( \u00E4ven k\u00E4nd som Sommarbo) och Kyrkv\u00E4gen.\n            F\u00F6reningen f\u00F6rvaltar den gemensamma anl\u00E4ggningssamf\u00E4lligheten genom en styrelse som f\u00F6ljer f\u00F6reningens lagar stadgar och de lagar som g\u00E4ller f\u00F6r samf\u00E4llighetsf\u00F6reningar.\n      \n            Om Du \u00F6nskar f\u00F6r\u00E4ndringar \u00E4r du v\u00E4lkommen att l\u00E4mna in skriftlig motion senast 10 februari till styrelsens ordf\u00F6rande. Du \u00E4r givetvis mycket v\u00E4lkommen med f\u00F6rb\u00E4ttringsf\u00F6rslag som du l\u00E4mpligast st\u00E4ller till styrelsen eller l\u00E4mplig ledamot.\n            St\u00E4ddagar h\u00E5lls normalt tv\u00E5 g\u00E5nger per \u00E5r, v\u00E5r och h\u00F6st. Det \u00E4r mycket viktigt att alla som orkar st\u00E4ller upp, d\u00E5 ansvaret att h\u00E5lla omr\u00E5det i ordning vilar p\u00E5 alla. Risken \u00E4r annars att \u00E5rsavgiften m\u00E5ste h\u00F6jas f\u00F6r att bekosta st\u00E4dning, rabatt- och buskv\u00E5rd etc.\n            Enligt \u00E5rsm\u00F6tes beslut 2017 debiteras inte 2000:- per fastighet vid aktivt deltagande l\u00F6rdag och s\u00F6ndag p\u00E5 v\u00E5ra tv\u00E5 st\u00E4dhelger eller annan dag enligt \u00F6verenskommelse. Om man ej kan deltaga p\u00E5 st\u00E4ddag och vill slippa kostnaden skall man meddela n\u00E5gon i styrelsen eller omr\u00E5desansvariga, sk st\u00E4dledare, f\u00F6r att f\u00E5 en uppgift som kan utf\u00F6ras p\u00E5 annan dag \u00E4n st\u00E4ddag.\n      \n            I omr\u00E5det finns en landhockeybana som f\u00F6reningen underh\u00E5ller och alla omr\u00E5dets medlemmar \u00E4r v\u00E4lkomna att anv\u00E4nda. Respektera de ordningsregler som finns uppsatta invid banan.\n            Tennisbanan \u00E4gs av G\u00F6teborgs stad och underh\u00E5lls dessv\u00E4rre d\u00E5ligt. Det g\u00E5r dock att spela p\u00E5 banan.\n          "
                }
            },
            reglerArticle: {
                type: 'article',
                article: {
                    text: "\n            ## Regler och praxis\n            ### Parkering \n            Parkering \u00E4r till\u00E5ten 1 dygn f\u00F6r b\u00E5de boende och g\u00E4ster p\u00E5 de parkeringar som \u00E5terfinns i anslutning till garagen.\n            \n            Parkering inom omr\u00E5det \u00E4r **f\u00F6rbjuden**. Det \u00E4r dock till\u00E5tet att dagtid k\u00F6ra in f\u00F6r av-, p\u00E5lastning och d\u00E4refter omg\u00E5ende ta ut bilen ur omr\u00E5det. Inom omr\u00E5det \u00E4r det g\u00E5ngfart som g\u00E4ller f\u00F6r v\u00E5ra bilar, t\u00E4nk p\u00E5 v\u00E5ra barn som inte f\u00F6rv\u00E4ntar sig en bil n\u00E4r de kommer i full fart runt ett h\u00F6rne.\n            F\u00F6r att \u00F6ppna bommarna beh\u00F6vs en A-nyckel (gammal modell) och i vissa fall d\u00E4r det finns dubbla bommar beh\u00F6vs en trekantsnyckel. Dessa finns b\u00E5da att k\u00F6pa hos l\u00E5ssmed, l\u00E5na en grannes om du \u00E4r os\u00E4ker p\u00E5 vilken det \u00E4r som kr\u00E4vs. Var noga med att st\u00E4nga bommen efter er!\n            \n            Anv\u00E4nd INTE cykel/g\u00E5ngbana eller gr\u00E4smatta f\u00F6r in/utfart eller uppst\u00E4llning.\n            \n            Parkering p\u00E5 spolplattorna \u00E4r inte till\u00E5ten. Respektera din granne som flyttat till trevliga och rena \u00D6stra Lind\u00E5s vid havet...\n            \n            ### St\u00F6rande ljud\n            Styrelsen fick vid \u00E5rsst\u00E4mman 2010 i uppdrag att ta fram regler f\u00F6r n\u00E4r maskiner och annan st\u00F6rande verksamhet skall vara till\u00E5ten inom f\u00F6reningen. Visst m\u00E5ste man f\u00E5 lov att renovera/reparera sitt hus, klippa/trimma gr\u00E4smattor och ut\u00F6va hobbyarbeten p\u00E5 helger och kv\u00E4llar, men man kan v\u00E4lja typ av arbete efter tidpunkt f\u00F6r utf\u00F6randet.\n            \n            Kommunen har satt en tidsgr\u00E4ns 07:00-19:00 p\u00E5 vardagar samt med reducerad bullerniv\u00E5  till 22:00 p\u00E5 vardagskv\u00E4llar/l\u00F6rdagar/s\u00F6n- och helgdagar.\n            \n            Samf\u00E4llighetens \u00E5rsm\u00F6te har beslutat att fredag-s\u00F6ndag samt helgdagar under den varma delen av \u00E5ret ska buller begr\u00E4nsas efter 18:00 och innan 08:00. Om man har behov av att jobba utanf\u00F6r dessa begr\u00E4nsningar, prata med grannarna!\n            \n            ### Moped\u00E5kning\n            Moped f\u00E5r ej k\u00F6ras inom omr\u00E5det av varken ungdom eller vuxen. Vid infarterna till omr\u00E5det finns skyltar som tydligt visar detta. Vi vill be Er som har moped\u00E5kande ungdomar att informera dem och deras bes\u00F6kande kamrater om vad som g\u00E4ller.\n            \n            ### Husdjur\n            Alla typer av husdjur m\u00E5ste vara kopplade i omr\u00E5det och f\u00E5r ej springa l\u00F6sa. Hundar och katter b\u00F6r ej vistas runt lekplatserna. \u00C4ven husdjur m\u00E5ste givetvis g\u00E5 p\u00E5 toaletten. Var v\u00E4nlig st\u00E4da upp efter fullbordat bes\u00F6k s\u00E5 att \u00F6vriga i omr\u00E5det slipper trampa runt i avf\u00F6ring etc!\n            \n            ### B\u00E5tar - Trailers- Husvagnar m.m. \n            Det \u00E4r **ej till\u00E5tet** att st\u00E4lla upp b\u00E5tar, trailers, husvagnar m.m. f\u00F6r vintern p\u00E5 Samf\u00E4llighetens mark. Detta inkluderar \u00E4ven v\u00E5ra garage.\n            \n            ### Ers\u00E4ttning fr\u00E5n kassan\n            Enligt styrelseprotokoll skall den som yrkar p\u00E5 ers\u00E4ttning fr\u00E5n Samf\u00E4llighetens kassa ha f\u00F6rankrat ink\u00F6pet hos n\u00E5gon styrelseledamot dessf\u00F6rinnan. En ensam styrelseledamot kan tillstyrka belopp upp till 1.000 SEK utan \u00F6vriga styrelsens eller \u00E5rsm\u00F6tets godk\u00E4nnande. Rekvisition kr\u00E4vs om godk\u00E4nda ink\u00F6p g\u00F6rs mot faktura eller efterkrav.\n            \n            ### Avfall\n            Det \u00E4r f\u00F6rbjudet att sl\u00E4nga tr\u00E4dg\u00E5rdsavfall eller fyllnadsmaterial (jord, lera etc.) i skogen runt omr\u00E5det. Br\u00E4nnbart tr\u00E4dg\u00E5rdsavfall fr\u00E5n egen tomt \u00E4r till\u00E5tet att sl\u00E4nga i de sopbilar som anv\u00E4nds vid st\u00E4ddagarna.\n            I samband med f\u00F6r\u00E4ndringen av sophanteringen 2005 f\u00F6r hush\u00E5llen i omr\u00E5det har styrelsen tagit fram f\u00F6ljande policy f\u00F6r att v\u00E4gleda f\u00F6reningens medlemmar. \n            \n            ### Garage\n            Varje medlem i Samf\u00E4lligheten tillhandah\u00E5lls en parkeringsplats i till Samf\u00E4lligheten tillh\u00F6rande garagel\u00E4ngor.\n            \n            Som Samf\u00E4llighetsmedlem betalar du ingen fastighetsskatt f\u00F6r garageplatsen. Enligt senaste fastighetstaxering \u00E4r markv\u00E4rdet f\u00F6r parkeringsplatsen ca: 25 000:-. \n            \n            Enligt \u00E5rsm\u00F6tesbeslut 2014 \u00E4r det f\u00F6rbjudet att s\u00E4tta upp garageports\u00F6ppnare som ej monteras av beh\u00F6rig mont\u00F6r/firma. Detta f\u00F6r att porten skall vara s\u00E4ker i funktion och elanslutning.\n            \n            Om medlemmen inte utnyttjar platsen f\u00F6r parkering av egen bil skall den \u00F6verl\u00E5tas till styrelsen f\u00F6r \"utl\u00E5ning\" till annan medlem under den tid medlemmen inte anv\u00E4nder platsen. Detta f\u00F6r att minska problemen med f\u00F6r f\u00E5 parkeringsplatser inom Samf\u00E4llighetens omr\u00E5de.\n            \n            Garageplatsen f\u00E5r inte utnyttjas f\u00F6r n\u00E5got annat \u00E4ndam\u00E5l ut\u00F6ver parkering f\u00F6r medlemmens bil och f\u00F6rvaring av billtillh\u00F6righeter. Om det vid h\u00E4ndelse av brand i garagen finns lagrat annat br\u00E4nnbart material s\u00E5som m\u00F6bler, tr\u00E4, l\u00E5dor, papp etc. som kan f\u00F6rv\u00E4rra branden \u00E4r det risk f\u00F6r att f\u00F6rs\u00E4kringsbolaget ej betalar ut full ers\u00E4ttning till Samf\u00E4lligheten.\n            \n            Den som enligt ovan utnyttjar parkeringsplatsen f\u00F6r annat \u00E4ndam\u00E5l \u00E4n bilparkering m\u00E5ste allts\u00E5 dessutom teckna till\u00E4ggsf\u00F6rs\u00E4kring f\u00F6r eget \u00E4ndam\u00E5l ut\u00F6ver ovan angivna kostnader och kan dessutom bli skadest\u00E5ndsskyldig f\u00F6r skador p\u00E5 garagebyggnaden.\n            \n            Parkeringsplatserna i garagel\u00E4ngorna \u00E4r projekterade s\u00E5 att det skall parkeras en bil/plats, det vill s\u00E4ga att bild\u00F6rrarna skall kunna \u00F6ppnas in p\u00E5 platsen bredvid. Det \u00E4r d\u00E4rmed f\u00F6rbjudet att lagra material eller att s\u00E4tta upp v\u00E4gg under j\u00E4rnbalken som \u00E4r upplagd mellan portarna.\n            \n            Till varje garageport finns det 3 nycklar som fastighets\u00E4garen ansvarar f\u00F6r. Om man beh\u00F6ver k\u00F6pa en ny nyckel s\u00E5 k\u00F6ps dessa via V\u00E4stsvenska Port & El  http://shop.vpe.se/ F\u00F6r att kunna best\u00E4lla en nyckel beh\u00F6ver du det nummer som finns p\u00E5 l\u00E5scylindern.\n            \n            \n            \n            ### Luftv\u00E4rmepumpar, airconditioners och parabolantenner.\n            Styrelsen har f\u00F6reslagit f\u00F6ljande riktlinjer vid installation av luftv\u00E4rmepumpar, airconditioners och parabolantenner i omr\u00E5det:\n            \n            Installation skall ske p\u00E5 ett s\u00E4tt som minimerar p\u00E5verkan p\u00E5 n\u00E4rmilj\u00F6n och med st\u00F6rsta h\u00E4nsyn tagen till grannfastigheter.\n            \n            Fastighets\u00E4garen st\u00E5r f\u00F6r alla kostnader i samband installation.\n            Externa enheter s\u00E5som ex. v\u00E4rmev\u00E4xlare och parabolantenner\n            \n            placeras l\u00E4mpligen i atriumg\u00E5rden eller m\u00F6jligen p\u00E5 framsidan huset\n            * f\u00E5r endast monteras p\u00E5 den egna fastigheten inom tomtgr\u00E4ns\n            * f\u00E5r inte placeras p\u00E5 fasad mot granne\n            * f\u00E5r inte placeras p\u00E5 fasad mot bygata\n            Utdelat informationsblad.\n            \n            Tr\u00E4df\u00E4llning\n            Samf\u00E4lligheten \u00E4ger gemensamt mark och p\u00E5 den st\u00E5ende tr\u00E4d/skog. F\u00F6r att h\u00E5lla efter denna har vi from 2006 anlitat entrepren\u00F6r samt b\u00F6rjat avs\u00E4tta medel i skogsv\u00E5rdsfond. F\u00F6ljande policy har tagits fram f\u00F6r att v\u00E4gleda f\u00F6reningens medlemmar.\n            \n            ### Policy f\u00F6r tr\u00E4df\u00E4llning (g\u00E4ller tr\u00E4d p\u00E5 samf\u00E4llighetens mark):\n            \n            * All f\u00E4llning skall godk\u00E4nnas skriftligen av styrelsen och ber\u00F6rda grannar.\n            * Samf\u00E4lligheten bekostar f\u00E4llning och bortforsling av tr\u00E4d om fara f\u00F6r person eller egendom f\u00F6religger. Vid behov inkallas besiktningsman.\n            * F\u00E4llning av andra orsaker skall alltid godk\u00E4nnas av styrelsen och bekostas av fastighets\u00E4garen (\u00E4ven bortforsling av virke).\n\n          "
                }
            },
            faktaArticle: {
                type: 'article',
                article: {
                    text: "\n          ## F\u00F6reningsfakta\n\n          **F\u00F6reningsnamn**       \n          Anl\u00E4ggningssamf\u00E4lligheten \u00D6stra Lind\u00E5s \n\n          **Fastighetsbeteckning**  \n          Lind\u00E5s GA:10 \n\n          **Organisationsnummer**\t  \n          717904-7787 \n          \n          **Adress**\t              \n          Billdals Aspv\u00E4g 70, 427 39 BILLDAL \n          \n          **Hemsida**\t              \n          http://www.ostralindas.se \n          \n          **Kontakt**\t              \n          styrelsen@ostralindas.se \n          "
                }
            },
            stadgarArticle: {
                type: 'article',
                article: {
                    text: "\n            ## Stadgar\n\n            ** 1. ** Samf\u00E4llighetens firma \u00E4r Anl\u00E4ggningssamf\u00E4lligheten \u00D6stra Lind\u00E5s.\n        \n            ** 2. ** Samf\u00E4lligheten utg\u00F6rs av fastigheterna:\n              * Lind\u00E5s 1:144 - 1:184\n              * Lind\u00E5s 1:186 - 1:224\n              * Lind\u00E5s 1:228 - 1:249\n              * Lind\u00E5s 1:252 - 1:260\n              * Lind\u00E5s 1:415 - 1:438\n            \n        \n            ** 3. ** Samf\u00E4lligheten har till \u00E4ndam\u00E5l att underh\u00E5lla och driva den gemensamhetsanl\u00E4ggning, som enligt lagen om gemensamhetsanl\u00E4ggningar inr\u00E4ttats f\u00F6r de fastigheter, som ing\u00E5r i samf\u00E4lligheten. \n            Till gemensamhetsanl\u00E4ggningen h\u00F6r:\n              * Garage med belysning och kraftuttag samt parkeringsplatser och i anslutning till dessa inr\u00E4ttade anordningar f\u00F6r reng\u00F6ring av fordon.\n              * G\u00E5ngv\u00E4gar, lekplatser och gr\u00F6nytor.\n              * Elektrisk ytterbelysning och gemensamma elledningar till den del kraftleverant\u00F6ren ej svarar f\u00F6r anl\u00E4ggningen.\n              * Centralantennanl\u00E4ggning f\u00F6r radio och television med tillh\u00F6rande anordningar och ledningar.\n              * Serviceledningar f\u00F6r vatten och avlopp, dock ej allm\u00E4n vatten- och avloppsanl\u00E4ggning.\n              \n            \n            ** 4. ** F\u00F6r samf\u00E4lligheten skall finnas en styrelse, som skall utses bland fastighets\u00E4garna. Styrelsen skall best\u00E5 av fem ledam\u00F6ter j\u00E4mte en suppleant och ha sitt s\u00E4te i Billdal.\n            Styrelsen \u00E4r beslutsf\u00F6r om minst tre ledam\u00F6ter \u00E4r n\u00E4rvarande.\n            \n            ** 5. ** F\u00F6r granskning av styrelsens f\u00F6rvaltning och samf\u00E4llighetens r\u00E4kenskaper skall finnas tv\u00E5 revisorer j\u00E4mt en suppleant.\n            \n            ** 6. ** Styrelseledam\u00F6ter, styrelsesuppleant, revisorer och revisorsuppleant v\u00E4ljes \u00E5rligen p\u00E5 ordinarie samf\u00E4llighetsst\u00E4mma f\u00F6r tiden intill dess n\u00E4sta ordinarie st\u00E4mma h\u00E5llits.Ordf\u00F6rande utses av st\u00E4mman och styrelsen utser inom sig sekreterare och kass\u00F6r.\n            \n            ** 7. ** Samf\u00E4llighetens r\u00E4kenskaps\u00E5r sammanfaller med kalender\u00E5ret.\n            \n            ** 8. ** Det \u00E5ligger styrelsen att f\u00F6ra r\u00E4kenskaper \u00F6ver f\u00F6rvaltningen. R\u00E4kenskaperna skall h\u00E5llas tillg\u00E4ngliga f\u00F6r revisorer senast en m\u00E5nad efter r\u00E4kenskaps\u00E5rets utg\u00E5ng. \n            F\u00F6reningen skall \u00E5rligen fondera minst 0,3% av nyanskaffningsv\u00E4rdet till en s\u00E4rskild underh\u00E5llsfond. Syftet med fonden \u00E4r att s\u00E4kerst\u00E4lla underh\u00E5ll och f\u00F6rnyelse av gemensamhetsanl\u00E4ggningen som beskrivs under 3. \u00D6versyn av detta belopp skall g\u00F6ras varje \u00E5r.\n              \n              Styrelsen skall uppr\u00E4tta f\u00F6rvaltningsber\u00E4ttelser f\u00F6r till\u00E4ndag\u00E5nget verksamhets\u00E5r samt uppg\u00F6ra f\u00F6rslag till inkomst- och utgiftsstat och till debiteringsl\u00E4ngd f\u00F6r kommande r\u00E4kenskaps\u00E5r.\n              \n              Styrelsen skall tillse att under dess f\u00F6rvaltning st\u00E5ende egendom \u00E4r f\u00F6rs\u00E4krad till betryggande belopp. Kontanta tillg\u00E5ngar skall, bortsett fr\u00E5n obetydliga belopp, ins\u00E4ttas p\u00E5 bank.\n              \n              Vid styrelsens sammantr\u00E4den skall f\u00F6ras protokoll.\n            \n            ** 9. **Ordinarie samf\u00E4llighetsst\u00E4mma skall h\u00E5llas varje \u00E5r i mars eller april.\n            Extra samf\u00E4llighetsst\u00E4mma h\u00E5lles d\u00E5 styrelsen finner omst\u00E4ndigheter f\u00F6ranleda d\u00E4rtill, d\u00E5 revisorer s\u00E5 p\u00E5fordrar eller d\u00E5 minst en femtedel av samtliga r\u00F6stber\u00E4ttigade medlemmar hos styrelsen skriftligen beg\u00E4r detta med angivande av \u00E4rende som \u00F6nskas behandlat.Kallelse till samf\u00E4llighetsst\u00E4mma skall ske skriftligen. Kallelsen skall uts\u00E4ndas senast tv\u00E5 veckor f\u00F6re ordinarie och senast en vecka f\u00F6re extra samf\u00E4llighetsst\u00E4mma.Vid kallelsen till ordinarie samf\u00E4llighetsst\u00E4mma b\u00F6r bifogas styrelsens f\u00F6rvaltningsber\u00E4ttelse och revisionsber\u00E4ttelse.\n            \n            ** 10. Mom. 1 **\n            Vid ordinarie samf\u00E4llighetsst\u00E4mma skall f\u00F6ljande \u00E4renden f\u00F6rekomma:\n            \n            1. Justering av r\u00F6stl\u00E4ngd\n            2. Val av ordf\u00F6rande vid st\u00E4mman\n            3. Val av tv\u00E5 justeringsm\u00E4n\n            4. Fr\u00E5ga om kallelse till st\u00E4mman skett beh\u00F6rigen\n            5. F\u00F6redragning av styrelsens f\u00F6rvaltningsber\u00E4ttelse f\u00F6r det f\u00F6rflutna r\u00E4kenskaps\u00E5ret\n            6. F\u00F6rdragning av revisorernas ber\u00E4ttelse \u00F6ver styrelsens f\u00F6rvaltning\n            7. Fr\u00E5ga om beviljande av ansvarsfrihet f\u00F6r styrelsen\n            8. Fastst\u00E4llande av arvoden f\u00F6r styrelseledam\u00F6ter och revisorer\n            9. Fastst\u00E4llande av inkomst- och utgiftsstat f\u00F6r kommande \u00E5ret samt beslut i anledning av uppkommet \u00F6verskott eller underskott tidigare \u00E5r.\n            10. Fastst\u00E4llande av debiteringsl\u00E4ngd, upptagande av det belopp, som skall uttaxeras fr\u00E5n varje fastighets\u00E4gare, och tiden f\u00F6r inbetalningen\n            11. Val av ordf\u00F6rande och \u00F6vriga styrelseledam\u00F6ter samt styrelsesuppleant\n            12. Val av revisorer och revisorsuppleant\n            13. Utseende av valberedning on tre ledam\u00F6ter, varav en ordf\u00F6rande, j\u00E4mt tv\u00E5 suppleanter f\u00F6r f\u00F6rberedande av val j\u00E4mlikt 11) och 12)\n            14. Inkomna motioner. Motioner avseende ekonomiska \u00E5taganden skall, f\u00F6r att kunna upptas till behandling vid ordinarie st\u00E4mma, vara styrelsen tillhanda f\u00F6re den 10 februari.\n            15. \u00D6vriga \u00E4renden\n            \n            ** Mom. 2 **\n            Vid extra samf\u00E4llighetsst\u00E4mma f\u00E5r ej andra \u00E4renden bli f\u00F6rem\u00E5l f\u00F6r beslut \u00E4n de som angivits i kallelsen till st\u00E4mman.\n            \n            ** Mom. 3 **\n            R\u00F6stning sker \u00F6ppet; dock skall val f\u00F6rr\u00E4ttas med slutna sedlar om n\u00E5gon s\u00E5 \u00F6nskar. \n            Vid lika r\u00F6stetal avg\u00F6res val genom lottning. I andra fr\u00E5gor g\u00E4ller vid lika r\u00F6stetal den mening som bitr\u00E4des av ordf\u00F6randen.\n            \n            ** 11. ** \u00C4ndring av dessa stadgar skall f\u00F6r att bli g\u00E4llande antagas av tv\u00E5 p\u00E5 varandra f\u00F6ljande st\u00E4mmor med minst tv\u00E5 m\u00E5naders mellanrum, varav en skall vara ordinarie st\u00E4mma. \n            Beslut om stadge\u00E4ndring skall tillika ange dagen f\u00F6r \u00E4ndringens ikrafttr\u00E4dande.\n            \n            Att ovanst\u00E5ende stadgar blivit antagna p\u00E5 extra samf\u00E4llighetsst\u00E4mma den 19.9 1973 i Billdal betyga:\n            \n            \u00C4ndringar g\u00E4llande underh\u00E5llsfond gjorda enligt \u00E5rsm\u00F6te 1991 och 1992.\n            \n            Se \u00E4ven [Lag (1973:1150) om f\u00F6rvaltning av samf\u00E4lligheter](https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-19731150-om-forvaltning-av-samfalligheter_sfs-1973-1150)\n          "
                }
            },
            stadDagarOneArticle: {
                type: 'article',
                article: {
                    text: "\n          ## St\u00E4ddagar\n          St\u00E4ddagar h\u00E5lls normalt tv\u00E5 g\u00E5nger per \u00E5r, v\u00E5r och h\u00F6st. Det \u00E4r mycket viktigt att alla som orkar st\u00E4ller upp, d\u00E5 ansvaret att h\u00E5lla omr\u00E5det i ordning vilar p\u00E5 alla. Risken \u00E4r annars att \u00E5rsavgiften m\u00E5ste h\u00F6jas f\u00F6r att bekosta st\u00E4dning, rabatt- och buskv\u00E5rd etc. Enligt \u00E5rsm\u00F6tes beslut 2017 debiteras inte 2000:- per fastighet vid aktivt deltagande l\u00F6rdag och s\u00F6ndag p\u00E5 v\u00E5ra tv\u00E5 st\u00E4dhelger eller annan dag enligt \u00F6verenskommelse. Om man ej kan deltaga p\u00E5 st\u00E4ddag och vill slippa kostnaden skall man meddela n\u00E5gon i styrelsen eller omr\u00E5desansvariga, sk st\u00E4dledare, f\u00F6r att f\u00E5 en uppgift som kan utf\u00F6ras p\u00E5 annan dag \u00E4n st\u00E4ddag.\n          \n          Omr\u00E5desansvarig ansvarar f\u00F6r f\u00F6ljande:\n\n          \u00D6versyn av omr\u00E5det innan st\u00E4ddagar\n\n          * F\u00F6rdelning av arbetsuppgifter under st\u00E4ddagar\n\n          *  Allm\u00E4n kontroll av \"sitt\" omr\u00E5de Information till nyinflyttade (denna skrivelse), matrikel samt kallelse och protokoll fr\u00E5n senaste \u00E5rsm\u00F6tet. Materialet kan erh\u00E5llas fr\u00E5n styrelsens sekreterare.\n\n          * Innan varje st\u00E4ddag (ca 2-3 veckor innan) samlas samtliga omr\u00E5desansvariga f\u00F6r genomg\u00E5ng f\u00F6r att se vad som m\u00E5ste inhandlas till st\u00E4ddagen. Styrelsen sammankallar.\n\n          F\u00F6ljande material skall finnas utanf\u00F6r f\u00F6rr\u00E5det vid Billdals Aspv\u00E4g 122:\n\n          | Antal | Object |\n          | ----- | ------ |\n          | 1 st | Skopa f\u00F6r rensning av brunnar |\n          | 3 st | Skottk\u00E4rror |\n          | 1 st | Stege, tv\u00E5delad |\n          | 1 st | Sn\u00F6sl\u00E4de |\n\n          Om n\u00E5got g\u00E5r s\u00F6nder ansvarar Du f\u00F6r att enheten repareras. Kostnaderna regleras av samf\u00E4llighetens kass\u00F6r om inte v\u00E5rdsl\u00F6shet kan p\u00E5visas.\n\n          "
                }
            },
            stadDagarTwoArticle: {
                type: 'article',
                article: {
                    text: "\n            ## Att g\u00F6ra p\u00E5 st\u00E4ddagarna\n\n            **Buskar**\n\n            Kontrollera och \u00E5tg\u00E4rda f\u00F6rv\u00E4xta planteringar vid lekplatser, garage m.m.\n        \n            ** Staket **\n\n            Byt ut skadade br\u00E4dor f\u00F6r staket vid lekplatser, garagel\u00E4ngor eller bygator. M\u00E5la om vid behov.\n        \n            ** Lekplatser**\n\n            Reparation eller utbyte av skadade leksaker. Materialbehov anm\u00E4les till styrelsen.\n        \n            ** Garage**\n\n            \u00D6versyn och eventuell m\u00E5lning Kontrollera stupr\u00F6r. Kontrollera att alla garage g\u00E5r att l\u00E5sa. Sm\u00F6rjning av portmekanism.\n        \n            ** Parkeringsplatser**\n\n            Kontroll och eventuell f\u00F6rb\u00E4ttring av linjem\u00E5lning.\n        \n            ** Omr\u00E5desv\u00E4gar**\n\n            Rapportering till styrelsen g\u00E4llande skador i asfalt typ bubblor, h\u00E5lor eller liknade.\n        \n            ** Belysning**\n\n            Kontroll av lampor och att eldosor ej \u00E4r \u00F6ppnade.\n        \n            ** Brandposter**\n\n            Kontrollera att posterna \u00E4r i gott skick och \u00E5tkomliga f\u00F6r brandk\u00E5ren. Skall finnas ex p\u00E5 varje lekplats. Kontrollera \u00E4ven att pekskylten som pekar mot brandposten pekar \u00E5t r\u00E4tt h\u00E5ll.\n        \n            ** Brunnslock**\n            Kontroll av att lock ej saknas samt att locken ej \u00E4r l\u00E4tta f\u00F6r barn att flytta. Lock av s\u00E5 kallad kupad modell skall vara l\u00E5sta.\n        \n            ** Grus**\n\n            Allt grus/flis fr\u00E5n vinterns v\u00E4gh\u00E5llning skall sopas bort och l\u00E4ggas i grusl\u00E5dor.\n        \n            ** Datum**\n\n            Aktuellt datum f\u00F6r st\u00E4ddagar hittar du i protokollet fr\u00E5n \u00C5rsm\u00F6tet\n            \n            ** Gr\u00F6nomr\u00E5den**\n\n            Samf\u00E4lligheten \u00E4ger gemensamt mark och p\u00E5 den st\u00E5ende tr\u00E4d/skog. F\u00F6r att h\u00E5lla efter denna har vi from 2006 anlitat entrepren\u00F6r samt b\u00F6rjat avs\u00E4tta medel i skogsv\u00E5rdsfond. F\u00F6ljande policy har tagits fram f\u00F6r att v\u00E4gleda f\u00F6reningens medlemmar.\n            \n            * All f\u00E4llning skall godk\u00E4nnas skriftligen av styrelsen och ber\u00F6rda grannar.\n            * Samf\u00E4lligheten bekostar f\u00E4llning och bortforsling av tr\u00E4d om fara f\u00F6r person eller egendom f\u00F6religger. Vid behov inkallas besiktningsman.\n            * F\u00E4llning av andra orsaker skall alltid godk\u00E4nnas av styrelsen och bekostas av fastighets\u00E4garen (\u00E4ven bortforsling av virke).\n            \n            ## Gr\u00E4sklippning\n            * Gr\u00E4sklippning enl. kartor inkl. puts 20-22 ggr/ s\u00E4song 1 maj - 1 oktober.\n            * Slagning g\u00F6rs 1-2 ggr /\u00E5r vid norra parkeringen Billdals Aspv\u00E4g, pulkabacken, vid grind mot skolan samt g\u00E5ngtunneln under L\u00F6vskogsv\u00E4gen p\u00E5 beg\u00E4ran.\n            * Entrepen\u00F6r: Lindome Entreprenad AB\n            \n            #### Klippkarta norr\n        \n            ![Norr](./assets/images/klipp-norr.png)\n        \n            #### Klippkarta mitt\n        \n            ![Mitt](./assets/images/klipp-mitt.png)\n        \n            #### Klippkarta s\u00F6der\n        \n            ![S\u00F6der](./assets/images/klipp-soder.png)\n          "
                }
            },
            parkeringGarageArticle: {
                type: 'article',
                article: {
                    text: "\n            ## Parkeringsplatser\n            Parkering \u00E4r till\u00E5ten 1 dygn f\u00F6r b\u00E5de boende och g\u00E4ster p\u00E5 de parkeringar som \u00E5terfinns i anslutning till garagen.\n            \n            Parkering inom omr\u00E5det \u00E4r f\u00F6rbjuden. Det \u00E4r dock till\u00E5tet att dagtid k\u00F6ra in f\u00F6r av-, p\u00E5lastning och d\u00E4refter omg\u00E5ende ta ut bilen ur omr\u00E5det. Inom omr\u00E5det \u00E4r det g\u00E5ngfart som g\u00E4ller f\u00F6r v\u00E5ra bilar, t\u00E4nk p\u00E5 v\u00E5ra barn som inte f\u00F6rv\u00E4ntar sig en bil n\u00E4r de kommer i full fart runt ett h\u00F6rne.\n            F\u00F6r att \u00F6ppna bommarna beh\u00F6vs en A-nyckel (gammal modell) och i vissa fall d\u00E4r det finns dubbla bommar beh\u00F6vs en trekantsnyckel. Dessa finns b\u00E5da att k\u00F6pa hos l\u00E5ssmed, l\u00E5na en grannes om du \u00E4r os\u00E4ker p\u00E5 vilken det \u00E4r som kr\u00E4vs. Var noga med att st\u00E4nga bommen efter er!\n            \n            Anv\u00E4nd INTE cykel/g\u00E5ngbana eller gr\u00E4smatta f\u00F6r in/utfart eller uppst\u00E4llning.\n            \n            Parkering p\u00E5 spolplattorna \u00E4r inte till\u00E5ten. Respektera din granne som flyttat till trevliga och rena \u00D6stra Lind\u00E5s vid havet...\n            \n            B\u00E5tar - Trailers- Husvagnar m.m. Det \u00E4r ej till\u00E5tet att st\u00E4lla upp b\u00E5tar, trailers, husvagnar m.m. f\u00F6r vintern p\u00E5 Samf\u00E4llighetens mark. Detta inkluderar \u00E4ven v\u00E5ra garage.\n\n            ## Garage\n            Varje medlem i Samf\u00E4lligheten tillhandah\u00E5lls en parkeringsplats i till Samf\u00E4lligheten tillh\u00F6rande garagel\u00E4ngor.\n            \n            Som Samf\u00E4llighetsmedlem betalar du ingen fastighetsskatt f\u00F6r garageplatsen. Enligt senaste fastighetstaxering \u00E4r markv\u00E4rdet f\u00F6r parkeringsplatsen ca: 25 000:-.\n            \n            Enligt \u00E5rsm\u00F6tesbeslut 2014 \u00E4r det f\u00F6rbjudet att s\u00E4tta upp garageports\u00F6ppnare som ej monteras av beh\u00F6rig mont\u00F6r/firma. Detta f\u00F6r att porten skall vara s\u00E4ker i funktion och elanslutning.\n            \n            Om medlemmen inte utnyttjar platsen f\u00F6r parkering av egen bil skall den \u00F6verl\u00E5tas till styrelsen f\u00F6r \"utl\u00E5ning\" till annan medlem under den tid medlemmen inte anv\u00E4nder platsen. Detta f\u00F6r att minska problemen med f\u00F6r f\u00E5 parkeringsplatser inom Samf\u00E4llighetens omr\u00E5de.\n            \n            Garageplatsen f\u00E5r inte utnyttjas f\u00F6r n\u00E5got annat \u00E4ndam\u00E5l ut\u00F6ver parkering f\u00F6r medlemmens bil och f\u00F6rvaring av billtillh\u00F6righeter. Om det vid h\u00E4ndelse av brand i garagen finns lagrat annat br\u00E4nnbart material s\u00E5som m\u00F6bler, tr\u00E4, l\u00E5dor, papp etc. som kan f\u00F6rv\u00E4rra branden \u00E4r det risk f\u00F6r att f\u00F6rs\u00E4kringsbolaget ej betalar ut full ers\u00E4ttning till Samf\u00E4lligheten.\n            \n            Den som enligt ovan utnyttjar parkeringsplatsen f\u00F6r annat \u00E4ndam\u00E5l \u00E4n bilparkering m\u00E5ste allts\u00E5 dessutom teckna till\u00E4ggsf\u00F6rs\u00E4kring f\u00F6r eget \u00E4ndam\u00E5l ut\u00F6ver ovan angivna kostnader och kan dessutom bli skadest\u00E5ndsskyldig f\u00F6r skador p\u00E5 garagebyggnaden.\n            \n            Parkeringsplatserna i garagel\u00E4ngorna \u00E4r projekterade s\u00E5 att det skall parkeras en bil/plats, det vill s\u00E4ga att bild\u00F6rrarna skall kunna \u00F6ppnas in p\u00E5 platsen bredvid. Det \u00E4r d\u00E4rmed f\u00F6rbjudet att lagra material eller att s\u00E4tta upp v\u00E4gg under j\u00E4rnbalken som \u00E4r upplagd mellan portarna.\n            \n            Till varje garageport finns det 3 nycklar som fastighets\u00E4garen ansvarar f\u00F6r. Om man beh\u00F6ver k\u00F6pa en ny nyckel s\u00E5 k\u00F6ps dessa via V\u00E4stsvenska Port & El  http://shop.vpe.se/ F\u00F6r att kunna best\u00E4lla en nyckel beh\u00F6ver du det nummer som finns p\u00E5 l\u00E5scylindern.  \n\n            ## V\u00E4gar\n            Moped\u00E5kning\n            Moped f\u00E5r ej k\u00F6ras inom omr\u00E5det av varken ungdom eller vuxen. Vid infarterna till omr\u00E5det finns skyltar som tydligt visar detta. Vi vill be Er som har moped\u00E5kande ungdomar att informera dem och deras bes\u00F6kande kamrater om vad som g\u00E4ller.\n        \n            ### Sn\u00F6r\u00F6jning norr\n            ![Norr](./assets/images/vag-norr.gif)\n        \n            ### Sn\u00F6r\u00F6jning mitt\n            ![Mitt](./assets/images/vag-mitt.gif)\n        \n            ### Sn\u00F6r\u00F6jning s\u00F6der\n            ![S\u00F6der](./assets/images/vag-soder.gif)\n          "
                }
            },
            tvArticle: {
                type: 'article',
                article: {
                    text: "\n          ## TV utbud\n\n          Vid \u00E5rsm\u00F6tet hade en medlem en fr\u00E5ga om styrelsen kunde skriva ett avtal vad g\u00E4ller samma TV kanaler som idag men en uppdatering till ett antal HD kanaler samt HD box. Styrelsen fick i uppdrag att kolla detta med Villa\u00E4garna och har nu f\u00E5tt svar att detta \u00E4r helt OK. Merkostnad f\u00F6r Samf\u00E4lligheten \u00E4r 40:-(fyrtio)/\u00E5r f\u00F6r samtliga fastigheter.\n          \n          Vi kommer nu att dela ut information i brevl\u00E5dan vad du som fastighets\u00E4gare m\u00E5ste g\u00F6ras f\u00F6r att starta tillg\u00E5ngen av HD kanalerna fr\u00E5n 01 maj 2018.\n          Vi hoppas ni skall se detta som en positiv utveckling av omr\u00E5det och en kvalitetsf\u00F6rb\u00E4ttring. \n          Inneh\u00E5llet i kanalerna styr vi dock inte \u00F6ver.\n          \n          Med v\u00E4nlig h\u00E4lsning\n          Lars Hermanson\n          \n           \n          Ny TV genom fiber\n          Dessa kanaler distribueras okodat vilket inneb\u00E4r att ni kan se kanalerna p\u00E5 alla anslutna TV utan box eller programkort. Efter anslutning av TV till mediakonvertern beh\u00F6ver ni g\u00F6ra en ny kanals\u00F6kning p\u00E5 TV:n.\n           \n          ### TV-kanaler\n          * SVT1\t E5\n          * SVT2\t E8\n          * TV3\t S13\n          * TV4\t S8\n          * Barnkanalen/SVT24\t E7\n          * Kunskapskanalen\tE10\n          * Kanal 5\tS11\n          * TV 6\tS15 \n          * Sjuan\tS19\n          * Discovery Channel\tS18\n          * MTV\tC6\n          * TV 8\tS7\n          * Kanal 9\tS17\n          * Kanal 11\tS16\n          * TV10\tC12\n          * TV12\tC11\n           \n          Dessutom distribueras SVT1, SVT2, SVT24, Barnkanalen, Kunskapskanalen och TV4 digitalt okodat i format DVB-C. Det inneb\u00E4r att ni kan se dessa kanaler i digital kvalit\u00E9 p\u00E5 alla anslutna TV med inbyggd DVB-C box utan programkort.\n          \n          Utrustningen \u00E4r nu installerad (maj 2015). G\u00E5 in p\u00E5 www.canaldigital.se f\u00F6r mer information. Basutbudet (ovan) ing\u00E5r i samf\u00E4llighetsavgiften. Om du \u00F6nskar fler kanaler, kontakta CanalDigital och det \u00E4r p\u00E5 din egen r\u00E4kning.\n          \n          Eftersom det varierar hur man st\u00E4ller in kanalerna beroende p\u00E5 tv-modell, ber vi er att l\u00E4sa instruktionsboken till er tv f\u00F6r korrekt inst\u00E4llning.\n          \n          ### Till\u00E4ggstj\u00E4nster som betalas av respektive hush\u00E5ll;\n          Bredband och telefoni levereras av Ownit, konstakta styrelsen f\u00F6r uppgifter n\u00E4r ni ska best\u00E4lla dessa tj\u00E4nster (g\u00E4ller inte under projektet, d\u00E5 har information ang\u00E5ende detta skickats ut per mail). \n          \n          Extra kanalpaket, kontakta Canal Digital och d\u00E5 \u00E4r det kabel-TV ni vill best\u00E4lla.\n          \n          ## Felanm\u00E4lan \n          ### TV \u2013 det \u00E4r Canal Digital som ska kontaktas. Men innan ni kontaktar Canal Digital, fr\u00E5ga era grannar om de har samma problem. \n          \n          Om ni \u00E4r de enda med problemet, testa att st\u00E4nga av konvertern och l\u00E5t den vara avst\u00E4ngd en minut innan ni startar om den. Om felet ej avhj\u00E4lps, testa med en annan antennkabel. Om felet kvarst\u00E5r, kontakta Canal Digital. Mer information om fels\u00F6kning hittar du p\u00E5 Canal Digitals hemsida\n          \n          Canal Digiatal felanm\u00E4lan, ring  0770 - 11 55 11 (knapptryck #1 befintlig kund, knappa in personnummer, #2 TV via kabeln\u00E4t, #3 teknisk information eller felanm\u00E4lan) eller skicka via deras hemsida, Kundservice \n          \n          ### Bredband/Telefoni \u2013 kontakta Ownit, 08 - 525 07 300 eller maila info@ownit.se   \n          \n          P\u00E5 Ownits hemsida finns information om p\u00E5g\u00E5ende k\u00E4nda driftst\u00F6rningar https://www.ownit.se/kundservice/driftstatus\n          \n          Ownit har mycket bra guider och information p\u00E5 sin hemsida https://www.ownit.se/kundservice/guider  \n          \n          Bl.a. om ni har best\u00E4llt bredband och inte har den f\u00F6rv\u00E4ntade hastigheten tr\u00E5dl\u00F6st, l\u00E4s guiden f\u00F6r hur man kan optimera hastigheten https://www.ownit.se/kundservice/guider/bredband-ownits-wifi-guide Den konverter/router som ingick i paketet \u00E4r inte den b\u00E4sta de har och kan d\u00E4rmed beh\u00F6va lite f\u00F6rst\u00E4rkning i form av en router, en medlem skriver f\u00F6ljande; \n          \n          K\u00F6pte en routern (p\u00E5 media market 1690kr)som Ownit rekommenderad (ASUS66 n\u00E5gonting hette den som Ownit rekommenderad vi k\u00F6pte den \u00F6vre ASUS68) bad dem brygga en lanutg\u00E5ng i den fasta konverten ( detta sker via telefon fr\u00E5n Ownit),  en n\u00E4tverkskabel drogs fr\u00E5n den fasta konverten till den nya routern. Valde en 15 meters kabel s\u00E5 att den nya routern kom i mitten av huset. Wow vilken skillnad det blev \u00E4r riktigt n\u00F6jda nu.\n          \n          "
                }
            },
            privacyArticle: {
                type: 'article',
                article: {
                    text: "\n            ## Privacy\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque ipsum at nunc pellentesque commodo. Phasellus mattis arcu eleifend sem ornare euismod. Ut porttitor leo eget nibh sodales, quis imperdiet purus sodales. Vestibulum consequat leo lectus, nec iaculis ex cursus a. Aliquam efficitur neque mattis nibh molestie elementum. Nam mattis ex molestie imperdiet tincidunt. Nullam dictum a nibh ut tempor. Aenean eleifend maximus neque dapibus scelerisque. Aenean feugiat ante felis, quis pharetra est dapibus sed. Integer maximus tempor euismod. Fusce magna magna, elementum vitae nulla id, placerat dapibus ligula. Duis vitae erat vitae sapien tincidunt ullamcorper. Aenean faucibus ac purus quis mattis. Maecenas ut est blandit, porttitor nunc sed, ullamcorper purus.\n\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque ipsum at nunc pellentesque commodo. Phasellus mattis arcu eleifend sem ornare euismod. Ut porttitor leo eget nibh sodales, quis imperdiet purus sodales. Vestibulum consequat leo lectus, nec iaculis ex cursus a. Aliquam efficitur neque mattis nibh molestie elementum. Nam mattis ex molestie imperdiet tincidunt. Nullam dictum a nibh ut tempor. Aenean eleifend maximus neque dapibus scelerisque. Aenean feugiat ante felis, quis pharetra est dapibus sed. Integer maximus tempor euismod. Fusce magna magna, elementum vitae nulla id, placerat dapibus ligula. Duis vitae erat vitae sapien tincidunt ullamcorper. Aenean faucibus ac purus quis mattis. Maecenas ut est blandit, porttitor nunc sed, ullamcorper purus.\n          "
                }
            },
            cookiesArticle: {
                type: 'article',
                article: {
                    text: "\n          ## Cookies\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque ipsum at nunc pellentesque commodo. Phasellus mattis arcu eleifend sem ornare euismod. Ut porttitor leo eget nibh sodales, quis imperdiet purus sodales. Vestibulum consequat leo lectus, nec iaculis ex cursus a. Aliquam efficitur neque mattis nibh molestie elementum. Nam mattis ex molestie imperdiet tincidunt. Nullam dictum a nibh ut tempor. Aenean eleifend maximus neque dapibus scelerisque. Aenean feugiat ante felis, quis pharetra est dapibus sed. Integer maximus tempor euismod. Fusce magna magna, elementum vitae nulla id, placerat dapibus ligula. Duis vitae erat vitae sapien tincidunt ullamcorper. Aenean faucibus ac purus quis mattis. Maecenas ut est blandit, porttitor nunc sed, ullamcorper purus.\n\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque ipsum at nunc pellentesque commodo. Phasellus mattis arcu eleifend sem ornare euismod. Ut porttitor leo eget nibh sodales, quis imperdiet purus sodales. Vestibulum consequat leo lectus, nec iaculis ex cursus a. Aliquam efficitur neque mattis nibh molestie elementum. Nam mattis ex molestie imperdiet tincidunt. Nullam dictum a nibh ut tempor. Aenean eleifend maximus neque dapibus scelerisque. Aenean feugiat ante felis, quis pharetra est dapibus sed. Integer maximus tempor euismod. Fusce magna magna, elementum vitae nulla id, placerat dapibus ligula. Duis vitae erat vitae sapien tincidunt ullamcorper. Aenean faucibus ac purus quis mattis. Maecenas ut est blandit, porttitor nunc sed, ullamcorper purus.\n          "
                }
            }
        }; //articles
        return articles[id];
    };
    return ContentService;
}()); //contentService
exports.ContentService = ContentService;


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_server_module_ngfactory_1 = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
exports.AppServerModuleNgFactory = app_server_module_ngfactory_1.AppServerModuleNgFactory;
var app_server_module_1 = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;
exports.LAZY_MODULE_MAP = {};


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Kristoffer/Documents/Privat/Development/lind/src/main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@nguniversal/common":
/*!**************************************!*\
  !*** external "@nguniversal/common" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/common");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "ngx-markdown/dist/lib/markdown.component":
/*!***********************************************************!*\
  !*** external "ngx-markdown/dist/lib/markdown.component" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-markdown/dist/lib/markdown.component");

/***/ }),

/***/ "ngx-markdown/dist/lib/markdown.module":
/*!********************************************************!*\
  !*** external "ngx-markdown/dist/lib/markdown.module" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-markdown/dist/lib/markdown.module");

/***/ }),

/***/ "ngx-markdown/dist/lib/markdown.service":
/*!*********************************************************!*\
  !*** external "ngx-markdown/dist/lib/markdown.service" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-markdown/dist/lib/markdown.service");

/***/ }),

/***/ "ngx-markdown/dist/lib/marked-options":
/*!*******************************************************!*\
  !*** external "ngx-markdown/dist/lib/marked-options" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-markdown/dist/lib/marked-options");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ })

/******/ })));