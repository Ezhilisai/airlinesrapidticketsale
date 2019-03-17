import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ApiserviceService } from '../apiservice.service';
import { SessionserviceService } from '../sessionservice.service';
// import { MediaChange, MediaObserver, BREAKPOINT } from '@angular/flex-layout';

export interface Flight {
  name: string;
  iata_code: string;
}
export interface Tile {
  cols: number;
  rows: number;
}
@Component({
  selector: 'app-flightsearch',
  templateUrl: './flightsearch.component.html',
  styleUrls: ['./flightsearch.component.css']
})
export class FlightsearchComponent implements OnInit {

  firstTile: Tile = {cols: 9, rows: 1};
  secondTile: Tile = {cols: 9, rows: 1};
  thirdTile: Tile = {cols: 2, rows: 1};
  selectedDate: any;
  originFlightCtrl : FormControl = new FormControl();
  destinationFlightCtrl : FormControl = new FormControl();
  filterdOriginFlights: Observable<Flight[]>;
  filterdDestinationFlights: Observable<Flight[]>;


  constructor(private apiService : ApiserviceService, private sessionService : SessionserviceService) { }

  ngOnInit() {
    this.activate();
  }

  activate() {
    this.filterdOriginFlights = this.originFlightCtrl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterOrigin(val))
      );
    this.filterdDestinationFlights = this.destinationFlightCtrl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterDestination(val))
      );
      
    // For Temp
    this.getAirportCodes();
  }
  
  origin : Flight[];
  destination : Flight[];

  // For Temp
  getAirportCodes(){
    this.origin = this.mockorigin;
    this.destination = this.mockdestination;
    this.apiService.getAirportCodes().subscribe((res) => {
      if(res && res.body) {
        this.sessionService.airportCodes =  res.body;
        this.origin = res.body;
        this.destination = res.body;
        this.filterOrigin('');
        this.filterDestination('');
      }
    });
  }

  onSelect(event){
  console.log(event);
  this.selectedDate= event;
  }

  // origin : Flight[] = this.sessionService.airportCodes;
  // destination : Flight[] = this.sessionService.airportCodes;

  mockorigin: Flight[] = [
    {
      name: 'Chennai',
      iata_code: 'MAA'
    },
    {
      name: 'Los Angeles',
      iata_code: 'LAX'
    },
    {
      name: 'San Francisco',
      iata_code: 'SFO'
    },
    {
      name: 'Oakland',
      iata_code: 'OAK'
    }
  ];
  
  mockdestination: Flight[] = [
    {
      name: 'Bangalore',
      iata_code: 'BLR'
    },
    {
      name: 'Miami',
      iata_code: 'MIA'
    },
    {
      name: 'Orlando',
      iata_code: 'MCO'
    },
    {
      name: 'Quito',
      iata_code: 'QTY'
    }
  ];

  filterOrigin(val: string){
    return this.origin.filter(option => option.name ? option.name.toLowerCase().indexOf(val.toLowerCase()) > -1 : false);
  }
  filterDestination(val: string){
    return this.destination.filter(option => option.name ? option.name.toLowerCase().indexOf(val.toLowerCase()) > -1 : false);
  }

}