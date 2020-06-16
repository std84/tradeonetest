/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TnsChartService } from './tns-chart.service';

describe('Service: TnsChart', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TnsChartService]
    });
  });

  it('should ...', inject([TnsChartService], (service: TnsChartService) => {
    expect(service).toBeTruthy();
  }));
});
