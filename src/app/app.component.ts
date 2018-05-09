import {Component, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet id="top"></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router, 
    @Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
      });
    }
  }
}
