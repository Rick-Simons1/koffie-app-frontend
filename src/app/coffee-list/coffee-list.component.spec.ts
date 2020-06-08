import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListComponent } from './coffee-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Coffee } from '../model/coffee';
import { CoffeeService } from '../service/coffee.service';
import { Router } from '@angular/router';
import { AlertService, AlertModule } from '../_alert';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { selectedCoffeeData } from '../coffee-order-page/coffee-order-page.component';


describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let coffeeData: selectedCoffeeData;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeeListComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        AlertModule,
        
      ],
      providers: [
        selectedCoffeeData,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send succes msg', () => {
    var msg = '{"response":"success"}'
    expect(component.sendAlertMsg(msg)).toBe("succesfully deleted the coffee");
  });

  it('should set coffee', () => {
    var coffee = new Coffee;
    
    coffee.id = 1;
    expect(component.setSelectedCoffee(coffee)).toBe(coffee)
    
  });
});
