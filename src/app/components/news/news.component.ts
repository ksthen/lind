import { 
    Component, OnInit, Input } from '@angular/core';
import { staggerSlideFade } from '../../app.animations';

export interface News {
  header: string;
  newsItems: NewsItem[];
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
  animations: [staggerSlideFade],
})
export class NewsComponent implements OnInit {

  @Input() news: News;
  displayNews: NewsItem[];

  constructor() { }

  ngOnInit() {
    if (this.news.newsItems) {
      this.displayNews = this.news.newsItems.filter(
        item => this.news.newsItems.indexOf(item) < 3);
    } 
  }

  showAllNews() {
    if (this.news.newsItems) {
      this.displayNews = this.news.newsItems;
    }   
  }

}
