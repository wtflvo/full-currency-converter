import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from '../interfaces/Currency';
import { __await } from 'tslib';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesInfo {
  constructor(private http: HttpClient) {}

  async getAPI(): Promise<any> {
    const apiData: Observable<Object> = this.http.get(
      'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
    );
    const finalData: Object = await lastValueFrom(apiData);

    return finalData;
  }

  currenciesValue: Array<any> = [];
  async getCurrenciesValue(str: string): Promise<any> {
    const apiData: Object = await this.getAPI();
    for (let obj of apiData as Currency[]) {
      obj.buy = Number(obj.buy).toFixed(2);
      obj.sale = Number(obj.sale).toFixed(2);
      this.currenciesValue.push(obj);
    }

    if (str != 'short') {
      this.currenciesValue.push({
        ccy: 'UAH',
        base_ccy: 'UAH',
        buy: 1,
        sale: 1,
      });

      this.currenciesValue[2].buy *= this.currenciesValue[0].buy;

      this.currenciesValue[2].sale *= this.currenciesValue[0].sale;
    }
  }
}
