import { Component, OnInit } from '@angular/core';
import { CurrenciesInfo } from 'src/app/services/currencies-api.service'; 

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css'],
  providers: [CurrenciesInfo],
})
export class ExchangeRateComponent implements OnInit {
  constructor(public currenciesInfo: CurrenciesInfo) {}
  currencies:Array<any> = this.currenciesInfo.getCurrenciesValue("short");
  ngOnInit(): void {}
}
