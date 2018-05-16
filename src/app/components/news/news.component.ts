import { 
    Component, OnInit, Input, HostListener, 
    ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { staggerFade } from '../../app.animations';
import { isPlatformBrowser } from '@angular/common';

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
  animations: [staggerFade],
})
export class NewsComponent implements OnInit {

  @Input() news: News;
  displayNews: NewsItem[];

  public state: string;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const componentPosition = this.el.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const offset = 400;

      if (scrollPosition + windowHeight - offset >= componentPosition) {
        this.state = 'show';
      } else if (scrollPosition + windowHeight - offset * 2 < componentPosition) {
        this.state = 'hide';
      }
    }
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: any, 
    private el: ElementRef) { }

  ngOnInit() {
    if (this.news.newsItems) {
      this.displayNews = this.news.newsItems.filter(
        item => this.news.newsItems.indexOf(item) < 3);
    }
    if (isPlatformBrowser(this.platformId)) {
      this.state = 'hide';
    } else {
      this.state = 'show';
    }    
  }

  showAllNews() {
    if (this.news.newsItems) {
      this.displayNews = this.news.newsItems;
    }
    this.state = 'show';
    
  }

}
