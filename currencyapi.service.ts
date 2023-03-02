import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiURL = 'https://api.apilayer.com/fixer/latest';
  private apiKey = 'AQ4I5HdEjOVsJAVudcTN4xmaMe1TUqFF'
  constructor(private http: HttpClient) { }

  getExchangeRate(base: string, symbols: string): Observable<any> {
    const url = `${this.apiURL}?base=${base}&symbols=${symbols}?apikey=${this.apiKey}`;
    return this.http.get(url);
  }

  getCurrentUsdRate() {
    return this.http.get<any>(this.apiURL + '&base=UAH&symbols=USD?apikey=' + this.apiKey);
    }

    getCurrentEurRate() {
    return this.http.get<any>(this.apiURL + '&base=UAH&symbols=EUR?apikey='+ this.apiKey);
    }

    getCurrentUahRate(): Observable<any> {
      return this.http.get<any>(this.apiURL + '&base=UAH&symbols=UAH?apikey='+ this.apiKey);
    }
    }


