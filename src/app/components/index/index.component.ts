import {
  Component,
  OnInit
} from '@angular/core';
import {
  DeliveryApi
} from '../../shared/api/delivery';

interface marker {
  delivery_latitude: number,
  delivery_longitude: number,
  label?: string,
  order_id :number,
  delivery_address: string
}

interface trail {
  lat: number,
  lng: number,
}

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  constructor(
    private _deliveryApi : DeliveryApi
  ) {
    this._show.routes  = false;
    this._show.data    = false;
    this.getDeliveries(); 
  }

  private _show = <any>{};
  private _decoded = <any>{};  

  latA: number = 30.726936890558;
  lngA: number = 76.778821457672;

  trails: trail[] = [{
    lat: 307.1922,
    lng: 768.1073
  },{
    lat: 307.3173,
    lng: 767.9882
  }]   

  markers: marker[] = [{
    delivery_latitude: 30.648670261474,
    delivery_longitude: 76.809466440475,
    order_id : 110810,
    delivery_address: "Flat 10/1, Skynet Tower, Zirakpur, Punjab, India"
  }, {
    delivery_latitude: 30.663827186748,
    delivery_longitude: 76.8583046,
    order_id : 110767,
    delivery_address: "11, GH 50, Sector 20, Panchkula, Haryana 134116, India"
  }, {
    delivery_latitude: 30.725135205493,
    delivery_longitude: 76.754956500806,
    order_id : 110767,
    delivery_address: "3290, Second floor, Sector 35 D, Chandigarh, India"
  }, {
    delivery_latitude: 30.711872470975,
    delivery_longitude: 76.762024407935,
    order_id : 110762,
    delivery_address: "256, Sector 45 a, Chandigarh, India"
  }, {
    delivery_latitude: 30.73243011699,
    delivery_longitude: 76.739011330689,
    order_id : 110757,
    delivery_address: "1217B, 2nd floor, Sector 41B, Sector 41, Chandigarh, India, Sector 41, Chandigarh, India"
  }, {
    delivery_latitude: 30.707190711617,
    delivery_longitude: 76.850105361377,
    order_id : 110747,
    delivery_address: "136, Sector 7, Panchkula, Haryana, India"
  }, {
    delivery_latitude: 30.744933,
    delivery_longitude: 76.741402,
    order_id : 110743,
    delivery_address: "3428 First Floor, Sector 38-D,  Sector 38, Chandigarh, India"
  }, {
    delivery_latitude: 30.695649147281,
    delivery_longitude: 76.74342468381,
    order_id : 110734,
    delivery_address: "2508,  Telehos Society, Sector 50 C , Chandigarh, Phase 9, Chandigarh, 160047, India"
  }, {
    delivery_latitude: 30.708026204455,
    delivery_longitude: 76.860328338623,
    order_id : 110733,
    delivery_address: "House No. 207, Sector 6, Panchkula, Haryana, India"
  }, {
    delivery_latitude: 30.732282563081,
    delivery_longitude: 76.7389255,
    order_id : 110732,
    delivery_address: "house no 3211 first floor, sector41d Sector 41, Chandigarh,, Sector 41, Chandigarh, India"
  }, {
    delivery_latitude: 30.734327102234,
    delivery_longitude: 76.732653169312,
    order_id : 110730,
    delivery_address: "2654, Sector 40C, Chandigarh, India"
  }, {
    delivery_latitude: 30.728782761185,
    delivery_longitude: 76.849316277246,
    order_id : 110704,
    delivery_address: "506, MDC Sector 6 Road, Manimajra, Sukteri, India, M D C Sector 6 Road, Mansa Devi Complex, Manimajra, Sukteri, Haryana, India",
  }, {
    delivery_latitude: 30.72869511948,
    delivery_longitude: 76.717071661377,
    order_id : 110702,
    delivery_address: "61(FF), Opp. Khokha Market, phase-1., Sector 55, Sahibzada Ajit Singh Nagar, 160055",
  }, {
    delivery_latitude: 30.699274102296,
    delivery_longitude: 76.844140069311,
    order_id : 110701,
    delivery_address: "174, Sector 8 B Road, Sector 8, Panchkula, Haryana, India",
  }, {
    delivery_latitude: 30.695155273618,
    delivery_longitude: 76.738129107935,
    order_id : 110696,
    delivery_address: "693 mig independent, Back side PCA, Phase 9, Sahibzada Ajit Singh Nagar, India",
  }, {
    delivery_latitude: 30.719112765252,
    delivery_longitude: 76.831389177246,
    order_id : 110690,
    delivery_address: "5172/ 3 ,Modern housing complex, Manimajra Chandigarh , Manimajra Manimajra, Chandigarh,, Manimajra, Chandigarh, Haryana, India",
  }, {
    delivery_latitude: 30.6978446,
    delivery_longitude: 76.717864830689,
    order_id : 110686,
    delivery_address: "House No 1630 , Sector 70 Mohali Sector 70, Sahibzada Ajit Singh Nagar,, Sector 70, Sahibzada Ajit Singh Nagar, Punjab, India",
  }, {
    delivery_latitude: 30.739078684831,
    delivery_longitude: 76.7382,
    order_id : 110678,
    delivery_address: "1042 GF, 1042 GF, Sector 40B,  Sector 40B, Chandigarh, 160036",
  }, {
    delivery_latitude: 30.726936890558,
    delivery_longitude: 76.778821457672,
    order_id : 110676,
    delivery_address: "House No 1233, Ground Floor, Sector 21B Sector 21, Chandigarh, India",
  }, {
    delivery_latitude: 30.727524329084,
    delivery_longitude: 76.774441338623,
    order_id : 110671,
    delivery_address: "3278,  Himalaya Marg,  Sector 21 D, Sector 21, Chandigarh, 160022, India",
  }, {
    delivery_latitude: 30.729400589616,
    delivery_longitude: 76.786641738623,
    order_id : 110669,
    delivery_address: "House no 1223, Sector 18, Chandigarh, 160018",
  }, {
    delivery_latitude: 30.6880572,
    delivery_longitude: 76.723205853442,
    order_id : 110669,
    delivery_address: "Flat no 198 United Co operative society Sector 68, S A S Nagar, Sector 68, Sahibzada Ajit Singh Nagar, India",
  }, {
    delivery_latitude: 30.688014636559,
    delivery_longitude: 76.859133504331,
    order_id : 110666,
    delivery_address: "Ravi Shankar, 1st floor, House no-1179, Sector 4, Panchkula, India, Near park",
  }, {
    delivery_latitude: 30.757619120924,
    delivery_longitude: 76.769114397217,
    order_id : 110659,
    delivery_address: "W2 warden house, Panjab university, Sector 14, Chandigarh, 160014",
  }, {
    delivery_latitude: 30.710668968463,
    delivery_longitude: 76.7183,
    order_id : 110658,
    delivery_address: "1780, phase 3 B 2, Sahibzada Ajit Singh Nagar, 160059",
  }, {
    delivery_latitude: 30.717184,
    delivery_longitude: 76.767452746033,
    order_id : 110622,
    delivery_address: "244,  Sector 33-34 Jct,  Sector 34C, Sector 34, Chandigarh, 160022, India,  Furniture Market",
  }, {
    delivery_latitude: 30.721612870468,
    delivery_longitude: 76.727892707935,
    order_id : 110618,
    delivery_address: "50, 1st floor, Mohali Stadium Road, Sector 54, Sahibzada Ajit Singh Nagar, India",
  }, {
    delivery_latitude: 30.726341764892,
    delivery_longitude: 76.785085423279,
    order_id : 110519,
    delivery_address: "house no 693 top floor, 20A,  Sector 20, Chandigarh, 160020",
  }, {
    delivery_latitude: 30.735563974527,
    delivery_longitude: 76.769615876721,
    order_id : 110426,
    delivery_address: "3417, Sector 22 Market Road, 22A, Chandigarh, India",
  }, {
    delivery_latitude: 30.73512641259,
    delivery_longitude: 76.776623253967,
    order_id : 109977,
    delivery_address: "1232, Himalaya Marg, Sector 22, Chandigarh, India",
  }]

  

  showData() {
    this._show.data   = true;
    this._show.routes = false;
  }

  generateRoutes() {
    this._show.routes = true;
  }

  ngOnInit() {
    
  }

  getDeliveries() {
    this._deliveryApi.post().subscribe(response => {
      console.log(response);
      // this._decoded = response.decodedPolylines;
      let arry = {};
      for (let i = 0; i<response.decodedPolylines.length; i++) {
        arry['lat'] = response.decodedPolylines[i].lat
        arry['lng'] = response.decodedPolylines[i].lng
        
        this._decoded = arry
      }

      console.log(arry)
    })
  }
}
