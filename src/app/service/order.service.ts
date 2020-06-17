import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
import { OrderDetail } from '../model/order-detail';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUrl: string;


  constructor(private http: HttpClient) { }

  public findAllOrders(): Observable<Order[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") }),
    }
    this.orderUrl = 'http://localhost:8080/orders'
    return this.http.get<Order[]>(this.orderUrl, httpOptions);
  }

  public placeOrder(placedByUserId: string, orderDetails: OrderDetail[]) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") }),
      params: { userId: placedByUserId }
    }
    this.orderUrl = 'http://localhost:8080/orders';
    return this.http.post(this.orderUrl, orderDetails, httpOptions)
  }


}
