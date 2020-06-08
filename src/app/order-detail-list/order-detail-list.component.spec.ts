import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailListComponent } from './order-detail-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OrderdetailService } from '../service/orderdetail.service';
import { Observable } from 'rxjs';
import { OrderDetail } from '../model/order-detail';
import { CoffeeService } from '../service/coffee.service';
import { Coffee } from '../model/coffee';
import { OrderService } from '../service/order.service';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { AlertService, AlertModule } from '../_alert';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('OrderDetailListComponent', () => {
  let component: OrderDetailListComponent;
  let fixture: ComponentFixture<OrderDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderDetailListComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        AlertModule,
        RouterTestingModule

      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('message should be succesfully created order', () => {
    var msg = '{"response":"success"}';
    expect(component.sendAlertMsg(msg)).toBe("succesfully placed the order");
  });
});
