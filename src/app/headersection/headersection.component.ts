import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { SessionserviceService } from '../sessionservice.service';

@Component({
  selector: 'app-headersection',
  templateUrl: './headersection.component.html',
  styleUrls: ['./headersection.component.css']
})
export class HeadersectionComponent implements OnInit {

  selectedCurreny: string;

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private sessionService:SessionserviceService) { }

  ngOnInit() {
    this.setCurrency();
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  public setCurrency = (val?: string) => {
    this.selectedCurreny =  this.sessionService.currencyFormat = val || 'USD';
  }

}
