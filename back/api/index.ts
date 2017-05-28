import {
  DeliveryApi
} from './delivery/delivery';

export class Api {
  constructor(private _app: any /*express.Application*/) {
    this._deliveryApi = new DeliveryApi(this._app);
  }

  private _deliveryApi : DeliveryApi;  

  deliveryApi() {
    this._deliveryApi.post();

    return this;
  }
}
