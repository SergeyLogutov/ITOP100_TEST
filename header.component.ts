import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currencyapi.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  eurRate: number = 0;
  usdRate: number = 0;
  uahRate: number = 0;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getCurrentEurRate().subscribe(data => {
      this.eurRate = parseFloat((1/data.rates.EUR).toFixed(4));
    });

    this.currencyService.getCurrentUsdRate().subscribe(data => {
      this.usdRate = parseFloat((1/data.rates.USD).toFixed(4));
    });

    this.currencyService.getCurrentUahRate().subscribe(data => {
      this.uahRate = parseFloat((1/data.rates.UAH).toFixed(4));
    });
  }
}
