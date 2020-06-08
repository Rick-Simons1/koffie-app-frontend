import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeOrderPageComponent } from './coffee-order-page.component';

describe('CoffeeOrderPageComponent', () => {
  let component: CoffeeOrderPageComponent;
  let fixture: ComponentFixture<CoffeeOrderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeOrderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
