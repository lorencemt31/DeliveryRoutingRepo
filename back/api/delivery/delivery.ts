import * as Const from '../../config/const';
import * as oboe from 'oboe';
import * as request from 'request';

export class DeliveryApi {
  constructor(private _app: any /*express.Application*/) {
    this.get();
  }

  get() {
    this._app
    .route('/')
    .get((req, res, next) => {
      res.status(200)
      .send({
        code: 1,
        message: 'good'
      })
    })
  }

  post() {
    this._app
    .route(Const.apiVersion + 'delivery')
    .post((req, res, next) => {
      let _body = req.body;
      console.log('deliveryapi', req.url)

      let body = JSON.stringify({
        service: _body.service,
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
      });
      console.log(body)

      request.post({
        url: 'https://api.flightmap.io/api/v1/vrp',
        "rejectUnauthorized": false,
        headers: {
          Authorization: '772ea600-78ad-11e6-a56b-0bff586a75e5',
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: body
        }, function(err, response) {
          // console.log(err);
          // console.log(response);
          res.status(200)
          .send({
            code: 1,
            message: response.body
          })
        })
    });

  }
}