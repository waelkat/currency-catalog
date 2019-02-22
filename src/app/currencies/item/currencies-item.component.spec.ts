import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesItemComponent } from './currencies-item.component';

describe('CurrenciesItemComponent', () => {
  let component: CurrenciesItemComponent;
  let fixture: ComponentFixture<CurrenciesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenciesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
