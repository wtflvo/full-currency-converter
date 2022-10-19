import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from '../interfaces/Currency';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesInfo {
  constructor(private http: HttpClient) {}

  public getCurrenciesValue(str: string): Array<any> {
    const currenciesValue: Array<any> = [];
    this.http
      .get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .subscribe((response) => {
        for (let obj of response as Currency[]) {
          obj.buy = Number(obj.buy).toFixed(2);
          obj.sale = Number(obj.sale).toFixed(2);
          currenciesValue.push(obj);
        }
        if (str != 'short') {
          currenciesValue.push({
            ccy: 'UAH',
            base_ccy: 'UAH',
            buy: 1,
            sale: 1,
          });
          currenciesValue[2].buy *= currenciesValue[0].buy;
          currenciesValue[2].sale *= currenciesValue[0].sale;
        }
        console.log(response, 'response');
      });

    return currenciesValue;
  }
}
