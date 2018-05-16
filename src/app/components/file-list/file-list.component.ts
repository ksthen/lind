import { Component, OnInit, Input, HostListener, Inject, 
  PLATFORM_ID, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { staggerFade } from '../../app.animations';

export interface FileList {
  header: string;
  files: File[];
}

export interface File {
  header: string;
  text?: string;
  url: string;
}

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss'],
  animations: [staggerFade],
})
export class FileListComponent implements OnInit {

  @Input() files: FileList;


  public state: string;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const componentPosition = this.el.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const offset = 400;

      if (scrollPosition + windowHeight - offset >= componentPosition) {
        this.state = 'show';
      } else if (scrollPosition + windowHeight - offset * 2 < componentPosition) {
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
