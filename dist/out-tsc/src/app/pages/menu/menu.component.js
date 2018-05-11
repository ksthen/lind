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
var app_animations_1 = require("../../app.animations");
var common_1 = require("@angular/common");
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
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.scss'],
            animations: [
                app_animations_1.slideInAnimation
            ]
        }),
        __metadata("design:paramtypes", [content_service_1.ContentService,
            common_1.Location])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map