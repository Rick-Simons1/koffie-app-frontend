import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeOrderPageComponent, CoffeeSelectComponent } from './coffee-order-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Coffee } from '../model/coffee';
import { OrderDetail } from '../model/order-detail';
import { CoffeeService } from '../service/coffee.service';
import { OrderdetailService } from '../service/orderdetail.service';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { AlertService, AlertModule } from '../_alert';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CoffeeOrderPageComponent', () => {
  let component: CoffeeOrderPageComponent;
  let fixture: ComponentFixture<CoffeeOrderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeeOrderPageComponent],
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
        CoffeeSelectComponent
      ]
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


  it('is dialog open should be set to true', () => {
    component.isDialogOpen = true;
    expect(component.isDialogOpen).toBe(true);
  })
});
