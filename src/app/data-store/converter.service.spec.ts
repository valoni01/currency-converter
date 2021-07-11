import { TestBed } from '@angular/core/testing';
import { ConverterService } from './converter.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ConverterService', () => {
  let service: ConverterService;
  let httMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConverterService],
    });
    service = TestBed.inject(ConverterService);
    httMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should return currency data', () => {
    const res = {
      success: true,
      timestamp: 1387929599,
      historical: true,
      base: 'EUR',
      rates: {
        AED: 5.023852,
      },
    };
    service
      .convertLatest({ base: 'EUR', symbols: '', amount: '' })
      .subscribe((res) => {
        expect(res).toEqual(res);
      });
    const req = httMock.expectOne(
      'http://api.exchangeratesapi.io/v1/latest?base=EUR&symbols=,USD,EUR,AED,CAD'
    );
    expect(req.request.method).toBe('GET');
    req.flush(res);
  });

  it('it should return currency data', () => {
    const res = {
      success: true,
      timestamp: 1387929599,
      historical: true,
      date: '2013-12-24',
      base: 'EUR',
      rates: {
        AED: 5.023852,
      },
    };
    const date = '2021-02-03';
    service
      .convertByDate({ base: 'EUR', symbols: '', amount: '', date })
      .subscribe((res) => {
        expect(res).toEqual(res);
      });
    const req = httMock.expectOne(
      `http://api.exchangeratesapi.io/v1/${date}?base=EUR&symbols=,USD,EUR,AED,CAD`
    );
    expect(req.request.method).toBe('GET');
    req.flush(res);
  });
});
