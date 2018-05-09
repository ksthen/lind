import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../../services/content.service';

export interface Menu {
  background: string;
  categories: Array<Category>;
}

export interface Category {
  categoryTitle: string;
  categoryItems: Array<CategoryItem>;
}

export interface CategoryItem {
  link: string;
  title: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public menu: Menu;

  constructor(private cs: ContentService) { }

  ngOnInit() {
    this.menu = this.cs.getMenu();
  }

}
