import * as oboe from 'oboe';

/* angular components */
import {
  Injectable
} from '@angular/core';
import {
  Headers
} from '@angular/http';
import {
  Observable
} from 'rxjs/Observable';

@Injectable()
export class DeliveryApi {
  constructor() {}

  post() {
    let headers = new Headers();
    headers.append('Authorization', '772ea600-78ad-11e6-a56b-0bff586a75e5');

    return Observable.create(observer => {
      oboe({
        url: 'https://api.flightmap.io/api/v1/vrp',
        method: 'POST',
        headers: headers,
        body: {
          service: [{
            id: "110757",
            lat: 30.73243011699,
            lng: 76.739011330689,
            name: "110757",
            duration: 5
          }],
          fleet: [{
            id: 1,
            lat: 30.7188978,
            lng: 76.8102981,
            latEnd: 30.7188978,
            lngEnd: 76.8102981,
            returnToStart: 0
          }],
          maxVisits: 6,
          polylines: false,
          distanceCalculation: false,
          speed: 40,
          decideFleetSize: 1
        }
      })
      .done(response => {
        if (!response.error) {

          console.log(response.data.polylines[1])
          // let decodedPolylines = decodePolyline(response.data.polylines);
          observer.next(response);
          observer.complete();
        }
      })
      .fail(error => {
        console.log(error)
        if (error) {
          // this._sessionExpired.check(error)
          // .subscribe(response => {

          // }, error => {

          // }, _ => {

          // });

          observer.error(error);
        }
      });
    });
  }
}