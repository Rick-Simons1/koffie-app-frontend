import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeEditFormComponent } from './coffee-edit-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { CoffeeService } from '../service/coffee.service';
import { selectedCoffeeService } from '../coffee-list/coffee-list.component';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { AlertService, AlertModule } from '../_alert';
import { Coffee } from '../model/coffee';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CoffeeEditFormComponent', () => {
  let component: CoffeeEditFormComponent;
  let fixture: ComponentFixture<CoffeeEditFormComponent>;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeeEditFormComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        AlertModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send succes msg', () => {
    var msg = '{"response":"succes"}'
    expect(component.sendAlertMsg(msg)).toBe("succesfully changed the coffee");
  });
  it('should send error msg', () => {
    var msg = '{"response":"nameExists"}'
    expect(component.sendAlertMsg(msg)).toBe("name already exists");
  });

});
