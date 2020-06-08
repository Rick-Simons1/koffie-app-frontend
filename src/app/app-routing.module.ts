import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeeListComponent } from '../app/coffee-list/coffee-list.component';
import { CoffeeFormComponent } from '../app/coffee-form/coffee-form.component';
import { CoffeeEditFormComponent } from './coffee-edit-form/coffee-edit-form.component';
import { CoffeeOrderPageComponent } from './coffee-order-page/coffee-order-page.component';
import { OrderDetailListComponent } from './order-detail-list/order-detail-list.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserEditFormComponent } from './user-edit-form/user-edit-form.component';
import { UserEditPasswdComponent } from './user-edit-passwd/user-edit-passwd.component';



const routes: Routes = [
  { path: 'coffees', component: CoffeeListComponent },
  { path: 'addCoffee', component: CoffeeFormComponent },
  { path: 'editCoffee', component: CoffeeEditFormComponent },
  { path: 'orderCoffee', component: CoffeeOrderPageComponent },
  { path: 'orderDetails', component: OrderDetailListComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'account', component: UserPageComponent },
  { path: 'account/edit', component: UserEditFormComponent },
  { path: 'account/edit/password', component: UserEditPasswdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
