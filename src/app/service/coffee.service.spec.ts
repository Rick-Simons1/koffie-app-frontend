import { TestBed } from '@angular/core/testing';

import { CoffeeService } from './coffee.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CoffeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
  }));

  it('should be created', () => {
    const service: CoffeeService = TestBed.get(CoffeeService);
    expect(service).toBeTruthy();
  });
});
