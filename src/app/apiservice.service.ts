import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Airportcode } from './airportcode';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  baseAPI: string = 'https://20190317t192016-dot-shares-233708.appspot.com';

  constructor(private httpClient: HttpClient) { }

  public firstPage  : string = "";
  public prevPage   : string = "";
  public nextPage   : string = "";
  public lastPage   : string = "";

  public getAirportCodes(url?: string) {

    url = url || `${this.baseAPI}/countrycodes`;
    return this.httpClient.get<Airportcode[]>(url,{ observe: 'response' });

  }
  
}
