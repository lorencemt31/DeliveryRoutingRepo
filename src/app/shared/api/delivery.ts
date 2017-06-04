import * as oboe from 'oboe';
import * as decodePolyline from 'decode-google-map-polyline';
import * as polyline from 'polyline';

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
          service: [
          /*Route1*/
          {
            id: 110668,
            lat: 30.6880572,
            lng: 76.723205853442,
            name: "110668"
          }, {
            id: 110686,
            lat: 30.6978446,
            lng: 76.717864830689,
            name: "110686"
          }, {
            id: 110658,
            lat: 30.710668968463,
            lng: 76.7183,
            name: "110658"
          }, {
            id: 110702,
            lat: 30.72869511948,
            lng: 76.717071661377,
            name: "110702"
          }, {
            id: 110618,
            lat: 30.721612870468,
            lng: 76.727892707935,
            name: "110618"
          }, {
            id: 110767,
            lat: 30.725135205493,
            lng: 76.754956500806,
            name: "110767"
          }, 
          /*Route 2*/
          { 
            id: 110704,
            lat: 30.728782761185,
            lng: 76.849316277246,
            name: "110704"
          }, { 
            id: 110747,
            lat: 30.707190711617,
            lng: 76.850105361377,
            name: "110747"
          }, { 
            id: 110733,
            lat: 30.708026204455,
            lng: 76.860328338623,
            name: "110733"
          }, { 
            id: 110666,
            lat: 30.688014636559,
            lng: 76.859133504331,
            name: "110666"
          }, 
          // { 
          //   id: 110767,
          //   lat: 30.725135205493,
          //   lng: 76.754956500806,
          //   name: "110767"
          // }, 
          { 
            id: 110701,
            lat: 30.699274102296,
            lng: 76.844140069311,
            name: "110701"
          },
          /*Route3*/
          { 
            id: 110690,
            lat: 30.719112765252,
            lng: 76.831389177246,
            name: "110690"
          }, { 
            id: 110810,
            lat: 30.648670261474,
            lng: 76.809466440475,
            name: "110810"
          }, { 
            id: 110696,
            lat: 30.695155273618,
            lng: 76.738129107935,
            name: "110696"
          }, { 
            id: 110734,
            lat: 30.695649147281,
            lng: 76.74342468381,
            name: "110734"
          }, { 
            id: 110762,
            lat: 30.711872470975,
            lng: 76.762024407935,
            name: "110762"
          }, { 
            id: 110622,
            lat: 30.717184,
            lng: 76.767452746033,
            name: "110622"
          },
          /*Route4*/
          { 
            id: 110659,
            lat: 30.757619120924,
            lng: 76.769114397217,
            name: "110659"
          }, { 
            id: 110743,
            lat: 30.744933,
            lng: 76.741402,
            name: "110743"
          }, { 
            id: 110678,
            lat: 30.739078684831,
            lng: 76.7382,
            name: "110678"
          }, { 
            id: 110730,
            lat: 30.734327102234,
            lng: 76.732653169312,
            name: "110730"
          }, { 
            id: 110757,
            lat: 30.73243011699,
            lng: 76.739011330689,
            name: "110757"
          }, { 
            id: 110732,
            lat: 30.732282563081,
            lng: 76.7389255,
            name: "110732"
          },
          /*Route5*/
          { 
            id: 110519,
            lat: 30.726341764892,
            lng: 76.785085423279,
            name: "110519"
          }, { 
            id: 110676,
            lat: 30.726936890558,
            lng: 76.778821457672,
            name: "110676"
          }, { 
            id: 110671,
            lat: 30.727524329084,
            lng: 76.774441338623,
            name: "110671"
          }, { 
            id: 110426,
            lat: 30.735563974527,
            lng: 76.769615876721,
            name: "110426"
          }, { 
            id: 109977,
            lat: 30.73512641259,
            lng: 76.776623253967,
            name: "109977"
          }, { 
            id: 110669,
            lat: 30.729400589616,
            lng: 76.786641738623,
            name: "110669"
          }]
        }
      })
      .done(response => {
        // console.log(response)
        if (response.code === 1) {
          let responseBody = JSON.parse(response.message);
          let polylines = []
          
          for (let routeNum = 1; routeNum < responseBody.data.noOfRoutes; routeNum++) {
            // console.log('1_' + routeNum)
            let decoded = decodePolyline(responseBody.data.polylines['1_' + routeNum]);
            polylines.push(decoded);
          }

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