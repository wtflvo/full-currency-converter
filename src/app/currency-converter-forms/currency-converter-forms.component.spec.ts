import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyConverterFormsComponent } from './currency-converter-forms.component';

describe('CurrencyConverterFormsComponent', () => {
  let component: CurrencyConverterFormsComponent;
  let fixture: ComponentFixture<CurrencyConverterFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyConverterFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyConverterFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
