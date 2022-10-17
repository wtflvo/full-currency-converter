import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesInfo {
  public getCurrenciesValue(str: string): Array<any> {
    const currenciesValue: Array<any> = [];
    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then((response) => response.json())
      .then((response) => {
        for (let obj of response) {
          obj.buy = Number(obj.buy).toFixed(2);
          obj.sale = Number(obj.sale).toFixed(2);
          currenciesValue.push(obj);
        }
        if (str !== 'short') {
          currenciesValue.push({
            ccy: 'UAH',
            base_ccy: 'UAH',
            buy: 1,
            sale: 1,
          });
          currenciesValue[2].buy *= currenciesValue[0].buy;
          currenciesValue[2].sale *= currenciesValue[0].sale;
        }
        console.log(response);
      })
      .catch((err) => console.error(err));
    return currenciesValue;
  }
  constructor() {}
}
