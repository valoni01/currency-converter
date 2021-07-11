import { TestBed } from '@angular/core/testing';
import { ConverterService } from './converter.service';
import { ConverterStateStore, CurrencyState } from './converter.store';

describe('Converter Data Store', () => {
  let datastore: ConverterStateStore;
  let mockedService = jasmine.createSpyObj(['convertLatest', 'convertByDate']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ConverterService,
          useValue: mockedService,
        },
      ],
    });
  });

  let data: CurrencyState = {
    state: {
      success: true,
      date: '2021-02-21',
      timestamp: '5839853',
      base: 'EUR',
      rates: {
        AED: 5.023852,
      },
    },
    currenctBaseCurrency: '',
    TargetCurrency: '',
    amount: 300,
  };
  beforeEach(() => {
    datastore = new ConverterStateStore(mockedService);
  });

  it('it should return data', () => {
    datastore.setState(data);
    datastore.vm$.subscribe((res) => expect(res).toEqual(data));
  });
});
