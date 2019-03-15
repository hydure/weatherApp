import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service'
import { Subscription } from 'rxjs';

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

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    // Retrieve the user's current location.
    this.currentLocation = this.locationService.retrieveCurrentPosition().subscribe(position => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      //console.log(this.latitude, this.longitude);
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    this.currentLocation.unsubscribe();
  }
}
