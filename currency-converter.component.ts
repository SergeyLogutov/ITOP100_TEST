import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {

  currencies: string[] = [];
  fromCurrency: string = 'USD';
  toCurrency: string = 'USD, EUR, UAH, GBP, CAD, AUD, JPY';
  fromValue: number = 1;
  toValue: number = 0;

  private apiKey: string = 'AQ4I5HdEjOVsJAVudcTN4xmaMe1TUqFF';
  private apiUrl: string = `https://api.apilayer.com/fixer/latest?apikey=${this.apiKey}&base=${this.fromCurrency}&symbols=${this.toCurrency}`;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.apiUrl).subscribe((data: any) => {
      this.currencies = Object.keys(data.rates);
      this.convertFrom();
    });
  }

  convertFrom() {
    this.http.get(`https://api.apilayer.com/fixer/latest?apikey=${this.apiKey}&base=${this.fromCurrency}&symbols=${this.toCurrency}`).subscribe((data: any) => {
      this.toValue = this.fromValue * data.rates[this.toCurrency];
    });
  }

  convertTo() {
    this.http.get(`https://api.apilayer.com/fixer/latest?apikey=${this.apiKey}&base=${this.toCurrency}&symbols=${this.fromCurrency}`).subscribe((data: any) => {
      this.fromValue = this.toValue * data.rates[this.fromCurrency];
    });
  }

}
