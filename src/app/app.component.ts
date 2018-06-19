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
      img: '../assets/00_sun.svg',
      isFavourite: false
    }, {
      name: 'Merkur',
      description: 'Planet: 1, Temperatur: -200 bis 450 Grad, Durchmesser: 4878km',
      img: '../assets/01_mercury.svg',
      isFavourite: false
    }, {
      name: 'Venus',
      description: 'Planet: 2, Temperatur: 850 Grad, Durchmesser: 4878km',
      img: '../assets/02_venus.svg',
      isFavourite: false
    }, {
      name: 'Erde',
      description: 'Planet: 3, Temperatur: -200 bis 450 Grad, Durchmesser: 4878km',
      img: '../assets/03_earth.svg',
      isFavourite: false
    }, {
      name: 'Mars',
      description: 'Planet: 4, Temperatur: -200 bis 450 Grad, Durchmesser: 4878km',
      img: '../assets/04_mars.svg',
      isFavourite: false
    }, {
      name: 'Jupiter',
      description: 'Planet: 5, Temperatur: -200 bis 450 Grad, Durchmesser: 4878km',
      img: '../assets/05_jupiter.svg',
      isFavourite: false
    }, {
      name: 'Saturn',
      description: 'Planet: 6, Temperatur: -200 bis 450 Grad, Durchmesser: 4878km',
      img: '../assets/06_saturn.svg',
      isFavourite: false
    }, {
      name: 'Uranus',
      description: 'Planet: 7, Temperatur: -200 bis 450 Grad, Durchmesser: 4878km',
      img: '../assets/07_uranus.svg',
      isFavourite: false
    }, {
      name: 'Neptun',
      description: 'Planet: 8, Temperatur: -200 bis 450 Grad, Durchmesser: 4878km',
      img: '../assets/08_neptune.svg',
      isFavourite: false
    },
  ]
}
