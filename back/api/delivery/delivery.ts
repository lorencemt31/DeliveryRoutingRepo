import * as Const from '../../config/const';
import {
  Jwt
} from '../../services/jwt';

export class DeliveryApi {
  constructor(private _app: any /*express.Application*/) {}

  private _jwt = new Jwt();

  post() {
    this._app
    .route(Const.apiVersion + 'post')
    .post((req, res, next) => {
      let _body = req.body;
      
      this._jwt.decode(req.headers.authorization)
      .then(response => {
        
      })
      .then(user => {
        
      })

    })
  }
}