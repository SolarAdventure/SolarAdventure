import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  planets = [
    {
      name: 'Sonne',
      description: 'Ein Stern',
      img: '../assets/sun.svg',
      isFavourite: false;
    }, {
      name: 'Merkur',
      description: 'Ein Stern',
      img: '../assets/01_mercury.svg',
      isFavourite: false;
    }, {
      name: 'Venus',
      description: 'Ein Stern',
      img: '../assets/02_venus.svg',
      isFavourite: false;
    }, {
      name: 'Erde',
      description: 'Ein Stern',
      img: '../assets/sun.svg',
      isFavourite: false;
    }, {
      name: 'Mars',
      description: 'Ein Stern',
      img: '../assets/sun.svg',
      isFavourite: false;
    }, {
      name: 'Jupiter',
      description: 'Ein Stern',
      img: '../assets/sun.svg',
      isFavourite: false;
    }, {
      name: 'Saturn',
      description: 'Ein Stern',
      img: '../assets/sun.svg',
      isFavourite: false;
    }, {
      name: 'Uranus',
      description: 'Ein Stern',
      img: '../assets/sun.svg',
      isFavourite: false;
    }, {
      name: 'Neptune',
      description: 'Ein Stern',
      img: '../assets/sun.svg',
      isFavourite: false;
    },
  ]
}
