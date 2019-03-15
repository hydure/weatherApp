import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  retrieveCurrentPosition(): Observable<any> {
    return Observable.create (observer => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            observer.next(position);
            observer.complete();
          },
          (error) => observer.error(error)
        );
      }
      else {
        observer.error("Browser does not support geolocation.");
      }
    });
  }
}