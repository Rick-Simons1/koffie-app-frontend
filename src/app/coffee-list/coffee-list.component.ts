import { Component, OnInit, Injectable } from '@angular/core';
import { Coffee } from '../model/coffee';
import { CoffeeService } from '../service/coffee.service';
import { Router } from '@angular/router';
import { AlertService } from '../_alert';

@Injectable({
  providedIn: 'root'
})
export class selectedCoffeeService {
  public coffee: Coffee;
}

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffees: Coffee[];

  constructor(private coffeeService: CoffeeService, private router: Router, private coffeeData: selectedCoffeeService, private alertService: AlertService) {

  }

  ngOnInit() {
    this.coffeeService.findAllCoffees().subscribe(data => {
      this.coffees = data;
    })
  }

  public setSelectedCoffee(coffee: Coffee) {
    
    this.coffeeData.coffee = coffee;
    this.router.navigate(['/editCoffee']);
  }

  deleteConfirmation(coffee: Coffee) {
    if (confirm("are you sure you want to delete " + coffee.coffeeName)) {
      this.coffeeService.deleteCoffee(coffee).subscribe(result => { var index = this.coffees.findIndex(item => item.id == coffee.id); this.coffees.splice(index, 1); this.sendAlertMsg(JSON.stringify(result)); });
    }
  }

  sendAlertMsg(result: string) {
    var msg = "";
    if (result === '{"response":"success"}') {
      msg = "succesfully deleted the coffee";
      this.alertService.success(msg)
    }
    

  }

  

}
