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
var platform_browser_1 = require("@angular/platform-browser");
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
    NotFoundComponent = __decorate([
        core_1.Component({
            selector: 'app-not-found',
            templateUrl: './not-found.component.html',
            styleUrls: ['./not-found.component.scss']
        }),
        __metadata("design:paramtypes", [content_service_1.ContentService,
            platform_browser_1.Title,
            platform_browser_1.Meta])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
exports.NotFoundComponent = NotFoundComponent;
//# sourceMappingURL=not-found.component.js.map