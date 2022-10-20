import { Component, OnInit } from '@angular/core';

import { SelectedInfoClass } from 'src/app/interfaces/SelectedInfoClass';
import { CurrenciesInfo } from 'src/app/services/currencies-api.service';

@Component({
  selector: 'app-currency-converter-forms',
  templateUrl: './currency-converter-forms.component.html',
  styleUrls: ['./currency-converter-forms.component.css'],
  providers: [CurrenciesInfo],
})
export class CurrencyConverterFormsComponent implements OnInit {
  constructor(private currenciesInfo: CurrenciesInfo) {}

  currencies: Array<any> = this.currenciesInfo.currenciesValue;

  selectedInfo: SelectedInfoClass = {
    currencyAIndex: 3,
    currencyBIndex: 0,
    quantityA: 0,
    quantityB: 0,
  };

  public convertCurrency(order: number): number {
    if (order === 1) {
      return +Number(
        (this.selectedInfo.quantityA *
          this.currencies[this.selectedInfo.currencyAIndex].buy) /
          this.currencies[this.selectedInfo.currencyBIndex].buy
      ).toFixed(2);
    }
    return +Number(
      (this.selectedInfo.quantityB *
        this.currencies[this.selectedInfo.currencyBIndex].buy) /
        this.currencies[this.selectedInfo.currencyAIndex].buy
    ).toFixed(2);
  }

  handleChange(UpdatedValue: number, caseString: string): void {
    switch (caseString) {
      case 'quantityA':
        this.selectedInfo.quantityA = UpdatedValue;
        break;
      case 'quantityB':
        this.selectedInfo.quantityB = UpdatedValue;
        break;

      case 'currencyAIndex':
        this.selectedInfo.currencyAIndex = UpdatedValue;
        break;
      case 'currencyBIndex':
        this.selectedInfo.currencyBIndex = UpdatedValue;
        break;

      default:
        break;
    }
  }

  ngOnInit(): void {
    this.currenciesInfo.getCurrenciesValue('long');
  }
}
