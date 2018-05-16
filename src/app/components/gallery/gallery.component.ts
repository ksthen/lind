import { 
  Component, 
  OnInit, Input, 
  ElementRef, 
  ViewChild, 
  AfterViewInit, 
  HostListener, 
  Inject,
  PLATFORM_ID} from '@angular/core';
import { staggerFade } from '../../app.animations';
import { isPlatformBrowser } from '@angular/common';

export interface GalleryImage {
  url: string;
  alt?: string;
}

export interface Gallery {
  images: GalleryImage[];
  version?: string; // muted
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [staggerFade],
})
export class GalleryComponent {

  @Input() gallery: Gallery;

  public state: string;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const componentPosition = this.el.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const offset = 50;

      if (scrollPosition + windowHeight - offset >= componentPosition) {
        this.state = 'show';
      } else if (scrollPosition + windowHeight < componentPosition) {
        this.state = 'hide';
      }
    }
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: any, 
    private el: ElementRef) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.state = 'hide';
    } else {
      this.state = 'show';
    }
  }

}

