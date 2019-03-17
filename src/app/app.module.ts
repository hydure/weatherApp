import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CurrentTemperatureComponent } from './current-temperature/current-temperature.component';
import { FiveDayForecastComponent } from './five-day-forecast/five-day-forecast.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LocationService } from './services/location.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { WeatherService } from './services/weather.service';

// Routes Angular needs to know to access other "pages" using the navbar.
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'current', component: CurrentTemperatureComponent },
  { path: 'forecast', component: FiveDayForecastComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    CurrentTemperatureComponent,
    FiveDayForecastComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ LocationService, WeatherService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
