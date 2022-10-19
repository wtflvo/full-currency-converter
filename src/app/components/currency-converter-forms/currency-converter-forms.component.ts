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
  currencies: Array<any> = this.currenciesInfo.getCurrenciesValue('long');

  selectedInfo: SelectedInfoClass = {
    currencyAIndex: 3,
    currencyBIndex: 0,
    quantityA: 0,
    quantityB: 0,
  };

  public convertFirstInputs(
    quantity: number = this.selectedInfo.quantityA,
    primaryCurrencyIndex: number = this.selectedInfo.currencyAIndex,
    secondaryCurrencyIndex: number = this.selectedInfo.currencyBIndex
  ): number | undefined {
    if (quantity) {
      return +Number(
        (quantity * this.currencies[primaryCurrencyIndex].buy) /
          this.currencies[secondaryCurrencyIndex].buy
      ).toFixed(2);
    } else return;
  }
  convertedA = this.convertFirstInputs();

  public convertSecondInputs(
    quantity: number = this.selectedInfo.quantityB,
    primaryCurrencyIndex: number = this.selectedInfo.currencyBIndex,
    secondaryCurrencyIndex: number = this.selectedInfo.currencyAIndex
  ): number | void {
    if (quantity) {
      return +Number(
        (quantity * this.currencies[primaryCurrencyIndex].buy) /
          this.currencies[secondaryCurrencyIndex].buy
      ).toFixed(2);
    } 
  }
  convertedB = this.convertSecondInputs();

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

  ngOnInit(): void {}
}
