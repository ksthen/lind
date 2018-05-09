import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(private menuService: MenuService
  ) { }

  ngOnInit() {
  }

  openMenu() {
    this.menuService.openMenu();
  }

}
