import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { env } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeatherByCoordinates(lat, long) {
    var coordinatesString = 'weather?' + 'lat=' + lat + '&lon=' + long;
    return this.http.get(env.baseURL + coordinatesString + env.appID + env.units);
  }

  getForecastsByCoordinates(lat, long){
    var coordinatesString = 'forecast?' + 'lat=' + lat + '&lon=' + long;
    return this.http.get(env.baseURL + coordinatesString + env.appID + env.units);
  }
}
