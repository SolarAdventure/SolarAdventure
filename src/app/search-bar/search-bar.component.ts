import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input() planets;
  @Output() change: EventEmitter<object> = new EventEmitter();

  constructor() { }
  text = '';

  ngOnInit() {
  }

  search(text: string) {
    if (text === null) { return; }
    this.text = (this.text + text).toLowerCase();
    this.change.emit(this.text);
  }
}
