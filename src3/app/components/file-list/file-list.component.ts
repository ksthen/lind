import { Component, OnInit, Input } from '@angular/core';

export interface FileList {
  header: string;
  files: Array<File>;
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

  ngOnInit() {
  }

}
