import { Component, OnInit, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { heroAnimations } from '../../app.animations';

export interface Hero {
  image?: string;
  top?: string;
  header?: string;
  p?: string;
  ptemp?: string;
  linkOne?: Link;
  linkTwo?: Link;
  version?: string; // light
  size?: string; // small medium full
  disableScrollDown?: boolean;
}

interface Link {
  text: string;
  href: string;
  type: string; //internal, anchor, external
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [ heroAnimations ]
})
export class HeroComponent implements OnInit {

  @Input() hero: Hero;

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
  }

  scrollTo(item: string) {
    if (isPlatformBrowser(this.platformId)) {
      const id = document.querySelector(item);
      if (id){
          id.scrollIntoView({ block: 'start', behavior: 'smooth'});
      }
    }
  }

}
