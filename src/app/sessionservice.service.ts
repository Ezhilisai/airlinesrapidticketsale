import { Injectable } from '@angular/core';
import { Airportcode } from './airportcode';

@Injectable({
  providedIn: 'root'
})
export class SessionserviceService {
  airportCodes: Airportcode[] = [];
  currencyFormat: string = '';
  constructor() { }
}
