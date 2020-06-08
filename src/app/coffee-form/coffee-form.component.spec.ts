import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeFormComponent } from './coffee-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { CoffeeService } from '../service/coffee.service';
import { Coffee } from '../model/coffee';
import { AlertService, AlertModule } from '../_alert';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CoffeeFormComponent', () => {
  let component: CoffeeFormComponent;
  let fixture: ComponentFixture<CoffeeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeeFormComponent],
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
    fixture = TestBed.createComponent(CoffeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send succes msg', () => {
    var msg = '{"response":"succes"}'
    expect(component.sendAlertMsg(msg)).toBe("succesfully added the coffee");
  });
  it('should send error msg', () => {
    var msg = '{"response":"nameExists"}'
    expect(component.sendAlertMsg(msg)).toBe("coffee name already exists");
  });
});
