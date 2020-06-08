import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeFormComponent } from './coffee-form/coffee-form.component';
import { CoffeeService } from './service/coffee.service';
import { CoffeeEditFormComponent } from './coffee-edit-form/coffee-edit-form.component';
import { AlertModule } from './_alert';
import { CoffeeOrderPageComponent, CoffeeSelectComponent } from './coffee-order-page/coffee-order-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderdetailService } from './service/orderdetail.service';
import { OrderDetailListComponent } from './order-detail-list/order-detail-list.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserEditFormComponent } from './user-edit-form/user-edit-form.component';
import { UserEditPasswdComponent } from './user-edit-passwd/user-edit-passwd.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeListComponent,
    CoffeeFormComponent,
    CoffeeEditFormComponent,
    CoffeeOrderPageComponent,
    CoffeeSelectComponent,
    OrderDetailListComponent,
    RegisterPageComponent,
    LoginPageComponent,
    UserPageComponent,
    UserEditFormComponent,
    UserEditPasswdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AlertModule,
    MatDialogModule,
    BrowserAnimationsModule
    
  ],
  providers: [CoffeeService, OrderdetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
