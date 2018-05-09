import { Component, OnInit, Input } from '@angular/core';
import { fadeAnimation } from '../../app.animations';

export interface News {
  header: string;
  newsItems: Array<NewsItem>;
}

export interface NewsItem {
  top?: string;
  header?: string;
  text?: string;
  image?: string;
  url?: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  animations: [fadeAnimation]
})
export class NewsComponent implements OnInit {

  @Input() news: News;
  displayNews: Array<NewsItem>;

  constructor() { }

  ngOnInit() {
    if (this.news.newsItems) {
      this.displayNews = this.news.newsItems.filter(item => this.news.newsItems.indexOf(item) < 3);
    }
  }

  showAllNews() {
    if (this.news.newsItems) {
      this.displayNews = this.news.newsItems;
    }
  }

}
