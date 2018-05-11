"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var ngx_markdown_1 = require("ngx-markdown");
var common_1 = require("@nguniversal/common");
var start_component_1 = require("./pages/start/start.component");
var not_found_component_1 = require("./pages/not-found/not-found.component");
var article_component_1 = require("./components/article/article.component");
var footer_component_1 = require("./pages/footer/footer.component");
var hero_component_1 = require("./components/hero/hero.component");
var news_component_1 = require("./components/news/news.component");
var top_bar_component_1 = require("./pages/top-bar/top-bar.component");
var content_service_1 = require("./services/content.service");
var file_list_component_1 = require("./components/file-list/file-list.component");
var menu_component_1 = require("./pages/menu/menu.component");
var animations_1 = require("@angular/platform-browser/animations");
var gallery_component_1 = require("./components/gallery/gallery.component");
var contact_table_component_1 = require("./components/contact-table/contact-table.component");
var responsive_image_component_1 = require("./components/responsive-image/responsive-image.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                start_component_1.StartComponent,
                not_found_component_1.NotFoundComponent,
                article_component_1.ArticleComponent,
                file_list_component_1.FileListComponent,
                footer_component_1.FooterComponent,
                hero_component_1.HeroComponent,
                news_component_1.NewsComponent,
                top_bar_component_1.TopBarComponent,
                menu_component_1.MenuComponent,
                gallery_component_1.GalleryComponent,
                contact_table_component_1.ContactTableComponent,
                responsive_image_component_1.ResponsiveImageComponent
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'my-app' }),
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: 'start', pathMatch: 'full' },
                    { path: 'start', component: start_component_1.StartComponent },
                    { path: 'styrelsen', component: start_component_1.StartComponent },
                    { path: 'regler', component: start_component_1.StartComponent },
                    { path: 'stadgar', component: start_component_1.StartComponent },
                    { path: 'staddagar', component: start_component_1.StartComponent },
                    { path: 'tvfiber', component: start_component_1.StartComponent },
                    { path: 'dokument', component: start_component_1.StartComponent },
                    { path: 'parkeringgarage', component: start_component_1.StartComponent },
                    { path: 'privacy', component: start_component_1.StartComponent },
                    { path: 'cookies', component: start_component_1.StartComponent },
                    { path: 'test', component: start_component_1.StartComponent },
                    { path: 'meny', component: menu_component_1.MenuComponent },
                    { path: '**', component: not_found_component_1.NotFoundComponent }
                ]),
                ngx_markdown_1.MarkdownModule.forRoot(),
                common_1.TransferHttpCacheModule,
                animations_1.BrowserAnimationsModule
            ],
            entryComponents: [
                menu_component_1.MenuComponent
            ],
            providers: [content_service_1.ContentService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map