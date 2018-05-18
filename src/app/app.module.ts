import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MarkdownModule } from 'ngx-markdown'; 
import { TransferHttpCacheModule } from '@nguniversal/common';
import { StartComponent } from './pages/start/start.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ArticleComponent } from './components/article/article.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { NewsComponent } from './components/news/news.component';
import { TopBarComponent } from './pages/top-bar/top-bar.component';
import { ContentService } from './services/content.service';
import { FileListComponent } from './components/file-list/file-list.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactTableComponent } from './components/contact-table/contact-table.component';
import { ResponsiveImageComponent } from './components/responsive-image/responsive-image.component';
import { ScrollAnimationDirective } from './directives/scroll-animation.directive';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    NotFoundComponent,
    ArticleComponent,
    FileListComponent,
    FooterComponent,
    HeroComponent,
    NewsComponent,
    TopBarComponent,
    MenuComponent,
    GalleryComponent,
    ContactTableComponent,
    ResponsiveImageComponent,
    ScrollAnimationDirective,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    RouterModule.forRoot([
      { path: '', component: StartComponent },
      { path: 'start', component: StartComponent },
      { path: 'styrelsen', component: StartComponent },
      { path: 'regler', component: StartComponent },
      { path: 'stadgar', component: StartComponent },
      { path: 'staddagar', component: StartComponent },
      { path: 'tvfiber', component: StartComponent },
      { path: 'dokument', component: StartComponent },
      { path: 'parkeringgarage', component: StartComponent },
      { path: 'privacy', component: StartComponent },
      { path: 'cookies', component: StartComponent },
      { path: 'test', component: StartComponent },
      { path: 'meny', component: MenuComponent },
      { path: '**', component: NotFoundComponent },
    ]),
    MarkdownModule.forRoot(),
    TransferHttpCacheModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [
    MenuComponent,
  ],
  providers: [ContentService],
  bootstrap: [AppComponent],
})
export class AppModule { }
