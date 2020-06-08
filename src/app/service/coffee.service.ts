import { Injectable } from '@angular/core';
import { Coffee } from 'src/app/model/coffee';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private coffeeUrl: string;

  constructor(private http: HttpClient) {
    
  }

  public findAllCoffees(): Observable<Coffee[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") }),
    }
    this.coffeeUrl = 'http://localhost:8080/Coffees';
    return this.http.get<Coffee[]>(this.coffeeUrl, httpOptions);
  }

  public addCoffee(coffee: Coffee) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") }),
    }
    this.coffeeUrl = 'http://localhost:8080/Coffee/create';
    return this.http.post<Coffee>(this.coffeeUrl, coffee, httpOptions)
  }

  public editCoffee(coffee: Coffee) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") }),
    }
    this.coffeeUrl = 'http://localhost:8080/coffee/update';
    return this.http.post<Coffee>(this.coffeeUrl, coffee, httpOptions);
  }

  public deleteCoffee(coffee: Coffee) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") }),
    }
    this.coffeeUrl = 'http://localhost:8080/coffee/delete';
    return this.http.post<Coffee>(this.coffeeUrl, coffee, httpOptions);
  }

  public getCoffeeById(coffeeId: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") }),
      params: { coffeeId: coffeeId }
    }
    let parameter = { coffeeId: coffeeId }
    this.coffeeUrl = 'http://localhost:8080/coffee/id';
    return this.http.get<Coffee>(this.coffeeUrl, httpOptions);
  }

}
