import { Directive, HostListener, PLATFORM_ID, 
    ElementRef, Inject, OnInit, Input, HostBinding } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollAnimation]',
})
export class ScrollAnimationDirective implements OnInit {

  @Input() offset: number;
  @HostBinding('@animate') animationTrigger = 'show'; 

  constructor(
    @Inject(PLATFORM_ID) private platformId: any, 
    private el: ElementRef) { 
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.animationTrigger = 'hide';
    } else {
      this.animationTrigger = 'show';
    }
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const componentPosition = this.el.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const offset = this.offset || 400;

      if (scrollPosition + windowHeight - offset >= componentPosition) {
        this.animationTrigger = 'show';
      } else if (scrollPosition + windowHeight - offset * 2 < componentPosition) {
        this.animationTrigger = 'hide';
      }
    }
  }

}
