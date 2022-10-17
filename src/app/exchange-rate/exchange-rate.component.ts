import { Component, OnInit } from '@angular/core';
import { CurrenciesInfo } from '../currencies-api.service';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css'],
  providers: [CurrenciesInfo],
})
export class ExchangeRateComponent implements OnInit {
  constructor(public currenciesInfo: CurrenciesInfo) {}
  currencies = this.currenciesInfo.getCurrenciesValue("short");
  currenciesShort = new Array(
    this.currencies[0],
    this.currencies[1],
    this.currencies[2]
  );
  ngOnInit(): void {}
}
