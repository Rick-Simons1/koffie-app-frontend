import { TestBed } from '@angular/core/testing';

import { OrderdetailService } from './orderdetail.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OrderdetailService', () => {
  let service: OrderdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(OrderdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
