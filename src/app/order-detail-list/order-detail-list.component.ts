import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OrderdetailService } from '../service/orderdetail.service';
import { Observable } from 'rxjs';
import { OrderDetail } from '../model/order-detail';
import { CoffeeService } from '../service/coffee.service';
import { Coffee } from '../model/coffee';
import { OrderService } from '../service/order.service';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { AlertService } from '../_alert';

@Component({
  selector: 'app-order-detail-list',
  templateUrl: './order-detail-list.component.html',
  styleUrls: ['./order-detail-list.component.css']
})
export class OrderDetailListComponent implements OnInit {

  user: User;
  orderdetails: OrderDetail[];
  selectedOrderdetails: OrderDetail[];

  constructor(private userdata: UserService, private orderdetaildata: OrderdetailService, private router: Router, private coffeeData: CoffeeService, private orderData: OrderService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.orderdetaildata.findAllOrderDetailsWithoutOrder().subscribe(data => {
      this.orderdetails = data;
    })
    this.selectedOrderdetails = [];
    this.userdata.getLoggedInUser().subscribe(result => this.user = result);
  }

  getSelectedOrderDetail() {
    
    const radioBtnList = document.querySelectorAll('input[name="orderDetailSelect"]');
    const radioBtn = radioBtnList as unknown as HTMLInputElement;
    for (var i = 0; i < radioBtnList.length; i++) {
      if (radioBtn[i].checked === true) {
        this.orderdetaildata.getOrderDetailById(radioBtnList[i].id).subscribe(data => {
          this.selectedOrderdetails.push(data); var index = this.orderdetails.findIndex(item => item.orderDetailId == data.orderDetailId); this.orderdetails.splice(index, 1)
      })
      }
    }

  }

  makeOrder() {
    var id = this.user.id
    this.orderData.placeOrder(id, this.selectedOrderdetails).subscribe(result => { this.sendAlertMsg(JSON.stringify(result)) })
    this.selectedOrderdetails = [];
  }

  sendAlertMsg(result: string) {
    var msg = "";
    if (result === '{"response":"success"}') {
      msg = "succesfully placed the order";
      this.alertService.success(msg)
    }
  }

  removeSelectedOrderDetail() {
    const radioBtnList = document.querySelectorAll('input[name="orderDetailRemoveSelect"]');
    const radioBtn = radioBtnList as unknown as HTMLInputElement;
    for (var i = 0; i < radioBtnList.length; i++) {
      if (radioBtn[i].checked === true) {
        this.orderdetaildata.getOrderDetailById(radioBtnList[i].id).subscribe(data => { this.orderdetails.push(data); var index = this.selectedOrderdetails.findIndex(item => item.orderDetailId == data.orderDetailId); this.selectedOrderdetails.splice(index, 1) })
      }
    }


  }

}
