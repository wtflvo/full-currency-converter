import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { CurrencyConverterFormsComponent } from './currency-converter-forms/currency-converter-forms.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';

@NgModule({
  declarations: [
    AppComponent,

    CurrencyConverterFormsComponent,
    ExchangeRateComponent,
  ],
  imports: [FormsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
