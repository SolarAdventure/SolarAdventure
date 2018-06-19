import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MatDialogModule,
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { PlanetComponent } from './planet/planet.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    SearchBarComponent,
    InfoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
