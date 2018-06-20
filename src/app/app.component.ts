import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {
    const plans = JSON.parse(localStorage.getItem('planets'));
    if (plans) {
      this.originalplanets = plans;
      this.planets = plans;
    }
  }-
  planets;
  
  originalplanets = [
    {
      name: 'Sonne',
      description: 'Ein Stern',
      img: '',
      isFavourite: false
    }, {
      name: 'Merkur',
      description: 'Planet: 1, Temperatur: 400 Grad, Durchmesser: 4878km',
      img: '../01_mercury.svg',
      isFavourite: false
    }, {
      name: 'Venus',
      description: 'Planet: 2, Temperatur: 460 Grad, Durchmesser: 12104km',
      img: './assets/02_venus.svg',
      isFavourite: false
    }, {
      name: 'Erde',
      description: 'Planet: 3, Temperatur: 15 Grad, Durchmesser: 12760km',
      img: '../assets/03_earth.svg',
      isFavourite: false
    }, {
      name: 'Mars',
      description: 'Planet: 4, Temperatur: -30 Grad, Durchmesser: 6787km',
      img: '../assets/04_mars.svg',
      isFavourite: false
    }, {
      name: 'Jupiter',
      description: 'Planet: 5, Temperatur: -110 Grad, Durchmesser: 139822km',
      img: '../assets/05_jupiter.svg',
      isFavourite: false
    }, {
      name: 'Saturn',
      description: 'Planet: 6, Temperatur: -140 Grad, Durchmesser: 120500km',
      img: '../assets/06_saturn.svg',
      isFavourite: false
    }, {
      name: 'Uranus',
      description: 'Planet: 7, Temperatur: -195 Grad, Durchmesser: 51120km',
      img: '../assets/07_uranus.svg',
      isFavourite: false
    }, {
      name: 'Neptun',
      description: 'Planet: 8, Temperatur: -200 Grad, Durchmesser: 49530km',
      img: '../assets/08_neptune.svg',
      isFavourite: false
    },
  ];

  openDialog() {
    this.dialog.open(InfoDialogComponent);
  }

  save() {
    localStorage.setItem('planets', JSON.stringify(this.planets));
  }

  search(text){
    this.planets = this.originalplanets.filter(planet => {
      return planet.name.toLowerCase().includes(text)
    });
    console.log(this.planets);
  }

  // Sources:
  // https://solarsystem.nasa.gov/resources/681/solar-system-temperatures/
  // https://www.space.com/16080-solar-system-planets.html 
}

