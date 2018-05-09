import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Menu } from '../footer/footer.component';
import { slideInAnimation } from '../../app.animations';
import { MenuService } from '../../services/menu.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class MenuComponent implements OnInit {

  public menu: Menu;
  public showMenu: Observable<boolean>;

  constructor(
    private menuService: MenuService,
    private cs: ContentService) { }

  ngOnInit() {
    this.menu = this.cs.getMenu();
    this.showMenu = this.menuService.getMenuState();
  }

  closeModal() {
    console.log('close');
    this.menuService.closeMenu();
  }

}
