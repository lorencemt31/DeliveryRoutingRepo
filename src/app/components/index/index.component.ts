import {
  Component,
  OnInit
} from '@angular/core';

interface marker {
  lat: number,
  lng: number,
  label?: string,
  order_id :number,
  address: string
}

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  constructor() { }

  latA: number = 30.648670261474;
  lngA: number = 76.809466440475;

  markers: marker[] = [{
    lat: 30.648670261474,
    lng: 76.809466440475,
    label: 'A',
    order_id : 110810,
    address: "Flat 10/1, Skynet Tower, Zirakpur, Punjab, India"
  }, {
    lat: 30.663827186748,
    lng: 76.8583046,
    label: 'B',
    order_id : 110767,
    address: "3290, Second floor, Sector 35 D, Chandigarh, India"
  }]

  ngOnInit() {
  }
}
