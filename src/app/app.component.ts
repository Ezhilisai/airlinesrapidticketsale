import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import { SessionserviceService } from './sessionservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bookaflight';

  constructor(private apiService : ApiserviceService, private sessionService : SessionserviceService) {}

  ngOnInit(){
    this.activate();
  }

  activate(){
    // this.getAirportCodes();
  }

  getAirportCodes(){
    this.apiService.getAirportCodes().subscribe((res) => {
      this.sessionService.airportCodes =  res.body;
    });
  }
}
