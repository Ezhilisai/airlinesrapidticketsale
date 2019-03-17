import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SessionserviceService } from '../sessionservice.service';

export interface FlightDetailsWithFarePrice {
  fCode: string;
  fNumber: string;
  fClass : string;
  availableSeatCount : number;
  oFare : number;
  rFare : number;
  priceUpdate : boolean;
}
@Component({
  selector: 'app-stepperlayout',
  templateUrl: './stepperlayout.component.html',
  styleUrls: ['./stepperlayout.component.css']
})
export class StepperlayoutComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  sessionServiceObj:SessionserviceService = this.sessionService;

  airlinesProgramCtrl : FormControl = new FormControl();
  emailValidation = new FormControl('', [Validators.required, Validators.email]);

  constructor(private _formBuilder: FormBuilder, public sessionService:SessionserviceService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({});
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: []
    });

    let flashUpdateCall = setInterval(() => {
      console.log('Flash Change');
      this.flightdetails.forEach(fd => { fd.priceUpdate = false; });
      let newVal = Math.floor(Math.random() * 10);
      let randomprice = Math.floor(Math.random() * 1000);
      this.flightdetails[newVal].rFare += randomprice;
      this.flightdetails[newVal].priceUpdate = true;
    }, 5000);
    setTimeout(()=> clearInterval(flashUpdateCall), 25000);
  }

  showHeader: boolean = true;

  flightdetailsAllColumns: any[] = [
    {
      code: 'fCode',
      name: 'Code'
    },
    {
      code: 'fNumber',
      name: 'Flight'
    },
    {
      code: 'fClass',
      name: 'Class'
    },
    {
      code: 'availableSeatCount',
      name: 'seats'
    },
    {
      code: 'oFare',
      name: 'Price'
    },
    {
      code: 'rFare',
      name: 'Rapid price'
    },
    {
      code: 'book',
      name: 'Book'
    },
    {
      code: 'priceUpdate',
      name: 'priceUpdate'
    }
  ];
  flightdetailsShowColumns: string[] = ['fCode', 'fNumber', 'fClass', 'availableSeatCount', 'oFare', 'rFare', 'book'];
  flightdetails : FlightDetailsWithFarePrice[] = [{
    fCode: 'CM',
    fNumber: '360',
    fClass : 'Y',
    availableSeatCount : 9,
    oFare : 8430,
    rFare : 4999,
    priceUpdate : false
  }, {
    fCode: 'AI',
    fNumber: '191',
    fClass : 'H',
    availableSeatCount : 4,
    oFare : 3011,
    rFare : 1567,
    priceUpdate : false
  }, {
    fCode: 'UA',
    fNumber: '333',
    fClass : 'C',
    availableSeatCount : 15,
    oFare : 12309,
    rFare : 8977,
    priceUpdate : false
  }, {
    fCode: 'YA',
    fNumber: '754',
    fClass : 'W',
    availableSeatCount : 2,
    oFare : 25999,
    rFare : 17999,
    priceUpdate : false
  },
  {
    fCode: 'CM',
    fNumber: '360',
    fClass : 'Y',
    availableSeatCount : 9,
    oFare : 8430,
    rFare : 4999,
    priceUpdate : false
  }, {
    fCode: 'AI',
    fNumber: '191',
    fClass : 'H',
    availableSeatCount : 4,
    oFare : 3011,
    rFare : 1567,
    priceUpdate : false
  }, {
    fCode: 'UA',
    fNumber: '333',
    fClass : 'C',
    availableSeatCount : 15,
    oFare : 12309,
    rFare : 8977,
    priceUpdate : false
  }, {
    fCode: 'YA',
    fNumber: '754',
    fClass : 'W',
    availableSeatCount : 2,
    oFare : 25999,
    rFare : 17999,
    priceUpdate : false
  }, {
    fCode: 'UA',
    fNumber: '333',
    fClass : 'C',
    availableSeatCount : 15,
    oFare : 12309,
    rFare : 8977,
    priceUpdate : false
  }, {
    fCode: 'YA',
    fNumber: '754',
    fClass : 'W',
    availableSeatCount : 2,
    oFare : 25999,
    rFare : 17999,
    priceUpdate : false
  },
  {
    fCode: 'CM',
    fNumber: '360',
    fClass : 'Y',
    availableSeatCount : 9,
    oFare : 8430,
    rFare : 4999,
    priceUpdate : false
  }, {
    fCode: 'AI',
    fNumber: '191',
    fClass : 'H',
    availableSeatCount : 4,
    oFare : 3011,
    rFare : 1567,
    priceUpdate : false
  }];

}
