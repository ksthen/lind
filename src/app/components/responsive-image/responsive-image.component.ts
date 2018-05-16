import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-responsive-image',
  templateUrl: './responsive-image.component.html',
  styleUrls: ['./responsive-image.component.scss'],
})
export class ResponsiveImageComponent implements OnInit {

  @Input() image: string;
  @Input() minWidth: string;

  public srcset: string;
  public sizes: string;

  constructor() { }

  ngOnInit() {
    if (
      this.image.slice(-3) === 'jpg' ||
      this.image.slice(-3) === 'JPG' ||
      this.image.slice(-3) === 'png' ||
      this.image.slice(-3) === 'PNG' ||
      this.image.slice(-3) === 'gif' ||
      this.image.slice(-3) === 'GIF') {
      
      const i = this.image.slice(0, -4);
      this.srcset =
      i + '-320' + this.image.slice(-4) + ' 320w, ' +
      i + '-640' + this.image.slice(-4) + ' 640w, ' +
      i + '-1280' + this.image.slice(-4) + ' 1280w, ' +
      i + '-1920' + this.image.slice(-4) + ' 1920w, ';

    } else if (
      this.image.slice(-4) === 'jpeg' ||
      this.image.slice(-4) === 'JPEG') {
      const i = this.image.slice(0, -5);

      this.srcset =
        i + '-320' + this.image.slice(-5) + ' 320w, ' +
        i + '-640' + this.image.slice(-5) + ' 640w, ' +
        i + '-1280' + this.image.slice(-5) + ' 1280w, ' +
        i + '-1920' + this.image.slice(-5) + ' 1920w, ';
    }

    if (this.minWidth) {
      this.sizes = `(min-width: ${this.minWidth}) ${this.minWidth}, 100vw`;
    } else {
      this.sizes = '(min-width: 320px) 320px, 100vw';
    }
  }

}
