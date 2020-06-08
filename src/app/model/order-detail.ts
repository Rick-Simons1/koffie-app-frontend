import { Order } from './order';

export class OrderDetail {
  orderDetailId: number;
  order: Order;
  coffeeId: number;
  coffeeName: string;
  amountOfSugar: number;
  amountOfMilk: number;
  coffeeCode: string;
  placedByUserId: string;
}
