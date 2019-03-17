import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { LocationService } from '../services/location.service'
import { WeatherService } from '../services/weather.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-current-temperature',
  templateUrl: './current-temperature.component.html',
  styleUrls: ['./current-temperature.component.css'],
  providers: [ LocationService, WeatherService ]
})

export class CurrentTemperatureComponent implements OnInit, OnDestroy {
  private latitude: number;
  private longitude: number;
  private currentLocation: Subscription;
  private currentWeather: any;

  constructor(private _locationService: LocationService, 
              private _weatherService: WeatherService) {}

  ngOnInit(): void {
    // Retrieve the user's current location.
    this.currentLocation = this._locationService.retrieveCurrentPosition().subscribe(position => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      //console.log(this.latitude, this.longitude);

      // Get the current weather information from the above geographic coordinates.
      this._weatherService.getWeatherByCoordinates(this.latitude, this.longitude).subscribe(response => {
        console.log(response);
        this.currentWeather = response;
      });
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    this.currentLocation.unsubscribe();
  }
}
