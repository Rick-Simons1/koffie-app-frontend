import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoffeeService } from '../service/coffee.service';
import { Coffee } from '../model/coffee';
import { AlertService } from '../_alert';


@Component({
  selector: 'app-coffee-form',
  templateUrl: './coffee-form.component.html',
  styleUrls: ['./coffee-form.component.css']
})
export class CoffeeFormComponent implements OnInit {

  coffee: Coffee;

  constructor(private route: ActivatedRoute, private router: Router, private coffeeService: CoffeeService, private alertService: AlertService) {
    this.coffee = new Coffee();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.coffeeService.addCoffee(this.coffee).subscribe(result => this.sendAlertMsg(JSON.stringify(result)))
  }

  sendAlertMsg(result: string) {
    var msg = "";
    if (result === '{"response":"succes"}') {
      msg = "succesfully added the coffee";
      this.alertService.success(msg)
    }
    else {
      msg = "coffee name already exists";
      this.alertService.error(msg)
    }

  }

  gotoCoffeeList() {
    this.router.navigate(['/coffees']);
  }

}
