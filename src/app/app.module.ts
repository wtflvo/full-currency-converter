import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyConverterFormsComponent } from './components/currency-converter-forms/currency-converter-forms.component'; 
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component'; 

@NgModule({
  declarations: [
    AppComponent,

    CurrencyConverterFormsComponent,
    ExchangeRateComponent,
  ],
  imports: [FormsModule, BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
