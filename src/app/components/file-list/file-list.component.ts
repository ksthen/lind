import { Component, OnInit, Input } from '@angular/core';
<<<<<<< HEAD
import { staggerFade } from '../../app.animations';
=======
>>>>>>> 8ade07331e77b660e0677e78324afb88bf3a2eb4

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
  styleUrls: ['./file-list.component.scss']
})

export class FileListComponent implements OnInit {

  @Input() files: FileList;

  constructor() { }

<<<<<<< HEAD
  ngOnInit() {
  }
=======
  ngOnInit() {}
>>>>>>> 8ade07331e77b660e0677e78324afb88bf3a2eb4

}
