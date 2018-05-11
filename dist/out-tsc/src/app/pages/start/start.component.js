"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var content_service_1 = require("../../services/content.service");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
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
    StartComponent = __decorate([
        core_1.Component({
            selector: 'app-start',
            templateUrl: './start.component.html',
            styleUrls: ['./start.component.scss']
        }),
        __metadata("design:paramtypes", [content_service_1.ContentService,
            router_1.ActivatedRoute,
            platform_browser_1.Title,
            platform_browser_1.Meta])
    ], StartComponent);
    return StartComponent;
}());
exports.StartComponent = StartComponent;
//# sourceMappingURL=start.component.js.map