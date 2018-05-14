import { Component, OnInit, Input, Inject, PLATFORM_ID } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { isPlatformBrowser } from '@angular/common';

export interface Menu {
  background: string;
  categories: Category[];
}

export interface Category {
  categoryTitle: string;
  categoryItems: CategoryItem[];
}

export interface CategoryItem {
  link: string;
  title: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  public menu: Menu;


  constructor(
    @Inject(PLATFORM_ID) 
    private platformId: any, 
    private cs: ContentService) { }

  ngOnInit() {
    this.menu = this.cs.getMenu();
  }

  scrollTo() {
    if (isPlatformBrowser(this.platformId)) {
      const id = document.querySelector('#down');
      if (id) {
        id.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    }
  }
}
