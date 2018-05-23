import { Injectable } from '@angular/core';
import { Hero } from '../components/hero/hero.component';
import { News } from '../components/news/news.component';
import { Menu } from '../pages/footer/footer.component';
import { FileList } from '../components/file-list/file-list.component';
import { ContactTable } from '../components/contact-table/contact-table.component';
import { Gallery } from '../components/gallery/gallery.component';
import { Article } from '../components/article/article.component';
import * as pages from './pages';


export interface Module {
  type: string;
  hero?: Hero;
  news?: News;
  files?: FileList;
  article?: Article;
  gallery?: Gallery;
  contactTable?: ContactTable;
}

export interface Page {
  title: string;
  description: string;
  modules: Module[];
}

export interface Data {
  [id: string]: Page;
}

@Injectable()

export class ContentService {
  
  constructor() { 
  }

  getData(id: string) {
    const data: Data = {
      notFound: pages.notFoundContent,
      start: pages.startContent,
      styrelsen: pages.styrelsenContent,
      regler: pages.reglerContent,
      stadgar: pages.stadgarContent,
      staddagar: pages.staddagarContent,
      parkeringgarage: pages.parkeringGarageContent,
      tvfiber: pages.tvFiberContent,
      dokument: pages.dokumentContent,
      privacy: pages.privacyContent,
      cookies: pages.cookiesContent                               
    };
    return data[id];
  }

  getMenu(): Menu {
    return pages.menuContent;
  } 
} // contentService
