import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Coffee } from '../model/coffee';
import { OrderDetail } from '../model/order-detail';
import { CoffeeService } from '../service/coffee.service';
import { OrderdetailService } from '../service/orderdetail.service';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { AlertService } from '../_alert';


@Injectable({
  providedIn: 'root'
})
export class selectedCoffeeData {
  public coffee: Coffee;
}

@Component({
  selector: 'app-coffee-order-page',
  templateUrl: './coffee-order-page.component.html',
  styleUrls: ['./coffee-order-page.component.css']
})
export class CoffeeOrderPageComponent implements OnInit {

  isDialogOpen: boolean = false;

  constructor(public dialog: MatDialog, public selectedCoffeeData: selectedCoffeeData) { }

  ngOnInit() {
  }

  openDialog(): void {
    this.isDialogOpen = true;
    const dialogRef = this.dialog.open(CoffeeSelectComponent, {
      width: '750px',
      position: {
        left: '20%'
      }
      
      
      
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isDialogOpen = false;
      console.log('The dialog was closed');
    });
  }

  

  

}


@Component({
  selector: 'app-coffee-select',
  templateUrl: './coffee-select/coffee-select.component.html',
  styleUrls: ['./coffee-select/coffee-select.component.css']
})
export class CoffeeSelectComponent implements OnInit {

  selectedCoffee: Coffee;
  orderdetail: OrderDetail;
  coffees: Coffee[];
  user: User;

  constructor(public dialogRef: MatDialogRef<CoffeeOrderPageComponent>,
    @Inject(MAT_DIALOG_DATA) public coffeeData: selectedCoffeeData, private coffeeService: CoffeeService, public orderDetailService: OrderdetailService, private userdata: UserService, private alertService: AlertService) { }

  ngOnInit() {
    this.coffeeService.findAllCoffees().subscribe(data => {
      this.coffees = data;
    })
    this.orderdetail = new OrderDetail;
    this.userdata.getLoggedInUser().subscribe(result => this.user = result)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  makeCoffeeOrderDetail(amountOfSugar: number, amountOfMilk: number, coffee: Coffee): void {
    this.orderdetail.amountOfMilk = amountOfMilk;
    this.orderdetail.amountOfSugar = amountOfSugar;
    this.orderdetail.coffeeId = coffee.id;
    this.orderdetail.coffeeName = coffee.coffeeName;
    this.orderdetail.coffeeCode = this.makeCoffeeCode(amountOfSugar, amountOfMilk, coffee.id);
    this.orderdetail.placedByUserId = this.user.id;
    this.orderdetail.order = null;
    this.orderDetailService.addOrderDetail(this.orderdetail).subscribe(result => { this.sendAlertMsg(JSON.stringify(result)) });
    this.onNoClick();
  }

  getSelectedCoffee(amountOfSugar: number, amountOfMilk: number): any {
    const radioBtnList = document.querySelectorAll('input[name="coffeeSelect"]');
    const radioBtn = radioBtnList as unknown as HTMLInputElement;
    for (var i = 0; i < radioBtnList.length; i++) {
      if (radioBtn[i].checked === true) {
        this.coffeeService.getCoffeeById(radioBtnList[i].id).subscribe(data => { this.makeCoffeeOrderDetail(amountOfSugar, amountOfMilk, data) });
      }
    }
  }

  sendAlertMsg(result: string) {
    var msg = "";
    if (result === '{"response":"success"}') {
      msg = "succesfully deleted the coffee";
      this.alertService.success(msg)
    }
  }

  makeCoffeeCode(amountOfSugar: number, amountOfMilk: number, coffeeId: number): string {
    var coffeeCode = coffeeId + 'S' + amountOfSugar + 'M' + amountOfMilk;
    return coffeeCode;
  }

}
