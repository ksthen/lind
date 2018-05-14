import { Component, OnInit, Input } from '@angular/core';

export interface ContactTable {
  header: string;
  contacts: Contact[];
}

export interface Contact {
  function: string;
  name: string;
  adress: string;
  phone: string;
}

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.scss'],
})
export class ContactTableComponent implements OnInit {

  @Input() contactTable: ContactTable;

  constructor() { }

  ngOnInit() {
  }

}
