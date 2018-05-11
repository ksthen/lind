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
var app_animations_1 = require("../../app.animations");
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
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NewsComponent.prototype, "news", void 0);
    NewsComponent = __decorate([
        core_1.Component({
            selector: 'app-news',
            templateUrl: './news.component.html',
            styleUrls: ['./news.component.scss'],
            animations: [app_animations_1.fadeAnimation]
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=news.component.js.map