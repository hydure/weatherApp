import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service'
import { WeatherService } from '../services/weather.service'
import { Subscription } from 'rxjs';
import { env } from '../../environments/environment'

@Component({
  selector: 'app-five-day-forecast',
  templateUrl: './five-day-forecast.component.html',
  styleUrls: ['./five-day-forecast.component.css'],
  providers: [ LocationService ]
})
export class FiveDayForecastComponent implements OnInit {
  private latitude: number;
  private longitude: number;
  private currentLocation: Subscription;
  private forecasts: any;
  private city: string;

  constructor(private _locationService: LocationService, 
              private _weatherService: WeatherService) {}

  getForecasts(forecasts){
    this.forecasts = forecasts.list;
    this.city = forecasts.city.name;
  }

  ngOnInit(): void {
    // Retrieve the user's current location.
    this.currentLocation = this._locationService.retrieveCurrentPosition().subscribe(position => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      //console.log(this.latitude, this.longitude);

      // Get the forecasts' information from the above geographic coordinates.
      this._weatherService.getForecastsByCoordinates(this.latitude, this.longitude).subscribe(response => {
        //console.log(response);
        this.getForecasts(response);
      });
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    this.currentLocation.unsubscribe();
  }
}
