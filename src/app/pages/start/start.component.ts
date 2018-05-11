import { Component, OnInit } from '@angular/core';
import { ContentService, Page } from '../../services/content.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  page: Page;

  constructor(
      private cs: ContentService, 
      private route: ActivatedRoute,
      private titleService: Title,
      private metaService: Meta) { }

  ngOnInit() {
    this.route.url.subscribe(url => {

      let path = 'start';

      if (url.length > 0) {
        path = url[0].path;
      }
      console.log(path);
      this.page = this.cs.getData(path);
      this.titleService.setTitle('Östra Lindås Samfällighet | ' + this.page.title);
      this.metaService.updateTag({name: 'description', content: this.page.description});
      this.metaService.updateTag({name: 'keywords', content: 'Östra Lindås, '+ this.page.title})
    })
  }

}
