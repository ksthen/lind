import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class MenuService {

  private showMenu: BehaviorSubject <boolean>;

  constructor() { 
    this.showMenu = new BehaviorSubject(false);
  }

  openMenu() {
    this.showMenu.next(true);
  }

  closeMenu() {
    this.showMenu.next(false);
  }
  
  toogleMenu() {
    this.showMenu.next(!this.showMenu.getValue());
  }

  getMenuState(): Observable<boolean> {
    return this.showMenu.asObservable();
  }
}
