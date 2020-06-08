import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeEditFormComponent } from './coffee-edit-form.component';

describe('CoffeeEditFormComponent', () => {
  let component: CoffeeEditFormComponent;
  let fixture: ComponentFixture<CoffeeEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeEditFormComponent ]
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
});
