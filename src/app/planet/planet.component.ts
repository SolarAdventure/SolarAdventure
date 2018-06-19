import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  @Input() planet;
  @Output() change: EventEmitter<object> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

}
