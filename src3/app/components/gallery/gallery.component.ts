import { Component, OnInit, Input } from '@angular/core';

export interface Gallery {
  images: Array<string>;
  version?: string; // muted
};

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() gallery: Gallery;

  constructor() { }

  ngOnInit() {
  }

}
