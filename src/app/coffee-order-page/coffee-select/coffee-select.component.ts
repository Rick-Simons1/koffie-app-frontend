import { Component, OnInit } from '@angular/core';
import { Coffee } from '../../model/coffee';

@Component({
  selector: 'app-coffee-select',
  templateUrl: './coffee-select/coffee-select.component.html',
  styleUrls: ['./coffee-select/coffee-select.component.css']
})
export class CoffeeSelectComponent implements OnInit {

  coffee: Coffee

  constructor() { }

  ngOnInit() {
  }

}
