import { Component, OnInit } from '@angular/core';
import { CurrenciesInfo } from '../currencies-api.service';
import { SelectedInfoClass } from '../SelectedInfoClass';

@Component({
  selector: 'app-currency-converter-forms',
  templateUrl: './currency-converter-forms.component.html',
  styleUrls: ['./currency-converter-forms.component.css'],
  providers: [CurrenciesInfo],
})
export class CurrencyConverterFormsComponent implements OnInit {
  constructor(private currenciesInfo: CurrenciesInfo) {}
  currencies = this.currenciesInfo.getCurrenciesValue('long');

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
  ) {
    if (quantity) {
      return Number(
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
  ) {
    if (quantity) {
      return Number(
        (quantity * this.currencies[primaryCurrencyIndex].buy) /
          this.currencies[secondaryCurrencyIndex].buy
      ).toFixed(2);
    } else return;
  }
  convertedB = this.convertSecondInputs();

  handleChange(UpdatedValue: number, caseString: string): void{
    switch(caseString){
      case "quantityA":
        this.selectedInfo.quantityA = UpdatedValue;
    break;
  case "quantityB":
    this.selectedInfo.quantityB = UpdatedValue;
    break;
  
  case "currencyAIndex":
    this.selectedInfo.currencyAIndex = UpdatedValue;
    break;
    case "currencyBIndex":
      this.selectedInfo.currencyBIndex = UpdatedValue;
      break;

  default:
    
    break;
}
    }

  

  // changeInputA(UpdatedValue: number): void {
  //   this.selectedInfo.quantityA = UpdatedValue;
  // }
  // changeInputB(UpdatedValue: number): void {
  //   this.selectedInfo.quantityB = UpdatedValue;
  // }
  // changeIndexA(UpdatedValue: number): void {
  //   this.selectedInfo.currencyAIndex = UpdatedValue;
  // }
  // changeIndexB(UpdatedValue: number): void {
  //   this.selectedInfo.currencyBIndex = UpdatedValue;
  // }

  ngOnInit(): void {}
}
