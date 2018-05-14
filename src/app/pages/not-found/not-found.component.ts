import { Component, OnInit } from '@angular/core';
import { ContentService, Page } from '../../services/content.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {

  page: Page;

  constructor(
    private cs: ContentService, 
    private titleService: Title,
    private metaService: Meta) { }

  ngOnInit() {
    this.page = this.cs.getData('notFound');
    this.titleService.setTitle('Östra Lindås Samfällighet | ' + this.page.title);
    this.metaService.addTag({ name: 'robots', content: '"noindex,nofollow' });
  }
}
