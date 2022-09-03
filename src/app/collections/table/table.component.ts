import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('class') classNames = '';
  @Input() data: any = [];
  @Input() headers: any = [];

  /*
  Without defining the array type, it by default will be never. So when you tried to add a array obj to it, it was a type mismatch.
  4 ways:
  @Input() data: any = [];
  @Input() data: any[] = [];
  @Input() headers = [] as any;
  @Input() headers = [] as any[];
  */
  constructor() { }

  ngOnInit(): void {
  }

}
