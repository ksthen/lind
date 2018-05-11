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
var ResponsiveImageComponent = /** @class */ (function () {
    function ResponsiveImageComponent() {
    }
    ResponsiveImageComponent.prototype.ngOnInit = function () {
        if (this.image.slice(-3) === 'jpg' ||
            this.image.slice(-3) === 'JPG' ||
            this.image.slice(-3) === 'png' ||
            this.image.slice(-3) === 'PNG' ||
            this.image.slice(-3) === 'gif' ||
            this.image.slice(-3) === 'GIF') {
            var i = this.image.slice(0, -4);
            this.srcset =
                i + '-320' + this.image.slice(-4) + ' 320w, ' +
                    i + '-640' + this.image.slice(-4) + ' 640w, ' +
                    i + '-1280' + this.image.slice(-4) + ' 1280w, ' +
                    i + '-1920' + this.image.slice(-4) + ' 1920w, ';
        }
        else if (this.image.slice(-4) === 'jpeg' ||
            this.image.slice(-4) === 'JPEG') {
            var i = this.image.slice(0, -5);
            this.srcset =
                i + '-320' + this.image.slice(-5) + ' 320w, ' +
                    i + '-640' + this.image.slice(-5) + ' 640w, ' +
                    i + '-1280' + this.image.slice(-5) + ' 1280w, ' +
                    i + '-1920' + this.image.slice(-5) + ' 1920w, ';
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ResponsiveImageComponent.prototype, "image", void 0);
    ResponsiveImageComponent = __decorate([
        core_1.Component({
            selector: 'app-responsive-image',
            templateUrl: './responsive-image.component.html',
            styleUrls: ['./responsive-image.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ResponsiveImageComponent);
    return ResponsiveImageComponent;
}());
exports.ResponsiveImageComponent = ResponsiveImageComponent;
//# sourceMappingURL=responsive-image.component.js.map