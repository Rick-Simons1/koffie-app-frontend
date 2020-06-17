import { Injectable } from '@angular/core';
import { OrderDetail } from '../model/order-detail';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderdetailService {

  private Url: string;

  constructor(private http: HttpClient) {

  }

  public addOrderDetail(orderDetail: OrderDetail) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") }),
    }
    this.Url = 'http://localhost:8080/orderdetails';
    console.log(orderDetail)
    return this.http.post<OrderDetail>(this.Url, orderDetail, httpOptions)
  }

  public findAllOrderDetailsWithoutOrder(): Observable<OrderDetail[]>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") }),
    }
    this.Url = 'http://localhost:8080/orderdetails';
    return this.http.get<OrderDetail[]>(this.Url, httpOptions);
  }

  public getOrderDetailById(orderDetailId: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") }),
      params: { orderDetailId: orderDetailId }
    }
    this.Url = 'http://localhost:8080/orderdetail/id';
    return this.http.get<OrderDetail>(this.Url, httpOptions);
  }
}
