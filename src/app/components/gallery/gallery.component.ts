import { 
  Component, 
  OnInit, Input} from '@angular/core';
import { staggerFade } from '../../app.animations';

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

  constructor() { }

  ngOnInit() {
  }

}

