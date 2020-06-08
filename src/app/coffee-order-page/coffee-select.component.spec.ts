import { CoffeeSelectComponent, CoffeeOrderPageComponent } from "./coffee-order-page.component";
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from '../_alert';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Coffee } from '../model/coffee';
import { OrderDetail } from '../model/order-detail';

describe('CoffeeSelectComponent', () => {
  let component: CoffeeSelectComponent;
  let fixture: ComponentFixture<CoffeeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeeSelectComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        AlertModule,
        RouterTestingModule,
        MatDialogModule,
        BrowserAnimationsModule
      ],
      providers: [
        
      ]
     
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create orderdetail', () => {
    var coffee = new Coffee;
    coffee.id = 1;
    coffee.coffeeName = "koffie";
    coffee.coffeePrice = 1;
    coffee.coffeeDescription = "";

    var orderdetail = new OrderDetail;
    orderdetail.amountOfMilk = 1;
    orderdetail.amountOfSugar = 1;
    orderdetail.coffeeCode = '1S1M1';
    orderdetail.coffeeId = 1;
    orderdetail.coffeeName = 'koffie';
    orderdetail.order = null;
    orderdetail.placedByUserId = undefined;

    component.makeCoffeeOrderDetail(1, 1, coffee)
    expect(component.orderdetail).toEqual(orderdetail);
  });

  it('message should be succesfully added the order', () => {
    var msg = '{"response":"success"}';
    expect(component.sendAlertMsg(msg)).toBe("succesfully added the order");
  });

  it('coffee code should be 10S5M3', () => {
    expect(component.makeCoffeeCode(5, 3, 10));
  })
});
