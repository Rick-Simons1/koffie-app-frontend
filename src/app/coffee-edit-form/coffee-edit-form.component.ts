import { Component, OnInit, Input } from '@angular/core';
import { Coffee } from '../model/coffee';
import { ActivatedRoute, Router } from '@angular/router';
import { CoffeeService } from '../service/coffee.service';
import { selectedCoffeeService } from '../coffee-list/coffee-list.component';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { AlertService } from '../_alert';

@Component({
  selector: 'app-coffee-edit-form',
  templateUrl: './coffee-edit-form.component.html',
  styleUrls: ['./coffee-edit-form.component.css']
})
export class CoffeeEditFormComponent implements OnInit {

  coffee: any = {};
  

  constructor(private route: ActivatedRoute, private router: Router, private coffeeService: CoffeeService, private coffeeData: selectedCoffeeService, private alertService: AlertService) {
    this.coffee.coffeeName = "";
    this.coffee = coffeeData.coffee;
  }

  onSubmit() {
    this.coffeeService.editCoffee(this.coffee).subscribe(result => this.sendAlertMsg(JSON.stringify(result))) //this.response = JSON.stringify(result))
    
    
  }

  sendAlertMsg(result: string) {
    var msg = "";
    if (result === '{"response":"succes"}') {
      msg = "succesfully changed the coffee";
      this.alertService.success(msg)
      return msg;
    }
    else {
      msg = "name already exists";
      this.alertService.error(msg)
      return msg;
    }
    
  }

  gotoCoffeeList() {
    this.router.navigate(['/coffees']);
  }

  ngOnInit() {
  }

}
