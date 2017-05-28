import * as oboe from 'oboe';
import * as decodePolyline from 'decode-google-map-polyline';

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
/* settings */
import {
  CONFIG
} from '../settings/app.config';

@Injectable()
export class DeliveryApi {
  constructor() {}

  post() {
    return Observable.create(observer => {
      oboe({
        url: 'http://localhost' + CONFIG.HOSTNAMEPORT + CONFIG.HOSTNAMEVERSION + 'delivery',
        method: 'POST',
        body: {
          service: [{
            id: 110810,
            lat: 30.648670261474,
            lng: 76.809466440475,
            name: "110810",
            duration: 5
          }]
        }
      })
      .done(response => {
        // console.log(response)
        if (response.code === 1) {
          let responseBody = JSON.parse(response.message);
          let polylines = decodePolyline(responseBody.data.polylines[1]);

          let data = {
            // solutions: responseBody.data.solutions,
            // noOfRoutes: responseBody.data.noOfRoutes,
            // cost: responseBody.data.cost,
            // totalDistanceTravelled: responseBody.data.totalDistanceTravelled,
            // totalJobs: responseBody.data.totalJobs,
            // totalTimeTaken: responseBody.data.totalTimeTaken,
            decodedPolylines: polylines
          }
          observer.next(data);
          observer.complete();
        }
      })
      .fail(error => {
        if (error) {
          observer.error(error);
        }
      });
    });
  }
}