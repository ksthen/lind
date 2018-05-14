import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Menu } from '../footer/footer.component';
import { slideInAnimation } from '../../app.animations';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [slideInAnimation],
})
export class MenuComponent implements OnInit {

  public menu: Menu;

  constructor(
    private cs: ContentService,
    private location: Location) { }

  ngOnInit() {
    this.menu = this.cs.getMenu();
  }

  closeModal() {
    this.location.back();
  }

}
