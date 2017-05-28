import {
  Component,
  OnInit
} from '@angular/core';
import {
  DeliveryApi
} from '../../shared/api/delivery';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  constructor(
    private _deliveryApi : DeliveryApi
  ) {}

  ngOnInit() {
    this._deliveryApi.post().subscribe(response => {
      console.log(response);
    })
  }
}
